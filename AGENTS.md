# ProofMode agent instructions

These instructions apply to every coding agent and contributor in this repository.

## Mission

Build the most credible, enjoyable way to practice and prove human judgment with AI. Optimize for user trust, fair competition, learning value, clarity, and repeat use—not feature count.

## Mandatory decision protocol

For every non-trivial task:

1. **Frame** — state the user problem, desired outcome, constraints, and non-goals.
2. **Inspect** — read relevant code, schemas, ADRs, analytics, research, and tests.
3. **Specify** — write measurable acceptance criteria, edge cases, abuse cases, and rollback conditions.
4. **Compare** — evaluate at least two credible options against user value, simplicity, security, cost, latency, accessibility, and maintainability.
5. **Decide** — document a durable choice as an ADR when it affects architecture, product rules, data contracts, security, or scoring.
6. **Implement** — prefer a complete vertical slice over disconnected scaffolding.
7. **Verify** — run `npm run verify`; add regression tests; perform visual QA for UI work at desktop and 390px.
8. **Review** — summarize evidence, known limitations, migration/rollback, and what the user should test.

Do not expose private chain-of-thought. Provide concise decision summaries, criteria, evidence, and trade-offs.

## Product non-negotiables

- The final score is deterministic and reproducible from a mission version, run event log, and submission.
- An LLM may extract structured rubric signals, but it never chooses the final score.
- Percentiles and “top X%” claims require a real comparable cohort; otherwise label them provisional or omit them.
- Friend challenges use the same immutable mission version and fairness policy.
- Missions never reveal the answer through color, labels, or explanatory callouts before submission.
- Wrong-but-fast must not outrank correct-and-verified.
- AI use is encouraged; blind trust is not.
- The player must understand the objective, evidence, time limit, and submission contract before the clock starts.

## Engineering non-negotiables

- Never commit secrets, tokens, private user data, or production exports.
- Never call model providers directly from the browser.
- Treat mission artifacts and model output as untrusted input.
- Validate boundaries, authorize every server action, rate-limit costly operations, and log security-relevant events.
- Avoid arbitrary code execution in the main app. Build/code missions require an isolated sandbox.
- Changes go through branches and pull requests; do not push feature work directly to `main`.
- Preserve keyboard operation, visible focus, semantics, WCAG AA contrast, reduced motion, and 44px touch targets.
- Prefer a modular monolith for the beta. Split only for isolation, independent scaling, or security.

## Scoring changes

Every scoring change must document the unfairness addressed, before/after examples, deterministic tests, versioning, leaderboard comparability, and the player-facing explanation. Never use text length, prompt count, or time alone as a proxy for quality.

## UI changes

Every UI change needs purpose, primary action, loading/empty/error/timeout/completed states, responsive behavior, keyboard/focus behavior, reduced motion, and desktop/390px visual evidence. No overlap, clipping, accidental horizontal scroll, or unreadably small text.

## Directory guidance

- Read `docs/product/GAME_SYSTEM.md` before changing run behavior.
- Read `docs/product/SCORING_MODEL.md` before changing scoring or ratings.
- Read `docs/architecture/SYSTEM_ARCHITECTURE.md` before infrastructure changes.
- Read `docs/architecture/SECURITY_THREAT_MODEL.md` before AI, uploads, sandboxes, auth, or sharing.
- Add an ADR in `docs/decisions/` for durable decisions.
- Mission examples belong in `packages/mission-schema/examples/` and must pass validation.

## Definition of done

A task is done only when behavior, tests, documentation, telemetry, security, accessibility, and rollout/rollback are addressed at the appropriate level. “It renders” is not done.
