# ProofMode handoff

Last updated: `2026-08-16T11:14:00+05:30`  
Run ID: `2026-08-16-core-loop-options-v1`  
Repository head reviewed: `7cc674fb662b739d6e75f4485ec0b30b3d668597` (before this corrective handoff commit)  
Stage: **Gate 1 product-behavior decision / private pre-alpha**

## Current state

Phase 0 foundation and the agent operating system are on `main`. The production application, backend, mission runtime, calibrated scoring system, and approved visual direction do not exist yet.

The owner approved preparation of product-behavior options only. `docs/product/CORE_LOOP_OPTIONS_V1.md` now compares three first-loop directions:

- **A — Make the call:** evidence-first decision with AI on demand.
- **B — Catch the miss:** AI-first claim audit and correction.
- **C — Ship the fix:** AI-assisted build, test, and repair.

The recommendation is A for the first vertical slice, B as the second mechanic, and C after constrained testing/sandbox capabilities are proven. This is a proposal, not approval to design or implement.

Signal Ops v1 remains revision requested and not approved for production.

## Active work

- Waiting for the owner’s Gate 1 decision on A, B, C, a specified hybrid, or rejection.
- Keeping all visual design, production media, technical-stack choice, and implementation paused.
- Preserving the Northstar mission, deterministic scoring work, and Phase 1 issues as foundation evidence rather than treating them as final product behavior.

## Progress

| Area | State | Evidence / note |
| --- | --- | --- |
| Agent operating system | Complete | Constitution, handoff, approvals, workflow, quality bar, tooling policy, and CI enforcement on `main` |
| Gate 1 research | Complete | Product docs plus automation-bias, overreliance, performance-measurement, simulation-assessment, and daily-game sources reviewed |
| Core-loop options | Awaiting owner decision | `docs/product/CORE_LOOP_OPTIONS_V1.md` |
| Recommended first behavior | Proposed, not approved | A — Make the call |
| Production UX and visual direction | Not approved | Signal Ops v1 revision requested; no V2 authorized |
| Production implementation | Not started | Phase 1 issues #2–#9 remain open |

## Opportunity and capture plan

The wedge remains a short shared case where AI is allowed but judgment must be proven through evidence and replay. The recommended sequence is:

1. Prove one trustworthy **Make the call** mission.
2. Add **Catch the miss** to vary the habit and sharpen verification.
3. Add **Ship the fix** after constrained output tests and safe execution boundaries exist.
4. Add same-version social comparison only after fairness and repeat value are measured.
5. Monetize deeper practice packs only after retention and learning value are real.

The defensible asset is the mission/truth-map library, behavioral replay, explainable scoring, content operations, and fair comparable runs—not a chat interface.

## Limitations and weak spots

1. No Gate 1 option is approved yet.
2. A can feel work-like unless the case is brief, concrete, and consequential.
3. B is easy to understand but risks AI-first anchoring and teaching reflexive distrust.
4. C most closely resembles real work but is hardest to score, compare, secure, and explain in a first session.
5. One mission can validate a loop but cannot support broad skill or percentile claims.
6. Northstar still needs blind testing for ambiguity, answer cues, accessibility, exploit paths, and time.
7. The production stack, backend trust path, observability, security scanning alternative, and user research remain pending.
8. The first proposal commit accidentally truncated `APPROVALS.md`; this corrective commit restores the ledger and updates the required handoff/run log before the run is considered complete.

## Next plan

1. Obtain the owner’s exact Gate 1 choice.
2. Record that choice and its exclusions in `APPROVALS.md`.
3. If A/B/C is approved, prepare two or three concise creative directions that demonstrate the chosen behavior with minimal natural copy. Do not implement them.
4. After creative-direction approval, prepare the detailed desktop/mobile states, system, motion/media plan, accessibility, and performance budget.
5. Implement only after the separate detailed-design and stack approvals.

## Approval state

- **Approved:** main-first workflow and mandatory handoff.
- **Approved:** preparation of Gate 1 behavior options only.
- **Awaiting decision:** A, B, C, hybrid, or rejection.
- **Revision requested:** Signal Ops v1.
- **Not approved:** visual design, V2 media, production copy, stack/vendor selection, implementation, leaderboards, social systems, monetization, or launch.

## Verification

- The three-option proposal was read back from `main` and contains the full 204-line comparison.
- External sources were checked for appropriate-reliance, assessment, and shared-daily-game implications.
- No source was treated as product proof; research limitations are stated in the proposal.
- No application code, visual design, media, scoring rule, or architecture was changed.
- The approval ledger truncation from the preceding commit is repaired here.
- CI should run `npm run verify` and require both this handoff and `RUN_LOG.md` in the corrective commit.

## Owner help / blockers

The only current blocker is the Gate 1 product choice. No new tool, credential, or integration is required for that decision.

## Next agent checklist

- [ ] Read the owner’s Gate 1 response and record it exactly.
- [ ] Do not begin visual exploration unless a behavior direction is approved.
- [ ] Keep Signal Ops v1 out of production.
- [ ] Inspect CI and latest `main` before the next repository change.
- [ ] Update this handoff and append the next run ID to `RUN_LOG.md`.
