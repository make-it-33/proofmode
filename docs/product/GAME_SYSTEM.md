# Practice system (legacy filename)

- Status: **Superseded compatibility record**
- Updated: 2026-08-28

The former “game system” direction included competitive missions and comparisons. Competition was removed from the active product and V1/V2 roadmap by ADR 0008. This filename remains temporarily because repository checks and older links reference it; it is not authority for Arena, rank, ladder, leaderboard, matchmaking, season, PvP, or public score comparison.

## Current atomic unit

A versioned **learning practice** contains:

- user outcome and prerequisite behavior;
- bundled or approved source artifacts;
- constraints and allowed actions;
- AI-move fixture/provider policy;
- verification actions and observations;
- human decision and uncertainty contract;
- outcome/replay contract;
- accessibility/safety/content-QA metadata;
- version/hash/rollback metadata when published.

Material content/behavior changes create a new version. Pre-submit UI never reveals the answer.

## Current learning flow

1. Orient to outcome, scope, constraints, and privacy state.
2. Inspect Source.
3. Review an AI move.
4. Verify important claims or changes.
5. Accept, reject, modify, or investigate.
6. Explain rationale and uncertainty.
7. See the resulting Outcome.
8. Replay the pivotal behavior and choose one next practice action.

Feedback is private, behavior-specific, deterministic where possible, and never an intelligence/employability/rank signal.

## Practice mechanics

- outcome framing;
- source/claim audit;
- bounded delegation;
- constraint verification;
- diff/test review;
- recovery/rollback/re-plan;
- permissions/secrets boundary;
- architecture/shipping handoff.

These are reusable learning engines, not competitive modes.

## Quality gate

Do not publish if the outcome is ambiguous; styling reveals the answer; source/evidence conflicts; the behavior cannot be observed; an AI model is the sole authority; accessibility changes the measured behavior; privacy/security is undefined; failure/recovery is missing; media is essential without fallback; or claims/availability are fabricated.

Current canonical contracts are `APP_MASTER_SPEC.md`, `PAGE_AND_SECTION_SPECS.md`, `PRODUCT_IMPLEMENTATION_PLAN.md`, and `docs/handoff/`.
