# Signal Ops — design approval pack v1

- Status: **Exploration — not approved for production**
- Date: 2026-08-16
- Decision requested: approve, approve with changes, or reject the direction for the first vertical slice.

## Objective

Evolve the existing ProofMode visual foundation into a premium investigative game system that is calm enough to trust, sharp enough to compete, and cinematic only when motion clarifies a decision.

Core proposition: **AI is allowed. Your judgment is the test.**

Signal Ops expression: **Evidence becomes action.**

## Experience principles

1. **One decision at a time.** The next useful action is visible without flattening evidence into an obvious answer.
2. **Earn the reveal.** Color and motion build attention, but truth is revealed only after commitment.
3. **Every number explains itself.** Scores link to actions, evidence, versions, and comparability status.
4. **Cinematic, not noisy.** No permanent glow, floating-glass clutter, fake terminal theater, or generic AI gradients.

## Visual system

| Role | Token | Intended use |
| --- | --- | --- |
| Ops black | `#080A09` | Primary game canvas |
| Graphite | `#151A16` | Panels and navigation |
| Evidence | `#F1EFE6` | Source documents and light marketing surfaces |
| Signal lime | `#B9FF48` | Primary action and verified player-selected signal |
| Trace blue | `#7895FF` | Secondary analysis and practice guidance |
| Risk coral | `#FF7B72` | Errors and risk only; never pre-submit truth cues |

Use borders and geometry before shadows. Lime is a flashlight, not wallpaper. Evidence remains neutral before submission. Use a system sans family for product copy and a system monospace for metadata, timestamps, and source identifiers.

## What stays from the prototype

- Acid-lime signature and bold editorial headlines.
- Dark mission workspace with light evidence artifacts.
- High-density desktop workspace and clear primary actions.

## What changes before production

- Remove red answer cues and explanatory giveaways before submission.
- Replace operator score 923, Top 3%, and AI-baseline copy with measured 0–100 run scoring and honest provisional states.
- Turn decorative motion into orientation, feedback, and replay.
- Separate run score, longitudinal skill rating, and percentile.

## Key experiences in scope

### Marketing hero

- One-view proposition and one primary CTA.
- Original mission art paired with a real product replay.
- Trust strip: evidence-rich missions, deterministic scoring, no prompt trivia.
- No inflated user, cohort, or AI-comparison claims.

### Desktop mission player

- Objective and submission contract visible before play.
- Evidence workspace is primary; bounded AI is adjacent and explicitly fallible.
- Player-selected focus is visually distinct but not graded before submission.
- Structured decision workspace requires cause, first action, and citations.

### Mobile mission player

- Task modes: Evidence, AI, Decision.
- No compressed three-pane layout.
- Sticky context-aware primary action and preserved timer/budget state.

### Score and replay

- Run score displayed as `0–100` with **No percentile yet** until calibrated.
- Six explainable subscores: Outcome, Verification, Judgment, Efficiency, Communication, Recovery.
- Replay highlights a temporary mistake, decisive evidence, correction, and next practice behavior.

## Motion language

| Token | Duration | Purpose |
| --- | ---: | --- |
| Evidence focus | 140–180 ms | Border/value emphasis; never mark truth |
| Panel transition | 180–220 ms | Preserve spatial continuity |
| Decision lock | 240–280 ms | One decisive confirmation, then stillness |
| Replay trace | 320–480 ms | Connect cause and consequence on request |

Use transforms and opacity for core transitions. Respect `prefers-reduced-motion`; all essential meaning must remain in the static state. Avoid repetitive peripheral motion, flashing, and continuous scanlines.

## Image and video plan

- Original mission-specific key art; no robots, glowing brains, or generic AI stock imagery.
- A muted 20-second launch film: plausible AI claim → evidence enters → player challenges → cited decision locks → replay proves why.
- Captions/transcript for video and appropriate alternative text for meaningful images.
- Target budgets: hero still ≤180 KB after responsive compression; optional teaser ≤1.2 MB; no autoplay audio.
- Record asset provenance and licensing before production use.

## Accessibility and performance

- WCAG AA contrast, visible focus, semantic controls, 44px minimum targets, keyboard-complete flows, and screen-reader labels.
- Never rely on color alone for evidence or scoring states.
- Responsive QA at desktop and 390px.
- Prefer compositor-friendly transforms/opacity; avoid layout-triggering animation.
- Monitor LCP, CLS, and INP before release.

## Exact authorization requested

Approval authorizes only:

- Signal Ops tokens and component foundations;
- marketing hero and one mission proof section;
- desktop/mobile Northstar mission player;
- structured decision workspace;
- deterministic score explanation and replay;
- reduced-motion equivalents and responsive QA.

Approval does **not** authorize leagues, tournaments, paid packs, native apps, uncalibrated rankings, heavy WebGL, full launch-film production, a large image library, or material deviation from this direction.

## References

- Linear, calmer interface notes: https://linear.app/now/behind-the-latest-design-refresh
- Duolingo, measured habit experiment: https://blog.duolingo.com/improving-the-streak
- Apple accessibility guidance: https://developer.apple.com/design/human-interface-guidelines/accessibility
- MDN reduced-motion guidance: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion
- web.dev animation and Core Web Vitals guidance: https://web.dev/articles/top-cwv

Principles were studied; no visual design, logo, proprietary asset, or source code was copied.
