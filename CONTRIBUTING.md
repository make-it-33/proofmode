# Contributing

## Branch and pull-request flow

- Branch from `main` using `feat/`, `fix/`, `docs/`, `chore/`, or `research/`.
- Keep one coherent outcome per pull request.
- Use Conventional Commits where practical.
- Complete the pull-request template with evidence, tests, security, and rollback notes.
- Require passing CI and one review before merge. Prefer squash merge.

## Local verification

```bash
npm run verify
```

For UI work, test keyboard-only navigation, reduced motion, 1440×900, and 390×844.

## Decision records

Create an ADR when a change affects architecture, a public contract, scoring, mission fairness, data retention, authentication, privacy, or a major vendor.

## Commit hygiene

Do not commit `.env` files, credentials, production datasets, or copied third-party content without a license. Update tests with behavior.
