import { describe, expect, it } from "vitest";
import {
  canAdvanceOnboarding,
  emptyOnboardingDraft,
  nextOnboardingStep,
  onboardingStatePolicy,
  onboardingSteps,
  onboardingViewStates,
  parseOnboardingViewState,
  previousOnboardingStep,
  type OnboardingDraft,
} from "../src/domain/onboardingState";

function draft(update: Partial<OnboardingDraft> = {}): OnboardingDraft {
  return { ...emptyOnboardingDraft, ...update };
}

describe("Onboarding privacy and progression boundary", () => {
  it.each(onboardingViewStates)("accepts the allowlisted %s state", (state) => {
    expect(parseOnboardingViewState(`?state=${state}`)).toBe(state);
  });

  it("fails unknown or injected state values closed to ready", () => {
    expect(parseOnboardingViewState("")).toBe("ready");
    expect(parseOnboardingViewState("?state=unknown")).toBe("ready");
    expect(parseOnboardingViewState("?state=%3Cscript%3E")).toBe("ready");
  });

  it("never stores selections, exposes personal data, or requests a network", () => {
    for (const policy of Object.values(onboardingStatePolicy)) {
      expect(policy.storesSelection).toBe(false);
      expect(policy.exposesPersonalData).toBe(false);
      expect(policy.makesNetworkRequest).toBe(false);
    }
  });

  it("requires an explicit age, goal, field, and pace choice", () => {
    expect(canAdvanceOnboarding("promise", draft())).toBe(true);
    expect(canAdvanceOnboarding("age", draft())).toBe(false);
    expect(canAdvanceOnboarding("age", draft({ ageEligibility: "eligible" }))).toBe(true);
    expect(canAdvanceOnboarding("age", draft({ ageEligibility: "under13" }))).toBe(true);
    expect(canAdvanceOnboarding("goal", draft())).toBe(false);
    expect(canAdvanceOnboarding("goal", draft({ goal: "build" }))).toBe(true);
    expect(canAdvanceOnboarding("field", draft())).toBe(false);
    expect(canAdvanceOnboarding("field", draft({ field: "agentic-coding" }))).toBe(true);
    expect(canAdvanceOnboarding("pace", draft())).toBe(false);
    expect(canAdvanceOnboarding("pace", draft({ pace: 10 }))).toBe(true);
    expect(canAdvanceOnboarding("comfort", draft())).toBe(true);
  });

  it("never moves outside the approved step sequence", () => {
    expect(previousOnboardingStep("promise")).toBe("promise");
    expect(nextOnboardingStep("ready")).toBe("ready");
    for (let index = 0; index < onboardingSteps.length - 1; index += 1) {
      expect(nextOnboardingStep(onboardingSteps[index])).toBe(onboardingSteps[index + 1]);
    }
  });
});
