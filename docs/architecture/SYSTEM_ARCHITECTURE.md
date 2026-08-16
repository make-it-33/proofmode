# System architecture

## Decision

Start as a **modular monolith plus isolated workers**, not microservices. Iterate quickly while enforcing real boundaries around AI, scoring, and arbitrary code.

## Planned modules

- Web/PWA: marketing, onboarding, player, replay, profile, challenges.
- Application/BFF: authenticated commands/queries; hidden truth never exposed.
- Mission registry: immutable versions and artifact manifests.
- Run service: creates runs, enforces budgets, appends trusted events.
- AI gateway: provider adapters, policy, redaction, rate limits, timeouts, audit metadata.
- Scoring worker: pure versioned scoring over snapshot + events + submission.
- Competition: comparable cohorts, challenges, seasons, anti-abuse.
- Content studio: authoring, preview, blind QA, publishing.
- Sandbox worker: disposable environment for code/build missions.

## Data

Postgres is the system of record. Object storage holds immutable artifacts/result cards. Redis handles limits, queues, short-lived state, and cached boards. Analytics uses privacy-minimized stable events.

## Invariants

Published versions are immutable; run events are append-only/server-timestamped; hidden truth never reaches client or ordinary model context; every score records mission/engine/content hashes; replays derive from events; clients are not scoring authority.

## Stack criteria

Select concrete frameworks after a vertical-slice spike. Direction: TypeScript, React PWA, server BFF, Postgres, queue, object storage, OpenTelemetry-compatible tracing. Choose vendors by local DX, portability, regions, cost ceilings, and security.
