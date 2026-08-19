# Cinematic Website + Focused App — Gate 3 v1

Status: **Approved as shown for production implementation**  
Approval date: 2026-08-19  
Proposal run: `2026-08-19-cinematic-website-app-gate3-v1`  
Approval run: `2026-08-19-cinematic-website-app-gate3-approved`

## Approval outcome

The owner independently approved all three proposed parts:

1. **Cinematic public website direction — approved.**
2. **Focused lower-guidance app direction — approved.**
3. **Motion and media rules — approved.**

This authorizes an incremental production implementation of the experience and its binding motion, loading, accessibility, provenance, and performance constraints.

It does **not** approve the displayed human still or derived film as final production media, choose a production media vendor, or authorize adjacent product scope. Final production assets still require explicit provenance, responsive-crop, accessibility, budget, and owner review.

## Approved boundary

The website and app are different experiences:

> **The website earns attention and demonstrates the promise. The app protects concentration and trains judgment.**

### Public website

Primary job:

- create curiosity and aspiration;
- show, rather than over-explain, the difference between AI speed and human judgment;
- demonstrate real product behavior;
- move a visitor toward trying or downloading the app.

Approved visual intensity:

- cinematic human/product media;
- slow, bounded pointer parallax;
- a clearly decorative animated cursor;
- floating evidence/status objects that never cover controls;
- short scroll reveals and product-state choreography;
- one user-initiated silent film.

The website is not a tutorial, dashboard, mission runner, or permanent wall of feature copy.

### Product app

Primary job:

- start or resume a mission quickly;
- keep the evidence, AI move, timer, and decision hierarchy legible;
- teach first-use behavior progressively;
- support recovery and deliberate commitment;
- return a private, honest behavior signal and replay.

Required restraint:

- no cinematic background video during timed play;
- no decorative objects crossing evidence or controls;
- no permanent guide boxes on every state;
- no repeating onboarding after the first completed tutorial;
- motion only for orientation, feedback, or state change;
- returning users enter the mission directly.

## Approved website concept

### Hero promise

Lead:

> **AI can write it. Can you make the call?**

Supporting copy:

> Six-minute missions where the model sounds sure, the evidence disagrees, and your judgment decides what ships.

Primary actions:

- `Try today’s mission`
- `Play the 9-second film`

The visible 13+ and no-account/private-practice boundary remains concise beneath the actions.

### Human + product film

The hero combines:

- one ambitious young builder in a real-feeling environment;
- a real product/editor surface rather than abstract AI particles;
- a confident AI recommendation;
- a contradictory evidence or test signal;
- a cursor moving toward the point of judgment;
- a recovery state before the decision lock.

The film is silent, user-initiated, loopable, and optional. The poster and product overlay preserve the message without playback.

### Interactive details

- Pointer movement may shift the hero frame by at most 5 px and roughly 3 degrees.
- A decorative cursor follows a predetermined causal path; it does not replace the system cursor.
- Three proof/status objects may drift on 5.8–7 second cycles.
- Decorative objects remain outside primary controls and are pointer-transparent.
- Motion stops through an explicit motion control and operating-system reduced-motion preference.

### Story structure

1. **Promise:** AI is fast; judgment remains yours.
2. **Proof:** a short human/product film shows the AI mistake and recovery.
3. **Difference:** Human + AI versus AI alone.
4. **Meaning:** a six-signal private skill profile, not an intelligence score.
5. **Action:** try or download the product.

Copy remains deliberately sparse. Deeper rules belong in secondary pages, FAQs, or contextual app onboarding.

## Approved app concept

### Shared identity, different intensity

The app shares the website’s near-black field, off-white text, acid-lime action cue, blue AI/system cue, coral risk cue, and direct voice. It does not copy the website’s cinematic composition.

### First-use onboarding

A three-step, dismissible layer appears only on the first run:

1. AI makes a move; the player decides whether it survives.
2. Evidence goes into a proof chain.
3. The player may recover before locking the final call.

After completion or dismissal, the full-screen teaching layer does not return automatically. Contextual prompts appear only at the relevant decision.

### Mission states

#### Scout

- mission title, clock, and one-line objective;
- evidence grid;
- compact proof chain;
- explicit fallible AI move;
- no long instructions above the mission.

#### Challenge

- isolates the AI’s specific claim;
- contrasts the unsupported claim with verified evidence;
- offers one clear recovery action.

#### Lock

- asks for the primary cause;
- requires one immediate action and remaining uncertainty in production;
- keeps native selection controls and visible focus behavior.

#### Result

- private practice signal;
- clear explanation of what changed the outcome;
- six dimensions when evidence supports them;
- pivotal replay;
- explicit language that the result is not an intelligence score or authoritative competitive rank.

## Approved visual and motion system

### Palette roles

- near black: world/background;
- ink white: primary type;
- paper: contrast panel and reflective result moments;
- acid lime: player action and verified progress;
- electric blue: AI/system state;
- coral: risk, contradiction, or missed evidence.

Color cannot be the only signal. Icons, labels, position, and text must communicate the same state.

### Typography

- large editorial sans for the public promise;
- compact sans for product navigation and decisions;
- monospace only for code, evidence IDs, timers, and machine output;
- no decorative all-caps paragraphs;
- app headings remain smaller than marketing headlines.

### Motion rules

Website motion may attract, demonstrate, and respond. App motion may confirm, orient, and recover.

- app state transitions target 180–280 ms;
- no interaction depends on animation timing;
- no flash pattern over three times per second;
- no automatically playing audio;
- moving content over five seconds has an obvious pause path;
- reduced motion uses the static poster, hides the decorative cursor, stops floating objects, and removes smooth-scroll/parallax behavior.

## Media and performance rules

Approved concept measurements:

- HTML: 42,742 bytes;
- initial poster WebP: 30,228 bytes;
- VP9/WebM film: 126,372 bytes;
- MP4 fallback: 259,233 bytes;
- film: 9 seconds, 1280 × 720, no audio;
- artifact archive: 530,919 bytes;
- archive SHA-256: `7729f0ba11eecff221432f2bfe82b1d6a76d986870c31ad8723e00f1fca2bc4d`.

The film uses `preload="none"` and receives a source only after explicit play. Initial media remains below the 350 KB budget.

Binding production requirements:

- responsive desktop/mobile crops;
- AVIF/WebP poster with measured fallback;
- WebM/MP4 only when justified by support and total cost;
- user-initiated loading and playback;
- explicit pause;
- caption or transcript when future media contains speech or meaningful audio;
- alt/decorative decision for every image;
- final provenance, rights, model/provider, and edit history;
- measured LCP, INP, CLS, bundle, and media budgets before release.

## Concept-media status

- Human still: AI-generated with Google `nano-banana` for exploration.
- Silent film: deterministic crop, pan, grade, and encoding from that still.
- Product UI, evidence objects, cursor choreography, copy, and interactions: authored for ProofMode.
- No reference-site implementation or asset was copied.
- The displayed person, still, and film remain replaceable concept media and are **not final-production approved**.

## Research principles

The direction translates, rather than copies, principles observed in:

- Cursor: ambitious promise with interactive product proof;
- Linear: quiet discipline and human/agent workflow clarity;
- Raycast: focused benefit hierarchy and product-native visuals;
- web.dev and W3C guidance: reduced-motion variants and controllable animation.

References:

- https://cursor.com/
- https://linear.app/
- https://www.raycast.com/
- https://web.dev/articles/prefers-reduced-motion
- https://www.w3.org/WAI/WCAG22/Techniques/css/C39

## Artifact QA

Chromium verification covered Website, App, and System at:

- desktop: 1440 × 960;
- mobile: 390 × 844.

Passed:

- no horizontal overflow;
- no unnamed buttons;
- no duplicate IDs;
- no visible interactive target below 44 × 44;
- film source loading and 9-second playback;
- Challenge, Lock, and Result state switching;
- first-use onboarding open and close;
- reduced-motion film pause;
- reduced-motion decorative-cursor removal;
- machine result: `findings: []`.

Artifact QA does not replace repository axe, manual keyboard, screen-reader, zoom, device, or production performance testing after implementation.

## Authorized implementation sequence

1. Establish an explicit marketing-site/app boundary without changing mission contracts.
2. Implement shared design tokens and typography first.
3. Build the static, no-media website baseline.
4. Add the user-initiated poster/film shell and measure initial loading.
5. Add bounded pointer and scroll motion behind reduced-motion guards.
6. Refactor the app into the approved low-guidance state hierarchy.
7. Add staged first-use onboarding with local/private completion state.
8. Preserve and extend unit, contract, Playwright, axe, boundary, and budget checks.
9. Complete manual accessibility and owner visual review.
10. Replace or explicitly approve every concept asset before release.

Implementation must be incremental and reversible. The verified `b0025fa97b03d1228e601e52a82b3e9b5016352e` functional baseline is the rollback point.

## Explicit exclusions

Approval does not authorize:

- the displayed concept person, still, or film as final media;
- a media-generation or hosting vendor;
- automatic audio or unbounded autoplay;
- backend provider selection;
- authoritative scoring or ranking;
- personal-data expansion;
- public beta;
- social or league implementation;
- employer or school assessment;
- payments;
- native applications;
- executable code sandboxes.
