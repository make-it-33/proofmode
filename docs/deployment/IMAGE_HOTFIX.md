# ProofMode image hotfix

Status: validated and released through GitHub Pages

- Replaced the stitched SVG tile mosaic with the two approved 1376×768 source stills.
- Optimized production images to WebP without changing their composition.
- Changed the media component to render real responsive images with correct relative asset paths under `/proofmode/`.
- Removed the eight obsolete tile SVGs.
- Rebalanced the hero grade so the image remains visible while the headline stays readable.
- Local browser QA: 13 cases, 0 console errors, 0 failed resources, 0 horizontal overflow, and 0 undersized controls.
- Source commit: `284efb73d2fc724fe37e5e6d07c20091c9f6a4fa`
