# Game system

## Atomic unit: an immutable mission version

A published mission version contains the brief, artifacts, truth map, choices/output contract, AI policy, scoring manifest, difficulty calibration, and baseline metadata. A material change creates a new version.

## First vertical slice: Make the call

The approved first behavior is evidence-first decision-making with AI on demand:

1. Preview the case and required decision.
2. Confirm the objective and submission before the clock starts.
3. Inspect neutral evidence; AI starts blank and speaks only when asked.
4. Use AI freely, verify material claims, and revise the working view.
5. Submit the cause/position, first action, evidence references, and remaining uncertainty.
6. Receive a deterministic run score, event-based replay, and one behavior to practice.

The player may ask AI for an answer immediately. The product measures whether the result is supported and verified; it does not reward delaying AI or optimizing prompt style.

See `CORE_LOOP_OPTIONS_V1.md` and ADR 0004.

## Run flow

1. Preview category, mechanic, difficulty, time, and skills.
2. Read the objective, constraints, submission contract, and stakes. The clock starts only after confirmation.
3. Inspect artifacts, use AI, take notes, link evidence, and revise hypotheses.
4. Submit a structured decision/deliverable plus evidence references.
5. Receive a deterministic score with claim-by-claim explanation.
6. Replay pivotal actions, missed signals, and a better route.
7. Compare only with runs on the same version and fairness policy.
8. Get one concrete behavior to practice next.

## Launch mechanics

- Claim audit
- Branching decision
- Constraint build
- Recovery room
- Evidence investigation

Categories are content labels; mechanics are reusable engines. This avoids building six unrelated products.

## Fair challenges

A challenge pins mission/version, artifact hashes, scoring-engine version, AI fairness mode/model snapshot, time/tool budgets, and relevant accommodations. Early competitive missions use a hybrid-scripted AI: deterministic planted failure points plus a bounded free-form assistant. Fully open model behavior remains practice mode until reproducibility is proven.

## Mission quality gate

Do not publish if the answer is revealed by styling/callouts; multiple defensible answers are unfairly rejected; the objective is ambiguous; a shortcut beats reasoning; evidence is inconsistent; cohort claims are invented; editors cannot reproduce the score; or accessibility adds irrelevant difficulty.

## Prototype audit

The visual prototype is a strong direction, not a valid game yet. It over-signals the answer with red rows and explanatory notes, treats “opened a document” as verification, scores communication by text length, and displays invented cohort statistics. Production removes answer-revealing annotations, requires evidence-linked claims, separates run score from long-term rating, and withholds percentile/baseline claims until measured.
