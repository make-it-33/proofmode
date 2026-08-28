# ProofMode

ProofMode helps people learn to direct, verify, recover, and ship work with AI through short lessons, realistic checkpoints, evidence, and replay.

The primary audience is learners aged **13+**, especially teenagers. V1 focuses on **Agentic Coding** from beginner through advanced. Future fields may include Design, Business, Research, and Game Development after the core learning system is trustworthy.

ProofMode is not prompt trivia, a chatbot wrapper, or a leaderboard with lessons attached. The learning experience must be useful without competition. Arena, Social, ranks, payments, real AI providers, accounts, and native installers are future gated systems—not fake current features.

## Current surfaces

- Public website: `/`, `/about`, `/guide`, `/premium`, `/support`, `/download`.
- Private trial boundary: `/play`, `/entry`.
- Evidence/decision checkpoint foundation: `/mission/northstar-sales-drop`.
- Broad desktop/focused mobile Today: `/app`.
- Seven-step private onboarding: `/app/onboarding`.
- Agentic Coding Learn hub and five-band path: `/app/learn`, `/app/learn/agentic-coding`.
- First interactive lesson: `/app/learn/agentic-coding/outcome-before-delegating`.
- Deterministic fixtures, state policies, unit tests, Playwright/axe, strict TypeScript, client-boundary checks, and route-aware JS/CSS/media budgets.

The first lesson converts a vague bundled request into an objective, in/out scope boundary, constraints, evidence, and done criteria. It includes a progressive hint, deterministic structure-presence check, learner-controlled human self-check, explicit no-save exit, and an honest disabled transition to the next checkpoint. It makes no semantic grading or AI-quality claim.

No current app surface implies an account, persistence, real model provider, analytics, public profile, rank, social graph, payment, installer, or updater.

## Next slice

Build the guided Proof Chain checkpoint for the completed lesson, then private result/replay and truthful local progress. Read:

1. `docs/product/APP_MASTER_SPEC.md`
2. `docs/product/PAGE_AND_SECTION_SPECS.md`
3. `docs/roadmap/PRODUCT_IMPLEMENTATION_PLAN.md`

Core method: **Source → AI move → Verification → Human decision → Outcome**.

## Requirements and setup

- Node.js `24.14.1`
- npm `11.11.0`

```bash
npm ci --ignore-scripts
npm run verify
npx playwright install chromium
npm run test:e2e
npm run dev:web
```

`npm run verify` runs repository/governance, hygiene, mission, unit/domain/web, TypeScript, production build, client-boundary, and JS/CSS/media checks. `npm run test:e2e` runs full Playwright and axe coverage across public, trial, mission, Today, onboarding, Learn, the focused lesson, responsive, state/recovery, and reduced-motion behavior.

The focused lesson is a lazy route boundary. Its JavaScript and CSS do not inflate the initial public-site CSS payload. Current enforced caps are 180 KiB aggregate JavaScript gzip, 25 KiB initial CSS gzip, 8 KiB for any route CSS chunk, 30 KiB total CSS gzip, and 350 KiB per initial media asset.

## Operating system

Read `AGENTS.md`, then `docs/agent/HANDOFF.md`, `APPROVALS.md`, `APP_MASTER_SPEC.md`, `PAGE_AND_SECTION_SPECS.md`, `PRODUCT_IMPLEMENTATION_PLAN.md`, and `QUALITY_BAR.md`. Root `agent.md` is a compatibility pointer only.

`main` is canonical. Automated tests stay in `main`. Local harnesses, screenshots, traces, review ZIPs, and exploratory artifacts stay out. Never weaken a test to obtain green CI.

## Release boundaries

GitHub Pages hosts the public website and openly reachable app-preview routes. Reachability is not production readiness: the repeated-use app remains a deterministic local preview with no account, persistence, provider, analytics, or authoritative result service. Native installers, real provider AI, accounts, authoritative rank/social, payments, employer/school products, and code execution remain separately gated. The public CTA remains `/play`.
