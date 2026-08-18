import { describe, expect, it } from "vitest";
import { buildPracticeDebrief } from "../src/domain/practiceDebrief";
import {
  PREVIEW_SESSION_KEY,
  addPinnedArtifact,
  beginChallenge,
  beginLock,
  breakAiClaim,
  clearStoredRun,
  confirmEligibility,
  createInitialRunState,
  formatRemaining,
  lockRun,
  readStoredRun,
  remainingSeconds,
  sanitizeRunState,
  startRun,
  togglePinnedArtifact,
  updateCall,
  updateNotes,
  writeStoredRun,
} from "../src/domain/runState";

const artifacts = ["revenue-export", "renewal-log", "pricing-memo"] as const;

function memoryStorage() {
  const values = new Map<string, string>();
  return {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => values.set(key, value),
    removeItem: (key: string) => values.delete(key),
  };
}

describe("Agent Arena run state", () => {
  it("does not start before the 13+ boundary is confirmed", () => {
    const state = createInitialRunState(artifacts[0]);
    expect(state.startedAtMs).toBeNull();
    expect(state.round).toBe("scout");
    expect(() => startRun(state, 1_000)).toThrow(/Eligibility/);
  });

  it("starts once and computes a clamped countdown", () => {
    const eligible = confirmEligibility(createInitialRunState(artifacts[0]));
    const started = startRun(eligible, 1_000);
    expect(started.round).toBe("scout");
    expect(startRun(started, 2_000)).toBe(started);
    expect(remainingSeconds(started.startedAtMs, 2_500, 360)).toBe(359);
    expect(remainingSeconds(started.startedAtMs, 999_999, 360)).toBe(0);
    expect(formatRemaining(359)).toBe("5:59");
  });

  it("requires proof before Challenge and recovery before Lock", () => {
    let state = startRun(confirmEligibility(createInitialRunState(artifacts[0])), 1_000);
    expect(beginChallenge(state)).toBe(state);
    state = addPinnedArtifact(state, "revenue-export", artifacts);
    state = beginChallenge(state);
    expect(state.round).toBe("challenge");
    expect(beginLock(state)).toBe(state);
    state = breakAiClaim(state);
    expect(beginLock(state).round).toBe("lock");
  });

  it("deduplicates valid proof sources and bounds private notes", () => {
    let state = confirmEligibility(createInitialRunState(artifacts[0]));
    state = addPinnedArtifact(state, "pricing-memo", artifacts);
    expect(addPinnedArtifact(state, "pricing-memo", artifacts)).toBe(state);
    state = togglePinnedArtifact(state, "pricing-memo", artifacts);
    expect(state.pinnedArtifactIds).toEqual([]);
    expect(updateNotes(state, "x".repeat(5_000)).notes).toHaveLength(4_000);
  });

  it("locks only a complete decision contract", () => {
    let state = startRun(confirmEligibility(createInitialRunState(artifacts[0])), 1_000);
    state = addPinnedArtifact(state, "revenue-export", artifacts);
    state = addPinnedArtifact(state, "renewal-log", artifacts);
    state = beginLock(breakAiClaim(beginChallenge(state)));
    expect(lockRun(state, 2_000)).toBe(state);
    state = updateCall(state, {
      selectedChoiceId: "enterprise-renewal-failure",
      firstAction: "Assign one accountable implementation owner today.",
      remainingUncertainty: "The account sample is still small.",
    });
    const locked = lockRun(state, 2_000);
    expect(locked.round).toBe("result");
    expect(locked.lockedAtMs).toBe(2_000);
  });

  it("creates a transparent deterministic practice debrief", () => {
    let state = startRun(confirmEligibility(createInitialRunState(artifacts[0])), 1_000);
    state = addPinnedArtifact(state, "revenue-export", artifacts);
    state = addPinnedArtifact(state, "renewal-log", artifacts);
    state = beginLock(breakAiClaim(beginChallenge(state)));
    state = updateCall(state, {
      selectedChoiceId: "enterprise-renewal-failure",
      firstAction: "Assign one accountable implementation owner today.",
      remainingUncertainty: "The account sample is still small.",
    });
    const result = buildPracticeDebrief(lockRun(state, 2_000));
    expect(result.overall).toBe(86);
    expect(result.dimensions.map((dimension) => dimension.name)).toEqual([
      "Outcome",
      "Verification",
      "Judgment",
      "Efficiency",
      "Communication",
      "Recovery",
    ]);
  });

  it("fails closed on tampered session data", () => {
    const tampered = {
      ...confirmEligibility(createInitialRunState(artifacts[0])),
      activeArtifactId: "private-answer-key",
    };
    expect(sanitizeRunState(tampered, artifacts)).toBeNull();
  });

  it("stores only the bounded preview state and can clear it", () => {
    const storage = memoryStorage();
    const state = confirmEligibility(createInitialRunState(artifacts[0]));
    writeStoredRun(storage, state);
    expect(storage.getItem(PREVIEW_SESSION_KEY)).toContain('"round":"scout"');
    expect(readStoredRun(storage, artifacts[0], artifacts)).toEqual(state);
    clearStoredRun(storage);
    expect(storage.getItem(PREVIEW_SESSION_KEY)).toBeNull();
  });
});
