# ProofMode handoff

Last updated: `2026-08-28T16:05:00+05:30`  
Run ID: `2026-08-28-outcome-lesson-v1`

## Current state

- Product implementation baseline on `main`: PR #16 merge `18c90438e0efc876f26cc5fe84287e31a3dc8616`.
- Canonical `main` also includes rollout-evidence PR #17 at `7ca8d9653e8a1784d05266a87e9679adc2cc76e4`. For operational work, inspect the branch head rather than treating this documentation snapshot as a permanent main SHA.
- The focused lesson is part of `main` and GitHub Pages deployment completed successfully.
- Product post-merge CI run `33162922734`: verify `98821441727` success; browser `98821441587` success.
- Product Pages run `33162922736`: build `98821441829` success; deploy `98821527564` success.
- Evidence follow-up CI run `33163517320`: verify `98823380569` success; browser `98823380416` success.
- Evidence follow-up Pages run `33163517161`: build `98823379999` success; deploy `98824524164` success.
- Public site: `https://make-it-33.github.io/proofmode/`.
- Current app sequence: Today `/app` → Learn `/app/learn` → Agentic Coding `/app/learn/agentic-coding` → focused lesson `/app/learn/agentic-coding/outcome-before-delegating`.
- Next dependency: a guided Proof Chain checkpoint for this lesson. Do not start Arena, Social, accounts, providers, payments, or native distribution first.

## Active work

1. Specify the deterministic guided Proof Chain checkpoint at `/app/checkpoint/outcome-before-delegating-v1`.
2. Reuse the approved bundled scenario and established run foundations without adding AI, upload, code execution, accounts, persistence, or public scoring.
3. Build and verify that checkpoint as the next complete vertical slice before private result/replay and truthful local progress.

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
- App: Today `/app`, onboarding `/app/onboarding`, Learn `/app/learn`, Agentic Coding path `/app/learn/agentic-coding`, and the first focused lesson.

The lesson is a broad source → builder → live-contract workspace on desktop and a focused source-first sequence with a fixed action dock on mobile. It uses a bundled vague request and six bounded fields covering objective, scope, constraints, evidence, and done criteria. Deterministic checks only confirm structure/presence. A progressive hint teaches ordering without writing the answer. Five separate human confirmations remain learner-controlled.

Ready, loading, offline, error/retry, incomplete, hint, checkpoint-fixture, and complete-fixture states are deterministic and fail closed. Error and exit copy explain exactly what was saved or sent. The local completion summary is honest, and the guided checkpoint control is disabled because that dependency is next.

The lesson creates no account, personal data, browser storage, analytics, request, provider call, upload, score, rank, public activity, or persisted completion. Inputs are capped at 500 characters and rendered as escaped React text.

### Repository system

Root `AGENTS.md` remains canonical. The page spec, roadmap, design record, handoff, run log, tests, and repository checks align with the lesson. Automated tests remain in main; screenshots, traces, videos, ZIPs, and exploratory harnesses remain local.

The focused lesson loads through a lazy route entry. The existing 25 KiB initial CSS gzip cap was not raised. CI also enforces an 8 KiB cap for each route CSS chunk and a 30 KiB total CSS cap, while preserving the 180 KiB aggregate JavaScript gzip and 350 KiB media caps. The budget checker emits exact GitHub annotations on failure.

## Opportunity and capture plan

Own the gap between passive AI courses and unstructured vibe-coding. Show the complete path, teach one observable behavior through action, require evidence under uncertainty, replay the pivotal decision, and increase autonomy gradually. Outperform alternatives through clarity, evidence, recovery, safety, privacy, accessibility, performance, and polish—not feature-list copying or rank pressure.

## Limitations and weak spots

- The lesson draft exists only in the current React component; refresh/exit loses it by design.
- The structure checker does not assess semantic quality. Human self-check remains explicit.
- The guided checkpoint, result/replay, and truthful local progress are not implemented yet.
- No persisted progress, account/identity/consent/export/deletion/region policy.
- No real AI gateway/evaluations/redaction/cost policy or secure arbitrary-code sandbox.
- Arena/rank/matchmaking/social/moderation/payments/premium remain gated.
- Signed Windows/macOS installers and updater do not exist.
- GitHub Advanced Security is unavailable; never claim a repository-wide secret scan passed.
- The Pages workflow and deploy job passed, but this run could not repeat an interactive production smoke because the user-visible browser connection was unavailable. The text crawler reports the known deep-route HTTP 404 before the client SPA fallback executes; this is not evidence that the route failed.
- Public CTA intentionally remains `/play`.

## Verification

Final PR #16 head `8ccfa0a64cc64666b4a4f6f2a2484e0d2bc7ffc5`:

```text
run 33162592318
verify: success — check 98820362324
browser: success — check 98820362481
Playwright/axe: 23/23 passed
```

Product post-merge `main` at `18c90438e0efc876f26cc5fe84287e31a3dc8616`:

```text
CI run 33162922734
verify: success — check 98821441727
browser: success — check 98821441587
Pages run 33162922736
build: success — check 98821441829
GitHub Pages deploy: success — check 98821527564
```

Rollout-evidence follow-up PR #17 at `7ca8d9653e8a1784d05266a87e9679adc2cc76e4`:

```text
PR run 33163359635
verify: success — check 98822856691
browser: success — check 98822856872
post-merge CI run 33163517320
verify: success — check 98823380569
browser: success — check 98823380416
Pages run 33163517161
build: success — check 98823379999
deploy: success — check 98824524164
```

Coverage includes public website, trial/mission, Today, onboarding, Learn, and the focused lesson; repository/governance, mission validation, unit/domain/web tests, strict TypeScript, production build, client boundary, and route-aware JS/CSS/media budgets; broad desktop, 390px no-overflow/44px actions, deterministic states/retry, keyboard focus, forced colors, reduced motion, and axe.

Real issues repaired without weakening checks: an ambiguous status locator; a 25.58px mobile breadcrumb target; missing custom-checkbox focus styling; and a CSS budget breach. The CSS breach was diagnosed at `27326 > 25600` bytes gzip. It was resolved with a lazy route/CSS boundary plus stricter initial, per-route, and total caps—not by increasing the initial limit or hiding the failure.

## Approval state

Approved/delegated: Agentic Coding-first page-by-page work; broad desktop/focused mobile; 13+ and private defaults; routine quality repair/branch updates/green merge; Learn hub/path; first focused lesson; deterministic local structure checks and human self-review.

Still gated: personal data/public regions/consent; paid or lock-in backend/AI/analytics/moderation/payment/signing/distribution vendors; production credentials/uploads/code execution; public profiles/discovery/messaging/contact upload/youth-to-adult policy; authoritative rank/leaderboards/matchmaking/prizes; pricing/checkout/employer/school/hiring/certification; signed native/auto-update/destructive migration/production deletion; material audience/positioning/Proof Chain/website-app change.

## Next plan

1. Build `/app/checkpoint/outcome-before-delegating-v1` as a deterministic guided Proof Chain checkpoint.
2. Reuse the established mission/run foundations without exposing hidden truth or adding a provider/upload/code execution.
3. Require Source → AI move → Verification → Human decision → Outcome, explicit uncertainty, and no answer cue before decision.
4. Define immutable fixture/version identity and replay-ready trusted events before any backend authority.
5. Verify all states, desktop/mobile/zoom/keyboard/focus/axe/reduced motion/no storage-network expansion/budgets.
6. Follow with private result/replay, then truthful local progress.

## Rollout and rollback

PR #16 rolled out client-only bundled lesson code and a lazy route-specific CSS boundary. There was no migration, persistence, request, remote data, cleanup, or credential rotation. GitHub Pages build and deployment passed after merge. Roll back product merge `18c90438e0efc876f26cc5fe84287e31a3dc8616` or revert the focused route, lazy entry, lesson domain/state, stylesheet, Learn launch control, tests, design/spec/handoff/run-log changes, Vite CSS splitting, budget policy, and repository requirements together. Preserve public, trial, mission, Today, onboarding, Learn, and `RunProvider` contracts; keep the public CTA on `/play`.

## Next agent checklist

1. Read `AGENTS.md`, this handoff, approvals, master spec, page specs, roadmap, quality bar, and `OUTCOME_LESSON_V1.md`.
2. Inspect current `main`, issues, CI, and Pages; old branch text is not authority.
3. Do not duplicate or reopen the merged lesson unless a verified regression requires it.
4. Preserve public, trial, mission, Today, onboarding, Learn, focused-lesson, and `RunProvider` contracts.
5. Build only the guided checkpoint next; no competition/social/payment/native/provider/account expansion.
6. Keep preview behavior explicit and private; never fabricate persistence/progress/rank/AI.
7. Never weaken axe, trust boundaries, budgets, state assertions, or 44px checks.
8. End with green CI, updated docs/handoff/run log, exact evidence, production smoke when browser access is available, and rollback.
