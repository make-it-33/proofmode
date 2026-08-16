# ProofMode handoff

Last updated: `2026-08-16T11:42:00+05:30`  
Run ID: `2026-08-16-make-the-call-directions-v1`  
Repository head reviewed: `52be64e8f310feb5f3d6163796243aa45d52c5b3` (before this proposal commit)  
Stage: **Gate 2 owner selection / private pre-alpha**

## Current state

A — Make the call remains the approved first product behavior. Three Gate 2 creative directions are now prepared and visually verified:

1. **Casefile** — human, tactile, investigative.
2. **Live Case** — shared, competitive, broadcast-like.
3. **Workbench** — calm, precise, product-native.

Casefile is recommended. No direction is selected and no production design or implementation is authorized.

The visual pack uses actual Northstar mission moments and much less copy than Signal Ops v1. Its generated images and all visual choices remain exploratory.

## Active work

- Awaiting the owner’s Gate 2 selection or revision request.
- Preserving all three directions as clearly labeled exploration.
- Keeping product code, final media, stack choice, and rejected Signal Ops work unchanged.

## Progress

| Area | State | Evidence / note |
| --- | --- | --- |
| Agent operating system | Complete | Canonical instructions, handoff, approvals, workflow, quality bar, and CI enforcement on `main` |
| Gate 1 product behavior | Approved | A — Make the call; ADR 0004 |
| Gate 2 creative options | Prepared | `docs/design/MAKE_THE_CALL_DIRECTIONS_V1.md` and approval artifact |
| Gate 2 direction | Pending | Casefile recommended; owner decision required |
| Detailed journey / state system | Not started | Begins only after Gate 2 selection |
| Production runtime | Not started | Phase 1 issues #2–#9 remain open |

## Opportunity and capture plan

Casefile offers the strongest chance to make ProofMode recognizable without reverting to generic AI gradients, fake terminal theater, or strategy-deck copy. It turns evidence into the visual identity while leaving the product behavior visible.

Live Case can later contribute competitive timing/replay cues. Workbench demonstrates the clarity floor. Do not merge all three by default; a selected direction needs a coherent center.

## Limitations and weak spots

1. The owner has not selected a Gate 2 direction.
2. The pack is a direction comparison, not a complete journey or component system.
3. The two included generated images are exploratory and not licensed/approved production assets.
4. Full loading, empty, AI, error, timeout, completion, score, replay, and recovery states remain unshown.
5. Northstar still needs blind QA for clarity, ambiguity, answer cues, accessibility, exploit paths, and time.
6. The production stack, backend trust path, observability, supported security scanning, and representative user research remain pending.
7. GitHub Actions completion for the main commit is not directly observable through the current connection.

## Next plan

1. Ask the owner to choose Casefile, Live Case, Workbench, or revise/reject all.
2. Record the exact selection and exclusions on `main` before more visual work.
3. Prepare the complete desktop/mobile Make the call journey for Gate 3.
4. Include loading, empty, AI, decision, timeout, error, completion, score, replay, recovery, accessibility, performance, and motion/media budgets.
5. Compare technical-stack options separately; do not implement until the relevant approvals exist.

## Approval state

- **Approved:** A — Make the call as the Phase 1 behavior direction.
- **Pending:** Gate 2 creative-direction selection.
- **Recommended, not approved:** Casefile.
- **Exploration only:** Live Case, Workbench, and the two generated images in the pack.
- **Not approved:** production design, final copy/media, framework/vendor, implementation, social/ranking systems, monetization, or launch.
- **Revision requested:** Signal Ops v1.

## Verification

- Pack: `ProofMode-Make-the-Call-Gate2-v1.zip`.
- Size: `7,858,052 bytes`.
- SHA-256: `525d5ba848984e4a483355385b280818166f50b3d096d1317c3a2f584874a403`.
- Desktop: 1440 × 1200, five distinct frames.
- Mobile: 390 × 3000, five distinct frames.
- Reduced motion: five distinct frames.
- Final captures reported no console errors, failed resources, horizontal overflow, clipped overflow, or frame-visibility failures.
- Every final direction was visually inspected; detected mobile/desktop clipping was fixed and re-inspected.
- No application code, production media, stack, or scoring arithmetic changed.

## Owner help / blockers

The next blocker is a product/design choice rather than tool access: the owner must select a Gate 2 direction or request revision.

## Next agent checklist

- [ ] Do not treat Casefile as approved until the owner selects it.
- [ ] Record the Gate 2 decision before detailed visual work.
- [ ] Preserve selected-direction coherence; do not average the three options.
- [ ] Keep every generated asset out of production until separately approved.
- [ ] Update this handoff and append the next run ID.
