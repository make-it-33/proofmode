# Approval ledger

This file records explicit owner decisions. Silence, old prototypes, generated artifacts, and agent recommendations are not approval.

## Decision ledger

| Date | Decision | Status | Authorized scope | Notes |
| --- | --- | --- | --- | --- |
| 2026-08-16 | Keep `main` canonical and easy to test | **Approved** | Repository workflow and completed work | Temporary branches only when tooling requires them; merge approved work promptly |
| 2026-08-16 | Require approval before product/design/media work | **Approved** | Governance rule | Ask before deciding or implementing material product behavior, UX, visual, motion, image, video, audio, 3D, or marketing creative |
| 2026-08-16 | Explore Signal Ops | **Exploration selected** | Detailed proposal only | Not approved for production |
| 2026-08-16 | Signal Ops approval pack v1 | **Revision requested** | No implementation authorized | Too much on-screen text, weak appeal, and vocabulary that felt AI-generated |
| 2026-08-16 | Prepare Gate 1 product-behavior options | **Approved** | Research and proposal only | No design or implementation authorized |
| 2026-08-16 | A — Make the call leads Phase 1 | **Approved** | Gate 1 behavior direction, technical proposal, and creative-direction exploration | No production design, stack choice, implementation, social/ranking features, or launch authorized |
| 2026-08-16 | Gate 2 Make the call directions v1 | **Pending owner decision** | None | Casefile, Live Case, and Workbench prepared; Casefile recommended |
| 2026-08-16 | B — Catch the miss / C — Ship the fix | **Not approved** | None | Retained as future candidates only |

## Always requires explicit approval

- Core user journey, mission mechanics, scoring rules, retention/social loops, monetization, or positioning.
- Information architecture, visual system, interactions, animation, generated/commissioned media, sound, 3D, or production marketing copy.
- Production stack/vendor decisions with lock-in, cost, privacy, security, or regional implications.
- Public launch, collection/sharing of personal data, destructive migrations, or irreversible actions.

## May proceed without a new approval

- Repository audits, research, tests, security reviews, documentation, issue hygiene, governance, and tool setup.
- Bug fixes that restore approved behavior and do not introduce a new UX or product rule.
- Reversible foundation work that does not decide an unapproved experience.

## Open approvals

1. Which Gate 2 creative direction should lead detailed Make the call exploration: Casefile, Live Case, or Workbench?
2. Is the later detailed vertical-slice design approved for implementation?
3. Which concrete application stack is approved after the vertical-slice ADR compares options?

## Recording a new decision

Append a row with date, exact decision, status, authorized scope, exclusions, and a link/reference to the reviewed artifact. If approval includes changes, reflect those changes in the proposed scope before implementation begins.
