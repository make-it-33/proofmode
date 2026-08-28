# ProofMode page and section specifications

- Status: **Canonical page contract**
- Updated: 2026-08-28
- Product source: `APP_MASTER_SPEC.md`
- Delivery source: `docs/roadmap/PRODUCT_IMPLEMENTATION_PLAN.md`
- Detailed continuity map: `docs/handoff/PAGE_SYSTEM_MAP.md`

## Contract for every page

A page is complete only when user job, journey position, hierarchy, sections, interactions, desktop/mobile composition, applicable states/recovery, data boundary, security/abuse cases, accessibility, performance, analytics policy, dependencies, exclusions, rollout, rollback, tests, and documentation are explicit and passing.

Common acceptance: one page-level heading; semantic landmarks/logical headings; native controls/accessible names; keyboard/visible focus; zero WCAG A/AA axe violations plus manual contrast/focus; non-color status; 44px controls; 390px no-overflow; 200%-equivalent resilience; reduced motion; forced-colors support; honest real/preview/fixture/disabled/future status; no fabricated metrics/users/testimonials/progress/AI/payments/native support; no competition or public comparison.

# Public website

## Home `/` — implemented

**Job:** understand in the first viewport what ProofMode teaches and why opening it is worthwhile.

**Sections:** navigation/motion control; human/product opening; proportional promise; `/play` CTA; causal proof demonstration; positioning; learning model; trust statement; final CTA; footer.

**States:** media loaded/fallback; motion on/off; reduced motion; mobile nav. Media failure cannot remove meaning/action.

**Prohibited:** generic orb/random shape; giant copy; fake terminal; fake user/metric/testimonial; autoplay audio; decorative “Play proof.”

## About `/about` — implemented

**Job:** understand definition, reason, audience, principles, Proof Chain, and availability.

**Sections:** what/why; 13+ audience; Agentic Coding-first; Proof Chain; evidence/recovery/privacy; current versus future; app/guide actions. No invented founder/traction claims.

## Guide `/guide` — implemented tutorial preview

**Job:** know what happens through Source, AI move, Verification, Human decision, Outcome, uncertainty, recovery, and replay.

**Sections:** loop; tutorial steps; privacy/local status; requirements/limits; start action. Preview cannot imply provider/submission/result/persistence.

## Premium `/premium` — future-value information only

**Job:** understand possible paid depth/convenience and the free/core promise.

**Sections:** free/core; possible premium; ethical boundaries; unavailable status; FAQ. No price, trial, discount, checkout, entitlement, subscriber count, or payment action until approved/real. Accessibility/privacy/safety/export/deletion are never premium.

## Support `/support` — local preview

**Job:** find help and prepare feedback.

**Sections:** help topics; current account/privacy limits; accessibility/safety; feedback composer; explicit unsent/local status; FAQ. No silent transmission.

## Download `/download` — web available, native gated

**Job:** open the web app and understand future native distribution.

**Sections:** web action; platform matrix; disabled Windows/macOS; signing/checksum/updater/rollback requirements; native-unavailable statement. No fake binary/signature/update.

# Entry and private trial

## Promise `/play` — implemented

**Job:** understand private practice before a run.

**Sections:** task/promise; privacy/no-account; current AI limits; effort; continue to age boundary; exit. No analytics/provider/public result.

## Age boundary `/entry` — implemented and authoritative

**Job:** make a truthful 13+ decision without identity.

**Actions:** 13 or older; under 13; safe exit. Under-13 creates no run/profile and requests no birthday/contact/school/location.

## Mission `/mission/northstar-sales-drop` — implemented foundation

**Job:** inspect evidence, optionally challenge deterministic mock AI, cite sources, decide, and state uncertainty.

**Sections:** paused brief/contract; evidence; private notes; citations; mock AI; structured final call; uncertainty; result-transition foundation.

**Boundary:** no hidden truth/scoring manifest in browser, real provider, upload, public result, or client-authoritative result.

# Repeated-use application

## Today `/app` and redirect `/app/today` — implemented

**Job:** know what to do now, why it matters, where it fits, and what data is real.

**Sections:** rail/mobile nav; context; dominant stage; Proof Chain; five-band path; trust boundary; state/recovery banner.

**States:** ready, empty, loading, offline, error, retry; unknown → ready.

**Responsive:** 272px rail, canvas up to ~1,840px, 12-column desktop; bottom navigation/focused one-column mobile below ~820px.

## Onboarding `/app/onboarding` and redirect `/app/setup` — implemented

**Job:** choose a useful private start without identity/public profile.

**Steps:** promise; 13+; goal; Agentic Coding field; 5/10/20-minute suggested pace; reduced-motion/calmer-timer/spacious-reading comfort; summary.

**States:** ready, loading, offline/local usable, error/retry, under-13 safe exit. Choices reversible/component-memory only; future fields disabled.

## Learn `/app/learn` — implemented

**Job:** understand curriculum and choose next available lesson.

**Sections:** field/pace/storage; dominant next lesson; capability bands; nodes/current/available/fixture-complete/locked reasons; checkpoint cadence; Proof Chain; comfort link; future fields.

**States:** ready, loading, empty/no field, offline, error/retry, unavailable, completed fixture, future field; unknown → ready.

**Responsive:** broad path canvas desktop; focused timeline and sticky next action mobile.

## Agentic Coding `/app/learn/agentic-coding` — implemented

**Bands:** Frame; Direct; Verify; Recover; Ship/Coordinate. Each future band contains focused lessons, guided practice, checkpoint, private result/replay, and observable behavior.

## Outcome lesson `/app/learn/agentic-coding/outcome-before-delegating` — implemented

**Job:** turn a vague bundled request into an inspectable delegation brief.

**Sections:** progress; outcome/time; source; six fields; live structural contract; progressive hint; incomplete guidance; five human self-checks; no-save exit; local completion; disabled checkpoint transition.

**Fields:** objective, in scope, out of scope, constraints, evidence, done criteria; 500 characters each.

**States:** ready, loading, bundled offline, error/retry, incomplete, hint, checkpoint fixture, complete fixture; unknown → ready.

**Boundary:** deterministic structural presence only, no semantic/AI grading; component memory; no account, personal data, browser storage, analytics, request, provider, upload, hidden answer, result authority, rank, public activity, or persistence.

**Responsive:** source → builder → sticky contract desktop; source-first sequence and two-action dock mobile. Route-local lazy JS/CSS.

# Next learning loop

## Guided checkpoint `/app/checkpoint/outcome-before-delegating-v1` — next

**Job:** apply outcome framing under realistic uncertainty and make an explainable human decision.

**Sections:** immutable scenario/version; mission contract; Source; deterministic AI move with inspectable weakness; Verification actions/observations; Human decision (accept/reject/modify/investigate); rationale; uncertainty; Outcome; confirmation; private replay transition.

**States:** ready, loading, offline-capable, incomplete, verification-needed, decision-needed, timeout fixture, invalid/expired fixture, error/retry, submitted-local, replay-ready. Unknown → ready. No pre-decision answer cue.

**Scenario:** weekly dashboard labels overlap at 390px; authorized files `DashboardSummary.tsx` and `summary.css`; preserve API/data shape, keyboard semantics, empty/error states; evidence includes diff/checks and 390px/1440px visual inspection.

**Responsive:** evidence/work/review regions desktop; Source → AI move → Verify → Decide → Outcome mobile.

**V1 boundary:** bundled immutable fixture and component/domain memory; no network/provider/upload/execution/account/storage/public score/competition.

**Tests:** pure progression/allowlist/limits/security flags; golden path/incomplete/recovery; all states; answer neutrality; 1920/1440/390/zoom/44px; keyboard/focus/axe/forced colors/reduced motion; boundary/budgets.

## Result/replay `/app/result/:runId` — planned

**Job:** understand what happened, what evidence mattered, what to repeat, and one improvement.

**Sections:** outcome/integrity; Proof Chain reconstruction; pivotal decision; strong behavior; risk/missed behavior; uncertainty; next practice; replay/path; private/local status.

No numeric score without authoritative deterministic rules. No percentile, rank, cohort, intelligence, employability, certification, or public result.

## Private local progress — planned

**Job:** resume and view only real device-local completion.

**Sections:** completed behavior/checkpoint; recommendation; resume; reset; local storage explanation; future sync status.

Requires versioned schema/migration, corrupt-data fallback, quota behavior, reset/export description, tests, and explicit opt-in before later cloud migration.

# Personal controls

## Profile `/app/profile` — planned after result/progress

Guest/account state; active path; real completed behaviors; replay history; private evidence/export when real; sharing/privacy only when implemented. No public discovery, followers, rank, or employability signal.

## Settings `/app/settings` — planned

Appearance/density; reduced motion; timer; audio/captions; field/goal/pace; privacy; local reset/export; notifications only when real; support/safety/legal; session/device security only with accounts. Comfort choices are never health/skill/cheating signals.

# V2 gated systems

## Account and sync

Private defaults; minimum data; purpose/region/consent; secure session/authz/recovery/device controls; retention/export/deletion; migration/backups/restore; explicit local-progress import. No public discovery.

## Built-in AI coach

Server gateway; typed purpose schemas; deterministic test provider; redaction; injection/tool policy; time/token/rate/cost limits; cancel/timeout/retry/fallback; evaluations; safe logs; kill switch; no final result authority.

## Secure sandbox

Disposable isolated workers; denied-by-default network; no production/provider secrets; filesystem/process/CPU/memory/time limits; dependency policy; cleanup, abuse/rate/cost controls; audit; kill switch; independent review.

## Content studio

Role-based drafts; versioned schemas; preview; blind content/accessibility/safety review; immutable publish; rollback; provenance. Generated content requires human QA.

## Billing/premium

Value/pricing/region/tax/refund/youth-safety/vendor approval; hosted/tokenized checkout; signature-verified idempotent webhooks; server-authoritative entitlements; cancellation/receipt/refund/support/failure/reconciliation/rollback. No current price or checkout.

## Native apps

Only after real native need: packaging, least-privilege permissions, signed/notarized builds, checksums/update metadata, channels, staged rollout/rollback, crash/privacy policy, installer/updater tests.

## Future fields

Design, Business, Research, and Game Development require full curriculum, content QA, checkpoints, results, accessibility, safety, and truthful availability.

# Removed product system

Arena, PvP, ranks, ladders, leaderboards, matchmaking, seasons, public score comparison, prizes, and pay-to-win are removed, not planned. Do not add routes/navigation/data models/copy for them.

# Shared systems

- App navigation exposes implemented destinations and labels/omits unavailable ones honestly.
- Storage/network/preview context and safe exit appear where relevant.
- Sticky action docks respect safe areas, zoom, content, and secondary actions.
- Proof Chain components never reveal the expected decision before submission.
- Disabled/empty states say what is unavailable, why, and what can be done now.
- Errors never expose stack/provider/secret/private payload details.
- Analytics is absent. Future analytics needs approved event dictionary, minimum fields, no raw prompts/files/secrets, region/consent/retention/deletion, and schema tests.

A page becomes **implemented** here only after route, state contract, responsive/accessibility evidence, privacy/security boundary, tests, docs, green integration, rollout, and rollback exist.
