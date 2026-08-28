import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import {
  areSelfChecksComplete,
  canPrepareCheckpoint,
  completeLessonSelfCheck,
  demonstrationLessonDraft,
  emptyLessonDraft,
  emptyLessonSelfCheck,
  evaluateLessonDraft,
  incompleteLessonDraft,
  lessonFieldLimit,
  lessonStatePolicy,
  limitLessonField,
  parseLessonViewState,
  type LessonDraft,
  type LessonDraftField,
  type LessonSectionId,
  type LessonSelfCheck,
  type LessonViewState,
} from "../domain/lessonState";

type LessonPhase = "compose" | "self-check" | "complete";

const sectionLabels: Record<LessonSectionId, string> = {
  objective: "Objective",
  scope: "Scope",
  constraints: "Constraints",
  evidence: "Evidence",
  doneCriteria: "Done criteria",
};

const fields: ReadonlyArray<{
  name: LessonDraftField;
  label: string;
  guidance: string;
  placeholder: string;
  section: LessonSectionId;
}> = [
  {
    name: "objective",
    label: "Objective",
    guidance: "Name the user-visible outcome, not the activity the agent performs.",
    placeholder: "What should a person be able to observe when this works?",
    section: "objective",
  },
  {
    name: "inScope",
    label: "In scope",
    guidance: "Identify the smallest surface the agent is allowed to change.",
    placeholder: "Which files, components, or behaviours may change?",
    section: "scope",
  },
  {
    name: "outOfScope",
    label: "Out of scope",
    guidance: "Protect nearby systems from accidental expansion.",
    placeholder: "What must remain untouched?",
    section: "scope",
  },
  {
    name: "constraints",
    label: "Constraints",
    guidance: "Carry forward safety, compatibility, access, time, and cost boundaries.",
    placeholder: "Which boundaries must the work respect?",
    section: "constraints",
  },
  {
    name: "evidence",
    label: "Evidence",
    guidance: "Ask for checks and artifacts you can inspect yourself.",
    placeholder: "Which checks, views, or diffs will support acceptance?",
    section: "evidence",
  },
  {
    name: "doneCriteria",
    label: "Done criteria",
    guidance: "Describe the observable finish line and a safe rollback boundary.",
    placeholder: "What must be true before you accept the work?",
    section: "doneCriteria",
  },
] as const;

const selfChecks: ReadonlyArray<{
  name: keyof LessonSelfCheck;
  title: string;
  copy: string;
}> = [
  {
    name: "outcomeObservable",
    title: "The objective is observable",
    copy: "Someone can inspect the result without guessing what “better” means.",
  },
  {
    name: "scopeBounded",
    title: "The change boundary has two sides",
    copy: "The agent knows both what may change and what must stay untouched.",
  },
  {
    name: "constraintsGrounded",
    title: "Constraints come from the source",
    copy: "The brief carries forward compatibility, access, safety, and time limits.",
  },
  {
    name: "evidenceExecutable",
    title: "The evidence can actually be checked",
    copy: "The requested checks are specific enough for another person to run or inspect.",
  },
  {
    name: "finishLineClear",
    title: "The finish line supports a decision",
    copy: "Acceptance and rollback can be explained before implementation begins.",
  },
] as const;

function initialDraft(state: LessonViewState): LessonDraft {
  if (state === "incomplete") return { ...incompleteLessonDraft };
  if (state === "checkpoint" || state === "complete") {
    return { ...demonstrationLessonDraft };
  }
  return { ...emptyLessonDraft };
}

function initialPhase(state: LessonViewState): LessonPhase {
  if (state === "checkpoint") return "self-check";
  if (state === "complete") return "complete";
  return "compose";
}

function LessonBrand() {
  return (
    <Link className="today-brand" to="/app" aria-label="ProofMode Today">
      <span className="today-brand-mark" aria-hidden="true">
        <span />
        <i />
      </span>
      <span className="today-brand-copy">
        <strong>ProofMode</strong>
        <small>Practice with proof</small>
      </span>
    </Link>
  );
}

function LessonSidebar({ phase }: { phase: LessonPhase }) {
  const activeIndex = phase === "compose" ? 1 : phase === "self-check" ? 2 : 3;
  const steps = ["Read the source", "Build the brief", "Self-check", "Next practice"];

  return (
    <aside className="today-sidebar lesson-sidebar">
      <LessonBrand />
      <Link className="lesson-back-link" to="/app/learn/agentic-coding">
        <span aria-hidden="true">←</span> Agentic Coding path
      </Link>
      <div className="lesson-sidebar-heading">
        <span>FRAME · LESSON 01</span>
        <strong>Outcome before delegation</strong>
      </div>
      <nav aria-label="Lesson progress">
        <ol className="lesson-step-list">
          {steps.map((step, index) => (
            <li
              className={index < activeIndex ? "is-complete" : index === activeIndex ? "is-current" : ""}
              key={step}
            >
              <span aria-hidden="true">{index < activeIndex ? "✓" : String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
              {index === activeIndex ? <small>Current</small> : null}
            </li>
          ))}
        </ol>
      </nav>
      <div className="today-sidebar-boundary">
        <span className="today-private-dot" aria-hidden="true" />
        <div>
          <strong>Temporary lesson draft</strong>
          <small>No account · no save · no AI judgment</small>
        </div>
      </div>
    </aside>
  );
}

function LessonStateBanner({
  state,
  onRetry,
}: {
  state: LessonViewState;
  onRetry: () => void;
}) {
  if (state === "offline") {
    return (
      <div className="lesson-state-banner is-offline" role="status">
        <div>
          <strong>You’re offline.</strong>
          <span>The source, builder, hint, and self-check are bundled and remain usable.</span>
        </div>
        <b>Offline-safe</b>
      </div>
    );
  }
  if (state === "error") {
    return (
      <div className="lesson-state-banner is-error" role="alert">
        <div>
          <strong>The lesson could not be prepared.</strong>
          <span>No draft was sent or saved. Retrying the local lesson is safe.</span>
        </div>
        <button type="button" onClick={onRetry}>Try again</button>
      </div>
    );
  }
  if (state === "checkpoint" || state === "complete") {
    return (
      <div className="lesson-state-banner is-fixture" role="status">
        <div>
          <strong>{state === "checkpoint" ? "Checkpoint-ready demonstration." : "Complete-state demonstration."}</strong>
          <span>This bundled fixture explains the state. It is not your saved work or progress.</span>
        </div>
        <b>Preview fixture</b>
      </div>
    );
  }
  return null;
}

function LoadingLesson() {
  return (
    <section className="lesson-loading" aria-busy="true" aria-label="Loading focused lesson" role="status">
      <span className="sr-only">Loading the bundled lesson. No draft has started.</span>
      <div><i /><i /><i /><i /></div>
      <div><i /><i /><i /><i /><i /></div>
      <div><i /><i /><i /></div>
    </section>
  );
}

function SourcePanel() {
  return (
    <aside className="lesson-source" aria-labelledby="lesson-source-title">
      <span className="lesson-kicker on-paper">SOURCE · BUNDLED SCENARIO</span>
      <h2 id="lesson-source-title">What the agent would receive</h2>
      <blockquote>“Make the weekly dashboard better.”</blockquote>
      <p className="lesson-source-warning">The request names activity, but not a decision-ready outcome.</p>
      <dl>
        <div><dt>User signal</dt><dd>Weekly labels overlap at 390px and comparison takes too long.</dd></div>
        <div><dt>Allowed surface</dt><dd><code>DashboardSummary.tsx</code> and <code>summary.css</code></dd></div>
        <div><dt>Must survive</dt><dd>API shape, keyboard semantics, empty state, and error state.</dd></div>
        <div><dt>Evidence available</dt><dd>Diff, checks, and visual inspection at 390px and 1440px.</dd></div>
      </dl>
      <div className="lesson-source-job">
        <strong>Your job</strong>
        <p>Turn this source into a brief another agent can act on—and you can later verify.</p>
      </div>
    </aside>
  );
}

function BriefField({
  draft,
  field,
  invalid,
  onChange,
}: {
  draft: LessonDraft;
  field: (typeof fields)[number];
  invalid: boolean;
  onChange: (name: LessonDraftField, value: string) => void;
}) {
  const guidanceId = `${field.name}-guidance`;
  const statusId = `${field.name}-status`;
  return (
    <div className={`lesson-field${invalid ? " has-error" : ""}`}>
      <div className="lesson-field-heading">
        <label htmlFor={field.name}>{field.label}</label>
        <span>{draft[field.name].length}/{lessonFieldLimit}</span>
      </div>
      <textarea
        aria-describedby={`${guidanceId}${invalid ? ` ${statusId}` : ""}`}
        aria-invalid={invalid}
        id={field.name}
        maxLength={lessonFieldLimit}
        onChange={(event) => onChange(field.name, event.target.value)}
        placeholder={field.placeholder}
        rows={3}
        spellCheck="true"
        value={draft[field.name]}
      />
      <small id={guidanceId}>{field.guidance}</small>
      {invalid ? <span className="lesson-field-error" id={statusId}>Add enough detail for this boundary to be inspected.</span> : null}
    </div>
  );
}

function ContractPreview({
  draft,
  structure,
}: {
  draft: LessonDraft;
  structure: ReturnType<typeof evaluateLessonDraft>;
}) {
  const summaries: ReadonlyArray<{ id: LessonSectionId; value: string }> = [
    { id: "objective", value: draft.objective },
    {
      id: "scope",
      value: [draft.inScope && `May change: ${draft.inScope}`, draft.outOfScope && `Must not change: ${draft.outOfScope}`].filter(Boolean).join("\n"),
    },
    { id: "constraints", value: draft.constraints },
    { id: "evidence", value: draft.evidence },
    { id: "doneCriteria", value: draft.doneCriteria },
  ];

  return (
    <aside className="lesson-contract-preview" aria-labelledby="lesson-contract-preview-title">
      <div className="lesson-contract-progress">
        <span className="lesson-kicker">LIVE CONTRACT · LOCAL</span>
        <h2 id="lesson-contract-preview-title">Can this brief be verified?</h2>
        <progress aria-label="Brief structure coverage" max={5} value={structure.completeSectionCount} />
        <small>{structure.completeSectionCount} of 5 sections structurally present</small>
      </div>
      <ol>
        {summaries.map((item, index) => (
          <li className={structure.sections[item.id] ? "is-present" : ""} key={item.id}>
            <span aria-hidden="true">{structure.sections[item.id] ? "✓" : String(index + 1).padStart(2, "0")}</span>
            <div>
              <strong>{sectionLabels[item.id]}</strong>
              <p>{item.value.trim() || "Waiting for your brief."}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="lesson-contract-boundary">This checks structure and presence only. It does not score meaning, quality, or correctness.</p>
    </aside>
  );
}

function ComposeWorkspace({
  attemptedCheck,
  draft,
  onChange,
  onToggleHint,
  showHint,
  structure,
  titleRef,
}: {
  attemptedCheck: boolean;
  draft: LessonDraft;
  onChange: (name: LessonDraftField, value: string) => void;
  onToggleHint: () => void;
  showHint: boolean;
  structure: ReturnType<typeof evaluateLessonDraft>;
  titleRef: React.RefObject<HTMLHeadingElement | null>;
}) {
  return (
    <>
      <SourcePanel />
      <section className="lesson-builder" aria-labelledby="lesson-phase-title">
        <div className="lesson-builder-heading">
          <div>
            <span className="lesson-kicker">INTERACTIVE TASK</span>
            <h2 id="lesson-phase-title" ref={titleRef} tabIndex={-1}>Build the delegation contract.</h2>
          </div>
          <button aria-expanded={showHint} aria-controls="lesson-hint" type="button" onClick={onToggleHint}>
            {showHint ? "Hide hint" : "Use a progressive hint"}
          </button>
        </div>
        <p className="lesson-builder-intro">Use the source on the left. Keep each line specific enough that another person could challenge it before code changes begin.</p>
        {showHint ? (
          <aside className="lesson-hint" id="lesson-hint">
            <span>HINT 01</span>
            <p>Move in this order: observable outcome → allowed boundary → protected boundary → guardrails → evidence → finish line. Ask: “Could someone test every claim I just made?”</p>
          </aside>
        ) : null}
        {attemptedCheck && !structure.isStructurallyComplete ? (
          <div className="lesson-structure-alert" role="alert">
            <strong>The brief still has structural gaps.</strong>
            <span>No judgment was made about your idea. Complete each marked boundary, then check again.</span>
          </div>
        ) : null}
        <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
          {fields.map((field) => (
            <BriefField
              draft={draft}
              field={field}
              invalid={attemptedCheck && !structure.fields[field.name]}
              key={field.name}
              onChange={onChange}
            />
          ))}
        </form>
      </section>
      <ContractPreview draft={draft} structure={structure} />
    </>
  );
}

function SelfCheckWorkspace({
  checks,
  draft,
  onEdit,
  onToggle,
  titleRef,
}: {
  checks: LessonSelfCheck;
  draft: LessonDraft;
  onEdit: () => void;
  onToggle: (name: keyof LessonSelfCheck, checked: boolean) => void;
  titleRef: React.RefObject<HTMLHeadingElement | null>;
}) {
  const confirmedCount = Object.values(checks).filter(Boolean).length;
  return (
    <section className="lesson-review" aria-labelledby="lesson-phase-title">
      <div className="lesson-review-heading">
        <div>
          <span className="lesson-kicker">HUMAN SELF-CHECK · NO AI GRADER</span>
          <h2 id="lesson-phase-title" ref={titleRef} tabIndex={-1}>Challenge the brief before an agent sees it.</h2>
        </div>
        <button type="button" onClick={onEdit}>Edit the brief</button>
      </div>
      <p>ProofMode verified only that every structural boundary is present. You remain responsible for deciding whether the content is grounded and testable.</p>
      <div className="lesson-review-grid">
        <fieldset>
          <legend>Confirm each behaviour</legend>
          {selfChecks.map((item, index) => (
            <label className={checks[item.name] ? "is-checked" : ""} key={item.name}>
              <input
                checked={checks[item.name]}
                onChange={(event) => onToggle(item.name, event.target.checked)}
                type="checkbox"
              />
              <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <span><strong>{item.title}</strong><small>{item.copy}</small></span>
              <i aria-hidden="true">{checks[item.name] ? "✓" : ""}</i>
            </label>
          ))}
        </fieldset>
        <aside aria-label="Draft under review">
          <span className="lesson-kicker on-paper">YOUR TEMPORARY BRIEF</span>
          <dl>
            <div><dt>Objective</dt><dd>{draft.objective}</dd></div>
            <div><dt>Scope</dt><dd><b>May change:</b> {draft.inScope}<br /><b>Must not change:</b> {draft.outOfScope}</dd></div>
            <div><dt>Constraints</dt><dd>{draft.constraints}</dd></div>
            <div><dt>Evidence</dt><dd>{draft.evidence}</dd></div>
            <div><dt>Done</dt><dd>{draft.doneCriteria}</dd></div>
          </dl>
        </aside>
      </div>
      <p className="lesson-review-status" role="status">{confirmedCount} of 5 human checks confirmed. These confirmations are not stored.</p>
    </section>
  );
}

function CompleteWorkspace({
  draft,
  fixture,
  onReview,
  titleRef,
}: {
  draft: LessonDraft;
  fixture: boolean;
  onReview: () => void;
  titleRef: React.RefObject<HTMLHeadingElement | null>;
}) {
  return (
    <section className="lesson-complete" aria-labelledby="lesson-phase-title">
      <div className="lesson-complete-mark" aria-hidden="true">✓</div>
      <span className="lesson-kicker">{fixture ? "COMPLETE-STATE FIXTURE" : "BRIEF PREPARED IN THIS TAB"}</span>
      <h2 id="lesson-phase-title" ref={titleRef} tabIndex={-1}>{fixture ? "This is how a completed lesson boundary behaves." : "Your brief is ready for guided practice."}</h2>
      <p>{fixture ? "This example is bundled and does not represent your progress." : "You transformed an unbounded request into a contract that can be challenged before implementation begins."}</p>
      <div className="lesson-complete-grid">
        <article><span>01</span><strong>Outcome named</strong><p>{draft.objective}</p></article>
        <article><span>02</span><strong>Change bounded</strong><p>{draft.inScope}</p></article>
        <article><span>03</span><strong>Evidence required</strong><p>{draft.evidence}</p></article>
      </div>
      <div className="lesson-checkpoint-transition">
        <div><span className="lesson-kicker">NEXT DEPENDENCY</span><h3>Apply the brief in a guided Proof Chain checkpoint.</h3><p>The checkpoint is the next production slice. Nothing has been submitted, scored, or saved yet.</p></div>
        <div>
          <button type="button" disabled>Guided checkpoint · coming next</button>
          {!fixture ? <button type="button" onClick={onReview}>Review this brief</button> : null}
          <Link to="/app/learn/agentic-coding">Return to the path</Link>
        </div>
      </div>
    </section>
  );
}

function ExitConfirmation({
  onStay,
  stayRef,
}: {
  onStay: () => void;
  stayRef: React.RefObject<HTMLButtonElement | null>;
}) {
  return (
    <section className="lesson-exit-confirmation" role="alertdialog" aria-labelledby="lesson-exit-title" aria-describedby="lesson-exit-copy">
      <div><span className="lesson-kicker">TEMPORARY DRAFT</span><h2 id="lesson-exit-title">Leave this lesson?</h2><p id="lesson-exit-copy">This preview has no persistence. Your draft will disappear when you leave or refresh, and nothing has been sent.</p></div>
      <div><button ref={stayRef} type="button" onClick={onStay}>Stay with the draft</button><Link to="/app/learn/agentic-coding">Exit to path</Link></div>
    </section>
  );
}

export function OutcomeLessonRoute() {
  const location = useLocation();
  const requestedState = parseLessonViewState(location.search);
  const [errorRecovered, setErrorRecovered] = useState(false);
  const state: LessonViewState = requestedState === "error" && errorRecovered ? "ready" : requestedState;
  const policy = lessonStatePolicy[state];
  const [draft, setDraft] = useState<LessonDraft>(() => initialDraft(requestedState));
  const [checks, setChecks] = useState<LessonSelfCheck>(() => requestedState === "checkpoint" ? { ...completeLessonSelfCheck } : { ...emptyLessonSelfCheck });
  const [phase, setPhase] = useState<LessonPhase>(() => initialPhase(requestedState));
  const [attemptedCheck, setAttemptedCheck] = useState(requestedState === "incomplete");
  const [showHint, setShowHint] = useState(requestedState === "hint");
  const [exitOpen, setExitOpen] = useState(false);
  const phaseTitleRef = useRef<HTMLHeadingElement>(null);
  const stayButtonRef = useRef<HTMLButtonElement>(null);
  const structure = useMemo(() => evaluateLessonDraft(draft), [draft]);
  const checkpointReady = canPrepareCheckpoint(draft, checks);
  const isFixture = requestedState === "checkpoint" || requestedState === "complete";

  useEffect(() => {
    if (state !== "loading" && state !== "error") phaseTitleRef.current?.focus();
  }, [phase, state]);

  useEffect(() => {
    if (exitOpen) stayButtonRef.current?.focus();
  }, [exitOpen]);

  function updateDraft(name: LessonDraftField, value: string) {
    if (!policy.canEditDraft) return;
    setDraft((current) => ({ ...current, [name]: limitLessonField(value) }));
    setAttemptedCheck(false);
  }

  function checkStructure() {
    if (!policy.canInteract) return;
    setAttemptedCheck(true);
    if (structure.isStructurallyComplete) setPhase("self-check");
  }

  function prepareCheckpoint() {
    if (!policy.canInteract || !checkpointReady) return;
    setPhase("complete");
  }

  function reviewBrief() {
    setPhase("self-check");
  }

  return (
    <div className="today-app lesson-app" data-view-state={state}>
      <LessonSidebar phase={phase} />
      <div className="today-frame lesson-frame">
        <header className="today-topbar lesson-topbar">
          <div className="today-mobile-brand"><LessonBrand /></div>
          <div className="lesson-topbar-crumb"><Link to="/app/learn/agentic-coding">Learn</Link><span aria-hidden="true">/</span><strong>Frame 01</strong></div>
          <div className="lesson-local-status"><span aria-hidden="true" /><div><small>Draft</small><strong>Current tab only</strong></div></div>
        </header>
        <main className="today-main lesson-main" id="main-content">
          <div className="lesson-heading">
            <div><span className="lesson-kicker">FRAME 01 · 8–10 MINUTES</span><h1>Turn a vague request into a brief you can verify.</h1></div>
            <p>Before delegating, define the outcome, boundary, guardrails, evidence, and finish line. The agent should never be the only person who knows what “done” means.</p>
          </div>
          <LessonStateBanner state={state} onRetry={() => setErrorRecovered(true)} />
          {state === "loading" ? <LoadingLesson /> : null}
          {state === "error" ? <p className="lesson-error-footnote" role="status">Lesson controls remain paused. No draft, personal data, score, or request was created.</p> : null}
          {state !== "loading" && state !== "error" ? (
            <>
              <div className={`lesson-workspace is-${phase}`}>
                {phase === "compose" ? (
                  <ComposeWorkspace attemptedCheck={attemptedCheck} draft={draft} onChange={updateDraft} onToggleHint={() => setShowHint((current) => !current)} showHint={showHint} structure={structure} titleRef={phaseTitleRef} />
                ) : null}
                {phase === "self-check" ? (
                  <SelfCheckWorkspace checks={checks} draft={draft} onEdit={() => setPhase("compose")} onToggle={(name, checked) => setChecks((current) => ({ ...current, [name]: checked }))} titleRef={phaseTitleRef} />
                ) : null}
                {phase === "complete" ? <CompleteWorkspace draft={draft} fixture={isFixture} onReview={reviewBrief} titleRef={phaseTitleRef} /> : null}
              </div>
              {exitOpen ? <ExitConfirmation onStay={() => setExitOpen(false)} stayRef={stayButtonRef} /> : null}
            </>
          ) : null}
        </main>
        {policy.canInteract ? (
          <footer className="lesson-action-dock">
            <div><span>{phase === "compose" ? `${structure.completeSectionCount}/5 structure` : phase === "self-check" ? `${Object.values(checks).filter(Boolean).length}/5 self-check` : "Local completion"}</span><strong>{phase === "compose" ? "Build the brief" : phase === "self-check" ? "Human review" : "Ready for practice"}</strong></div>
            <div>
              <button className="is-secondary" type="button" onClick={() => setExitOpen(true)}>Exit lesson</button>
              {phase === "compose" ? <button className="is-primary" type="button" onClick={checkStructure}>Check structure <span aria-hidden="true">→</span></button> : null}
              {phase === "self-check" ? <button className="is-primary" type="button" disabled={!checkpointReady || !areSelfChecksComplete(checks)} onClick={prepareCheckpoint}>Prepare for checkpoint <span aria-hidden="true">→</span></button> : null}
              {phase === "complete" ? <button className="is-primary" type="button" onClick={reviewBrief}>Review brief <span aria-hidden="true">↺</span></button> : null}
            </div>
          </footer>
        ) : null}
      </div>
    </div>
  );
}
