import { access, readFile } from 'node:fs/promises';

const requiredFiles = [
  'AGENTS.md',
  'docs/agent/README.md',
  'docs/agent/HANDOFF.md',
  'docs/agent/RUNBOOK.md',
  'docs/agent/WORKFLOW.md',
  'docs/agent/APPROVALS.md',
  'docs/agent/QUALITY_BAR.md',
  'docs/agent/TOOLING.md',
  'docs/agent/RUN_LOG.md'
];

await Promise.all(requiredFiles.map((path) => access(path)));

const requiredContent = {
  'AGENTS.md': [
    'docs/agent/HANDOFF.md',
    'Owner approval gates',
    'End-of-run protocol'
  ],
  'docs/agent/HANDOFF.md': [
    '# ProofMode handoff',
    'Last updated:',
    'Run ID:',
    '## Current state',
    '## Active work',
    '## Progress',
    '## Opportunity and capture plan',
    '## Limitations and weak spots',
    '## Next plan',
    '## Approval state',
    '## Verification',
    '## Next agent checklist'
  ],
  'docs/agent/APPROVALS.md': [
    '# Approval ledger',
    'Revision requested',
    'Not approved for production'
  ],
  'docs/agent/RUNBOOK.md': [
    '# Agent runbook',
    'Start-of-run protocol',
    'End-of-run protocol'
  ]
};

for (const [path, fragments] of Object.entries(requiredContent)) {
  const content = await readFile(path, 'utf8');
  for (const fragment of fragments) {
    if (!content.includes(fragment)) {
      throw new Error(`${path} is missing required content: ${fragment}`);
    }
  }
}

const handoff = await readFile('docs/agent/HANDOFF.md', 'utf8');
const lastUpdated = handoff.match(/Last updated: `([^`]+)`/);
if (!lastUpdated || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}$/.test(lastUpdated[1])) {
  throw new Error('HANDOFF.md must contain an ISO-8601 Last updated timestamp with timezone.');
}

const runId = handoff.match(/Run ID: `([^`]+)`/)?.[1];
if (!runId) throw new Error('HANDOFF.md must contain a Run ID.');

const runLog = await readFile('docs/agent/RUN_LOG.md', 'utf8');
if (!runLog.includes(`Run ID: \`${runId}\``)) {
  throw new Error(`RUN_LOG.md does not contain the current handoff Run ID: ${runId}`);
}

console.log(`Agent governance check passed (${requiredFiles.length} files, run ${runId}).`);
