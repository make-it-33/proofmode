# Agent Arena Gate 3 visual approval pack v1

Status: **approved as shown for production implementation**  
Approved: 2026-08-18 by the owner  
Run ID: `2026-08-18-agent-arena-gate3-v1`

## Decision

Agent Arena is the approved production recovery direction for the first consumer player slice.

This approval supersedes the visible Casefile presentation while retaining the useful browser-safe mission, privacy, deterministic mock-AI, run-state, and security contracts where compatible.

## Artifact

The self-contained review pack was delivered as:

- `ProofMode-Agent-Arena-Gate3-v1.zip`
- package size: `1,402,197 bytes`
- package SHA-256: `8a5f717c5f2a77744f2749a3a6832ee0e7eda2e90dac6126f94323f2dd0eeada`
- interactive HTML: `agent-arena-gate3-v1.html`
- HTML size: `50,654 bytes`
- HTML SHA-256: `a8fab75c81d3fc71c79167d37ade9caacc5b7f38f3de75ef22cbeafbde75b3e9`

The package also contains `README.md`, `PROVENANCE.md`, the reproducible `qa.mjs`, `qa-report.json`, and 14 PNG captures.

## Reviewed screen set

The pack presents seven reviewable states at desktop and mobile:

1. Home / today's trial
2. Scout
3. AI move / Challenge
4. Recovery after correcting the AI
5. Lock
6. Result / pivotal replay
7. Visual and interaction system

Desktop viewport: `1440 x 960`.  
Mobile viewport: `390 x 844`.

## Approved visual direction

- compact contemporary sans typography instead of oversized editorial display type;
- energetic solid color and disciplined contrast instead of generic AI gradients;
- ink `#141419`, action `#FF5D38`, proof `#DFFF4F`, focus `#5367FF`, and field `#F3F0E7` as the lead palette;
- one focal interaction per state;
- visible progress through `Scout -> Challenge -> Lock`;
- evidence as scannable signal cards rather than a default document-reader shell;
- a source -> claim -> verification -> decision proof chain as the signature visual;
- AI represented as explicit, inspectable, fallible moves rather than a generic chat product;
- consequential recovery recognized as a first-class positive skill moment;
- a deliberate final lock and a transparent six-dimension result with pivotal replay;
- mobile actions selected for the current task instead of five persistent workspace modes.

## Audience fit

The design leads for people aged 13 and older who want to build credible AI, coding, verification, judgment, and recovery skill. It should feel competitive and consequential without using childish XP clutter, fake terminals, slang-heavy copy, or dark-pattern urgency.

Employer assessment remains a later mode after consumer proof and is not part of this implementation approval.

## Interaction contract

### Scout

- inspect evidence;
- identify meaningful signals;
- add sources or claims to the proof chain;
- preserve source provenance.

### Challenge

- inspect an AI move;
- open the source behind a consequential claim;
- support, weaken, or break the claim;
- make the correction visible in the proof chain.

### Lock

- choose a primary cause;
- choose or state the first action;
- attach supporting evidence;
- state remaining uncertainty;
- review before final lock.

### Result

- show six deterministic dimensions: Outcome, Verification, Judgment, Efficiency, Communication, and Recovery;
- show a pivotal event or replay that explains the result;
- never imply that the model authored the authoritative score.

## Implementation acceptance criteria

Implementation must preserve the approved hierarchy and interaction model while using the existing browser-safe contract:

- no oversized serif hero or document-reader-first workspace;
- no three equal-width administrative columns;
- no generic chat-as-the-product interaction;
- Scout, Challenge, and Lock remain visible and understandable;
- the proof chain is functional rather than decorative;
- correcting the planted AI mistake creates a clear recovery moment;
- the result/replay explains performance without exposing hidden answer or scoring contract fields to the browser;
- 390 px layout has no page-level horizontal overflow;
- visible mobile product actions are at least 44 px;
- reduced-motion transitions resolve to `0ms`;
- keyboard, focus, zoom, Playwright, axe, build, typecheck, browser-boundary, and budget checks pass;
- deviations from this approved artifact are documented before implementation review.

## Structural artifact QA

The artifact QA finished with:

```json
{
  "screens": 14,
  "findings": []
}
```

It checked:

- console and page errors;
- exactly one active screen;
- page-level horizontal overflow;
- accessible names for visible product buttons;
- 44 px mobile product targets;
- `0s` transition duration when reduced motion is requested.

One initial mobile target, `+ Add to proof`, measured `326 x 40` and was corrected to a 44 px minimum before final packaging.

Automated axe was unavailable in the artifact sandbox. This is not a claim of full WCAG conformance. The production implementation must use the repository Playwright/axe suite plus manual keyboard, focus, zoom, contrast, and reduced-motion review.

## Provenance

The review artifact uses original HTML and CSS only. It contains no third-party images, fonts, scripts, audio, video, or copied product assets. External products were used only for interaction and visual research.

## Approval boundary

Approved now:

- production implementation of this Agent Arena direction for the existing private consumer web slice;
- replacement of the rejected Casefile visible presentation;
- compatible evolution of deterministic run state needed to make the approved proof chain, recovery, lock, and local result/replay functional;
- tests and accessibility work needed for the implementation.

Still not approved:

- infrastructure or provider provisioning;
- personal data collection or retention changes;
- public launch;
- social or employer surfaces;
- paid flows;
- native apps;
- executable code sandboxes;
- production media or materially new motion beyond the reviewed system.

Material visual or product-behavior departures still require a new approval decision.
