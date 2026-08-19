# ProofMode handoff

Last updated: `2026-08-19T18:30:00+05:30`  
Run ID: `2026-08-19-cinematic-website-app-gate3-v1`

## Current state

- Canonical branch: `main`.
- Owner-verified functional baseline: `b0025fa97b03d1228e601e52a82b3e9b5016352e`.
- Complete owner-local verification remains green: 21 domain/web tests, TypeScript, production build, browser boundary, budgets, five Playwright tests, and repository axe.
- The owner clarified that the public website and product app are different experiences.
- A detailed Cinematic Website + Focused App Gate 3 proposal and interactive approval artifact are complete.
- No production visual code or existing functional contract was changed.
- Agent Arena v1 remains visually revision-requested.
- The new website direction, app direction, and motion/media rules are pending independent owner approval.

## Active work

1. Owner reviews `proofmode-cinematic-website-app-gate3-v1.zip`.
2. Owner decides whether to approve the Website, App, and Motion/media portions.
3. Record the exact decision in `APPROVALS.md`.
4. If approved, prepare an incremental production plan with a rollback to `b0025fa`.
5. Do not adopt the concept person, still, or film as production media without separate explicit approval.

## Progress

### Experience boundary

The clarified boundary is:

> The website earns attention and demonstrates the promise. The app protects concentration and trains judgment.

Website:

- cinematic, aspirational human/product story;
- short user-initiated film;
- restrained parallax, animated cursor, and floating evidence/status objects;
- minimal copy and one primary conversion path;
- product proof instead of feature-wall explanation.

App:

- related visual identity but lower motion and lower copy density;
- no cinematic background media during timed missions;
- staged, dismissible first-use onboarding instead of permanent guides;
- mission-first Scout, Challenge, Lock, and Result states;
- private behavior-signal language and pivotal replay.

### Interactive artifact

Package: `proofmode-cinematic-website-app-gate3-v1.zip`

- archive size: 530,919 bytes;
- archive SHA-256: `7729f0ba11eecff221432f2bfe82b1d6a76d986870c31ad8723e00f1fca2bc4d`;
- interactive views: Website, App, System;
- desktop target: 1440 × 960;
- mobile target: 390 × 844;
- mission previews: Scout, Challenge, Lock, Result;
- first-use onboarding preview;
- explicit motion toggle and operating-system reduced-motion behavior;
- README, decision sheet, QA report, manifest, previews, poster, WebM, and MP4 fallback.

### Media measurements

- HTML: 42,742 bytes;
- poster WebP: 30,228 bytes initial media;
- VP9/WebM film: 126,372 bytes;
- MP4 fallback: 259,233 bytes;
- film duration: 9 seconds;
- resolution: 1280 × 720;
- audio: none;
- video source assigned only after explicit play.

### QA

Chromium checks passed on all Website, App, and System views at desktop and mobile:

- no horizontal overflow;
- no unnamed buttons;
- no duplicate IDs;
- no visible target below 44 × 44;
- film source load and playback;
- app state switching;
- onboarding open/close;
- reduced-motion film remains paused;
- decorative cursor hidden with reduced motion.

Machine result: `findings: []`.

The visual screenshots were also inspected after QA. This is concept-artifact evidence, not production repository axe or manual assistive-technology certification.

### Provenance

- Human still: AI-generated concept exploration using Google `nano-banana`.
- Film: deterministic crop, pan, grade, and encoding derived from the still.
- Product UI, cursor, evidence objects, copy, and interactions: authored for ProofMode.
- No reference-site implementation or asset was copied.
- All media remains replaceable and unapproved for production.

## Opportunity and capture plan

The public website can express the emotional payoff the owner requested—coding with AI at its best—without forcing the timed app to become a motion-heavy marketing surface.

The proposal uses cinematic media only where it earns attention, then lets real product behavior carry the story. The app stays serious, fast, and trustworthy for teen learners and future professional use. Shared type, color roles, product footage, and direct language make the two experiences feel related without making them identical.

## Limitations and weak spots

- The owner has not yet approved the detailed Website, App, or Motion/media direction.
- The displayed person, still, film, and exact copy are concept-only.
- The artifact does not replace production axe, manual keyboard, screen-reader, zoom, device, or performance testing.
- Manual visual review remains subjective and required.
- Agent Arena v1 is still the production visual baseline and is not accepted as the destination.
- Current scoring remains a private local behavior signal, not authoritative competitive scoring.
- No provider, analytics, personal-data expansion, public beta, social/ranking, employer/school, payment, native app, or code sandbox is approved.

## Next plan

### Owner review

Review the interactive artifact, then decide independently:

- A — cinematic website direction;
- B — focused app direction;
- C — motion, loading, accessibility, provenance, and performance rules.

### If approved

1. Record the exact approved portions.
2. Split implementation into a marketing-site track and app-refinement track.
3. Establish shared tokens before layout changes.
4. Build static/no-media website behavior first.
5. Add user-initiated media and motion behind strict reduced-motion and budget gates.
6. Refactor app guidance and hierarchy without changing verified mission contracts.
7. Keep each change reversible to `b0025fa`.
8. Run the complete repository and owner Windows verification after each material slice.
9. Seek separate approval for final media before release.

## Approval state

Approved and retained:

- ages 13+ consumer-first sequencing;
- React/TypeScript/Vite responsive web foundation;
- browser-safe private contracts and deterministic mock-AI boundary;
- `Scout -> Challenge -> Lock -> Result`, proof chain, fallible AI move, recovery, deliberate lock, private local debrief, and replay;
- website and app as different experience surfaces;
- detailed exploration and concept artifact creation.

Owner-verified technically:

- full `npm run verify` pipeline;
- 21 domain/web tests;
- TypeScript and production build;
- boundary and budgets;
- five Playwright tests and repository axe.

Pending owner review:

- cinematic public website direction;
- focused lower-guidance app direction;
- motion/media/accessibility/performance rules.

Revision requested:

- Agent Arena implementation v1 visual execution.

Not approved:

- replacement production UI;
- final concept image, film, or production copy;
- media vendor or hosting;
- authoritative scoring, provider/infrastructure, personal-data expansion, public launch, social/ranking, employer/school, payment, native, or sandbox scope.

## Verification

Repository baseline remains owner-green at `b0025fa`:

```text
Repository: 44 required files.
Hygiene: 104 source files.
Mission: northstar-sales-drop@1.
Domain/contract tests: 10 passed.
Web tests: 11 passed.
TypeScript/build/boundary/budgets: passed.
Playwright: 5 passed in 20.8s.
```

Concept artifact:

```text
Desktop: 1440 × 960.
Mobile: 390 × 844.
Views: Website, App, System.
Interactive targets below 44 × 44: 0.
Horizontal overflow: 0.
Unnamed buttons: 0.
Duplicate IDs: 0.
Film playback: passed.
App state switching: passed.
Onboarding open/close: passed.
Reduced-motion fallback: passed.
Findings: 0.
```

## Next agent checklist

1. Read `AGENTS.md`, this handoff, `APPROVALS.md`, `RUNBOOK.md`, `WORKFLOW.md`, `QUALITY_BAR.md`, and `CINEMATIC_WEBSITE_APP_GATE3_V1.md`.
2. Treat `b0025fa` as the owner-verified functional rollback baseline.
3. Do not change production visuals before the owner answers A, B, and C.
4. Do not treat the displayed concept person or film as approved media.
5. Record the exact owner decision before implementation.
6. Keep marketing-site and product-app work as distinct tracks sharing a controlled system.
7. Update handoff, run log, approvals, design docs, and issue evidence after the decision.
