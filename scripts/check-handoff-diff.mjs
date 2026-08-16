import { execFileSync } from 'node:child_process';

const baseSha = process.env.BASE_SHA?.trim();
if (!baseSha || /^0+$/.test(baseSha)) {
  console.log('Handoff diff check skipped: no comparable base SHA.');
  process.exit(0);
}

const git = (...args) => execFileSync('git', args, { encoding: 'utf8' }).trim();

try {
  git('cat-file', '-e', `${baseSha}^{commit}`);
} catch {
  throw new Error(`Handoff diff check cannot resolve base commit ${baseSha}. Use a full checkout history.`);
}

const changedFiles = git('diff', '--name-only', `${baseSha}..HEAD`)
  .split('\n')
  .map((path) => path.trim())
  .filter(Boolean);

if (changedFiles.length === 0) {
  console.log('Handoff diff check passed: no changed files.');
  process.exit(0);
}

const required = ['docs/agent/HANDOFF.md', 'docs/agent/RUN_LOG.md'];
const missing = required.filter((path) => !changedFiles.includes(path));

if (missing.length > 0) {
  throw new Error(
    `Meaningful repository changes must update the living handoff and run log. Missing: ${missing.join(', ')}`
  );
}

console.log(`Handoff diff check passed (${changedFiles.length} changed files).`);
