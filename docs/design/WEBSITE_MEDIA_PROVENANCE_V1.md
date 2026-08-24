# Website media provenance v1

Status: **Approved for public use**  
Run ID: `2026-08-24-public-site-release-candidate-v1`

## Source

The public website uses two still images supplied by the owner in the project conversation on 2026-08-22:

1. `human-reference.png` — a young builder working at a laptop in a warm/cool home-studio scene.
2. `tension-reference.png` — a dark top-down evidence-table scene with a hooded participant and paper cards.

The agent did not source these images from the web and did not copy reference-site assets. The owner selected both stills for the ProofMode public-site direction.

## Transformation history

- Source dimensions used for the web composition: 1376 × 768.
- Each image was cropped into eight 172 × 768 slices.
- Each slice was encoded as a compact WebP payload inside an SVG wrapper so the text-only repository write surface could preserve the approved imagery.
- `CinematicImage` reconstructs the eight slices in one 1376 × 768 SVG view box.
- No additional person, face, logo, testimonial, product metric, or generated interface was composited into the stills.

## Production files

| File                                | Bytes |
| ----------------------------------- | ----: |
| `apps/web/public/media/human-1.svg` | 2,413 |
| `apps/web/public/media/human-2.svg` | 2,009 |
| `apps/web/public/media/human-3.svg` | 3,297 |
| `apps/web/public/media/human-4.svg` | 5,997 |
| `apps/web/public/media/human-5.svg` | 6,557 |
| `apps/web/public/media/human-6.svg` | 7,221 |
| `apps/web/public/media/human-7.svg` | 4,845 |
| `apps/web/public/media/human-8.svg` | 2,773 |
| `apps/web/public/media/proof-1.svg` | 2,909 |
| `apps/web/public/media/proof-2.svg` | 2,425 |
| `apps/web/public/media/proof-3.svg` | 7,181 |
| `apps/web/public/media/proof-4.svg` | 7,305 |
| `apps/web/public/media/proof-5.svg` | 6,997 |
| `apps/web/public/media/proof-6.svg` | 3,677 |
| `apps/web/public/media/proof-7.svg` | 1,805 |
| `apps/web/public/media/proof-8.svg` | 1,405 |

All files remain below the repository's 350 KB per-media budget.

## Responsive and accessibility decisions

- The home hero image is decorative because the adjacent product copy and recovery summary communicate the meaning; it is hidden from assistive technology.
- The evidence-table chapter uses the alternative text: `A player comparing evidence during a ProofMode mission`.
- Desktop uses the full cinematic composition.
- Mobile uses an intentionally shifted crop that keeps the person or evidence surface visible without covering the primary action.
- Reduced motion removes parallax and transition movement while preserving both still images and all product meaning.

## Rights confirmation

On 2026-08-24 at 17:43 +05:30, the owner explicitly confirmed that they have the rights to publish and modify both selected stills. This clears the media-rights gate for the public website.
