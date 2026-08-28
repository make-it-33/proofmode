# ProofMode continuity and handoff pack

- Status: **Canonical continuity index**
- Updated: 2026-08-28
- Audience: human maintainers and advanced coding agents
- Scope: product intent, page contracts, UX, systems, delivery, business, evidence, and continuation

This folder is the durable substitute for the original conversation. It records the decisions and context needed to continue ProofMode with the same product standards without copying private chat, personal information, or transient reasoning into source control.

## Authority and reading order

When sources disagree, use this order:

1. root `AGENTS.md` — mandatory contribution rules;
2. `docs/agent/HANDOFF.md` — current operational snapshot;
3. `docs/agent/APPROVALS.md` — owner decisions and stop gates;
4. `docs/product/APP_MASTER_SPEC.md` — canonical product contract;
5. `docs/product/PAGE_AND_SECTION_SPECS.md` — canonical route/page contract;
6. `docs/roadmap/PRODUCT_IMPLEMENTATION_PLAN.md` — dependency order;
7. `docs/agent/QUALITY_BAR.md` — merge/release standard;
8. this folder — detailed continuity context and maps;
9. approved architecture, security, design records, source, and tests.

A historical prototype, old Arena document, issue comment, generated image, branch description, or stale handoff SHA never overrides these sources.

## Binding direction

ProofMode is a 13+ learning product, designed first for teenagers, that teaches Agentic Coding through real practice and the Proof Chain:

`Source → AI move → Verification → Human decision → Outcome`

The owner made the current direction stronger than the earlier phrase **Learning before competition**: **there is no competition in the active product or V1/V2 roadmap**. Do not build Arena, PvP, ranks, ladders, leaderboards, matchmaking, seasons, public comparison, prizes, or pay-to-win mechanics. Historical competition material is retained only to explain rejected directions and must not be treated as backlog.

## Folder map

| File | Purpose |
| --- | --- |
| `CURRENT_STATE.md` | Implemented routes, exact evidence, limitations, and immediate next work |
| `PRODUCT_DIRECTION.md` | Audience, promise, differentiation, corrections, non-goals, and no-competition rule |
| `PAGE_SYSTEM_MAP.md` | Every current/planned page, its sections, states, data boundary, and status |
| `UX_UI_SYSTEM.md` | Website/app visual language, desktop/mobile behavior, motion, media, copy, and accessibility |
| `FUNCTION_AND_DATA_MAP.md` | Current code/domain functions, proposed next contracts, state/data/trust boundaries |
| `ROADMAP_V1_V2.md` | Dependency-ordered V1, V1.5, and V2 plan with exit criteria |
| `BUSINESS_AND_PAYMENTS.md` | Free/premium principles, payment gates, entitlements, refunds, and honest claims |
| `DECISION_HISTORY.md` | Durable conversation decisions, rejected turns, and why they matter |
| `QA_RELEASE_HANDOFF.md` | Quality matrix, evidence, CI, review, rollout, and rollback protocol |
| `MEDIA_INVENTORY.md` | Rights/provenance, committed visual maps, and review-artifact policy |
| `GLOSSARY.md` | Shared product and engineering vocabulary |
| `media/` | Lightweight, reviewable visual maps—not production screenshots or fabricated UI |

## How the next agent should begin

1. Read the authority chain above.
2. Inspect the actual `main` head, open PRs/issues, CI, and Pages; do not treat a recorded SHA as permanently current.
3. Confirm that the next dependency remains the guided checkpoint.
4. Define one complete vertical slice: user outcome, states, data boundary, abuse cases, responsive behavior, accessibility, performance, tests, rollout, and rollback.
5. Keep real functionality, preview fixtures, disabled controls, and future plans visibly distinct.
6. Merge only after green verification and update the handoff/run log in the same run.

## Main-branch and artifact policy

Production-ready code, canonical specs, automated unit/integration/E2E/accessibility/security/performance tests, architecture, and operating guidance belong in `main`. Temporary manual tester harnesses, traces, screenshots, browser profiles, review ZIPs, and exploratory exports stay out unless explicitly approved as production assets. Automated tests are not disposable tester artifacts and must stay in `main`.
