# ProofMode handoff

Last updated: `2026-08-26T16:58:00+05:30`  
Run ID: `2026-08-26-learn-hub-v1`

## Current state

- Canonical branch before this slice: `main` at `2e87e4f83b065fa4d741ab9cb7c14eeac79c7c12`.
- PR #15 adds the visible Agentic Coding Learn hub and path; runtime candidate `817a007c739894c68892907ddcc7ee940ecc316c` passed `verify` and the full browser/axe suite.
- Public site: `https://make-it-33.github.io/proofmode/`.
- Current app routes: `/app`, `/app/onboarding`, `/app/learn`, and `/app/learn/agentic-coding` plus established redirects/trial/mission/public routes.
- Next dependency: the first interactive lesson, “Define the outcome before delegating.” Do not start Arena, Social, accounts, providers, payments, or native distribution first.

## Active work

1. Merge PR #15 after its final documentation-inclusive checks remain green.
2. Verify post-merge `main` and GitHub Pages.
3. Build the first focused lesson as the next isolated vertical slice.

## Progress

### Product direction

- Ages 13+, teenagers first; Agentic Coding is V1.
- Broad desktop, focused mobile; website and repeated-use app remain separate experiences.
- `Source → AI move → Verification → Human decision → Outcome`.
- Learning before competition; Arena/rank/social remain optional gated future systems.
- No fabricated availability, metrics, users, testimonials, progress, ranks, AI calls, installers, or updates.

### Implemented surfaces

- Public: `/`, `/about`, `/guide`, `/premium`, `/support`, `/download`.
- Trial: `/play`, authoritative `/entry`, `/mission/northstar-sales-drop`.
- App: Today `/app`, onboarding `/app/onboarding`, Learn `/app/learn`, and Agentic Coding path `/app/learn/agentic-coding`.

Learn provides a broad 12-column desktop curriculum, focused mobile timeline, sticky next action, first-lesson contract, five capability bands, lock reasons, checkpoint cadence, Proof Chain reminder, comfort/setup route, future-field honesty, and ready/loading/empty/offline/error/retry/unavailable/completed-fixture/future states. Today now links directly to Learn.

Learn uses bundled deterministic data. It creates no account, personal data, browser storage, analytics, request, provider call, score, rank, public activity, or persisted completion.

### Repository system

Root `AGENTS.md` remains canonical. Page specs, roadmap, Learn design record, handoff, run log, tests, and repository checks align with the implementation. Automated tests remain in main; screenshots/traces/videos/ZIPs remain local artifacts.

## Opportunity and capture plan

Own the gap between passive AI courses and unstructured vibe-coding. Show the complete path, teach one observable behavior through action, require evidence under uncertainty, replay the pivotal decision, and increase autonomy gradually. Outperform alternatives through clarity, evidence, recovery, safety, privacy, accessibility, and polish—not feature-list copying or rank pressure.

## Limitations and weak spots

- The curriculum and first-lesson contract are implemented; the interactive first lesson is not.
- Guided checkpoint integration, result/replay, and truthful local progress come after the lesson.
- No persisted progress, account/identity/consent/export/deletion/region policy.
- No real AI gateway/evaluations/redaction/cost policy or secure arbitrary-code sandbox.
- Arena/rank/matchmaking/social/moderation/payments/premium remain gated.
- Signed Windows/macOS installers and updater do not exist.
- GitHub Advanced Security is unavailable; never claim a repository-wide secret scan passed.
- Public CTA intentionally remains `/play`.

## Verification

Runtime candidate run `32963230802`:

```text
verify: success — check 98160005076
browser: success — check 98160004825
Playwright/axe: 18/18 passed across public website, trial/mission, Today, onboarding, and Learn
repository/governance, mission validation, unit/domain/web tests, TypeScript, production build, client boundary, and JS/CSS/media budgets: passed
1920px broad layout, 390px no-overflow/44px actions, deterministic states, retry, and reduced motion: passed
```

Two genuine pre-green issues were repaired without weakening checks: an ambiguous test locator and Learn color-contrast failures. The final runtime candidate is green.

## Approval state

Approved/delegated: Agentic Coding-first page-by-page work; broad desktop/focused mobile; 13+ and private defaults; routine quality repair/branch updates/green merge; Learn hub/path and first-lesson contract.

Still gated: personal data/public regions/consent; paid or lock-in backend/AI/analytics/moderation/payment/signing/distribution vendors; production credentials/uploads/code execution; public profiles/discovery/messaging/contact upload/youth-to-adult policy; authoritative rank/leaderboards/matchmaking/prizes; pricing/checkout/employer/school/hiring/certification; signed native/auto-update/destructive migration/production deletion; material audience/positioning/Proof Chain/website-app change.

## Next plan

1. Implement `/app/learn/agentic-coding/outcome-before-delegating`.
2. Teach objective, scope, constraints, evidence, and done criteria through an interactive transformation task.
3. Add progressive hint, rubric/self-check, pause/exit, checkpoint transition, and all deterministic states.
4. Keep assessment deterministic and local; do not fake AI judgment or saved completion.
5. Verify desktop/mobile/zoom/keyboard/focus/axe/reduced motion/no network-storage/budgets.
6. Update specs, handoff, run log, PR evidence, rollout, and rollback; merge only green.

## Rollout and rollback

PR #15 adds client-only routes and bundled content; there is no migration, persistence, request, or data cleanup. GitHub Pages deploys after merge. Roll back LearnRoute, `learn.css`, Learn domain/tests, App routes, Today navigation, docs, and repository requirements as one unit. Preserve Today/onboarding/public contracts and keep public CTA on `/play`.

## Next agent checklist

1. Read `AGENTS.md`, this handoff, approvals, master spec, page specs, roadmap, and quality bar.
2. Inspect current `main`, open PRs/issues, and CI; old branch text is not authority.
3. Confirm PR #15/main status before starting the lesson.
4. Preserve public, trial, mission, Today, onboarding, Learn, and `RunProvider` contracts.
5. Build only the first lesson next; no competition/social/payment/native/provider/account expansion.
6. Keep preview behavior explicit and private; never fabricate persistence/progress/rank/AI.
7. Never weaken axe, trust boundaries, budgets, or assertions.
8. End with green CI, updated docs/handoff/run log, exact evidence, and rollback.
