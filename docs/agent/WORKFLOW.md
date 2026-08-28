# Approval-aware workflow

ProofMode uses progressive commitment. Agents may investigate broadly but may not silently turn exploration into production. Competition is removed from the product; it is not an expansion option.

## Gate 0 — intake and evidence

Inspect repository/prototype, research users/standards/constraints, identify contradictions/risks, and improve tests/governance/docs without inventing product authority.

Output: outcome, evidence, constraints, non-goals, open questions, and next decision if gated.

## Gate 1 — behavior contract

For a new user journey, define target user/moment, job, success event, Source/AI move/Verification/Human decision/Outcome, recovery, data/security boundary, states, and smallest vertical slice. Use existing approved behavior without reopening routine decisions.

## Gate 2 — creative direction

When visual direction is materially new, compare credible options through real product moments, short natural copy, accessibility, media purpose/provenance, performance, responsive intent, and anti-patterns. Exploration is not production approval.

## Gate 3 — detailed page design

Specify the complete journey and states at desktop/mobile: entry, dominant action, evidence, AI behavior, verification, decision, uncertainty, recovery, completion, replay, empty/loading/offline/error/timeout/invalid/resume, tokens/components, motion/media, accessibility, performance, scope/exclusions, rollout/rollback.

## Gate 4 — implementation

Build one end-to-end vertical slice with pure typed domain logic, complete states, private defaults, tests, documentation, and rollback. Keep hidden truth, AI policy, authority, payments, and execution behind approved server boundaries. Do not add adjacent features because they are easy.

## Gate 5 — implementation review

Compare build with canonical contract. Record deviations, desktop/mobile evidence, behavior tests, accessibility, security/privacy, performance, claims, and unresolved risks. Material deviation returns to the relevant gate.

## Gate 6 — validation and expansion

Blind-test lesson/checkpoint clarity with representative 13+ learners when approved. Expand content or connected account/AI/sandbox/payment/native capabilities only after preceding exit criteria and owner gates. Do not expand into competition, rank, comparison, or pressure mechanics.

## Main-first delivery

`main` is the canonical testable state. Temporary branches support review/CI, then green work merges promptly. Automated tests stay in `main`; disposable manual tester artifacts stay out unless promoted as production assets. Every meaningful run updates `docs/agent/HANDOFF.md`, `RUN_LOG.md`, and relevant `docs/handoff/` maps.
