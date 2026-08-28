# ProofMode system architecture

- Status: **Canonical architecture direction**
- Updated: 2026-08-28

## Current implementation

ProofMode is currently a static React/Vite application deployed to GitHub Pages with bundled deterministic content and no connected backend authority.

Current layers:

- route composition in `apps/web/src/app/App.tsx`;
- route components in `apps/web/src/routes/`;
- deterministic state/domain logic in `apps/web/src/domain/`;
- reusable run/player/scoring foundations in `packages/`;
- unit/Vitest and Playwright/axe checks;
- repository, governance, mission, client-boundary, and bundle/media scripts;
- route-level lazy JS/CSS for the focused lesson.

No account, database, cloud progress, provider AI, analytics, upload, arbitrary execution, payment, entitlement, native updater, or competition authority exists.

## Current boundary rules

- Browser state is presentation/local-preview state and is not authority for permission, entitlement, consequential completion, result, or audit.
- Unknown route/review state values fail closed.
- Bundled content and deterministic adapters remain the default until connected systems are explicitly approved.
- Hidden truth, answer manifests, provider/signing/webhook keys, and private prompts never ship to the client.
- The focused lesson keeps its stylesheet behind the lazy route boundary.

## Future architecture decision

Start connected V2 as a **modular monolith plus isolated workers**, not microservices. Keep deployment/operations simple while enforcing hard trust boundaries around identity, AI, payments, content publishing, and arbitrary code.

Concrete vendors/frameworks remain unselected until a vertical-slice spike compares local DX, portability, regions, privacy, security, cost ceilings, lock-in, and rollback.

## Planned modules

### Web/PWA

Public website, onboarding, Today/Learn, lessons, checkpoints, private result/replay, local/account progress, Profile, Settings, support, and premium information. It is an untrusted client.

### Application/BFF

Authenticated typed commands/queries, authorization, idempotency, input limits, and orchestration. Hidden truth and provider/payment credentials stay behind this boundary.

### Content registry

Versioned fields/paths/lessons/checkpoints, source artifact manifests, accessibility/content-QA metadata, immutable published versions, and rollback.

### Run service

Creates/resumes/completes private runs, enforces content version and limits, appends trusted events, and derives replay inputs. It does not create public comparison.

### Private result engine

Pure versioned deterministic feedback over a content snapshot, trusted events, learner decision, and evidence. Produces explanation/replay/integrity status. No rank, percentile, leaderboard, or cross-user comparison.

### AI gateway

Purpose-specific typed provider adapters, redaction, context/tool policy, prompt-injection controls, rate/token/time/cost limits, cancellation, timeout/retry/fallback, evaluations, safe audit metadata, and kill switch. Model output is never final result authority.

### Sandbox worker

Disposable isolated code execution with no production/provider secrets, denied-by-default network, read-only base, ephemeral filesystem, process/CPU/memory/time limits, dependency policy, cleanup, abuse/rate/cost controls, audit, and kill switch.

### Account and privacy

Identity/session/device security, consent/region state, authorization isolation, recovery, retention, export/deletion, migration, backup/restore, discovered-under-13 response, and privacy-support operations.

### Entitlement and payment

Server-authoritative capabilities, provider customer/subscription mapping, signature-verified idempotent webhook ledger, reconciliation, receipts/refunds/disputes, support, and billing kill switch. ProofMode does not handle raw card data.

### Content studio

Role-based drafts, preview, blind content/accessibility/safety QA, immutable publishing, provenance, and rollback. Generated content requires human review.

### Notifications/support

Opt-in, quiet, rate-limited notifications only when a real service exists; transmitted feedback/support with privacy, retention, abuse, and incident handling.

There is no competition, rating, leaderboard, matchmaking, season, or public-comparison module.

## Data classes

1. Public product/content metadata.
2. Private learner settings/progress/run decisions.
3. Sensitive account/session/consent/recovery records.
4. Secret credentials/signing/webhook/provider material.
5. Hidden answer/evaluation content.
6. Billing/entitlement/audit metadata.
7. Untrusted uploads/external/model content.

Each connected data class needs purpose, minimum fields, region, retention, access policy, export/deletion behavior, logs, encryption, backup/restore, incident handling, and owner approval before collection.

## Authority and versioning

- Published lesson/checkpoint versions are immutable; material changes create a new version.
- Trusted events are append-only and server-timestamped.
- Every authoritative result records content/engine/policy version identifiers.
- Replays derive from trusted events plus immutable content.
- Client timestamps, flags, or redirects never grant authority.
- Entitlements derive from verified server/provider events.
- Local progress uses explicit schema/content versions and opt-in migration to accounts.

## Event principles

Events are purpose-specific, typed, idempotent where needed, and privacy minimized. Do not log raw prompts, uploads, source files, secrets, tokens, or unnecessary identity. Analytics and operational audit are separate systems/purposes.

## Deployment evolution

Current: static Pages build with SPA fallback.

Future connected rollout:

1. deterministic local adapter and contract tests;
2. private development environment;
3. migration/backup/restore proof;
4. security/privacy/youth review;
5. limited opt-in beta by approved region;
6. staged rollout, telemetry/cost alerts, kill switch;
7. rollback without data loss.

Native clients remain thin clients of the same authority boundaries and require signed/notarized packages and secure update/rollback.

## Observability

Use OpenTelemetry-compatible tracing/metrics where approved. Record latency, availability, error class, retry/fallback, rate/cost, content/policy version, and redacted audit context. Never use observability as permission to collect learner content. Define alerts and ownership before launch.

## Architecture quality gate

A connected capability cannot ship without typed contracts, trust/authority definition, failure/recovery states, threat model, privacy/data lifecycle, cost ceiling, tests, observability, staged rollout, rollback, and an ADR/vendor approval where material.
