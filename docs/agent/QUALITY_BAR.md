# ProofMode professional quality bar

- Status: **Mandatory merge and release standard**
- Updated: 2026-08-26

Professional quality means useful, coherent, intentional, honest, accessible, secure, fast, recoverable, tested, documented, and maintainable—not merely visually polished.

## Severity

- **P0:** secret/private/hidden-truth exposure; critical authorization, arbitrary execution, destructive-data or youth-safety defect; corrupt scoring; unusable production route. Blocks all integration.
- **P1:** red required CI; WCAG A/AA defect; keyboard trap/mobile overflow/obscured primary control; fake claim or availability; missing critical recovery; unapproved data expansion; budget breach; missing spec/handoff/rollback. Blocks the slice.
- **P2:** meaningful inconsistency, confusing copy, noncritical state/observability/maintainability gap. Fix before release or track explicitly.

No P0/P1 is waived by skipping, suppressing, disabling, renaming, or weakening a check.

## Product and learning

A complete slice solves one user job, fits the approved dependency order, states non-goals, makes the next action clear, distinguishes real/preview/disabled/future behavior, works without competition, and has measurable acceptance and rollback.

Every lesson teaches a transferable behavior. Every checkpoint requires an observable action/artifact/decision/explanation. Show objective, evidence, constraints, budget, and done contract. Blind AI agreement is never rewarded. Recovery is first-class. Pre-submit UI does not reveal the answer. Feedback names a behavior and one next action. Accessible alternatives measure the same behavior.

## UX and visual craft

- One dominant task/decision and one clear primary action per state.
- Desktop uses a broad intentional composition; never an enlarged mobile card stack or generic admin dashboard.
- Mobile works at 390px, has 44px targets, thumb-reachable actions, no obscured content, and preserves essential context.
- Ready/loading/empty/offline/error/timeout/invalid/expired/resume/complete/recovery exist where applicable.
- No shame, fake urgency, energy punishment, manipulative streak loss, or public pressure.
- Coherent tokens and hierarchy across website, app, lesson, checkpoint, result, and replay.
- Reject generic AI gradients/orbs, decorative glass, fake terminals, dense interchangeable cards, giant copy, fake metrics/users/ranks/testimonials/activity, and controls with no contract.
- A screen is “vibe-coded” if decoration masks missing behavior, desktop is stretched mobile, copy repeats strategy instead of enabling action, or implementation cannot explain architecture/tests/security/privacy/performance/rollback.

## Motion, media, and content

Motion shows cause, consequence, focus, state, or spatial continuity. No decorative “Play proof” or autoplay audio. Meaningful media has captions/transcript/static fallback, provenance/rights, responsive dimensions, and budget. Reduced motion preserves meaning and removes nonessential movement.

Copy is short, specific, natural, non-blaming, and honest. Never invent statistics, outcomes, social proof, availability, intelligence, employability, or certification claims. Roadmap content is labeled.

## Accessibility

Every changed UI route requires semantic landmarks/headings, native controls, accessible names, keyboard/focus, zero WCAG A/AA axe violations, manual contrast and dynamic-focus review, non-color cues, 44px targets, 390px and 200%-equivalent no-overflow, reduced motion, forced-colors resilience for custom controls, and captions/transcript/alt treatment. Automated axe is necessary, not sufficient.

## Engineering

Use strict TypeScript, typed trust boundaries, deterministic domain logic outside UI/providers, explicit modules, no hidden global state, no client-authoritative score/permission/entitlement/consequential event, immutable published versions, append-only trusted events when backend exists, safe errors, minimal justified dependencies, ADRs for material decisions, and reversible/tested migrations.

## Tests

- Unit: parsing/allowlists, domain progression/prerequisites, privacy/security flags, deterministic scoring, boundaries.
- Contract/integration: schemas, auth, storage lifecycle/idempotency, provider policy/timeout/cancel/retry/fallback, hashes, replay.
- Browser: golden path; under-13; keyboard/focus; desktop breadth; 390px/44px; zoom; states/retry; reduced motion; axe; route boundaries.
- Security/abuse: untrusted content, prompt injection/tool misuse, uploads, rate/cost, cross-user access, sessions, sandbox escape/network/secrets, hidden truth/scoring leakage.

A flaky test needs an issue, cause, mitigation, owner, and removal date; it is not silently ignored.

## Security, privacy, and AI

No secrets/private data in source or client. No direct browser provider. Validate, escape, authorize, rate-limit, and least-privilege inputs. Minimize personal data; define purpose/consent/retention/export/deletion/region before collection. Safe under-13 exit. External/model/upload content is untrusted. Logs omit prompts, secrets, tokens, raw uploads, and unnecessary identifiers. Report unavailable scanners honestly.

Before real AI: define purpose; typed schema; deterministic test provider; prompt/context/injection policy; redaction; rate/token/time/cost budgets; cancel/timeout/retry/fallback; evaluation fixtures; safe observability. Model output is labeled, cannot decide final score, and cannot be the sole completion path.

## Fairness and competition

Only compare same immutable mission/version/rules/tools/fairness policy. Scoring is deterministic/reproducible/explainable; wrong-but-fast never beats correct-and-verified. No percentile without a real comparable cohort; no pay-to-win. Accessible alternatives are equivalent. Anti-abuse, appeals, moderation, privacy, and youth wellbeing precede public competition.

## Performance

Repository JS/CSS/media budgets remain binding. Target LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 at p75 when telemetry exists. Essential actions do not depend on large media/3D/sound/model response. Use responsive images and transform/opacity motion. Provider calls have latency/cost ceilings. Avoid unnecessary dependencies.

## Documentation, merge, and release

A meaningful change updates relevant master/page spec, roadmap status, handoff, run log, approvals/ADR if changed, commands/indexes, rollout/rollback, and issue/PR evidence. Another advanced agent must continue without the chat; record durable decisions, not private conversation.

Before merge: review spec alignment; pass `npm run verify`, task tests, full Playwright/axe, desktop/mobile/zoom/reduced-motion, budgets, secret/endpoint/hidden-truth/personal-data/claim review; update docs and rollback; integrate current `main`; verify merged `main`.

A feature is complete only when behavior, visual execution, all states, responsive adaptation, accessibility, security, privacy, performance, tests, docs, integration, and handoff agree.
