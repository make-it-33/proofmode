# V6 first-impression composition

This release keeps the stronger parts of the current public site while restoring the approved V6 opening-frame intent:

- The cinematic human image is fetched before the application bundle and decoded synchronously for the first paint.
- The real image, headline, primary action, and recovery-proof element remain together in the opening viewport.
- The first-frame composition was verified at 1920×1080 and 1366×768.
- The hero image was complete at DOM readiness with its native 1376×768 source available.
- Local browser QA passed 13 cases with no console errors, failed resources, overflow, or undersized controls.

Source commit: `0ada13e479f95fb3f0c14154855d7f5754c19fef`
