# ProofMode application master specification

- Status: **Canonical product specification**
- Updated: 2026-08-28
- Audience: ages 13+, teenagers first
- V1 field: Agentic Coding
- Stage: private pre-alpha and public web preview
- Page contract: `PAGE_AND_SECTION_SPECS.md`
- Delivery order: `docs/roadmap/PRODUCT_IMPLEMENTATION_PLAN.md`
- Continuity detail: `docs/handoff/README.md`

## 1. Product thesis

ProofMode teaches people to work effectively with AI by practising real judgment: frame a task, give bounded instructions, inspect evidence, challenge weak output, verify changes, recover from mistakes, make a human decision, and explain the outcome.

Promise: **learn, practise, prove, and recover while staying in control of AI.**

It is not a prompt library, chatbot wrapper, passive course, intelligence/employability score, fake certification, generic dashboard, or competition product.

## 2. Audience and positioning

Primary: ambitious learners aged 13+, with teenagers as the first design priority. The product must feel motivating, safe, modern, and credible to teenagers without becoming childish or excluding adults.

Secondary: students, unemployed learners, early-career builders, creators/developers, and adults changing skills. Employer/school products are separate future decisions and cannot inherit consumer evidence without validity, consent, privacy, legal, and authorization review.

Under-13 users are safely exited without birthday, identity, school, location, contact, health, or workaround prompts.

ProofMode outperforms alternatives through action, evidence, recovery, professional craft, privacy, accessibility, safety, and honest states—not competitor feature copying.

## 3. No competition

Competition is removed from the active product and V1/V2 roadmap.

Do not build Arena, PvP, ranks, ladders, leaderboards, matchmaking, seasons, public score comparison, percentile pressure, prizes, wagering, or pay-to-win. Private “challenge” may describe a practice scenario only; it cannot imply another learner or cohort.

Motivation comes from private mastery, observable completed behaviors, useful replay, reversible goals/pace, meaningful completion, and one clear next practice action.

Historical competition documents are superseded records. Reintroduction requires a new explicit owner decision and full product, youth-safety, privacy, fairness, moderation, accessibility, architecture, and UX review.

## 4. Product surfaces

### Public website

A cinematic but purposeful explanation/acquisition surface. It communicates the app in the first viewport, shows a believable consequence, explains what/why/how, and provides About, Guide, Premium, Support, and Download information.

Approved causal motion: AI claim → contradictory evidence → human intervention → corrected order → safer outcome.

No autoplay audio, giant copy hiding the app, generic AI orb, decorative 3D, fake terminal, fake users/testimonials/statistics, fake availability, or decorative “Play proof.” The current action routes to `/play`.

### Repeated-use app

A calm operational learning environment: broad on desktop, focused on mobile, one dominant task per state, visible evidence/Proof Chain where useful, complete recovery behavior, and private/minimum-data defaults.

The website and app share identity but not composition, motion density, or information density.

## 5. Core learning system

### Proof Chain

1. **Source** — requirement, artifact, evidence, constraint, test, log, or observation.
2. **AI move** — claim, plan, change, inference, omission, or tool action.
3. **Verification** — independent check that confirms, contradicts, or narrows the move.
4. **Human decision** — accept, reject, modify, or investigate, with rationale/uncertainty.
5. **Outcome** — result, safer/better change, unresolved risk, and what to repeat.

### Learning loop

Orient → observe → act → explain → review → replay → continue.

Every lesson teaches one transferable behavior. Every checkpoint requires an observable action, artifact, decision, or explanation. More prompting/generated code is not higher skill. Blind AI agreement is never rewarded. Recovery is first-class.

### Agentic Coding capability bands

1. Frame — outcomes, context, scope, constraints, done criteria.
2. Direct — bounded delegation, plans, files, permissions, sequencing.
3. Verify — sources, assumptions, diffs, tests, requirements, failures.
4. Recover — detect wrong moves, stop, rollback, re-plan, explain.
5. Ship/Coordinate — architecture, security, CI, review, handoff, multi-step agent work.

## 6. Fields and content

Agentic Coding is the only available V1 field. Future Design, Business, Research, and Game Development fields remain disabled until curriculum outcomes, versioned content, lessons, checkpoints, results, accessibility, safety, and support exist.

Published content becomes immutable/versioned when authoritative systems exist. Generated curriculum never ships without human content QA.

## 7. Information architecture

Implemented public: `/`, `/about`, `/guide`, `/premium`, `/support`, `/download`.

Implemented entry/trial: `/play`, `/entry`, `/mission/northstar-sales-drop`.

Implemented app: `/app`, `/app/today`, `/app/onboarding`, `/app/setup`, `/app/learn`, `/app/learn/agentic-coding`, `/app/learn/agentic-coding/outcome-before-delegating`.

Next: `/app/checkpoint/outcome-before-delegating-v1`, `/app/result/:runId`, truthful private local progress, `/app/profile`, `/app/settings`.

Later gated capabilities: private account/sync, AI coach gateway, secure coding sandbox, content studio, premium/payments, signed native distribution, and future learning fields.

There is no active or planned competition route.

## 8. Desktop, mobile, motion, and media

### Desktop

Use an app rail for repeated-use routes, a working canvas up to approximately 1,840px, and purposeful 12-column regions for Source/evidence, work/decision, and contract/review. Do not center a mobile-sized card stack in a wide empty canvas.

### Mobile

At 390px: no page-level horizontal overflow; one focused stage; source context preserved before action; thumb-reachable actions; visible controls at least 44×44px; sticky docks respect safe areas, zoom, and content access.

### Motion/media

Motion communicates cause, state, focus, progress, or spatial continuity. Reduced motion preserves meaning. Audio is user initiated, optional, and never required. Production media needs rights/provenance, accessible alternative, responsive treatment, failure behavior, and budget.

## 9. State and recovery model

Common vocabulary: ready, loading, empty, offline, error, timeout, permission-denied, expired, invalid, resume, incomplete, verification-needed, decision-needed, complete, recovery.

Query/review states are allowlisted. Unknown values fail closed to the safest ordinary state and are never rendered as user content. Loading cannot enable consequential actions. Errors explain what failed, what was saved/sent, retry safety, and exit.

Real, local preview, fixture, disabled, and future behavior must be visibly distinct.

## 10. Progress, identity, and motivation

Current progress is fixture/component-memory only unless explicitly labeled otherwise. Real local progress requires versioned schema, migration, corrupt-data fallback, reset/export description, and tests. Cloud sync requires approved account/data policy and explicit migration consent.

Profiles are private by default. The product never labels intelligence, worth, employability, honesty, or cohort standing. No public rank, followers, or pressure mechanics.

## 11. Built-in AI

Future AI may coach, explain, simulate bounded agent behavior, or extract typed signals. It must use a server-side gateway, purpose-specific schemas, redaction, context/tool policy, time/token/rate/cost limits, cancellation, timeout/retry/fallback, evaluations, safe logs, and a kill switch.

Model output is labeled, untrusted, and never final result authority or the sole completion path. No direct browser provider credential or request.

## 12. Secure code execution

Arbitrary code remains prohibited until disposable isolated sandbox workers have denied-by-default network, no production/provider secrets, read-only bases, ephemeral filesystems, process/CPU/memory/time limits, dependency policy, cleanup, abuse/rate/cost controls, audit, kill switch, and independent review.

## 13. Security and privacy

- Minimum age 13; under-13 creates no run/profile.
- Collect minimum data only after purpose, region/consent, retention, export/deletion, recovery, authorization, and incident/support behavior are approved.
- Hidden truth, answer manifests, provider/signing/webhook keys, and private prompts never reach the client.
- Browser state is never authoritative for permission, entitlement, consequential completion, or audit.
- Uploads/external/model content are untrusted.
- Logs omit secrets, raw prompts/uploads, tokens, and unnecessary identifiers.
- Unavailable scanners are reported honestly.

## 14. Business, premium, and payments

Premium may fund deeper curriculum, more private practice, advanced simulations, richer replay/export, bounded AI coaching, and creator tools. It never buys outcomes, comparison status, easier evaluation, essential accessibility, safety, export/deletion, or competition advantage.

No checkout, price, entitlement, subscriber count, or payment vendor exists now. Payment requires owner approval for value, pricing, regions, taxes, refunds, youth safety, vendor/lock-in, privacy/security, entitlements, webhooks, support, failure, and rollback. See `docs/handoff/BUSINESS_AND_PAYMENTS.md`.

## 15. Web and native distribution

The browser is the current executable surface. Native Windows/macOS requires a proven native need, packaging architecture, least-privilege permissions, signed/notarized builds, checksums/update metadata, release channels, staged rollout, rollback, crash/privacy policy, and installer/updater tests. Never publish a fake download/update.

## 16. Claims

Allowed: ProofMode teaches/practises specific AI-collaboration behaviors; current previews are private/deterministic; Agentic Coding is the initial field.

Not allowed without evidence: employment/income guarantees, intelligence/certification claims, user/success counts, testimonials, employer acceptance, real cloud save/provider/result/payment/native support, cohort comparison, rank, or social activity.

## 17. Binding review corrections

Preserve the whole idea but build it professionally in sequence; design/specify before broad implementation; show the app rather than random decoration; keep hero copy proportional; use product-causal imagery/motion; retain the stronger V6 public direction; make desktop materially broader than mobile; avoid vibe-coded card collections; test states/security/privacy/accessibility/performance during development; keep canonical specs/handoff in `main`; remove competition.

## 18. Completion definition

A page/feature is complete only when its user job/journey, sections/states/recovery, desktop/mobile, accessibility, data/security boundary, claims, performance, domain/integration/browser tests, documentation, rollout/rollback, and green `main` integration agree.
