# ProofMode page and section specifications

- Status: **Canonical page contract**
- Updated: 2026-08-28
- Product source: `APP_MASTER_SPEC.md`
- Delivery source: `docs/roadmap/PRODUCT_IMPLEMENTATION_PLAN.md`

## Contract for every page

A page is complete only when its user job, hierarchy, interactions, desktop/mobile composition, ready/loading/empty/offline/error/timeout/recovery/completion behavior, data boundary, security/abuse cases, accessibility, performance, analytics policy, dependencies, exclusions, rollout, rollback, tests, and documentation are explicit and passing.

Common acceptance: one clear page-level heading; landmarks and logical heading order; native controls and accessible names; keyboard and visible focus; WCAG A/AA axe plus manual checks; 44px targets; 390px no-overflow; 200%-equivalent resilience; reduced motion; non-color status; honest availability; no fabricated metrics/users/ranks/testimonials; no personal-data or network expansion without approval; current bundle/media budgets.

# Public website

## Home `/` — implemented

**Job:** understand in the first viewport what ProofMode teaches and why opening it is worthwhile.

**Sections:** header/navigation and motion control; human/product opening frame; proportional promise and CTA; real causal proof demonstration; positioning; practical learning model; final CTA; footer.

**Proof animation:** AI claim → contradictory source → human intervention → corrected order → safer outcome. No decorative “Play proof,” generic AI orb, fake terminal theatre, autoplay audio, giant copy, fake availability, or fake social proof.

**States:** image loaded/fallback, motion on/off, reduced motion, mobile navigation open/closed. Media failure cannot remove meaning or the app action.

**Responsive:** cinematic side-by-side desktop; mobile retains relevant imagery, product meaning, proof, and CTA in the first impression while reducing type/motion.

## About `/about` — implemented

**Job:** understand what ProofMode is, why it exists, who it serves, and its principles.

**Sections:** definition; problem/origin without invented founder claims; ages 13+ audience; Agentic Coding-first direction; Proof Chain; privacy/evidence principles; current versus future availability; app/guide actions.

## Guide `/guide` — implemented tutorial preview

**Job:** know what happens before entering and how to use evidence, uncertainty, recovery, and the Proof Chain.

**Sections:** learning loop; tutorial steps; Source → AI move → Verification → Human decision → Outcome; privacy/local status; session requirements; limitations; start action. Interactive preview must not imply unavailable live features.

## Premium `/premium` — future-value information only

**Job:** understand a possible value model and why payment never buys outcomes.

**Sections:** free/core promise; possible premium depth/convenience; honest comparison; no-pay-to-win; unavailable status; FAQ.

No price, discount, trial, checkout, entitlement, subscriber count, or payment action until policy and infrastructure exist. Essential accessibility is never premium.

## Support `/support` — local preview

**Job:** find help and prepare useful feedback.

**Sections:** topics; privacy/account limitations; accessibility and safety support; feedback preview; explicit unsent/local status; FAQ. Do not silently transmit data. A real service needs privacy notice, retention, abuse controls, and support ownership.

## Download `/download` — web available, native gated

**Job:** use ProofMode now and understand future platform distribution.

**Sections:** current web-app action; platform matrix; disabled Windows/macOS controls; future install/update explanation; signing/checksum/updater/rollback requirements; explicit native-unavailable statement.

No fake file, installer, signing claim, automatic download, or update button.

# Entry and private trial

## Promise `/play` — implemented

**Job:** understand the private practice promise before a run starts.

**Sections:** concise promise; task; privacy/no-account state; AI limits; estimated effort; continue to age boundary; safe exit.

No account, analytics, public result, client score, or provider call. Public CTA remains here until a separately reviewed app-entry decision.

## Age boundary `/entry` — implemented and authoritative

**Job:** make a truthful 13+ decision without supplying identity.

**Sections/actions:** why the boundary exists; “13 or older”; “under 13”; nothing-saved explanation; safe exit.

Under-13 users create no run/profile, provide no birthday/contact/school/location, and are never encouraged to change the answer.

## Existing checkpoint `/mission/northstar-sales-drop` — implemented foundation

**Job:** inspect evidence, optionally challenge deterministic mock AI, cite sources, decide, and state uncertainty.

**Sections:** paused brief; objective/time/evidence/submission contract; evidence workspace; private notes; citations; optional mock AI; structured final call; uncertainty; result transition.

No hidden truth/scoring manifest in the browser, real provider call, public result, or client-authoritative score.

# Repeated-use app

## Today `/app` — implemented

**Job:** know what to do now, why it matters, where it fits, and what data is real versus preview.

**Sections:** desktop rail/mobile navigation; Today context; one dominant practice stage; Proof Chain; five-band Agentic Coding path; trust boundary; state/recovery banner.

**States:** ready, empty, loading, offline, error, retry. Unknown query values fail closed.

**Desktop:** 272px rail, canvas up to ~1,840px, 12 columns, dominant stage, separate Proof Chain, full-width path. **Mobile:** bottom navigation below ~820px, one column, 44px targets.

No real progress, rank, account, social graph, AI call, upload, analytics, storage, or network request.

## Onboarding `/app/onboarding` — implemented

**Job:** choose a useful start without creating a public profile or supplying personal data.

**Steps:** promise; 13+ boundary; goal (`start`, `improve`, `build`, future `compete`); Agentic Coding field; 5/10/20-minute suggested pace; reduced-motion/calmer-timer/spacious-reading comfort; ready summary.

Only Agentic Coding is selectable. Future fields are disabled. Choices are reversible and remain in component memory only.

**States:** ready, loading, offline/local usable, error/retry, under-13 safe exit. Desktop uses `clamp(570px, 36vw, 700px)` story plus broad workspace; mobile uses compact context and thumb-reachable action dock.

# Current learning loop

## Learn home `/app/learn` — implemented

**Job:** understand the Agentic Coding curriculum and choose the next available lesson.

**Sections:** field/pace/storage header; dominant next lesson; curriculum map; capability bands (Frame, Direct, Verify, Recover, Ship/Coordinate); lesson nodes with current/available/completed-fixture/locked reasons; checkpoint cadence; Proof Chain reminder; comfort/setup link; explicit local-preview/progress status; honest future fields.

**States:** ready, loading, empty/no field, offline, error/retry, unavailable lesson, completed-path demonstration, future field. Unknown query values fail closed to ready.

**Desktop:** established app rail plus broad 12-column path canvas and distinct next-step region. **Mobile:** linear timeline and sticky next action above app navigation, never tiny compressed desktop cards.

All data is deterministic and bundled. No account, personal data, browser storage, analytics, network/provider call, score, rank, social activity, or persisted progress. The completed state is explicitly a fixture. Today navigation links to Learn.

## Agentic Coding path `/app/learn/agentic-coding` — implemented curriculum view

**Bands:**

1. Frame — objective, context, constraints, done criteria.
2. Direct — bounded delegation, plans, file/scope control.
3. Verify — evidence, diffs, tests, requirements, source checks.
4. Recover — detect wrong move, rollback, re-plan, explain.
5. Ship/Coordinate — architecture, security, CI, handoff, multi-agent work.

The path exposes and launches the first implemented lesson, while preserving lock dependencies for later work. Each future band will contain lessons, guided practice, checkpoint, result/replay, and an observable behavior outcome.

## Focused lesson `/app/learn/agentic-coding/outcome-before-delegating` — implemented

**Job:** turn an unbounded request into a delegation brief that another person can inspect before implementation begins.

**First lesson:** “Define the outcome before delegating.” Convert a vague bundled request into objective, in-scope, out-of-scope, constraints, evidence, and done criteria.

**Sections:** lesson progress; user outcome/time; bundled source/context; six-field interactive task; live structural contract; progressive hint; incomplete guidance; learner-controlled human self-check; explicit no-save exit; local completion summary; disabled guided-checkpoint transition.

**States:** ready, loading, bundled-offline, error/retry, incomplete, hint, checkpoint fixture, complete fixture. Unknown query values fail closed to ready. Error and exit states say what was saved or sent. Checkpoint/complete fixtures never impersonate learner progress.

**Behavior boundary:** field values are capped at 500 characters. Deterministic checks confirm only structural presence/minimum inspectability. The app does not grade meaning, quality, correctness, or use AI judgment. Five separate human checks remain under learner control.

**Desktop:** broad source → builder → sticky live-contract workspace. **Mobile:** source-first linear sequence with a fixed two-action dock, 44px controls, no horizontal overflow, and no desktop-card compression.

All content is bundled and text is escaped by React. Drafts exist only in component memory and disappear on refresh/exit. No account, personal data, browser storage, analytics, network/provider call, upload, hidden answer, score, rank, social activity, or persisted completion. Lesson code/styles load through a lazy route boundary under current initial, route, total, JavaScript, and media budgets.

## Guided checkpoint `/app/checkpoint/:checkpointId` — next

**Job:** apply a lesson under realistic uncertainty and produce an explainable human decision.

**Sections:** mission contract; source/evidence; AI move; verification; learner intervention; decision/uncertainty; confirmation; replay transition. No answer cue before submission.

**States:** ready, loading, offline policy, timeout, expired, invalid version, paused, error/retry, submitted, replay-ready.

Future backend requires immutable fixture/version, hidden truth server-side, append-only trusted events, deterministic scoring, and no arbitrary browser code execution.

## Result `/app/result/:runId` and replay — planned

**Job:** understand what happened, what evidence mattered, what to repeat, and what to improve.

**Sections:** outcome/integrity; Proof Chain replay; pivotal decision; strong behavior; risk/missed behavior; uncertainty; one next-practice action; replay/path/private-sharing controls; score explanation only when deterministic scoring exists.

Private by default. No percentile, intelligence, employability, certification, or cross-version claim without evidence.

# Personal controls

## Profile `/app/profile` — planned after first learning loop

**Sections:** guest/account state; active field/path; real completed behaviors/checkpoints; replay history; private Skill Passport only with evidence; sharing/privacy; export/deletion when supported.

No fabricated rank, public profile, followers, or employability signal.

## Settings `/app/settings` — planned

**Sections:** appearance/reading density; reduced motion; timer treatment; audio/captions; real notifications only; privacy; export/deletion when real; session/device security when real; support/safety/legal; field/goal/pace.

Accessibility choices are never health, skill, or cheating signals. Controls appear active only when behavior exists.

# Future gated systems

## Arena `/app/arena`

Optional comparable practice/challenges only after deterministic scoring, immutable same-version rules, anti-abuse, accessibility equivalence, appeals, privacy, and youth-wellbeing gates. Possible sections: fairness/version status, challenge, evidence contract, result/replay, report/appeal, real rank only with a comparable cohort. No pay-to-win.

## Social `/app/social`

Only after age-aware discovery, private defaults, granular sharing, blocking/reporting, moderation/response, retention/deletion, and youth-to-adult policy. No direct messages or contact upload in the first release.

## Notifications

Opt-in/controllable, useful, rate-limited, and quiet by default. No guilt, streak loss, fake urgency, or public pressure.

# Shared systems

- App navigation exposes current routes semantically and labels/omits unavailable destinations honestly.
- Every app page exposes storage/network/preview context and a safe exit when relevant.
- Sticky action docks respect safe areas, zoom, content access, and secondary/back actions.
- Proof Chain components never reveal the correct answer before submission.
- Disabled/empty states say what is unavailable, why, whether planned, and what can be done now.
- Errors say what failed, what was saved/sent, whether retry is safe, and the alternative; never expose stack/provider/secret/private payload details.
- Analytics is absent now. Future analytics needs an event dictionary, minimum fields, no raw prompts/files/secrets, retention/deletion, consent/region policy, and schema tests.

A page becomes **implemented** in this document only after its production route, complete state contract, responsive/accessibility evidence, privacy/security boundary, tests, docs, green integration, rollout, and rollback exist.
