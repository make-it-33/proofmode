# Page and section system map

This is the continuity map. `docs/product/PAGE_AND_SECTION_SPECS.md` remains the canonical acceptance contract.

## Status vocabulary

- **Implemented:** route, complete relevant states, responsive/accessibility/security tests, docs, rollout, and rollback are integrated.
- **Preview:** useful local behavior exists but no account/provider/persistence/authority is implied.
- **Planned:** specified and ordered, not available.
- **Gated:** requires an explicit product/data/vendor/legal/security decision.
- **Removed:** intentionally absent; not backlog.

## Public website

### Home `/` — implemented

Job: explain in the first viewport what ProofMode teaches and why it matters.

Sections: navigation/motion control; human-and-product opening; proportional promise; primary `/play` action; causal proof demonstration; learning model; trust statement; final CTA; footer.

States: media loaded/fallback; motion on/off; reduced motion; mobile navigation. Meaning and CTA survive media failure.

### About `/about` — implemented

Job: explain definition, reason, audience, principles, Proof Chain, and current/future boundaries.

Sections: product definition; problem; 13+ audience; Agentic Coding first; Proof Chain; evidence/recovery/privacy principles; current availability; app/guide actions.

Do not invent founder biography, traction, testimonials, or market claims.

### Guide `/guide` — implemented tutorial preview

Job: teach what happens before, during, and after a learning run.

Sections: orient; inspect Source and AI move; verify; make the human decision; explain uncertainty; see outcome; replay; privacy/local limitations; start action.

Preview interactions must not imply a real provider, submission, score, or persistence.

### Premium `/premium` — future-value information only

Job: explain a possible sustainable value model without selling outcomes.

Sections: free/core promise; possible paid depth/convenience; no-pay-to-win/no-pay-to-accessibility; unavailable status; FAQ; no checkout.

Pricing, discounts, trials, payment actions, subscriber counts, and entitlements stay absent until approved and implemented.

### Support `/support` — local preview

Job: find help and prepare useful feedback.

Sections: product/how-to topics; privacy/account limits; accessibility/safety help; feedback composition; explicit “not sent” status; fallback contact policy when real support exists.

No silent network request or collection.

### Download `/download` — web available, native gated

Job: open the web app now and understand future Windows/macOS distribution.

Sections: web app action; platform matrix; disabled native controls; future install/update explanation; signing/checksum/updater/rollback requirements.

No fake binary, download count, signature, auto-update, or “latest version” claim.

## Entry and trial

### Promise `/play` — implemented

Job: set expectations before a private practice run.

Sections: concise task; private/no-account state; current AI limitations; estimated effort; continue; exit.

### Age boundary `/entry` — implemented and authoritative

Job: make a 13+ decision without supplying identity.

Actions: “13 or older,” “under 13,” and safe exit. Under-13 creates nothing and asks for no extra data.

### Mission foundation `/mission/northstar-sales-drop` — implemented preview

Job: inspect evidence, optionally challenge deterministic mock AI, cite sources, decide, and state uncertainty.

Sections: brief/contract; evidence workspace; private notes; citations; optional mock AI; structured final call; uncertainty; result transition foundation.

No hidden truth/scoring manifest in client, real provider, upload, public result, or client-authoritative score.

## Repeated-use app

### Today `/app` — implemented

Job: know what to do next, why it matters, where it fits, and what is real.

Sections: app navigation; Today context; dominant stage; Proof Chain; five-band path; trust boundary; recovery banner.

States: ready, empty, loading, offline, error, retry; unknown state fails closed.

Desktop: 272px rail, canvas up to approximately 1,840px, 12-column composition. Mobile: one-column sequence and bottom navigation below approximately 820px.

### Onboarding `/app/onboarding` — implemented preview

Job: choose a useful private local start.

Steps: promise; 13+ boundary; goal; Agentic Coding field; 5/10/20-minute suggested pace; reduced-motion/calmer-timer/spacious-reading options; ready summary.

Choices are reversible and component-memory only. No identity, account, profile, analytics, storage, or request.

### Learn `/app/learn` — implemented preview

Job: understand the curriculum and choose the next available lesson.

Sections: field/pace/storage header; dominant next lesson; curriculum map; five capability bands; lesson nodes and lock reasons; checkpoint cadence; Proof Chain reminder; comfort link; future fields.

States: ready, loading, empty/no field, offline, error/retry, unavailable lesson, completed demonstration, future field.

### Agentic Coding `/app/learn/agentic-coding` — implemented preview

Bands:

1. Frame — objective, context, scope, constraints, done criteria.
2. Direct — bounded delegation, plans, file/scope control.
3. Verify — sources, assumptions, diffs, checks, requirements.
4. Recover — detect wrong moves, stop, rollback, re-plan, explain.
5. Ship/Coordinate — architecture, security, CI, handoff, multi-step work.

Each band eventually contains lesson, guided practice, checkpoint, private result/replay, and observable behavior outcome.

### Outcome lesson — implemented

Route: `/app/learn/agentic-coding/outcome-before-delegating`.

Job: turn a vague bundled request into an inspectable delegation brief before work begins.

Sections: progress; outcome/time; source/context; six-field task; live structural contract; hint; incomplete guidance; five human checks; no-save exit; local completion; disabled checkpoint transition.

All content and checks are local/deterministic. See `CURRENT_STATE.md` and `docs/design/OUTCOME_LESSON_V1.md`.

## Next complete learning loop

### Guided checkpoint `/app/checkpoint/outcome-before-delegating-v1` — next

Job: apply the lesson to a realistic scenario and create a reviewable human decision.

Required regions:

- immutable scenario/version and mission contract;
- Source: request, issue, authorized files, constraints, evidence;
- AI move: deterministic proposed plan/change with at least one inspectable weakness;
- Verification: learner selects/executes bundled checks and records observations;
- Human decision: accept, reject, modify, or investigate, with rationale;
- Outcome: resulting brief/decision and explicit uncertainty;
- confirmation and private replay transition.

States: ready, loading, offline-capable, incomplete, verification-needed, decision-needed, timeout fixture, invalid/expired fixture, error/retry, submitted-local, replay-ready. No answer styling or cue before decision.

Desktop: evidence and work side by side with persistent contract/review. Mobile: Source → AI move → Verify → Decide → Outcome sequence with resumable local-in-memory stages.

V1 boundary: bundled content; component/domain memory only; no provider, upload, execution, account, persistence, public score, or competition.

### Private result/replay `/app/result/:runId` — planned next

Job: understand what happened and what to practise next.

Sections: outcome/integrity; Proof Chain reconstruction; pivotal learner intervention; strong behavior; missed/risky behavior; uncertainty; one next action; replay/path controls; explicit private/local state.

No percentile, rank, intelligence, employability, certification, or cohort claim. If no authoritative score exists, do not display one.

### Private local progress — planned

Job: resume and see only real completion data.

Sections: completed local behaviors/checkpoints; next recommendation; resume; reset; explanation that data is device-local or session-only; future sync status.

Persistence requires a versioned local schema, migration/reset behavior, tests, and honest privacy copy. Cloud sync remains gated.

### Profile `/app/profile` — planned after result/progress

Sections: guest/account state; active path; real completed behaviors; replay history; private evidence export when real; sharing/privacy controls when real.

No public profile, followers, rank, competition, or employability signal.

### Settings `/app/settings` — planned

Sections: appearance/density; reduced motion; timer treatment; audio/captions; field/goal/pace; privacy; local reset/export; notifications only when real; support/safety/legal; session/device security only when accounts exist.

Accessibility choices are never treated as health, skill, cheating, or assessment signals.

## V2 gated product systems

### Account and sync

Private by default; minimum data; explicit purpose; age/region/consent policy; secure session/authz; recovery; export/deletion; migration/backup/restore; device management. No public discovery.

### Built-in AI coach

Purpose-specific server gateway; typed schemas; redaction; injection/tool policy; time/token/rate/cost limits; cancel/timeout/retry/fallback; evaluation fixtures; safe logs; no final scoring authority.

### Secure coding sandbox

Disposable isolated workers; denied-by-default network; no production/provider secrets; filesystem/process/CPU/memory/time limits; dependency policy; cleanup, rate/cost controls, audit, kill switch, and independent review.

### Content studio

Versioned authoring, preview, blind QA, accessibility review, publish/rollback, and immutable content releases. Generated content is never published without human content QA.

### Payments/premium

Only after value, pricing, tax/region, guardian/youth-safety, entitlement, refund, support, vendor, and failure/recovery decisions. See `BUSINESS_AND_PAYMENTS.md`.

### Native apps

Only after a real native need. Signed/notarized packages, permissions, secure update metadata, release channels, checksums, rollback, crash/privacy policy, and installer tests are mandatory.

## Removed system

Arena, PvP, ranks, ladders, leaderboards, matchmaking, seasons, and public score comparison are **removed**, not deferred. Do not add routes, navigation, components, data models, or copy for them.
