import { access, readFile } from 'node:fs/promises';

const required = [
  'AGENTS.md',
  'README.md',
  'SECURITY.md',
  'docs/product/GAME_SYSTEM.md',
  'docs/product/SCORING_MODEL.md',
  'docs/architecture/SYSTEM_ARCHITECTURE.md',
  'docs/architecture/SECURITY_THREAT_MODEL.md',
  'packages/mission-schema/examples/northstar-sales-drop.v1.json'
];

for (const path of required) await access(path);

const forbidden = [/AKIA[0-9A-Z]{16}/, /-----BEGIN (?:RSA |EC )?PRIVATE KEY-----/, /sk-[A-Za-z0-9]{20,}/];
const sample = await readFile('.env.example', 'utf8');
for (const pattern of forbidden) {
  if (pattern.test(sample)) throw new Error(`Possible secret in .env.example: ${pattern}`);
}
console.log(`Repository check passed (${required.length} required files).`);
