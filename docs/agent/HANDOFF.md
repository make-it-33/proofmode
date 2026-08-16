# ProofMode handoff

Last updated: `2026-08-16T10:38:15+05:30`  
Run ID: `2026-08-16-agent-operating-system`  
Repository head reviewed: `b7c4fdf9cab96668befdba7d9bd672cf3fea91c0` (before this run's governance commit)  
Stage: **private pre-alpha / foundation complete / production vertical slice not started**

## Current state

ProofMode is a competitive daily game for practicing human judgment with AI. Players investigate evidence, use a fallible AI, make a decision, cite the record, and receive a deterministic explanation of their run.

The repository has a Phase 0 foundation: governance, product rules, a mission contract, a deterministic scoring spike, architecture/security decisions, research, CI, and a linked Phase 1 backlog. It does not yet contain the production app, backend, auth path, event store, AI gateway, mission runtime, or calibrated ranking system.

`main` is canonical. The latest design artifact, Signal Ops approval pack v1, is **not approved for production**. The owner requested a major revision because the pack had too much text, lacked an appealing product feeling, and used vocabulary that sounded AI-generated. Visual redesign work is paused while the agent operating system is established.

## Active work

- Establishing the repository-wide agent constitution, living handoff, approval ledger, workflow, quality bar, tooling policy, run log, and automated governance check.
- Preserving Phase 1 as the next engineering milestone rather than expanding scope.
- Holding all new product-experience and visual decisions at an owner approval gate.

No production design or application implementation is active in this run.

## Progress

| Area | State | Evidence / note |
| --- | --- | --- |
| Repository and CI foundation | Complete | Foundation merged; `npm run verify` previously passed on `main` |
| Product and game rules | Foundation complete | Product vision, game system, scoring model, and mission authoring docs exist |
| Deterministic scoring spike | Complete as a spike | Four deterministic tests; not yet a production service |
| Northstar mission contract | Draft fixture complete | Needs authoring QA and blind testing before publication |
| Architecture and threat model | Foundation complete | Modular monolith, event-sourced runs, bounded AI, and sandbox boundaries documented |
| Phase 1 backlog | Ready | Parent issue #2 with issues #3–#9 linked |
| Production runtime | Not started | No production web/BFF/database/auth/AI runtime on `main` |
| Production visual direction | Not approved | Signal Ops v1 received revision request |
| Agent operating system | Completed in this run | New mandatory handoff, approval, workflow, quality, tooling, and validation files |

## Opportunity and capture plan

The opportunity is not another AI-chat wrapper or prompt course. The wedge is a short, replayable daily game in which AI is allowed but judgment must be proven against evidence.

Capture sequence:

1. **Earn trust first** — ship one excellent mission with answer-neutral evidence, bounded AI, server-authoritative events, deterministic scoring, and a replay that explains the result.
2. **Prove repeat value** — blind-test fairness and comprehension; then build a small set of varied, high-quality missions and a truthful skill profile.
3. **Add social comparison carefully** — same-version friend challenges, decision-difference replays, and leagues only after comparability and anti-abuse are credible.
4. **Monetize depth, not access to fake status** — professional mission packs and deeper practice insights after retention and learning value are demonstrated.
5. **Differentiate through evidence** — every claim, score, replay, and share card should be traceable; no fabricated percentiles, AI baselines, or employer claims.

The strongest moat will be high-quality mission IP, trustworthy behavioral data, explainable scoring, excellent replay, content operations, and a recognizable but disciplined product system.

## Limitations and weak spots

1. **No production application stack has been selected or implemented.** The stack direction is documented, but there is no end-to-end runtime.
2. **The core experience is not approved.** Signal Ops v1 was too text-heavy and presentation-like; copy and visual hierarchy need a human, product-first reset.
3. **The static prototype is not production truth.** It includes answer cues and fabricated metrics and is not fully present on remote `main`.
4. **Scoring is only a spike.** It lacks production event ingestion, version migration, calibration, anti-abuse, and player-facing validation.
5. **The Northstar mission is not blind-tested.** Mission clarity, ambiguity, accessibility, exploit paths, and time budget are unproven with players.
6. **No backend trust path exists.** Auth, privacy-safe data model, immutable registry, server-authoritative events, AI gateway, and result signing are pending.
7. **Security automation is incomplete.** GitHub Advanced Security was unavailable, so CodeQL and repository secret scanning are not active; supported alternatives are still needed.
8. **No observability or real product analytics exists.** Retention, fairness, cost, latency, and failure budgets cannot yet be measured.
9. **No representative user research has validated the loop.** Market evidence is directional, not product-market proof.
10. **Agent memory was previously conversational.** This run creates a durable handoff, but compliance depends on agents updating it and CI enforcing structure.

## Next plan

1. Ask the owner for explicit approval before beginning a new product-experience or visual-planning pass.
2. If approved, prepare a concise behavior-first proposal with two credible core-journey options, natural interface copy, and a clear recommendation. Do not create production design.
3. Obtain creative-direction approval, then create a minimal high-fidelity pack focused on actual screens and states rather than explanatory prose.
4. After detailed design approval, execute Phase 1 in dependency order: production shell (#3), Northstar blind QA (#6), registry/events (#5), bounded AI gateway (#4), scoring/replay (#7), auth/privacy (#8), and quality gates (#9).
5. Add supported secret scanning/static analysis and document the security compromise until stronger repository capabilities are available.

## Approval state

- **Approved:** `main` is canonical and must remain organized and locally testable.
- **Approved:** every material product, UX, visual, motion, media, and marketing decision requires owner approval before implementation.
- **Exploration only:** Signal Ops was selected for exploration, not production.
- **Revision requested:** Signal Ops approval pack v1; do not implement.
- **Not approved:** a revised core journey, visual direction, production media, final app/web design, concrete application stack, public release, paid features, leagues, or native apps.
- **Open owner decision:** whether the next run may prepare product-behavior and creative options for approval.

See `docs/agent/APPROVALS.md` for the durable ledger.

## Workflow

Use `docs/agent/WORKFLOW.md`. In short: discover facts → present behavior options → obtain approval → present visual directions → obtain approval → present detailed states/system → obtain approval → implement one vertical slice → verify → compare against approval → update handoff.

## Verification

- Foundation verification previously passed on `main`.
- The new governance checker was syntax-validated locally with `node --check` before commit.
- The complete repository verification must pass in CI after this governance commit.
- No claim is made that the app, backend, mission, scoring system, or visual direction is production-ready.

## Owner help / blockers

No access request is currently blocking the governance work. Ask the owner immediately if a future run needs an unavailable integration, paid tool, local-device test, design decision, private asset, credential, platform account, or production permission.

## Next agent checklist

- [ ] Read this file, `APPROVALS.md`, `RUNBOOK.md`, and relevant domain docs.
- [ ] Inspect latest `main`, CI, issues #2–#9, and any owner feedback since this timestamp.
- [ ] Confirm the next approval boundary before product or design exploration.
- [ ] Keep V1 design assets out of production.
- [ ] Run `npm run verify` before completion.
- [ ] Update this entire handoff and append the same run ID to `RUN_LOG.md`.
