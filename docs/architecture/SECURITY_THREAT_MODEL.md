# Security threat model

## Assets

Identity/profile, age/consent state, private run text/uploads, provider credentials, hidden mission truth/tests, competition integrity, model/tool policies, paid entitlements, deletion/export state, and audit logs.

## Threats and controls

- **Prompt injection/untrusted artifacts:** separate data from policy; allowlist tools; no implicit authority; validate outputs.
- **Sensitive disclosure:** no secrets in prompts/clients/logs; redact; minimize retention; scope credentials. System prompts are not security boundaries.
- **Improper output handling:** validate schemas, escape UI, parameterize storage, never execute model output in the app process.
- **Excessive agency/cost:** allowlists, consequential-action confirmation, budgets, rate/concurrency limits, timeouts, circuit breakers.
- **Competition fraud:** server-authoritative events, signed metadata, immutable versions, anomaly checks, delayed answer disclosure, comparable partitions.
- **Youth privacy and safety:** high-privacy defaults; under-13 block/escalation; age/consent authorization; no public profile, direct messages, precise location, biometrics, targeted ads, or employer access in Phase 1; child-centered transparency; data minimization and tested deletion/export.
- **Account discovery and stalking:** prevent enumeration; rate-limit lookup/recovery; avoid searchable real names/schools/locations; log abuse signals without exposing private content.
- **Employer misuse:** no employer tenant, report, data access, candidate ranking, proctoring, or hiring recommendation in Phase 1; future use requires separate validation and authorization boundaries.
- **Sandbox escape:** disposable network-restricted workers, read-only bases, ephemeral filesystems, hard resource/time limits, no production credentials.
- **Supply chain:** pinned dependencies/lockfiles, dependency review, supported static analysis, targeted secret scanning, minimal CI permissions, no write credentials for untrusted PR code.

## OWASP alignment

Track the 2025 GenAI risks: prompt injection, sensitive disclosure, supply chain, poisoning, improper output handling, excessive agency, prompt leakage, vector weaknesses, misinformation, and unbounded consumption.

## Pre-beta gates

Authorization tests; youth privacy/impact review; age/consent and discovered-under-13 handling; AI/upload threat reviews; limits and cost alarms; dependency/secret scans; retention/deletion/export; sandbox penetration testing before code missions; incident/abuse runbooks; backup/restore verification.
