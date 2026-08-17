# ADR 0007: Explicit React platform for the first production slice

- Status: Accepted
- Date: 2026-08-17
- Owner decision: Gate 3 approved; owner delegated the stack choice to the agent

## Context

Issue #3 needs a production-quality web/PWA shell while ProofMode must protect hidden truth, deterministic scoring, bounded AI, youth privacy, trusted events, future worker isolation, local testability, portability, and rollback. The owner asked the agent to select the option best suited to high-quality UI/UX, security, animation, and desktop/mobile behavior. No hosting, model, database, queue, storage, analytics, or observability vendor is selected.

## Criteria

Trust/security boundaries; deterministic testability and local DX; portability/reversibility; UI/PWA and motion capability; reliability/observability; performance control; ecosystem leverage.

## Options considered

### A — Explicit React platform

React + Vite + React Router for the web; Fastify modular API; PostgreSQL/Kysely; separate worker; Redis/BullMQ only after a measured need; S3-compatible storage interface; OpenTelemetry; Vitest/Node tests/Playwright/axe.

Strengths: explicit browser/API/worker boundaries, strong portability, direct cache/header/CSP/bundle control, first-class React animation/component ecosystem, and a clean future path to isolated workers/sandboxes.

Costs: more initial setup, repository conventions, local orchestration, and release coordination.

### B — Next.js integrated web

Strong ecosystem and integrated rendering, but greater cache/runtime coupling and more discipline required to keep trusted work out of page/server-action boundaries.

### C — React Router full-stack

Web-standard and lean, but a smaller operational ecosystem and more validation required for worker/deployment/observability patterns.

## Decision

Select **A — Explicit React platform**.

It best separates the browser, API, and worker while preserving full control over the Casefile UI, responsive behavior, animation, accessibility, CSP, bundle budgets, testing, and rollback. It also keeps domain/scoring contracts framework-independent and vendors replaceable.

Proposed repository shape:

```text
apps/
  web/                 React + Vite + React Router
  api/                 Fastify composition root
  worker/              async jobs; no public HTTP
packages/
  domain/              run/mission/value contracts
  mission-schema/      existing versioned schema
  scoring-engine/      existing deterministic engine
  ui/                  approved Casefile primitives
  observability/       logs, traces, metrics, redaction
  test-fixtures/       deterministic state/browser fixtures
```

Dependency rule: `web` may use public contracts and UI primitives but cannot depend on hidden truth, scoring annotations, or server/provider adapters.

## Consequences

Positive: explicit trust boundaries, excellent UI/motion control, independently deployable web assets, deterministic test seams, and strong future isolation options.

Negative: additional setup and release coordination. Control this with one workspace, dependency rules, deterministic local mocks, contract tests, a compatible release manifest, and reversible adapters.

The decision does not approve vendors, deployment regions, authentication, personal data, model use, analytics, email, payments, CDN, feature flags, support tools, or code-sandbox infrastructure.

## Validation

The first issue #3 slice must render approved entry/mission routes from deterministic fixtures, expose one typed mock mission endpoint, record trusted mock events, return the deterministic score explanation, run unit/contract/browser/accessibility/bundle/security checks, prove local startup and one-command verification, and document deployment/observability/rollback without selecting production vendors.
