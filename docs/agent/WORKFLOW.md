# Approval-aware workflow

ProofMode uses progressive commitment. Agents may investigate before approval, but they may not silently turn exploration into production.

## Gate 0 — intake and evidence

Allowed without product/design approval:

- inspect the repository and prototype;
- research users, competitors, standards, and technical constraints;
- identify contradictions, risks, and missing evidence;
- improve tests, governance, tooling, and documentation without deciding the product experience.

Output: problem statement, evidence, constraints, non-goals, and open questions.

## Gate 1 — product behavior approval

Before deciding how the app works, present two or three credible core-behavior options covering:

- target user and moment;
- main job and success event;
- mission start, play, decision, scoring, replay, and return loop;
- what AI can and cannot do;
- fairness and abuse risks;
- data and technical implications;
- smallest vertical slice.

Owner decision: approve one behavior direction, approve with explicit changes, or reject.

## Gate 2 — creative direction approval

After Gate 1, present distinct visual/experience directions. Each should demonstrate real product moments with short natural copy, reference rationale, accessibility constraints, media intent, performance implications, and anti-patterns.

Owner decision: select a direction for detailed exploration. This is not implementation approval.

## Gate 3 — detailed design approval

Show the complete vertical-slice journey and essential states at desktop and mobile:

- first visit/onboarding;
- mission brief and clock start;
- evidence, AI, and decision modes;
- loading, empty, error, timeout, offline, and recovery;
- submission, score explanation, replay, and next action;
- component/tokens, motion, media, copy, accessibility, performance budget;
- exact build scope and exclusions.

Keep the approval artifact visual and product-first. Explanatory prose belongs in supporting notes, not across every screen.

Owner decision: authorize the exact implementation scope.

## Gate 4 — implementation

- Build one end-to-end vertical slice.
- Keep hidden truth, AI policy, run authority, and scoring server-side.
- Add tests, telemetry, security controls, accessibility, performance budgets, and rollback.
- Do not add adjacent features because they are easy.

## Gate 5 — implementation review

Compare the build with the approved pack. Document deviations, desktop/mobile evidence, behavior tests, accessibility, security, performance, and unresolved risks. Material deviations return to the relevant approval gate.

## Gate 6 — validation and expansion

Blind-test mission clarity and fairness with representative players. Expand content, social systems, monetization, or native surfaces only after the preceding exit criteria are met and the owner approves the next scope.

## Main-first delivery

`main` remains the canonical testable state. Use temporary branches only when required by review or CI, then merge approved work promptly. Every meaningful run updates `docs/agent/HANDOFF.md` and `docs/agent/RUN_LOG.md`.
