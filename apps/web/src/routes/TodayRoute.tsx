import { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  parseTodayViewState,
  todayStatePolicy,
  type TodayViewState,
} from "../domain/todayState";

type AppIconName = "today" | "learn" | "arena" | "social" | "profile";

type NavigationItem = {
  label: string;
  icon: AppIconName;
  to?: string;
  note?: string;
};

const navigation: readonly NavigationItem[] = [
  { label: "Today", icon: "today", to: "/app" },
  { label: "Learn", icon: "learn", note: "Next" },
  { label: "Arena", icon: "arena", note: "Planned" },
  { label: "Social", icon: "social", note: "Safety gate" },
  { label: "Profile", icon: "profile", note: "Planned" },
] as const;

const proofSteps = [
  { code: "01", title: "Source", copy: "Open the original record, not a summary of it." },
  { code: "02", title: "AI move", copy: "Treat confidence as a claim, never as authority." },
  { code: "03", title: "Verification", copy: "Check the evidence that could change the decision." },
  { code: "04", title: "Human decision", copy: "Choose an action and name what remains uncertain." },
  { code: "05", title: "Outcome", copy: "Replay how judgment changed what would ship." },
] as const;

const pathSteps = [
  {
    index: "01",
    title: "Agent foundations",
    copy: "Understand plans, tools, memory, and common failure modes.",
  },
  {
    index: "02",
    title: "Prompt and context",
    copy: "Give useful constraints without scripting every move.",
  },
  {
    index: "03",
    title: "Verify changes",
    copy: "Read diffs, tests, logs, and source evidence before accepting work.",
  },
  {
    index: "04",
    title: "Recover safely",
    copy: "Stop a weak run, find the break, roll back, and explain the repair.",
  },
  {
    index: "05",
    title: "Ship with proof",
    copy: "Connect the request, agent move, verification, decision, and outcome.",
  },
] as const;

function AppIcon({ name }: { name: AppIconName }) {
  const common = {
    "aria-hidden": true,
    className: "today-nav-icon",
    fill: "none",
    focusable: "false",
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

function ProofModeAppMark() {
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

function AppNavigation({ mobile = false }: { mobile?: boolean }) {
  const className = mobile ? "today-mobile-nav-list" : "today-nav-list";

  return (
    <nav className={mobile ? "today-mobile-nav" : "today-nav"} aria-label="App">
      <ul className={className}>
        {navigation.map((item) => (
          <li key={item.label}>
            {item.to ? (
              <Link className="today-nav-item is-active" to={item.to} aria-current="page">
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
        ))}
      </ul>
    </nav>
  );
}

function TodaySidebar() {
  return (
    <aside className="today-sidebar">
      <ProofModeAppMark />
      <div className="today-field-card" aria-label="Active learning field">
        <span className="today-field-symbol" aria-hidden="true">&lt;/&gt;</span>
        <span>
          <small>Active field</small>
          <strong>Agentic Coding</strong>
        </span>
      </div>
      <AppNavigation />
      <div className="today-sidebar-boundary">
        <span className="today-private-dot" aria-hidden="true" />
        <div>
          <strong>Private preview</strong>
          <small>Bundled fixture · no upload</small>
        </div>
      </div>
    </aside>
  );
}

function StateBanner({ state, onRetry }: { state: TodayViewState; onRetry: () => void }) {
  if (state === "offline") {
    return (
      <div className="today-state-banner is-offline" role="status">
        <div>
          <strong>You’re offline.</strong>
          <span>The shell and bundled practice fixture still work on this device.</span>
        </div>
        <span className="today-state-label">Offline-safe preview</span>
      </div>
    );
  }
  if (state === "error") {
    return (
      <div className="today-state-banner is-error" role="alert">
        <div>
          <strong>Today could not be prepared.</strong>
          <span>No draft was changed. Retry the local view or return later.</span>
        </div>
        <button type="button" onClick={onRetry}>Try again</button>
      </div>
    );
  }
  return null;
}

function LoadingToday() {
  return (
    <section className="today-loading" aria-busy="true" aria-label="Loading Today" role="status">
      <span className="sr-only">Loading Today. No practice has started.</span>
      <div className="today-loading-main"><span /><span /><span /></div>
      <div className="today-loading-side"><span /><span /><span /><span /></div>
      <div className="today-loading-path"><span /><span /><span /></div>
    </section>
  );
}

function EmptyToday() {
  return (
    <section className="today-empty" aria-labelledby="today-empty-title">
      <span className="today-section-label">NO SAVED PRACTICE</span>
      <h2 id="today-empty-title">Start with one decision you can prove.</h2>
      <p>
        Your path is ready, but there is no local run to resume. Opening the current fixture
        still passes through the 13+ boundary before a session is created.
      </p>
      <Link className="today-action today-action-primary" to="/play">
        Open current practice <span aria-hidden="true">↗</span>
      </Link>
      <small>No account · no public rank · nothing uploaded from this page</small>
    </section>
  );
}

function CurrentPractice() {
  const [briefOpen, setBriefOpen] = useState(false);
  return (
    <section className="today-command" aria-labelledby="today-practice-title">
      <div className="today-command-glow" aria-hidden="true" />
      <div className="today-command-topline">
        <span className="today-section-label on-dark">CURRENT PRIVATE FIXTURE</span>
        <span className="today-preview-chip">Preview data · not a rank</span>
      </div>
      <div className="today-command-copy">
        <p className="today-mission-code">NORTHSTAR / DECISION PRACTICE 03</p>
        <h2 id="today-practice-title">Can you catch the AI’s bad call?</h2>
        <p>
          Five signals disagree with one confident recommendation. Find the source that changes
          the decision, recover the AI move, and lock a call you can defend.
        </p>
      </div>
      <dl className="today-mission-facts" aria-label="Practice details">
        <div><dt>Time</dt><dd>6 minutes</dd></div>
        <div><dt>Level</dt><dd>Intermediate</dd></div>
        <div><dt>Result</dt><dd>Private signal</dd></div>
      </dl>
      <div className="today-command-actions">
        <Link className="today-action today-action-primary" to="/play">
          Open current practice <span aria-hidden="true">↗</span>
        </Link>
        <button
          className="today-action today-action-secondary"
          type="button"
          aria-expanded={briefOpen}
          aria-controls="today-practice-brief"
          onClick={() => setBriefOpen((current) => !current)}
        >
          {briefOpen ? "Hide brief" : "Read the brief"}
        </button>
      </div>
      <div className="today-brief" id="today-practice-brief" hidden={!briefOpen}>
        <div>
          <strong>Objective</strong>
          <p>Identify the primary cause behind a material revenue drop.</p>
        </div>
        <div>
          <strong>Completion contract</strong>
          <p>One cause, one first action, supporting sources, and remaining uncertainty.</p>
        </div>
        <p className="today-safety-copy">
          Never enter personal, school, account, health, financial, or third-party secrets.
        </p>
      </div>
    </section>
  );
}

function ProofChainPanel() {
  return (
    <aside className="today-proof-panel" aria-labelledby="today-proof-title">
      <div className="today-panel-heading">
        <div>
          <span className="today-section-label">SIGNATURE METHOD</span>
          <h2 id="today-proof-title">Proof Chain</h2>
        </div>
        <span className="today-method-mark" aria-hidden="true">P/</span>
      </div>
      <p className="today-panel-intro">
        Every lesson and battle uses the same five-part reasoning trail.
      </p>
      <ol className="today-proof-list" aria-label="Example proof chain">
        {proofSteps.map((step) => (
          <li key={step.code}>
            <span className="today-proof-code">{step.code}</span>
            <span><strong>{step.title}</strong><small>{step.copy}</small></span>
          </li>
        ))}
      </ol>
    </aside>
  );
}

function LearningPath() {
  return (
    <section className="today-path" aria-labelledby="today-path-title">
      <div className="today-path-heading">
        <div>
          <span className="today-section-label">FIELD 01 · V1</span>
          <h2 id="today-path-title">Agentic Coding learning path</h2>
        </div>
        <p>
          One coherent route from understanding an agent to supervising production work with
          evidence.
        </p>
      </div>
      <ol className="today-path-list">
        {pathSteps.map((step, index) => (
          <li key={step.index}>
            <div className="today-path-index">
              <span>{step.index}</span>
              {index < pathSteps.length - 1 ? <i aria-hidden="true" /> : null}
            </div>
            <div><strong>{step.title}</strong><p>{step.copy}</p></div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function TrustBoundary() {
  return (
    <section className="today-trust" aria-labelledby="today-trust-title">
      <div className="today-trust-heading">
        <span className="today-section-label">THIS PREVIEW’S BOUNDARY</span>
        <h2 id="today-trust-title">Practice without pretending the backend exists.</h2>
      </div>
      <div className="today-trust-grid">
        <article><span>01</span><strong>Private by default</strong><p>This page uses bundled fixture data and sends no prompt or note.</p></article>
        <article><span>02</span><strong>No rank claims</strong><p>Nothing here is a percentile, intelligence score, or public ladder.</p></article>
        <article><span>03</span><strong>Age boundary preserved</strong><p>Practice still passes through the 13+ entry check before a run starts.</p></article>
      </div>
    </section>
  );
}

function ReadyToday() {
  return (
    <div className="today-board">
      <CurrentPractice />
      <ProofChainPanel />
      <LearningPath />
      <TrustBoundary />
    </div>
  );
}

export function TodayRoute() {
  const location = useLocation();
  const requestedState = parseTodayViewState(location.search);
  const [errorRecovered, setErrorRecovered] = useState(false);
  const state: TodayViewState =
    requestedState === "error" && errorRecovered ? "ready" : requestedState;
  const statePolicy = todayStatePolicy[state];

  return (
    <div className="today-app" data-view-state={state}>
      <TodaySidebar />
      <div className="today-frame">
        <header className="today-topbar">
          <div className="today-mobile-brand"><ProofModeAppMark /></div>
          <div className="today-context">
            <span className="today-context-mark" aria-hidden="true">&lt;/&gt;</span>
            <span><small>Active field</small><strong>Agentic Coding</strong></span>
          </div>
          <div className="today-topbar-status">
            <span className="today-private-dot" aria-hidden="true" />
            <span><small>Privacy</small><strong>Local preview</strong></span>
          </div>
        </header>
        <main className="today-main" id="main-content">
          <div className="today-heading-row">
            <div>
              <span className="today-page-kicker">TODAY · PRACTICE HOME</span>
              <h1>Practice the judgment AI can’t own.</h1>
            </div>
            <p>
              One real task stays in focus. The rest of the desktop gives your proof chain and
              learning path room to breathe—not a pile of tiny dashboard cards.
            </p>
          </div>
          <StateBanner state={state} onRetry={() => setErrorRecovered(true)} />
          {state === "loading" ? <LoadingToday /> : null}
          {state === "empty" ? <EmptyToday /> : null}
          {state === "ready" || state === "offline" ? <ReadyToday /> : null}
          {!statePolicy.canOpenPractice ? (
            <p className="today-state-footnote" role="status">
              Practice launch is paused in this preview state; no run or personal data was
              created.
            </p>
          ) : null}
        </main>
      </div>
      <AppNavigation mobile />
    </div>
  );
}
