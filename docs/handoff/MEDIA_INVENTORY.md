# Media and visual-reference inventory

## Policy

Media belongs in the product only when it has a specific learning/explanation purpose, verified rights/provenance, accessible alternative, responsive behavior, loading plan, and budget. Essential actions and meaning cannot depend on media, audio, 3D, or animation.

The handoff folder contains lightweight SVG visual maps. They are documentation images, not screenshots claiming implemented UI. The Proof Chain walkthrough uses restrained CSS motion and a reduced-motion static state.

## Committed handoff visuals

| Asset | Purpose | Status |
| --- | --- | --- |
| `media/proofmode-product-map.svg` | Website, app, learning loop, V1/V2 gates, and removed competition map | Canonical documentation image |
| `media/proof-chain-walkthrough.svg` | Animated/static explanation of Source → AI move → Verification → Human decision → Outcome | Canonical documentation image |
| `media/v1-v2-roadmap.svg` | Dependency-ordered implementation overview | Canonical documentation image |

Each SVG includes `<title>` and `<desc>`, uses text labels rather than color alone, and remains source-reviewable. They must not be imported into the production bundle without a separate product need and accessibility/performance review.

## Existing production website media

The public website uses owner-approved supplied stills under the scope recorded in `docs/design/WEBSITE_MEDIA_PROVENANCE_V1.md`. Preserve their rights/provenance notes, responsive fallback, and performance treatment. Do not replace them with generic generated AI imagery or claim that a generated image depicts a real user/testimonial.

## Historical local review artifacts

These artifacts were generated for design review and deliberately remain outside `main`. Hashes let a maintainer identify the exact source if it is transferred separately.

| Artifact | Format and dimensions | Size | SHA-256 | Status |
| --- | --- | ---: | --- | --- |
| ProofMode app concept board | PNG, 3840×2160 | 2,061,485 bytes | `b1bfaf8e9baa2f65641f427f8e0751606235bd704c090742f8bb5aceb848bd0b` | Review artifact; not production authority |
| App concept walkthrough | H.264 MP4, 1920×1080, 30fps, 19.2s | 5,643,344 bytes | `2f73eac45235e8150dcb45a699af73cf77a99909a26f31518d8041c2501d5b91` | Review video; not committed production media |
| Concept images package | ZIP | 4,350,832 bytes | `52bdaabea98ee91dcee7350fdb286999a58095283ea9004afb8415891ed73990` | Review package |
| Today review images | ZIP | 673,110 bytes | `34e9b80549238b9a02c44d3272965b78eaa8c14053292613c0116997990aac0c` | Review package |
| Onboarding review images | ZIP | 812,919 bytes | `48b4fdf29abb2290e647102437f6405371bff9cc806b36a2cdb41c3de2300254` | Review package |

The original MP4/ZIP binaries are not placed in `main` because they are exploratory review outputs, not production assets, and would create stale/bloated authority. Their durable meaning is captured in the committed visual maps, page specs, design records, and hashes. If the owner later promotes a binary, add provenance, transcript/captions, static fallback, optimization, budget, and replacement/removal policy in the same PR.

## Media promotion checklist

1. Confirm ownership/license, source, modification rights, people/likeness consent, and geographic/use limits.
2. State the exact product job and route.
3. Remove metadata that should not ship.
4. Produce responsive formats/dimensions and a static fallback.
5. Write alt text or mark decorative correctly; caption/transcribe meaningful video/audio.
6. Ensure reduced motion and no autoplay audio.
7. Measure initial/route payload and rendering impact.
8. Test failure, slow load, offline, forced colors where relevant, zoom, and mobile crop.
9. Add hash/version/provenance and rollback.
10. Never use media as fabricated user evidence, testimonial, result, or activity.

## Future visual work

For each new route, prefer product-first diagrams and real deterministic interface states. Generate video only when temporal causality is clearer than a static sequence. Keep the repeated-use app calm; do not import cinematic motion merely because the public website uses it.
