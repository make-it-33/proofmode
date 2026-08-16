# First core-loop options v1

Status: **Gate 1 proposal — awaiting owner decision**  
Scope: product behavior only; no visual direction, production copy system, stack choice, or implementation is authorized.

## Decision requested

Choose the first behavior ProofMode should prove in the Phase 1 vertical slice:

- **A — Make the call:** investigate a case, use AI on demand, then make and support a decision.
- **B — Catch the miss:** receive an AI recommendation first, audit it, and correct the decision.
- **C — Ship the fix:** use AI to build a useful deliverable, test it against constraints, and repair it.

These can all become mission mechanics later. The decision is which one should teach the product in the first playable case.

## Shared rules for every option

- One 5–10 minute mission version with the same evidence, truth, AI fairness mode, time, and scoring rules for comparable players.
- The clock starts only after the objective and submission are clear.
- AI is allowed and can be useful or wrong.
- Evidence is neutral before submission; nothing visually reveals the answer.
- The player submits a structured result with evidence references.
- The run score is 0–100 and separate from future skill ratings or percentiles.
- Replay shows what the player did, where the run changed, and one behavior to practice.
- No global rank, AI baseline, streak pressure, or employer feature in the first slice.

## Evidence informing the choice

- ProofMode’s existing research supports practical, role-relevant practice rather than generic lessons or self-report tests.
- A 2025 review of automation bias found that AI suggestions presented before a person forms a judgment can anchor later decisions; explanations alone often do not fix this. Active verification matters more: https://link.springer.com/article/10.1007/s00146-025-02422-7
- Microsoft’s overreliance review reports that recommendations given only on request, and asking people to form their own view before seeing AI advice, can reduce overreliance: https://www.microsoft.com/en-us/research/wp-content/uploads/2022/06/Aether-Overreliance-on-AI-Review-Final-6.21.22.pdf
- Collaborative-AI literacy research calls for objective behavioral measures such as decision accuracy, efficiency, and adaptability rather than relying only on self-report: https://www.tandfonline.com/doi/full/10.1080/10447318.2025.2543997
- Simulation-assessment evidence is strongest for formative practice and becomes more reliable across multiple well-built scenarios. One case can prove the loop, but it cannot support broad skill claims: https://pmc.ncbi.nlm.nih.gov/articles/PMC4768888/
- A shared daily challenge can create conversation because everyone faced the same task, but the task must remain engaging across skill levels: https://www.gamedeveloper.com/design/the-rise-of-once-a-day-games-lessons-learned-from-wordle-s-legacy

## A — Make the call

**Promise:** “Find out what happened. Decide what to do. Show what convinced you.”

### Run

1. See a compact case card: category, 6-minute target, difficulty, and the decision required.
2. Confirm the brief. Example: “Revenue dropped. Find out why.”
3. Open the evidence workspace. AI starts blank and responds only when the player asks.
4. Inspect sources, ask AI for help, mark useful evidence, and revise the working view.
5. Lock a decision:
   - What happened?
   - What should the team do next?
   - Which evidence supports it?
   - What remains uncertain?
6. Receive the score and a short explanation tied to the run.
7. Replay the turning points: first evidence, AI claim, verification, correction, final call.
8. Leave with one practice cue. Example: “Check derived claims before acting on them.”

### Northstar example

The player investigates Northstar’s enterprise-revenue decline. The AI may suggest that price caused the drop. The record instead supports failed renewals linked to implementation delays. The player must choose the cause, protect upcoming renewals, and cite the evidence.

### AI role

On-demand collaborator. It can summarize, compare, calculate, and propose a hypothesis. It never speaks before the player asks, never receives hidden truth, and can make a planted but plausible mistake.

### What the run proves

Evidence use, appropriate reliance, judgment, decision quality, efficiency, communication, and recovery can all appear naturally in one replay.

### Strengths

- Best fit with the existing Northstar mission and scoring engine.
- Research-aligned: AI helps without automatically anchoring the first view.
- Broad enough for business, marketing, operations, research, and later technical cases.
- Fairer and simpler to score than open-ended creation.
- Replay can show a real change of mind rather than only a final answer.

### Risks and controls

- **Can feel like work:** keep the case concrete, time-boxed, consequential, and free of unnecessary prose.
- **Players may ask AI for the answer immediately:** allow it; score whether they verify, not whether they used AI early.
- **Novices may wander:** show the required decision and source types, not a guided path to the answer.
- **One case cannot prove broad ability:** label the result as one run and wait for repeated missions before skill claims.

### Smallest vertical slice

Guest run, one Northstar version, five sources, bounded AI, notes/evidence links, structured decision, deterministic score, replay, and local result. No account, leaderboard, daily scheduler, or social layer is required to prove it.

## B — Catch the miss

**Promise:** “The AI made the call. Check it before the team acts.”

### Run

1. Confirm the case and the cost of a bad decision.
2. Receive an AI recommendation with several claims and a proposed action.
3. Inspect evidence and mark each important claim as supported, weak, or contradicted.
4. Repair the recommendation and submit the corrected action with sources.
5. See which claims were caught, which were missed, and whether any good claims were rejected.
6. Replay the audit path and receive one practice cue.

### Northstar example

The AI says a 22% price increase caused the revenue decline and recommends discounting. The player must discover that the price claim is unsupported and that failed renewals point to implementation problems.

### AI role

The opponent and draft author. Its output is reproducible in competitive mode and may include one or more planted failure points.

### Strengths

- Fastest concept to understand and easiest marketing hook.
- Creates immediate tension around AI fallibility.
- Claim-level scoring and replay can be very clear.
- A hybrid scripted AI is technically feasible for the first slice.

### Risks and controls

- **AI-first anchoring:** the player may keep searching for evidence that supports the opening claim.
- **Wrong lesson:** repeated use can teach “AI is usually wrong” rather than appropriate reliance.
- **Random skepticism can score:** false-positive penalties and material-claim weighting are mandatory.
- **Narrow skill signal:** strong at auditing, weaker at problem framing and proactive tool use.

### Smallest vertical slice

One reproducible AI recommendation, evidence viewer, claim audit, corrected decision, deterministic scoring, and replay. Simpler than A, but less representative of the full product promise.

## C — Ship the fix

**Promise:** “Use AI to make something that works. Prove it before you ship it.”

### Run

1. Confirm an outcome and hard constraints.
2. Use AI freely to create a deliverable: plan, analysis, message, formula, workflow, or small build.
3. Run tests or inspect feedback from the mission simulator.
4. Diagnose failures, revise the work, and submit the final artifact with a short rationale.
5. Receive outcome, constraint, verification, efficiency, communication, and recovery scores.
6. Replay the build-test-repair loop and receive one practice cue.

### Northstar example

The player uses AI to produce a renewal-recovery plan. The plan must identify the supported cause, protect specific upcoming renewals, respect a budget, and avoid unsupported pricing claims. Mission tests reveal missed constraints before final submission.

### AI role

Full collaborator. The player chooses how to delegate, test, and revise.

### Strengths

- Closest to how people use AI for real work.
- Strongest proof of outcome, iteration, and recovery.
- Can become highly distinctive across writing, analysis, coding, research, and operations.
- Produces compelling replays when tests expose a failure and the player repairs it.

### Risks and controls

- **Hardest to score fairly:** open-ended work needs constrained outputs and explicit tests.
- **High technical cost:** code/build cases eventually need sandboxes; other cases need reliable simulators.
- **Model variability hurts comparability:** competitive versions need fixed policies, snapshots, or scripted behaviors.
- **Can become prompt optimization:** scoring must reward final outcome and verification, not prompt style or count.
- **Harder first session:** players must understand the task, tools, constraints, and tests quickly.

### Smallest vertical slice

A constrained non-code deliverable with machine-checkable requirements, bounded AI, test feedback, revision, scoring, and replay. It is possible, but carries substantially more content and scoring risk than A.

## Comparison

| Criterion | A — Make the call | B — Catch the miss | C — Ship the fix |
| --- | --- | --- | --- |
| First-session clarity | High | Highest | Medium |
| Fits full ProofMode promise | Highest | Medium | High |
| Encourages appropriate AI reliance | Highest | Medium | High |
| Deterministic scoring for v1 | High | High | Low–medium |
| Replay value | High | High | Highest |
| Technical/content risk | Low–medium | Low | High |
| Range of future missions | High | Medium | Highest |
| Main failure mode | Feels work-like | Trains reflexive distrust | Becomes open-ended and hard to compare |

## Recommendation

Choose **A — Make the call** for the first vertical slice.

Why:

- It proves the broad product, not only one auditing trick.
- It fits the existing Northstar fixture and deterministic scoring work.
- On-demand AI reduces automatic anchoring without restricting AI use.
- It is feasible enough to build honestly and rich enough to produce a meaningful replay.
- It leaves B and C as strong later mechanics rather than discarding them.

Recommended product sequence:

1. Launch the core shell with **Make the call**.
2. Add **Catch the miss** as the second reusable mechanic to vary the habit and sharpen verification.
3. Add **Ship the fix** after the mission-test and sandbox architecture is proven.

## Exact approval choices

- **Approve A:** authorize A as the behavior direction for detailed creative exploration and a technical vertical-slice proposal.
- **Approve B:** authorize B instead.
- **Approve C:** authorize C instead, accepting the higher scoring and platform risk.
- **Approve a hybrid with changes:** specify the exact behavior to combine; a revised scope must be recorded before the next gate.
- **Reject:** return to behavior exploration.

Approval at this gate does **not** authorize visual design, production copy, framework/vendor selection, implementation, generated production media, leaderboard/rating claims, social features, or launch.
