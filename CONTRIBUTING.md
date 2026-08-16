# Contributing

Read `AGENTS.md` and `docs/agent/HANDOFF.md` before changing the repository.

## Main-first delivery flow

- `main` is the canonical and locally testable project state.
- Keep commits coherent, reversible, and small enough to review.
- Do not leave completed work on long-lived branches. Use a temporary branch only when review tooling requires it, then merge approved work promptly.
- Use Conventional Commits where practical.
- Keep CI green and document evidence, security considerations, and rollback.

## Approval-aware work

Owner approval is required before committing to or implementing material product behavior, information architecture, UX, visual design, interaction, motion, image, video, audio, 3D, production marketing copy, monetization, or scoring-rule changes.

Research and clearly labeled options may be prepared before approval. Record every approval, revision request, and rejection in `docs/agent/APPROVALS.md`. Follow `docs/product/DESIGN_APPROVAL_GATE.md` and `docs/agent/WORKFLOW.md`.

## Local verification

```bash
npm run verify
```

For approved UI work, test keyboard-only navigation, screen-reader semantics, contrast, zoom, reduced motion, desktop, and 390×844. Capture relevant loading, empty, error, timeout, offline, recovery, and completed states.

## Handoff requirement

Every meaningful run must update `docs/agent/HANDOFF.md` and append the same run ID to `docs/agent/RUN_LOG.md`. The handoff must state current progress, active work, opportunity, limitations, weak spots, next plan, approval state, verification, blockers, and next-agent steps.

## Decision records

Create an ADR when a change affects architecture, a public contract, scoring, mission fairness, data retention, authentication, privacy, security, or a major vendor.

## Commit hygiene

Do not commit `.env` files, credentials, production datasets, private user content, generated evidence that could be mistaken for mission truth, or copied third-party content without a license. Update tests with behavior.
