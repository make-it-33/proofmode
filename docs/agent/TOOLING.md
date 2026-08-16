# Tooling and artifact policy

Use tools to raise the quality ceiling, not to create activity or hide weak decisions.

## Selection protocol

For each non-trivial run:

1. Identify the outcome and evidence needed.
2. Choose the narrowest capable tool.
3. Verify connection, permission, version, and output format.
4. Preserve provenance and source links.
5. Validate the result independently.
6. Record meaningful limitations in the handoff.
7. Ask the owner when required access or a consequential choice is unavailable.

## Tool categories

### Source and delivery

Use GitHub for canonical files, issues, commits, reviews, and CI. Keep `main` testable. Do not leave finished work only in a sandbox or chat attachment.

### Research and internet

Use primary sources, standards, recent market evidence, product documentation, and representative competitor examples. Separate facts from interpretation. Do not copy protected visual design, code, copy, or assets.

### Code and browser automation

Use reproducible local/dev-container commands, unit/contract/integration/E2E tests, browser captures, accessibility checks, and performance traces. Inspect outputs visually; a successful command is not proof of a good interface.

### Images and art

Image generation, photography, illustration, and art tools may be used for approved exploration or production scope. Record prompt/source, model or creator, date, license/provenance, intended use, edits, alt treatment, responsive crops, and compression. No generic AI clichés or unlabeled synthetic evidence.

### Motion and video

Use browser-native motion, Remotion, After Effects-equivalent workflows, ffmpeg, or other available tools only when motion clarifies the product. Define storyboard, trigger, duration, easing, reduced-motion fallback, captions, codec, dimensions, poster, and byte budget before production.

### Audio

Use generated or recorded audio only after owner approval and only when it improves feedback, atmosphere, or accessibility. Provide mute/volume controls, no autoplay sound, transcript/caption equivalents where relevant, provenance, and licensing.

### 3D and Blender

Use Blender/3D only when it creates a meaningfully better approved experience than 2D. Provide a static fallback, input/keyboard plan, reduced-motion behavior, loading budget, mobile thermal/performance review, and licensing/provenance. Heavy 3D is never the default.

### Security and quality

Use supported secret scanning, dependency auditing, static analysis, schema validation, fuzz/property tests where useful, authorization tests, OWASP-aligned abuse cases, and sandbox tests. When a preferred scanner is unavailable, document the gap and add a supported alternative rather than claiming coverage.

## Approval boundary for artifacts

- Research screenshots, wireframes, generated images, videos, audio, and 3D studies are **exploration** until explicitly approved.
- Keep exploratory assets out of production bundles.
- Production media requires the exact approved concept, provenance, licensing, accessibility, responsive behavior, and performance budget.
- Material changes to an approved artifact return to the owner gate.

## Asking the owner for help

Ask immediately and specifically when quality depends on:

- a missing integration or tool connection;
- API credentials or a paid account;
- App Store, Play Store, analytics, email, storage, model-provider, or deployment access;
- a local-device test or account-only workflow;
- a brand/legal/licensing decision;
- user research participation or private source material;
- a product/design choice with multiple valid directions.

Never ask for secrets in chat. Use the platform's approved connection and secret flows.
