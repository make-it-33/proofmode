# ADR 0006: Ages 13+ learner-first; employer assessment later

- Status: Accepted
- Date: 2026-08-17
- Owner decision: Audience and market sequence approval

## Context

ProofMode’s long-term opportunity includes teenagers who want to build real AI capability and employers who may eventually want evidence of job-relevant human–AI skill.

The current beta plan is a consumer game, not a hiring assessment. Combining youth learning and employer selection in the first release would create conflicting incentives and materially expand privacy, safeguarding, validity, accessibility, audit, and legal obligations before the score has passed representative fairness testing.

Three minimum-age options were presented: 13+, 16+, and 18+. Two employer sequences were presented: after consumer proof or parallel with Phase 1.

## Decision

1. Set the minimum Phase 1 launch age to **13+**.
2. Build Phase 1 for learners and self-improvement.
3. Keep results private and self-owned by default.
4. Do not provide employer assessment, candidate ranking, hiring recommendations, proctoring, or employer access in Phase 1.
5. Consider a separate employer pilot only after consumer fairness, repeated-mission reliability, job-specific validity, accessibility, adverse-impact, candidate-rights, audit, and legal gates are satisfied.

## Consequences

### Positive

- Directly serves the teenage audience the owner wants to help.
- Preserves one coherent first product and avoids employer pressure distorting learning feedback.
- Gives ProofMode time to earn trust and validity before consequential use.
- Keeps the first vertical slice aligned with existing issues and Make the call.

### Negative / risks

- Users aged 13–17 require child-centered privacy, transparency, safeguarding, and age-appropriate UX.
- Parental/guardian consent and age handling vary by region and may affect launch availability.
- AI prompts and free text can contain personal, school, or sensitive information.
- Competitive loops can create unhealthy pressure or privacy exposure if profiles and sharing are careless.
- A future employer product cannot inherit consumer scores without separate validation and consent.

### Controls

- Under-13 users are not supported in Phase 1.
- High-privacy defaults; no public-by-default profile, direct messages, precise location, biometric data, targeted advertising, or sale of personal data.
- Minimize identity and telemetry; define purpose, retention, export, deletion, and provider processing before collection.
- Use age-appropriate explanations and avoid dark patterns, streak pressure, or nudges that weaken privacy.
- Keep learner results inaccessible to employers and schools unless a future, separately approved consent model exists.
- Select launch regions and complete privacy/legal review before public beta.
- Threat-model prompt content, uploads, sharing, support, abuse, and account recovery for youth use.

## Employer entry conditions

A future employer pilot requires a separate Gate 1 product decision and must include at least:

- job-specific construct and criterion validation;
- repeated/unseen-mission reliability evidence;
- adverse-impact analysis and accessible alternatives/accommodations;
- candidate notice, meaningful explanation, correction, export, deletion, and appeal;
- human review and no automatic rejection;
- separate tenant, authorization, retention, audit, and incident boundaries;
- regional legal review and explicit owner approval.

## Scope boundary

This ADR authorizes alignment of product, privacy, roadmap, Gate 3, and issue requirements for a 13+ learner product. It does not authorize collection of minor data, public launch, production implementation, a concrete vendor/stack, employer access, proctoring, hiring decisions, social features, production media, or legal claims.
