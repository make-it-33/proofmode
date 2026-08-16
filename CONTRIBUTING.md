# Contributing

## Main-first delivery flow

- `main` is the canonical and locally testable project state.
- Keep commits coherent, reversible, and small enough to review.
- Do not leave completed work on long-lived branches. Use a temporary branch only when review tooling requires it, then merge approved work promptly.
- Use Conventional Commits where practical.
- Keep CI green and document evidence, security considerations, and rollback.
- Visual, interaction, animation, image, video, audio, and marketing-creative work requires recorded owner approval before implementation.

## Local verification

```bash
npm run verify
```

For approved UI work, test keyboard-only navigation, reduced motion, 1440×900, and 390×844. Capture relevant loading, empty, error, timeout, offline, and completed states.

## Decision records

Create an ADR when a change affects architecture, a public contract, scoring, mission fairness, data retention, authentication, privacy, or a major vendor.

## Design approval

Follow `docs/product/DESIGN_APPROVAL_GATE.md`. Approval applies only to the shown direction and scope; material deviations require another approval.

## Commit hygiene

Do not commit `.env` files, credentials, production datasets, or copied third-party content without a license. Update tests with behavior.
