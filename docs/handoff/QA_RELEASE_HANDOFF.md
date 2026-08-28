# Quality, release, and handoff protocol

## Definition of professional quality

A ProofMode slice is useful, coherent, intentional, honest, accessible, secure, private, fast, recoverable, tested, documented, maintainable, and reversible. Visual polish alone is not completion.

## Severity

- **P0:** secret/private/hidden-truth exposure; critical authorization, execution, destructive-data, youth-safety, or unusable-route failure. Blocks all integration.
- **P1:** red required CI; WCAG A/AA defect; keyboard trap; mobile overflow/obscured action; fake claim; missing critical recovery; unapproved data expansion; budget breach; missing spec/handoff/rollback; active competition mechanics. Blocks the slice.
- **P2:** meaningful inconsistency or maintainability/observability/content gap. Fix before release or track with owner and exit date.

Never skip, suppress, weaken, rename, or reduce an assertion to convert a failure into green.

## Required acceptance matrix

### Product and learning

- One user job and one dominant primary action.
- Transferable observable behavior, not prompt trivia.
- Source, constraints, evidence, decision, uncertainty, and outcome are inspectable.
- Real/local/fixture/disabled/future states are labeled.
- Pre-submit UI does not reveal the answer.
- Recovery from AI error is first class.
- No competition, rank, public comparison, guilt, or fake urgency.

### State and recovery

Cover applicable ready, loading, empty, offline, error, timeout, permission denied, invalid, expired, resume, incomplete, verification-needed, decision-needed, complete, and recovery states. Unknown state input fails closed. Every failure says what failed, what was saved/sent, retry safety, and exit.

### Responsive and accessibility

- Intentional 1920px and 1440px desktop composition.
- 390px no page overflow and every visible control at least 44×44px.
- 200%-equivalent zoom/text resilience.
- Semantic landmarks/headings; native controls; accurate names.
- Complete keyboard operation and visible focus.
- Zero WCAG A/AA axe violations plus manual contrast/dynamic-focus review.
- Non-color state cues, forced-colors resilience, reduced-motion parity.
- Captions/transcript/static alternative for meaningful media/audio.

### Security, privacy, and claims

- No secret, private prompt, hidden answer, provider key, or scoring manifest in the client.
- Untrusted content is escaped/validated and never grants authority.
- No direct browser AI provider; no arbitrary code execution without an approved sandbox.
- Personal data has purpose, consent/region, retention, export/deletion, recovery, and authorization before collection.
- No fabricated account, progress, save, request, score, result, AI call, payment, installer, user, metric, testimonial, or platform availability.
- Unavailable scanning is reported honestly.

### Engineering and performance

- Strict TypeScript and pure deterministic domain logic outside UI/providers.
- Typed boundaries, explicit modules, minimal dependencies, safe errors.
- Unit/domain tests for parsers, allowlists, progression, limits, privacy/security flags.
- Browser tests for golden path, boundaries, states/retry, keyboard/focus, desktop/mobile, reduced motion, axe.
- Security/abuse and contract tests scale with risk.
- Current caps: 180 KiB JS gzip, 25 KiB initial CSS gzip, 8 KiB route CSS gzip, 30 KiB total CSS gzip, 350 KiB initial media.

## Required commands

```bash
npm ci --ignore-scripts
npm run verify
npx playwright install chromium
npm run test:e2e
```

Use repository-pinned Node/npm. Do not report a command as passed unless its final status is known. Record exact CI run/check IDs.

## Visual evidence

Inspect desktop and mobile directly when browser access exists. Review hierarchy, content fit, focus, dynamic states, media fallback, reduced motion, and no-overflow—not screenshots alone. Screenshots, videos, traces, and review ZIPs are ephemeral unless explicitly approved as production documentation assets.

## Review sequence

1. Reconcile the request with canonical specs and approval gates.
2. Define outcome, states, data boundary, non-goals, abuse cases, analytics policy, rollout, rollback, and evidence.
3. Implement the smallest complete slice.
4. Run targeted checks during work.
5. Run full verify and Playwright/axe.
6. Review final diff for claims, secrets, hidden truth, personal data, permissions, youth safety, costs, accessibility, performance, and scope.
7. Update product/page spec, handoff, run log, approval/ADR, issue/PR evidence.
8. Merge only green.
9. Verify merged `main` and Pages when deployment applies.

## Pull request contract

A PR body must include:

- user outcome and why now;
- in scope and explicit non-goals;
- implementation and architecture boundary;
- states and recovery;
- privacy/security/youth-safety impact;
- accessibility/responsive evidence;
- performance evidence;
- exact commands/check IDs;
- rollout and rollback;
- limitations and next dependency.

Do not request or imply approval when the owner has already delegated routine green merging. Do stop at new data/vendor/cost/legal/youth/irreversible gates.

## Rollout and rollback

Client-only local slices should have no migration or remote cleanup. Roll back route, domain, styles, tests, specs, and integration together. Connected slices require feature disablement, data/schema rollback strategy, compatibility window, backup/restore proof, provider/credential actions, and incident communication.

Never roll back by removing accessibility, security, validation, or observability controls while leaving the feature.

## Handoff update

Every meaningful run updates `docs/agent/HANDOFF.md` and appends the same run ID to `docs/agent/RUN_LOG.md`. The handoff records current state, active work, progress, limitations, verification, approvals, next plan, rollback, and exact next-agent checklist. It distinguishes durable merge baselines from the moving branch head.

## Current next-slice quality target

The guided checkpoint must add no storage, request, provider, upload, execution, account, public score, or competition. It must make all five Proof Chain stages operable, preserve uncertainty, prevent answer cues, and provide deterministic replay-ready local output with full state/responsive/accessibility/performance coverage.
