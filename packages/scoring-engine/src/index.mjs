const clamp = value => Math.max(0, Math.min(100, Math.round(value)));
const ratio = (value, total) => total <= 0 ? 1 : Math.max(0, Math.min(1, value / total));

/** Pure deterministic scoring. No network, model call, clock, or random input. */
export function scoreRun(mission, events, submission) {
  const config = mission.scoring;
  const elapsedSeconds = Math.max(0, submission.submittedAtSecond ?? mission.estimatedSeconds);
  const selectedChoiceScore = config.choiceScores[submission.choiceId] ?? 0;
  const actionConcepts = new Set(submission.actionConceptIds || []);
  const requiredConcepts = config.requiredActionConceptIds || [];
  const conceptCoverage = ratio(requiredConcepts.filter(id => actionConcepts.has(id)).length, requiredConcepts.length);
  const outcome = clamp(selectedChoiceScore * 0.7 + conceptCoverage * 30);

  const falseClaims = mission.claims.filter(claim => claim.truth === 'false');
  const requiredFalseClaims = falseClaims.filter(claim => config.requiredClaimIds.includes(claim.id));
  const flags = events.filter(event => event.type === 'claim.flagged');
  const flaggedIds = new Set(flags.map(event => event.claimId));
  const correctFlags = requiredFalseClaims.filter(claim => flaggedIds.has(claim.id)).length;
  const falsePositives = mission.claims.filter(claim => claim.truth === 'true' && flaggedIds.has(claim.id)).length;
  const validLinks = flags.filter(event => {
    const claim = mission.claims.find(item => item.id === event.claimId);
    return claim?.refutingArtifactIds?.includes(event.artifactId);
  }).length;
  const verification = clamp(ratio(correctFlags, requiredFalseClaims.length) * 75 + ratio(validLinks, requiredFalseClaims.length) * 25 - falsePositives * 15);

  const judgment = clamp(selectedChoiceScore);
  const aiCalls = events.filter(event => event.type === 'ai.message.sent').length;
  const timeRatio = elapsedSeconds / mission.estimatedSeconds;
  let efficiency = 100;
  if (timeRatio > 0.8) efficiency -= (timeRatio - 0.8) * 100;
  if (aiCalls > config.aiCallTarget) efficiency -= (aiCalls - config.aiCallTarget) * 7;
  if (outcome < 60) efficiency = Math.min(efficiency, 60);
  efficiency = clamp(efficiency);

  const citedArtifacts = new Set(submission.citedArtifactIds || []);
  const requiredCitations = config.requiredCitationArtifactIds || [];
  const hasClearCause = Boolean(submission.communicationSignals?.clearCause);
  const hasSpecificAction = Boolean(submission.communicationSignals?.specificAction);
  const communication = clamp((hasClearCause ? 30 : 0) + (hasSpecificAction ? 35 : 0) + ratio(requiredCitations.filter(id => citedArtifacts.has(id)).length, requiredCitations.length) * 35);

  const seededMistakes = mission.aiProfile.seededMistakeIds || [];
  const detected = new Set(events.filter(event => event.type === 'mistake.detected').map(event => event.mistakeId));
  const corrected = new Set(events.filter(event => event.type === 'mistake.corrected').map(event => event.mistakeId));
  const fullyRecovered = seededMistakes.filter(id => detected.has(id) && corrected.has(id)).length;
  const recovery = clamp(ratio(fullyRecovered, seededMistakes.length) * 100);

  const subscores = { outcome, verification, judgment, efficiency, communication, recovery };
  const weightedScore = clamp(Object.entries(config.weights).reduce((sum, [key, weight]) => sum + subscores[key] * weight, 0));
  const grade = weightedScore >= 92 ? 'S' : weightedScore >= 84 ? 'A' : weightedScore >= 72 ? 'B' : weightedScore >= 60 ? 'C' : 'D';
  return {
    missionId: mission.id,
    missionVersion: mission.version,
    engineVersion: '1.0.0',
    subscores,
    weightedScore,
    grade,
    comparable: Boolean(submission.runIntegrity?.completeEventLog && submission.runIntegrity?.missionHash),
    explanation: { correctChoice: submission.choiceId === config.expectedChoiceId, correctFlags, requiredFlags: requiredFalseClaims.length, falsePositives, actionConceptCoverage: conceptCoverage, elapsedSeconds, aiCalls }
  };
}
