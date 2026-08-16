# ProofMode

**AI is allowed. Your judgment is the test.**

ProofMode is a competitive daily game about using AI well under realistic constraints. Players investigate evidence, challenge unreliable AI output, make a decision, and produce a useful result. The product measures outcomes and behavior—not prompt trivia.

> Status: **foundation / private pre-alpha**. The polished static prototype is a visual foundation; production logic is being rebuilt around versioned missions, event-sourced runs, deterministic scoring, and fair competition.

## What we are building

- 5–10 minute evidence-rich missions
- a constrained AI workspace that can be useful and wrong
- deterministic, replayable scoring
- skill profiles based on repeated behavior
- same-version friend challenges and daily competition
- profession-specific packs after the core loop proves retention

We are **not** starting with hiring, proctoring, certificates, or an employer marketplace.

## Repository map

- `packages/scoring-engine/` — pure deterministic scoring core and tests
- `packages/mission-schema/` — versioned mission contract and examples
- `docs/product/` — product rules, game loop, scoring, authoring
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

The foundation commit has no runtime dependencies. This keeps the mission contract and scoring spike reproducible before the production web stack is selected and locked.

## Working agreement

Every non-trivial change follows: frame the problem, inspect evidence, specify acceptance/failure cases, compare options, record durable decisions, implement a vertical slice, verify it, and open a reviewable pull request.

Read [`AGENTS.md`](AGENTS.md) before making changes.
