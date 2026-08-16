# Copilot instructions for ProofMode

Read `AGENTS.md` first. Preserve the product rule that scores are deterministic, explainable, and versioned. Never let model output directly determine a final score. Never expose hidden mission truth or provider secrets to the browser.

Before coding, write acceptance criteria and inspect relevant product, architecture, security, and scoring documents. Prefer a small complete vertical slice. Add behavior and abuse-case tests. Run `npm run verify` before completion.

UI work must include keyboard support, reduced motion, responsive behavior, and desktop/mobile visual evidence. Feature work includes telemetry and rollback notes. Durable decisions require an ADR.
