export const todayViewStates = [
  "ready",
  "empty",
  "loading",
  "offline",
  "error",
] as const;

export type TodayViewState = (typeof todayViewStates)[number];

const todayViewStateSet = new Set<string>(todayViewStates);

export function parseTodayViewState(search: string): TodayViewState {
  const requestedState = new URLSearchParams(search).get("state");
  return requestedState && todayViewStateSet.has(requestedState)
    ? (requestedState as TodayViewState)
    : "ready";
}

export const todayStatePolicy: Record<
  TodayViewState,
  {
    canOpenPractice: boolean;
    exposesPersonalData: false;
    makesNetworkRequest: false;
  }
> = {
  ready: {
    canOpenPractice: true,
    exposesPersonalData: false,
    makesNetworkRequest: false,
  },
  empty: {
    canOpenPractice: true,
    exposesPersonalData: false,
    makesNetworkRequest: false,
  },
  loading: {
    canOpenPractice: false,
    exposesPersonalData: false,
    makesNetworkRequest: false,
  },
  offline: {
    canOpenPractice: true,
    exposesPersonalData: false,
    makesNetworkRequest: false,
  },
  error: {
    canOpenPractice: false,
    exposesPersonalData: false,
    makesNetworkRequest: false,
  },
};
