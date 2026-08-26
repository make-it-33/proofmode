export const learnViewStates = [
  "ready",
  "loading",
  "empty",
  "offline",
  "error",
  "unavailable",
  "complete",
  "future",
] as const;

export type LearnViewState = (typeof learnViewStates)[number];

const learnViewStateSet = new Set<string>(learnViewStates);

export function parseLearnViewState(search: string): LearnViewState {
  const requestedState = new URLSearchParams(search).get("state");
  return requestedState && learnViewStateSet.has(requestedState)
    ? (requestedState as LearnViewState)
    : "ready";
}

export const learnStatePolicy: Record<
  LearnViewState,
  {
    canBrowsePath: boolean;
    canInspectLesson: boolean;
    exposesPersonalData: false;
    makesNetworkRequest: false;
    persistsProgress: false;
  }
> = {
  ready: {
    canBrowsePath: true,
    canInspectLesson: true,
    exposesPersonalData: false,
    makesNetworkRequest: false,
    persistsProgress: false,
  },
  loading: {
    canBrowsePath: false,
    canInspectLesson: false,
    exposesPersonalData: false,
    makesNetworkRequest: false,
    persistsProgress: false,
  },
  empty: {
    canBrowsePath: false,
    canInspectLesson: false,
    exposesPersonalData: false,
    makesNetworkRequest: false,
    persistsProgress: false,
  },
  offline: {
    canBrowsePath: true,
    canInspectLesson: true,
    exposesPersonalData: false,
    makesNetworkRequest: false,
    persistsProgress: false,
  },
  error: {
    canBrowsePath: false,
    canInspectLesson: false,
    exposesPersonalData: false,
    makesNetworkRequest: false,
    persistsProgress: false,
  },
  unavailable: {
    canBrowsePath: true,
    canInspectLesson: false,
    exposesPersonalData: false,
    makesNetworkRequest: false,
    persistsProgress: false,
  },
  complete: {
    canBrowsePath: true,
    canInspectLesson: true,
    exposesPersonalData: false,
    makesNetworkRequest: false,
    persistsProgress: false,
  },
  future: {
    canBrowsePath: false,
    canInspectLesson: false,
    exposesPersonalData: false,
    makesNetworkRequest: false,
    persistsProgress: false,
  },
};
