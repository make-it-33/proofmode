import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import {
  PLAYER_STATE_IDS,
  assertBrowserSafe,
  assertPublicMissionPayload,
  createPublicMissionPayload,
  definePlayerState
} from '../src/index.mjs';
import { northstarPublicMission } from '../fixtures/northstar.public.mjs';

const privateMission = JSON.parse(
  await readFile('packages/mission-schema/examples/northstar-sales-drop.v1.json', 'utf8')
);

const publicArtifactContent = northstarPublicMission.artifacts.map(({ id, content }) => ({ id, content }));
const projectionOptions = {
  caseCode: 'NORTHSTAR / 03',
  skills: ['verification', 'judgment', 'communication'],
  aiBudget: 6
};

const forbiddenKeys = [
  'claims',
  'truth',
  'supportingArtifactIds',
  'refutingArtifactIds',
  'aiProfile',
  'seededMistakeIds',
  'scoring',
  'expectedChoiceId',
  'choiceScores',
  'requiredClaimIds',
  'requiredActionConceptIds',
  'requiredCitationArtifactIds',
  'weights',
  'baseline'
];

test('canonical browser fixture satisfies the public contract', () => {
  assert.equal(assertPublicMissionPayload(northstarPublicMission), northstarPublicMission);
  assert.equal(northstarPublicMission.privacy.minimumAge, 13);
  assert.equal(northstarPublicMission.privacy.personalDataCollected, false);
  assert.equal(northstarPublicMission.integrity.comparable, false);
});

test('projection is deterministic and matches the hand-authored browser fixture', () => {
  const first = createPublicMissionPayload(privateMission, publicArtifactContent, projectionOptions);
  const second = createPublicMissionPayload(privateMission, publicArtifactContent, projectionOptions);
  assert.deepEqual(first, second);
  assert.deepEqual(first, northstarPublicMission);
});

test('browser payload omits hidden truth and scoring annotations', () => {
  const serialized = JSON.stringify(northstarPublicMission);
  for (const key of forbiddenKeys) {
    assert.equal(serialized.includes(`"${key}"`), false, `browser payload leaked ${key}`);
  }
  assert.equal(Object.hasOwn(northstarPublicMission.mission, 'status'), false);
});

test('nested hidden fields and non-JSON values fail closed', () => {
  assert.throws(
    () => assertBrowserSafe({ artifact: { supportingArtifactIds: ['pricing-memo'] } }),
    /forbidden in browser payloads/
  );
  assert.throws(
    () => assertBrowserSafe({ artifact: { render: () => 'unsafe' } }),
    /plain JSON objects/
  );
});

test('public artifact set must exactly match the private mission', () => {
  assert.throws(
    () => createPublicMissionPayload(privateMission, publicArtifactContent.slice(1), projectionOptions),
    /match the private mission artifact set exactly/
  );
  assert.throws(
    () => createPublicMissionPayload(privateMission, [...publicArtifactContent, publicArtifactContent[0]], projectionOptions),
    /duplicate id/
  );
});

test('required success, failure, interruption, and recovery states are declared', () => {
  const requiredStates = [
    'age-check',
    'under-13',
    'loading',
    'empty',
    'active',
    'ai-empty',
    'offline',
    'ai-timeout',
    'rate-limited',
    'time-expired',
    'resume',
    'invalid-mission',
    'expired-run',
    'score-delayed',
    'complete',
    'replay',
    'unauthorized',
    'deletion-pending',
    'export-pending',
    'account-recovery',
    'unsupported-browser',
    'reduced-data',
    'maintenance'
  ];
  assert.deepEqual(requiredStates.filter((state) => !PLAYER_STATE_IDS.includes(state)), []);
  assert.deepEqual(definePlayerState('offline', { preserved: ['notes', 'citations'] }), {
    state: 'offline',
    details: { preserved: ['notes', 'citations'] }
  });
  assert.throws(() => definePlayerState('secret-admin-mode'), /Unknown player state/);
});
