# ADR 0007: Application-stack options for the first production slice

- Status: Proposed
- Date: 2026-08-17
- Owner decision: Pending

## Context

Issue #3 needs a production-quality web/PWA shell while ProofMode must protect hidden truth, deterministic scoring, bounded AI, youth privacy, trusted events, future worker isolation, local testability, portability, and rollback. No hosting, model, database, queue, storage, analytics, or observability vendor is selected.

## Criteria

Trust/security boundaries; deterministic testability and local DX; portability/reversibility; UI/PWA capability; reliability/observability; performance control; ecosystem leverage.

## Options

### A — Explicit React platform — recommended

React + Vite + React Router for the web; Fastify modular API; PostgreSQL/Kysely; separate worker; Redis/BullMQ only after a measured need; S3-compatible storage interface; OpenTelemetry; Vitest/Node tests/Playwright/axe.

Strengths: explicit browser/API/worker boundaries, strong portability, direct cache/header/CSP/bundle control, and a clean future path to isolated workers/sandboxes.

Costs: more initial setup, repository conventions, local orchestration, and release coordination.

### B — Next.js integrated web

Next.js App Router with explicit API and worker boundaries, PostgreSQL, queue/storage adapters, OpenTelemetry, Playwright/Vitest/axe.

Strengths: strong ecosystem, integrated routing/rendering, public-site velocity, and familiar hiring market.

Costs: cache ownership, server/client boundaries, rolling-deployment version skew, framework coupling, and the risk of hiding trusted work inside route handlers.

### C — React Router full-stack

React Router framework mode with server routes, PostgreSQL/Kysely, separate worker and storage/provider adapters, OpenTelemetry, Playwright/Vitest/axe.

Strengths: web-standard request/response model, fewer top-level concepts, and useful rendering choices.

Costs: smaller operational ecosystem and a need to validate worker/deployment/observability patterns in a spike.

## Recommendation

Select **A — Explicit React platform**. It makes hidden truth, AI gateway, event authority, scoring, and future sandbox boundaries architectural facts while keeping vendors replaceable and the web bundle independently deployable.

## Consequences

If A is approved, propose `apps/web`, `apps/api`, `apps/worker`, plus framework-independent packages for domain contracts, mission schema, scoring, UI primitives, observability, and deterministic fixtures. The web cannot depend on hidden truth or server adapters.

The stack decision alone does not approve vendors, deployment regions, authentication, personal data, model use, analytics, email, payments, CDN, feature flags, support tools, or code-sandbox infrastructure.

## Validation

The first issue #3 spike must render approved entry/mission routes from deterministic fixtures, expose one typed mock mission endpoint, record one trusted mock event, return one deterministic score explanation, run unit/contract/browser/accessibility/bundle/security checks, prove local startup and one-command verification, and document deployment/observability/rollback without selecting production vendors.
