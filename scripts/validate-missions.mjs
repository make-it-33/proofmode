import { readFile } from 'node:fs/promises';

const path = 'packages/mission-schema/examples/northstar-sales-drop.v1.json';
const mission = JSON.parse(await readFile(path, 'utf8'));
const fail = message => { throw new Error(`${path}: ${message}`); };

for (const field of ['id', 'slug', 'version', 'category', 'mechanic', 'estimatedSeconds', 'artifacts', 'claims', 'choices', 'scoring']) {
  if (mission[field] === undefined) fail(`missing ${field}`);
}
if (!Number.isInteger(mission.version) || mission.version < 1) fail('version must be a positive integer');
if (mission.estimatedSeconds < 180 || mission.estimatedSeconds > 1200) fail('estimatedSeconds must be 180–1200');
const unique = (items, label) => {
  const ids = items.map(item => item.id);
  if (new Set(ids).size !== ids.length) fail(`${label} IDs must be unique`);
  return new Set(ids);
};
const artifactIds = unique(mission.artifacts, 'artifact');
const claimIds = unique(mission.claims, 'claim');
const choiceIds = unique(mission.choices, 'choice');
if (!choiceIds.has(mission.scoring.expectedChoiceId)) fail('expectedChoiceId does not exist');
for (const claim of mission.claims) {
  for (const id of claim.supportingArtifactIds || []) if (!artifactIds.has(id)) fail(`claim ${claim.id} references missing artifact ${id}`);
  for (const id of claim.refutingArtifactIds || []) if (!artifactIds.has(id)) fail(`claim ${claim.id} references missing artifact ${id}`);
}
for (const id of mission.scoring.requiredClaimIds) if (!claimIds.has(id)) fail(`required claim ${id} does not exist`);
const sum = Object.values(mission.scoring.weights).reduce((a, b) => a + b, 0);
if (Math.abs(sum - 1) > 1e-9) fail(`weights must sum to 1, found ${sum}`);
console.log(`Mission validation passed: ${mission.slug}@${mission.version}`);
