# UX and UI system

## Experience model

ProofMode has two related but distinct surfaces:

- **Website:** cinematic, spacious, explanatory, human, and consequence-led.
- **Application:** calm, operational, evidence-led, repeatable, and denser.

Shared identity comes from typography, color relationships, line/workspace motifs, proof/evidence language, and restrained motion—not by forcing every route into one template.

## Core UX rules

1. One dominant user job and primary action per state.
2. Show the source/constraint before asking for a decision.
3. Distinguish real, local preview, fixture, disabled, and future behavior in plain language.
4. Keep evidence, uncertainty, and recovery visible.
5. Never use decoration to hide missing behavior.
6. Never use competition, rank, comparison pressure, guilt, or fake urgency as motivation.
7. Errors explain what failed, what was saved/sent, whether retry is safe, and the exit.
8. Destructive or consequential actions require clear scope and confirmation.
9. Contextual help appears near the relevant step; avoid walls of strategy text.
10. The app must remain useful without media, audio, 3D, network, or an AI response.

## Desktop composition

Desktop is not a widened mobile wizard.

- Repeated-use app rail: approximately 272px where already established.
- Working canvas may reach approximately 1,840px.
- Use a 12-column grid for complex workspaces.
- Put the dominant task in the largest region.
- Give Source/evidence, work/decision, and contract/review distinct spatial roles.
- Use sticky context only when it does not trap keyboard/zoom users or hide content.
- Constrain long prose to readable line length while allowing the overall workspace to remain broad.
- At 1440px and 1920px, avoid empty gutters surrounding a small card stack.

## Mobile composition

Mobile protects sequence and thumb reach.

- Target baseline: 390px without page-level horizontal overflow.
- Collapse to one primary stage at a time.
- Preserve source context before action; do not hide the evidence that makes the decision meaningful.
- Bottom/sticky actions must respect safe areas, zoom, content access, and navigation.
- Every visible control is at least 44×44px.
- Do not shrink desktop tables/cards until text and controls become unusable; transform them into a focused timeline or staged sequence.

## Visual hierarchy

- Page title: concise user job, not marketing slogan.
- State label: explicit and secondary.
- Primary action: one visually dominant control.
- Evidence and constraints: high legibility; never muted below accessible contrast.
- Warnings: state the consequence and recovery, not alarmist language.
- Cards: use only when grouping creates a real mental model. Avoid grids of interchangeable rounded rectangles.
- Empty space: use it to establish priority, not to make the app look unfinished.

Do not use generic AI gradients/orbs, decorative glass, fake terminals, giant copy, fabricated metrics/activity, or neon effects without product meaning.

## Website first impression

The opening viewport must contain:

- a human/product visual or credible product moment;
- a proportional statement of what ProofMode does;
- a clear current action;
- enough causal proof to distinguish the product;
- a media fallback with the same meaning.

The approved causal story is AI claim → contradictory evidence → human intervention → corrected order → safer outcome. Motion should reveal that relationship, not loop randomly.

## Lesson and checkpoint pattern

A focused learning surface uses:

1. **Outcome/contract** — what the learner must produce.
2. **Source** — request, artifacts, constraints, stakes.
3. **AI move** — visible proposal/change/claim.
4. **Verification controls** — checks and observations.
5. **Human decision** — accept/reject/modify/investigate with reason.
6. **Outcome** — what changed and uncertainty.
7. **Replay/next action** — one behavior to repeat or improve.

Pre-submit styling must not reveal the answer. Hints teach process order and questions, not solution text.

## State and recovery language

Use an allowlisted state parser. Unknown values fail closed to the ordinary ready state.

Common states: ready, loading, empty, offline, error, timeout, permission denied, expired, invalid, resume, incomplete, verification needed, decision needed, complete.

- Loading disables consequential actions and uses an accessible live status.
- Offline says what remains available and whether anything can sync.
- Error separates retryable failure from invalid/expired content.
- Exit warns about unsaved work when true.
- Completion names what actually happened; never fabricates cloud save, score, progress, AI review, or submission.

## Accessibility

Required for every changed UI route:

- semantic landmarks and logical headings;
- native controls and accurate accessible names;
- complete keyboard operation and visible focus;
- WCAG A/AA axe with zero violations plus manual contrast/focus review;
- non-color status and error treatment;
- 44px targets and 390px no-overflow;
- 200%-equivalent text/zoom resilience;
- reduced-motion behavior that preserves information;
- forced-colors resilience for custom controls;
- captions/transcript/static fallback for meaningful video/audio;
- no time pressure without pause/extension or an equivalent path.

Comfort options are preferences, never health, ability, honesty, or cheating signals.

## Motion and audio

Motion communicates cause, state, focus, progress, or spatial continuity. Prefer opacity/transform and short deliberate sequences. Continuous decorative motion is absent from the learning app. `prefers-reduced-motion` removes nonessential animation and retains the final explanatory state.

Audio is user initiated, optional, captioned/transcribed where meaningful, and never required to complete a task. No autoplay.

## Copy style

Short, specific, natural, non-blaming, and honest.

Prefer: “This draft stays on this page and disappears when you leave.”

Avoid: “Your progress has been securely saved!” when no persistence exists.

Do not promise jobs, income, intelligence, certification, rankings, active users, adoption, or unavailable platform support.

## Media rules

Every production asset needs rights/provenance, purpose, accessible alternative, dimensions/responsive behavior, loading strategy, and budget. Essential meaning survives media failure. Review visuals may document direction but never silently become production assets. See `MEDIA_INVENTORY.md`.
