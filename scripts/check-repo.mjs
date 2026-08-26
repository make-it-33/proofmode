import { access, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const requiredFiles = [
  "AGENTS.md", "agent.md", "README.md", "package.json", "package-lock.json", ".nvmrc", ".devcontainer/devcontainer.json",
  "apps/web/index.html", "apps/web/vite.config.ts", "apps/web/playwright.config.ts", "apps/web/src/main.tsx",
  "apps/web/src/arena.css", "apps/web/src/lock-choice.css", "apps/web/src/light-surface-contrast.css", "apps/web/src/website.css", "apps/web/src/today.css", "apps/web/src/onboarding.css", "apps/web/src/learn.css",
  "apps/web/src/routes/WebsiteRoute.tsx", "apps/web/src/routes/TodayRoute.tsx", "apps/web/src/routes/OnboardingRoute.tsx", "apps/web/src/routes/LearnRoute.tsx",
  "apps/web/src/domain/todayState.ts", "apps/web/src/domain/onboardingState.ts", "apps/web/src/domain/learnState.ts", "apps/web/src/domain/practiceDebrief.ts",
  "apps/web/test/runState.test.ts", "apps/web/test/todayState.test.ts", "apps/web/test/onboardingState.test.ts", "apps/web/test/learnState.test.ts",
  "apps/web/e2e/player-shell.spec.ts", "apps/web/e2e/today-shell.spec.ts", "apps/web/e2e/onboarding-flow.spec.ts", "apps/web/e2e/learn-hub.spec.ts",
  "docs/agent/README.md", "docs/agent/APPROVALS.md", "docs/agent/HANDOFF.md", "docs/agent/QUALITY_BAR.md", "docs/agent/RUNBOOK.md", "docs/agent/RUN_LOG.md", "docs/agent/TOOLING.md", "docs/agent/WORKFLOW.md",
  "docs/product/APP_MASTER_SPEC.md", "docs/product/PAGE_AND_SECTION_SPECS.md", "docs/product/PRODUCT_VISION.md", "docs/product/CORE_LOOP_OPTIONS_V1.md", "docs/product/DESIGN_APPROVAL_GATE.md", "docs/product/GAME_SYSTEM.md", "docs/product/MISSION_AUTHORING.md", "docs/product/YOUTH_PRIVACY_BASELINE.md",
  "docs/architecture/SYSTEM_ARCHITECTURE.md", "docs/architecture/SECURITY_THREAT_MODEL.md",
  "docs/design/README.md", "docs/design/CASEFILE_GATE3_V1.md", "docs/design/AGENT_ARENA_DIRECTION_V1.md", "docs/design/AGENT_ARENA_GATE3_V1.md", "docs/design/TODAY_DESKTOP_SHELL_V1.md", "docs/design/ONBOARDING_FIELD_BOUNDARY_V1.md", "docs/design/LEARN_HUB_V1.md",
  "docs/roadmap/FOUNDATION_ROADMAP.md", "docs/roadmap/BUILD_SEQUENCE_V1.md", "docs/roadmap/PRODUCT_IMPLEMENTATION_PLAN.md",
  "packages/player-contracts/src/index.mjs", "packages/player-contracts/test/player-contracts.test.mjs",
  "scripts/check-agent-governance.mjs", "scripts/check-hygiene.mjs", "scripts/validate-missions.mjs", "scripts/check-web-boundary.mjs", "scripts/check-web-budget.mjs",
];

const missing = [];
for (const relativePath of requiredFiles) {
  try { await access(path.join(root, relativePath)); } catch { missing.push(relativePath); }
}
if (missing.length) {
  console.error(`Repository check failed. Missing: ${missing.join(", ")}`);
  process.exit(1);
}

const packageJson = JSON.parse(await readFile(path.join(root, "package.json"), "utf8"));
if (packageJson.private !== true) throw new Error("package.json must remain private.");
if (packageJson.packageManager !== "npm@11.11.0") throw new Error("packageManager must remain npm@11.11.0.");
if (packageJson.engines?.node !== ">=24.14.1 <25") throw new Error("Node engine drifted from the approved range.");
if (packageJson.scripts?.["validate:missions"] !== "node scripts/validate-missions.mjs") throw new Error("validate:missions script drifted.");

const agentPointer = await readFile(path.join(root, "agent.md"), "utf8");
if (!agentPointer.includes("AGENTS.md") || agentPointer.length > 800) throw new Error("agent.md must remain a small pointer to AGENTS.md.");

const agents = await readFile(path.join(root, "AGENTS.md"), "utf8");
for (const contract of ["APP_MASTER_SPEC.md", "PAGE_AND_SECTION_SPECS.md", "PRODUCT_IMPLEMENTATION_PLAN.md", "Learning before competition", "main"]) {
  if (!agents.includes(contract)) throw new Error(`AGENTS.md is missing canonical contract: ${contract}`);
}

const handoff = await readFile(path.join(root, "docs/agent/HANDOFF.md"), "utf8");
for (const heading of ["## Current state", "## Active work", "## Progress", "## Opportunity and capture plan", "## Limitations and weak spots", "## Verification", "## Approval state", "## Next plan", "## Rollout and rollback", "## Next agent checklist"]) {
  if (!handoff.includes(heading)) throw new Error(`HANDOFF.md is missing ${heading}.`);
}

const viteConfig = await readFile(path.join(root, "apps/web/vite.config.ts"), "utf8");
if (!viteConfig.includes('outDir: "../../dist/web"')) throw new Error("Vite output must remain dist/web.");
const playwrightConfig = await readFile(path.join(root, "apps/web/playwright.config.ts"), "utf8");
if (!playwrightConfig.includes("cwd: repositoryRoot")) throw new Error("Playwright webServer must start from repository root.");

const mainSource = await readFile(path.join(root, "apps/web/src/main.tsx"), "utf8");
for (const stylesheet of ["lock-choice.css", "light-surface-contrast.css", "website.css", "today.css", "onboarding.css", "learn.css"]) {
  if (!mainSource.includes(`import "./${stylesheet}";`)) throw new Error(`${stylesheet} must be loaded.`);
}

const appSource = await readFile(path.join(root, "apps/web/src/app/App.tsx"), "utf8");
for (const route of ["<Route index element={<WebsiteRoute />} />", '<Route path="play" element={<PromiseRoute />} />', '<Route path="app" element={<TodayRoute />} />', '<Route path="app/onboarding" element={<OnboardingRoute />} />', '<Route path="app/learn" element={<LearnRoute />} />', '<Route path="app/learn/agentic-coding" element={<LearnRoute />} />']) {
  if (!appSource.includes(route)) throw new Error(`Required route contract missing: ${route}`);
}

console.log(`Repository check passed (${requiredFiles.length} required files).`);
