# Casefile Gate 3 — vertical-slice proposal v1

- Status: **Approved for issue #3 implementation**
- Date: 2026-08-17
- Owner approval: 2026-08-17
- Product behavior: Make the call (ADR 0004)
- Creative direction: Casefile (ADR 0005)
- Audience: ages 13+, learner-first (ADR 0006)
- Application foundation: A — Explicit React platform (ADR 0007)
- Reference mission: `mission_northstar_sales_drop_v1`
- Reference scorer: engine `1.0.0`

## Approval outcome

The owner approved the detailed journey as shown and delegated the final stack selection to the agent based on professional UI/UX, security, animation, and desktop/mobile quality. ADR 0007 selects A — Explicit React platform.

This authorizes one production-quality web/PWA shell on canonical `main`, built against deterministic mock contracts with tests, security, accessibility, performance, observability, and rollback. It does not authorize public launch, real model/provider use, personal-data collection, employer access, social/ranking systems, monetization, native apps, code sandboxes, or unreviewed production media.

## Product promise

`Make the call. Show your proof.`

A six-minute investigation where AI is useful, fallible, and never the judge. The learner reviews evidence, may ask AI, checks consequential claims, submits one supported cause and first action, sees a deterministic explanation, and practices one better behavior.

## Journey

1. **Promise** — show the real mission, six-minute duration, five sources, optional AI, and submission contract without invented cohort claims.
2. **Entry / 13+ boundary** — explain the game before the clock; confirm 13+ before account creation or personal-data collection; under-13 creates no run.
3. **Evidence-first mission** — desktop uses evidence list, readable source, notes/AI panel, timer, pinned sources, and Build my call. Mobile preserves the reading order with one active surface and bottom navigation.
4. **Challenge the AI claim** — AI suggests the planted `price increased 22%` mistake; the learner checks the cited derived dashboard and links the primary packaging memo as refuting evidence.
5. **Structured call** — one cause, one first action, at least two sources, and remaining uncertainty. Word count, prose style, prompt length, and AI-call count never score by themselves.
6. **Deterministic explanation** — show all six subscores, reasons, mission/scorer versions, and trusted events. The example is 95, not a percentile or employability claim.
7. **Replay** — show pivotal events rather than surveillance video; raw private text stays private. End with one concrete practice behavior.
8. **Failure/recovery states** — loading, AI empty, offline, AI timeout, rate limit, time expiry, resume, invalid mission, expired run, delayed score, under-13, completion, plus the implementation-only state inventory.
9. **System** — graphite field, warm evidence paper, restrained lime for player focus/action, Georgia for framing, system sans for product, mono for time/IDs. No robot, brain, hologram, fake terminal, crime board, AI gradient, or answer-revealing color.
10. **Scope** — implement the journey while data, vendor, region, media, employer, social, payment, native, and sandbox decisions remain separate.

## Trust and scoring contract

- Hidden truth, expected actions, scoring annotations, and secret fixtures stay server-side.
- AI never evaluates the learner or reveals truth/score.
- Claims link to source IDs, versions, and support/refute judgments.
- Final submission and score retry are idempotent.
- Score dimensions and weights remain Outcome 35%, Verification 20%, Judgment 15%, Efficiency 10%, Communication 10%, Recovery 10%.
- Demonstrated subscores: 100 / 100 / 100 / 62 / 83 / 100; raw weighted score 94.5; JavaScript rounding produces 95.
- The score describes one run, not intelligence, worth, or employability.

## Required state behavior

Every state says what happened, what was preserved, and what can happen next. Required routes include loading/verification, empty list, AI empty, offline, AI timeout, rate limit, time expiry, resume, invalid mission/hash mismatch, expired scored run, delayed score/retry, under-13 exit, completion, unauthorized access, deletion/export pending, account recovery, unsupported browser, reduced-data mode, and maintenance rollback.

## Accessibility and performance

- Complete keyboard path, visible focus, semantic headings/controls/status, screen-reader names and announcements.
- WCAG AA contrast; labels/borders/position accompany color.
- 44×44 px targets, 200% zoom, reduced motion, and no page-level horizontal scroll at 390 px.
- Manual keyboard, zoom, high-contrast, and representative assistive-technology review remain required in addition to automation.
- Targets: LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1, initial-route JS ≤180 KB gzip, critical CSS ≤25 KB gzip, initial mission media ≤350 KB, no autoplay video.

## Privacy and security boundary

- Under-13 unsupported in Phase 1.
- Learner results stay private and inaccessible to employers/schools.
- Exact launch regions, age assurance/consent, identity fields, retention, export, deletion, provider processing, support access, and public-beta collection require a separate approval.
- Trusted mission registry, run events, authorization, sanitization, bounded AI, abuse controls, structured redacted logs, metrics/traces, reversible migrations, and rollback are implementation requirements.
- Code missions remain excluded until disposable sandbox isolation, egress control, quotas, secret protection, and teardown are proven.

## Acceptance criteria for issue #3

1. First-time learners identify objective and primary action within 20 seconds in moderated testing.
2. Desktop and 390 px layouts cover the approved journey without overlap or page-level horizontal scroll.
3. Deterministic fixtures render every required route/state.
4. Hidden truth/scoring data are absent from client fixtures and bundles.
5. Unit, contract, integration, browser, accessibility, performance, and security checks cover success, interruption, retry, and recovery.
6. Score/replay are derived from trusted mock events rather than hard-coded claims.
7. Observability and rollback are documented and tested.
8. No provider, personal-data, employer, public-launch, social, payment, native, or sandbox scope slips into the slice.
9. Handoff and run log update in every meaningful commit.

## Proposal verification

- A self-contained ten-frame HTML proposal was built without external assets.
- Deterministic score trace passed: overall 95, submitted at second 350, six AI calls.
- Structural browser QA passed at 1440 px and 390 px: 10 frames, one H1, no external requests, no console/resource failures, no horizontal overflow, no undersized visible targets, no unlabeled buttons, reduced-motion rule present, and no fake-percentile pattern.
- Desktop frames 1–10 and mobile core-journey frames 1–7 were visually inspected one at a time with no broken layout found.
- Final downloadable proposal packaging and the remaining mobile system/scope inspection were interrupted by a local artifact sandbox reset. This limits the proposal archive claim, not the approved implementation acceptance criteria; production visual QA must be complete before the slice is considered done.
- Custom QA is not a full WCAG, screen-reader, or representative learner audit.

## Exact authorization boundary

Implement only issue #3 with deterministic mocks on the approved stack. Keep launch regions, personal data, consent, providers, deployment vendors, production media, employer/school features, rankings/social, payments, native apps, and code sandboxes behind later explicit gates.
