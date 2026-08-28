# Current implementation state

- Snapshot date: 2026-08-28
- Product stage: private pre-alpha and public web preview
- Operational branch: inspect the current `main` head
- Durable product baseline: PR #16 merge `18c90438e0efc876f26cc5fe84287e31a3dc8616`
- Prior continuity baseline: PR #18 merge `da36f1b8ed886e4dc5220197565614aa6c89c385`

This document is deliberately merge-stable. The branch head will move when documentation or product work merges; future agents must inspect `main` rather than editing this file only to chase its own merge SHA.

## Live surfaces

- Public: `https://make-it-33.github.io/proofmode/`
- App: `https://make-it-33.github.io/proofmode/app`
- Learn: `https://make-it-33.github.io/proofmode/app/learn`
- Agentic Coding: `https://make-it-33.github.io/proofmode/app/learn/agentic-coding`
- First lesson: `https://make-it-33.github.io/proofmode/app/learn/agentic-coding/outcome-before-delegating`

GitHub Pages exposes app-preview routes, but reachability does not imply a production account, persistence, AI provider, payment system, native app, or authoritative learning record.

## Implemented route map

| Surface | Route | State |
| --- | --- | --- |
| Home | `/` | Implemented and published |
| About | `/about` | Implemented and published |
| Guide | `/guide` | Implemented tutorial preview |
| Premium | `/premium` | Honest future-value information only |
| Support | `/support` | Local feedback/help preview |
| Download | `/download` | Web action live; native disabled honestly |
| Promise | `/play` | Implemented private product entry |
| Age boundary | `/entry` | Implemented authoritative 13+ decision |
| Mission foundation | `/mission/northstar-sales-drop` | Implemented deterministic checkpoint foundation |
| Today | `/app`, `/app/today` | Implemented broad desktop/focused mobile workspace |
| Onboarding | `/app/onboarding`, `/app/setup` | Implemented seven-step private local flow |
| Learn | `/app/learn` | Implemented curriculum hub |
| Agentic Coding path | `/app/learn/agentic-coding` | Implemented five-band path |
| Outcome lesson | `/app/learn/agentic-coding/outcome-before-delegating` | Implemented interactive focused lesson |
| Guided checkpoint | `/app/checkpoint/outcome-before-delegating-v1` | **Next; not implemented** |
| Result/replay | `/app/result/:runId` | Planned after checkpoint |
| Private progress | app shell/path surfaces | Planned after coherent result loop |
| Profile | `/app/profile` | Planned private guest/account-aware shell |
| Settings | `/app/settings` | Planned after progress contract |

There is no Arena route in the active application. Competition routes are removed from the active roadmap.

## Implemented sequence

1. The public site explains the value and routes to `/play`.
2. `/play` explains the private practice promise.
3. `/entry` enforces the 13+ boundary without asking for a birthday or identity.
4. `/app` presents the current learning context in a broad desktop workspace and focused mobile sequence.
5. `/app/onboarding` selects a reversible local goal, Agentic Coding field, pace, and comfort options.
6. `/app/learn` and the Agentic Coding path explain five bands: Frame, Direct, Verify, Recover, Ship/Coordinate.
7. The first lesson turns a vague request into objective, in-scope, out-of-scope, constraints, evidence, and done criteria.
8. The next checkpoint will require applying that brief through the entire Proof Chain.

## First lesson contract

Route: `/app/learn/agentic-coding/outcome-before-delegating`.

- Broad desktop: source → builder → sticky live contract.
- Focused mobile: source-first linear sequence plus accessible action dock.
- Six fields, each limited to 500 characters.
- Deterministic presence/inspectability checks only.
- Progressive hint teaches order without writing the answer.
- Five human self-checks remain learner controlled.
- Draft exists only in component memory and is lost on exit/refresh.
- States: ready, loading, bundled offline, error/retry, incomplete, hint, checkpoint fixture, complete fixture.
- Unknown state values fail closed to ready.
- No semantic AI judgment, hidden answer, account, storage, analytics, request, upload, score, rank, public activity, or persisted completion.

## Merge history that defines the current product

| PR | Durable outcome | Merge |
| --- | --- | --- |
| #10 | Approved public website V6 direction | `9c7b5c39a8d43c75b78515c58be50b22be83c82f` |
| #11 | Today broad desktop/focused mobile shell | `f0450d04349353fdc5fd2c6bdf1a92386d7b9430` |
| #12 | Onboarding and field boundary | `7744dcd0ee5911e362972f5de5aba7890790e2ec` |
| #13 | Public accessibility baseline | `932a1895cee1a4c8a721f8c6de367c87392a30cc` |
| #14 | Canonical repository operating system | `2e87e4f83b065fa4d741ab9cb7c14eeac79c7c12` |
| #15 | Learn hub and Agentic Coding path | `699a45629bf564f7153a8a40810279b2b31385b6` |
| #16 | First focused lesson | `18c90438e0efc876f26cc5fe84287e31a3dc8616` |
| #17 | Rollout evidence | `7ca8d9653e8a1784d05266a87e9679adc2cc76e4` |
| #18 | Merge-stable handoff state | `da36f1b8ed886e4dc5220197565614aa6c89c385` |

## Latest verified evidence before this continuity update

- Full lesson PR run `33162592318`: verify `98820362324`, browser `98820362481`, 23/23 Playwright/axe tests.
- Product post-merge CI `33162922734`: verify `98821441727`, browser `98821441587`.
- Product Pages `33162922736`: build `98821441829`, deploy `98821527564`.
- Latest prior canonical-main CI `33172916612`: verify `98854223568`, browser `98854223234`.
- Latest prior Pages `33172916668`: build `98854223952`, deploy `98854324989`.

Do not claim GitHub Advanced Security secret scanning passed; it is unavailable for this repository. Direct interactive production smoke was not repeated in the earlier runtime because the user-visible browser connection was unavailable. The Pages build/deploy and full local/CI browser suite passed.

## Current limits

- No durable draft or progress.
- No account, authentication, consent storage, sync, export, deletion, or recovery.
- No real AI gateway, provider evaluation, redaction pipeline, or cost controls.
- No upload or arbitrary code execution; no secure sandbox exists yet.
- No authoritative result service or immutable server event log.
- No checkout, entitlement, subscription, receipt, refund, or tax handling.
- No signed Windows/macOS package or updater.
- No competition, rank, ladder, leaderboard, matchmaking, or public comparison is planned.
- Public CTA remains `/play` until the product entry is separately reviewed.

## Immediate next slice

Build `/app/checkpoint/outcome-before-delegating-v1` as a deterministic guided checkpoint using the bundled dashboard scenario. Require Source → AI move → Verification → Human decision → Outcome, explicit uncertainty, and a reviewable final decision. Do not add provider AI, uploads, execution, persistence, accounts, public scoring, or competition. Then build private result/replay, followed by truthful private local progress.
