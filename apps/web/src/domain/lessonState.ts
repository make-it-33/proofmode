export const lessonViewStates = [
  "ready",
  "loading",
  "offline",
  "error",
  "incomplete",
  "hint",
  "checkpoint",
  "complete",
] as const;

export type LessonViewState = (typeof lessonViewStates)[number];

export type LessonDraft = {
  objective: string;
  inScope: string;
  outOfScope: string;
  constraints: string;
  evidence: string;
  doneCriteria: string;
};

export type LessonDraftField = keyof LessonDraft;
export type LessonSectionId =
  | "objective"
  | "scope"
  | "constraints"
  | "evidence"
  | "doneCriteria";

export type LessonSelfCheck = {
  outcomeObservable: boolean;
  scopeBounded: boolean;
  constraintsGrounded: boolean;
  evidenceExecutable: boolean;
  finishLineClear: boolean;
};

export const lessonFieldLimit = 500;

export const emptyLessonDraft: LessonDraft = {
  objective: "",
  inScope: "",
  outOfScope: "",
  constraints: "",
  evidence: "",
  doneCriteria: "",
};

export const incompleteLessonDraft: LessonDraft = {
  ...emptyLessonDraft,
  objective: "Make the dashboard better.",
};

export const demonstrationLessonDraft: LessonDraft = {
  objective:
    "Make weekly dashboard comparisons readable and faster on mobile without changing the underlying data.",
  inScope:
    "DashboardSummary.tsx and summary.css; layout, labels, wrapping, and focus presentation.",
  outOfScope:
    "API responses, data calculations, authentication, navigation, and unrelated dashboard panels.",
  constraints:
    "Preserve keyboard semantics, existing empty and error states, the data shape, and the current dependency set.",
  evidence:
    "Review the diff, run unit and browser checks, inspect 390px and 1440px layouts, and confirm empty and error states.",
  doneCriteria:
    "Weekly labels do not overlap, comparisons remain understandable without color, checks pass, and the change can be reverted as one slice.",
};

export const emptyLessonSelfCheck: LessonSelfCheck = {
  outcomeObservable: false,
  scopeBounded: false,
  constraintsGrounded: false,
  evidenceExecutable: false,
  finishLineClear: false,
};

export const completeLessonSelfCheck: LessonSelfCheck = {
  outcomeObservable: true,
  scopeBounded: true,
  constraintsGrounded: true,
  evidenceExecutable: true,
  finishLineClear: true,
};

const lessonViewStateSet = new Set<string>(lessonViewStates);

export function parseLessonViewState(search: string): LessonViewState {
  const requestedState = new URLSearchParams(search).get("state");
  return requestedState && lessonViewStateSet.has(requestedState)
    ? (requestedState as LessonViewState)
    : "ready";
}

export function limitLessonField(value: string): string {
  return value.slice(0, lessonFieldLimit);
}

const minimumFieldLength: Record<LessonDraftField, number> = {
  objective: 18,
  inScope: 12,
  outOfScope: 12,
  constraints: 18,
  evidence: 18,
  doneCriteria: 18,
};

export function evaluateLessonDraft(draft: LessonDraft): {
  fields: Record<LessonDraftField, boolean>;
  sections: Record<LessonSectionId, boolean>;
  completeSectionCount: number;
  isStructurallyComplete: boolean;
} {
  const fields: Record<LessonDraftField, boolean> = {
    objective: draft.objective.trim().length >= minimumFieldLength.objective,
    inScope: draft.inScope.trim().length >= minimumFieldLength.inScope,
    outOfScope: draft.outOfScope.trim().length >= minimumFieldLength.outOfScope,
    constraints:
      draft.constraints.trim().length >= minimumFieldLength.constraints,
    evidence: draft.evidence.trim().length >= minimumFieldLength.evidence,
    doneCriteria:
      draft.doneCriteria.trim().length >= minimumFieldLength.doneCriteria,
  };
  const sections: Record<LessonSectionId, boolean> = {
    objective: fields.objective,
    scope: fields.inScope && fields.outOfScope,
    constraints: fields.constraints,
    evidence: fields.evidence,
    doneCriteria: fields.doneCriteria,
  };
  const completeSectionCount = Object.values(sections).filter(Boolean).length;

  return {
    fields,
    sections,
    completeSectionCount,
    isStructurallyComplete: completeSectionCount === 5,
  };
}

export function areSelfChecksComplete(checks: LessonSelfCheck): boolean {
  return Object.values(checks).every(Boolean);
}

export function canPrepareCheckpoint(
  draft: LessonDraft,
  checks: LessonSelfCheck,
): boolean {
  return (
    evaluateLessonDraft(draft).isStructurallyComplete &&
    areSelfChecksComplete(checks)
  );
}

type LessonStatePolicy = {
  canInteract: boolean;
  canEditDraft: boolean;
  storesDraft: false;
  exposesPersonalData: false;
  makesNetworkRequest: false;
  usesAiJudgment: false;
};

export const lessonStatePolicy: Record<LessonViewState, LessonStatePolicy> = {
  ready: {
    canInteract: true,
    canEditDraft: true,
    storesDraft: false,
    exposesPersonalData: false,
    makesNetworkRequest: false,
    usesAiJudgment: false,
  },
  loading: {
    canInteract: false,
    canEditDraft: false,
    storesDraft: false,
    exposesPersonalData: false,
    makesNetworkRequest: false,
    usesAiJudgment: false,
  },
  offline: {
    canInteract: true,
    canEditDraft: true,
    storesDraft: false,
    exposesPersonalData: false,
    makesNetworkRequest: false,
    usesAiJudgment: false,
  },
  error: {
    canInteract: false,
    canEditDraft: false,
    storesDraft: false,
    exposesPersonalData: false,
    makesNetworkRequest: false,
    usesAiJudgment: false,
  },
  incomplete: {
    canInteract: true,
    canEditDraft: true,
    storesDraft: false,
    exposesPersonalData: false,
    makesNetworkRequest: false,
    usesAiJudgment: false,
  },
  hint: {
    canInteract: true,
    canEditDraft: true,
    storesDraft: false,
    exposesPersonalData: false,
    makesNetworkRequest: false,
    usesAiJudgment: false,
  },
  checkpoint: {
    canInteract: true,
    canEditDraft: true,
    storesDraft: false,
    exposesPersonalData: false,
    makesNetworkRequest: false,
    usesAiJudgment: false,
  },
  complete: {
    canInteract: false,
    canEditDraft: false,
    storesDraft: false,
    exposesPersonalData: false,
    makesNetworkRequest: false,
    usesAiJudgment: false,
  },
};
