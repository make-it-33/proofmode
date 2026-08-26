# Learn hub V1

- Status: implementation candidate
- Route: `/app/learn` and `/app/learn/agentic-coding`
- Approved source: `docs/product/PAGE_AND_SECTION_SPECS.md`

## Outcome

A learner can see the complete Agentic Coding progression, understand why each capability matters, identify the first available lesson, and inspect its verified contract without an account, fake progress, rank pressure, or provider call.

## Hierarchy

1. Field, pace, storage, and preview boundary.
2. Dominant next lesson: “Define the outcome before delegating.”
3. Five-band capability map: Frame, Direct, Verify, Recover, Ship/Coordinate.
4. Explicit lesson states and lock reasons.
5. Lesson → guided practice → checkpoint → private replay cadence.
6. Proof Chain and trust boundary.
7. Honest future fields.

Desktop uses the established rail and a broad 12-column canvas. Mobile becomes a linear curriculum with a sticky next action above the app navigation. The screen never compresses the desktop map into tiny cards.

## Deterministic states

`ready`, `loading`, `empty`, `offline`, `error`, `unavailable`, `complete`, and `future` are allowlisted query fixtures. Unknown values fail closed to `ready`. Retry recovers locally. The complete state is labelled as a demonstration fixture, never learner progress.

## Data and safety boundary

All content is bundled. There is no account, personal data, browser storage, analytics, network request, provider call, score, rank, public activity, or persisted completion. The lesson contract is visible; the interactive lesson remains the next slice and is not fabricated.

## Accessibility and performance

Semantic landmarks/headings/lists, native links/buttons, visible focus inherited from the app shell, 44px controls, non-color status text, WCAG A/AA axe, 390px no-overflow, reduced-motion override, and current JavaScript/CSS/media budgets are required.

## Rollout and rollback

Roll out behind the new routes and app navigation after the full repository and Playwright suites pass. Roll back by removing the Learn routes, stylesheet import, Today link, domain state, tests, documentation, and repository requirements as one unit. No migration or data cleanup exists.
