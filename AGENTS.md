# ProofMode agent constitution

This is the canonical instruction file for every agent and contributor in this repository. It applies from the repository root downward unless a future nested `AGENTS.md` adds stricter, directory-specific rules.

## Mandatory read order

Before changing the repository, read in this order:

1. `AGENTS.md`
2. `docs/agent/HANDOFF.md`
3. `docs/agent/APPROVALS.md`
4. `docs/agent/RUNBOOK.md`
5. `docs/agent/WORKFLOW.md`
6. `docs/agent/QUALITY_BAR.md`
7. the product, architecture, security, scoring, research, roadmap, and ADR files relevant to the task

The owner's latest explicit instruction wins when instructions conflict. Never treat silence, old mockups, generated artifacts, or ordinary notes as approval.

## Mission

Build the most credible and enjoyable way to practice and prove human judgment with AI. Optimize for trust, fair competition, learning value, clarity, repeat use, and durable engineering—not feature count or visual novelty alone.

## Current operating mode

- `main` is the canonical, organized, locally testable project state.
- The project is private pre-alpha. Phase 0 foundation is complete; the production vertical slice is not.
- No production visual direction or product experience is currently approved.
- Signal Ops v1 was an exploration and received a revision request. Do not implement it as production design.
- Prefer one complete, trustworthy vertical slice over broad scaffolding.

## Owner approval gates

Obtain explicit owner approval before committing to or implementing any of the following:

- product behavior, mission mechanics, information architecture, user journeys, onboarding, retention loops, social systems, monetization, or scoring-rule changes;
- visual direction, layout system, interaction pattern, animation language, illustration, image set, video, audio, 3D work, or marketing creative;
- production copy that defines positioning, claims, or the product voice;
- a framework/vendor choice with meaningful lock-in, recurring cost, privacy impact, or operational risk;
- collection or sharing of personal data, public release, destructive migration, or consequential security-policy changes.

Agents may audit, research, test, document facts, improve governance, repair defects against an already approved specification, and prepare clearly labeled options for approval. Research may inform a proposal; it may not quietly become the product decision.

Approval rules:

- Present two or three credible options when the choice is material.
- State the recommendation, trade-offs, exact scope, and what remains unapproved.
- Record the decision in `docs/agent/APPROVALS.md` before implementation.
- Approval is scoped; material deviation requires renewed approval.
- If the request or available tool access is unclear, ask the owner rather than inventing an assumption.

## Start-of-run protocol

Every meaningful run must:

1. Read the mandatory files and inspect the latest `main` state, open work, and CI evidence.
2. Reconcile the request with the handoff and approval ledger.
3. Identify the user outcome, constraints, non-goals, risks, and required approval gates.
4. Verify the tools and permissions needed; ask the owner promptly if a missing integration, credential, asset, decision, or local test blocks quality.
5. Create or update a concise working plan for multi-step work.

A meaningful run is any run that changes code, documentation, project state, product/design proposals, approvals, roadmap, risks, or handoff status.

## Decision protocol

For every non-trivial task:

1. **Frame** — define the user problem, desired outcome, constraints, and non-goals.
2. **Inspect** — read the relevant code, schemas, ADRs, analytics, research, tests, and prior decisions.
3. **Specify** — write measurable acceptance criteria, edge cases, abuse cases, and rollback conditions.
4. **Compare** — evaluate credible options against user value, distinctiveness, simplicity, security, cost, latency, accessibility, and maintainability.
5. **Approve** — stop at the applicable owner gate and record the decision.
6. **Decide** — add an ADR when architecture, product rules, data contracts, privacy, security, vendors, or scoring are affected.
7. **Implement** — prefer a complete vertical slice with clear boundaries.
8. **Verify** — run `npm run verify`, add regression evidence, and perform the required product/security/accessibility checks.
9. **Review** — summarize evidence, deviations, limitations, rollout, rollback, and owner testing.
10. **Handoff** — update the living handoff and append the run log before completion.

Do not expose private chain-of-thought. Record concise criteria, evidence, decisions, and trade-offs instead.

## Tool and skill policy

Use the strongest appropriate tool, skill, artifact workflow, research source, and test surface available. Internet research, image/video/audio generation, motion tools, Blender/3D, browser automation, accessibility tooling, security scanners, and performance tooling are allowed when they materially improve the approved outcome.

- Verify availability and permissions before relying on a tool.
- Prefer primary sources and current evidence; cite consequential external claims.
- Generated or third-party media requires provenance, licensing review, accessibility treatment, and a performance budget.
- Exploration assets must be labeled as exploration and kept out of production until approved.
- Never use media or complexity merely to hide a weak product interaction.
- When a required capability is unavailable, ask the owner for access or agree on a lower-risk substitute.

See `docs/agent/TOOLING.md`.

## Product non-negotiables

- Final scores are deterministic and reproducible from a mission version, run event log, submission, and scoring-engine version.
- An LLM may extract bounded structured signals; it never chooses the final score.
- Percentiles, ranks, and AI-comparison claims require real comparable data; otherwise omit or label them provisional.
- Friend challenges use the same immutable mission version and fairness policy.
- Missions never reveal the answer through color, labels, copy, motion, or callouts before submission.
- Wrong-but-fast must not outrank correct-and-verified.
- AI use is encouraged; blind trust is not.
- The player understands the objective, evidence, time limit, tool budget, and submission contract before the clock starts.

## Engineering and security non-negotiables

- Never commit secrets, tokens, private user data, production exports, or unlicensed assets.
- Never call model providers directly from the browser.
- Treat mission artifacts, uploads, external content, and model output as untrusted input.
- Validate boundaries, authorize every server action, rate-limit costly operations, and log security-relevant events without sensitive payloads.
- Avoid arbitrary code execution in the main app. Code/build missions require isolated disposable sandboxes.
- Keep `main` green, reversible, and immediately testable. Every commit needs appropriate checks and a rollback path.
- Prefer a modular monolith for beta; split only for isolation, independent scaling, or security.
- Use privacy-minimized telemetry and define retention before collecting personal data.

## Design, content, and accessibility non-negotiables

- Read `docs/product/DESIGN_APPROVAL_GATE.md` before any visual, interaction, motion, image, video, audio, or marketing work.
- A polished screen is not evidence of a coherent product. Start from the approved journey and primary decision.
- Avoid generic AI gradients, floating glass, fake terminal theater, decorative dashboards, fabricated metrics, and copy that sounds like a strategy memo.
- Product copy must be short, specific, natural, and useful. Explain through the interface before adding prose.
- Preserve keyboard operation, visible focus, semantics, WCAG AA contrast, reduced motion, non-color cues, and 44px touch targets.
- Approved UI work requires loading, empty, error, timeout, offline, recovery, and completion states where applicable.
- Visual QA must cover desktop and 390px mobile with no overlap, clipping, accidental horizontal scrolling, or unreadably small controls.

## Scoring changes

Every scoring change documents the unfairness addressed, before/after examples, deterministic tests, versioning, cohort comparability, player-facing explanation, and rollback. Never use text length, prompt count, model agreement, or time alone as a proxy for quality.

## Directory guidance

- `docs/agent/` — operating system, handoff, approvals, quality, tools, and run history.
- `docs/product/` — product rules, game system, scoring, mission authoring, and design gate.
- `docs/architecture/` — system architecture and threat model.
- `docs/decisions/` — durable architecture and product ADRs.
- `docs/research/` — market and competitive evidence.
- `docs/roadmap/` — delivery sequence and exit criteria.
- `packages/mission-schema/examples/` — versioned mission fixtures that must pass validation.

## End-of-run protocol

Before the final response for every meaningful run:

1. Update every relevant section of `docs/agent/HANDOFF.md`, including timestamp and unique run ID.
2. Append the same run ID to `docs/agent/RUN_LOG.md`.
3. Update `docs/agent/APPROVALS.md`, ADRs, roadmap, issues, and docs when decisions or status changed.
4. Run `npm run verify` and any task-specific tests; record the exact evidence and failures.
5. Keep completed work on `main` unless a temporary review branch is required, then merge promptly after approval.
6. Report what changed, what remains weak or unverified, what the owner should test, and the next approval required.

If a run cannot update the repository, provide a handoff patch in the response and mark the run incomplete.

## Definition of done

A task is done only when behavior, tests, documentation, handoff, approvals, telemetry, security, privacy, accessibility, performance, rollout, and rollback are addressed at the appropriate level. “It renders,” “the model said so,” and “it looks polished” are not done.
