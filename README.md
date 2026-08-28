# ProofMode

ProofMode helps people learn to direct, verify, recover from, and ship work with AI through focused lessons, realistic checkpoints, evidence, private replay, and a clear next practice action.

Primary audience: learners aged **13+**, especially teenagers. V1 teaches **Agentic Coding** from beginner through advanced.

Core method:

**Source → AI move → Verification → Human decision → Outcome**

**No competition:** ProofMode is not prompt trivia, a chatbot wrapper, passive video coursework, an intelligence/employability score, or a competition product. Arena, PvP, ranks, ladders, leaderboards, matchmaking, seasons, public comparison, and pay-to-win are removed from the active product and V1/V2 roadmap.

## Current product

- Public website: `/`, `/about`, `/guide`, `/premium`, `/support`, `/download`.
- Private entry: `/play`, `/entry`.
- Deterministic mission foundation: `/mission/northstar-sales-drop`.
- Broad desktop/focused mobile Today: `/app`.
- Private local onboarding: `/app/onboarding`.
- Learn hub and Agentic Coding path: `/app/learn`, `/app/learn/agentic-coding`.
- First interactive lesson: `/app/learn/agentic-coding/outcome-before-delegating`.

The first lesson converts a vague bundled request into objective, in/out scope, constraints, evidence, and done criteria. It uses deterministic structural checks and learner-controlled human self-review—not fake AI grading. Drafts are component-memory only.

No current app surface implies an account, cloud save, real model provider, analytics, public profile, score/rank, payment, installer, or updater.

## Next slice

Build `/app/checkpoint/outcome-before-delegating-v1` as the guided Proof Chain checkpoint. Then build private result/replay, truthful local progress, Profile, and Settings. Connected accounts, AI, sandbox, payments, content operations, native distribution, and future fields remain separate V2 approval gates.

## Live preview

- Public: `https://make-it-33.github.io/proofmode/`
- App: `https://make-it-33.github.io/proofmode/app`
- First lesson: `https://make-it-33.github.io/proofmode/app/learn/agentic-coding/outcome-before-delegating`

GitHub Pages exposes preview routes; reachability is not production-connected readiness.

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

`npm run verify` covers repository/governance, hygiene, mission, unit/domain/web, strict TypeScript, production build, client-boundary, handoff, and JS/CSS/media checks. Full Playwright/axe covers public, trial, mission, Today, onboarding, Learn, focused lesson, responsive, state/recovery, keyboard, reduced-motion, and accessibility behavior.

Current budgets: 180 KiB aggregate JavaScript gzip, 25 KiB initial CSS gzip, 8 KiB per route CSS gzip, 30 KiB total CSS gzip, and 350 KiB per initial media asset.

## Repository operating system

Read in order:

1. `AGENTS.md`
2. `docs/agent/HANDOFF.md`
3. `docs/agent/APPROVALS.md`
4. `docs/product/APP_MASTER_SPEC.md`
5. `docs/product/PAGE_AND_SECTION_SPECS.md`
6. `docs/roadmap/PRODUCT_IMPLEMENTATION_PLAN.md`
7. `docs/agent/QUALITY_BAR.md`
8. `docs/handoff/README.md`

The `docs/handoff/` continuity pack records current state, product direction, page map, UX/UI rules, function/data boundaries, V1/V2 roadmap, payments, decision history, QA/release protocol, media inventory, visual maps, and glossary.

`main` is canonical. Automated tests remain in `main`. Temporary manual tester harnesses, screenshots, videos, traces, and review ZIPs stay outside unless approved as production assets. Never weaken a test or trust boundary to obtain green CI.
