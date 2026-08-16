# Scoring model

## Keep three concepts separate

1. **Run score (0–100):** deterministic quality of one submission.
2. **Skill ratings:** longitudinal estimates updated from calibrated comparable runs.
3. **Percentile:** cohort position in the same calibrated context.

The prototype mixes these; production must not.

## Six subscores

Mission weights sum to 1.0 and are versioned.

- Outcome: objective tests satisfied.
- Verification: material false claims detected and linked to refuting evidence without reckless false positives.
- Judgment: strategy quality under uncertainty.
- Efficiency: purposeful time/AI use; wrong-but-fast is capped.
- Communication: clear cause/position, specific action, and required evidence—not word count.
- Recovery: planted or self-created mistakes detected and corrected.

## Deterministic pipeline

Input: immutable mission/content hash, append-only trusted run events, structured submission, and versioned engine. Output: six subscores, weighted run score/grade, explainable facts, integrity/comparability status, and version identifiers.

An LLM may map free text into a constrained set of rubric signals. Store the extraction, confidence, model version, and evidence. The model never performs final arithmetic or directly assigns rank.

## Anti-gaming

Cap efficiency when outcome is poor; penalize random flagging; do not reward opening every source; do not equate prompt count with quality; keep hidden tests out of client/model context; recompute server-side; version material scoring changes.

## Ratings and leaderboards

Do not ship global “Top 3%” on day one. Start with raw scores and provisional history. Calibrate mission difficulty after enough clean comparable runs, then use a documented rating method. Segment boards by version, fairness mode, and season.

## Required fixtures

Exemplary run, plausible wrong run, AI-trusting failure, fast random submission, over-flagging, time/resource edge, deterministic replay, and migration/comparability tests.
