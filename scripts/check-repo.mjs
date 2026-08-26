import { access, readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const requiredFiles = [
  "AGENTS.md",
  "README.md",
  "package.json",
  "package-lock.json",
  ".nvmrc",
  ".devcontainer/devcontainer.json",
  "apps/web/index.html",
  "apps/web/vite.config.ts",
  "apps/web/playwright.config.ts",
  "apps/web/src/main.tsx",
  "apps/web/src/arena.css",
  "apps/web/src/lock-choice.css",
  "apps/web/src/light-surface-contrast.css",
  "apps/web/src/website.css",
  "apps/web/src/today.css",
  "apps/web/src/onboarding.css",
  "apps/web/src/routes/WebsiteRoute.tsx",
  "apps/web/src/routes/TodayRoute.tsx",
  "apps/web/src/routes/OnboardingRoute.tsx",
  "apps/web/src/domain/todayState.ts",
  "apps/web/src/domain/onboardingState.ts",
  "apps/web/src/domain/practiceDebrief.ts",
  "apps/web/test/runState.test.ts",
  "apps/web/test/todayState.test.ts",
  "apps/web/test/onboardingState.test.ts",
  "apps/web/e2e/player-shell.spec.ts",
  "apps/web/e2e/today-shell.spec.ts",
  "apps/web/e2e/onboarding-flow.spec.ts",
  "docs/agent/APPROVALS.md",
  "docs/agent/HANDOFF.md",
  "docs/agent/QUALITY_BAR.md",
  "docs/agent/RUNBOOK.md",
  "docs/agent/RUN_LOG.md",
  "docs/agent/TOOLING.md",
  "docs/agent/WORKFLOW.md",
  "docs/product/PRODUCT_VISION.md",
  "docs/product/CORE_LOOP_OPTIONS_V1.md",
  "docs/product/DESIGN_APPROVAL_GATE.md",
  "docs/product/GAME_SYSTEM.md",
  "docs/product/MISSION_AUTHORING.md",
  "docs/product/YOUTH_PRIVACY_BASELINE.md",
  "docs/architecture/SYSTEM_ARCHITECTURE.md",
  "docs/architecture/SECURITY_THREAT_MODEL.md",
  "docs/design/README.md",
  "docs/design/CASEFILE_GATE3_V1.md",
  "docs/design/AGENT_ARENA_DIRECTION_V1.md",
  "docs/design/AGENT_ARENA_GATE3_V1.md",
  "docs/design/TODAY_DESKTOP_SHELL_V1.md",
  "docs/design/ONBOARDING_FIELD_BOUNDARY_V1.md",
  "docs/roadmap/FOUNDATION_ROADMAP.md",
  "docs/roadmap/BUILD_SEQUENCE_V1.md",
  "packages/player-contracts/src/index.mjs",
  "packages/player-contracts/test/player-contracts.test.mjs",
  "scripts/check-agent-governance.mjs",
  "scripts/check-hygiene.mjs",
  "scripts/validate-missions.mjs",
  "scripts/check-web-boundary.mjs",
  "scripts/check-web-budget.mjs",
];

const missing = [];
for (const relativePath of requiredFiles) {
  try {
    await access(path.join(root, relativePath));
  } catch {
    missing.push(relativePath);
  }
}
if (missing.length > 0) {
  console.error(`Repository check failed. Missing: ${missing.join(", ")}`);
  process.exit(1);
}

const packageJson = JSON.parse(await readFile(path.join(root, "package.json"), "utf8"));
if (packageJson.private !== true) {
  console.error("Repository check failed. package.json must remain private.");
  process.exit(1);
}
if (packageJson.packageManager !== "npm@11.11.0") {
  console.error("Repository check failed. packageManager must be npm@11.11.0.");
  process.exit(1);
}
if (packageJson.engines?.node !== ">=24.14.1 <25") {
  console.error("Repository check failed. Node engine drifted from the approved 24.x range.");
  process.exit(1);
}
if (packageJson.scripts?.["validate:missions"] !== "node scripts/validate-missions.mjs") {
  console.error("Repository check failed. validate:missions must target scripts/validate-missions.mjs.");
  process.exit(1);
}

const viteConfig = await readFile(path.join(root, "apps", "web", "vite.config.ts"), "utf8");
if (!viteConfig.includes('outDir: "../../dist/web"')) {
  console.error("Repository check failed. Vite output must remain aligned with dist/web checks.");
  process.exit(1);
}
const playwrightConfig = await readFile(path.join(root, "apps", "web", "playwright.config.ts"), "utf8");
if (!playwrightConfig.includes("cwd: repositoryRoot")) {
  console.error("Repository check failed. Playwright webServer must start from the repository root.");
  process.exit(1);
}

const mainSource = await readFile(path.join(root, "apps", "web", "src", "main.tsx"), "utf8");
for (const stylesheet of ["lock-choice.css", "light-surface-contrast.css", "website.css", "today.css", "onboarding.css"]) {
  if (!mainSource.includes(`import "./${stylesheet}";`)) {
    console.error(`Repository check failed. ${stylesheet} must be loaded.`);
    process.exit(1);
  }
}

const appSource = await readFile(path.join(root, "apps", "web", "src", "app", "App.tsx"), "utf8");
if (!appSource.includes("<Route index element={<WebsiteRoute />} />") || !appSource.includes('<Route path="play" element={<PromiseRoute />} />')) {
  console.error("Repository check failed. Website and /play app boundary must be preserved.");
  process.exit(1);
}
if (!appSource.includes('<Route path="app" element={<TodayRoute />} />')) {
  console.error("Repository check failed. The approved Today review route must be preserved.");
  process.exit(1);
}
if (!appSource.includes('<Route path="app/onboarding" element={<OnboardingRoute />} />')) {
  console.error("Repository check failed. The approved onboarding review route must be preserved.");
  process.exit(1);
}

console.log(`Repository check passed (${requiredFiles.length} required files).`);
