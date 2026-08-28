# ProofMode security and privacy threat model

- Status: **Canonical threat model**
- Updated: 2026-08-28

## Current attack surface

The current Pages application is a static untrusted browser client with bundled deterministic content. It has no account, backend database, provider credential, analytics, upload, arbitrary execution, payment, or native updater. Current priority is preventing client-boundary drift, unsafe rendering, hidden-answer leakage, misleading authority/claims, route-state abuse, dependency/supply-chain risk, and youth-safety regressions.

## Protected assets

- 13+ boundary and future consent state;
- private learner settings/progress/run decisions;
- account/session/recovery data when introduced;
- hidden answer/evaluation content and content versions;
- provider, signing, webhook, and infrastructure credentials;
- AI tool/prompt/context policies;
- payment/entitlement/refund state;
- deletion/export/backup records;
- audit/security logs;
- sandbox isolation and host/service integrity.

There is no competition integrity asset because competition is not part of the product.

## Trust boundaries

- Browser/client: untrusted.
- External/model/uploaded content: untrusted data, never policy.
- BFF/application: validates/authenticates/authorizes typed commands.
- AI gateway: separate purpose, policy, redaction, limits, and tools.
- content/result services: immutable versions and deterministic authority.
- sandbox: isolated disposable worker, not app process.
- payment provider/webhooks: verify signature/idempotency before entitlement.
- operations/content studio: least privilege, review, audit, rollback.

## Threats and controls

### Prompt injection and tool misuse

Separate data from instructions; allowlist purpose/tools; never grant authority because content asks; cap context; validate schemas; require confirmation for consequential action; no hidden secrets in prompts; test adversarial fixtures; use time/token/rate/cost limits and kill switch.

### Sensitive disclosure

No secrets/private prompts/hidden truth in clients or ordinary model context. Redact; minimize; scope credentials; avoid raw content in logs; encrypt in transit/at rest where connected; rotate/revoke; prevent debug/error leakage. A system prompt is not a security boundary.

### Improper output handling

Treat model/external text as untrusted. Escape UI, validate typed schemas, parameterize storage, allowlist URLs/actions, prevent template/code injection, and never execute model output in the application process.

### Excessive agency and cost

Purpose/tool allowlists, least privilege, consequential-action confirmation, budgets, concurrency/rate limits, timeouts, cancellation, retry caps, circuit breakers, cost alerts, provider fallback, and global kill switch.

### Hidden-answer leakage

Keep answer/evaluation manifests server-side; separate learner artifacts from truth; avoid styling/copy/network payloads that cue answers; delay feedback until decision; version access; audit content publishing; test client bundles and API responses.

### Youth privacy and safety

High-privacy defaults; under-13 safe exit; no birthday/identity needed for current boundary; approved region/consent before collection; no public profile, direct message, precise location, biometrics, targeted ads, or employer access in V1/V2; child-centered explanations; data minimization; tested export/deletion; discovered-under-13 response; support/incident process.

### Account discovery and takeover

Prevent enumeration; strong session/token/cookie controls; CSRF where relevant; rate-limited login/recovery; secure device/session revocation; least-privilege authorization; no searchable real names/schools/locations; anomaly alerts with privacy-minimized logs.

### Cross-user authorization

Deny by default; scope every query/command to authenticated ownership; object-level authorization tests; separate payer from learner content access; no client-supplied owner/role authority; audit administrative access.

### Local-progress corruption/migration

Version schemas; validate/limit storage; corrupt-data fallback; explicit reset/export; never silently migrate local data to an account; test quota, stale content version, multiple tabs, and downgrade/rollback behavior.

### Upload and content abuse

Uploads remain disabled until type/size/count limits, quarantine/scanning, content policy, storage isolation, retention/deletion, access authorization, abuse handling, safe previews, and cost controls exist. Filenames/MIME are untrusted.

### Sandbox escape

Disposable network-restricted workers, no production/provider secrets, read-only images, ephemeral filesystems, non-root execution, syscall/process limits, CPU/memory/time quotas, dependency allowlist/cache policy, output limits, cleanup, rate/cost controls, audit, kill switch, and independent penetration review.

### Payment and entitlement abuse

Use hosted/tokenized checkout; never handle raw card data. Verify webhook signature/timestamp; idempotent event ledger; replay protection; server-authoritative entitlement; reconciliation; refund/dispute states; no access grant from redirect query/client flag; rate limits; redacted logs; billing kill switch.

### Supply chain and CI

Pinned lockfile, minimal dependencies, least-privilege workflow permissions, supported actions, dependency/static analysis where available, targeted secret scans, no write credentials for untrusted code, artifact provenance/checksums, and honest reporting when GitHub Advanced Security is unavailable.

### Native distribution/update

Signed/notarized packages, protected signing keys, reproducible/provenance evidence, checksum/update metadata validation, staged channels, rollback, minimum supported version policy, least-privilege permissions, and installer/updater abuse tests. No fake or unsigned production updater.

### Misleading authority and claims

Prevent UI from claiming save, submission, AI review, result, payment, install/update, user activity, or security status that did not happen. Unknown states fail closed. Fixture labels cannot be confused with learner records.

## Abuse cases for every slice

- malformed/unknown query state;
- oversized/repeated text input;
- HTML/script-like text rendered safely;
- navigation during unsaved work;
- offline/retry duplication;
- stale/invalid/expired version;
- answer cue before decision;
- unauthorized data/provider/endpoint introduction;
- hidden competition/comparison/pressure mechanics;
- accessibility path producing a different measured behavior.

## OWASP alignment

Track current web/API risks and the 2025 GenAI risks: prompt injection, sensitive disclosure, supply chain, data/model poisoning, improper output handling, excessive agency, prompt leakage, vector/embedding weaknesses when used, misinformation, and unbounded consumption.

## Pre-beta gates

Authorization isolation; youth privacy/impact review; age/consent/discovered-under-13; data inventory/lifecycle; AI/upload threat reviews; rate/cost alarms; dependency/secret scanning; retention/export/deletion; backup/restore; incident/abuse runbooks; sandbox penetration testing before code missions; payment review before checkout; production smoke/rollback exercises.

## Incident principles

Stop exposure/cost, preserve minimum safe evidence, revoke/rotate credentials, disable affected capability, communicate accurately, restore safely, and complete a blameless root-cause/action review. Never publish exploit details or learner content in issue logs.
