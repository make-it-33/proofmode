# Cinematic Website + Focused App — Gate 3 v1

Status: **Proposed — owner review required**  
Date: 2026-08-19  
Run ID: `2026-08-19-cinematic-website-app-gate3-v1`

## Decision to make

Approve, revise, or reject three separable parts:

1. the public website direction;
2. the product app direction;
3. the shared motion, media, accessibility, and performance rules.

Approval authorizes a controlled production implementation plan. It does not approve the displayed human image or film as final media, choose a production media vendor, or authorize adjacent product scope.

## Owner clarification incorporated

The owner explicitly clarified that the website and app are different things.

- The website should be more visually ambitious and may use video, interactive motion, cursor choreography, and moving objects to show how good building with AI can feel.
- Those examples are inspiration, not literal implementation requirements.
- The product app should remain a distinct, usable experience rather than inheriting all marketing-page spectacle.

This proposal converts that direction into a boundary:

> **The website earns attention and demonstrates the promise. The app protects concentration and trains judgment.**

## Product boundary

### Public website

Primary job:

- create curiosity and aspiration;
- show, rather than over-explain, the difference between AI speed and human judgment;
- demonstrate real product behavior;
- move a visitor toward trying or downloading the app.

Allowed visual intensity:

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

## Website concept

### Hero promise

Proposed lead:

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
- a cursor that moves toward the point of judgment;
- a recovery state before the decision lock.

The film is silent, user-initiated, loopable, and optional. The poster and product overlay preserve the message without playback.

### Interactive details

- Pointer movement may shift the hero frame by at most 5 px and roughly 3 degrees.
- A decorative cursor follows a predetermined causal path; it does not replace the system cursor.
- Three small proof/status objects drift on 5.8–7 second cycles.
- Interactive objects remain outside primary controls and are pointer-transparent unless they are actual buttons.
- Motion stops through the explicit motion control and operating-system reduced-motion preference.

### Story structure

1. **Promise:** AI is fast; judgment remains yours.
2. **Proof:** a short human/product film shows the AI mistake and recovery.
3. **Difference:** Human + AI versus AI alone.
4. **Meaning:** a six-signal private skill profile, not an intelligence score.
5. **Action:** try or download the product.

Copy remains deliberately sparse. Deeper rules belong in secondary pages, FAQs, or the app’s contextual onboarding.

## App concept

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
- contrasts the invented or unsupported claim with verified evidence;
- offers one clear recovery action.

#### Lock

- asks for the primary cause;
- requires one immediate action and remaining uncertainty in production;
- keeps the native selection control and visible focus behavior.

#### Result

- private practice signal;
- clear explanation of what changed the outcome;
- six dimensions when evidence supports them;
- pivotal replay;
- explicit language that the result is not an intelligence score or authoritative competitive rank.

## Visual system

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

- app state transitions: target 180–280 ms;
- no interaction depends on animation timing;
- no flash pattern over three times per second;
- no automatically playing audio;
- moving content over five seconds has an obvious pause path;
- reduced motion uses the static poster, hides the decorative cursor, stops floating objects, and removes smooth-scroll/parallax behavior.

## Media and performance plan

Concept artifact measurements:

- HTML: 42,742 bytes;
- initial poster WebP: 30,228 bytes;
- VP9/WebM film: 126,372 bytes;
- MP4 fallback: 259,233 bytes;
- film duration: 9 seconds;
- film resolution: 1280 × 720;
- audio: none;
- artifact archive: 530,919 bytes;
- archive SHA-256: `7729f0ba11eecff221432f2bfe82b1d6a76d986870c31ad8723e00f1fca2bc4d`.

The film uses `preload="none"` and receives a source only after explicit play. Initial concept media is therefore the 30 KB poster, below the current 350 KB initial-media budget.

Production requirements:

- responsive desktop/mobile crops;
- AVIF/WebP poster with measured fallback;
- WebM/MP4 only if both are justified by support and total cost;
- user-initiated loading and playback;
- explicit pause;
- caption or transcript when future video contains speech or meaningful audio;
- alt/decorative decision for every image;
- final provenance, rights, model/provider, and edit history;
- measured LCP/INP/CLS and repository bundle/media budgets before approval.

## Concept-media provenance

- The human still was AI-generated with Google `nano-banana` for exploration.
- The silent film is a deterministic crop, pan, color grade, and encoding derived from that still.
- Product UI, evidence objects, cursor choreography, copy, and interactions were authored for ProofMode.
- No reference-site implementation or visual asset was copied.
- The displayed person, still, and film are replaceable concept media and are not production-approved.

## Research principles used

The pack translated, rather than copied, patterns observed in current product sites:

- Cursor: ambitious promise supported by interactive product demonstrations;
- Linear: a quiet, disciplined system with product proof and clear AI/human workflow language;
- Raycast: focused benefit hierarchy and product-native visuals;
- web.dev and W3C guidance: reduced-motion alternatives and animation that remains controllable.

References:

- https://cursor.com/
- https://linear.app/
- https://www.raycast.com/
- https://web.dev/articles/prefers-reduced-motion
- https://www.w3.org/WAI/WCAG22/Techniques/css/C39

## Artifact QA

The interactive artifact was tested in Chromium at:

- desktop: 1440 × 960;
- mobile: 390 × 844.

All three views—Website, App, and System—passed:

- no horizontal overflow;
- no unnamed buttons;
- no duplicate IDs;
- no visible interactive target below 44 × 44;
- film source loading and 9-second playback;
- Challenge, Lock, and Result state switching;
- first-use onboarding open and close;
- reduced-motion film pause;
- reduced-motion decorative-cursor removal.

Machine-readable result: `findings: []`.

This artifact QA is not a substitute for repository axe, manual keyboard, screen-reader, zoom, and production performance testing after implementation.

## Implementation sequence after approval

1. Establish an explicit marketing-site/app route and component boundary without changing mission contracts.
2. Implement shared design tokens and typography first.
3. Build the static, no-media website baseline.
4. Add the user-initiated poster/film shell and measure initial loading.
5. Add bounded pointer and scroll motion behind reduced-motion guards.
6. Refactor the app into the approved low-guidance state hierarchy.
7. Add the staged first-use onboarding with local/private completion state.
8. Preserve and extend current unit, contract, Playwright, axe, boundary, and budget checks.
9. Complete manual accessibility and owner visual review.
10. Replace or explicitly approve every concept asset before release.

Implementation must remain incremental and reversible. The verified `b0025fa` functional baseline is the rollback point.

## Explicit exclusions

This proposal does not authorize:

- final production image or video;
- production media-generation vendor;
- automatic audio or unbounded autoplay;
- backend provider selection;
- authoritative scoring or ranking;
- personal-data expansion;
- public beta;
- social/league implementation;
- employer or school assessment;
- payments;
- native applications;
- executable code sandboxes.

## Approval questions

### A — Website

Approve the cinematic public website direction as shown?

### B — App

Approve the focused, lower-guidance app direction as shown?

### C — Motion and media

Approve the proposed motion, loading, accessibility, provenance, and performance constraints?

Each part may be approved independently. Production implementation begins only for approved parts.
