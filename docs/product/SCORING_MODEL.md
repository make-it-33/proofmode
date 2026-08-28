# Private feedback model (legacy filename)

- Status: **Superseded compatibility record**
- Updated: 2026-08-28

The former model described scores, ratings, percentiles, and leaderboards. Competition, public comparison, rank, ratings, percentiles, and leaderboards are removed from the active product and V1/V2 roadmap by ADR 0008. This filename remains for older links and repository checks only.

## Current feedback principles

- Prefer behavior evidence and replay over a single number.
- Name what the learner did, which source/check supports it, what remained uncertain, and one next action.
- Do not label intelligence, talent, employability, honesty, or worth.
- Do not compare learners or imply a cohort.
- Do not use model output as final authority.
- Do not reveal the expected answer before the human decision.
- Accessible alternatives must measure the same behavior.

## V1 checkpoint feedback

The guided checkpoint should produce a private local record containing:

- scenario/content version;
- Proof Chain stages completed;
- verification observations;
- human decision and rationale;
- stated uncertainty;
- outcome;
- one strong behavior;
- one risk or missed behavior;
- one next practice action.

Until an authoritative deterministic result engine exists, show no numeric score.

## Future authoritative feedback gate

If a future connected service evaluates results, it requires immutable content versions, append-only trusted events, server timestamps, reproducible deterministic rules, explanation, replay, integrity status, version identifiers, accessibility equivalence, exploit tests, migration/rollback, and independent validation. An LLM may extract typed signals with provenance/confidence, but cannot assign the final result or completion alone.

## Anti-gaming without competition

The product still protects learning integrity: do not reward opening every source, prompt count, verbosity, speed, or random flagging. Rewarding is the wrong framing; feedback should reflect whether evidence supported the learner’s decision and whether recovery improved the outcome.

No public score, percentile, rank, ladder, leaderboard, matchmaking, season, or pay-to-win may be added without a new explicit owner decision.
