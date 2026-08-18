import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ignoredDirectories = new Set([
  ".git",
  "node_modules",
  "dist",
  "test-results",
  "playwright-report",
  "coverage",
]);
const forbiddenBasenames = new Set([
  ".env",
  ".env.local",
  ".env.production",
  ".npmrc",
  "proofmode-lock-review.zip",
  "proofmode-lockgen.ps1",
]);
const forbiddenSuffixes = [".pem", ".p12", ".pfx"];
const textExtensions = new Set([
  ".css",
  ".html",
  ".js",
  ".json",
  ".md",
  ".mjs",
  ".ts",
  ".tsx",
  ".txt",
  ".yml",
  ".yaml",
]);

async function filesUnder(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await filesUnder(absolute)));
    else if (entry.isFile()) files.push(absolute);
  }
  return files;
}

const files = await filesUnder(root);
const failures = [];
for (const file of files) {
  const relative = path.relative(root, file).replaceAll(path.sep, "/");
  const basename = path.basename(file);
  if (
    forbiddenBasenames.has(basename) ||
    forbiddenSuffixes.some((suffix) => basename.toLowerCase().endsWith(suffix))
  ) {
    failures.push(`forbidden file: ${relative}`);
    continue;
  }

  const extension = path.extname(file).toLowerCase();
  const size = (await stat(file)).size;
  if (!textExtensions.has(extension) || size > 2_000_000) continue;
  const content = await readFile(file, "utf8");
  if (/^<<<<<<< .+$[\s\S]*?^=======$[\s\S]*?^>>>>>>> .+$/mu.test(content)) {
    failures.push(`unresolved merge conflict: ${relative}`);
  }
}

if (failures.length > 0) {
  console.error(`Hygiene check failed:\n- ${failures.join("\n- ")}`);
  process.exit(1);
}

console.log(`Hygiene check passed (${files.length} source files inspected).`);
