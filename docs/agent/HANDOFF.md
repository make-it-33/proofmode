# ProofMode handoff

Last updated: `2026-08-26T15:25:00+05:30`  
Run ID: `2026-08-25-onboarding-field-boundary-v1`

## Current state

- Canonical branch: `main` at `4e137e86725cd9cbaa86923c65e044a2edd1082d`.
- Owner-verified functional rollback baseline: `b0025fa97b03d1228e601e52a82b3e9b5016352e`.
- Today review branch: `app/today-desktop-shell-v1` at `5c9d5afb16e4648d45ef4a35090f1a95687e5dc7`.
- Today draft PR: `https://github.com/make-it-33/proofmode/pull/11`.
- Onboarding review branch: `app/onboarding-field-boundary-v1`.
- Onboarding stacked draft PR: `https://github.com/make-it-33/proofmode/pull/12`, based on the Today branch.
- The owner approved the app blueprint, page-by-page implementation, focused mobile direction, and broader desktop composition.
- The unlinked `/app/onboarding` route now implements the first-use promise, explicit 13+ boundary, goal, field, pace, comfort, and ready summary.
- The public `Open app` action remains on `/play`; no production redirect, account, persistence, provider, or personal-data behavior is included.
- Keep PRs #11 and #12 draft and unmerged until owner review.

## Active work

1. Present the onboarding desktop/mobile implementation and safety boundary for owner review.
2. Keep PR #12 stacked on PR #11 and unmerged.
3. Repair the pre-existing public-site axe contrast failure in a separately reviewed accessibility change; do not weaken the assertion.
4. Begin the Learn path only after the onboarding direction is reviewed.
5. Keep accounts, persistence, AI providers, rankings, social systems, messaging, payments, and native distribution behind separate approval gates.

## Progress

### Onboarding and field boundary

- Seven-step sequence: promise, age boundary, goal, field, pace, comfort, and ready.
- The learner makes one focal decision at a time and can revisit completed steps.
- Agentic Coding is the only selectable V1 field.
- Design, Business, and Research are disabled and explicitly labeled roadmap-only.
- Pace is framed as a recommendation with no streak loss, energy gate, or punishment.
- Comfort preferences include reduced motion, calmer timers, and spacious reading; they are not skill or cheating signals.
- The ready summary links to the existing `/play` checkpoint, which retains its separate `/entry` age boundary.

### Desktop and mobile composition

- Desktop uses `clamp(570px, 36vw, 700px)` for the persistent story/progress region and gives the remainder to the active workspace.
- At 1,920 px, measured widths were 691.19 px for story and 1,228.81 px for workspace.
- At 1,440 px, measured widths were 570 px and 870 px.
- At 960 px, measured widths were 330 px and 630 px without overflow.
- Below 820 px, the story becomes a compact product/progress header and the flow becomes single-column with a thumb-reachable action dock.
- At 390 × 844, document width matched the 390 px viewport and every visible link, button, and choice label measured at least 44 px.

### Age, privacy, and security boundary

- The flow asks only whether the learner is 13 or older; it does not request a birthday.
- No name, handle, school, exact location, contacts, occupation, health/disability data, prompt, upload, credential, or account data is requested.
- Under-13 selection creates no run or profile, asks for no additional information, and does not encourage changing the answer.
- Selections exist only in React component memory and disappear on refresh or close.
- No API, model call, database, storage, cookie, analytics event, public profile, rank, social graph, arbitrary URL, or code execution was added.
- Static typed content is rendered through React; no `dangerouslySetInnerHTML` or executable model output is used.
- Targeted source review found no credential-like pattern or external endpoint. GitHub Advanced Security remains unavailable, so do not claim an automated secret-scan pass.

### Deterministic states and recovery

The allowlisted local `?state=` contract supports:

- `ready` — normal local setup;
- `loading` — skeleton and `aria-busy`, with interaction paused;
- `offline` — clear status while the complete local flow remains available;
- `error` — alert and explicit retry, with controls paused until recovery.

Unknown or injected values fail closed to `ready`. All states declare no storage, personal-data exposure, or network request.

### Accessibility and responsive evidence

- One persistent page-level `h1` and one `main`; the current-step `h2` receives programmatic focus after transitions.
- Native radios and checkboxes, fieldsets, legends, progress navigation, status, alert, links, and buttons are used.
- Keyboard operation, visible focus, 44 px targets, 390 px overflow, 960 px zoom-equivalent layout, reduced motion, and forced-colors treatment are covered.
- Local Chromium QA reported no console errors, page errors, duplicate IDs, external links, overflow, or undersized visible controls.
- Reduced-motion animation and transition durations measured `0s`.
- GitHub CI ran all five onboarding Playwright tests successfully, including WCAG 2 A/AA axe.

## Opportunity and capture plan

This slice establishes a reusable first-use trust pattern before identity or persistence: explain the real product, ask only what is necessary, make availability honest, and keep safety boundaries explicit. Reuse the broad desktop/focused mobile composition, field truthfulness, deterministic recovery, and Proof Chain language in the Learn path. Do not build Arena before fairness prerequisites or Social before youth-safety/privacy prerequisites.

## Limitations and weak spots

- PR #12 is stacked on unmerged draft PR #11 and cannot merge independently.
- The aggregate browser job remains red because the inherited public V6/player-shell contrast assertion fails; onboarding itself passes.
- GitHub Advanced Security is unavailable, so automated targeted secret scanning could not run.
- The implementation is an unlinked local preview with no persistence, account, consent implementation, personal-data lifecycle, or launch-region policy.
- Agentic Coding content beyond the field boundary remains unimplemented.
- Desktop/mobile screenshots are local review evidence and are not production media.

## Verification

### Local isolated QA

```text
Chromium findings: 0
Console errors: 0
Page errors: 0
Duplicate IDs: 0
Desktop/mobile/960px horizontal overflow: 0
Visible controls below 44 × 44 px: 0
Eligible seven-step flow: passed
Under-13 safe exit: passed
Loading/offline/error/retry matrix: passed
Reduced-motion durations: 0s
Preview JavaScript: 66,006 bytes gzip
Preview CSS: 4,648 bytes gzip
New media, font, and runtime dependencies: 0
Credential-like patterns or external endpoints: 0
```

### Authoritative repository CI at implementation head

Run: `32955129948`

```text
verify: passed
- repository and governance checks
- mission validation
- unit/domain/web tests
- TypeScript
- Vite production build
- web boundary
- JavaScript/CSS/media budgets

browser: 13 passed, 1 failed
- Onboarding suite: 5/5 passed, including WCAG 2 A/AA axe
- Today suite remained passing
- Existing player-shell website axe test: failed on pre-existing public-site contrast nodes
```

The only browser failure remains outside onboarding source and tests. The known failing selectors include `.pm-product-bar > span` at 3.39:1 and code-line labels at 1.96:1. Do not suppress, skip, or weaken this assertion.

## Approval state

Approved for this incremental implementation:

- the app blueprint and page-by-page application development;
- the broader desktop workspace and focused mobile composition;
- the onboarding promise, explicit 13+ boundary, goal, Agentic Coding field boundary, pressure-free pace, and comfort preferences;
- deterministic private preview states;
- responsive, accessibility, privacy, security, recovery, and test coverage.

Still requires separate approval:

- live accounts, identity, consent implementation, personal-data collection, retention, export/deletion, or public beta;
- authoritative placement, ranks, matchmaking, leaderboards, social graphs, messaging, or public profiles;
- model providers, uploads, code execution, analytics, or backend infrastructure;
- monetization, employer/school access, native binaries, signing, or updater services;
- changing the public `Open app` destination from `/play`.

## Next plan

1. Owner reviews PR #12 and the onboarding desktop/mobile evidence.
2. Keep PR #12 stacked, draft, and unmerged.
3. Resolve the inherited public-site contrast regression separately without redesigning or simplifying the approved V6 site.
4. After onboarding review, build in dependency order:
   1. Learn path;
   2. first focused lesson;
   3. guided Proof Chain checkpoint;
   4. result and replay;
   5. Profile/Settings scaffolding;
   6. Arena after fairness prerequisites;
   7. Social after youth-safety/privacy prerequisites.
5. Keep native installers, signing, updater infrastructure, real AI, accounts, rankings, messaging, and public social data out of scope until separately approved.

## Rollout and rollback

- Rollout remains an unlinked `/app/onboarding` review route on a stacked draft PR.
- Do not redirect the public website CTA from `/play`.
- Do not persist onboarding choices or connect account/provider behavior in this slice.
- Do not merge until the owner reviews desktop, mobile, and age-boundary evidence.
- Roll back by removing the route, state module, stylesheet, tests, and design document. No migration or data cleanup is involved.

## Next agent checklist

1. Read `AGENTS.md`, this handoff, `APPROVALS.md`, `RUNBOOK.md`, `WORKFLOW.md`, `QUALITY_BAR.md`, `docs/design/TODAY_DESKTOP_SHELL_V1.md`, and `docs/design/ONBOARDING_FIELD_BOUNDARY_V1.md`.
2. Start from PR #12 for onboarding work; do not recreate it from an older compact concept.
3. Preserve the explicit 13+ boundary, no-persistence contract, Agentic Coding-only field truth, reversible choices, and broad desktop/focused mobile composition.
4. Preserve `/`, `/play`, `/entry`, `/mission/northstar-sales-drop`, `/app`, and `RunProvider` contracts.
5. Keep PRs #11 and #12 draft and unmerged until owner review.
6. Do not suppress the inherited public-site axe failure; repair it as a real accessibility issue in separately reviewed scope.
7. Update this handoff, the run log, issue evidence, and PR description after the next meaningful slice.
