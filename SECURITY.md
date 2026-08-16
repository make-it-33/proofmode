# Security policy

ProofMode is private pre-alpha software. Report vulnerabilities privately to the repository owner; do not open a public issue with exploit details.

## Baseline controls

- Secrets live in approved secret stores and CI environments, never source control.
- Browser clients never receive provider keys, scoring secrets, hidden mission truth, or answer manifests.
- Model output and uploaded mission artifacts are untrusted.
- AI actions use least privilege, allowlists, rate limits, timeouts, and audit events.
- Code/build missions execute only in disposable, network-restricted sandboxes with resource limits.
- Immutable mission versions and signed run summaries protect competition integrity.
- Personal data collection is minimized and retention is documented before launch.

See `docs/architecture/SECURITY_THREAT_MODEL.md`.
