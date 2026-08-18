export interface MockAiAnswer {
  body: string;
  citedArtifactIds: string[];
  confidence: "low" | "medium";
}

const ANSWERS = {
  pricing: {
    body: "The dashboard’s modeled 22% pricing impact looks like the strongest lead, so pricing backlash may be the primary cause. That dashboard is derived, though—compare it with the pricing memo before relying on the claim.",
    citedArtifactIds: ["dashboard"],
    confidence: "medium",
  },
  verification: {
    body: "The pricing memo says the actual list-price change was 4.3%, and existing enterprise renewals kept their current terms. My earlier 22% pricing conclusion was too strong because it treated an adoption target as a price change.",
    citedArtifactIds: ["pricing-memo", "dashboard"],
    confidence: "medium",
  },
  implementation: {
    body: "The renewal log links the largest losses to implementations delayed five and seven weeks. The call excerpts add repeated handoff and ownership failures, which makes implementation breakdown a stronger supported hypothesis than price alone.",
    citedArtifactIds: ["renewal-log", "customer-calls"],
    confidence: "medium",
  },
  default: {
    body: "Start by separating primary records from modeled summaries. The enterprise decline is clear, but the cause needs a chain across renewal outcomes, contract terms, and customer calls. I can help form a hypothesis; you should verify it against the sources.",
    citedArtifactIds: ["revenue-export", "renewal-log"],
    confidence: "low",
  },
} satisfies Record<string, MockAiAnswer>;

export function answerMockAi(prompt: string, previousAssistantTurns = 0): MockAiAnswer {
  const normalized = prompt.trim().toLowerCase();
  if (!normalized) return ANSWERS.default;

  if (/verify|check|challenge|memo|22|source|wrong|refut/.test(normalized)) {
    return ANSWERS.verification;
  }
  if (/implement|handoff|renew|churn|customer|action/.test(normalized)) {
    return ANSWERS.implementation;
  }
  if (/price|pricing|dashboard|cause|why|hypothesis/.test(normalized) || previousAssistantTurns === 0) {
    return ANSWERS.pricing;
  }
  return ANSWERS.default;
}
