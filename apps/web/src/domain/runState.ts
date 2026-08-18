export const PREVIEW_SESSION_KEY = "proofmode.preview.run.v1";
export const RUN_STATE_VERSION = 1 as const;
export const MAX_NOTES_LENGTH = 4_000;
export const MAX_PROMPT_LENGTH = 500;

export type Eligibility = "unknown" | "eligible";
export type WorkspaceTool = "notes" | "ai" | "call";
export type MobileSurface = "evidence" | "source" | WorkspaceTool;
export type GameRound = "scout" | "challenge" | "lock" | "result";
export type AiClaimVerdict = "unreviewed" | "inspecting" | "broken";

export interface AiMessage {
  id: string;
  role: "user" | "assistant";
  body: string;
  citedArtifactIds: string[];
}

export interface PreviewRunState {
  schemaVersion: typeof RUN_STATE_VERSION;
  eligibility: Eligibility;
  startedAtMs: number | null;
  activeArtifactId: string;
  pinnedArtifactIds: string[];
  notes: string;
  aiMessages: AiMessage[];
  activeTool: WorkspaceTool;
  mobileSurface: MobileSurface;
  selectedChoiceId: string | null;
  firstAction: string;
  remainingUncertainty: string;
  round: GameRound;
  aiClaimVerdict: AiClaimVerdict;
  lockedAtMs: number | null;
}

export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export function createInitialRunState(firstArtifactId: string): PreviewRunState {
  return {
    schemaVersion: RUN_STATE_VERSION,
    eligibility: "unknown",
    startedAtMs: null,
    activeArtifactId: firstArtifactId,
    pinnedArtifactIds: [],
    notes: "",
    aiMessages: [],
    activeTool: "notes",
    mobileSurface: "evidence",
    selectedChoiceId: null,
    firstAction: "",
    remainingUncertainty: "",
    round: "scout",
    aiClaimVerdict: "unreviewed",
    lockedAtMs: null,
  };
}

export function confirmEligibility(state: PreviewRunState): PreviewRunState {
  return { ...state, eligibility: "eligible" };
}

export function startRun(state: PreviewRunState, nowMs: number): PreviewRunState {
  if (state.eligibility !== "eligible") {
    throw new Error("Eligibility must be confirmed before a run starts.");
  }
  if (!Number.isFinite(nowMs) || nowMs <= 0) {
    throw new TypeError("nowMs must be a positive finite number.");
  }
  if (state.startedAtMs !== null) return state;
  return {
    ...state,
    startedAtMs: nowMs,
    round: "scout",
    mobileSurface: "evidence",
  };
}

export function remainingSeconds(
  startedAtMs: number | null,
  nowMs: number,
  durationSeconds: number,
): number {
  if (startedAtMs === null) return durationSeconds;
  const elapsedMs = Math.max(0, nowMs - startedAtMs);
  return Math.max(0, Math.ceil((durationSeconds * 1_000 - elapsedMs) / 1_000));
}

export function formatRemaining(seconds: number): string {
  const safeSeconds = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(safeSeconds / 60);
  const remainder = String(safeSeconds % 60).padStart(2, "0");
  return `${minutes}:${remainder}`;
}

export function selectArtifact(
  state: PreviewRunState,
  artifactId: string,
  artifactIds: readonly string[],
): PreviewRunState {
  if (!artifactIds.includes(artifactId)) return state;
  return { ...state, activeArtifactId: artifactId, mobileSurface: "source" };
}

export function togglePinnedArtifact(
  state: PreviewRunState,
  artifactId: string,
  artifactIds: readonly string[],
): PreviewRunState {
  if (!artifactIds.includes(artifactId)) return state;
  const isPinned = state.pinnedArtifactIds.includes(artifactId);
  return {
    ...state,
    pinnedArtifactIds: isPinned
      ? state.pinnedArtifactIds.filter((id) => id !== artifactId)
      : [...state.pinnedArtifactIds, artifactId],
  };
}

export function addPinnedArtifact(
  state: PreviewRunState,
  artifactId: string,
  artifactIds: readonly string[],
): PreviewRunState {
  if (!artifactIds.includes(artifactId) || state.pinnedArtifactIds.includes(artifactId)) {
    return state;
  }
  return { ...state, pinnedArtifactIds: [...state.pinnedArtifactIds, artifactId] };
}

export function updateNotes(state: PreviewRunState, notes: string): PreviewRunState {
  return { ...state, notes: notes.slice(0, MAX_NOTES_LENGTH) };
}

export function selectTool(state: PreviewRunState, activeTool: WorkspaceTool): PreviewRunState {
  return { ...state, activeTool, mobileSurface: activeTool };
}

export function selectMobileSurface(
  state: PreviewRunState,
  mobileSurface: MobileSurface,
): PreviewRunState {
  const activeTool: WorkspaceTool = ["notes", "ai", "call"].includes(mobileSurface)
    ? (mobileSurface as WorkspaceTool)
    : state.activeTool;
  return { ...state, mobileSurface, activeTool };
}

export function beginChallenge(state: PreviewRunState): PreviewRunState {
  if (state.startedAtMs === null || state.pinnedArtifactIds.length === 0) return state;
  return { ...state, round: "challenge", activeTool: "ai", mobileSurface: "ai" };
}

export function inspectAiClaim(state: PreviewRunState, artifactId: string): PreviewRunState {
  if (state.round !== "challenge") return state;
  return {
    ...state,
    aiClaimVerdict: state.aiClaimVerdict === "broken" ? "broken" : "inspecting",
    activeArtifactId: artifactId,
    mobileSurface: "source",
  };
}

export function breakAiClaim(state: PreviewRunState): PreviewRunState {
  if (state.round !== "challenge") return state;
  return { ...state, aiClaimVerdict: "broken", activeTool: "ai", mobileSurface: "ai" };
}

export function beginLock(state: PreviewRunState): PreviewRunState {
  if (state.round !== "challenge" || state.aiClaimVerdict !== "broken") return state;
  return { ...state, round: "lock", activeTool: "call", mobileSurface: "call" };
}

export function updateCall(
  state: PreviewRunState,
  patch: {
    selectedChoiceId?: string | null;
    firstAction?: string;
    remainingUncertainty?: string;
  },
): PreviewRunState {
  return {
    ...state,
    selectedChoiceId:
      patch.selectedChoiceId === undefined ? state.selectedChoiceId : patch.selectedChoiceId,
    firstAction:
      patch.firstAction === undefined ? state.firstAction : patch.firstAction.slice(0, 600),
    remainingUncertainty:
      patch.remainingUncertainty === undefined
        ? state.remainingUncertainty
        : patch.remainingUncertainty.slice(0, 300),
  };
}

export function canLockRun(state: PreviewRunState): boolean {
  return Boolean(
    state.round === "lock" &&
      state.selectedChoiceId &&
      state.firstAction.trim().length >= 12 &&
      state.remainingUncertainty.trim().length >= 8 &&
      state.pinnedArtifactIds.length >= 2,
  );
}

export function lockRun(state: PreviewRunState, nowMs: number): PreviewRunState {
  if (!Number.isFinite(nowMs) || nowMs <= 0) {
    throw new TypeError("nowMs must be a positive finite number.");
  }
  if (!canLockRun(state)) return state;
  return { ...state, round: "result", lockedAtMs: nowMs, mobileSurface: "call" };
}

export function appendAiExchange(
  state: PreviewRunState,
  prompt: string,
  answer: { body: string; citedArtifactIds: string[] },
): PreviewRunState {
  const cleanPrompt = prompt.trim().slice(0, MAX_PROMPT_LENGTH);
  if (!cleanPrompt) return state;
  const turn = Math.floor(state.aiMessages.length / 2) + 1;
  return {
    ...state,
    aiMessages: [
      ...state.aiMessages,
      { id: `user-${turn}`, role: "user", body: cleanPrompt, citedArtifactIds: [] },
      {
        id: `assistant-${turn}`,
        role: "assistant",
        body: answer.body,
        citedArtifactIds: [...answer.citedArtifactIds],
      },
    ],
  };
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}

function isFiniteNumberOrNull(value: unknown): value is number | null {
  return value === null || (typeof value === "number" && Number.isFinite(value));
}

export function sanitizeRunState(
  value: unknown,
  artifactIds: readonly string[],
): PreviewRunState | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const candidate = value as Partial<PreviewRunState>;
  if (candidate.schemaVersion !== RUN_STATE_VERSION) return null;
  if (candidate.eligibility !== "eligible") return null;
  if (!isFiniteNumberOrNull(candidate.startedAtMs)) return null;
  if (typeof candidate.activeArtifactId !== "string") return null;
  if (!artifactIds.includes(candidate.activeArtifactId)) return null;
  if (!isStringArray(candidate.pinnedArtifactIds)) return null;
  const pinnedArtifactIds = candidate.pinnedArtifactIds.filter(
    (id, index, all) => artifactIds.includes(id) && all.indexOf(id) === index,
  );
  if (typeof candidate.notes !== "string") return null;
  if (!Array.isArray(candidate.aiMessages)) return null;
  if (!["notes", "ai", "call"].includes(candidate.activeTool ?? "")) return null;
  if (!["evidence", "source", "notes", "ai", "call"].includes(candidate.mobileSurface ?? "")) {
    return null;
  }

  const aiMessages = candidate.aiMessages
    .filter(
      (message): message is AiMessage =>
        Boolean(message) &&
        typeof message.id === "string" &&
        (message.role === "user" || message.role === "assistant") &&
        typeof message.body === "string" &&
        isStringArray(message.citedArtifactIds),
    )
    .slice(0, 12)
    .map((message) => ({
      ...message,
      body: message.body.slice(0, 2_000),
      citedArtifactIds: message.citedArtifactIds.filter((id) => artifactIds.includes(id)),
    }));

  const round: GameRound = ["scout", "challenge", "lock", "result"].includes(
    candidate.round ?? "",
  )
    ? (candidate.round as GameRound)
    : "scout";
  const aiClaimVerdict: AiClaimVerdict = ["unreviewed", "inspecting", "broken"].includes(
    candidate.aiClaimVerdict ?? "",
  )
    ? (candidate.aiClaimVerdict as AiClaimVerdict)
    : "unreviewed";
  const lockedAtMs = isFiniteNumberOrNull(candidate.lockedAtMs) ? candidate.lockedAtMs : null;

  return {
    schemaVersion: RUN_STATE_VERSION,
    eligibility: "eligible",
    startedAtMs: candidate.startedAtMs,
    activeArtifactId: candidate.activeArtifactId,
    pinnedArtifactIds,
    notes: candidate.notes.slice(0, MAX_NOTES_LENGTH),
    aiMessages,
    activeTool: candidate.activeTool as WorkspaceTool,
    mobileSurface: candidate.mobileSurface as MobileSurface,
    selectedChoiceId:
      typeof candidate.selectedChoiceId === "string" ? candidate.selectedChoiceId : null,
    firstAction: typeof candidate.firstAction === "string" ? candidate.firstAction.slice(0, 600) : "",
    remainingUncertainty:
      typeof candidate.remainingUncertainty === "string"
        ? candidate.remainingUncertainty.slice(0, 300)
        : "",
    round: round === "result" && lockedAtMs === null ? "lock" : round,
    aiClaimVerdict,
    lockedAtMs,
  };
}

export function readStoredRun(
  storage: StorageLike,
  firstArtifactId: string,
  artifactIds: readonly string[],
): PreviewRunState {
  const fallback = createInitialRunState(firstArtifactId);
  try {
    const serialized = storage.getItem(PREVIEW_SESSION_KEY);
    if (!serialized) return fallback;
    return sanitizeRunState(JSON.parse(serialized), artifactIds) ?? fallback;
  } catch {
    return fallback;
  }
}

export function writeStoredRun(storage: StorageLike, state: PreviewRunState): void {
  storage.setItem(PREVIEW_SESSION_KEY, JSON.stringify(state));
}

export function clearStoredRun(storage: StorageLike): void {
  storage.removeItem(PREVIEW_SESSION_KEY);
}
