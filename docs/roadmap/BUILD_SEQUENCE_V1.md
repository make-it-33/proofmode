# Professional build sequence v1

- Status: **Dependency-ordered execution plan**
- Date: 2026-08-17
- Canonical branch: `main`
- Parent milestone: issue #2

## Goal

Build one trustworthy end-to-end ProofMode mission before expanding into coding sandboxes, social systems, employer assessment, paid packs, or native apps.

## Gates before production code

1. Owner selects the minimum launch age and employer-product timing.
2. Owner approves the complete Casefile Gate 3 journey and exact vertical-slice scope.
3. Owner approves a concrete stack ADR after portability, cost, privacy, security, local DX, and deployment options are compared.

Research, tests, governance, threat modeling, mission QA, and reversible spikes may continue before these gates. Unapproved product/UI/stack decisions may not.

## Task protocol

Every implementation task follows the same loop:

1. Define user outcome, acceptance criteria, non-goals, abuse cases, rollback, and evidence.
2. Read contracts, ADRs, relevant code, tests, security boundaries, and approved design.
3. Implement the smallest coherent vertical slice on `main`.
4. Add unit, contract, integration, E2E, accessibility, security, and performance checks appropriate to the change.
5. Inspect desktop and 390 px UI where applicable.
6. Run `npm run verify` and task-specific checks.
7. Review the diff for secrets, hidden-truth leakage, permissions, cost, and unsupported claims.
8. Update handoff, run log, issue status, and rollback notes.
9. Ask the owner for local/device testing only when it adds evidence the agent cannot obtain.

## Dependency order

### Task 0 — decisions and complete specification

- Resolve audience age and employer sequence.
- Complete and approve Casefile Gate 3.
- Approve the application stack ADR.
- Reconcile issue #3 language with the approved Casefile direction.

Exit: exact UI/behavior scope and concrete stack are approved.

### Task 1 — production shell and deterministic test surface — issue #3

- Establish the application workspace, strict type/lint/test/build checks, environment validation, and local commands.
- Implement the approved responsive shell against deterministic mock contracts.
- Include loading, empty, offline, timeout, invalid mission, expired run, resume, completion, and recovery states.
- Add accessibility and visual-regression foundations immediately.

Exit: approved journey runs locally with deterministic fixtures and no real provider or hidden truth in the browser.

### Task 2 — mission registry and trusted run events — issue #5

- Publish immutable mission versions and artifact hashes.
- Create server-authoritative runs, budgets, and append-only events.
- Enforce authorization, idempotency, expiry, and hidden-truth boundaries.

Exit: a run can be recreated and audited from trusted inputs.

### Task 3 — bounded AI gateway — issue #4

- Add a deterministic test provider first.
- Add provider adapters only behind server policy, schemas, budgets, timeouts, cancellation, rate limits, redaction, and audit metadata.
- Keep competitive fairness mode reproducible.

Exit: AI helps the player without becoming scoring authority or leaking secrets/truth.

### Task 4 — scoring, explanation, and replay — issue #7

- Connect immutable mission data, trusted events, structured submission, and versioned deterministic scoring.
- Explain six subscores, integrity/comparability state, pivotal actions, and one practice behavior.
- Do not ship percentile or AI-baseline claims without real comparable data.

Exit: fixture replays reproduce the same score and explanation.

### Task 5 — guest/auth and privacy model — issue #8

- Start with the minimum identity needed for a run.
- Define age-aware privacy, consent, retention, export, deletion, session, recovery, authorization, and account-abuse behavior before collection.
- Keep learner results private by default.

Exit: personal data is minimized and lifecycle controls are tested.

### Task 6 — Northstar mission validation — issue #6

- Run author, adversarial, scoring, UX/accessibility, ambiguity, and exploit reviews.
- Blind-test with representative players.
- Calibrate time and difficulty without answer-revealing cues.

Exit: at least 20 blind players and 80% fairness agreement for Phase 1 exit.

### Task 7 — release gates — issue #9

These checks begin in Task 1 and mature throughout the slice:

- E2E golden path and failure/recovery paths;
- keyboard, screen reader, contrast, zoom, reduced motion, and 390 px;
- authorization, prompt injection, output handling, upload, rate/cost, and sandbox abuse cases;
- tracing, metrics, redacted logs, alarms, backup/restore, rollout, and rollback;
- Core Web Vitals and declared bundle/media budgets.

Exit: issue #2 evidence is complete and no known critical exploit or answer cue remains.

## Later—not Phase 1

- Code/build missions only after isolated disposable sandbox infrastructure is threat-modeled and tested.
- Social competition only after same-version fairness is proven.
- Employer assessment only after job-specific validity, adverse-impact, accessibility, candidate-rights, and legal review.
- Native apps only after web retention and mobile-specific value are demonstrated.

## Model-use policy

One model owns each task and the repository handoff remains the source of truth. A second strong model may independently review architecture, security, tests, or design, but model switching must not replace evidence, tests, or recorded decisions. Never merge multiple model outputs without a human-readable review of conflicts.
