# ProofMode handoff

Last updated: `2026-08-18T21:32:00+05:30`
Run ID: `2026-08-18-owner-feedback-recovery-v1`

## Current state

The owner completed the first exact Windows install and browser run for the Casefile scaffold. Dependency installation succeeded, but repository verification and one browser test failed. More importantly, the owner rejected the current visual and interaction implementation as dated, oversized, flat, too straightforward, and poorly targeted to teenagers building credible AI and coding skills.

The current UI is now **revision requested**, not production approved. Preserve the framework-independent product/security contracts, but do not continue polishing or expanding this aesthetic. The creative and interaction direction is reopened for owner selection.

A narrow technical recovery is on canonical `main` at `579a36e06b0521d6dc54cb5d24588e7570f7c87e`. It fixes objective verification and accessibility defects only; it is not a redesign.

## Active work

1. Obtain owner rerun evidence for the technical recovery.
2. Stop production UI implementation at the reopened design gate.
3. Present two or three genuinely different learner-facing directions for approval.
4. After selection, produce a visual, product-first desktop/mobile approval pack before changing production UI.

## Progress

- Owner confirmed Node `v24.14.1` and npm `11.11.0`.
- `npm ci --ignore-scripts` added 61 packages, audited 62 packages, and reported 0 vulnerabilities.
- The app rendered on desktop and the functional mission path was reachable.
- `npm run verify` stopped at `check:repo`; later verification stages did not run.
- Playwright completed with 4 passed and 1 failed.
- The failure identified two active evidence metadata nodes at `3.54:1` contrast rather than the required `4.5:1`.
- The accessibility path also exceeded the 30-second test timeout on Windows.
- Technical recovery commit `579a36e06b0521d6dc54cb5d24588e7570f7c87e`:
  - replaces five stale, never-existing repository paths with the actual authoritative files;
  - adds the missing `scripts/check-hygiene.mjs` invoked by `package.json`;
  - adds a scoped active-evidence contrast correction;
  - increases the Playwright test timeout to 60 seconds.
- Commit inspection confirmed only those five repair files changed.
- Owner visual feedback is recorded in `docs/design/CASEFILE_IMPLEMENTATION_REVIEW_V1.md` and the approval ledger.

## Opportunity and capture plan

Primary audience remains ages 13+ learners who want to become genuinely capable with AI: coding well, supervising agents, checking claims, handling realistic situations, recovering from mistakes, and producing professional work. Employer use remains later, after consumer proof.

The next interface needs to feel like a desirable skill game and modern maker product—not a document viewer, corporate dashboard, old editorial landing page, childish lesson app, or fake hacker console.

Recovery criteria:

- compact contemporary typography rather than an oversized hero;
- strong first-10-second hook and obvious action;
- visible mission progression, consequence, and feedback;
- interactions that make inspect → ask → verify → decide feel active;
- AI behavior shown as work to supervise, not a chat box added beside documents;
- satisfying proof/recovery moments and a clear end-state payoff;
- premium desktop and mobile composition;
- enough energy for a 16-year-old learner while retaining professional credibility;
- evidence-first trust, WCAG AA, reduced motion, and performance budgets.

Current external references are research inputs only. Do not copy branding or treat any reference as approved production design.

## Limitations and weak spots

- The current UI failed owner visual review and must not be marketed, expanded, or called polished.
- The current mission interaction is functionally complete only as a narrow preview and still lacks authoritative scoring, replay, and broader recovery states.
- The technical recovery has not yet been rerun on the owner's exact Windows environment.
- GitHub Actions status is not observable through the current repository connection; do not claim it passed.
- No representative teen user testing has occurred.
- The original prototype is only a positive relative signal; its behavior and scoring remain incomplete.
- No new direction, production media, or motion language is approved.

## Next plan

1. Owner pulls the technical recovery and reruns `npm run verify` and `npm run test:e2e`.
2. Agent presents three design-recovery directions with audience fit, real product moments, interaction model, motion intent, desktop/mobile strategy, accessibility, risks, and recommendation.
3. Owner selects one direction or rejects all.
4. Agent records the selection before producing detailed screens.
5. Agent creates a visual Gate 3 recovery pack using actual mission states—not a prose deck—and requests implementation approval.
6. Only after approval, replace the rejected UI while retaining the tested contracts.
7. Resume trusted events, bounded AI gateway, and scoring work after the shell is accepted.

## Approval state

Approved and retained:

- learner-first ages 13+ sequence;
- Make the call as the current core skill hypothesis;
- React/Vite/React Router foundation and framework-independent contracts;
- deterministic mocks, private session behavior, browser-safe mission boundary, security and accessibility requirements;
- `main` as canonical.

Revision requested:

- Casefile web scaffold visual system;
- current landing composition and typography;
- current mission workspace presentation and interaction pacing;
- current product copy density and emotional appeal.

Not approved:

- any replacement visual/interaction direction;
- production images, video, audio, 3D, or materially new motion;
- public launch, personal data, providers, employer/school, social/rankings, payments, native apps, or code sandboxes.

## Verification

Owner command results against `77e89e79b15604348df6e72e68a99843ab86564f`:

- `git pull origin main`: passed, 34 files updated;
- `git status --short`: clean;
- Node/npm versions: passed;
- `npm ci --ignore-scripts`: passed; 0 vulnerabilities;
- `npm run verify`: failed at repository manifest check because of stale/nonexistent required paths and missing hygiene script;
- `npx playwright install chromium`: passed;
- `npm run test:e2e`: 4 passed, 1 failed; serious contrast violation plus 30-second timeout.

The technical recovery has been statically inspected but is **not yet owner-verified**. Do not claim green verification until the rerun returns.

## Next agent checklist

- Read `AGENTS.md`, this handoff, approvals, workflow, quality bar, and `CASEFILE_IMPLEMENTATION_REVIEW_V1.md`.
- Treat the current visual/interaction implementation as rejected pending revision.
- Do not redesign production UI before explicit direction approval.
- Preserve the public/private data boundary and deterministic state contracts.
- Never hide or downgrade the owner-observed failures.
- Record the rerun output exactly.
- Keep the next proposal visual and product-first, with short natural language.
- Update this handoff and append the same run ID for every meaningful run.
