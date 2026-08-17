# Audience and market sequence options v1

- Status: **Owner decision required before production implementation**
- Date: 2026-08-17
- Current product behavior: Make the call
- Current creative direction: Casefile

## Decision to make

The owner has clarified a long-term opportunity around two audiences:

1. teenagers and young people who want to become genuinely capable with AI, including agentic coding rather than vibe-coding; and
2. employers who want evidence that candidates can work responsibly and effectively with AI.

Both are credible opportunities, but they cannot be treated as one undifferentiated beta. A youth learning game and an employment selection product have materially different privacy, fairness, validity, accessibility, data-retention, and legal obligations.

This document is product and risk planning, not legal advice.

## Existing product truth

The current vision targets ambitious students and early-career knowledge workers, puts consumer delight before employer features, and explicitly excludes hiring marketplaces and proctored certification from beta.

Phase 1 issue #2 also excludes employer features and proctoring. Changing that now would expand the vertical slice before the core score has passed blind fairness testing.

## Decision A — minimum launch age

### A1 — Ages 16+ learner-first — recommended

- Focus: older teenagers, students, early-career builders, and ambitious self-learners.
- Product: daily Make the call missions, later including constrained agentic-coding missions.
- Privacy: high-privacy defaults, minimal profile data, no public-by-default identity, no direct messaging, no location, clear deletion/export.
- Benefit: keeps the youth opportunity while maintaining a coherent first product.
- Cost/risk: users under 18 still require child-centered design and jurisdiction review; 16 is not a universal legal shortcut.

### A2 — Ages 13+ teen-first

- Focus: broader teenage audience, including younger students.
- Additional needs: stronger age handling, parental/guardian workflows where required, age-appropriate explanations, stricter defaults, child-safety review, and more complex research/testing.
- Benefit: broadest teenage reach.
- Cost/risk: materially expands privacy, safeguarding, moderation, and operational work before the core loop is validated.

### A3 — Ages 18+ learner-first

- Focus: university students, early-career professionals, and adult self-learners.
- Benefit: fastest path to a trustworthy beta with the lowest youth-compliance complexity.
- Cost/risk: excludes the younger teen audience the owner wants to serve.

## Decision B — employer assessment timing

### B1 — Consumer proof first; employer pilot later — recommended

Phase 1 remains a self-improvement game. Players own their results; no hiring recommendation is produced. After repeated-mission validity, fairness evidence, accommodations, and job-specific research exist, ProofMode may explore a separate employer pilot.

Entry conditions for that pilot should include:

- score reliability across unseen missions;
- job-specific validation rather than a generic “AI skill” claim;
- adverse-impact analysis and accessible alternatives;
- candidate notice, consent, explanation, correction, export, and deletion;
- human review and a ban on automatic reject decisions;
- separate employer data, retention, audit, and authorization boundaries;
- legal review for launch regions.

### B2 — Learner and employer tracks in parallel now

This requires separate product surfaces, roles, permissions, data contracts, reporting, accommodations, validity research, candidate rights, and audit controls in Phase 1.

Benefit: earlier enterprise discovery and possible revenue evidence.

Cost/risk: substantially slower consumer product, high compliance burden, greater harm from an immature score, and a strong chance of building an assessment system before proving the game is fair or predictive.

## Recommendation

Choose **A1 + B1**:

- launch for ages 16+ as a learner-first daily game;
- preserve high-privacy, child-aware defaults;
- keep results self-owned and non-employment in Phase 1;
- validate Make the call before adding code/build missions;
- add agentic-coding missions only after disposable sandbox infrastructure exists;
- explore employers later as a separate, validated product surface—not as an early leaderboard or hiring shortcut.

This preserves the teenage opportunity and the long-term employer opportunity without making the first release unsafe, unfair, or impossible to finish.

## Why this boundary matters

- The FTC states that COPPA applies to services directed to children under 13 and services with actual knowledge that they collect personal information from children under 13.
- The UK ICO Children’s Code expects services likely to be accessed by children to put their best interests first, use high-privacy defaults, minimize collection and retention, and avoid nudging children to weaken privacy.
- The U.S. EEOC states that employment tests should be job-related, properly validated, and reviewed for disparate impact; employers remain responsible even when using a vendor.
- The European Commission classifies AI systems used to evaluate candidates or support employment decisions as high-risk uses under the EU AI Act.

## What the decisions authorize

After the owner selects an age boundary and employer sequence, agents may:

- align the product vision, privacy requirements, roadmap, and Phase 1 issues;
- finish the Casefile Gate 3 journey for the selected learner audience;
- prepare a concrete stack ADR;
- return for exact implementation approval.

The decision does not by itself authorize production code, public launch, collection of minor data, employer reports, proctoring, automated hiring decisions, production media, or a stack/vendor.

## Sources

- FTC COPPA Rule: https://www.ftc.gov/legal-library/browse/rules/childrens-online-privacy-protection-rule-coppa
- UK ICO Age Appropriate Design Code: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/childrens-information/childrens-code-guidance-and-resources/age-appropriate-design-a-code-of-practice-for-online-services/
- EEOC Employment Tests and Selection Procedures: https://www.eeoc.gov/laws/guidance/employment-tests-and-selection-procedures
- European Commission AI Act overview: https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
