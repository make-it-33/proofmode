import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { useRun } from "../app/RunProvider";
import { ArtifactViewer } from "../components/ArtifactViewer";
import { Brand } from "../components/Brand";
import { artifactById, mission } from "../data/northstar";
import { buildPracticeDebrief } from "../domain/practiceDebrief";
import {
  canLockRun,
  formatRemaining,
  remainingSeconds,
  type GameRound,
} from "../domain/runState";

const roundOrder: Array<{ id: Exclude<GameRound, "result">; index: string; label: string }> = [
  { id: "scout", index: "01", label: "Scout" },
  { id: "challenge", index: "02", label: "Challenge" },
  { id: "lock", index: "03", label: "Lock" },
];

function useCountdown(startedAtMs: number | null, stoppedAtMs: number | null) {
  const [nowMs, setNowMs] = useState(() => stoppedAtMs ?? Date.now());

  useEffect(() => {
    if (startedAtMs === null || stoppedAtMs !== null) {
      if (stoppedAtMs !== null) setNowMs(stoppedAtMs);
      return undefined;
    }
    setNowMs(Date.now());
    const timer = window.setInterval(() => setNowMs(Date.now()), 1_000);
    return () => window.clearInterval(timer);
  }, [startedAtMs, stoppedAtMs]);

  return remainingSeconds(startedAtMs, nowMs, mission.mission.durationSeconds);
}

function RoundProgress({ current }: { current: GameRound }) {
  const currentIndex = current === "result" ? 3 : roundOrder.findIndex((round) => round.id === current);
  return (
    <ol className="round-progress" aria-label="Trial progress">
      {roundOrder.map((round, index) => {
        const active = round.id === current;
        const complete = index < currentIndex || current === "result";
        return (
          <li className={active ? "is-active" : complete ? "is-complete" : undefined} key={round.id}>
            <span>{complete ? "✓" : round.index}</span>
            <strong>{round.label}</strong>
          </li>
        );
      })}
    </ol>
  );
}

function ReadyCase() {
  const { start } = useRun();

  return (
    <div className="arena-public ready-page">
      <header className="arena-public-header">
        <Brand />
        <Link className="quiet-link" to="/">Exit trial</Link>
      </header>
      <main className="ready-arena" id="main-content">
        <section className="ready-main" aria-labelledby="ready-title">
          <div className="ready-status">
            <span>{mission.mission.caseCode}</span>
            <span className="paused-pip">CLOCK PAUSED</span>
          </div>
          <span className="entry-kicker">TODAY’S DECISION TRIAL</span>
          <h1 id="ready-title">Enterprise revenue is down. Find the primary driver.</h1>
          <p>{mission.mission.brief.objective}</p>

          <div className="ready-rounds" aria-label="Three trial rounds">
            {roundOrder.map((round) => (
              <div key={round.id}>
                <span>{round.index}</span>
                <strong>{round.label}</strong>
                <small>
                  {round.id === "scout" && "Find the useful signals"}
                  {round.id === "challenge" && "Test the AI’s move"}
                  {round.id === "lock" && "Commit with proof"}
                </small>
              </div>
            ))}
          </div>

          <button className="arena-button arena-button-primary ready-start" type="button" onClick={start}>
            Start six-minute trial
            <span aria-hidden="true">↗</span>
          </button>
          <p className="safety-note">Private practice. No account, public rank, or authoritative score.</p>
        </section>

        <aside className="signal-preview" aria-labelledby="signal-preview-title">
          <div className="signal-preview-head">
            <div>
              <span>SCOUT QUEUE</span>
              <h2 id="signal-preview-title">{mission.artifacts.length} signals</h2>
            </div>
            <span>LIVE</span>
          </div>
          <ol>
            {mission.artifacts.map((artifact, index) => (
              <li key={artifact.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><strong>{artifact.title}</strong><small>{artifact.kind}</small></div>
                <i aria-hidden="true" />
              </li>
            ))}
          </ol>
          <div className="ai-move-tease">
            <span className="proof-icon proof-claim">AI</span>
            <div><strong>One fallible move is waiting.</strong><small>Challenge the source, not the confidence.</small></div>
          </div>
        </aside>
      </main>
    </div>
  );
}

function ProofChain({ compact = false }: { compact?: boolean }) {
  const { state, openArtifact } = useRun();
  const sourceIds = state.pinnedArtifactIds.slice(0, 3);

  return (
    <section className={compact ? "proof-chain is-compact" : "proof-chain"} aria-labelledby="proof-chain-title">
      <div className="proof-chain-head">
        <div>
          <span>LIVE PROOF</span>
          <h2 id="proof-chain-title">Your chain</h2>
        </div>
        <span>{sourceIds.length} / 2</span>
      </div>

      <div className="chain-stack">
        {sourceIds.length === 0 ? (
          <div className="chain-empty">
            <span className="proof-icon proof-source">S</span>
            <p>Add a signal. Your reasoning path will build here.</p>
          </div>
        ) : (
          sourceIds.map((artifactId, index) => (
            <div className="chain-node" key={artifactId}>
              {index > 0 && <span className="chain-connector" aria-hidden="true" />}
              <button type="button" onClick={() => openArtifact(artifactId)}>
                <span className="proof-icon proof-source">S</span>
                <span><small>SOURCE {String(index + 1).padStart(2, "0")}</small><strong>{artifactById.get(artifactId)?.title}</strong></span>
              </button>
            </div>
          ))
        )}

        {state.round !== "scout" && (
          <div className={`chain-node chain-ai ${state.aiClaimVerdict === "broken" ? "is-broken" : ""}`}>
            <span className="chain-connector" aria-hidden="true" />
            <div>
              <span className="proof-icon proof-claim">AI</span>
              <span><small>AI CLAIM</small><strong>Pricing caused the decline</strong></span>
              <em>{state.aiClaimVerdict === "broken" ? "BROKEN" : "UNVERIFIED"}</em>
            </div>
          </div>
        )}

        {(state.round === "lock" || state.round === "result") && (
          <div className="chain-node chain-decision">
            <span className="chain-connector" aria-hidden="true" />
            <div>
              <span className="proof-icon proof-lock">L</span>
              <span><small>DECISION</small><strong>{state.selectedChoiceId ? "Call prepared" : "Waiting for your call"}</strong></span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function SignalRail() {
  const { state, openArtifact } = useRun();
  return (
    <aside className="signal-rail" aria-labelledby="signal-rail-title">
      <div className="panel-label">
        <div><span>01</span><h2 id="signal-rail-title">Signal queue</h2></div>
        <span>{mission.artifacts.length}</span>
      </div>
      <ol>
        {mission.artifacts.map((artifact, index) => {
          const active = artifact.id === state.activeArtifactId;
          const pinned = state.pinnedArtifactIds.includes(artifact.id);
          return (
            <li key={artifact.id}>
              <button
                type="button"
                className={active ? "is-active" : undefined}
                aria-current={active ? "true" : undefined}
                onClick={() => openArtifact(artifact.id)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span><strong>{artifact.title}</strong><small>{artifact.kind}</small></span>
                <i className={pinned ? "is-pinned" : undefined} aria-label={pinned ? "In proof chain" : "Not in proof chain"} />
              </button>
            </li>
          );
        })}
      </ol>
      <details className="scratchpad">
        <summary>Open scratchpad</summary>
        <NotesField />
      </details>
    </aside>
  );
}

function NotesField() {
  const { state, setNotes } = useRun();
  return (
    <label className="notes-field" htmlFor="case-notes">
      <span>Private notes <small>{state.notes.length}/4000</small></span>
      <textarea
        id="case-notes"
        maxLength={4_000}
        value={state.notes}
        onChange={(event) => setNotes(event.target.value)}
        placeholder="Claims, contradictions, next checks…"
      />
    </label>
  );
}

function ScoutRound() {
  const { state, togglePin, advanceToChallenge } = useRun();
  const artifact = artifactById.get(state.activeArtifactId) ?? mission.artifacts[0];
  const pinned = state.pinnedArtifactIds.includes(artifact.id);

  return (
    <div className="scout-layout">
      <SignalRail />
      <section className="source-stage" aria-labelledby="scout-title">
        <div className="round-intro">
          <div><span className="round-number">ROUND 01</span><h1 id="scout-title">Scout the signal.</h1></div>
          <p>Find evidence that changes the decision—not just data that looks impressive.</p>
        </div>
        <div className="source-card" key={artifact.id}>
          <div className="source-card-toolbar">
            <div><span className="source-kind">{artifact.kind}</span><span>Fictional practice source</span></div>
            <button
              type="button"
              className={pinned ? "proof-toggle is-added" : "proof-toggle"}
              aria-pressed={pinned}
              onClick={() => togglePin(artifact.id)}
            >
              {pinned ? "✓ In proof chain" : "+ Add to proof"}
            </button>
          </div>
          <ArtifactViewer artifact={artifact} />
        </div>
        <div className="round-action-row">
          <p><strong>{state.pinnedArtifactIds.length}</strong> signal{state.pinnedArtifactIds.length === 1 ? "" : "s"} in your chain</p>
          <button
            className="arena-button arena-button-primary"
            type="button"
            disabled={state.pinnedArtifactIds.length === 0}
            onClick={advanceToChallenge}
          >
            Challenge the AI
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </section>
      <ProofChain />
    </div>
  );
}

function ChallengeRound() {
  const { state, inspectAiMove, breakAiMove, advanceToLock, openArtifact } = useRun();
  const firstAiMove = state.aiMessages.find((message) => message.role === "assistant");
  const recovery = state.aiClaimVerdict === "broken";
  const inspecting = state.aiClaimVerdict === "inspecting";
  const activeArtifact = artifactById.get(state.activeArtifactId) ?? mission.artifacts[0];

  return (
    <div className="challenge-layout">
      <section className="challenge-main" aria-labelledby="challenge-title">
        <div className="round-intro on-dark">
          <div><span className="round-number">ROUND 02</span><h1 id="challenge-title">Challenge the move.</h1></div>
          <p>The AI is specific and confident. Decide whether the source can carry the claim.</p>
        </div>

        {!recovery && !inspecting && (
          <article className="ai-move-card">
            <div className="ai-move-head">
              <span className="proof-icon proof-claim">AI</span>
              <div><span>AI MOVE 01</span><strong>Primary-cause hypothesis</strong></div>
              <span className="confidence-pill">74% CONFIDENT</span>
            </div>
            <blockquote>{firstAiMove?.body ?? "The modeled 22% pricing impact looks like the strongest lead."}</blockquote>
            <div className="claim-focus">
              <span>CONSEQUENTIAL CLAIM</span>
              <p>“Pricing backlash is the primary cause because the dashboard shows a 22% impact.”</p>
            </div>
            <button className="arena-button arena-button-primary" type="button" onClick={inspectAiMove}>
              Inspect source behind 22%
              <span aria-hidden="true">↗</span>
            </button>
          </article>
        )}

        {inspecting && (
          <div className="claim-inspection">
            <div className="inspection-banner">
              <span>CHECK 01</span>
              <div><strong>The dashboard is derived.</strong><small>It says the model was not reconciled with contract terms.</small></div>
            </div>
            <div className="inspection-source">
              <div className="source-card-toolbar"><span>OPEN SOURCE</span><button type="button" onClick={() => openArtifact("pricing-memo")}>Open contract memo</button></div>
              <ArtifactViewer artifact={activeArtifact} />
            </div>
            <button className="arena-button arena-button-proof" type="button" onClick={breakAiMove}>
              Check against contract memo
              <span aria-hidden="true">✓</span>
            </button>
          </div>
        )}

        {recovery && (
          <div className="recovery-stage" role="status">
            <div className="recovery-burst" aria-hidden="true"><span>+18</span><small>RECOVERY</small></div>
            <span className="recovery-kicker">CLAIM BROKEN</span>
            <h2>You caught the AI’s bad call.</h2>
            <p>
              The 22% figure was an adoption target, not a price increase. Contract terms show
              existing enterprise renewals were not repriced.
            </p>
            <div className="correction-row">
              <div><span className="proof-icon proof-claim">AI</span><span><small>BEFORE</small><strong>22% price increase</strong></span></div>
              <span aria-hidden="true">→</span>
              <div><span className="proof-icon proof-check">✓</span><span><small>AFTER</small><strong>4.3% for new contracts</strong></span></div>
            </div>
            <button className="arena-button arena-button-primary" type="button" onClick={advanceToLock}>
              Build the final call
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        )}
      </section>
      <ProofChain />
    </div>
  );
}

function LockRound() {
  const {
    state,
    setChoice,
    setFirstAction,
    setRemainingUncertainty,
    openArtifact,
    lockDecision,
  } = useRun();
  const ready = canLockRun(state);

  return (
    <div className="lock-layout">
      <section className="lock-main" aria-labelledby="lock-title">
        <div className="round-intro">
          <div><span className="round-number">ROUND 03</span><h1 id="lock-title">Lock the call.</h1></div>
          <p>Commit to the strongest supported decision and name what could still change it.</p>
        </div>

        <div className="lock-form">
          <fieldset className="cause-grid">
            <legend>Primary cause</legend>
            {mission.choices.map((choice, index) => (
              <label key={choice.id} className={state.selectedChoiceId === choice.id ? "is-selected" : undefined}>
                <input
                  type="radio"
                  name="primary-cause"
                  value={choice.id}
                  checked={state.selectedChoiceId === choice.id}
                  onChange={() => setChoice(choice.id)}
                />
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{choice.label}</strong>
                <i aria-hidden="true" />
              </label>
            ))}
          </fieldset>

          <div className="lock-fields">
            <label htmlFor="first-action">
              <span>First action <small>{state.firstAction.length}/600</small></span>
              <textarea
                id="first-action"
                maxLength={600}
                value={state.firstAction}
                onChange={(event) => setFirstAction(event.target.value)}
                placeholder="What should happen first, and why?"
              />
            </label>
            <label htmlFor="remaining-uncertainty">
              <span>Remaining uncertainty <small>{state.remainingUncertainty.length}/300</small></span>
              <textarea
                id="remaining-uncertainty"
                maxLength={300}
                value={state.remainingUncertainty}
                onChange={(event) => setRemainingUncertainty(event.target.value)}
                placeholder="What evidence could still change your call?"
              />
            </label>
          </div>

          <section className="lock-sources" aria-labelledby="lock-sources-title">
            <div><span>PROOF ATTACHED</span><strong id="lock-sources-title">{state.pinnedArtifactIds.length} sources</strong></div>
            <ul>
              {state.pinnedArtifactIds.map((artifactId) => (
                <li key={artifactId}><button type="button" onClick={() => openArtifact(artifactId)}><span className="proof-icon proof-source">S</span>{artifactById.get(artifactId)?.title}</button></li>
              ))}
            </ul>
          </section>

          <div className="lock-action">
            <div>
              <strong>{ready ? "Ready to lock" : "Complete the decision contract"}</strong>
              <span>1 cause · 1 action · 2 sources · 1 uncertainty</span>
            </div>
            <button className="arena-button arena-button-primary" type="button" disabled={!ready} onClick={lockDecision}>
              Lock decision
              <span aria-hidden="true">⌁</span>
            </button>
          </div>
        </div>
      </section>
      <ProofChain />
    </div>
  );
}

function ResultRound() {
  const navigate = useNavigate();
  const { state, resetPreview } = useRun();
  const result = useMemo(() => buildPracticeDebrief(state), [state]);

  function playAgain() {
    resetPreview();
    navigate("/");
  }

  return (
    <div className="result-layout" aria-labelledby="result-title">
      <section className="result-hero">
        <div className="result-score" aria-label={`${result.overall} practice result`}>
          <span>PRIVATE PRACTICE</span>
          <strong>{result.overall}</strong>
          <small>BEHAVIOR SIGNAL</small>
        </div>
        <div className="result-copy">
          <span className="result-kicker">TRIAL COMPLETE</span>
          <h1 id="result-title">You recovered before the lock.</h1>
          <p>
            This local debrief measures visible actions in the trial. It is not a ranked or
            authoritative correctness score.
          </p>
          <div className="result-actions">
            <button className="arena-button arena-button-primary" type="button" onClick={playAgain}>Run it again <span aria-hidden="true">↗</span></button>
            <Link className="arena-button arena-button-ghost" to="/">Back home</Link>
          </div>
        </div>
      </section>

      <section className="dimension-board" aria-labelledby="dimension-title">
        <div className="section-heading compact"><div><span className="section-index">SIX SIGNALS</span><h2 id="dimension-title">How the run behaved</h2></div><span>Transparent local rules</span></div>
        <div className="dimension-grid">
          {result.dimensions.map((dimension) => (
            <article key={dimension.name}>
              <div><strong>{dimension.name}</strong><span>{dimension.value}</span></div>
              <div className="dimension-track"><i style={{ width: `${dimension.value}%` }} /></div>
              <p>{dimension.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="pivotal-replay" aria-labelledby="replay-title">
        <div className="replay-label"><span>▶</span><div><small>PIVOTAL REPLAY</small><strong id="replay-title">{result.pivotalTitle}</strong></div></div>
        <p>{result.pivotalDetail}</p>
        <div className="replay-chain">
          <div><span className="proof-icon proof-claim">AI</span><strong>22% pricing claim</strong><small>Unverified model output</small></div>
          <span aria-hidden="true">→</span>
          <div><span className="proof-icon proof-source">S</span><strong>Contract memo</strong><small>Primary source check</small></div>
          <span aria-hidden="true">→</span>
          <div><span className="proof-icon proof-check">✓</span><strong>Claim broken</strong><small>Recovery recognized</small></div>
          <span aria-hidden="true">→</span>
          <div><span className="proof-icon proof-lock">L</span><strong>Decision locked</strong><small>Evidence preserved</small></div>
        </div>
      </section>
    </div>
  );
}

function MissionWorkspace() {
  const navigate = useNavigate();
  const { state, resetPreview } = useRun();
  const remaining = useCountdown(state.startedAtMs, state.lockedAtMs);
  const expired = remaining === 0 && state.round !== "result";

  function exitPreview() {
    resetPreview();
    navigate("/");
  }

  return (
    <div className={`arena-run round-${state.round}`}>
      <header className="arena-run-header">
        <div className="run-brand"><Brand compact /><span>{mission.mission.caseCode}</span></div>
        <RoundProgress current={state.round} />
        <div className="run-controls">
          <span className="private-chip">PRIVATE</span>
          <div className={expired ? "run-timer is-expired" : "run-timer"} aria-label={`${formatRemaining(remaining)} remaining`}>
            <small>TIME</small><strong>{formatRemaining(remaining)}</strong>
          </div>
          <button type="button" onClick={exitPreview}>Exit</button>
        </div>
      </header>

      {expired && <div className="expiry-banner" role="status"><strong>Time ended.</strong> Your local work is preserved; no submission was sent.</div>}

      <main className="arena-workspace" id="main-content">
        {state.round === "scout" && <ScoutRound />}
        {state.round === "challenge" && <ChallengeRound />}
        {state.round === "lock" && <LockRound />}
        {state.round === "result" && <ResultRound />}
      </main>
    </div>
  );
}

export function MissionRoute() {
  const { state } = useRun();
  if (state.eligibility !== "eligible") return <Navigate to="/entry" replace />;
  if (state.startedAtMs === null) return <ReadyCase />;
  return <MissionWorkspace />;
}
