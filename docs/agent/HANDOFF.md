# ProofMode handoff

Last updated: `2026-08-19T19:00:00+05:30`  
Run ID: `2026-08-19-website-app-boundary-slice1`

## Current state

- Canonical branch: `main`.
- Current head before this handoff commit: `f79290b061b3aba646d9de877148ee122b7b1dc2`.
- Owner-verified functional rollback baseline: `b0025fa97b03d1228e601e52a82b3e9b5016352e`.
- Production Slice 1 is implemented: `/` is now the public website and `/play` is the existing playable app.
- Implementation commit: `62aa5adcf5f3b78ac0a1452561294cd39e911a7e`.
- Regression-guard commit: `f79290b061b3aba646d9de877148ee122b7b1dc2`.
- The mission contracts, age boundary, deterministic AI behavior, local run state, private debrief, and scoring rules were not changed.
- The production website is intentionally static/no-media in this slice. The displayed concept person, still, and film remain unapproved as final assets.

## Active work

1. Obtain owner verification from a clean Windows checkout.
2. Review any TypeScript, build, budget, Playwright, or axe evidence from that run.
3. Repair regressions before beginning media work.
4. After Slice 1 is green, build the user-initiated poster/film shell and bounded motion as Slice 2.
5. Keep final media provenance, rights, crops, accessibility treatment, budgets, and owner approval behind their separate gate.

## Progress

### Production boundary

- `/` renders the new cinematic marketing-site foundation.
- `/play` preserves the existing app promise and mission entry.
- `/entry` and `/mission/northstar-sales-drop` preserve their existing contracts.
- Unknown routes continue to return to `/`.
- The site and app share the ProofMode identity while keeping route, hierarchy, and visual intensity distinct.

### Static website foundation

Implemented:

- approved lead: `AI can write it. Can you make the call?`;
- direct `Try today’s mission` and `Open app` paths to `/play`;
- responsive product/editor proof scene;
- visible AI recommendation, contradictory signal, recovery status, and decorative cursor;
- Human + AI versus AI-alone comparison;
- private skill-profile preview;
- concise 13+, no-account, and AI-can-be-wrong boundary;
- no production image, video, audio, third-party embed, or new data collection.

### Accessibility and regression coverage

- Website controls preserve 44 × 44 minimum targets.
- Skip-link target sizing is explicitly guarded.
- Reduced-motion removes website transition movement.
- Playwright now checks the website promise, keyboard skip link, website axe scan, `/play` transition, complete mission loop, 390 px overflow, and target sizing.
- Repository checks require `WebsiteRoute.tsx`, `website.css`, the stylesheet import, and the `/` versus `/play` route boundary.
- Required-file count is now expected to be 46.

## Opportunity and capture plan

The website can now earn attention without turning the timed app into a cinematic landing page. Slice 2 can add a user-initiated proof film, poster, bounded cursor path, and a few causal status objects on the public route only. The app remains the place for concentration, verification, recovery, and commitment.

The media scene should show a real cause-and-effect story—not generic AI particles: a builder accepts AI speed, notices contradictory evidence, verifies the source, and recovers before shipping. Every movement must support that story or be removed.

## Limitations and weak spots

- Full repository verification could not run in the sandbox because the reconstructed workspace has incomplete local dependency packages.
- Local verification used an isolated esbuild/browser harness rather than the repository Vite/Playwright installation.
- Final production media is not selected or approved.
- The current app presentation still awaits the approved focused hierarchy and staged onboarding slice.
- Scoring remains a private local behavior signal, not an authoritative competitive score.
- No infrastructure provider, analytics expansion, personal-data expansion, public beta, social/ranking, employer/school, payment, native app, or code sandbox is approved.

## Next plan

### Owner verification

Run from a clean checkout:

```powershell
git pull origin main
git status --short
npm run verify
npm run test:e2e
```

Acceptance evidence:

- clean working tree;
- repository check reports 46 required files;
- mission, domain, web, TypeScript, and production build pass;
- browser boundary and JavaScript/CSS/media budgets pass;
- all Playwright tests pass at desktop, 390 px, reduced motion, and zoom-equivalent coverage;
- both website and result axe scans report zero WCAG 2 A/AA violations.

### Later approved slices

- Slice 2: user-initiated poster/film shell and bounded website motion.
- Slice 3: focused app hierarchy and staged first-use onboarding.
- Slice 4: integrated QA, manual accessibility, final-media review, and owner acceptance.

## Approval state

Approved for incremental implementation:

- cinematic public website direction;
- focused lower-guidance app direction;
- motion, media-loading, accessibility, provenance, and performance rules;
- ages 13+ consumer-first product;
- React/TypeScript/Vite foundation;
- existing private browser mission contracts.

Still requires separate approval:

- final person, image, film, audio, or 3D asset;
- production media provider or hosting;
- infrastructure providers;
- personal-data scope and public beta;
- social/ranking, employer/school, monetization, native, and sandbox scope.

## Verification

Owner-green rollback baseline at `b0025fa`:

```text
Repository: 44 required files.
Hygiene: 104 source files.
Mission: northstar-sales-drop@1.
Domain/contract tests: 10 passed.
Web tests: 11 passed.
TypeScript/build/boundary/budgets: passed.
Playwright: 5 passed in 20.8s.
```

Slice 1 isolated verification:

```text
Formatting and TSX/CSS parsing: passed.
Browser bundle/runtime: passed.
Desktop 1440 × 960: website and /play app rendered.
Mobile 390 × 844: website and /play app rendered.
Horizontal overflow: 0.
Visible targets below 44 × 44: 0.
Console/page errors: 0.
Full repository verification: pending owner run.
```

## Next agent checklist

1. Read `AGENTS.md`, this handoff, `APPROVALS.md`, `RUNBOOK.md`, `WORKFLOW.md`, `QUALITY_BAR.md`, and the approved Gate 3 document.
2. Treat `b0025fa` as the owner-verified functional rollback baseline.
3. Do not begin Slice 2 until Slice 1 owner verification is green or its findings are repaired.
4. Keep public-site media and app mission UI separate.
5. Do not commit the concept person or film as production assets.
6. Preserve contracts, axe, browser boundary, and budgets.
7. Update governance and issue evidence after each meaningful slice.
