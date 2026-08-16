import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { scoreRun } from '../src/index.mjs';

const mission = JSON.parse(await readFile('packages/mission-schema/examples/northstar-sales-drop.v1.json', 'utf8'));
const strongEvents = [
  { type: 'artifact.opened', artifactId: 'revenue-export', atSecond: 18 },
  { type: 'artifact.opened', artifactId: 'renewal-log', atSecond: 54 },
  { type: 'artifact.opened', artifactId: 'pricing-memo', atSecond: 91 },
  { type: 'claim.flagged', claimId: 'price-increased-22', artifactId: 'pricing-memo', atSecond: 133 },
  { type: 'mistake.detected', mistakeId: 'ai-price-causation', atSecond: 135 },
  { type: 'mistake.corrected', mistakeId: 'ai-price-causation', atSecond: 182 },
  { type: 'ai.message.sent', atSecond: 143 }
];
const strongSubmission = {
  choiceId: 'enterprise-renewal-failure',
  actionConceptIds: ['protect-upcoming-renewals', 'fix-implementation-handoff'],
  citedArtifactIds: ['renewal-log', 'customer-calls'],
  communicationSignals: { clearCause: true, specificAction: true },
  submittedAtSecond: 258,
  runIntegrity: { completeEventLog: true, missionHash: 'fixture-hash' }
};

test('strong verified run scores highly and remains explainable', () => {
  const result = scoreRun(mission, strongEvents, strongSubmission);
  assert.equal(result.subscores.outcome, 100);
  assert.equal(result.subscores.verification, 100);
  assert.equal(result.subscores.recovery, 100);
  assert.ok(result.weightedScore >= 90);
  assert.equal(result.comparable, true);
});

test('accepting the planted AI claim lowers key scores', () => {
  const result = scoreRun(mission, [{ type: 'ai.message.sent', atSecond: 20 }], {
    ...strongSubmission,
    choiceId: 'pricing-backlash',
    actionConceptIds: ['reverse-price-change'],
    citedArtifactIds: ['dashboard'],
    submittedAtSecond: 80
  });
  assert.equal(result.subscores.verification, 0);
  assert.equal(result.subscores.recovery, 0);
  assert.ok(result.weightedScore < 60);
});

test('fast wrong answers cannot farm efficiency', () => {
  const result = scoreRun(mission, [], {
    choiceId: 'reporting-only', actionConceptIds: [], citedArtifactIds: [],
    communicationSignals: { clearCause: false, specificAction: false },
    submittedAtSecond: 12,
    runIntegrity: { completeEventLog: true, missionHash: 'fixture-hash' }
  });
  assert.ok(result.subscores.efficiency <= 60);
  assert.ok(result.weightedScore < 50);
});

test('identical inputs produce identical output', () => {
  assert.deepEqual(scoreRun(mission, strongEvents, strongSubmission), scoreRun(mission, strongEvents, strongSubmission));
});
