# ADR 0003: Append-only event log for runs

- Status: accepted
- Date: 2026-08-15

Use server-authoritative append-only run events. Build UI state, replay, and scoring projections from them; store the final structured submission linked to event sequence and mission hash. This requires schema/privacy governance but enables auditability, reprocessing, fair comparison, and debugging.
