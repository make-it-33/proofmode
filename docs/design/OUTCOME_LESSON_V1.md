# Outcome before delegation lesson V1

- Status: implementation candidate
- Route: `/app/learn/agentic-coding/outcome-before-delegating`
- Approved source: `docs/product/PAGE_AND_SECTION_SPECS.md`
- Run ID: `2026-08-28-outcome-lesson-v1`

## User outcome

A learner turns a vague bundled request into an inspectable delegation contract containing an objective, an explicit in/out scope boundary, constraints, evidence, and done criteria. The learner then challenges the draft with a human self-check before it can reach the next checkpoint boundary.

## Experience hierarchy

Desktop is a broad source → builder → live contract workspace rather than a stretched mobile form. The bundled source remains visible on the left, the dominant composition task occupies the centre, and a live structural contract stays visible on the right. Mobile becomes one focused source-first sequence with a thumb-reachable action dock.

The progressive hint teaches an ordering method without supplying the scenario answer. The deterministic structure check verifies only presence and minimum inspectability; it never claims semantic quality or AI judgment. The learner must complete a separate human rubric before the local completion state.

## Acceptance and states

Required states: `ready`, `loading`, bundled `offline`, recoverable `error`, `incomplete`, `hint`, `checkpoint`, and `complete`. Unknown query values fail closed to ready. Error copy says nothing was sent or saved and retry is safe. Checkpoint/complete query states are explicitly labelled fixtures rather than learner progress.

Required behavior: source context, six bounded draft inputs covering five contract sections, live structural status, progressive hint, incomplete guidance, human self-check, explicit no-save exit, completion summary, and honest disabled checkpoint transition.

## Data, AI, and safety boundary

All source and lesson content is bundled. Draft text lives only in React component memory, is limited to 500 characters per field, renders as escaped React text, and disappears on refresh/exit. There is no account, browser storage, analytics, network/provider call, upload, score, rank, public activity, model judgment, or persisted completion. The existing 13+ product boundary remains unchanged.

## Non-goals

No real AI coach, semantic grading, hidden answer, authoritative score, checkpoint submission, saved progress, account, sandbox, Arena, Social, Premium, payment, or native distribution. The guided Frame checkpoint is the next slice.

## Accessibility and quality

Semantic landmarks, headings, labels, native textareas/checkboxes/buttons, error association, keyboard focus after phase changes, visible focus, non-color status, 44px controls, 390px no-overflow, 200%-equivalent resilience, forced-colors support, reduced motion, WCAG A/AA axe, strict TypeScript, domain tests, complete browser coverage, and existing JS/CSS/media budgets are merge requirements.

## Rollout and rollback

Roll out as one new client-only route linked from the Agentic Coding path after full verification and browser/axe checks pass. Roll back the route, lesson domain/state, stylesheet import, path launch control, tests, design/spec/handoff/run-log updates, and repository requirements together. No migration, remote data, cleanup, or credential rotation exists.
