# Casefile implementation review v1

- Date: 2026-08-18
- Status: **Revision requested**
- Reviewed build: `77e89e79b15604348df6e72e68a99843ab86564f`
- Owner evidence: Windows verification output plus desktop promise and mission-workspace captures
- Replacement design: **not approved and not implemented**

## Outcome

The functional slice rendered and the exact dependency install succeeded, but the first production UI implementation failed owner review. It must not be treated as the production visual or interaction direction.

The owner found:

- the landing headline excessively large and reminiscent of an older low-quality website pattern;
- the overall interface visually dated and insufficiently appealing;
- the mission flow too normal, flat, and straightforward;
- weak energy, delight, progression, and sense of skill-building;
- poor alignment with the primary audience: teenagers who want credible AI, coding, judgment, and agentic-work skills;
- the output unjustified by the time and code invested;
- the earlier prototype more appealing than the current implementation.

## What survives

- browser-safe public mission contract;
- deterministic mock AI and recovery behavior;
- private session state and under-13 no-save boundary;
- source identity, pinning, and structured-call rules;
- security, privacy, accessibility, performance, and test boundaries;
- React/Vite foundation and exact dependency lock;
- Make the call as the current core skill hypothesis, pending improved interaction presentation.

## What is reopened

- creative direction;
- landing composition and type scale;
- mission information architecture and interaction pacing;
- game feel, progression, feedback, motion, and reward language;
- how AI actions, verification, and recovery become visible and satisfying;
- desktop/mobile composition;
- product voice for teen learners without becoming childish;
- later professional credibility for employers without adding employer features now.

## Immediate technical defects found

Owner verification on the reviewed build produced:

- exact install success: 61 packages added, 62 audited, 0 vulnerabilities;
- `npm run verify` failure because the repository guard referenced five never-existing paths and a missing hygiene script;
- Playwright result: 4 passed, 1 failed;
- serious WCAG AA contrast failure on active evidence metadata (`3.54:1`, required `4.5:1`);
- the accessibility path also hit the 30-second test timeout on Windows.

Commit `579a36e06b0521d6dc54cb5d24588e7570f7c87e` repairs the repository manifest, adds the missing hygiene guard, corrects active-item metadata contrast, and raises the browser-test timeout to 60 seconds. Owner rerun remains required.

## Recovery gate

No aesthetic or interaction redesign should be committed until the owner chooses a new direction. The next proposal must show two or three genuinely different directions, each judged on:

1. teen appeal without childishness;
2. professional AI/coding credibility;
3. game feel and repeat motivation;
4. clarity under a timed mission;
5. visible verification and recovery behavior;
6. mobile quality;
7. accessibility and performance;
8. distinctiveness without generic neon, fake terminal, glass, or oversized editorial-hero treatment.
