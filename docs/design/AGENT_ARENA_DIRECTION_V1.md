# Agent Arena — visual recovery direction v1

- Date: 2026-08-18
- Status: **Selected for detailed exploration**
- Selection: owner chose Agent Arena on 2026-08-18
- Production implementation: **not approved**
- Replaces: rejected Casefile web scaffold visual and interaction implementation
- Retains: Make the call, ages 13+, browser-safe contracts, privacy/security boundaries, deterministic mocks, React foundation

## Audience

Primary: teenagers ages 13+ who want to become genuinely capable with AI—coding better, supervising agents, verifying claims, handling realistic situations, recovering from mistakes, and shipping professional work.

Secondary later: adults and company leaders who value credible evidence of applied AI judgment. Employer access and assessment remain out of scope until consumer proof and a separate gate.

## Product feeling

**A premium competitive skill game, not an online course and not a corporate dashboard.**

The interface should feel energetic, current, and desirable without becoming childish, noisy, or costume-like. The learner is an active player building proof under pressure. AI is a fallible opponent/teammate whose moves can be inspected, challenged, corrected, or rejected.

## Core interaction model

A mission progresses through three visible rounds:

1. **Scout** — inspect the situation and collect useful signals.
2. **Challenge** — test the consequential AI claim and build a proof chain.
3. **Lock** — commit one cause, one action, supporting evidence, and remaining uncertainty.

The player sees momentum and consequence through the mission, but no pre-submit color or motion implies the correct answer.

## Visual identity

- Compact, bold sans typography; no oversized editorial hero or serif-led document aesthetic.
- Dark neutral arena with high-contrast warm-white content and controlled electric accents.
- One primary action color, one challenge/warning color, and neutral evidence states.
- Strong spatial hierarchy with a single focal interaction per state.
- Evidence appears as responsive, inspectable signal cards rather than a static document rail.
- The proof chain is the signature visual: source → claim → verification → decision.
- Rounded geometry may be used for approachable tactility, but avoid generic glass cards and excessive pills.
- Original iconography should communicate inspect, challenge, connect, recover, and lock—not robots, brains, terminals, or sci-fi symbols.

## Game feel

- A clear round indicator and time state without stressful constant flashing.
- Evidence cards enter with short positional continuity and settle into the player's proof chain.
- AI claims arrive as explicit “moves” with source and confidence treatment, never as truth.
- Verification visibly changes a claim from untested to supported, weakened, contradicted, or uncertain.
- Recovery is celebrated as skill: catching and correcting an AI mistake creates a distinct positive moment.
- The final lock action should feel consequential and deliberate.
- Completion should reveal what the player proved and where judgment changed—not merely display confetti or an unexplained score.

## Desktop composition

- Persistent compact mission header with round, timer, and exit.
- Main arena focuses on the current signal or AI claim.
- Collapsible evidence deck and proof chain support the focal area rather than dividing the screen into three equal admin columns.
- Contextual action dock changes by round: inspect/pin, verify/challenge, then lock.
- Notes remain available but visually secondary.

## Mobile composition

- One active task per screen with thumb-reachable primary action.
- Swipe or tap between signal deck and proof chain without losing state.
- Bottom action dock reflects the current round rather than exposing five permanent modes.
- Timer and round remain visible but compact.
- No horizontal page overflow; all essential targets remain at least 44×44 px.

## Motion intent

- 140–220 ms transforms/opacity for cards, chain links, and round transitions.
- A single 260 ms recovery beat when an AI claim is corrected.
- No continuous ambient animation during timed reading.
- Reduced motion replaces movement with instantaneous state and border/icon changes.
- No production animation, audio, video, image, or 3D asset is approved at this stage.

## Accessibility and trust

- WCAG AA contrast for all text and meaningful controls.
- Visible keyboard focus and complete keyboard path.
- Color always paired with labels, icons, position, or border treatment.
- Evidence selection remains answer-neutral.
- Screen-reader announcements describe round changes, AI claim status, proof-chain updates, time expiry, and preserved work.
- 200% zoom and 390 px mobile must preserve the complete path.
- No fabricated rank, percentile, testimonial, cohort, employability, or AI-comparison claim.

## Anti-patterns

- no giant landing headline;
- no document-reader-first layout;
- no equal-width three-column admin dashboard;
- no generic AI gradient, glassmorphism, or floating decorative cards;
- no fake terminal, hacker costume, robot, brain, hologram, or cyberpunk neon overload;
- no childish mascot, meaningless XP shower, or reward spam;
- no tiny mono metadata as primary communication;
- no chat box treated as the product's AI experience;
- no motion or color that reveals correctness before submission.

## Detailed approval pack required next

The next pack must show real product states at desktop and 390 px:

1. home/today's mission;
2. 13+ boundary and clock-paused brief;
3. Scout round with signal deck;
4. AI move and Challenge round;
5. proof-chain recovery after correcting the AI;
6. Lock round with cause, action, sources, and uncertainty;
7. time-expired preserved state;
8. deterministic result explanation and event replay concept;
9. empty, offline, timeout, and resume states;
10. tokens, components, motion storyboard, accessibility, media plan, performance budget, exact implementation scope, and rollback.

The pack must be visual and product-first. Production UI work stops until the owner explicitly approves it.
