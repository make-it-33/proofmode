# Agent runbook

This runbook is mandatory for every meaningful repository run.

## Start-of-run protocol

1. **Load truth**
   - Read `AGENTS.md`, `HANDOFF.md`, `APPROVALS.md`, master/page/roadmap specs, `QUALITY_BAR.md`, and `docs/handoff/README.md`.
   - Inspect current `main`, CI/Pages, open PRs/issues, and relevant code/tests.
   - Read governing architecture, security, design, media, business, and ADR records.
2. **Reconcile the request**
   - State outcome, constraints, non-goals, states, data/security boundary, and evidence.
   - Check owner gates. Routine approved work proceeds without asking repeatedly.
   - Stop if work adds personal data, vendor/cost/credentials, upload/execution, public sharing, payment/pricing, native signing, employer claims, irreversible data change, or competition.
3. **Check capabilities**
   - Identify source, browser, code, media, test, security, and deployment tools.
   - Verify access; never fabricate a scan, browser smoke, provider, payment, installer, or deployment result.
4. **Plan**
   - Use a short outcome-focused plan with one active item for complex work.
   - Define acceptance, abuse cases, accessibility, performance, rollout, and rollback.

## During the run

- Work from current source, not memory alone.
- Keep `main` canonical; use review branches only as needed.
- Build one complete vertical slice and avoid adjacent scope.
- Keep pure deterministic domain logic outside React/providers.
- Preserve no-competition and private-default boundaries.
- Record durable decisions in ADRs and owner decisions in approvals.
- Keep production assets separate from exploratory review artifacts.
- Never conceal failed tests, unavailable tools, uncertainty, or reduced scope.
- Visual polish never substitutes for behavior, states, accessibility, security, privacy, performance, or rollback.

## Approval stop protocol

When a new gate is crossed:

1. present the smallest decision;
2. show two or three credible options with evidence/trade-offs;
3. recommend one;
4. state exact scope/exclusions;
5. wait for explicit choice;
6. record it before implementation.

Routine work already delegated by `APPROVALS.md` does not require another prompt.

## End-of-run protocol

Before reporting meaningful work complete:

1. Update `HANDOFF.md` with ISO timestamp/timezone, unique run ID, current state, active work, progress, limitations, verification, approvals, next plan, rollout/rollback, and next-agent checklist.
2. Append the same run ID to `RUN_LOG.md`.
3. Update affected master/page/roadmap/handoff specs, approvals/ADR, issues, PR, and user docs.
4. Run `npm run verify`, task tests, and full Playwright/axe where applicable; record exact commands/check IDs/failures.
5. Review claims, secrets, hidden truth, data, permissions, youth safety, competition, cost, accessibility, performance, and rollback.
6. Merge only green and inspect merged `main`/Pages when applicable.
7. Report outcome, evidence, remaining limits, and next dependency. Never imply background work is still running.

## Failure and blocker protocol

- Fix a failing required check or keep the run incomplete; do not redefine success.
- If capability is unavailable, document the honest substitute/limitation.
- If requirements conflict at a consequential gate, ask the smallest clarification.
- If security/privacy risk is found, stop exposure, preserve evidence safely, and notify without publishing exploit details.
- If handoff cannot be committed, provide exact patch/reason.
