# Security threat model

## Assets

Identity/profile, private run text/uploads, provider credentials, hidden mission truth/tests, competition integrity, model/tool policies, paid entitlements, and audit logs.

## Threats and controls

- **Prompt injection/untrusted artifacts:** separate data from policy; allowlist tools; no implicit authority; validate outputs.
- **Sensitive disclosure:** no secrets in prompts/clients/logs; redact; minimize retention; scope credentials. System prompts are not security boundaries.
- **Improper output handling:** validate schemas, escape UI, parameterize storage, never execute model output in the app process.
- **Excessive agency/cost:** allowlists, consequential-action confirmation, budgets, rate/concurrency limits, timeouts, circuit breakers.
- **Competition fraud:** server-authoritative events, signed metadata, immutable versions, anomaly checks, delayed answer disclosure, comparable partitions.
- **Sandbox escape:** disposable network-restricted workers, read-only bases, ephemeral filesystems, hard resource/time limits, no production credentials.
- **Supply chain:** pinned dependencies/lockfiles, dependency review, CodeQL, secret scanning, minimal CI permissions, no write credentials for untrusted PR code.

## OWASP alignment

Track the 2025 GenAI risks: prompt injection, sensitive disclosure, supply chain, poisoning, improper output handling, excessive agency, prompt leakage, vector weaknesses, misinformation, and unbounded consumption.

## Pre-beta gates

Authorization tests; AI/upload threat reviews; limits and cost alarms; dependency/secret scans; retention/deletion; sandbox penetration testing before code missions; incident/abuse runbooks; backup/restore verification.
