# ADR 0008: no competition and canonical continuity pack

- Status: Accepted
- Date: 2026-08-28
- Decision owner: repository owner

## Context

ProofMode began with some game/competition explorations, but the approved product became a teen-first Agentic Coding learning system centered on evidence, verification, recovery, private replay, and professional craft. Historical Arena/rating material remained visible and could mislead future agents. The owner requested removal of competition from the user experience and a comprehensive in-repository handoff that preserves product, UX, technical, roadmap, payment, media, and implementation context.

## Decision

1. No Arena, PvP, rank, ladder, leaderboard, matchmaking, season, public score comparison, prize, or pay-to-win mechanic belongs in the active product or V1/V2 roadmap.
2. Private mastery, observable behaviors, replay, and a clear next practice action provide motivation.
3. Historical competition documents are superseded records only, not backlog or product authority.
4. `docs/handoff/` is the canonical detailed continuity pack. Root `AGENTS.md`, operational handoff, approvals, canonical product/page/roadmap specs, and quality bar retain higher authority.
5. Handoff images are lightweight reviewable SVG documentation assets. Exploratory binary screenshots/videos/ZIPs stay outside `main` unless promoted as production assets with rights, accessibility, optimization, and rollback.
6. Automated tests remain in `main`; “tester artifacts” means disposable manual/exploratory outputs, not test coverage.

## Consequences

- Canonical documents, architecture, quality checks, page maps, navigation, and future plans must omit active competition.
- Existing app code has no active Arena route. Dormant historical style/code cleanup can happen in a separately verified maintenance slice if it does not disrupt current routes.
- Reintroducing competition requires a new explicit decision and full youth-safety, privacy, fairness, moderation, architecture, accessibility, and UX review.
- Every meaningful run updates the operational handoff and run log; future agents inspect current `main` instead of relying on a permanently recorded head SHA.

## Alternatives rejected

- Keep competition optional: rejected because it continues to distort roadmap and handoff priorities.
- Delete all history: rejected because git history and a clearly marked record help future maintainers understand why the direction changed.
- Store the full private chat: rejected because durable decisions belong in structured specs, not personal/transient conversation logs.
