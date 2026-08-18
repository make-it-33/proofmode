import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = path.join(root, "apps", "web", "src");
const distRoot = path.join(root, "dist", "web");
const forbiddenPathFragments = [
  `${path.sep}private${path.sep}`,
  `${path.sep}scoring-engine${path.sep}`,
  `${path.sep}mission-schema${path.sep}`,
];
const forbiddenTerms = [
  "requiredActionConceptIds",
  "requiredCitationArtifactIds",
  "requiredClaimIds",
  "seededMistakeIds",
  "expectedChoiceId",
  "choiceScores",
  "supportingArtifactIds",
  "refutingArtifactIds",
  "AI_API_KEY",
  "DATABASE_URL",
  "OPENAI_API_KEY",
  "ANTHROPIC_API_KEY",
];

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await filesUnder(absolute)));
    else files.push(absolute);
  }
  return files;
}

const sourceFiles = await filesUnder(sourceRoot);
for (const file of sourceFiles) {
  for (const fragment of forbiddenPathFragments) {
    if (file.includes(fragment)) {
      console.error(`Web boundary check failed: forbidden source path ${file}.`);
      process.exit(1);
    }
  }
}

const inspectable = [
  ...sourceFiles,
  ...(await filesUnder(distRoot)).filter((file) => /\.(?:js|mjs|cjs|html|map)$/u.test(file)),
];
for (const file of inspectable) {
  const content = await readFile(file, "utf8");
  for (const term of forbiddenTerms) {
    if (content.includes(term)) {
      console.error(`Web boundary check failed: ${term} appeared in ${path.relative(root, file)}.`);
      process.exit(1);
    }
  }
}

console.log(
  `Web boundary check passed (${sourceFiles.length} source files, ${inspectable.length - sourceFiles.length} built files).`,
);
