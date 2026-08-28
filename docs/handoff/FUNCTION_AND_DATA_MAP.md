# Function, state, and data map

This map helps an advanced agent find existing contracts and design the next slice without inventing authority. Source and tests remain the final implementation truth.

## Current application composition

`apps/web/src/app/App.tsx` owns route composition and `RunProvider` wrapping.

Current route components:

- `WebsiteRoute.tsx` — public home;
- `PublicPages.tsx` — About, Guide, Premium, Support, Download;
- `PromiseRoute.tsx` — private promise;
- `AgeRoute.tsx` — authoritative 13+ boundary;
- `MissionRoute.tsx` — deterministic mission foundation;
- `TodayRoute.tsx` — broad desktop/focused mobile app home;
- `OnboardingRoute.tsx` — local seven-step setup;
- `LearnRoute.tsx` — Learn home and Agentic Coding path;
- `OutcomeLessonRoute.tsx` — first interactive lesson;
- `FocusedLessonRouteEntry.tsx` — lazy route and route-local stylesheet.

The outcome lesson is imported with React `lazy`/`Suspense`; `lesson.css` is route local. Do not move it back into the initial CSS bundle.

## Current deterministic domain modules

### Today

`apps/web/src/domain/todayState.ts`

Purpose: parse the allowlisted Today view state and fail closed. No request, persistence, user identity, or authoritative progress.

### Onboarding

`apps/web/src/domain/onboardingState.ts`

Purpose: parse local state/step choices and enforce the 13+ and field boundaries. The only available field is Agentic Coding. Options remain component-memory data.

### Learn

`apps/web/src/domain/learnState.ts`

Purpose: represent five capability bands, lesson availability/locks, and deterministic route fixtures without claiming persisted completion.

### Focused lesson

`apps/web/src/domain/lessonState.ts`

Current exported contract includes:

- `parseLessonViewState` — allowlists review states; unknown → ready;
- `limitLessonField` — caps every field at 500 characters;
- `evaluateLessonDraft` — checks structural presence/minimum inspectability only;
- `areSelfChecksComplete` — requires all five learner confirmations;
- `canPrepareCheckpoint` — combines deterministic structure and human confirmation.

Fields: `objective`, `inScope`, `outOfScope`, `constraints`, `evidence`, `doneCriteria`.

Self-checks: `outcomeObservable`, `scopeBounded`, `constraintsGrounded`, `evidenceExecutable`, `finishLineClear`.

Security flags remain false: draft storage, personal-data exposure, network request, and AI judgment.

### Run/debrief foundation

`RunProvider` and existing player-contract/scoring packages support deterministic preview flows. They are not permission to add client-authoritative results, hidden truth, public score, or persistence. Preserve existing route contracts while extracting reusable checkpoint logic deliberately.

## Proposed guided-checkpoint domain contract

The following names describe the intended boundary; they are **proposed, not implemented API**:

- `parseCheckpointViewState(input)` — allowlisted fixture/recovery state;
- `getCheckpointScenario(version)` — bundled immutable scenario lookup;
- `createCheckpointDraft(scenario)` — empty local working state;
- `recordVerification(draft, checkId, observation)` — learner-owned evidence observation;
- `evaluateCheckpointCompleteness(draft)` — presence/sequence validation, not semantic scoring;
- `canSubmitCheckpoint(draft)` — requires Source, AI move review, verification, decision, rationale, uncertainty, and outcome;
- `buildProofChainReplay(draft)` — deterministic private reconstruction;
- `resetCheckpoint()` — explicit local reset.

Do not implement these as a large stateful service. Keep pure typed domain logic outside React, then let the route render/dispatch states.

## Proposed checkpoint data shapes

```ts
type ProofChainStage =
  | "source"
  | "ai-move"
  | "verification"
  | "human-decision"
  | "outcome";

type HumanDecision = "accept" | "reject" | "modify" | "investigate";

type CheckpointDraft = {
  scenarioVersion: string;
  stage: ProofChainStage;
  selectedSourceIds: string[];
  verificationObservations: Record<string, string>;
  decision?: HumanDecision;
  rationale: string;
  uncertainty: string;
  outcome: string;
};
```

V1 draft lives in component/domain memory. No localStorage/sessionStorage/IndexedDB/cookie/request is introduced in the checkpoint slice.

## Future result/replay contract

Result input is a versioned completed checkpoint snapshot, not arbitrary route text. It produces:

- integrity/availability status;
- ordered Proof Chain events;
- pivotal learner decision;
- one strong behavior;
- one risk/missed behavior;
- uncertainty;
- one recommended next practice.

Until an authoritative deterministic engine exists, do not show a numeric score. Feedback is private and behavior-specific.

## Future local-progress adapter

Only after checkpoint and result are coherent:

```ts
type LocalProgressRecord = {
  schemaVersion: number;
  contentVersion: string;
  completedBehaviorIds: string[];
  lastRoute?: string;
  updatedAt: string;
};
```

Before use: define version migration, corrupted-data fallback, reset/export description, storage quota behavior, tests, and copy that says “this device” rather than “your account.” Never migrate local preview data into a cloud account silently.

## Future backend boundaries

A modular monolith is preferred first:

- Web/PWA — untrusted presentation/client;
- BFF/application — authenticated commands/queries and authorization;
- content registry — immutable lesson/checkpoint versions;
- run service — server-owned lifecycle and append-only trusted events;
- private result engine — deterministic versioned feedback/replay;
- AI gateway — typed providers, redaction, policy, limits, evaluation;
- sandbox worker — isolated disposable execution;
- account/privacy — session, consent, export/deletion/recovery;
- entitlement/payment — server-authoritative access and webhook ledger;
- content studio — authoring, blind QA, publish, rollback.

There is no competition, leaderboard, matchmaking, rating, or public-comparison module.

## Trust boundaries

- Browser values are untrusted and never authoritative for entitlement, permission, completion, score, or audit.
- Hidden truth, private prompts, provider keys, signing keys, webhook secrets, and answer manifests never ship to the browser.
- Model output is untrusted data; validate typed schemas and escape rendering.
- Uploaded/external content is untrusted; uploads remain disabled until policy and scanning exist.
- Arbitrary code is prohibited until isolated sandbox controls are proven.
- Logs omit raw prompts, uploads, tokens, secrets, and unnecessary identifiers.

## Performance contract

Current enforced caps:

- aggregate JavaScript gzip: 180 KiB;
- initial CSS gzip: 25 KiB;
- any route CSS chunk: 8 KiB;
- total CSS gzip: 30 KiB;
- any initial media asset: 350 KiB.

New routes should use an accessible lazy boundary when justified, but splitting may not hide aggregate growth or delay essential first interaction.
