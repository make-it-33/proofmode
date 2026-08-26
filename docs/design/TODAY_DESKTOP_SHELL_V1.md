# Today + broad desktop app shell v1

- Status: **Approved with desktop breadth correction; implementation review slice**
- Approval date: 2026-08-25
- Run ID: `2026-08-25-today-broad-desktop-shell-v1`
- Review route: `/app`
- Production switch: not included in this slice

## Owner decision

The owner approved the ProofMode app blueprint and six-screen visual concept pack, authorized page-by-page implementation, and requested one material correction: retain the focused mobile direction while making the desktop experience broader and less compact.

This document applies that correction to the global shell and Today page before Learn, Arena, Social, Profile, or Settings are implemented in detail.

## User outcome

A learner should land on Today and immediately understand:

1. the one real practice action available now;
2. the Proof Chain method used across ProofMode;
3. the Agentic Coding path that future checkpoints will follow;
4. which data and features are only preview fixtures;
5. that practice remains private, age-gated, and non-authoritative.

## Desktop composition

Desktop is a workspace, not a stretched mobile screen and not an admin dashboard.

- Persistent 272 px navigation rail at wide desktop sizes.
- Main canvas uses up to 1,840 px and a 12-column grid.
- The current practice occupies eight columns at ordinary desktop widths and nine columns at 1,900 px and above.
- The Proof Chain owns a separate supporting region rather than being squeezed into the main task.
- The Agentic Coding path spans the full canvas horizontally.
- Typography, spacing, and minimum panel heights increase with desktop width while keeping readable line lengths.
- The first viewport keeps one dominant action; secondary context supports rather than competes.

This deliberately avoids equal-width dashboard columns, dense metric cards, giant marketing typography, fake terminals, decorative glass, and unreadably small metadata.

## Mobile composition

- Hide the desktop rail and preserve a five-item bottom navigation pattern.
- Stack one task at a time with the primary action in thumb reach.
- Keep every actionable target at least 44 × 44 px.
- Preserve the complete Proof Chain, path sequence, safety note, and recovery states without page-level horizontal scrolling.
- Mobile does not inherit the desktop’s multi-region density.

## Current behavior

- `/app` renders Today as an unlinked review route.
- `/play`, `/entry`, and `/mission/northstar-sales-drop` keep their existing contracts.
- The only live action opens the existing private practice flow.
- Learn, Arena, Social, and Profile navigation entries are visibly unavailable and non-interactive; they do not simulate completed products.
- The default screen labels deterministic example content as `Preview data · not a rank`.
- The Agentic Coding path communicates curriculum architecture without claiming that checkpoints, progress, or rank already exist.

## State contract

Today accepts an allowlisted local review state through `?state=`:

| State | Meaning | Practice launch | Recovery |
| --- | --- | --- | --- |
| `ready` | Bundled fixture is available | Allowed through existing `/play` flow | Not needed |
| `empty` | No local run is available to resume | Allowed through existing `/play` flow | Start the current fixture |
| `loading` | Shell is waiting for local view data | Paused | No run is created |
| `offline` | Network is unavailable | Bundled fixture remains available | Clear offline explanation |
| `error` | Today could not be prepared | Paused | Explicit retry restores the ready fixture |

Unknown or hostile query values fail closed to `ready`; they are never rendered as content.

## Security and privacy boundary

- No API, model-provider, storage, analytics, or third-party request is added.
- No account, real profile, public rank, social graph, prompt, note, personal identifier, or hidden scoring truth is present.
- No `dangerouslySetInnerHTML`, executable model output, arbitrary URL, or user-generated HTML is used.
- Navigation to practice preserves the existing 13+ entry boundary instead of bypassing it.
- Error and loading states cannot start practice.
- Source data is bundled, deterministic, typed, and read-only.
- The UI explicitly warns against entering personal, school, account, health, financial, or third-party secrets.
- Live authentication, social/ranking data, model calls, uploads, and provider selection remain separate approval and threat-model gates.

## Accessibility contract

- One page-level `h1`; logical section headings below it.
- Semantic navigation, lists, definitions, status/alert regions, links, and buttons.
- Full keyboard operation and visible 3 px focus treatment.
- WCAG AA color intent with non-color labels for every status.
- 44 px minimum targets on desktop and mobile.
- `prefers-reduced-motion` removes entrance and control transitions without removing information.
- Forced-colors mode restores explicit control borders.
- Desktop, 390 px, 200% zoom-equivalent, and automated axe coverage are required before merge.

## Performance contract

- CSS and inline SVG only; no new runtime dependency, image, video, font, analytics script, or network request.
- No continuous ambient animation.
- The existing 180 KB JavaScript gzip, 25 KB CSS gzip, and 350 KB initial-media budgets remain binding.
- The review route must not change public-site LCP media behavior or the timed mission workspace.

## Acceptance evidence

Before review completion:

- `npm run verify` passes on a complete checkout;
- Today unit tests cover state allowlisting and privacy/network policy;
- Playwright covers 1,920 × 1,080 breadth, WCAG 2 A/AA axe results, all five states, recovery, 390 px overflow/targets, and reduced motion;
- screenshot review covers desktop and 390 px mobile;
- secret scanning finds no credential or token pattern;
- `/play`, `/entry`, and the current mission loop remain unchanged.

## Rollout and rollback

- Rollout: add `/app` as an unlinked review route on a temporary branch. Do not redirect the public `Open app` CTA yet.
- Owner review: compare the broad desktop screenshot with the approved concept before implementing Learn.
- Rollback: remove the `/app` route, `TodayRoute`, `todayState`, `today.css`, and their tests. No data migration or persisted state is involved.

## Explicit exclusions

This slice does not implement or imply:

- a real account, profile, skill score, rank, streak, leaderboard, friend invitation, or social graph;
- live Learn, Arena, Social, Profile, or Settings behavior;
- direct messaging, public profiles, open feeds, or discovery;
- a real AI/model call, code execution, sandbox, upload, database, telemetry, or backend;
- personal-data collection, public beta, employer/school access, payment, native app, or updater;
- replacement of the existing `/play` practice flow or public website CTA.
