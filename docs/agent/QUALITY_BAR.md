# ProofMode professional quality bar

- Status: **Mandatory merge and release standard**
- Updated: 2026-08-28

Professional quality is useful, coherent, intentional, honest, accessible, secure, private, fast, recoverable, tested, documented, maintainable, and reversible—not merely visually polished.

## Severity

- **P0:** secret/private/hidden-truth exposure; critical authorization, arbitrary execution, destructive-data, youth-safety, corrupt-authority, or unusable-route defect. Blocks all integration.
- **P1:** red required CI; WCAG A/AA defect; keyboard trap/mobile overflow/obscured primary action; fake claim; missing critical recovery; unapproved data expansion; budget breach; missing spec/handoff/rollback; active competition/comparison mechanics. Blocks the slice.
- **P2:** meaningful inconsistency, confusing copy, or noncritical maintainability/observability/content gap. Fix before release or track explicitly.

No P0/P1 is waived by skipping, suppressing, disabling, renaming, or weakening a check.

## Product and learning

A complete slice solves one user job, fits dependency order, states non-goals, makes the next action clear, distinguishes real/preview/fixture/disabled/future, and has measurable acceptance/rollback.

Every lesson teaches a transferable behavior. Every checkpoint requires observable action/artifact/decision/explanation. Show Source, AI move, Verification, Human decision, Outcome, constraints, uncertainty, and recovery. Pre-submit UI does not reveal the answer. Feedback names behavior/evidence and one next action. Accessible alternatives measure the same behavior.

No competition, rank, ladder, leaderboard, matchmaking, public comparison, pay-to-win, guilt, energy, fake urgency, or manipulative streak loss.

## UX and visual craft

- One dominant task/decision and primary action per state.
- Desktop uses broad intentional composition, never enlarged mobile cards/admin dashboard.
- Mobile works at 390px, 44px controls, thumb-reachable actions, no obscured content, essential context preserved.
- Complete applicable ready/loading/empty/offline/error/timeout/invalid/expired/resume/incomplete/complete/recovery states.
- Coherent hierarchy/tokens across website, app, lesson, checkpoint, result, replay.
- Reject generic AI gradients/orbs, decorative glass, fake terminals, interchangeable card grids, giant copy, fake metrics/users/testimonials/activity, and controls without contracts.
- A screen is vibe-coded when decoration masks missing behavior, desktop is stretched mobile, copy repeats strategy instead of enabling action, or implementation cannot explain architecture/tests/security/privacy/performance/rollback.

## Motion, media, and content

Motion shows cause, consequence, focus, state, or continuity. No decorative “Play proof” or autoplay audio. Meaningful media has captions/transcript/static fallback, provenance/rights, responsive treatment, failure behavior, and budget. Reduced motion preserves all meaning.

Copy is short, specific, natural, non-blaming, and honest. Never invent statistics, outcomes, social proof, availability, save/progress, AI action, payment, intelligence, employability, certification, or comparison.

## Accessibility

Every changed UI route requires semantic landmarks/headings; native controls; accurate names; keyboard/visible focus; zero WCAG A/AA axe violations; manual contrast/dynamic-focus review; non-color cues; 44px controls; 390px and 200%-equivalent no-overflow; reduced motion; forced-colors resilience; captions/transcript/alt treatment; and equivalent paths for time/motion/media constraints.

Automated axe is necessary, not sufficient. Comfort preferences are never health/skill/cheating signals.

## Engineering

Use strict TypeScript, typed trust boundaries, pure deterministic domain logic outside UI/providers, explicit modules, no hidden global state, no client-authoritative permission/entitlement/consequential completion/result, immutable published versions, append-only trusted events when backend exists, safe errors, minimal dependencies, ADRs for material decisions, and reversible/tested migrations.

## Tests

- Unit: parsing/allowlists, progression/prerequisites, boundaries/limits, privacy/security flags, deterministic behavior.
- Contract/integration: schemas, authz, storage lifecycle/idempotency, provider timeout/cancel/retry/fallback, hashes/version/replay, payment webhooks/entitlements when present.
- Browser: golden path; under-13; keyboard/focus; desktop breadth; 390px/44px; zoom; states/retry; reduced motion; forced colors; axe; route/trust boundaries.
- Security/abuse: untrusted content, injection/tool misuse, uploads, rate/cost, cross-user access, sessions, sandbox escape/network/secrets, hidden truth leakage.

A flaky test needs issue, cause, mitigation, owner, and removal date; it is never silently ignored.

## Security, privacy, and AI

No secrets/private data/hidden truth in source client. No direct browser provider. Validate, escape, authorize, rate-limit, and least-privilege inputs. Minimize personal data; define purpose/region/consent/retention/export/deletion/recovery before collection. Safe under-13 exit. External/model/upload content is untrusted. Logs omit raw prompts/uploads, secrets, tokens, and unnecessary IDs. Report unavailable scanners honestly.

Before real AI: purpose; typed schema; deterministic test provider; context/injection/tool policy; redaction; rate/token/time/cost limits; cancel/timeout/retry/fallback; evaluations; safe observability; kill switch. Model output is labeled, cannot determine final result alone, and cannot be sole completion path.

Before execution: disposable isolation, denied-by-default network, no secrets, resource/process/filesystem/time limits, dependency policy, cleanup, abuse/cost controls, audit, independent review, kill switch.

## Private feedback and integrity

Prefer behavior/evidence/replay over numbers. No numeric result without deterministic, versioned, reproducible authority. No public score, percentile, cohort, rank, intelligence, employability, honesty, or certification claim. Preserve answer neutrality and explain uncertainty.

## Payments and entitlement

No checkout without approved value/pricing/region/tax/refund/youth/vendor decisions. Raw card data is not handled. Webhooks are signature-verified/idempotent; entitlements server authoritative; failure/reconciliation/receipts/cancel/refund/support/rollback tested. Accessibility/privacy/export/deletion are not premium.

## Performance

Current caps: 180 KiB aggregate JavaScript gzip, 25 KiB initial CSS gzip, 8 KiB any route CSS chunk, 30 KiB total CSS gzip, 350 KiB any initial media asset. Lazy boundaries have accessible loading and cannot hide required interaction. Splitting is not permission for aggregate growth.

Target LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at p75 when telemetry exists. Essential actions do not depend on large media/3D/sound/network/model response. Provider calls have latency/cost ceilings.

## Documentation, merge, and release

Meaningful change updates affected master/page spec, roadmap, operational handoff, run log, approvals/ADR, `docs/handoff/` map, issue/PR evidence, rollout/rollback, and commands/indexes. Another advanced agent must continue without chat; record durable decisions, not private conversation.

Before merge: spec alignment; `npm run verify`; task tests; full Playwright/axe; desktop/mobile/zoom/reduced-motion; budgets; secrets/endpoints/hidden-truth/personal-data/claims/competition review; docs/rollback; current-main integration; merged-main verification.

A feature is complete only when behavior, visual execution, all states, responsive adaptation, accessibility, security, privacy, performance, tests, docs, integration, and handoff agree.
