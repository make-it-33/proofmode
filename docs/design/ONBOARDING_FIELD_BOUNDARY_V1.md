# Onboarding + field boundary v1

- Status: **Approved blueprint implementation; stacked review slice**
- Approval date: 2026-08-25
- Run ID: `2026-08-25-onboarding-field-boundary-v1`
- Review route: `/app/onboarding`
- Stack base: `app/today-desktop-shell-v1`
- Production switch: not included

## User outcome

A first-time learner should understand the product promise, make an explicit 13+ decision before any account data, choose one reversible goal, select the only real V1 field, choose a pressure-free pace, and set comfort preferences without creating an account or public profile.

## Product decisions

- Onboarding is short, interactive, reversible, and built around one focal decision at a time.
- Desktop uses a broad two-region composition rather than a centered mobile card: product promise and progress remain in the left story region while the current decision owns the main workspace.
- Mobile collapses the story region into a compact context header and keeps the current action thumb reachable.
- Agentic Coding is the only selectable V1 field. Design, Business, and Research are disabled and labeled as roadmap-only; no fake lessons or availability are implied.
- Goal and pace influence future recommendations only. They do not define identity, intelligence, worth, or competitive rating.
- A placement mission remains optional future work; this slice does not ask for unreliable self-ratings.

## Flow

1. Promise: learn, practise, prove, recover, and compete only when fairness gates pass.
2. Age boundary: truthful 13+ or under-13 choice without collecting a birthday.
3. Goal: start, improve, build, or prepare to compete.
4. Field: Agentic Coding available; future fields disabled honestly.
5. Pace: 5, 10, or 20 minutes as a recommendation—not a streak or pressure system.
6. Comfort: reduced motion, calmer timers, and spacious reading; none affect skill judgment.
7. Ready: ephemeral summary and link to the existing private `/play` checkpoint boundary.

Completed steps can be revisited. Closing or refreshing the route forgets every selection.

## State contract

| State     | Behavior                                     | Interaction         | Data effect    |
| --------- | -------------------------------------------- | ------------------- | -------------- |
| `ready`   | Normal local flow                            | Enabled             | None           |
| `loading` | Skeleton and status                          | Paused              | None           |
| `offline` | Clear banner; full local flow remains usable | Enabled             | None           |
| `error`   | Alert and explicit retry                     | Paused until retry  | None           |
| under 13  | Safe exit explanation                        | Website return only | No run/profile |

Unknown query-state values fail closed to `ready` and are never rendered.

## Privacy and security boundary

- No name, handle, birthday, school, exact location, contacts, occupation, health/disability information, prompt, upload, or account credential is requested.
- No API, network request, model call, storage, analytics, cookie, session mutation, public profile, rank, social graph, or provider is added.
- Selections exist only in component memory and are lost on refresh/close.
- The under-13 route does not encourage changing the answer and creates no run or profile.
- The existing `/play` → `/entry` 13+ boundary remains authoritative; this preview does not bypass it.
- All copy and options are static, typed, and rendered through React without user HTML or executable output.
- Real persistence, consent, account identity, retention, export/deletion, and launch-region policy remain separate approval gates.

## Accessibility contract

- One persistent page-level `h1`; each decision has a programmatically focused `h2`.
- Native radio and checkbox controls with visible labels.
- Semantic fieldsets, legends, progress navigation, status, and alert regions.
- Keyboard operation, visible focus, 44px targets, 200% zoom, 390px no-overflow, forced colors, and reduced motion.
- Preferences are not used as skill signals and accessible alternatives are not framed as cheating.
- CI axe must report zero WCAG 2 A/AA violations for the route before merge.

## Performance contract

- CSS and inline shapes only; no image, video, audio, font, runtime dependency, API, or analytics addition.
- No continuous animation. One short state entrance is removed under reduced motion.
- Existing JavaScript, CSS, and media budgets remain binding.

## Rollout and rollback

- Rollout as an unlinked stacked review route on `app/onboarding-field-boundary-v1`.
- Do not redirect the public CTA or make onboarding persistent in this slice.
- Roll back by removing the route, state module, stylesheet, tests, and design document. No data migration or cleanup is required.

## Explicit exclusions

- account creation, authentication, recovery, consent implementation, personal-data collection, or persistence;
- real placement scoring, self-rating, Skill Passport, rank, matchmaking, social data, direct messages, or notifications;
- AI/provider calls, uploads, code execution, analytics, payments, native distribution, or updater behavior;
- implementation of Learn content beyond the honest Agentic Coding field boundary;
- changes to `/`, `/play`, `/entry`, the mission route, Today, or the public website CTA.
