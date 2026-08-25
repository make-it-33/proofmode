import { describe, expect, it } from "vitest";
import {
  parseTodayViewState,
  todayStatePolicy,
  todayViewStates,
} from "../src/domain/todayState";

describe("Today state boundary", () => {
  it.each(todayViewStates)("accepts the allowlisted %s state", (state) => {
    expect(parseTodayViewState(`?state=${state}`)).toBe(state);
  });

  it("falls back to ready for missing, unknown, or injected state values", () => {
    expect(parseTodayViewState("")).toBe("ready");
    expect(parseTodayViewState("?state=unknown")).toBe("ready");
    expect(parseTodayViewState("?state=%3Cscript%3E")).toBe("ready");
  });

  it("never exposes personal data or performs a network request", () => {
    for (const policy of Object.values(todayStatePolicy)) {
      expect(policy.exposesPersonalData).toBe(false);
      expect(policy.makesNetworkRequest).toBe(false);
    }
  });

  it("pauses practice launch while loading or in an unrecovered error", () => {
    expect(todayStatePolicy.loading.canOpenPractice).toBe(false);
    expect(todayStatePolicy.error.canOpenPractice).toBe(false);
    expect(todayStatePolicy.ready.canOpenPractice).toBe(true);
    expect(todayStatePolicy.empty.canOpenPractice).toBe(true);
    expect(todayStatePolicy.offline.canOpenPractice).toBe(true);
  });
});
