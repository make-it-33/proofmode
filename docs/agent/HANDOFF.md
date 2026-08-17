# ProofMode handoff

Last updated: `2026-08-17T12:42:18+05:30`  
Run ID: `2026-08-17-player-contracts-v1`  
Repository head reviewed: `1b0cefee8efcd3b502c5f6f81c11a0f1bbc516af` (before this implementation commit)  
Stage: **Issue #3 implementation / browser contract complete / web scaffold next**

## Current state

Issue #3 implementation has started on canonical `main` with the framework-independent browser boundary. `@proofmode/player-contracts` defines a fail-closed public mission validator, a deterministic Northstar public fixture, and the complete approved player-state inventory. It excludes hidden truth, scoring annotations, seeded-mistake metadata, and private mission status from browser payloads.

The approved React/Vite/React Router runtime has not been scaffolded yet. The current sandbox can execute the dependency-free contract and scoring tests, but DNS access to the npm registry is unavailable, so no unverified dependency graph or hand-written lockfile was committed.

## Progress

| Area | State | Evidence / note |
| --- | --- | --- |
| Agent operating system | Complete | Constitution, handoff, approvals, workflow, quality bar, and CI enforcement on `main` |
| Product/design/audience gates | Approved | Make the call; Casefile; ages 13+ learner-first; employers later |
| Application stack | Approved | A — Explicit React platform; ADR 0007 |
| Public browser contract | Complete v1 | Fail-closed validator and deterministic public Northstar fixture |
| Hidden-truth boundary | Contract-tested | Private claims, answer/scoring annotations, and seeded-mistake metadata are rejected |
| Required state inventory | Declared and tested | Success, interruption, failure, privacy, and recovery states |
| Production web runtime | Not started | Dependency lock and runtime scaffold are next |
| Personal data / launch regions | Not selected | Separate approval required before collection or public beta |

## Opportunity and capture plan

ProofMode can own the gap between passive AI learning and vague prompt contests by making judgment visible: inspect evidence, challenge AI, make a defensible call, and replay the decision path. The immediate opportunity is not feature breadth. It is one polished, trustworthy six-minute mission that teenagers can understand quickly, that feels credible rather than AI-generated, and that proves deterministic scoring and privacy boundaries before social or employer expansion.

## Active work

1. Keep the browser-facing contract framework-independent and fail closed.
2. Add the React runtime only with pinned dependencies and a generated lockfile.
3. Build the approved promise, 13+ boundary, intentional clock start, and mission workspace against the public fixture.
4. Add browser, accessibility, responsive, bundle, and security checks before expanding to score and replay.

## Next plan

1. Restore package-registry access or generate the dependency lockfile in an owner/local environment.
2. Scaffold `apps/web` with React, Vite, and React Router while keeping private mission/scoring modules outside the web dependency graph.
3. Implement the first-visit promise, 13+ path, ready state, and active evidence workspace at desktop and 390 px.
4. Add deterministic AI/state adapters, then structured submission, score explanation, replay, and all approved recovery routes in small verified increments.
5. Introduce the Fastify boundary, worker, Postgres/Kysely adapters, and real providers only in their dependency-ordered issues and approval gates.

## Limitations and weak spots

1. The current sandbox cannot resolve `registry.npmjs.org`; a professional React scaffold cannot yet produce or verify its required lockfile here.
2. The current GitHub connection does not provide an authenticated local checkout, and direct Git network access is unavailable.
3. Main-branch GitHub Actions completion is not directly observable through the current connection.
4. GitHub Advanced Security/CodeQL and targeted secret scanning are unavailable.
5. No production route, visual implementation, browser E2E, or accessibility review exists yet; the contract package is only the first issue #3 slice.
6. Exact launch regions, age/consent mechanics, personal-data fields, retention, export/deletion, support access, and providers remain unselected.
7. Northstar has not passed representative youth/learner blind testing or fairness/validity calibration.
8. Code/build missions require disposable sandbox isolation and remain outside the first slice.

## Approval state

- **Approved:** canonical `main`, professional task protocol, Make the call, Casefile Gate 3 journey, minimum age 13+, learner-first Phase 1, employer assessment later, and stack A.
- **Pending:** exact personal-data/launch-region/age-consent design, infrastructure/service vendors, public beta, and any production media beyond the approved CSS/system motion language.
- **Not approved:** real model/provider use, collection of minor data, public launch, employer/school access, proctoring, social/rank systems, monetization, native apps, or code sandboxes.
- **Revision requested:** Signal Ops v1.

## Verification

- Focused contract suite passed twice after authoring and formatting: 6 tests, 0 failures.
- Coverage includes deterministic projection, canonical fixture validation, hidden-key rejection, non-JSON rejection, exact artifact matching, privacy defaults, and required state inventory.
- The existing scoring suite and new contract suite passed together before commit: 10 tests, 0 failures.
- Full `npm run verify` was not claimed from an authenticated repository checkout; GitHub Actions status is not observable through this connection.
- No UI exists in this slice, so no visual, keyboard, 390 px, assistive-technology, or performance claim is made.

## Owner help / blockers

No owner decision is needed for the browser-contract commit. Before the React runtime commit, package-registry access must be available to the agent or the owner must generate and return the lockfile from an exact dependency manifest. Do not substitute guessed transitive versions or an unreviewed lockfile.

## Next agent checklist

- [x] Keep public fixture code free of hidden truth and server/provider adapters.
- [x] Add deterministic mission and state contracts before UI work.
- [x] Add focused contract tests and preserve existing scoring tests.
- [ ] Generate and review a pinned dependency lockfile.
- [ ] Scaffold the approved React/Vite/React Router web runtime.
- [ ] Complete desktop and 390 px visual QA for every implemented route/state.
- [ ] Keep results private and inaccessible to employers/schools.
- [ ] Do not collect personal data or connect real providers before the dedicated gate.
- [ ] Update this handoff and append the next run ID in every meaningful commit.
