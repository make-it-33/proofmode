# ProofMode handoff

Last updated: `2026-08-19T15:12:00+05:30`  
Run ID: `2026-08-19-owner-verification-path-recovery-v1`

## Current state

- Canonical branch: `main`.
- Technical recovery baseline before this handoff update: `ef848545ce6d15b03bc1d4cc4d6e08eb595a6819`.
- The owner completed a second exact Windows verification run from an up-to-date `main`.
- Repository, hygiene, governance, mission validation, all 21 unit/web tests, production TypeScript, and the Vite build passed.
- `npm run verify` then stopped because Vite emitted `dist/apps/web` while the security and budget checks inspect `dist/web`.
- Playwright could not start because its web server inherited `apps/web` as the working directory and tried to open a nonexistent `apps/web/package.json`.
- Both root/path defects are fixed in `ef848545ce6d15b03bc1d4cc4d6e08eb595a6819`, with repository regression checks.
- Full owner verification and Playwright/axe reruns remain pending after that fix.
- The current Agent Arena visual implementation remains revision-requested.
- Cinematic people + product remains selected for detailed exploration only; no new production design or media is approved.

## Active work

1. Pull `ef84854` on the owner Windows machine.
2. Rerun `npm run verify` and `npm run test:e2e` without reinstalling dependencies.
3. Preserve complete output and any Playwright/axe artifacts if a failure remains.
4. After technical verification is green, prepare the detailed Cinematic people + product desktop/mobile approval pack.
5. Do not change production visuals until that exact pack is approved.

## Progress

### Second owner verification evidence

Passed before the path failure:

- repository check: 40 required files;
- hygiene: 102 source files;
- agent governance: 9 files, run `2026-08-18-agent-arena-owner-review-v1`;
- mission validation: `northstar-sales-drop@1`;
- domain/contract tests: 10 passed, 0 failed;
- web tests: 11 passed across 2 files, 0 failed;
- production TypeScript check: passed;
- Vite build: 87 modules transformed in 4.12 seconds;
- built CSS: 37.43 kB raw / 7.93 kB gzip;
- built JavaScript: 276.64 kB raw / 85.34 kB gzip.

The emitted CSS and JavaScript figures are below the declared 25 kB and 180 kB gzip limits, but the official budget script did not execute because verification stopped at the boundary path error.

### Diagnosed failures

1. `check:web-boundary` expected `dist/web`, but Vite emitted `dist/apps/web`.
2. Playwright’s configuration file lives under `apps/web`; without an explicit web-server working directory, `npm run dev:web` ran there and looked for `apps/web/package.json` instead of the root package.

These were repository configuration defects, not owner environment defects.

### Recovery commit

`ef848545ce6d15b03bc1d4cc4d6e08eb595a6819`:

- restores Vite output to the canonical `dist/web` directory used by the boundary and budget checks;
- resolves the repository root from `import.meta.url` in Playwright configuration;
- starts the Playwright web server with that explicit repository-root working directory;
- makes both Vite and Playwright config files required repository files;
- adds repository assertions for the canonical web output and Playwright working directory.

The dependency lock did not change.

### Creative direction

- Agent Arena implementation v1 remains a functional baseline but is not visually accepted.
- Cinematic people + product was selected for detailed exploration.
- The concept human image is exploratory only and is not in production.
- The detailed pack must use staged onboarding, low copy density, mature human ambition, real product behavior, purposeful media, static fallback, reduced motion, provenance, and measured budgets.

## Opportunity and capture plan

The immediate engineering opportunity is to close the owner-local verification loop cleanly before adding more surface area. After that, the creative opportunity is to make ProofMode feel like a serious path to AI capability rather than a brightly labeled training worksheet.

The selected direction should use one strong cinematic human/product story rather than many competing videos. Media must demonstrate the move from AI claim to evidence, correction, and defensible decision; essential interactions must remain independent of media.

## Limitations and weak spots

- The latest recovery has not yet been executed on the owner Windows environment.
- Official browser-boundary and built-budget success are pending, even though the reported bundle sizes are within limits.
- Playwright interactions and repository axe have not yet run after the root fix.
- Keyboard, focus, zoom, screen-reader, and final visual acceptance remain open.
- The current result remains a local behavior signal rather than authoritative scoring.
- No production image, video, motion, onboarding redesign, provider, personal-data flow, public launch, social/ranking, employer/school, payment, native app, or executable sandbox is approved.

## Next plan

Run from the repository root:

```powershell
git pull origin main
git status --short
npm run verify
npm run test:e2e
```

No `npm ci` is needed unless the existing installation becomes damaged.

Expected changes after pulling:

- repository check reports 42 required files;
- Vite builds to `dist/web`;
- boundary and budget checks can inspect the built output;
- Playwright starts the root `dev:web` command instead of looking for `apps/web/package.json`.

If any command fails, preserve all output plus screenshots, videos, error context, traces, and axe details. Fix the underlying issue and rerun the complete failed command.

If both commands pass, record the exact evidence and proceed to the selected Cinematic people + product Gate 3 approval artifact—not production implementation.

## Approval state

Approved and retained:

- ages 13+ consumer-first sequence;
- employer assessment only after consumer proof;
- React/TypeScript/Vite responsive web lead stack;
- private browser contracts and deterministic mock-AI boundary;
- `Scout -> Challenge -> Lock -> Result`, proof chain, fallible AI move, recovery, deliberate lock, local debrief, and replay concepts.

Selected for exploration only:

- Cinematic people + product;
- detailed desktop/mobile journey and concept-media approval pack.

Revision requested:

- Agent Arena implementation v1 visual execution;
- existing home composition, palette, guide density, copy density, and inline teaching model.

Not approved:

- replacement production UI;
- final images, video, audio, 3D, or materially new motion;
- onboarding or mission-mechanic changes;
- authoritative scoring, infrastructure/providers, expanded personal data, public launch, social/ranking, employer/school, payment, native, or sandbox scope.

## Verification

Owner-confirmed in the second run:

- repository, hygiene, governance, and mission validation passed;
- 10 domain/contract tests passed;
- 11 web tests passed;
- TypeScript passed;
- Vite production build passed;
- reported CSS and JavaScript gzip sizes were within current limits;
- verification failed only when the boundary script could not find the mismatched output directory;
- Playwright did not start because of the incorrect web-server working directory.

Recovery evidence:

- exact Vite, boundary, budget, Playwright, package, and CI configurations inspected;
- canonical historical/output expectation confirmed as `dist/web`;
- both configuration defects fixed with repository guards;
- recovery pushed to `main` with no dependency change.

Pending:

- owner-local complete `npm run verify` after `ef84854`;
- official boundary and budget pass;
- all five Playwright tests and axe pass;
- manual accessibility and visual review.

## Next agent checklist

1. Read `AGENTS.md`, this handoff, `APPROVALS.md`, `RUNBOOK.md`, `WORKFLOW.md`, and `QUALITY_BAR.md`.
2. Treat `main` as canonical and `ef84854` as the latest technical recovery before this handoff update.
3. Inspect the owner’s next complete verification and E2E output before claiming green status.
4. Do not ask for another dependency install unless evidence shows it is needed.
5. Keep Agent Arena visuals revision-requested and Cinematic people + product exploration-only.
6. Do not put concept media into production.
7. Update handoff, run log, issue evidence, and approval state after the next meaningful run.
