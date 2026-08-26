import { describe, expect, it } from "vitest";
import {
  learnStatePolicy,
  learnViewStates,
  parseLearnViewState,
} from "../src/domain/learnState";

describe("Learn state boundary", () => {
  it.each(learnViewStates)("accepts the allowlisted %s state", (state) => {
    expect(parseLearnViewState(`?state=${state}`)).toBe(state);
  });

  it("fails closed to ready for missing, unknown, or injected values", () => {
    expect(parseLearnViewState("")).toBe("ready");
    expect(parseLearnViewState("?state=unknown")).toBe("ready");
    expect(parseLearnViewState("?state=%3Cscript%3E")).toBe("ready");
  });

  it("never exposes personal data, requests the network, or claims persisted progress", () => {
    for (const policy of Object.values(learnStatePolicy)) {
      expect(policy.exposesPersonalData).toBe(false);
      expect(policy.makesNetworkRequest).toBe(false);
      expect(policy.persistsProgress).toBe(false);
    }
  });

  it("keeps bundled learning usable offline and pauses unavailable states", () => {
    expect(learnStatePolicy.ready.canInspectLesson).toBe(true);
    expect(learnStatePolicy.offline.canInspectLesson).toBe(true);
    expect(learnStatePolicy.error.canInspectLesson).toBe(false);
    expect(learnStatePolicy.loading.canInspectLesson).toBe(false);
    expect(learnStatePolicy.unavailable.canInspectLesson).toBe(false);
    expect(learnStatePolicy.future.canBrowsePath).toBe(false);
  });
});
