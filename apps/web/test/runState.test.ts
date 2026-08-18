import { describe, expect, it } from "vitest";
import {
  PREVIEW_SESSION_KEY,
  clearStoredRun,
  confirmEligibility,
  createInitialRunState,
  formatRemaining,
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

describe("preview run state", () => {
  it("does not start before the 13+ boundary is confirmed", () => {
    const state = createInitialRunState(artifacts[0]);
    expect(state.startedAtMs).toBeNull();
    expect(() => startRun(state, 1_000)).toThrow(/Eligibility/);
  });

  it("starts once and computes a clamped countdown", () => {
    const eligible = confirmEligibility(createInitialRunState(artifacts[0]));
    const started = startRun(eligible, 1_000);
    expect(started.mobileSurface).toBe("evidence");
    expect(startRun(started, 2_000)).toBe(started);
    expect(remainingSeconds(started.startedAtMs, 2_500, 360)).toBe(359);
    expect(remainingSeconds(started.startedAtMs, 999_999, 360)).toBe(0);
    expect(formatRemaining(359)).toBe("5:59");
  });

  it("deduplicates valid pins and bounds private local notes", () => {
    let state = confirmEligibility(createInitialRunState(artifacts[0]));
    state = togglePinnedArtifact(state, "pricing-memo", artifacts);
    expect(state.pinnedArtifactIds).toEqual(["pricing-memo"]);
    state = togglePinnedArtifact(state, "pricing-memo", artifacts);
    expect(state.pinnedArtifactIds).toEqual([]);
    expect(updateNotes(state, "x".repeat(5_000)).notes).toHaveLength(4_000);
  });

  it("fails closed on tampered session data", () => {
    const tampered = {
      ...confirmEligibility(createInitialRunState(artifacts[0])),
      activeArtifactId: "private-answer-key",
    };
    expect(sanitizeRunState(tampered, artifacts)).toBeNull();
  });

  it("can clear a locally selected call without mutating other work", () => {
    const eligible = confirmEligibility(createInitialRunState(artifacts[0]));
    const selected = updateCall(eligible, {
      selectedChoiceId: "pricing-backlash",
      remainingUncertainty: "The call sample is small.",
    });
    const cleared = updateCall(selected, { selectedChoiceId: null });
    expect(cleared.selectedChoiceId).toBeNull();
    expect(cleared.notes).toBe(eligible.notes);
    expect(cleared.remainingUncertainty).toBe("The call sample is small.");
  });

  it("stores only the bounded preview state and can clear it", () => {
    const storage = memoryStorage();
    const state = confirmEligibility(createInitialRunState(artifacts[0]));
    writeStoredRun(storage, state);
    expect(storage.getItem(PREVIEW_SESSION_KEY)).toContain('"eligibility":"eligible"');
    expect(readStoredRun(storage, artifacts[0], artifacts)).toEqual(state);
    clearStoredRun(storage);
    expect(storage.getItem(PREVIEW_SESSION_KEY)).toBeNull();
  });
});
