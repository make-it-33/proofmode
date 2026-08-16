# ADR 0004: Make the call is the first core loop

- Status: Accepted
- Date: 2026-08-16
- Owner decision: Gate 1 approval

## Context

ProofMode needs one behavior that can prove the product promise before visual design or platform expansion. The first loop must let a new player use AI freely while producing enough trustworthy behavior to score and replay.

Three options were compared:

- A — Make the call: evidence-first decision with AI on demand.
- B — Catch the miss: AI-first audit and correction.
- C — Ship the fix: AI-assisted build, test, and repair.

AI-first advice is easy to understand but can anchor later judgment. Open-ended creation is realistic but substantially harder to score and compare in an honest first release. The existing Northstar fixture and scoring spike already support an evidence-backed decision loop.

## Decision

Use **A — Make the call** for the first vertical slice.

The player will:

1. understand the required decision before the clock starts;
2. inspect answer-neutral evidence;
3. use an on-demand AI that can be useful and wrong;
4. submit a cause/position, first action, evidence references, and uncertainty;
5. receive a deterministic run score, explanation, event-based replay, and one practice behavior.

AI is available immediately but does not volunteer the opening recommendation. Asking AI early is not penalized. Verification and supported outcomes matter; prompt style and count do not.

## Consequences

### Positive

- Represents the broad ProofMode promise rather than only claim auditing.
- Reduces automatic AI-first anchoring without restricting AI use.
- Fits the Northstar mission contract and deterministic scoring foundation.
- Produces a meaningful replay of evidence, AI influence, correction, and decision.
- Can support business, marketing, operations, research, and later technical cases.

### Negative / risks

- Can feel work-like if missions are verbose or low-stakes.
- Players can wander if the required decision is unclear.
- A single mission cannot support broad skill or ranking claims.
- On-demand AI still permits immediate answer-seeking, so mission design must reward verification rather than compliance theater.

### Controls

- Keep cases short, concrete, and consequential.
- Show the exact submission contract without revealing the answer path.
- Allow immediate AI use; never score “waiting before AI.”
- Require evidence-linked material claims and penalize unsupported or random assertions.
- Blind-test clarity, ambiguity, answer cues, time, accessibility, and replay fairness.

## Alternatives

- **B — Catch the miss:** retained as a likely second mechanic after the core shell is proven.
- **C — Ship the fix:** retained for later, after constrained test harnesses and safe sandbox boundaries exist.

Neither alternative is approved for implementation by this ADR.

## Scope boundary

This decision authorizes product/technical proposals and creative-direction explorations based on Make the call. It does not authorize production design, final copy, stack/vendor selection, implementation, public release, rankings, social systems, monetization, or native apps.
