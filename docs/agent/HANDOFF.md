# ProofMode handoff

Last updated: `2026-08-19T18:38:00+05:30`  
Run ID: `2026-08-19-cinematic-website-app-gate3-approved`

## Current state

- Canonical branch: `main`.
- Owner-verified functional rollback baseline: `b0025fa97b03d1228e601e52a82b3e9b5016352e`.
- Complete owner-local verification is green: 21 domain/web tests, TypeScript, production build, browser boundary, budgets, five Playwright tests, and repository axe.
- The owner approved all three Cinematic Website + Focused App Gate 3 decisions.
- Production implementation is authorized for the website direction, app direction, and binding motion/media rules.
- The displayed concept person, still, and film remain unapproved as final production assets.
- Agent Arena v1 remains the current functional presentation and a rollback source, not the accepted visual destination.

## Active work

1. Record the approval before implementation.
2. Audit the current production route and component boundary.
3. Implement shared tokens and a static/no-media marketing-site foundation first.
4. Preserve the existing verified app loop while separating marketing and product surfaces.
5. Extend tests and budgets with every material slice.
6. Keep media adoption and final-asset selection behind their separate approval.

## Progress

### Owner decision

Approved independently:

- A — cinematic public website direction;
- B — focused lower-guidance app direction;
- C — motion, loading, accessibility, provenance, and performance rules.

### Approved boundary

> The website earns attention and demonstrates the promise. The app protects concentration and trains judgment.

Website:

- cinematic human/product story;
- sparse promise and product proof;
- user-initiated silent film;
- bounded parallax, decorative cursor, and proof/status motion;
- try/download conversion path.

App:

- related identity with lower motion and lower copy density;
- no cinematic background during timed play;
- staged, dismissible first-use onboarding;
- contextual AI warning and proof chain;
- Scout, Challenge, Lock, Result, private behavior signal, and replay.

### Binding rules

- no automatic audio;
- media downloads only after explicit play except a measured poster;
- moving content has an explicit stop/pause path;
- reduced motion uses static media and removes decorative movement;
- controls remain at least 44 × 44;
- initial media remains at or below 350 KB;
- final assets require provenance, rights, responsive crops, accessibility treatment, budget proof, and owner approval;
- production changes preserve current contracts, axe, boundary, and test coverage.

### Artifact evidence

Package: `proofmode-cinematic-website-app-gate3-v1.zip`

- size: 530,919 bytes;
- SHA-256: `7729f0ba11eecff221432f2bfe82b1d6a76d986870c31ad8723e00f1fca2bc4d`;
- desktop and mobile interactive views;
- 9-second user-initiated silent film;
- Website, App, System, four app stages, onboarding, and reduced-motion state;
- Chromium QA: `findings: []`.

## Opportunity and capture plan

The approved separation lets the website create emotional pull without turning a timed judgment game into a distracting marketing demo. Production work should establish the shared system first, then build the static website, then introduce optional media, and only then refine the app’s visual hierarchy.

Each phase must preserve a clean rollback to `b0025fa` and produce observable user-facing value rather than code volume.

## Limitations and weak spots

- The final human image and film are not selected or approved.
- The artifact is not production code and does not replace repository/manual accessibility testing.
- Agent Arena remains visually revision-requested until the approved app direction is implemented and reviewed.
- Scoring remains a private local behavior signal, not authoritative competitive scoring.
- No infrastructure vendor, analytics, personal-data expansion, public beta, social/ranking, employer/school, payment, native app, or code sandbox is approved.

## Next plan

### Slice 1 — boundary and static foundation

1. Inspect current routes, shell, tests, and budgets.
2. Define the smallest explicit marketing-site/app boundary.
3. Add shared tokens without duplicating or breaking existing styles.
4. Build the approved static website promise without production media.
5. Preserve direct access to the existing playable app.
6. Add route, keyboard, responsive, boundary, and budget regression coverage.
7. Run all available local checks; request owner Windows verification when evidence is complete.

### Later approved slices

- Slice 2: user-initiated poster/film shell and bounded website motion.
- Slice 3: focused app hierarchy and staged first-use onboarding.
- Slice 4: integrated QA, manual accessibility, final media review, and owner acceptance.

## Approval state

Approved for incremental production implementation:

- cinematic website direction;
- focused app direction;
- motion/media/accessibility/performance rules;
- ages 13+ consumer-first product;
- React/TypeScript/Vite foundation;
- private browser contracts;
- verified Scout -> Challenge -> Lock -> Result behavior.

Still requires separate approval:

- final person, image, film, audio, or 3D asset;
- production media provider or hosting;
- infrastructure providers;
- personal-data scope and public beta;
- social/ranking, employer/school, monetization, native, and sandbox scope.

## Verification

Owner-green rollback baseline:

```text
Repository: 44 required files.
Hygiene: 104 source files.
Mission: northstar-sales-drop@1.
Domain/contract tests: 10 passed.
Web tests: 11 passed.
TypeScript/build/boundary/budgets: passed.
Playwright: 5 passed in 20.8s.
```

Approval artifact:

```text
Desktop: 1440 × 960.
Mobile: 390 × 844.
Interactive targets below 44 × 44: 0.
Horizontal overflow: 0.
Unnamed buttons: 0.
Duplicate IDs: 0.
Film/app/onboarding/reduced-motion checks: passed.
Findings: 0.
```

## Next agent checklist

1. Read `AGENTS.md`, this handoff, `APPROVALS.md`, `RUNBOOK.md`, `WORKFLOW.md`, `QUALITY_BAR.md`, and the approved Gate 3 document.
2. Treat `b0025fa` as the owner-verified functional rollback baseline.
3. Implement Slice 1 before adding media or app redesign.
4. Keep marketing and app routes/components distinct while sharing controlled tokens.
5. Do not commit the concept person or film as production assets.
6. Preserve current tests, axe, browser boundary, and budgets.
7. Update governance and issue evidence after each meaningful slice.
