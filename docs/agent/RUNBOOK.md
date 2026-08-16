# Agent runbook

This runbook is mandatory for every meaningful repository run.

## Start-of-run protocol

1. **Load truth**
   - Read `AGENTS.md`, `HANDOFF.md`, `APPROVALS.md`, `WORKFLOW.md`, and `QUALITY_BAR.md`.
   - Inspect the latest `main` commit, CI result, open issues, and changed files relevant to the request.
   - Read the product, architecture, security, scoring, research, roadmap, and ADR documents that govern the work.

2. **Reconcile the request**
   - State the user outcome, constraints, non-goals, and current evidence.
   - Check whether the request crosses an owner approval gate.
   - If product behavior or design is not approved, stop at a proposal; do not implement it.

3. **Check capabilities**
   - Identify required source, research, browser, code, media, test, security, and deployment tools.
   - Verify access rather than assuming it.
   - Ask the owner early when a missing tool, credential, asset, decision, local device, or service prevents a high-quality result.

4. **Plan the run**
   - For complex work, create a short outcome-focused plan with one active item.
   - Define acceptance evidence, abuse cases, accessibility, security, performance, rollout, and rollback at the appropriate depth.

## During the run

- Work from facts and source files, not memory alone.
- Keep `main` canonical. Temporary branches are allowed only when review tooling requires them.
- Prefer small coherent commits and complete vertical slices.
- Use parallel tool calls only for independent work; preserve dependencies.
- Record durable decisions in ADRs and owner decisions in `APPROVALS.md`.
- Keep generated exploration assets clearly separated from production assets.
- Never conceal failed tests, unavailable tools, uncertainty, or scope reduction.
- When a result looks polished, still test behavior, fairness, copy, responsive states, accessibility, security, and performance.

## Approval stop protocol

When approval is required:

1. Present the problem and the smallest decision the owner needs to make.
2. Show two or three credible options, not superficial variants.
3. Give a recommendation with evidence and trade-offs.
4. State exact authorized scope and explicit exclusions.
5. Wait for an explicit choice.
6. Record the choice in `APPROVALS.md` before implementation.

A request for “something better” is feedback, not production approval.

## End-of-run protocol

Before responding that meaningful work is complete:

1. Update `HANDOFF.md`:
   - ISO timestamp with timezone;
   - unique run ID;
   - current state and active work;
   - completed progress and evidence;
   - opportunity or plan changes;
   - new limitations, weak spots, blockers, and risks;
   - next dependency-ordered plan;
   - approval state;
   - verification results;
   - exact next-agent checklist.
2. Append the same run ID to `RUN_LOG.md` with a concise immutable summary.
3. Update `APPROVALS.md`, ADRs, roadmap, issues, and user-facing docs if status changed.
4. Run `npm run verify` plus task-specific tests. Capture exact commands and failures.
5. Inspect the resulting `main` commit and CI when possible.
6. Report:
   - outcome;
   - evidence;
   - what remains unverified or weak;
   - what the owner should test;
   - the next approval or access needed.

## Failure and blocker protocol

- If a test fails, fix it or clearly mark the run incomplete; do not redefine success.
- If a tool is unavailable, ask the owner for access or document an agreed substitute.
- If requirements conflict, pause consequential work and ask for the smallest clarifying decision.
- If a security or privacy risk is discovered, stop exposure, preserve evidence safely, and notify the owner without publishing exploit details.
- If a handoff cannot be committed, provide the exact patch and reason in the response.
