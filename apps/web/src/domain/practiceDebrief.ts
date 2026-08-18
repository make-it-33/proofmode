import type { PreviewRunState } from "./runState";

export type PracticeDimension =
  | "Outcome"
  | "Verification"
  | "Judgment"
  | "Efficiency"
  | "Communication"
  | "Recovery";

export interface PracticeDimensionResult {
  name: PracticeDimension;
  value: number;
  note: string;
}

export interface PracticeDebrief {
  overall: number;
  dimensions: PracticeDimensionResult[];
  pivotalTitle: string;
  pivotalDetail: string;
}

function clamp(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}

export function buildPracticeDebrief(state: PreviewRunState): PracticeDebrief {
  const sourceCount = Math.min(2, state.pinnedArtifactIds.length);
  const assistantTurns = state.aiMessages.filter((message) => message.role === "assistant").length;
  const completedCall = Boolean(state.selectedChoiceId && state.firstAction.trim().length >= 12);
  const namedUncertainty = state.remainingUncertainty.trim().length >= 8;
  const recovered = state.aiClaimVerdict === "broken";

  const dimensions: PracticeDimensionResult[] = [
    {
      name: "Outcome",
      value: completedCall ? 88 : 42,
      note: completedCall ? "A complete decision was locked." : "The decision was incomplete.",
    },
    {
      name: "Verification",
      value: clamp(32 + sourceCount * 15 + (recovered ? 30 : 0)),
      note: recovered ? "A consequential AI claim was checked." : "The AI claim stayed unresolved.",
    },
    {
      name: "Judgment",
      value: clamp(38 + (state.selectedChoiceId ? 18 : 0) + sourceCount * 10 + (namedUncertainty ? 10 : 0)),
      note: namedUncertainty ? "The call includes a falsifiable uncertainty." : "No uncertainty was named.",
    },
    {
      name: "Efficiency",
      value: clamp(74 - Math.max(0, assistantTurns - 2) * 8 - Math.max(0, state.pinnedArtifactIds.length - 3) * 3),
      note: assistantTurns <= 2 ? "The AI was used selectively." : "More AI turns added investigation cost.",
    },
    {
      name: "Communication",
      value: state.firstAction.trim().length >= 32 && namedUncertainty ? 82 : 56,
      note: namedUncertainty ? "Action and uncertainty are both explicit." : "The rationale needs more precision.",
    },
    {
      name: "Recovery",
      value: recovered ? 94 : 35,
      note: recovered ? "You corrected the planted overclaim before lock." : "The planted overclaim survived.",
    },
  ];

  const overall = Math.round(
    dimensions.reduce((total, dimension) => total + dimension.value, 0) / dimensions.length,
  );

  return {
    overall,
    dimensions,
    pivotalTitle: recovered ? "You broke the 22% pricing claim" : "The AI move went uncorrected",
    pivotalDetail: recovered
      ? "The dashboard confused an adoption target with a price increase. You checked the contract memo, corrected the claim, and kept the final call evidence-led."
      : "The dashboard’s modeled figure remained in the chain without a source-level check.",
  };
}
