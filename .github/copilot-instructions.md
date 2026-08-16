# Copilot instructions for ProofMode

Read `AGENTS.md`, `docs/agent/HANDOFF.md`, and `docs/agent/APPROVALS.md` before proposing or changing code.

Do not decide or implement unapproved product behavior, UX, visual design, motion, media, marketing copy, monetization, or scoring rules. Research may prepare options; explicit owner approval must be recorded before implementation.

Preserve deterministic, explainable, versioned scoring. Model output never assigns the final score. Never expose hidden mission truth, provider credentials, scoring manifests, or private content to the browser.

Prefer a small complete vertical slice. Add behavior, abuse-case, accessibility, and failure/recovery tests. Run `npm run verify` before completion.

Every meaningful run updates `docs/agent/HANDOFF.md` and appends the same run ID to `docs/agent/RUN_LOG.md`. Durable decisions require an ADR.
