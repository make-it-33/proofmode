# ADR 0002: Deterministic final scoring

- Status: accepted
- Date: 2026-08-15

Competitive results must be reproducible. Final scoring is pure versioned code over structured signals. LLMs may extract bounded rubric signals from free text, but extraction/confidence/model/evidence are stored; the model never performs final arithmetic or directly assigns rank. This raises authoring rigor but makes results testable, replayable, explainable, and versionable.
