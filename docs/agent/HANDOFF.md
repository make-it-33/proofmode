# ProofMode handoff

Last updated: `2026-08-26T16:00:00+05:30`  
Run ID: `2026-08-26-repository-operating-system-v1`

## Current state

- Canonical branch target: `main`; base before this governance change: `7744dcd0ee5911e362972f5de5aba7890790e2ec`.
- Public accessibility PR #13 merged as `932a1895cee1a4c8a721f8c6de367c87392a30cc`.
- Today PR #11 merged as `f0450d04349353fdc5fd2c6bdf1a92386d7b9430`.
- Onboarding PR #12 merged as `7744dcd0ee5911e362972f5de5aba7890790e2ec`.
- This operating-system change adds canonical product/page/roadmap/quality/agent guidance and will be merged after green CI.
- Public site: `https://make-it-33.github.io/proofmode/`.
- Next implementation slice: Agentic Coding Learn path. Do not start Arena, Social, accounts, providers, payments, or native distribution first.

## Active work

1. Complete and merge this repository operating-system change with green `verify` and browser checks.
2. Then design/implement `/app/learn` from the existing page specification.
3. Keep Learn deterministic, private, local, and honest about preview progress.
4. Follow Learn with the first focused lesson, guided Proof Chain checkpoint, and result/replay.

## Progress

### Durable product direction

- Ages 13+, teenagers first; broader learners supported.
- Agentic Coding is V1; Design, Business, Research, and Game Development are future.
- Website and repeated-use app are separate experiences.
- Broad desktop, focused mobile.
- `Source → AI move → Verification → Human decision → Outcome`.
- Learning works without competition; Arena/rank/social are optional fairness/privacy/youth-safety-gated systems.
- No fake availability, metrics, users, testimonials, ranks, installers, updates, AI calls, or submissions.

### Implemented surfaces

- Public: `/`, `/about`, `/guide`, `/premium`, `/support`, `/download`.
- Trial: `/play`, authoritative `/entry`, `/mission/northstar-sales-drop`.
- App: `/app` and redirect `/app/today`; `/app/onboarding` and redirect `/app/setup`.

Today provides the 272px desktop rail, up-to-1,840px canvas, dominant practice, Proof Chain, Agentic Coding path, trust boundary, and ready/empty/loading/offline/error/retry states. It uses labeled fixtures and no account/progress/rank/provider/upload/analytics/storage/network.

Onboarding provides promise, 13+ boundary, goal, Agentic Coding field, pressure-free pace, comfort, and ready summary. Future fields are disabled. Choices remain in React memory. Under-13 creates no run/profile and requests no birthday/contact/school/location. No network/storage/cookie/analytics/model/upload/credential/personal data.

### Repository operating system

- Root `AGENTS.md` is canonical; `agent.md` is only a pointer.
- `APP_MASTER_SPEC.md` records product/system/data/AI/safety/responsive/future boundaries.
- `PAGE_AND_SECTION_SPECS.md` defines every current, next, and future page and state.
- `PRODUCT_IMPLEMENTATION_PLAN.md` gives dependency order and gates.
- `QUALITY_BAR.md` defines professional merge/release quality.
- README, vision, approvals, indexes, run log, and repository checks align with that direction.
- `scripts/check-repo.mjs` fails if canonical docs, handoff headings, routes, or styles disappear.

## Opportunity and capture plan

Own the gap between passive AI courses and unstructured vibe-coding: one excellent loop first. Show the path; teach one behavior through action; require a realistic Proof Chain checkpoint; replay the pivotal decision/recovery; recommend one next behavior; repeat with increasing autonomy. Outperform alternatives through clarity, evidence, safe practice, recovery, accessibility, privacy, and polished repeated-use UX—not feature-list copying.

## Limitations and weak spots

- Learn, focused lesson, checkpoint integration, and result/replay are not implemented.
- No persisted progress, account/identity/consent/export/deletion/region policy.
- No real AI gateway/evaluations/redaction/cost policy.
- No secure code sandbox; arbitrary execution remains prohibited.
- Arena/rank/matchmaking/social/messaging/moderation/payments/premium remain gated.
- Signed Windows/macOS installers and updater do not exist.
- GitHub Advanced Security is unavailable; never claim repository secret scanning passed.
- Public CTA intentionally remains `/play`.

## Verification

Final evidence for this change is recorded on its PR. Required result before merge:

```text
verify: success
browser: all public, Today, and onboarding Playwright/axe tests pass
repository/governance, TypeScript, build, boundary, and budgets: pass
```

Historical local evidence: Today and onboarding Chromium QA `findings: []`; no 390px overflow; no visible target under 44×44px; reduced-motion durations `0s`; onboarding preview JS 66,006 bytes gzip, CSS 4,648 bytes gzip; no new media/runtime dependency.

## Approval state

Approved/delegated: Agentic Coding-first blueprint; page-by-page implementation; broad desktop/focused mobile; 13+ and private defaults; public website/media direction; routine quality repair/branch updates/green merge; canonical specs/quality/handoff in main.

Still gated: personal data/public regions/consent; paid/lock-in backend/AI/analytics/moderation/payment/signing/distribution vendor; provider spend/credentials/uploads/code execution; public profiles/discovery/messaging/contact upload/youth-to-adult policy; authoritative placement/rank/leaderboards/matchmaking/prizes; pricing/checkout/employer/school/hiring/certification; signed native/auto-update/destructive migration/production deletion; material audience/positioning/Proof Chain/website-app change.

## Next plan

1. Read canonical sources in `AGENTS.md` order.
2. Turn the Learn page spec into a slice acceptance matrix; do not redesign the whole app.
3. Implement `/app/learn` with deterministic local fixtures and Today navigation.
4. Cover ready/loading/empty/offline/error/retry/unavailable/future states.
5. Verify 1,920px, 390px, zoom, keyboard/focus, axe, reduced motion, 44px, no network/storage, budgets.
6. Update specs/handoff/run log/issue/PR/rollback; merge only green.
7. Build first lesson “Define the outcome before delegating,” then checkpoint and result/replay.

## Rollout and rollback

Current routes are integrated in `main`; GitHub Pages remains public host. Keep public CTA on `/play`. Today/onboarding have no migration/persistence and can roll back via route/source/style/test/navigation/check removal. Governance can roll back as one change, but never restore competition-first or general-investigation-first guidance. Keep code, tests, and spec status consistent.

## Next agent checklist

1. Read `AGENTS.md`, then this handoff, approvals, master spec, page specs, plan, quality bar.
2. Inspect current `main`, open issues/PRs, and CI; old branch descriptions are not authority.
3. Preserve public, trial, mission, Today, onboarding, and `RunProvider` contracts.
4. Build Learn next: one coherent page, all states, broad desktop, focused mobile.
5. Keep preview behavior explicit; no fake persistence/progress/rank/AI.
6. Do not build competition/social/payments/native/provider/account scope early.
7. Never weaken axe, trust boundaries, or assertions.
8. Keep automated tests in main; screenshots/traces/ZIPs/local harnesses out.
9. End with green CI, updated specs/handoff/run log, evidence, and rollback.
