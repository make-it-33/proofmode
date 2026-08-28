import { describe, expect, it } from "vitest";
import {
  areSelfChecksComplete,
  canPrepareCheckpoint,
  completeLessonSelfCheck,
  demonstrationLessonDraft,
  emptyLessonDraft,
  emptyLessonSelfCheck,
  evaluateLessonDraft,
  lessonFieldLimit,
  lessonStatePolicy,
  lessonViewStates,
  limitLessonField,
  parseLessonViewState,
} from "../src/domain/lessonState";

describe("focused lesson state boundary", () => {
  it.each(lessonViewStates)("accepts the allowlisted %s state", (state) => {
    expect(parseLessonViewState(`?state=${state}`)).toBe(state);
  });

  it("fails closed for missing, unknown, or injected state values", () => {
    expect(parseLessonViewState("")).toBe("ready");
    expect(parseLessonViewState("?state=unknown")).toBe("ready");
    expect(parseLessonViewState("?state=%3Cscript%3E")).toBe("ready");
  });

  it("never stores a draft, exposes personal data, requests the network, or uses AI judgment", () => {
    for (const policy of Object.values(lessonStatePolicy)) {
      expect(policy.storesDraft).toBe(false);
      expect(policy.exposesPersonalData).toBe(false);
      expect(policy.makesNetworkRequest).toBe(false);
      expect(policy.usesAiJudgment).toBe(false);
    }
  });

  it("keeps the bundled lesson editable offline and pauses unsafe states", () => {
    expect(lessonStatePolicy.ready.canEditDraft).toBe(true);
    expect(lessonStatePolicy.offline.canEditDraft).toBe(true);
    expect(lessonStatePolicy.loading.canInteract).toBe(false);
    expect(lessonStatePolicy.error.canInteract).toBe(false);
    expect(lessonStatePolicy.complete.canEditDraft).toBe(false);
  });
});

describe("focused lesson structure check", () => {
  it("reports presence and boundaries without pretending to judge quality", () => {
    expect(evaluateLessonDraft(emptyLessonDraft)).toMatchObject({
      completeSectionCount: 0,
      isStructurallyComplete: false,
    });

    const result = evaluateLessonDraft(demonstrationLessonDraft);
    expect(result.completeSectionCount).toBe(5);
    expect(result.isStructurallyComplete).toBe(true);
    expect(Object.values(result.sections).every(Boolean)).toBe(true);
  });

  it("requires both in-scope and out-of-scope boundaries", () => {
    const result = evaluateLessonDraft({
      ...demonstrationLessonDraft,
      outOfScope: "",
    });
    expect(result.fields.inScope).toBe(true);
    expect(result.fields.outOfScope).toBe(false);
    expect(result.sections.scope).toBe(false);
    expect(result.isStructurallyComplete).toBe(false);
  });

  it("requires learner self-checks before checkpoint preparation", () => {
    expect(areSelfChecksComplete(emptyLessonSelfCheck)).toBe(false);
    expect(
      canPrepareCheckpoint(demonstrationLessonDraft, emptyLessonSelfCheck),
    ).toBe(false);
    expect(
      canPrepareCheckpoint(demonstrationLessonDraft, completeLessonSelfCheck),
    ).toBe(true);
  });

  it("enforces the local field budget deterministically", () => {
    const oversized = "x".repeat(lessonFieldLimit + 40);
    expect(limitLessonField(oversized)).toHaveLength(lessonFieldLimit);
  });
});
