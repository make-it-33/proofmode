# ProofMode handoff

Last updated: `2026-08-17T11:52:00+05:30`  
Run ID: `2026-08-17-build-intake-audience-sequence`  
Repository head reviewed: `b8ea81483644ab0a82309d4b41b8b836ca6a473b` (before this planning commit)  
Stage: **Professional build intake / audience sequence approval**

## Current state

The owner has reaffirmed a professional, task-by-task build on canonical `main`, with UX, backend, security, tests, motion, and quality developed together rather than added at the end.

The owner also expanded the long-term opportunity toward teenagers learning real AI/agentic skills and employers evaluating AI-capable candidates. This creates a consequential sequence decision because the current approved beta is consumer-first and explicitly excludes employer features and proctoring.

No production code has started. Make the call and Casefile remain approved only through Gate 2; the complete Gate 3 journey and concrete stack are still unapproved.

## Active work

- Await the owner’s minimum-age and employer-timing choices.
- Preserve consumer-first Phase 1 until the approval ledger changes.
- Use `docs/roadmap/BUILD_SEQUENCE_V1.md` as the dependency-ordered execution plan.
- Resume the Casefile Gate 3 proposal after the audience decision.

## Progress

| Area | State | Evidence / note |
| --- | --- | --- |
| Agent operating system | Complete | Constitution, handoff, approvals, workflow, quality bar, and CI enforcement on `main` |
| Gate 1 product behavior | Approved | A — Make the call; ADR 0004 |
| Gate 2 creative direction | Approved | Casefile; ADR 0005 |
| Audience sequence | Pending owner decision | `docs/product/AUDIENCE_SEQUENCE_OPTIONS_V1.md` |
| Professional build order | Prepared | `docs/roadmap/BUILD_SEQUENCE_V1.md` |
| Gate 3 journey / states | Authorized to explore | Paused until the audience choice is recorded |
| Production runtime | Not started | Issues #2–#9 remain open; no open pull requests |

## Opportunity and capture plan

The strongest route is an older-teen and young-adult learner game first, with employer assessment treated as a later separate product surface. ProofMode can become the place where ambitious learners practice evidence-backed judgment and, later, agentic coding in safe sandboxes.

If repeated performance eventually predicts job-relevant work, employers may become a valuable second market. That claim must be earned through job-specific validation, fairness, accommodations, and candidate rights—not inferred from an attractive score card.

## Limitations and weak spots

1. The minimum launch age is not selected.
2. Employer-product timing conflicts with the current beta non-goals until explicitly resolved.
3. Youth targeting adds privacy-by-default, data-minimization, age-aware UX, safeguarding, and jurisdiction work.
4. Employer assessment adds job-validity, adverse-impact, accessibility, explanation, audit, candidate-rights, and regional legal obligations.
5. Casefile Gate 3 and the concrete stack are still unapproved for implementation.
6. Northstar has not passed representative blind testing.
7. Code/build missions require isolated disposable sandbox infrastructure and are not safe for the first slice.
8. GitHub Advanced Security/CodeQL remains unavailable; a supported substitute still needs selection.
9. Main-branch Actions completion is not directly observable through the current GitHub connection.

## Next plan

1. Record the owner’s minimum-age and employer-timing decisions.
2. Align the product vision, privacy requirements, roadmap, and issue #2 without widening Phase 1 beyond the decision.
3. Complete the visual-first Casefile Gate 3 journey for approval.
4. Compare concrete stack options and request a separate owner choice.
5. After both approvals, begin issue #3 with deterministic mock contracts and tests.
6. Follow `BUILD_SEQUENCE_V1.md` through trusted events, bounded AI, deterministic scoring/replay, privacy, mission QA, and release gates.

## Approval state

- **Approved:** main-first professional workflow, Make the call, and Casefile detailed exploration.
- **Pending:** minimum launch age and employer-product timing.
- **Not approved:** Gate 3 implementation scope, concrete stack/vendor, production UI/code, employer assessment, proctoring, collection of minor data, final media, public launch, social/rank systems, or monetization.
- **Revision requested:** Signal Ops v1.

## Verification

- Read current constitution, handoff, approvals, runbook, workflow, quality bar, product vision, roadmap, market research, architecture, threat model, issues, commits, and open pull requests.
- Current `main` head before this run: `b8ea81483644ab0a82309d4b41b8b836ca6a473b`.
- Open issues: #2–#9; open pull requests: none.
- Reviewed primary guidance from the FTC, UK ICO, U.S. EEOC, and European Commission.
- No application code, scoring rules, stack, production design, media, or personal-data behavior changed.
- `npm run verify` was not run against current `main` because the connected GitHub surface does not provide a current local checkout or direct main-branch workflow-run lookup; this run changes documentation only and must not be described as CI-passing.

## Owner help / blockers

Two small decisions block production sequencing:

1. minimum launch age: 13+, 16+, or 18+;
2. employer assessment: after consumer validation or in parallel with Phase 1.

Recommendation: **16+ learner-first, employer pilot later**.

## Next agent checklist

- [ ] Record both audience decisions before changing product vision or issues.
- [ ] Do not build employer reporting or proctoring into Phase 1 unless explicitly approved.
- [ ] Do not collect age or minor data before a privacy design and owner approval.
- [ ] Finish Gate 3 and stack approvals before production implementation.
- [ ] Keep every task end-to-end with tests, security, accessibility, observability, rollback, and handoff evidence.
- [ ] Update this handoff and append the next run ID.
