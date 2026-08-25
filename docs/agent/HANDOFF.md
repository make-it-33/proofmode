# ProofMode handoff

Last updated: `2026-08-25T14:31:00+05:30`  
Run ID: `2026-08-25-today-broad-desktop-shell-v1`

## Current state

- Canonical branch: `main` at `4e137e86725cd9cbaa86923c65e044a2edd1082d`.
- Owner-verified functional rollback baseline: `b0025fa97b03d1228e601e52a82b3e9b5016352e`.
- Review branch: `app/today-desktop-shell-v1`.
- Draft implementation PR: `https://github.com/make-it-33/proofmode/pull/11`.
- Implementation head before this handoff commit: `d8303b5212f643ba9d571b91c4a323551c525478`.
- The owner approved the app blueprint and visual concept pack, authorized page-by-page implementation, retained the focused mobile direction, and requested a materially broader desktop composition.
- The first application slice is implemented at the unlinked `/app` review route.
- The public `Open app` action remains on `/play`; production routing and the public website are not switched by this slice.
- Keep PR #11 unmerged until owner visual review and an explicit decision on the unrelated pre-existing public-website contrast regression.

## Implemented in this slice

### Broad application shell

- Persistent 272 px desktop navigation rail at wide sizes.
- Main canvas up to 1,840 px using a 12-column composition.
- One dominant current-practice stage, a separate Proof Chain region, a full-width Agentic Coding path, and a full-width trust boundary.
- Desktop spacing and typography expand with the viewport rather than scaling a narrow mobile card stack.
- At 1,920 px, the measured main canvas is 1,648 px, the practice region is 1,134 px, and the Proof Chain region is 362 px.
- At 1,440 px, the measured main canvas is 1,168 px, the practice region is 705.39 px, and the Proof Chain region is 340.69 px.

### Focused mobile adaptation

- The rail becomes a five-item bottom navigation below 820 px.
- Content becomes a single-column sequence without page-level horizontal overflow.
- At 390 × 844, the practice and Proof Chain regions measure 366 px wide.
- Visible interactive targets measured at least 44 × 44 px; primary actions measured 324 × 52 px.

### Today page behavior

- `/app` renders Today; `/app/today` redirects to `/app`.
- `/play`, `/entry`, `/mission/northstar-sales-drop`, the public website routes, and `RunProvider` retain their existing contracts.
- The only live action opens the existing private practice path.
- Learn, Arena, Social, and Profile are visibly disabled; they do not simulate completed products.
- The page explains the Proof Chain and the five-part Agentic Coding curriculum path without claiming real progress or rank.
- Preview content is explicitly labeled `Preview data · not a rank` and `Bundled fixture · no upload`.

### Deterministic states and recovery

The allowlisted local `?state=` contract supports:

- `ready` — bundled fixture available;
- `empty` — no saved run, with a safe start action;
- `loading` — launch paused and `aria-busy` exposed;
- `offline` — bundled fixture remains available with a clear status;
- `error` — launch paused, with explicit retry to ready.

Unknown or hostile values fail closed to `ready` and are never rendered as content.

## Security and privacy boundary

- No API, model provider, database, storage, analytics, upload, arbitrary URL, user HTML, personal identifier, account, public rank, social graph, or code execution was added.
- No `dangerouslySetInnerHTML` or executable model output is used.
- Loading and unrecovered error states cannot open practice.
- The existing 13+ entry boundary remains in front of run creation.
- The UI warns against entering personal, school, account, health, financial, or third-party secrets.
- Targeted GitHub secret scanning was attempted but unavailable because GitHub Advanced Security is not enabled for this repository. Source/diff review found no credential, token, provider, endpoint, or environment-secret addition; do not represent this as an automated secret-scan pass.
- Live accounts, identity, authoritative rankings, public social data, messaging, model calls, personal-data collection, native distribution, and provider-backed functionality remain separate approval and threat-model gates.

## Accessibility and responsive evidence

- One page-level `h1` and one `main`.
- Semantic navigation, lists, definitions, statuses, alert, links, and buttons.
- Keyboard traversal and visible focus passed isolated browser QA.
- `prefers-reduced-motion` reduces Today animation and transitions to `0s`.
- Forced-colors control borders are present.
- 960 px zoom-equivalent QA stacked the practice and Proof Chain at 802.75 px without overflow.
- CI axe findings introduced by Today were repaired: dim panel labels and blue/coral proof codes now meet WCAG 2 A/AA checks.
- Final CI browser summary at implementation head: eight tests passed; all four Today tests passed, including axe, desktop breadth, deterministic states/retry, 390 px targets/overflow, and reduced motion.

## Verification

### Local isolated QA

```text
Chromium findings: 0
Console errors: 0
Page errors: 0
Duplicate IDs: 0
Desktop/mobile/960px horizontal overflow: 0
Visible controls below 44 × 44 px: 0
State matrix and retry: passed
Reduced-motion durations: 0s
Preview JavaScript: 209,678 bytes raw / 64,804 bytes gzip
Preview CSS: 20,793 bytes raw / 4,805 bytes gzip
New media, font, and runtime dependencies: 0
```

### Authoritative repository CI

Run: `32829407801`

```text
verify: passed
- repository and governance checks
- mission validation
- unit/domain/web tests
- TypeScript
- Vite production build
- web boundary
- JavaScript/CSS/media budgets

browser: 8 passed, 1 failed
- Today suite: 4/4 passed, including WCAG 2 A/AA axe
- Existing player-shell website axe test: failed on pre-existing public-site contrast nodes
```

The remaining browser failure is not in Today source or its tests. It reproduces the known public-website contrast regression in `apps/web/e2e/player-shell.spec.ts` (for example `.pm-product-bar > span` at 3.39:1 and code-line labels at 1.96:1). Do not weaken or skip the assertion. Repair the approved V6 public website in a separately reviewed accessibility change, or obtain owner approval to include that repair before merging this PR.

## Changed production and verification surfaces

- `apps/web/src/domain/todayState.ts`
- `apps/web/src/routes/TodayRoute.tsx`
- `apps/web/src/today.css`
- `apps/web/src/app/App.tsx`
- `apps/web/src/main.tsx`
- `apps/web/src/light-surface-contrast.css`
- `apps/web/test/todayState.test.ts`
- `apps/web/e2e/today-shell.spec.ts`
- `apps/web/playwright.config.ts`
- `docs/design/TODAY_DESKTOP_SHELL_V1.md`
- `docs/agent/APPROVALS.md`
- `scripts/check-repo.mjs`

## Rollout and rollback

- Rollout remains an unlinked `/app` review route on a draft PR.
- Do not redirect the public website CTA from `/play` to `/app` in this slice.
- Do not merge until the owner reviews desktop and mobile evidence.
- Roll back by removing the `/app` route, Today source/state/style/tests, and Today-specific contrast rules. No migration or persisted state is involved.

## Next plan

1. Owner reviews the broad desktop Today implementation in PR #11 against the approved concept.
2. Resolve the pre-existing public-site contrast regression without simplifying or redesigning the approved V6 website.
3. Re-run the complete browser suite and require a green result before merge.
4. After Today approval, build in dependency order:
   1. onboarding and field boundary;
   2. Learn path;
   3. first focused lesson;
   4. guided Proof Chain checkpoint;
   5. result and replay;
   6. Profile/Settings scaffolding;
   7. Arena after fairness prerequisites;
   8. Social after youth-safety/privacy prerequisites.
5. Keep native installers, signing, updater infrastructure, real AI, accounts, rankings, messaging, and public social data out of scope until separately approved.

## Next agent checklist

1. Read `AGENTS.md`, this handoff, `APPROVALS.md`, `RUNBOOK.md`, `WORKFLOW.md`, `QUALITY_BAR.md`, and `docs/design/TODAY_DESKTOP_SHELL_V1.md`.
2. Start from PR #11 and current branch head; do not rebuild the Today page from an older compact concept.
3. Preserve the 272 px rail, up-to-1,840 px canvas, dominant practice stage, separate Proof Chain, full-width path, and focused mobile composition.
4. Preserve `/play` and all existing mission contracts.
5. Keep the PR draft and unmerged until owner review.
6. Do not suppress the existing website axe failure; repair it as a real accessibility issue.
7. Update this handoff, the run log, issue evidence, and the PR description after any subsequent meaningful slice.
