import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { artifactIds, mission } from "../data/northstar";
import { answerMockAi } from "../domain/mockAi";
import {
  addPinnedArtifact,
  appendAiExchange,
  beginChallenge,
  beginLock,
  breakAiClaim,
  clearStoredRun,
  confirmEligibility,
  createInitialRunState,
  inspectAiClaim,
  lockRun,
  readStoredRun,
  selectArtifact,
  selectMobileSurface,
  selectTool,
  startRun,
  togglePinnedArtifact,
  updateCall,
  updateNotes,
  writeStoredRun,
  type MobileSurface,
  type PreviewRunState,
  type WorkspaceTool,
} from "../domain/runState";

interface RunContextValue {
  state: PreviewRunState;
  confirmAge: () => void;
  rejectAge: () => void;
  start: () => void;
  openArtifact: (artifactId: string) => void;
  togglePin: (artifactId: string) => void;
  setNotes: (notes: string) => void;
  setTool: (tool: WorkspaceTool) => void;
  setMobileSurface: (surface: MobileSurface) => void;
  setChoice: (choiceId: string) => void;
  setFirstAction: (action: string) => void;
  setRemainingUncertainty: (uncertainty: string) => void;
  askAi: (prompt: string) => void;
  advanceToChallenge: () => void;
  inspectAiMove: () => void;
  breakAiMove: () => void;
  advanceToLock: () => void;
  lockDecision: () => void;
  resetPreview: () => void;
}

const RunContext = createContext<RunContextValue | null>(null);

function initialState(): PreviewRunState {
  if (typeof window === "undefined") return createInitialRunState(artifactIds[0]);
  return readStoredRun(window.sessionStorage, artifactIds[0], artifactIds);
}

export function RunProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PreviewRunState>(initialState);

  useEffect(() => {
    if (state.eligibility === "eligible") writeStoredRun(window.sessionStorage, state);
  }, [state]);

  const confirmAge = useCallback(() => {
    setState((current) => confirmEligibility(current));
  }, []);

  const rejectAge = useCallback(() => {
    clearStoredRun(window.sessionStorage);
    setState(createInitialRunState(artifactIds[0]));
  }, []);

  const start = useCallback(() => {
    setState((current) => startRun(current, Date.now()));
  }, []);

  const openArtifact = useCallback((artifactId: string) => {
    setState((current) => selectArtifact(current, artifactId, artifactIds));
  }, []);

  const togglePin = useCallback((artifactId: string) => {
    setState((current) => togglePinnedArtifact(current, artifactId, artifactIds));
  }, []);

  const setNotes = useCallback((notes: string) => {
    setState((current) => updateNotes(current, notes));
  }, []);

  const setTool = useCallback((tool: WorkspaceTool) => {
    setState((current) => selectTool(current, tool));
  }, []);

  const setMobileSurface = useCallback((surface: MobileSurface) => {
    setState((current) => selectMobileSurface(current, surface));
  }, []);

  const setChoice = useCallback((choiceId: string) => {
    if (!mission.choices.some((choice) => choice.id === choiceId)) return;
    setState((current) => updateCall(current, { selectedChoiceId: choiceId }));
  }, []);

  const setFirstAction = useCallback((firstAction: string) => {
    setState((current) => updateCall(current, { firstAction }));
  }, []);

  const setRemainingUncertainty = useCallback((remainingUncertainty: string) => {
    setState((current) => updateCall(current, { remainingUncertainty }));
  }, []);

  const askAi = useCallback((prompt: string) => {
    setState((current) => {
      const assistantTurns = current.aiMessages.filter(
        (message) => message.role === "assistant",
      ).length;
      if (assistantTurns >= mission.ai.maxMessages) return current;
      return appendAiExchange(current, prompt, answerMockAi(prompt, assistantTurns));
    });
  }, []);

  const advanceToChallenge = useCallback(() => {
    setState((current) => {
      const next = beginChallenge(current);
      if (next === current || next.aiMessages.some((message) => message.role === "assistant")) {
        return next;
      }
      const prompt = "What is the strongest hypothesis?";
      return appendAiExchange(next, prompt, answerMockAi(prompt, 0));
    });
  }, []);

  const inspectAiMove = useCallback(() => {
    setState((current) => inspectAiClaim(current, "dashboard"));
  }, []);

  const breakAiMove = useCallback(() => {
    setState((current) => {
      if (current.aiClaimVerdict === "broken") return current;
      const prompt = "Check the 22% claim against the pricing memo";
      const assistantTurns = current.aiMessages.filter(
        (message) => message.role === "assistant",
      ).length;
      let next = addPinnedArtifact(current, "pricing-memo", artifactIds);
      next = appendAiExchange(next, prompt, answerMockAi(prompt, assistantTurns));
      return breakAiClaim(next);
    });
  }, []);

  const advanceToLock = useCallback(() => {
    setState((current) => beginLock(current));
  }, []);

  const lockDecision = useCallback(() => {
    setState((current) => lockRun(current, Date.now()));
  }, []);

  const resetPreview = useCallback(() => {
    clearStoredRun(window.sessionStorage);
    setState(createInitialRunState(artifactIds[0]));
  }, []);

  const value = useMemo<RunContextValue>(
    () => ({
      state,
      confirmAge,
      rejectAge,
      start,
      openArtifact,
      togglePin,
      setNotes,
      setTool,
      setMobileSurface,
      setChoice,
      setFirstAction,
      setRemainingUncertainty,
      askAi,
      advanceToChallenge,
      inspectAiMove,
      breakAiMove,
      advanceToLock,
      lockDecision,
      resetPreview,
    }),
    [
      state,
      confirmAge,
      rejectAge,
      start,
      openArtifact,
      togglePin,
      setNotes,
      setTool,
      setMobileSurface,
      setChoice,
      setFirstAction,
      setRemainingUncertainty,
      askAi,
      advanceToChallenge,
      inspectAiMove,
      breakAiMove,
      advanceToLock,
      lockDecision,
      resetPreview,
    ],
  );

  return <RunContext.Provider value={value}>{children}</RunContext.Provider>;
}

export function useRun(): RunContextValue {
  const value = useContext(RunContext);
  if (!value) throw new Error("useRun must be rendered inside RunProvider.");
  return value;
}
