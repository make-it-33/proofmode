export const onboardingViewStates = [
  "ready",
  "loading",
  "offline",
  "error",
] as const;

export type OnboardingViewState = (typeof onboardingViewStates)[number];

export const onboardingSteps = [
  "promise",
  "age",
  "goal",
  "field",
  "pace",
  "comfort",
  "ready",
] as const;

export type OnboardingStep = (typeof onboardingSteps)[number];
export type AgeEligibility = "eligible" | "under13" | null;
export type OnboardingGoal = "start" | "improve" | "build" | "compete";
export type OnboardingField = "agentic-coding";
export type DailyPace = 5 | 10 | 20;

export type OnboardingDraft = {
  ageEligibility: AgeEligibility;
  goal: OnboardingGoal | null;
  field: OnboardingField | null;
  pace: DailyPace | null;
  reduceMotion: boolean;
  calmerTimers: boolean;
  spaciousReading: boolean;
};

export const emptyOnboardingDraft: OnboardingDraft = {
  ageEligibility: null,
  goal: null,
  field: null,
  pace: null,
  reduceMotion: false,
  calmerTimers: false,
  spaciousReading: false,
};

const onboardingViewStateSet = new Set<string>(onboardingViewStates);

export function parseOnboardingViewState(search: string): OnboardingViewState {
  const requestedState = new URLSearchParams(search).get("state");
  return requestedState && onboardingViewStateSet.has(requestedState)
    ? (requestedState as OnboardingViewState)
    : "ready";
}

export const onboardingStatePolicy: Record<
  OnboardingViewState,
  {
    canInteract: boolean;
    storesSelection: false;
    exposesPersonalData: false;
    makesNetworkRequest: false;
  }
> = {
  ready: {
    canInteract: true,
    storesSelection: false,
    exposesPersonalData: false,
    makesNetworkRequest: false,
  },
  loading: {
    canInteract: false,
    storesSelection: false,
    exposesPersonalData: false,
    makesNetworkRequest: false,
  },
  offline: {
    canInteract: true,
    storesSelection: false,
    exposesPersonalData: false,
    makesNetworkRequest: false,
  },
  error: {
    canInteract: false,
    storesSelection: false,
    exposesPersonalData: false,
    makesNetworkRequest: false,
  },
};

export function canAdvanceOnboarding(
  step: OnboardingStep,
  draft: OnboardingDraft,
): boolean {
  switch (step) {
    case "promise":
    case "comfort":
    case "ready":
      return true;
    case "age":
      return draft.ageEligibility !== null;
    case "goal":
      return draft.goal !== null;
    case "field":
      return draft.field === "agentic-coding";
    case "pace":
      return draft.pace !== null;
  }
}

export function nextOnboardingStep(step: OnboardingStep): OnboardingStep {
  const index = onboardingSteps.indexOf(step);
  return onboardingSteps[Math.min(index + 1, onboardingSteps.length - 1)];
}

export function previousOnboardingStep(step: OnboardingStep): OnboardingStep {
  const index = onboardingSteps.indexOf(step);
  return onboardingSteps[Math.max(index - 1, 0)];
}
