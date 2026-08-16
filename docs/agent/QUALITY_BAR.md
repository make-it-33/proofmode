# ProofMode quality bar

The goal is a distinctive, trustworthy product—not a collection of trendy components or generated code that merely looks finished.

## Product quality

- A new player can explain the objective, AI role, evidence contract, time limit, and submission in their own words before play.
- Every mission has one defensible scoring truth, documented ambiguity bounds, and blind-test evidence.
- The core loop creates tension through uncertainty and consequence, not confusing controls or hidden rules.
- Scores, comparisons, ratings, and progress claims are reproducible and honestly labeled.
- The next action is clear at every state, including failure and recovery.

## Experience and visual quality

- The interface has one coherent product metaphor and hierarchy across marketing, mission, result, and replay.
- Real product moments lead; explanatory decks and feature lists do not.
- Copy is short, concrete, natural, and specific to the player's current decision.
- Visual distinction comes from composition, evidence behavior, replay, typography, and motion purpose—not generic gradients, glass cards, neon, or fake terminal styling.
- Pre-submit evidence remains answer-neutral.
- Motion communicates focus, cause, consequence, state, or spatial continuity; reduced motion preserves all meaning.
- Original/generated media has provenance, art direction, responsive crops, alt treatment, and a strict loading budget.

### “Not vibe-coded” review

Reject or revise a build when any of these are true:

- it is mostly a landing-page hero plus interchangeable cards;
- copy sounds like an AI strategy memo or repeats concepts instead of showing them;
- visual polish masks missing behavior, states, or data truth;
- components lack consistent tokens, semantics, responsive rules, or interaction contracts;
- metrics, users, ranks, testimonials, baselines, or outcomes are fabricated;
- the implementation cannot explain its architecture, tests, security boundaries, or rollback.

## Engineering quality

- Strict typed contracts at trust boundaries.
- Deterministic domain logic separated from UI and model providers.
- Server-authoritative events and authorization for consequential actions.
- Small modules with explicit ownership and no accidental circular dependencies.
- Database migrations are reversible or have a tested forward-recovery plan.
- Failures are observable, bounded, and useful to operators without leaking private content.
- Dependency and vendor choices are justified by an ADR.

## Testing quality

At the appropriate stage, include:

- unit tests for domain rules and scoring;
- contract/schema tests at every boundary;
- integration tests for storage, authorization, AI policy, limits, and replay;
- E2E tests for the golden path and critical failure/recovery paths;
- deterministic fixtures for mission and score reproducibility;
- keyboard, screen reader, contrast, zoom, reduced-motion, and 390px tests;
- security abuse cases, rate limits, prompt injection, upload handling, and sandbox boundaries;
- performance tests against declared budgets.

No flaky test may be ignored without an owner-visible issue, rationale, and removal date.

## Provisional performance targets

Until the stack ADR sets tighter budgets:

- Core Web Vitals target: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at the 75th percentile.
- No essential interaction depends on a large video, 3D scene, or model response.
- Images use responsive modern formats and explicit dimensions.
- No autoplay audio; muted video needs captions and a static fallback.
- Animation favors transforms and opacity and must not interfere with timed play.
- AI requests have timeouts, cancellation, cost budgets, and graceful fallback.

## Security and privacy quality

- No secrets, hidden truth, scoring manifests, or provider credentials reach clients.
- Untrusted content is isolated, validated, escaped, and least-privileged.
- Personal data is minimized; purpose, retention, export, and deletion are documented before collection.
- Costly operations have limits, abuse detection, and operator visibility.
- Security limitations are stated plainly; unavailable scanners are not described as passing.

## Release evidence

A release candidate needs reproducible verification commands, CI evidence, screenshots/recordings of approved states, accessibility results, performance results, security review, telemetry plan, rollout, rollback, known limitations, and an updated handoff.
