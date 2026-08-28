import { access, readFile, stat } from "node:fs/promises";

const requiredFiles = [
  "docs/handoff/README.md",
  "docs/handoff/CURRENT_STATE.md",
  "docs/handoff/PRODUCT_DIRECTION.md",
  "docs/handoff/PAGE_SYSTEM_MAP.md",
  "docs/handoff/UX_UI_SYSTEM.md",
  "docs/handoff/FUNCTION_AND_DATA_MAP.md",
  "docs/handoff/ROADMAP_V1_V2.md",
  "docs/handoff/BUSINESS_AND_PAYMENTS.md",
  "docs/handoff/DECISION_HISTORY.md",
  "docs/handoff/QA_RELEASE_HANDOFF.md",
  "docs/handoff/MEDIA_INVENTORY.md",
  "docs/handoff/GLOSSARY.md",
  "docs/handoff/media/README.md",
  "docs/handoff/media/proofmode-product-map.svg",
  "docs/handoff/media/proof-chain-walkthrough.svg",
  "docs/handoff/media/v1-v2-roadmap.svg",
  "docs/decisions/0008-no-competition-and-continuity-pack.md",
  "docs/archive/competition/README.md",
];

await Promise.all(requiredFiles.map((file) => access(file)));

const requiredIndexEntries = [
  "CURRENT_STATE.md",
  "PRODUCT_DIRECTION.md",
  "PAGE_SYSTEM_MAP.md",
  "UX_UI_SYSTEM.md",
  "FUNCTION_AND_DATA_MAP.md",
  "ROADMAP_V1_V2.md",
  "BUSINESS_AND_PAYMENTS.md",
  "DECISION_HISTORY.md",
  "QA_RELEASE_HANDOFF.md",
  "MEDIA_INVENTORY.md",
  "GLOSSARY.md",
];
const index = await readFile("docs/handoff/README.md", "utf8");
for (const entry of requiredIndexEntries) {
  if (!index.includes(entry)) throw new Error(`Handoff index is missing ${entry}.`);
}

const canonicalFiles = [
  "AGENTS.md",
  "README.md",
  "docs/agent/APPROVALS.md",
  "docs/agent/HANDOFF.md",
  "docs/agent/QUALITY_BAR.md",
  "docs/product/APP_MASTER_SPEC.md",
  "docs/product/PAGE_AND_SECTION_SPECS.md",
  "docs/product/PRODUCT_VISION.md",
  "docs/roadmap/PRODUCT_IMPLEMENTATION_PLAN.md",
  "docs/handoff/PRODUCT_DIRECTION.md",
  "docs/handoff/ROADMAP_V1_V2.md",
];
for (const file of canonicalFiles) {
  const content = (await readFile(file, "utf8")).toLowerCase();
  if (!content.includes("no competition")) {
    throw new Error(`${file} must state the no-competition product boundary.`);
  }
}

const pageSpec = await readFile("docs/product/PAGE_AND_SECTION_SPECS.md", "utf8");
for (const route of [
  "/app",
  "/app/onboarding",
  "/app/learn",
  "/app/learn/agentic-coding",
  "/app/learn/agentic-coding/outcome-before-delegating",
  "/app/checkpoint/outcome-before-delegating-v1",
  "/app/result/:runId",
  "/app/profile",
  "/app/settings",
]) {
  if (!pageSpec.includes(route)) throw new Error(`Page specification is missing ${route}.`);
}

const appSource = await readFile("apps/web/src/app/App.tsx", "utf8");
if (/app\/arena|path=["']arena|leaderboard/i.test(appSource)) {
  throw new Error("Active route composition must not expose competition routes.");
}

for (const file of [
  "docs/design/AGENT_ARENA_DIRECTION_V1.md",
  "docs/design/AGENT_ARENA_GATE3_V1.md",
  "docs/design/AGENT_ARENA_IMPLEMENTATION_REVIEW_V1.md",
  "docs/product/GAME_SYSTEM.md",
  "docs/product/SCORING_MODEL.md",
]) {
  const content = (await readFile(file, "utf8")).toLowerCase();
  if (!content.includes("superseded")) {
    throw new Error(`${file} must be clearly marked superseded.`);
  }
}

for (const file of [
  "docs/handoff/media/proofmode-product-map.svg",
  "docs/handoff/media/proof-chain-walkthrough.svg",
  "docs/handoff/media/v1-v2-roadmap.svg",
]) {
  const content = await readFile(file, "utf8");
  const info = await stat(file);
  if (!content.includes("<title") || !content.includes("<desc")) {
    throw new Error(`${file} must have SVG title and description.`);
  }
  if (info.size > 350 * 1024) {
    throw new Error(`${file} exceeds the 350 KiB documentation-media ceiling.`);
  }
}

const packageJson = JSON.parse(await readFile("package.json", "utf8"));
if (packageJson.scripts?.["check:handoff"] !== "node scripts/check-handoff-governance.mjs") {
  throw new Error("package.json must expose check:handoff.");
}
if (!packageJson.scripts?.check?.includes("check:handoff")) {
  throw new Error("The main check script must run check:handoff.");
}

console.log(
  `Handoff governance check passed (${requiredFiles.length} required files, ${canonicalFiles.length} canonical boundaries).`,
);
