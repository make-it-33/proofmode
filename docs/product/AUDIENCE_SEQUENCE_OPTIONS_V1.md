# Audience and market sequence options v1

- Status: **Approved — A2 and B1 selected**
- Date: 2026-08-17
- Current product behavior: Make the call
- Current creative direction: Casefile
- Decision record: ADR 0006

## Decision outcome

The owner selected:

1. **A2 — Ages 13+ learner-first**.
2. **B1 — Consumer proof first; employer assessment later**.

Phase 1 is a youth-aware self-improvement game. It is not an employment selection product. Under-13 users are not supported. Employer access, reports, candidate ranking, proctoring, and hiring recommendations remain out of scope.

## Why the sequence matters

A youth learning game and an employment selection product have materially different privacy, fairness, validity, accessibility, data-retention, and legal obligations.

This document is product and risk planning, not legal advice.

## Selected option A2 — Ages 13+ teen-first

- Focus: teenagers, students, early-career builders, and ambitious self-learners.
- Product: daily Make the call missions, with constrained agentic-coding missions added only after safe sandbox infrastructure exists.
- Required additions: age-aware onboarding, child-centered transparency, high-privacy defaults, data minimization, parental/guardian handling where required, safeguarding review, and age-appropriate research/testing.
- Benefit: directly serves the teenage audience the owner wants to help.
- Cost/risk: materially expands privacy and operational requirements compared with an adult-only launch.

## Selected option B1 — Consumer proof first; employer pilot later

Phase 1 remains a learner product. Players own their results; no employer recommendation is produced.

A later employer pilot may be considered only after:

- score reliability across unseen missions;
- job-specific validation rather than a generic “AI skill” claim;
- adverse-impact analysis and accessible alternatives;
- candidate notice, consent, explanation, correction, export, deletion, and appeal;
- human review and a ban on automatic reject decisions;
- separate employer data, retention, audit, and authorization boundaries;
- legal review for launch regions;
- separate product and owner approval.

## Rejected/deferred options

- Ages 16+ and ages 18+ were not selected for Phase 1.
- Learner and employer tracks in parallel were rejected for Phase 1.
- No future employer feature is approved by this decision.

## Phase 1 youth baseline

- Under-13 access is not supported.
- No public-by-default profiles or run history.
- No direct messages, precise geolocation, biometric data, targeted advertising, or sale of personal data.
- Minimize identity, prompts, telemetry, and retention.
- Avoid dark patterns and competitive pressure that weaken privacy or wellbeing.
- Keep learner data inaccessible to employers and schools.
- Select launch regions and complete privacy/legal review before public beta.

## What the decision authorizes

Agents may:

- align the product vision, privacy requirements, roadmap, and Phase 1 issues;
- finish the Casefile Gate 3 journey for ages 13+;
- prepare a concrete stack ADR;
- return for exact implementation approval.

The decision does not authorize production code, public launch, collection of minor data, employer reports, proctoring, automated hiring decisions, production media, or a stack/vendor.

## Sources

- FTC COPPA Rule: https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa
- UK ICO Age Appropriate Design Code: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/age-appropriate-design-a-code-of-practice-for-online-services/
- EEOC Employment Tests and Selection Procedures: https://www.eeoc.gov/laws/guidance/employment-tests-and-selection-procedures
- European Commission AI Act overview: https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
