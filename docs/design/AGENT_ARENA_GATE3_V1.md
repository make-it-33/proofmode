# Agent Arena Gate 3 — detailed recovery proposal v1

- Date: 2026-08-18
- Status: **Awaiting owner approval**
- Selected direction: Agent Arena
- Production implementation: **not yet approved**
- Reference mission: `mission_northstar_sales_drop_v1`
- Artifact: `ProofMode-Agent-Arena-Gate3-v1.zip`
- Package size: `1,402,197 bytes`
- Package SHA-256: `8a5f717c5f2a77744f2749a3a6832ee0e7eda2e90dac6126f94323f2dd0eeada`
- HTML SHA-256: `a8fab75c81d3fc71c79167d37ade9caacc5b7f38f3de75ef22cbeafbde75b3e9`

## Why this replaces the rejected build

The first Casefile implementation looked like an old editorial landing page plus a document-heavy three-column admin tool. Agent Arena instead treats ProofMode as a premium competitive skill game for ages 13+ learners who want credible AI and coding capability.

The proposal removes:

- the oversized serif hero;
- the document-reader-first identity;
- equal-width admin columns;
- tiny metadata as primary communication;
- AI as a generic chat tab;
- flat inspect-and-submit pacing.

It introduces:

- compact contemporary sans typography;
- a bold, controlled color system;
- one focal interaction per state;
- visible Scout → Challenge → Lock rounds;
- AI claims as inspectable moves;
- a visual proof chain;
- an explicit recovery moment when the player corrects consequential AI output;
- a deliberate lock action and explanatory replay payoff.

## Core journey shown

1. **Home / today’s trial** — compact promise, real mission card, six-minute/three-round contract, immediate action.
2. **Scout** — browse a horizontal signal deck, inspect one focal source, add useful evidence to the proof chain.
3. **Challenge** — AI presents a consequential but untested move; the player chooses the best primary-source check.
4. **Recovery** — the AI admits the pricing conclusion was too strong; the proof chain visibly changes.
5. **Lock** — assemble one cause, one first action, two or more sources, and remaining uncertainty.
6. **Result** — explain six deterministic dimensions and pivotal events without claiming intelligence, worth, employability, percentile, or rank.
7. **System** — color, type, reusable components, motion budget, failure states, and exact authorization boundary.

## Desktop composition

- Compact mission header with case, round progress, timer, and exit.
- Main arena gives most space to the current signal or AI move.
- Secondary proof chain supports the task rather than creating three equal admin columns.
- Signal deck is horizontal and inspectable.
- Contextual action area changes with the round.
- Notes remain secondary and are not the visual identity.

## Mobile composition

- One focal task per screen.
- Compact mission identity and timer.
- Round progress remains visible without a permanent five-mode navigation bar.
- Signal deck can scroll independently.
- Primary action remains thumb reachable.
- Proof chain and supporting tools appear contextually rather than crowding the viewport.

## Visual system

- Ink `#141419`
- Action orange `#FF5D38`
- Proof lime `#DFFF4F`
- Focus blue `#5367FF`
- Warm field `#F3F0E7`
- System sans typography; mono reserved for compact IDs/time.
- Solid color and outlined geometry instead of glass, generic AI gradients, or cyberpunk neon.
- Original CSS-only ring/proof-chain motif; no third-party media or assets.

## Motion and feedback

- card focus: `160 ms`;
- round shift: `200 ms`;
- recovery beat: `260 ms`;
- reduced motion: `0 ms` plus immediate border/icon/state changes;
- no continuous ambient animation during timed reading;
- no color or motion implies correctness before submission.

## Failure and recovery behavior

The detailed production pass must retain:

- AI timeout with continue-without-AI path;
- offline preservation and unavailable-action labels;
- time expiry explaining what stayed and that nothing submitted;
- exact-state resume;
- invalid/expired mission handling;
- delayed score and retry;
- under-13 no-run exit;
- reduced-data and reduced-motion modes.

## Accessibility and trust

- complete keyboard path and visible focus;
- WCAG AA contrast in production;
- labels/icons/position alongside color;
- minimum 44×44 px mobile targets;
- 200% zoom and 390 px path;
- screen-reader announcements for round, AI-claim, proof-chain, expiry, and recovery changes;
- answer-neutral evidence states;
- no fabricated user, rank, cohort, outcome, or employer claim.

## Artifact verification

A self-contained HTML artifact was captured at desktop `1440×960` and mobile `390×844` for seven states each.

Automated structural QA result: `14 screens`, `0 findings`.

Checked:

- no console or page errors;
- exactly one active screen per route;
- no page-level horizontal overflow;
- no unnamed visible product buttons;
- no sub-44 px visible product targets on mobile after correction;
- reduced-motion transition duration `0s`.

The package includes all 14 captures, machine-readable QA, the interactive HTML, a README, and provenance record. Automated axe was unavailable in the artifact sandbox; repository Playwright/axe and manual accessibility review remain mandatory for production implementation.

## Exact approval request

Approval would authorize replacing the rejected production UI with the shown Agent Arena direction for issue #3:

- home/today’s mission;
- Scout, Challenge, Recovery, and Lock states;
- proof-chain interaction and AI-move presentation;
- responsive desktop/mobile composition;
- shown token/component system and bounded motion intent;
- result/replay presentation using deterministic trusted mock events;
- required empty/error/timeout/offline/expiry/resume states;
- implementation tests, accessibility, performance, security, rollback, and visual comparison evidence.

Approval would **not** authorize public launch, personal-data collection, infrastructure or AI providers, employer/school access, social/rankings, payments, native apps, code sandboxes, or production image/video/audio/3D assets.
