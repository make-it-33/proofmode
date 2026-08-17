export const PUBLIC_CONTRACT_VERSION = '1.0.0';

export const PLAYER_STATE_IDS = Object.freeze([
  'age-check',
  'under-13',
  'ready',
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
  'submitting',
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
]);

const FORBIDDEN_BROWSER_KEYS = new Set([
  'aiprofile',
  'baseline',
  'choicescores',
  'claims',
  'expectedchoiceid',
  'refutingartifactids',
  'requiredactionconceptids',
  'requiredcitationartifactids',
  'requiredclaimids',
  'scoring',
  'seededmistakeids',
  'supportingartifactids',
  'truth',
  'weights'
]);

function invariant(condition, message) {
  if (!condition) throw new TypeError(message);
}

function isPlainObject(value) {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

function normalizeKey(key) {
  return key.replace(/[^a-z0-9]/gi, '').toLowerCase();
}

function readString(value, label) {
  invariant(typeof value === 'string' && value.trim().length > 0, `${label} must be a non-empty string.`);
  return value;
}

function readStringArray(value, label) {
  invariant(Array.isArray(value), `${label} must be an array.`);
  return value.map((item, index) => readString(item, `${label}[${index}]`));
}

function cloneJson(value, label) {
  let serialized;
  try {
    serialized = JSON.stringify(value);
  } catch {
    throw new TypeError(`${label} must be JSON serializable.`);
  }
  invariant(serialized !== undefined, `${label} must be JSON serializable.`);
  return JSON.parse(serialized);
}

function deepFreeze(value) {
  if (value && typeof value === 'object' && !Object.isFrozen(value)) {
    Object.freeze(value);
    for (const child of Object.values(value)) deepFreeze(child);
  }
  return value;
}

function assertUniqueIds(items, label) {
  const ids = new Set();
  for (const [index, item] of items.entries()) {
    invariant(isPlainObject(item), `${label}[${index}] must be an object.`);
    const id = readString(item.id, `${label}[${index}].id`);
    invariant(!ids.has(id), `${label} contains duplicate id: ${id}.`);
    ids.add(id);
  }
}

/**
 * Rejects fields that would expose hidden truth, scoring annotations, or
 * executable/non-JSON values to a browser bundle.
 */
export function assertBrowserSafe(value, path = '$') {
  if (value === null || typeof value === 'string' || typeof value === 'boolean') return value;
  if (typeof value === 'number') {
    invariant(Number.isFinite(value), `${path} must contain only finite numbers.`);
    return value;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => assertBrowserSafe(item, `${path}[${index}]`));
    return value;
  }

  invariant(isPlainObject(value), `${path} must contain only plain JSON objects.`);
  for (const [key, child] of Object.entries(value)) {
    const normalized = normalizeKey(key);
    invariant(!FORBIDDEN_BROWSER_KEYS.has(normalized), `${path}.${key} is forbidden in browser payloads.`);
    invariant(!['__proto__', 'constructor', 'prototype'].includes(key), `${path}.${key} is not a safe object key.`);
    assertBrowserSafe(child, `${path}.${key}`);
  }
  return value;
}

/** Validates the deterministic mission contract that the web app may consume. */
export function assertPublicMissionPayload(payload) {
  assertBrowserSafe(payload);
  invariant(isPlainObject(payload), 'Public mission payload must be an object.');
  invariant(payload.contractVersion === PUBLIC_CONTRACT_VERSION, `Unsupported contract version: ${payload.contractVersion}.`);

  const mission = payload.mission;
  invariant(isPlainObject(mission), 'mission must be an object.');
  readString(mission.id, 'mission.id');
  readString(mission.slug, 'mission.slug');
  invariant(Number.isInteger(mission.version) && mission.version > 0, 'mission.version must be a positive integer.');
  readString(mission.category, 'mission.category');
  readString(mission.mechanic, 'mission.mechanic');
  readString(mission.difficulty, 'mission.difficulty');
  readString(mission.caseCode, 'mission.caseCode');
  invariant(Number.isInteger(mission.durationSeconds) && mission.durationSeconds > 0, 'mission.durationSeconds must be a positive integer.');
  readStringArray(mission.skills, 'mission.skills');

  invariant(isPlainObject(mission.brief), 'mission.brief must be an object.');
  readString(mission.brief.objective, 'mission.brief.objective');
  readStringArray(mission.brief.submissionContract, 'mission.brief.submissionContract');
  readStringArray(mission.brief.nonGoals, 'mission.brief.nonGoals');

  invariant(Array.isArray(payload.artifacts) && payload.artifacts.length > 0, 'artifacts must be a non-empty array.');
  assertUniqueIds(payload.artifacts, 'artifacts');
  for (const [index, artifact] of payload.artifacts.entries()) {
    readString(artifact.title, `artifacts[${index}].title`);
    readString(artifact.kind, `artifacts[${index}].kind`);
    invariant(isPlainObject(artifact.content), `artifacts[${index}].content must be an object.`);
  }

  invariant(Array.isArray(payload.choices) && payload.choices.length >= 2, 'choices must contain at least two options.');
  assertUniqueIds(payload.choices, 'choices');
  payload.choices.forEach((choice, index) => readString(choice.label, `choices[${index}].label`));

  invariant(isPlainObject(payload.ai), 'ai must be an object.');
  invariant(payload.ai.availability === 'optional', 'ai.availability must be optional for this contract.');
  invariant(payload.ai.mode === 'deterministic-mock', 'ai.mode must be deterministic-mock for issue #3.');
  invariant(payload.ai.startsBlank === true, 'ai.startsBlank must be true.');
  invariant(Number.isInteger(payload.ai.maxMessages) && payload.ai.maxMessages >= 0, 'ai.maxMessages must be a non-negative integer.');
  readString(payload.ai.privacyNotice, 'ai.privacyNotice');

  invariant(isPlainObject(payload.privacy), 'privacy must be an object.');
  invariant(payload.privacy.minimumAge === 13, 'privacy.minimumAge must be 13 for Phase 1.');
  invariant(payload.privacy.accountRequired === false, 'The deterministic preview must not require an account.');
  invariant(payload.privacy.personalDataCollected === false, 'The deterministic preview must not collect personal data.');
  invariant(payload.privacy.sharing === 'private', 'The deterministic preview must remain private.');

  invariant(isPlainObject(payload.integrity), 'integrity must be an object.');
  invariant(payload.integrity.source === 'deterministic-fixture', 'integrity.source must identify the deterministic fixture.');
  invariant(payload.integrity.comparable === false, 'Fixture runs must not claim competitive comparability.');

  return payload;
}

/** Clones, validates, and freezes a hand-authored public fixture. */
export function definePublicMissionPayload(payload) {
  return deepFreeze(assertPublicMissionPayload(cloneJson(payload, 'Public mission payload')));
}

/**
 * Server/test-side projection helper. Web code must import the resulting public
 * payload, never the private mission document passed to this function.
 */
export function createPublicMissionPayload(mission, publicArtifacts, options = {}) {
  invariant(isPlainObject(mission), 'Private mission must be an object.');
  invariant(Array.isArray(mission.artifacts), 'Private mission artifacts must be an array.');
  invariant(Array.isArray(mission.choices), 'Private mission choices must be an array.');
  invariant(Array.isArray(publicArtifacts), 'Public artifacts must be an array.');

  assertUniqueIds(mission.artifacts, 'Private mission artifacts');
  assertUniqueIds(publicArtifacts, 'Public artifacts');
  const publicArtifactMap = new Map(publicArtifacts.map((artifact) => [artifact.id, artifact]));
  invariant(publicArtifactMap.size === mission.artifacts.length, 'Public artifacts must match the private mission artifact set exactly.');

  const projectedArtifacts = mission.artifacts.map((artifact, index) => {
    const publicArtifact = publicArtifactMap.get(artifact.id);
    invariant(publicArtifact, `Missing public content for artifact: ${artifact.id}.`);
    invariant(Object.prototype.hasOwnProperty.call(publicArtifact, 'content'), `Public artifact ${artifact.id} is missing content.`);
    return {
      id: readString(artifact.id, `mission.artifacts[${index}].id`),
      title: readString(artifact.title, `mission.artifacts[${index}].title`),
      kind: readString(artifact.type, `mission.artifacts[${index}].type`),
      content: cloneJson(publicArtifact.content, `Public artifact ${artifact.id} content`)
    };
  });

  const aiBudget = options.aiBudget ?? 6;
  invariant(Number.isInteger(aiBudget) && aiBudget >= 0 && aiBudget <= 20, 'aiBudget must be an integer between 0 and 20.');

  return definePublicMissionPayload({
    contractVersion: PUBLIC_CONTRACT_VERSION,
    mission: {
      id: readString(mission.id, 'mission.id'),
      slug: readString(mission.slug, 'mission.slug'),
      version: mission.version,
      category: readString(mission.category, 'mission.category'),
      mechanic: readString(mission.mechanic, 'mission.mechanic'),
      difficulty: readString(mission.difficulty, 'mission.difficulty'),
      durationSeconds: mission.estimatedSeconds,
      caseCode: readString(options.caseCode ?? mission.slug.toUpperCase(), 'caseCode'),
      skills: readStringArray(options.skills ?? [], 'skills'),
      brief: {
        objective: readString(mission.brief?.objective, 'mission.brief.objective'),
        submissionContract: readStringArray(mission.brief?.submissionContract, 'mission.brief.submissionContract'),
        nonGoals: readStringArray(mission.brief?.nonGoals, 'mission.brief.nonGoals')
      }
    },
    artifacts: projectedArtifacts,
    choices: mission.choices.map((choice, index) => ({
      id: readString(choice.id, `mission.choices[${index}].id`),
      label: readString(choice.label, `mission.choices[${index}].label`)
    })),
    ai: {
      availability: 'optional',
      mode: 'deterministic-mock',
      startsBlank: true,
      maxMessages: aiBudget,
      privacyNotice: 'Do not enter personal, school, account, health, financial, or third-party secrets.'
    },
    privacy: {
      minimumAge: 13,
      accountRequired: false,
      personalDataCollected: false,
      sharing: 'private'
    },
    integrity: {
      source: 'deterministic-fixture',
      comparable: false
    }
  });
}

/** Creates a deterministic browser-state fixture with the same safety checks. */
export function definePlayerState(state, details = {}) {
  invariant(PLAYER_STATE_IDS.includes(state), `Unknown player state: ${state}.`);
  const safeDetails = cloneJson(details, 'Player state details');
  assertBrowserSafe(safeDetails, '$.details');
  return deepFreeze({ state, details: safeDetails });
}
