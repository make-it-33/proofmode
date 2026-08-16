# ProofMode

**AI is allowed. Your judgment is the test.**

ProofMode is a competitive daily game about using AI well under realistic constraints. Players investigate evidence, challenge unreliable AI output, make a decision, and produce a useful result. The product measures outcomes and behavior—not prompt trivia.

> Status: **foundation / private pre-alpha**. Phase 0 is complete; the production vertical slice and production visual direction are not. Signal Ops v1 is an unapproved exploration with a revision request.

## What we are building

- 5–10 minute evidence-rich missions
- a constrained AI workspace that can be useful and wrong
- deterministic, replayable scoring
- skill profiles based on repeated behavior
- same-version friend challenges and daily competition after the core loop is proven
- profession-specific packs after retention and learning value are demonstrated

We are **not** starting with hiring, proctoring, certificates, or an employer marketplace.

## Repository map

- `AGENTS.md` — canonical agent constitution and approval rules
- `docs/agent/` — living handoff, approvals, runbook, workflow, quality bar, tooling, and run log
- `packages/scoring-engine/` — pure deterministic scoring core and tests
- `packages/mission-schema/` — versioned mission contract and examples
- `docs/product/` — product rules, game loop, scoring, authoring, and design gate
- `docs/architecture/` — system design and threat model
- `docs/decisions/` — architecture decision records
- `docs/research/` — market and competitor evidence
- `docs/roadmap/` — phased delivery plan
- `.github/` — CI, review templates, and issue intake
- `.devcontainer/` — reproducible coding environment

## Quick start

Requirements: Node.js 22.14+.

```bash
npm run verify
```

The foundation has no runtime dependencies. This keeps the mission contract, scoring spike, and governance reproducible before the production web stack is selected and approved.

## Working agreement

Every meaningful run begins with [`AGENTS.md`](AGENTS.md) and [`docs/agent/HANDOFF.md`](docs/agent/HANDOFF.md), respects the approval ledger, verifies its work, updates the living handoff, and keeps `main` canonical.
