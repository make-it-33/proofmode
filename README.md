# ProofMode

ProofMode is being built as a learner-first, competitive daily game for practicing professional judgment with AI. The first production vertical slice is the approved **Make the call / Casefile** journey for ages 13+.

> The legacy prototype remains reference material only. It is not complete, calibrated, or production-ready.

## Current vertical slice

The browser app currently includes:

- a concise product promise;
- a 13+ boundary before run creation;
- a clock-paused mission brief and intentional six-minute start;
- a responsive evidence workspace with five public Northstar artifacts;
- private session-scoped notes and resume behavior;
- an optional deterministic mock AI that can make and correct a plausible mistake;
- source pins and source-linked citations;
- a structured private call with a required uncertainty statement;
- no account, public result, analytics, provider call, or client-side scoring.

Scoring, signed mission delivery, production AI, accounts, social systems, employer assessment, payments, and public launch remain separate gated work.

## Requirements

- Node.js `24.14.1`
- npm `11.11.0`
- npm registry access for the first exact install

No npm account, token, registry login, `.npmrc`, or secret is required.

## Exact setup

```bash
npm ci --ignore-scripts
npm run verify
npx playwright install chromium
npm run test:e2e
```

`npm ci --ignore-scripts` is intentional. The first web slice has no approved install-time scripts.

## Run locally

```bash
npm run dev:web
```

Vite prints the local URL, normally `http://localhost:5173`.

## Verification surface

`npm run verify` runs:

1. repository, hygiene, and agent-governance checks;
2. mission validation;
3. framework-independent scoring and player-contract tests;
4. React/Vitest unit tests;
5. strict TypeScript checking;
6. the production web build;
7. browser-boundary inspection for hidden truth, private modules, credentials, and network-capable AI code;
8. JavaScript, CSS, and media budgets.

`npm run test:e2e` separately runs Playwright and axe checks over the full Casefile path, the under-13 exit, keyboard skip-link, mobile overflow/touch targets, reduced motion, and a 200%-equivalent viewport.

## Repository governance

Start with `AGENTS.md`, then read:

1. `docs/agent/HANDOFF.md`
2. `docs/agent/APPROVALS.md`
3. `docs/agent/RUNBOOK.md`
4. `docs/agent/QUALITY_BAR.md`

Every meaningful run must update `docs/agent/HANDOFF.md` and append the same run ID to `docs/agent/RUN_LOG.md`.
