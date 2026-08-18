import { type FormEvent, useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { useRun } from "../app/RunProvider";
import { ArtifactViewer } from "../components/ArtifactViewer";
import { Brand } from "../components/Brand";
import { artifactById, mission } from "../data/northstar";
import { formatRemaining, remainingSeconds, type MobileSurface } from "../domain/runState";

function useCountdown(startedAtMs: number | null) {
  const [nowMs, setNowMs] = useState(() => Date.now());

  useEffect(() => {
    if (startedAtMs === null) return undefined;
    setNowMs(Date.now());
    const timer = window.setInterval(() => setNowMs(Date.now()), 1_000);
    return () => window.clearInterval(timer);
  }, [startedAtMs]);

  return remainingSeconds(startedAtMs, nowMs, mission.mission.durationSeconds);
}

function ReadyCase() {
  const { start } = useRun();
  const contract = [...mission.mission.brief.submissionContract, "remaining uncertainty"];

  return (
    <div className="public-shell ready-shell">
      <header className="public-header">
        <Brand />
        <Link className="text-link" to="/">
          Exit preview
        </Link>
      </header>
      <main className="ready-layout" id="main-content">
        <section className="ready-brief" aria-labelledby="ready-title">
          <div className="ready-kicker">
            <span>{mission.mission.caseCode}</span>
            <span>Clock paused</span>
          </div>
          <p className="eyebrow">Decision brief</p>
          <h1 id="ready-title">Enterprise revenue is down. Find the primary driver.</h1>
          <p className="ready-objective">{mission.mission.brief.objective}</p>

          <div className="submission-contract">
            <span>Your call must include</span>
            <ul>
              {contract.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <button className="button button-primary button-wide" type="button" onClick={start}>
            Start six-minute case
            <span aria-hidden="true">→</span>
          </button>
          <p className="fine-print">
            The timer begins only when you press Start. This fixture is private and not ranked.
          </p>
        </section>

        <aside className="source-index" aria-labelledby="source-index-title">
          <div className="source-index-header">
            <p className="eyebrow">Evidence index</p>
            <span>{mission.artifacts.length} files</span>
          </div>
          <h2 id="source-index-title">What you’ll inspect</h2>
          <ol>
            {mission.artifacts.map((artifact, index) => (
              <li key={artifact.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{artifact.title}</strong>
                  <small>{artifact.kind}</small>
                </div>
              </li>
            ))}
          </ol>
          <div className="ai-warning">
            <span aria-hidden="true">AI</span>
            <p>
              Optional and fallible. It can suggest a hypothesis, but it cannot see the answer
              or judge your work.
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
}

function EvidenceRail() {
  const { state, openArtifact, togglePin } = useRun();

  return (
    <aside className="workspace-column evidence-rail" aria-label="Evidence files">
      <div className="column-heading">
        <div>
          <span className="column-index">01</span>
          <h2>Evidence</h2>
        </div>
        <span>{state.pinnedArtifactIds.length} pinned</span>
      </div>
      <ol className="evidence-list">
        {mission.artifacts.map((artifact, index) => {
          const active = artifact.id === state.activeArtifactId;
          const pinned = state.pinnedArtifactIds.includes(artifact.id);
          return (
            <li className={active ? "is-active" : undefined} key={artifact.id}>
              <button
                className="evidence-open"
                type="button"
                onClick={() => openArtifact(artifact.id)}
                aria-current={active ? "true" : undefined}
              >
                <span className="evidence-number">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <strong>{artifact.title}</strong>
                  <small>{artifact.kind}</small>
                </span>
              </button>
              <button
                className="pin-button"
                type="button"
                aria-label={`${pinned ? "Unpin" : "Pin"} ${artifact.title}`}
                aria-pressed={pinned}
                onClick={() => togglePin(artifact.id)}
              >
                <span aria-hidden="true">{pinned ? "◆" : "◇"}</span>
              </button>
            </li>
          );
        })}
      </ol>
      <p className="rail-note">Open primary records before trusting a modeled summary.</p>
    </aside>
  );
}

function SourceReader() {
  const { state, togglePin } = useRun();
  const artifact = artifactById.get(state.activeArtifactId) ?? mission.artifacts[0];
  const pinned = state.pinnedArtifactIds.includes(artifact.id);

  return (
    <section className="workspace-column source-reader" aria-label="Open evidence source">
      <div className="column-heading source-heading">
        <div>
          <span className="column-index">02</span>
          <h2>Source</h2>
        </div>
        <button
          className="source-pin"
          type="button"
          aria-pressed={pinned}
          onClick={() => togglePin(artifact.id)}
        >
          <span aria-hidden="true">{pinned ? "◆" : "◇"}</span>
          {pinned ? "Pinned" : "Pin source"}
        </button>
      </div>
      <div className="paper-wrap" key={artifact.id}>
        <ArtifactViewer artifact={artifact} />
      </div>
      <footer className="source-footer">
        <span>Fictional practice data</span>
        <span>{artifact.id}</span>
      </footer>
    </section>
  );
}

function NotesTool() {
  const { state, setNotes } = useRun();
  return (
    <section className="tool-content">
      <label className="field-label" htmlFor="case-notes">
        Working notes
        <span>{state.notes.length}/4000</span>
      </label>
      <textarea
        id="case-notes"
        maxLength={4_000}
        value={state.notes}
        onChange={(event) => setNotes(event.target.value)}
        placeholder="Capture claims, contradictions, and questions…"
      />
      <div className="local-note">
        <span aria-hidden="true">⌁</span>
        <p>Saved only in this browser tab. Notes are not scored by length or style.</p>
      </div>
    </section>
  );
}

function AiTool() {
  const { state, askAi, openArtifact, setMobileSurface } = useRun();
  const [prompt, setPrompt] = useState("");
  const assistantTurns = state.aiMessages.filter((message) => message.role === "assistant").length;
  const atLimit = assistantTurns >= mission.ai.maxMessages;

  function submitPrompt(event: FormEvent) {
    event.preventDefault();
    if (!prompt.trim() || atLimit) return;
    askAi(prompt);
    setPrompt("");
  }

  function openCitation(artifactId: string) {
    openArtifact(artifactId);
    setMobileSurface("source");
  }

  return (
    <section className="tool-content ai-tool">
      <div className="ai-context">
        <span>FALLIBLE MOCK</span>
        <p>Useful for hypotheses. Never the judge.</p>
      </div>
      <div className="ai-thread" aria-live="polite">
        {state.aiMessages.length === 0 ? (
          <div className="ai-empty">
            <strong>AI starts blank.</strong>
            <p>Ask for a hypothesis, a counterargument, or a source to check.</p>
            <button type="button" onClick={() => setPrompt("What is the strongest hypothesis?")}>
              Try a hypothesis
            </button>
          </div>
        ) : (
          state.aiMessages.map((message) => (
            <article className={`ai-message ai-message-${message.role}`} key={message.id}>
              <span>{message.role === "assistant" ? "AI" : "You"}</span>
              <p>{message.body}</p>
              {message.citedArtifactIds.length > 0 && (
                <div className="citation-row" aria-label="AI citations">
                  {message.citedArtifactIds.map((artifactId) => (
                    <button type="button" key={artifactId} onClick={() => openCitation(artifactId)}>
                      {artifactById.get(artifactId)?.title ?? artifactId}
                    </button>
                  ))}
                </div>
              )}
            </article>
          ))
        )}
      </div>
      <form className="ai-form" onSubmit={submitPrompt}>
        <label className="sr-only" htmlFor="ai-prompt">
          Ask the optional mock AI
        </label>
        <textarea
          id="ai-prompt"
          maxLength={500}
          rows={3}
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
          placeholder={atLimit ? "AI message limit reached" : "Ask AI, then verify what matters…"}
          disabled={atLimit}
        />
        <div>
          <small>
            {assistantTurns}/{mission.ai.maxMessages} replies
          </small>
          <button
            className="button button-compact"
            type="submit"
            disabled={!prompt.trim() || atLimit}
          >
            Ask AI
          </button>
        </div>
      </form>
      <p className="ai-privacy">{mission.ai.privacyNotice}</p>
    </section>
  );
}

function CallTool() {
  const {
    state,
    setChoice,
    setFirstAction,
    setRemainingUncertainty,
    openArtifact,
    setMobileSurface,
  } = useRun();
  const [saved, setSaved] = useState(false);
  const ready = Boolean(
    state.selectedChoiceId &&
      state.firstAction.trim().length >= 12 &&
      state.remainingUncertainty.trim().length >= 8 &&
      state.pinnedArtifactIds.length >= 2,
  );

  useEffect(() => setSaved(false), [
    state.selectedChoiceId,
    state.firstAction,
    state.remainingUncertainty,
    state.pinnedArtifactIds,
  ]);

  function openCitation(artifactId: string) {
    openArtifact(artifactId);
    setMobileSurface("source");
  }

  return (
    <section className="tool-content call-tool">
      <fieldset>
        <legend>Primary cause</legend>
        {mission.choices.map((choice) => (
          <label className="choice-row" key={choice.id}>
            <input
              type="radio"
              name="primary-cause"
              value={choice.id}
              checked={state.selectedChoiceId === choice.id}
              onChange={() => setChoice(choice.id)}
            />
            <span>{choice.label}</span>
          </label>
        ))}
      </fieldset>

      <label className="field-label" htmlFor="first-action">
        First action
      </label>
      <textarea
        id="first-action"
        maxLength={600}
        rows={5}
        value={state.firstAction}
        onChange={(event) => setFirstAction(event.target.value)}
        placeholder="What should happen first, and why?"
      />

      <label className="field-label" htmlFor="remaining-uncertainty">
        Remaining uncertainty
      </label>
      <textarea
        id="remaining-uncertainty"
        className="uncertainty-field"
        maxLength={300}
        rows={3}
        value={state.remainingUncertainty}
        onChange={(event) => setRemainingUncertainty(event.target.value)}
        placeholder="What could still change your call?"
      />

      <div className="call-sources">
        <div>
          <strong>Sources</strong>
          <span>{state.pinnedArtifactIds.length}/2 minimum</span>
        </div>
        {state.pinnedArtifactIds.length === 0 ? (
          <p>Pin evidence before making the call.</p>
        ) : (
          <ul>
            {state.pinnedArtifactIds.map((artifactId) => (
              <li key={artifactId}>
                <button type="button" onClick={() => openCitation(artifactId)}>
                  {artifactById.get(artifactId)?.title ?? artifactId}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        className="button button-primary button-wide"
        type="button"
        disabled={!ready}
        onClick={() => setSaved(true)}
      >
        Save private draft
      </button>
      <p className="draft-status" role="status">
        {saved
          ? "Draft saved in this tab. No score was created."
          : "Trusted submission and scoring arrive in the next verified slice."}
      </p>
    </section>
  );
}

function ToolsPanel() {
  const { state, setTool } = useRun();
  const tools = [
    ["notes", "Notes"],
    ["ai", "Ask AI"],
    ["call", "My call"],
  ] as const;

  return (
    <aside className="workspace-column tools-panel" aria-label="Mission tools">
      <div className="column-heading tools-heading">
        <div>
          <span className="column-index">03</span>
          <h2>Workspace</h2>
        </div>
        <span>Local</span>
      </div>
      <div className="tool-tabs" role="tablist" aria-label="Workspace tools">
        {tools.map(([id, label]) => (
          <button
            id={`${id}-tab`}
            type="button"
            role="tab"
            aria-selected={state.activeTool === id}
            aria-controls={`${id}-panel`}
            onClick={() => setTool(id)}
            key={id}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="tool-panel-stack">
        <div
          id="notes-panel"
          className="tool-panel-body"
          role="tabpanel"
          aria-labelledby="notes-tab"
          hidden={state.activeTool !== "notes"}
        >
          {state.activeTool === "notes" && <NotesTool />}
        </div>
        <div
          id="ai-panel"
          className="tool-panel-body"
          role="tabpanel"
          aria-labelledby="ai-tab"
          hidden={state.activeTool !== "ai"}
        >
          {state.activeTool === "ai" && <AiTool />}
        </div>
        <div
          id="call-panel"
          className="tool-panel-body"
          role="tabpanel"
          aria-labelledby="call-tab"
          hidden={state.activeTool !== "call"}
        >
          {state.activeTool === "call" && <CallTool />}
        </div>
      </div>
    </aside>
  );
}

function MobileNav() {
  const { state, setMobileSurface } = useRun();
  const items: Array<[MobileSurface, string, string]> = [
    ["evidence", "Files", "01"],
    ["source", "Source", "02"],
    ["notes", "Notes", "N"],
    ["ai", "AI", "AI"],
    ["call", "Call", "03"],
  ];
  return (
    <nav className="mobile-nav" aria-label="Mission surfaces">
      {items.map(([surface, label, marker]) => (
        <button
          type="button"
          key={surface}
          aria-current={state.mobileSurface === surface ? "page" : undefined}
          onClick={() => setMobileSurface(surface)}
        >
          <span aria-hidden="true">{marker}</span>
          {label}
        </button>
      ))}
    </nav>
  );
}

function MissionWorkspace() {
  const navigate = useNavigate();
  const { state, resetPreview } = useRun();
  const remaining = useCountdown(state.startedAtMs);
  const expired = remaining === 0;

  function exitPreview() {
    resetPreview();
    navigate("/");
  }

  return (
    <div className="mission-shell">
      <header className="mission-header">
        <Brand compact />
        <div className="mission-identity">
          <span>{mission.mission.caseCode}</span>
          <strong>Enterprise decline</strong>
        </div>
        <div className="run-status">
          <span className="preview-flag">Private preview</span>
          <div
            className={expired ? "timer is-expired" : "timer"}
            aria-label={`${formatRemaining(remaining)} remaining`}
          >
            <small>TIME</small>
            <strong>{formatRemaining(remaining)}</strong>
          </div>
          <button type="button" className="exit-button" onClick={exitPreview}>
            Exit
          </button>
        </div>
      </header>

      {expired && (
        <div className="expiry-banner" role="status">
          <strong>Time ended.</strong> Your local notes and draft are preserved. No submission was
          sent.
        </div>
      )}

      <main
        className="mission-workspace"
        id="main-content"
        data-mobile-surface={state.mobileSurface}
      >
        <EvidenceRail />
        <SourceReader />
        <ToolsPanel />
      </main>
      <MobileNav />
    </div>
  );
}

export function MissionRoute() {
  const { state } = useRun();
  if (state.eligibility !== "eligible") return <Navigate to="/entry" replace />;
  if (state.startedAtMs === null) return <ReadyCase />;
  return <MissionWorkspace />;
}
