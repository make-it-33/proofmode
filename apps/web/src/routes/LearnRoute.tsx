import { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  learnStatePolicy,
  parseLearnViewState,
  type LearnViewState,
} from "../domain/learnState";

type AppIconName = "today" | "learn" | "arena" | "social" | "profile";

type NavigationItem = {
  label: string;
  icon: AppIconName;
  to?: string;
  note?: string;
};

const lessonRoute = "/app/learn/agentic-coding/outcome-before-delegating";

const navigation: readonly NavigationItem[] = [
  { label: "Today", icon: "today", to: "/app" },
  { label: "Learn", icon: "learn", to: "/app/learn" },
  { label: "Arena", icon: "arena", note: "Planned" },
  { label: "Social", icon: "social", note: "Safety gate" },
  { label: "Profile", icon: "profile", note: "Planned" },
] as const;

const bands = [
  {
    code: "01",
    title: "Frame",
    outcome: "Turn a vague request into a bounded, testable outcome.",
    lessons: [
      {
        title: "Define the outcome before delegating",
        status: "current",
        reason: "Available now · focused interactive lesson",
      },
      {
        title: "Give context without over-scripting",
        status: "available",
        reason: "Available after the first lesson",
      },
      {
        title: "Frame checkpoint",
        status: "locked",
        reason: "Unlocks after both Frame lessons",
      },
    ],
  },
  {
    code: "02",
    title: "Direct",
    outcome: "Delegate a bounded plan while keeping file and scope control.",
    lessons: [
      {
        title: "Set a safe working boundary",
        status: "locked",
        reason: "Complete the Frame checkpoint first",
      },
      {
        title: "Review the plan before execution",
        status: "locked",
        reason: "Complete the previous Direct lesson",
      },
    ],
  },
  {
    code: "03",
    title: "Verify",
    outcome: "Use diffs, tests, logs, requirements, and source evidence.",
    lessons: [
      {
        title: "Read the change, not the confidence",
        status: "locked",
        reason: "Complete the Direct checkpoint first",
      },
      {
        title: "Build a verification ladder",
        status: "locked",
        reason: "Complete the previous Verify lesson",
      },
    ],
  },
  {
    code: "04",
    title: "Recover",
    outcome: "Stop a weak run, locate the break, roll back, and re-plan.",
    lessons: [
      {
        title: "Recognise a wrong turn early",
        status: "locked",
        reason: "Complete the Verify checkpoint first",
      },
      {
        title: "Repair without hiding the failure",
        status: "locked",
        reason: "Complete the previous Recover lesson",
      },
    ],
  },
  {
    code: "05",
    title: "Ship / Coordinate",
    outcome: "Connect architecture, security, CI, handoff, and multi-agent work.",
    lessons: [
      {
        title: "Ship with an evidence packet",
        status: "locked",
        reason: "Complete the Recover checkpoint first",
      },
      {
        title: "Coordinate agents without losing authority",
        status: "locked",
        reason: "Advanced path · earlier bands required",
      },
    ],
  },
] as const;

function AppIcon({ name }: { name: AppIconName }) {
  const common = {
    "aria-hidden": true,
    className: "today-nav-icon",
    fill: "none",
    focusable: "false" as const,
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "today":
      return (
        <svg {...common}>
          <path d="M4.5 10.5 12 4l7.5 6.5v8a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1-1.5-1.5z" />
          <path d="M9.5 20v-6h5v6" />
        </svg>
      );
    case "learn":
      return (
        <svg {...common}>
          <path d="M5 4.5h10.5A2.5 2.5 0 0 1 18 7v12.5H7.5A2.5 2.5 0 0 1 5 17z" />
          <path d="M8.5 8h6M8.5 11.5h6M8.5 15h3.5" />
        </svg>
      );
    case "arena":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="7.5" />
          <circle cx="12" cy="12" r="3.5" />
          <path d="m15 9 4.5-4.5M16.5 4.5h3v3" />
        </svg>
      );
    case "social":
      return (
        <svg {...common}>
          <circle cx="8.5" cy="9" r="3" />
          <circle cx="16.5" cy="8" r="2.5" />
          <path d="M3.5 19c.5-3.2 2.2-5 5-5s4.5 1.8 5 5M14 14c3.8-.3 5.8 1.4 6.3 4.2" />
        </svg>
      );
    case "profile":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.5" />
          <path d="M5.5 20c.5-4.2 2.7-6.3 6.5-6.3s6 2.1 6.5 6.3" />
        </svg>
      );
  }
}

function LearnBrand() {
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

function LearnNavigation({ mobile = false }: { mobile?: boolean }) {
  return (
    <nav className={mobile ? "today-mobile-nav" : "today-nav"} aria-label="App">
      <ul className={mobile ? "today-mobile-nav-list" : "today-nav-list"}>
        {navigation.map((item) => {
          const active = item.label === "Learn";
          return (
            <li key={item.label}>
              {item.to ? (
                <Link
                  className={`today-nav-item${active ? " is-active" : ""}`}
                  to={item.to}
                  aria-current={active ? "page" : undefined}
                >
                  <AppIcon name={item.icon} />
                  <span>{item.label}</span>
                </Link>
              ) : (
                <span
                  className="today-nav-item is-disabled"
                  aria-disabled="true"
                  title={`${item.label}: ${item.note ?? "Not available"}`}
                >
                  <AppIcon name={item.icon} />
                  <span>{item.label}</span>
                  {!mobile && item.note ? <small>{item.note}</small> : null}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function LearnSidebar() {
  return (
    <aside className="today-sidebar learn-sidebar">
      <LearnBrand />
      <div className="today-field-card" aria-label="Active learning field">
        <span className="today-field-symbol" aria-hidden="true">&lt;/&gt;</span>
        <span><small>Active field</small><strong>Agentic Coding</strong></span>
      </div>
      <LearnNavigation />
      <div className="today-sidebar-boundary">
        <span className="today-private-dot" aria-hidden="true" />
        <div><strong>Local curriculum preview</strong><small>No account · no saved progress</small></div>
      </div>
    </aside>
  );
}

function LearnStateBanner({ state, onRetry }: { state: LearnViewState; onRetry: () => void }) {
  if (state === "offline") {
    return (
      <div className="learn-state-banner is-offline" role="status">
        <div><strong>You’re offline.</strong><span>The bundled curriculum and focused lesson remain available.</span></div>
        <b>Offline-safe</b>
      </div>
    );
  }
  if (state === "error") {
    return (
      <div className="learn-state-banner is-error" role="alert">
        <div><strong>Learn could not be prepared.</strong><span>No progress or personal data was changed. Retry is safe.</span></div>
        <button type="button" onClick={onRetry}>Try again</button>
      </div>
    );
  }
  if (state === "unavailable") {
    return (
      <div className="learn-state-banner is-unavailable" role="status">
        <div><strong>The first lesson is temporarily unavailable.</strong><span>The path remains readable. Nothing was started or saved.</span></div>
        <b>Browse only</b>
      </div>
    );
  }
  if (state === "complete") {
    return (
      <div className="learn-state-banner is-complete" role="status">
        <div><strong>Completed-path demonstration.</strong><span>This fixture explains the completed state; it is not your saved progress.</span></div>
        <b>Preview fixture</b>
      </div>
    );
  }
  return null;
}

function LoadingLearn() {
  return (
    <section className="learn-loading" aria-busy="true" aria-label="Loading Learn" role="status">
      <span className="sr-only">Loading the local curriculum. No lesson has started.</span>
      <div><i /><i /><i /></div>
      <div><i /><i /><i /><i /></div>
      <div><i /><i /><i /></div>
    </section>
  );
}

function EmptyLearn() {
  return (
    <section className="learn-empty" aria-labelledby="learn-empty-title">
      <span className="learn-kicker">NO ACTIVE FIELD</span>
      <h2 id="learn-empty-title">Choose a field before opening a learning path.</h2>
      <p>The current preview stores no selection. Set up Agentic Coding locally, then return here.</p>
      <Link className="learn-button is-primary" to="/app/onboarding">Open private setup <span aria-hidden="true">→</span></Link>
      <small>No account, upload, analytics, or persisted profile is created.</small>
    </section>
  );
}

function FutureField() {
  return (
    <section className="learn-empty is-future" aria-labelledby="learn-future-title">
      <span className="learn-kicker">FUTURE FIELD · ROADMAP ONLY</span>
      <h2 id="learn-future-title">This field does not claim lessons yet.</h2>
      <p>Design, Business, Research, and Game Development need reviewed outcomes, evidence contracts, checkpoints, and safety coverage before activation.</p>
      <Link className="learn-button is-primary" to="/app/learn">Return to Agentic Coding</Link>
      <small>Visible on the roadmap does not mean available in the product.</small>
    </section>
  );
}

function LessonContract({ onClose }: { onClose: () => void }) {
  return (
    <section className="learn-contract" id="learn-lesson-contract" aria-labelledby="learn-contract-title">
      <div className="learn-contract-heading">
        <div><span className="learn-kicker">LESSON CONTRACT · AVAILABLE</span><h2 id="learn-contract-title">Define the outcome before delegating</h2></div>
        <button type="button" onClick={onClose}>Close preview</button>
      </div>
      <p className="learn-contract-intro">Turn “build this for me” into a bounded brief another agent can act on and you can verify.</p>
      <div className="learn-contract-grid">
        <article><span>01</span><strong>Objective</strong><p>Name the user-visible change, not just the activity.</p></article>
        <article><span>02</span><strong>Scope</strong><p>State what may change and what must remain untouched.</p></article>
        <article><span>03</span><strong>Constraints</strong><p>Protect safety, data, compatibility, time, and cost boundaries.</p></article>
        <article><span>04</span><strong>Evidence</strong><p>Require the checks and artifacts that make acceptance possible.</p></article>
        <article><span>05</span><strong>Done criteria</strong><p>Describe the observable finish line and rollback condition.</p></article>
      </div>
      <div className="learn-contract-boundary"><strong>Current boundary</strong><p>The focused lesson is available now. Its structure check is deterministic and local; it does not use AI judgment, save progress, or submit work.</p></div>
      <div className="learn-next-actions">
        <Link className="learn-button is-primary" to={lessonRoute}>Start focused lesson <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}

function NextLesson({
  isPathView,
  lessonOpen,
  onOpen,
  policy,
  state,
}: {
  isPathView: boolean;
  lessonOpen: boolean;
  onOpen: () => void;
  policy: (typeof learnStatePolicy)[LearnViewState];
  state: LearnViewState;
}) {
  const completePreview = state === "complete";
  return (
    <section className="learn-next" aria-labelledby="learn-next-title">
      <div className="learn-next-topline"><span className="learn-kicker">{completePreview ? "REVIEW FIXTURE · FRAME 01" : "NEXT LESSON · FRAME 01"}</span><span>8–10 min · bundled</span></div>
      <div className="learn-next-copy">
        <p>AGENTIC CODING / FOUNDATIONS</p>
        <h2 id="learn-next-title">Define the outcome before delegating.</h2>
        <p>Convert a vague request into an objective, scope, constraints, evidence, and a finish line you can actually verify.</p>
      </div>
      <ol className="learn-outcome-list" aria-label="Lesson outcome structure">
        {[["01", "Objective"], ["02", "Scope"], ["03", "Constraints"], ["04", "Evidence"], ["05", "Done"]].map(([code, label]) => <li key={code}><span>{code}</span><strong>{label}</strong></li>)}
      </ol>
      <div className="learn-next-actions">
        {isPathView ? (
          <>
            <Link
              className={`learn-button is-primary${policy.canInspectLesson ? "" : " is-disabled"}`}
              aria-disabled={!policy.canInspectLesson}
              to={policy.canInspectLesson ? lessonRoute : "#learn-path"}
            >
              Start focused lesson <span aria-hidden="true">→</span>
            </Link>
            <button
              className="learn-button is-secondary"
              type="button"
              disabled={!policy.canInspectLesson}
              aria-expanded={lessonOpen}
              aria-controls="learn-lesson-contract"
              onClick={onOpen}
            >
              {lessonOpen ? "Lesson contract open" : "Inspect lesson contract"}
            </button>
          </>
        ) : (
          <>
            <Link className={`learn-button is-primary${policy.canBrowsePath ? "" : " is-disabled"}`} aria-disabled={!policy.canBrowsePath} to={policy.canBrowsePath ? "/app/learn/agentic-coding" : "#learn-path"}>
              View Agentic Coding path <span aria-hidden="true">→</span>
            </Link>
            <Link className="learn-button is-secondary" to="/app/onboarding">Adjust setup</Link>
          </>
        )}
      </div>
      <p className="learn-boundary-line">The focused lesson stores no draft, completion, score, or progress.</p>
    </section>
  );
}

function PathOverview() {
  return (
    <aside className="learn-overview" aria-labelledby="learn-overview-title">
      <span className="learn-kicker">PATH AT A GLANCE</span>
      <h2 id="learn-overview-title">Five capabilities. One proof habit.</h2>
      <p>Each band increases autonomy while keeping evidence and human authority visible.</p>
      <dl>
        <div><dt>Bands</dt><dd>5</dd></div>
        <div><dt>Current field</dt><dd>Agentic Coding</dd></div>
        <div><dt>Progress</dt><dd>Not saved</dd></div>
        <div><dt>Checkpoint cadence</dt><dd>Every band</dd></div>
      </dl>
      <div className="learn-mini-chain" aria-label="Proof Chain">
        {['Source', 'AI move', 'Verify', 'Decide', 'Outcome'].map((item, index) => <span key={item}><i>{index + 1}</i>{item}</span>)}
      </div>
    </aside>
  );
}

function CurriculumPath({ completePreview }: { completePreview: boolean }) {
  return (
    <section className="learn-path" id="learn-path" aria-labelledby="learn-path-title">
      <div className="learn-section-heading">
        <div><span className="learn-kicker">BEGINNER → ADVANCED</span><h2 id="learn-path-title">Agentic Coding capability map</h2></div>
        <p>Locks explain their dependency. They are not energy gates, artificial waits, or payment pressure.</p>
      </div>
      <ol className="learn-band-list">
        {bands.map((band, bandIndex) => (
          <li className={bandIndex === 0 ? "is-current" : "is-locked"} key={band.code}>
            <div className="learn-band-heading"><span>{band.code}</span><div><h3>{band.title}</h3><p>{band.outcome}</p></div></div>
            <ol className="learn-lesson-list">
              {band.lessons.map((lesson, lessonIndex) => {
                const displayStatus = completePreview ? "completed fixture" : lesson.status;
                const reason = completePreview ? "Demonstration only · not saved learner progress" : lesson.reason;
                return (
                  <li className={`is-${displayStatus.replace(" ", "-")}`} key={lesson.title}>
                    <span aria-hidden="true">{completePreview ? "✓" : String(lessonIndex + 1).padStart(2, "0")}</span>
                    <div><strong>{lesson.title}</strong><small>{displayStatus} · {reason}</small></div>
                  </li>
                );
              })}
            </ol>
          </li>
        ))}
      </ol>
    </section>
  );
}

function CadenceAndBoundary() {
  return (
    <div className="learn-lower-grid">
      <section className="learn-cadence" aria-labelledby="learn-cadence-title">
        <span className="learn-kicker">REPEATABLE CADENCE</span>
        <h2 id="learn-cadence-title">Learn it. Apply it. Replay the decision.</h2>
        <ol>
          <li><span>01</span><strong>Focused lesson</strong><p>One observable behavior, taught through action.</p></li>
          <li><span>02</span><strong>Guided practice</strong><p>Use the behavior with source evidence and uncertainty.</p></li>
          <li><span>03</span><strong>Checkpoint</strong><p>Make a consequential human decision without answer cues.</p></li>
          <li><span>04</span><strong>Private replay</strong><p>Inspect what changed the outcome and what to repeat.</p></li>
        </ol>
      </section>
      <aside className="learn-trust" aria-labelledby="learn-trust-title">
        <span className="learn-kicker">CURRENT TRUST BOUNDARY</span>
        <h2 id="learn-trust-title">The lesson is real. Progress is not being invented.</h2>
        <ul>
          <li><strong>Bundled curriculum</strong><span>No request or provider call.</span></li>
          <li><strong>Private lesson draft</strong><span>No account, save, rank, or social graph.</span></li>
          <li><strong>Human authority</strong><span>Structure is checked locally; meaning remains your decision.</span></li>
        </ul>
        <Link to="/app/onboarding">Adjust pace or comfort in setup <span aria-hidden="true">→</span></Link>
      </aside>
    </div>
  );
}

function FutureFields() {
  return (
    <section className="learn-future-fields" aria-labelledby="learn-future-fields-title">
      <div><span className="learn-kicker">FUTURE FIELDS</span><h2 id="learn-future-fields-title">Visible without pretending they are ready.</h2></div>
      <ul>
        {['Design', 'Business', 'Research', 'Game Development'].map((field) => <li key={field}><strong>{field}</strong><span>Roadmap only · curriculum review required</span></li>)}
      </ul>
    </section>
  );
}

function ReadyLearn({ state, isPathView }: { state: LearnViewState; isPathView: boolean }) {
  const [lessonOpen, setLessonOpen] = useState(isPathView && state === "complete");
  const policy = learnStatePolicy[state];
  return (
    <>
      <div className="learn-grid">
        <NextLesson isPathView={isPathView} lessonOpen={lessonOpen} onOpen={() => setLessonOpen(true)} policy={policy} state={state} />
        <PathOverview />
        {lessonOpen ? <LessonContract onClose={() => setLessonOpen(false)} /> : null}
        <CurriculumPath completePreview={state === "complete"} />
        <CadenceAndBoundary />
        <FutureFields />
      </div>
      {policy.canBrowsePath ? (
        <div className="learn-mobile-dock">
          {isPathView ? (
            <Link className={policy.canInspectLesson ? "" : "is-disabled"} aria-disabled={!policy.canInspectLesson} to={policy.canInspectLesson ? lessonRoute : "#learn-path"}>Start first lesson <span aria-hidden="true">→</span></Link>
          ) : (
            <Link to="/app/learn/agentic-coding">View current path <span aria-hidden="true">→</span></Link>
          )}
        </div>
      ) : null}
    </>
  );
}

export function LearnRoute() {
  const location = useLocation();
  const requestedState = parseLearnViewState(location.search);
  const [errorRecovered, setErrorRecovered] = useState(false);
  const state: LearnViewState = requestedState === "error" && errorRecovered ? "ready" : requestedState;
  const isPathView = location.pathname.endsWith("/agentic-coding");

  return (
    <div className="today-app learn-app" data-view-state={state}>
      <LearnSidebar />
      <div className="today-frame">
        <header className="today-topbar learn-topbar">
          <div className="today-mobile-brand"><LearnBrand /></div>
          <div className="today-context"><span className="today-context-mark" aria-hidden="true">&lt;/&gt;</span><span><small>Active field</small><strong>Agentic Coding</strong></span></div>
          <div className="learn-topbar-meta"><span><small>Suggested pace</small><strong>10 minutes</strong></span><i aria-hidden="true" /><span><small>Storage</small><strong>Not saved</strong></span></div>
        </header>
        <main className="today-main learn-main" id="main-content">
          <div className="learn-heading">
            <div><span className="learn-kicker">LEARN · LOCAL CURRICULUM PREVIEW</span><h1>{isPathView ? "Agentic Coding, from first brief to shipped proof." : "See the whole path. Take one clear next step."}</h1></div>
            <p>{isPathView ? "Five capability bands grow your autonomy without handing judgment to the agent." : "A professional curriculum map—not XP fog, tiny dashboard cards, or a leaderboard standing between you and the lesson."}</p>
          </div>
          <LearnStateBanner state={state} onRetry={() => setErrorRecovered(true)} />
          {state === "loading" ? <LoadingLearn /> : null}
          {state === "empty" ? <EmptyLearn /> : null}
          {state === "future" ? <FutureField /> : null}
          {state === "ready" || state === "offline" || state === "unavailable" || state === "complete" ? <ReadyLearn state={state} isPathView={isPathView} /> : null}
          {state === "error" ? <p className="learn-state-footnote" role="status">Curriculum controls remain paused. Nothing was sent, saved, scored, or deleted.</p> : null}
        </main>
      </div>
      <LearnNavigation mobile />
    </div>
  );
}
