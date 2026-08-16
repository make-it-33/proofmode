# First core-loop decision v1

Status: **Gate 1 approved — A: Make the call**  
Approved: 2026-08-16  
Decision record: `docs/decisions/0004-first-core-loop-make-the-call.md`

The full three-option proposal remains available in repository history at commit `7cc674fb662b739d6e75f4485ec0b30b3d668597`.

## Approved behavior

ProofMode’s first vertical slice will ask the player to investigate a short case, use AI on demand, make a decision, and show the evidence behind it.

Plain-language promise:

> Find out what happened. Decide what to do. Show what convinced you.

## Approved run

1. **Preview** — category, expected time, difficulty, and the decision required.
2. **Confirm** — read the objective and exact submission; the clock starts only after confirmation.
3. **Investigate** — inspect neutral evidence. AI starts blank and responds only when asked.
4. **Work with AI** — summarize, compare, calculate, test a hypothesis, or ask for another angle. AI can be useful and wrong.
5. **Make the call** — submit:
   - what happened;
   - what should happen next;
   - which evidence supports the decision;
   - what remains uncertain.
6. **See why** — receive a 0–100 run score and short explanation tied to evidence and run events.
7. **Replay** — review the moments that changed the run: evidence opened, AI claim, verification, correction, and final decision.
8. **Practice one thing** — leave with one concrete behavior to try next time.

## Approved AI behavior

- AI is available from the start but does not volunteer a recommendation.
- The player may ask for the answer immediately; the product does not punish early AI use.
- The score rewards the quality of the outcome, verification, judgment, efficiency, communication, and recovery—not prompt style or count.
- Competitive mode uses a bounded policy and reproducible planted failure point.
- AI never receives hidden mission truth or assigns the final score.

## Northstar vertical slice

Brief:

> Revenue dropped. Find out why.

The player investigates Northstar’s enterprise-revenue decline. A plausible AI path may incorrectly attribute the decline to pricing. The record supports failed renewals linked to implementation delays. The player must identify the cause, choose a useful first action, cite evidence, and state remaining uncertainty.

Smallest approved planning scope:

- guest run;
- one immutable Northstar mission version;
- five evidence sources;
- bounded on-demand AI;
- notes and evidence links;
- structured decision;
- deterministic score explanation;
- event-based replay;
- local result.

## Shared guardrails

- Same mission version, evidence, AI fairness mode, time, and scoring rules for comparable runs.
- Evidence remains answer-neutral before submission.
- Wrong-but-fast cannot outrank correct-and-verified.
- Run score is separate from skill ratings and percentiles.
- One case cannot support broad skill, ranking, or employer claims.
- No leaderboard, streak pressure, AI baseline, social layer, monetization, or employer feature is part of the first vertical slice.

## Alternatives retained for later

### B — Catch the miss

AI presents a recommendation first; the player audits and repairs it. This is a strong second mechanic, but leading with it risks AI-first anchoring and teaching reflexive distrust.

### C — Ship the fix

The player uses AI to build, test, and repair a deliverable. This best resembles open-ended work, but it needs stronger output tests, model controls, and—in some categories—safe sandbox infrastructure.

Neither B nor C is approved for implementation by this decision.

## Evidence behind the decision

- Automation-bias research indicates AI-first recommendations can anchor later judgment; active verification matters more than explanation alone: https://link.springer.com/article/10.1007/s00146-025-02422-7
- Microsoft’s overreliance review reports that on-request recommendations and forming an independent view can reduce overreliance: https://www.microsoft.com/en-us/research/wp-content/uploads/2022/06/Aether-Overreliance-on-AI-Review-Final-6.21.22.pdf
- Performance-based AI-literacy research supports objective measures of accuracy, efficiency, and adaptability rather than self-report alone: https://www.tandfonline.com/doi/full/10.1080/10447318.2025.2543997
- Simulation-assessment research supports formative use while warning that multiple scenarios are needed for broader skill claims: https://pmc.ncbi.nlm.nih.gov/articles/PMC4768888/

## Authorization boundary

This Gate 1 decision authorizes:

- product and technical proposals based on **Make the call**;
- two or three creative-direction explorations that demonstrate this behavior;
- a later detailed-design approval pack.

It does **not** authorize production visual design, final copy, generated production media, framework/vendor selection, implementation, public release, social features, rankings, paid features, or native apps.
