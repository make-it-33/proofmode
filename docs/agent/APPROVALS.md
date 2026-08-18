# Approvals

Use this file to record approvals and rejections that affect scope, design,
vendors, data, release, or infrastructure.

| Date       | Decision                                                                                   | Status                                               | Approver        | Notes                                                                                                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026-08-18 | Agent Arena Gate 3 visual and interaction recovery pack                                    | Approved as shown                                    | Owner           | Authorizes production implementation against `docs/design/AGENT_ARENA_GATE3_V1.md`; replacement must retain the approved hierarchy, rounds, proof chain, recovery, and result/replay behavior. |
| 2026-08-18 | Agent Arena leads the teen-first visual recovery exploration                               | Selected for exploration                             | Owner           | Authorizes a detailed visual/interaction pack only; no production UI implementation until a separate Gate 3 approval.                                                     |
| 2026-08-18 | Current Casefile production visual and interaction execution                               | Revision requested                                   | Owner           | Browser-safe contracts remain useful, but the visible app requires a teen-first creative reset.                                                                           |
| 2026-08-17 | Local registry confirmed as `https://registry.npmjs.org/` with Node `v24.14.1` and npm `11.11.0` | Confirmed                                        | Owner           | Establishes the owner-local dependency toolchain for the first web slice.                                                                                                  |
| 2026-08-17 | Controlled owner-local audited dependency lock for issue #3                                | Approved and completed                               | Owner           | Lock reviewed from an uncommitted owner-generated archive and then committed to `main`; no archive contents, `node_modules`, or helper scripts were committed.              |
| 2026-08-17 | Owner may proceed with audited owner-local dependency lock when needed                     | Approved                                             | Owner           | Applies only to the issue #3 scaffold under the existing vendor/data approval boundaries.                                                                                 |
| 2026-08-17 | Application stack led by the recommended responsive web/PWA architecture                   | Approved                                             | Owner           | React/TypeScript/Vite leads Phase 1; Fastify/PostgreSQL/BullMQ worker and a bounded multi-provider AI gateway are the later server path.                                    |
| 2026-08-17 | Casefile Gate 3 journey approved as shown                                                   | Approved for implementation, later revision requested | Owner          | Original approval authorized the Casefile Phase 1 implementation; 2026-08-18 owner review reopened the visible design and interaction direction.                           |
| 2026-08-17 | Minimum Phase 1 launch age is 13+                                                           | Approved                                             | Owner           | Under-13 use is blocked until a separately approved child-directed mode exists.                                                                                            |
| 2026-08-17 | Employer assessment enters only after consumer proof                                       | Approved                                             | Owner           | Phase 1 is consumer-first; employer workflows, scoring, and data are not authorized.                                                                                        |
| 2026-08-17 | "Casefile" leads detailed Make the call creative exploration                               | Selected                                             | Owner           | Authorized detailed Casefile proposals only; not production implementation by itself.                                                                                     |
| 2026-08-17 | Core behavior "Make the call" leads Phase 1                                               | Approved                                             | Owner           | Builds on the existing binary decision and requires inspectable evidence.                                                                                                  |
| 2026-08-17 | Product-behavior options may be prepared                                                    | Approved                                             | Owner           | Exploration only; no implementation authorization.                                                                                                                        |
| 2026-08-17 | "Signal Ops" leads first core-loop creative exploration                                   | Selected, later rejected                             | Owner           | Superseded after feedback that the direction was too text-heavy and AI-vocabulary-heavy.                                                                                   |
| 2026-08-17 | Replace Signal Ops rather than incrementally polish it                                      | Revision requested                                   | Owner           | The next direction must show clearer gameplay, less copy, and more natural language.                                                                                        |
| 2026-08-17 | `main` remains the canonical branch; design requires approval before production work        | Approved                                             | Owner           | Small reversible commits remain required.                                                                                                                                 |
| 2026-08-17 | Local dependency install and fresh lock generation                                          | Pending                                              | Owner           | Must follow package-manager prerequisites and lock review.                                                                                                                 |
| 2026-08-17 | Initial private web preview and current no-third-party-tracking posture                      | Provisionally approved                               | Owner by request | Reconfirm before any public beta or analytics integration.                                                                                                                 |
| 2026-08-17 | Fly.io, Cloudflare R2, PostHog, Sentry, Redis provider, and multi-vendor AI gateway          | Pending                                              | Owner           | Decide before provisioning.                                                                                                                                               |
| 2026-08-17 | Realistic fictional scenario content                                                        | Approved for design                                  | Owner by request | Keep people and organizations fictional.                                                                                                                                  |
| 2026-08-17 | Personal data collection beyond account basics                                              | Not approved                                         | Owner           | Requires a data and retention review.                                                                                                                                     |
| 2026-08-17 | Public launch                                                                               | Not approved                                         | Owner           | Requires release-readiness approval.                                                                                                                                      |

## Proposed infrastructure decision

The baseline architecture names the following replaceable service categories:

- Container hosting for the API and worker.
- Managed PostgreSQL.
- Managed Redis-compatible queue infrastructure.
- S3-compatible object storage.
- Error monitoring.
- Product analytics.
- Transactional email.
- Multiple AI model providers.

Before provisioning, prepare a short decision record that covers:

- Cost at low traffic.
- Age-appropriate privacy and data controls.
- Data residency and deletion behavior.
- Operational complexity.
- Exit and migration path.
- Which services receive prompt, response, or user data.
