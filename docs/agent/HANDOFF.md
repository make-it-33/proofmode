# ProofMode handoff

Last updated: `2026-08-16T11:03:35+05:30`  
Run ID: `2026-08-16-gate-1-make-the-call`  
Repository head reviewed: `dea7996109442de1cd137f2a043a6f310a363031` (before this decision commit)  
Stage: **Gate 2 creative-direction exploration / private pre-alpha**

## Current state

The owner approved **A — Make the call** as the first core behavior for Phase 1. The decision is recorded in ADR 0004, `docs/product/CORE_LOOP_OPTIONS_V1.md`, `GAME_SYSTEM.md`, and the approval ledger.

The approved behavior is evidence-first decision-making with AI on demand: understand the case, inspect neutral evidence, use AI freely, submit a supported decision and action, see a deterministic explanation, replay the turning points, and receive one practice behavior.

This approval permits product/technical proposals and creative-direction explorations only. No production design, media, final copy, stack, or implementation is approved.

## Active work

- Recording the Gate 1 decision and its exclusions on `main`.
- Preparing to compare two or three concise creative directions that demonstrate Make the call without returning to text-heavy presentation design.
- Keeping Signal Ops v1, B — Catch the miss, and C — Ship the fix out of production.

## Progress

| Area | State | Evidence / note |
| --- | --- | --- |
| Agent operating system | Complete | Canonical instructions, handoff, approvals, workflow, quality bar, and CI enforcement on `main` |
| Gate 1 product behavior | Approved | A — Make the call; ADR 0004 |
| Northstar mission basis | Draft foundation | Fits Make the call; still requires blind QA |
| Gate 2 creative direction | Not selected | Exploration may now be prepared; owner must select before detailed design |
| Detailed design | Not approved | No implementation authorization |
| Production runtime | Not started | Phase 1 issues #2–#9 remain open |

## Opportunity and capture plan

Lead with a short shared case where AI is available but the player must prove the decision through evidence and replay. Make the call can demonstrate appropriate reliance and recovery without turning the product into an AI-error hunt.

If the core loop proves fair and repeatable, later missions may add Catch the miss and Ship the fix. Social comparison, leagues, and paid packs remain later gates.

## Limitations and weak spots

1. The creative direction and detailed UX are not approved.
2. Make the call can feel work-like if the case is verbose, low-stakes, or visually flat.
3. On-demand AI still allows answer-seeking; scoring must reward verification, not delayed AI use.
4. Northstar has not passed blind tests for clarity, ambiguity, answer cues, accessibility, exploit paths, or time.
5. One mission cannot support broad skill, rating, or percentile claims.
6. The production stack, backend trust path, observability, supported security scanning, and representative user research remain pending.
7. Live GitHub Actions status is not exposed through the current connection; commit contents can be verified, but CI completion must be checked separately.

## Next plan

1. Prepare two or three materially different creative directions for Make the call.
2. Keep the artifact visual and product-first: real screens, short natural copy, minimal explanation.
3. Compare tone, hierarchy, evidence behavior, AI presence, motion/media purpose, accessibility, and performance.
4. Ask the owner to select one direction; selection will authorize detailed exploration only.
5. After Gate 2, prepare the complete desktop/mobile journey and technical-stack options for separate approvals.

## Approval state

- **Approved:** A — Make the call as the Phase 1 behavior direction.
- **Authorized:** product/technical proposals and Gate 2 creative-direction exploration based on A.
- **Not approved:** any production design, final copy, media, framework/vendor, implementation, leaderboard, social system, monetization, or launch.
- **Revision requested:** Signal Ops v1.
- **Future candidates only:** B and C.

## Verification

- The decision matches the option presented and selected by the owner.
- ADR 0004 documents context, alternatives, consequences, controls, and scope boundary.
- Product and game-system docs now describe the same approved run.
- No application code, design artifact, production media, stack choice, or scoring arithmetic changed.
- CI will require this handoff and the matching run-log update in the decision commit.

## Owner help / blockers

No tool or credential is currently blocking Gate 2 exploration. The next owner decision will be selection of a creative direction after the options are prepared.

## Next agent checklist

- [ ] Read ADR 0004 and the owner decision before creative work.
- [ ] Prepare distinct directions, not color swaps.
- [ ] Use actual Make the call moments and minimal natural copy.
- [ ] Keep every asset labeled exploration and out of production.
- [ ] Update this handoff and append the next run ID.
