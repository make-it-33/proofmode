# Youth privacy and safety baseline

- Status: **Required Gate 3 and architecture baseline; implementation details pending approval**
- Audience: ages 13+
- Under-13 access: not supported
- Product: learner self-improvement; no employer access

This is a product and engineering baseline, not legal advice. Launch regions, consent mechanisms, retention periods, vendors, and final policy language require dedicated review before public beta.

## Data principles

1. Collect the minimum data needed for a learner to play, recover, understand progress, and control the account.
2. Keep learner results and run history private by default.
3. Never sell personal data or use targeted advertising.
4. Do not collect precise location, biometric identifiers, school records, government IDs, contact lists, or unnecessary demographic data.
5. Do not expose prompts, uploads, runs, or profiles to employers, schools, other players, or model providers beyond the approved purpose.
6. Define purpose, lawful basis, retention, deletion, export, and subprocessors before each field/event is collected.
7. Prefer local or short-lived state for guest play when integrity and recovery allow it.

## Age and consent

- Use a clear minimum-age gate before account creation or personal-data collection.
- Do not encourage users to lie about age.
- Apply parental/guardian consent and notices where launch-region law requires them.
- Provide age-appropriate explanations near the decision, not only in long policies.
- Do not infer age from biometrics, behavior, or hidden profiling.
- Block or safely redirect under-13 account creation; define deletion/escalation for discovered under-13 data.

## Product safeguards

- No direct messaging or open user-generated social feed in Phase 1.
- No public-by-default profiles, exact school, exact location, or searchable real names.
- Sharing is explicit, previewed, revocable where feasible, and excludes private run content by default.
- Streaks, timers, notifications, and competitive feedback must not pressure users to disclose more data, disable privacy, spend money, or play excessively.
- Scores explain one run and do not label intelligence, worth, employability, or future potential.
- Provide accessible alternatives and do not make disability-related behavior look like cheating or low skill.

## AI safeguards

- Warn learners not to enter personal, school, account, health, financial, or third-party secrets.
- Treat prompts and uploads as sensitive untrusted input.
- Keep system policy, hidden truth, provider credentials, and scoring manifests server-side.
- Select providers using retention, training-use, regional processing, deletion, security, and child/youth suitability criteria.
- Redact where feasible; log metadata rather than raw content; bound requests by cost, rate, concurrency, and time.
- Never let a model contact third parties or take consequential external action in Phase 1.

## Security and abuse cases

Test at least:

- age-gate bypass and discovered under-13 data;
- account takeover, credential stuffing, session theft, and recovery abuse;
- scraping, enumeration, stalking, and accidental public exposure;
- prompt injection, sensitive disclosure, unsafe links, and improper output rendering;
- cheating, event tampering, answer leakage, and replay privacy;
- support impersonation and requests for learner data;
- deletion/export authorization and backup lifecycle;
- analytics or error logs capturing raw prompts or identifiers.

## Pre-public-beta evidence

- launch-region privacy/legal review and child-impact assessment;
- approved data inventory and event dictionary;
- age/consent, privacy notice, export, deletion, and account recovery tests;
- vendor/subprocessor and model-provider review;
- retention/deletion verification including backups and logs;
- youth UX research with appropriate consent and safeguarding;
- accessibility review and plain-language comprehension testing;
- incident, abuse, and discovered-under-13 runbooks;
- owner approval for the exact personal-data scope.
