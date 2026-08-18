# ProofMode handoff

Last updated: `2026-08-18T17:12:00+05:30`
Run ID: `2026-08-18-web-scaffold-v1`

## Read first

1. `AGENTS.md`
2. `docs/agent/APPROVALS.md`
3. `docs/agent/RUNBOOK.md`
4. `docs/agent/WORKFLOW.md`
5. `docs/agent/QUALITY_BAR.md`
6. `docs/agent/TOOLING.md`
7. This handoff and the latest entry in `docs/agent/RUN_LOG.md`

## Current stage

Issue #3's first production vertical slice is implemented on canonical `main`. It is a learner-first, ages-13+ Make the call / Casefile journey backed only by the deterministic public Northstar fixture and deterministic mock AI.

The implementation is now repository-complete and locally testable. Exact lock-backed owner verification and observed CI results are still pending, so do not describe this slice as fully verified or release-ready yet.

Implementation commit range:

- start: `e882ff1fe755c8ba47dd1fb2dc9f8bed6fa44700`
- end: `32224f5dfedebfc79cc6eea7923dde4555c4217c`

The delivery was intentionally split into small atomic commits after a sandbox reset. The governance commit is outside the implementation rollback range so the record remains available if the product code is reverted.

## Current approved decisions

- `main` is the canonical branch and must remain locally testable.
- Every meaningful run updates this handoff and appends the same run ID to `docs/agent/RUN_LOG.md`.
- Signal Ops v1 remains revision-requested and prohibited from production.
- Gate 1: **A — Make the call**.
- Gate 2: **Casefile**.
- Gate 3 journey is approved for issue #3.
- Stack A — Explicit React platform — is approved.
- Phase 1 is learner-first and supports ages 13+ only; under-13 use is unsupported.
- Employer assessment may enter only after consumer proof and a separate validation gate.
- Approved architecture remains React/Vite/React Router web, a later Fastify API boundary, separate worker, PostgreSQL/Kysely architecture, and framework-independent domain/scoring contracts.
- This slice uses deterministic mocks only.
- No hosting, database, queue, storage, AI, analytics, observability, authentication, or other provider has been selected.
- Personal-data fields, retention, launch regions, consent mechanics, support access, public beta, and providers remain separately gated.
- Employer/school access, rankings, recommendations, proctoring, social systems, payments, native apps, code sandboxes, and unapproved production media remain out of scope.
- The legacy prototype is reference material only and must never be described as complete, calibrated, or production-ready.

## Active work and scope

### Delivered in issue #3's first slice

- concise promise route: “Make the call. Show your proof.”;
- 13+ boundary before any run is created;
- under-13 exit that clears state and saves nothing;
- clock-paused mission brief and intentional six-minute Start;
- responsive desktop three-pane and mobile single-surface workspaces;
- five public Northstar artifacts, evidence index, and source reader;
- private session-scoped notes and bounded resume behavior;
- blank-start, optional deterministic mock AI with a plausible mistake and explicit recovery;
- evidence pins and source-linked citations;
- structured private call requiring one cause, one action, two sources, and remaining uncertainty;
- explicit draft-only/no-score behavior;
- answer-neutral pre-submit styling;
- no external media, external requests, account, sharing, analytics, database, provider, or client-side scoring;
- strict TypeScript, Vitest, Playwright, axe, browser-boundary, and bundle-budget surfaces;
- exact reviewed npm lock and Node/npm toolchain pins.

### Explicitly not delivered

- authoritative scoring, score reveal, replay, calibration, or rankings;
- signed mission delivery or trusted event ingestion;
- production AI gateway;
- authentication, persistent user accounts, or personal-data collection;
- production backend, worker, database, queue, storage, telemetry, or hosting;
- social, employer, school, payment, native, code-sandbox, or public-launch systems;
- final production media.

## Decisions and rationale

- **No score is produced in the browser.** Scoring truth remains private and must later run at a trusted boundary.
- **The AI is deterministic and fallible.** This demonstrates verification and recovery without selecting a provider or exposing credentials.
- **The session is private and bounded.** The preview keeps only the approved run fields in `sessionStorage`; it does not create an account or durable profile.
- **The age boundary precedes run creation.** Under-13 use is unsupported and exits without saving.
- **The dependency graph is exact.** Node `24.14.1`, npm `11.11.0`, and all application/test packages are pinned in the reviewed lock.
- **Install scripts are disabled.** `npm ci --ignore-scripts` narrows supply-chain behavior for this slice.
- **Implementation was delivered incrementally.** Small commits protected completed work after the sandbox reset; rollback therefore targets the full recorded range rather than a single commit.

## Files changed in this run

The implementation range adds or updates 34 intended files across:

- `apps/web/` runtime, domain state, deterministic mock AI, routes, components, visual system, unit tests, and browser tests;
- `package.json`, `package-lock.json`, and `.nvmrc`;
- `.devcontainer/devcontainer.json` and `.github/workflows/ci.yml`;
- `scripts/check-repo.mjs`, `scripts/check-web-boundary.mjs`, and `scripts/check-web-budget.mjs`;
- `README.md`;
- this handoff and `docs/agent/RUN_LOG.md` in the following governance commit.

No temporary router shim, local fixture stand-in, generated bundle, screenshot, `node_modules`, lock generator, or review archive was committed.

## Verification evidence

### Agent-side evidence completed before the sandbox reset

- semantic TypeScript source check passed;
- 13 framework-independent domain assertions passed;
- browser boundary passed for 14 source files and one JavaScript bundle;
- JavaScript gzip: `71,569 / 184,320` bytes;
- CSS gzip: `5,778 / 25,600` bytes;
- oversized media: `0`;
- console errors: `0`;
- page errors: `0`;
- failed requests: `0`;
- external requests: `0`;
- no page-level overflow at 1440 px, 390 px, or the 720 px/200%-equivalent workflow;
- skip link focused first;
- mobile navigation targets measured `78 × 58 px`;
- under-13 storage remained absent;
- reduced-motion animation measured `0s`;
- fourteen desktop/mobile states were visually inspected;
- remaining uncertainty persisted through the local session-state path.

### Reconstruction and repository evidence

- reconstruction domain harness passed all 13 assertions;
- script syntax and manifest checks passed;
- targeted secret scan passed;
- reviewed lock SHA-256: `8102c7a1d5872b2e5b7e1a20191e8c5dd03cf5fcf549f5129d50bc9a43cfa255`;
- reviewed lock Git blob: `66104ed7410ccf456e08dd123ae4d092138231db`;
- the committed remote lock has the same Git blob, proving byte-for-byte identity;
- all intended source, style, test, lock, toolchain, guard, and documentation files were committed to `main`.

### Verification still required

- exact owner-side `npm ci --ignore-scripts` on the committed lock;
- committed `npm run verify` output;
- committed Playwright/axe browser run output;
- observed GitHub Actions status.

Do not claim those checks passed until the owner or the Actions UI provides direct evidence.

## Risks, limitations, and weak spots

- Sandbox DNS cannot reach the npm registry, so the reconstructed workspace could not repeat an exact dependency install after reset.
- The browser experience is a production-oriented shell, not a production release: scoring and trusted server boundaries are intentionally absent.
- Session storage is suitable only for the private preview; it is not a durable account model.
- The Northstar mission still needs blind learner QA and later calibration.
- Browser tests are authored but need the exact owner/CI run against the committed tree.
- No provider, region, retention policy, consent mechanism, or public beta has been approved.
- GitHub Advanced Security is not enabled; do not claim GHAS or CodeQL coverage.

## Next tasks

1. Collect exact owner Windows verification for the committed tree.
2. Inspect the observed CI runs without overstating status.
3. Update this handoff and append a new verification run ID with the exact outputs.
4. Continue dependency order:
   - issue #5 immutable mission registry and trusted events;
   - issue #4 bounded AI gateway;
   - issue #7 deterministic scoring, explanation, and replay;
   - remaining issue #3 recovery/completion states;
   - issue #8 guest/auth/youth privacy;
   - issue #6 Northstar blind QA;
   - issue #9 release, security, accessibility, and observability gates.
5. Keep code missions blocked until disposable sandbox isolation is designed and approved.

## Exact next commands

Run from the repository root on Windows PowerShell:

```powershell
git pull origin main
node --version
npm --version
npm ci --ignore-scripts
npm run verify
npx playwright install chromium
npm run test:e2e
```

Expected toolchain before verification:

- Node `v24.14.1`
- npm `11.11.0`

No npm account, token, `.npmrc`, or secret is required.

## Rollback

To remove the product/toolchain scaffold while preserving the governance record, revert the complete implementation range:

```bash
git revert --no-commit e882ff1fe755c8ba47dd1fb2dc9f8bed6fa44700^..32224f5dfedebfc79cc6eea7923dde4555c4217c
git commit -m "revert: remove Casefile web scaffold"
```

There is no migration, provider state, remote data, or user-data transformation to undo.

## Capture plan

Use the app to create evidence, not decoration:

- keep screenshots private until the exact committed build passes;
- after verification, capture promise, age, ready, evidence, AI correction, and private-call states at desktop and 390 px;
- retain reduced-motion and 200%-equivalent evidence;
- do not publish media or materially change the approved visual direction without a separate gate.

## Preserve these constraints

- do not put private mission truth or scoring annotations in browser bundles;
- do not simulate authoritative scores in the client;
- do not add vendor SDKs or credentials without approval;
- do not collect personal data without field, purpose, retention, region, consent, and access decisions;
- do not expand to employer, school, social, payment, native, or code-sandbox scope without gates;
- do not ask for npm credentials;
- do not describe the legacy prototype or this unverified slice as complete or production-ready;
- keep every meaningful decision, verification result, limitation, and rollback path in the handoff and run log.
