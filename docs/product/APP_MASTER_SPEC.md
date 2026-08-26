# ProofMode application master specification

- Status: **Canonical product specification**
- Updated: 2026-08-26
- Audience boundary: ages 13+
- Primary V1 field: Agentic Coding
- Product stage: private pre-alpha, incremental web implementation
- Detailed page contract: `docs/product/PAGE_AND_SECTION_SPECS.md`
- Delivery sequence: `docs/roadmap/PRODUCT_IMPLEMENTATION_PLAN.md`

## 1. Product thesis

ProofMode teaches people how to work effectively with AI by making them practise real judgment: framing a task, giving useful instructions, inspecting evidence, challenging weak output, verifying changes, recovering from mistakes, making a human decision, and explaining the outcome.

It is not:

- a generic prompt library;
- a chatbot wrapper;
- passive video coursework;
- an intelligence test;
- an employability score;
- a fake certification;
- a leaderboard without comparable evidence;
- a collection of flashy dashboards with no real practice.

The product promise is: **learn, practise, prove, and recover—while staying in control of the AI.**

## 2. Audience and positioning

### Primary audience

Ambitious learners aged 13+, with teenagers as the first design priority. The product must be understandable, motivating, safe, and visually credible to a teenager without feeling childish or simplified for adults.

### Secondary audiences

- students;
- unemployed learners building useful skills;
- early-career builders;
- adults changing careers;
- independent creators and developers;
- later, teams or companies after separate validity, privacy, fairness, legal, and product gates.

### Market position

ProofMode should outperform alternatives through:

- real practice instead of passive content;
- evidence and verification instead of prompt tricks;
- explicit recovery from AI mistakes;
- a visible Proof Chain;
- professional product craft;
- honest availability and claims;
- age-appropriate privacy and safety;
- useful repetition without manipulative pressure.

The core learning experience must stand on its own. Competition is optional and future-gated; it is never used to hide weak learning value.

## 3. Product surfaces

### Public website

The website is a cinematic but purposeful acquisition and explanation surface. It should:

- communicate the app in the first viewport;
- show a believable ProofMode consequence rather than decorative AI imagery;
- explain what the product is, why it exists, and how it works;
- provide About, Guide, Premium, Support, and Download information;
- route the current web experience to `/play`;
- label unavailable installers and premium functionality honestly;
- avoid autoplay audio, fake users, fake testimonials, fake statistics, and fake availability.

Motion on the website must demonstrate a real sequence: AI claim → contradictory evidence → human intervention → corrected order → safer outcome.

### Repeated-use application

The app is focused, broad on desktop, efficient on mobile, and optimized for repeated learning sessions. It should:

- make the next useful action obvious;
- present one dominant decision at a time;
- keep the Proof Chain visible when it helps;
- show progress without fabricated rank;
- separate current functionality from future roadmap states;
- include complete loading, empty, offline, error, recovery, and completion behavior;
- minimize data and keep results private by default.

The website and app share product identity but do not share the same density, motion, or page composition.

## 4. Core learning system

### Proof Chain

Every meaningful practice experience should make this sequence visible or reconstructable:

1. **Source** — what evidence, requirement, artifact, or constraint exists?
2. **AI move** — what did the AI propose, change, infer, or omit?
3. **Verification** — what check confirms or contradicts that move?
4. **Human decision** — what did the learner accept, reject, modify, or investigate?
5. **Outcome** — what happened, what became safer or better, and what should be repeated?

### Learning loop

1. Orient: understand the outcome and constraints.
2. Observe: inspect source and AI behavior.
3. Act: instruct, verify, correct, or decide.
4. Explain: state why the action is justified and where uncertainty remains.
5. Review: compare behavior with the checkpoint contract.
6. Replay: identify one behavior to improve.
7. Continue: return to the path with a clear next step.

### Skill model for Agentic Coding

The initial curriculum progresses through:

1. framing outcomes and constraints;
2. giving agents bounded tasks;
3. reading plans and diffs;
4. checking sources, requirements, and assumptions;
5. testing behavior and failure states;
6. recovering from a wrong agent move;
7. controlling permissions, secrets, and execution boundaries;
8. coordinating multi-step agent work;
9. reviewing architecture and maintainability;
10. shipping with evidence, rollback, and handoff.

The product teaches behavior from beginner to advanced; it does not equate more prompting or more generated code with higher skill.

## 5. Fields

### V1 available field

**Agentic Coding** is the only field presented as available in V1.

### Future fields

- Design with AI
- Business with AI
- Research with AI
- Game development with AI
- Additional fields only after curriculum, checkpoints, content QA, and truthful product support exist

Future fields may appear only as disabled, clearly labeled roadmap states. They must never imply lessons, scores, or availability that do not exist.

## 6. Information architecture

### Public routes

- `/` — Home
- `/about` — What ProofMode is and why it exists
- `/guide` — How the learning experience works
- `/premium` — Honest future value model and no-pay-to-win principles
- `/support` — Support topics and local feedback preview
- `/download` — Current web app and truthful future native distribution

### Current application routes

- `/play` — private product promise and trial entry
- `/entry` — authoritative 13+ boundary before run creation
- `/mission/northstar-sales-drop` — existing private checkpoint foundation
- `/app` — Today workspace
- `/app/today` — redirect to `/app`
- `/app/onboarding` — private onboarding and field boundary
- `/app/setup` — redirect to onboarding

### Planned application areas

- Learn path and Agentic Coding curriculum
- Focused lesson player
- Guided Proof Chain checkpoint
- Result and replay
- Profile
- Settings
- Arena, only after fairness gates
- Social/friends, only after youth-safety and privacy gates
- Notifications, only after user-control and wellbeing policy
- Premium/payment, only after value, entitlement, refund, and child-safety policy

Detailed sections and states are defined in `PAGE_AND_SECTION_SPECS.md`.

## 7. Desktop and mobile system

### Desktop

- Use a persistent application rail when the route belongs to the repeated-use app.
- Use the width available; the working canvas may grow to approximately 1,840px.
- Prefer a 12-column composition for complex workspaces.
- Keep one dominant practice or learning stage.
- Separate supporting evidence, Proof Chain, or review regions instead of stacking everything into cards.
- Do not center a narrow mobile-sized wizard on a wide screen unless the task itself requires constrained reading width.

### Mobile

- Collapse navigation at approximately 820px where the approved shell requires it.
- Preserve one-column focus and thumb-reachable primary actions.
- Use a fixed or sticky action area only when content has sufficient bottom space and remains operable at zoom.
- Guarantee no page-level horizontal scrolling at 390px.
- Keep all visible interactive targets at least 44×44px.

### Motion

- Motion communicates state, causality, focus, progress, or spatial continuity.
- No continuous decorative motion in the learning app.
- Reduced-motion mode preserves all information and sets nonessential animation/transition durations to zero.
- Audio is always user initiated and never required for comprehension.

## 8. State model

Every route documents applicable states from this vocabulary:

- `ready`
- `loading`
- `empty`
- `offline`
- `error`
- `timeout`
- `permission-denied`
- `expired`
- `invalid`
- `resume`
- `complete`

Query-driven review states must be allowlisted. Unknown values fail closed to the safest normal state and are never rendered as user content.

No loading state may accidentally enable a consequential action. Every recoverable failure must explain what happened, what was or was not saved, and the next safe action.

## 9. Progress, identity, and motivation

- Early preview progress is clearly labeled fixture or local preview data.
- Real progress requires an approved persistence and identity model.
- Progress emphasizes completed behavior and next practice, not vague XP.
- Streaks may never punish missed days or create anxiety-driven retention.
- Pace is a recommendation, not an obligation.
- Profiles are private by default.
- Public sharing is granular, revocable, and future-gated.
- The product never labels a learner’s intelligence, worth, or employability.

## 10. Competition and social systems

Competition is a future optional layer, not the foundation of the experience.

Before Arena, ranks, challenges, or leaderboards:

- mission versions must be immutable and comparable;
- scoring must be deterministic and explainable;
- accessible alternatives must remain equivalent;
- anti-abuse and appeals must exist;
- youth wellbeing and privacy must be reviewed;
- public identity and sharing controls must be explicit;
- pay-to-win and pressure mechanics must be prohibited.

Before friends, feeds, messaging, or social discovery:

- age-aware defaults and discovery rules must exist;
- blocking, reporting, moderation, abuse response, retention, and deletion must be designed;
- direct messaging remains excluded until separately approved;
- no contact upload or public-by-default social graph.

## 11. Built-in AI

A future built-in AI may coach, explain, simulate agent behavior, or extract bounded signals. It must:

- run behind a server-side gateway;
- use typed request/response schemas;
- have explicit model purpose and context limits;
- redact secrets and minimize personal data;
- enforce time, token, rate, and cost budgets;
- support cancellation, timeout, retry, and deterministic fallback;
- never become final scoring authority;
- never execute arbitrary code in the main application environment;
- clearly distinguish model output from verified facts.

The current Today and onboarding slices make no model or provider call.

## 12. Security and privacy

- Minimum supported age is 13.
- No birthday is needed for the current age boundary.
- Under-13 selection creates no run/profile and requests no further data.
- Personal data is minimized and private by default.
- Purpose, retention, export, deletion, consent, recovery, and regional behavior must be approved before accounts or persistence.
- Hidden mission truth, scoring manifests, provider keys, and private prompts never reach the browser.
- Uploaded and external content is untrusted.
- Coding execution requires disposable isolated sandboxes with network, secret, CPU, memory, time, and filesystem limits.
- Security limitations and unavailable scanning tools are reported honestly.

## 13. Business and distribution

### Premium

Premium must fund deeper value without buying outcomes. Future candidates include richer paths, more practice, advanced review, private exports, and creator tools. It must not sell rank, easier scoring, preferential matchmaking, or essential accessibility.

No checkout or entitlement system is currently implemented.

### Web and native distribution

The browser app is the current executable product surface. Windows and macOS installers remain future work until there is:

- a signed build pipeline;
- platform-specific packaging and permissions review;
- secure update metadata and rollback;
- release channels and crash reporting policy;
- a clear mobile/desktop value beyond the web app.

Never publish fake installer links or an update button without a real signed updater.

## 14. Product claims

Allowed now:

- ProofMode teaches and practises specific AI-collaboration behaviors.
- The current preview demonstrates private, deterministic interfaces and checkpoints.
- Agentic Coding is the initial field.

Not allowed without evidence:

- guaranteed employment or income;
- intelligence measurement;
- certified professional competence;
- percentile or superiority claims;
- active user counts, success rates, testimonials, or employer acceptance;
- real ranks, social activity, or platform availability that does not exist.

## 15. Experience corrections that remain binding

Past owner feedback established these durable rules:

- do not shrink the product vision into a single-prompt prototype;
- plan and build page by page;
- do not substitute decorative circles or generic AI visuals for product proof;
- keep hero text proportional and preserve a strong first impression;
- use imagery and motion that explain ProofMode;
- avoid “vibe-coded” card collections and fake interface theatre;
- do not add a decorative “Play proof” control;
- retain the approved public V6 direction rather than replacing it with a weaker polish pass;
- keep the mobile app focused while making desktop materially broader;
- test security, privacy, workflow, failure states, accessibility, and responsive behavior while building—not afterward.

## 16. Definition of product completion

A page or feature is complete only when:

- its user job and place in the journey are clear;
- all required sections and states exist;
- desktop and mobile compositions are intentional;
- keyboard, semantics, contrast, zoom, target sizes, and reduced motion pass;
- data and security boundaries are explicit;
- claims and unavailable functionality are honest;
- domain, integration, and browser checks pass at the appropriate level;
- performance budgets pass;
- docs, handoff, rollout, and rollback are updated;
- it is merged into a green `main`.
