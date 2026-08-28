# Business, premium, and payments

## Business principle

ProofMode should become sustainable by selling additional depth, convenience, and professional workflow—not learning outcomes, rank, pressure relief, or essential accessibility.

No pricing, checkout, subscription, entitlement, payment vendor, tax configuration, trial, or paid account is currently implemented or approved for production.

## Free/core value

The free experience should remain useful on its own. Candidate core value:

- 13+ onboarding and comfort settings;
- the initial Agentic Coding path and foundational lessons;
- a meaningful number of private checkpoints and replays;
- local/private progress and reset;
- accessibility features and accessible alternatives;
- privacy/safety controls and support information;
- transparent Proof Chain feedback.

Exact limits require user research and content economics. Do not fabricate quotas in UI before they exist.

## Possible premium value

Candidates for later validation:

- deeper and advanced Agentic Coding paths;
- larger private scenario library;
- advanced recovery, architecture, security, and multi-agent simulations;
- richer private replay/history and export formats;
- optional built-in AI coaching within clear budgets;
- creator/content-authoring tools;
- separate adult team features after consumer value and privacy boundaries are proven.

Premium never buys easier evaluation, outcome claims, public status, competition advantage, essential accessibility, safety, export/deletion, or support needed to resolve billing/security problems.

## Not a payment decision

Ideas in this document are not approval to select a vendor, set a price, collect billing data, or publish checkout. Those actions require an explicit owner decision with options, cost, lock-in, regions, taxes, refunds, youth safety, privacy, security, accessibility, and support trade-offs.

## Required payment architecture

When approved:

1. Use a reputable hosted/tokenized checkout where possible; ProofMode must not handle raw card data.
2. Treat the payment provider and client as untrusted event sources until server verification.
3. Store provider customer/subscription identifiers only for a documented purpose.
4. Use idempotent, signature-verified webhooks and a replay-safe event ledger.
5. Keep entitlements server authoritative; never trust a client flag or redirect query.
6. Define product/price versioning and a safe mapping from provider state to entitlement state.
7. Cover created, active, trialing if used, past due, paused if used, canceled, refunded, disputed, webhook-delayed, duplicate, and provider-outage states.
8. Provide clear renewal, cancellation, receipt/invoice, refund, and support routes.
9. Define tax/VAT/GST regions, currency behavior, legal entity, terms, privacy notice, and data-processing agreements.
10. Add rate limits, audit metadata, redacted logs, alerting, reconciliation, backup/restore, and a billing kill switch.

## Youth-safety requirements

Before accepting payment from or for a teenager:

- approve launch regions and age/consent/guardian policy;
- use child-centered explanations without dark patterns;
- avoid manipulative trials, countdowns, fake scarcity, or difficult cancellation;
- explain who is paying and who controls the account/entitlement;
- prevent a payer from silently receiving private learning content;
- define refund/support handling that does not expose learner data;
- review store/platform requirements separately for native apps.

## Entitlement model

Keep capability access separate from progress and evidence.

```ts
type Entitlement = {
  capability: string;
  source: "free" | "subscription" | "grant";
  status: "active" | "grace" | "inactive";
  startsAt?: string;
  endsAt?: string;
  policyVersion: string;
};
```

A lapse must not delete private work. Define read/export access, grace behavior, and reactivation before launch. Accessibility, privacy, export, and deletion cannot be removed behind payment.

## Pricing research questions

- Which paid outcome has repeat value after the free loop works?
- What content/AI/sandbox/support costs exist per active learner?
- Which regions and currencies can be supported responsibly?
- Subscription, one-time path purchase, or another model?
- What free depth establishes trust without manipulative lock-in?
- What refund window and cancellation UX are appropriate for a 13+ product?
- How are family-paid and self-paid accounts separated from learner privacy?

Until answered, `/premium` remains informational and no price is shown.

## Success and failure measures

When telemetry is approved, evaluate comprehension, checkpoint completion, recovery, replay usefulness, support burden, refund rate, and retained learning value. Do not optimize merely for conversion or time spent. Never use fabricated subscriber counts or testimonials.

## Rollback

Payment launch requires the ability to disable new checkout, preserve paid access during provider failure where safe, replay missed webhooks, reconcile entitlements, issue refunds, communicate status, and roll back product gating without losing learner work.
