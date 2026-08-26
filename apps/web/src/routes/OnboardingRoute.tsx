import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import {
  canAdvanceOnboarding,
  emptyOnboardingDraft,
  nextOnboardingStep,
  onboardingStatePolicy,
  onboardingSteps,
  parseOnboardingViewState,
  previousOnboardingStep,
  type DailyPace,
  type OnboardingDraft,
  type OnboardingField,
  type OnboardingGoal,
  type OnboardingStep,
  type OnboardingViewState,
} from "../domain/onboardingState";

const stepLabels: Record<OnboardingStep, string> = {
  promise: "Promise",
  age: "Age boundary",
  goal: "Goal",
  field: "Field",
  pace: "Pace",
  comfort: "Comfort",
  ready: "Ready",
};

const goals: ReadonlyArray<{
  value: OnboardingGoal;
  title: string;
  copy: string;
  code: string;
}> = [
  {
    value: "start",
    title: "Learn from the beginning",
    copy: "Build reliable habits in a clear order.",
    code: "01",
  },
  {
    value: "improve",
    title: "Improve an existing skill",
    copy: "Find weak spots and practise them deliberately.",
    code: "02",
  },
  {
    value: "build",
    title: "Build real projects",
    copy: "Supervise AI work without accepting blind changes.",
    code: "03",
  },
  {
    value: "compete",
    title: "Prepare to compete",
    copy: "Learn the mechanics before ranked play exists.",
    code: "04",
  },
];

const paces: ReadonlyArray<{ value: DailyPace; title: string; copy: string }> = [
  { value: 5, title: "5 minutes", copy: "One focused decision." },
  { value: 10, title: "10 minutes", copy: "A checkpoint and review." },
  { value: 20, title: "20 minutes", copy: "A deeper guided practice." },
];

const goalNames: Record<OnboardingGoal, string> = {
  start: "Learn from the beginning",
  improve: "Improve an existing skill",
  build: "Build real projects",
  compete: "Prepare to compete",
};

function OnboardingBrand() {
  return (
    <Link className="onboarding-brand" to="/app" aria-label="ProofMode Today">
      <span className="onboarding-brand-mark" aria-hidden="true">
        <span />
        <i />
      </span>
      <span>
        <strong>ProofMode</strong>
        <small>Private setup preview</small>
      </span>
    </Link>
  );
}

function ProofChainMini() {
  const nodes = ["Source", "AI move", "Verify", "Decide", "Outcome"];
  return (
    <div className="onboarding-chain" aria-label="Proof Chain method">
      {nodes.map((node, index) => (
        <div key={node}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <strong>{node}</strong>
          {index < nodes.length - 1 ? <i aria-hidden="true" /> : null}
        </div>
      ))}
    </div>
  );
}

function ChoiceOption({
  checked,
  copy,
  disabled = false,
  group,
  onChange,
  title,
  value,
  code,
}: {
  checked: boolean;
  copy: string;
  disabled?: boolean;
  group: string;
  onChange: () => void;
  title: string;
  value: string;
  code?: string;
}) {
  return (
    <label
      className={`onboarding-choice${checked ? " is-selected" : ""}${disabled ? " is-disabled" : ""}`}
    >
      <input
        checked={checked}
        disabled={disabled}
        name={group}
        onChange={onChange}
        type="radio"
        value={value}
      />
      <span className="onboarding-choice-marker" aria-hidden="true">
        {code ?? ""}
      </span>
      <span>
        <strong>{title}</strong>
        <small>{copy}</small>
      </span>
      <i aria-hidden="true">{checked ? "✓" : ""}</i>
    </label>
  );
}

function StateBanner({
  state,
  onRetry,
}: {
  state: OnboardingViewState;
  onRetry: () => void;
}) {
  if (state === "offline") {
    return (
      <div className="onboarding-state-banner is-offline" role="status">
        <span>
          <strong>You’re offline.</strong>
          <small>
            This setup remains usable because it never sends or stores your
            choices.
          </small>
        </span>
        <b>Local-only</b>
      </div>
    );
  }
  if (state === "error") {
    return (
      <div className="onboarding-state-banner is-error" role="alert">
        <span>
          <strong>Setup could not be prepared.</strong>
          <small>No choice was saved. Retry the local preview safely.</small>
        </span>
        <button type="button" onClick={onRetry}>
          Try again
        </button>
      </div>
    );
  }
  return null;
}

function LoadingOnboarding() {
  return (
    <section
      className="onboarding-loading"
      aria-busy="true"
      aria-label="Loading onboarding"
      role="status"
    >
      <span className="sr-only">
        Loading setup. No information has been collected.
      </span>
      <div>
        <i />
        <i />
        <i />
      </div>
      <div>
        <i />
        <i />
        <i />
        <i />
      </div>
    </section>
  );
}

export function OnboardingRoute() {
  const location = useLocation();
  const requestedState = parseOnboardingViewState(location.search);
  const [errorRecovered, setErrorRecovered] = useState(false);
  const state: OnboardingViewState =
    requestedState === "error" && errorRecovered ? "ready" : requestedState;
  const policy = onboardingStatePolicy[state];
  const [step, setStep] = useState<OnboardingStep>("promise");
  const [draft, setDraft] = useState<OnboardingDraft>({ ...emptyOnboardingDraft });
  const [underAge, setUnderAge] = useState(false);
  const stageTitleRef = useRef<HTMLHeadingElement>(null);
  const stepIndex = onboardingSteps.indexOf(step);

  useEffect(() => {
    if (state !== "loading") stageTitleRef.current?.focus();
  }, [state, step, underAge]);

  function updateDraft(update: Partial<OnboardingDraft>) {
    setDraft((current) => ({ ...current, ...update }));
  }

  function continueFlow() {
    if (!policy.canInteract || !canAdvanceOnboarding(step, draft)) return;
    if (step === "age" && draft.ageEligibility === "under13") {
      setUnderAge(true);
      return;
    }
    setStep(nextOnboardingStep(step));
  }

  function goBack() {
    if (!policy.canInteract || step === "promise") return;
    setStep(previousOnboardingStep(step));
  }

  function renderStep() {
    switch (step) {
      case "promise":
        return (
          <section className="onboarding-stage is-promise" aria-labelledby="onboarding-step-title">
            <span className="onboarding-kicker">SET UP THE EXPERIENCE, NOT A PUBLIC PROFILE</span>
            <h2 id="onboarding-step-title" ref={stageTitleRef} tabIndex={-1}>
              Learn, practise, prove—and stay in control.
            </h2>
            <p className="onboarding-lede">
              Choose what you want to improve, how much time feels realistic,
              and which comfort settings help you focus. Every choice is reversible.
            </p>
            <div className="onboarding-promise-grid">
              <article>
                <span>01</span>
                <strong>Learn with real consequences</strong>
                <p>Each checkpoint ends in a decision you can explain.</p>
              </article>
              <article>
                <span>02</span>
                <strong>Practise recovery</strong>
                <p>Catching and correcting AI matters as much as getting it right.</p>
              </article>
              <article>
                <span>03</span>
                <strong>Prove specific behaviour</strong>
                <p>No vague XP, intelligence label, or employability claim.</p>
              </article>
              <article>
                <span>04</span>
                <strong>Compete only when ready</strong>
                <p>Ranked systems remain unavailable until fairness gates pass.</p>
              </article>
            </div>
          </section>
        );
      case "age":
        return (
          <section className="onboarding-stage" aria-labelledby="onboarding-step-title">
            <span className="onboarding-kicker">CLEAR BEFORE ANY ACCOUNT DATA</span>
            <h2 id="onboarding-step-title" ref={stageTitleRef} tabIndex={-1}>
              Are you 13 or older?
            </h2>
            <p className="onboarding-lede">
              We do not need your birthday, school, location, contacts, or real
              name for this preview. Choose the truthful option below.
            </p>
            <fieldset className="onboarding-choice-grid is-age">
              <legend className="sr-only">Age eligibility</legend>
              <ChoiceOption
                checked={draft.ageEligibility === "eligible"}
                copy="Continue with a private, no-account setup preview."
                group="age"
                onChange={() => updateDraft({ ageEligibility: "eligible" })}
                title="I’m 13 or older"
                value="eligible"
                code="13+"
              />
              <ChoiceOption
                checked={draft.ageEligibility === "under13"}
                copy="No run or profile will be created."
                group="age"
                onChange={() => updateDraft({ ageEligibility: "under13" })}
                title="I’m under 13"
                value="under13"
                code="<13"
              />
            </fieldset>
            <div className="onboarding-boundary-note">
              <strong>Why we ask</strong>
              <p>
                ProofMode’s first learner experience is designed for ages 13+.
                An under-13 product needs separate consent and safety review.
              </p>
            </div>
          </section>
        );
      case "goal":
        return (
          <section className="onboarding-stage" aria-labelledby="onboarding-step-title">
            <span className="onboarding-kicker">ONE PRIMARY INTENTION</span>
            <h2 id="onboarding-step-title" ref={stageTitleRef} tabIndex={-1}>
              What should ProofMode help you do first?
            </h2>
            <p className="onboarding-lede">
              This changes recommendations, not your identity. You can switch
              the goal later without losing progress.
            </p>
            <fieldset className="onboarding-choice-grid">
              <legend className="sr-only">Primary learning goal</legend>
              {goals.map((goal) => (
                <ChoiceOption
                  key={goal.value}
                  checked={draft.goal === goal.value}
                  copy={goal.copy}
                  group="goal"
                  onChange={() => updateDraft({ goal: goal.value })}
                  title={goal.title}
                  value={goal.value}
                  code={goal.code}
                />
              ))}
            </fieldset>
          </section>
        );
      case "field":
        return (
          <section className="onboarding-stage" aria-labelledby="onboarding-step-title">
            <span className="onboarding-kicker">FIELD 01 · REAL V1 CONTENT</span>
            <h2 id="onboarding-step-title" ref={stageTitleRef} tabIndex={-1}>
              Start with Agentic Coding.
            </h2>
            <p className="onboarding-lede">
              Learn to plan, supervise, verify, recover, and ship with coding
              agents. Future fields stay visible only as honest roadmap states.
            </p>
            <fieldset className="onboarding-field-grid">
              <legend className="sr-only">Primary field</legend>
              <ChoiceOption
                checked={draft.field === "agentic-coding"}
                copy="Available in V1 · beginner to advanced path"
                group="field"
                onChange={() => updateDraft({ field: "agentic-coding" as OnboardingField })}
                title="Agentic Coding"
                value="agentic-coding"
                code="</>"
              />
              <ChoiceOption checked={false} copy="Roadmap only · no lessons are being claimed" disabled group="field" onChange={() => undefined} title="Design with AI" value="design" code="D" />
              <ChoiceOption checked={false} copy="Roadmap only · no lessons are being claimed" disabled group="field" onChange={() => undefined} title="Business with AI" value="business" code="B" />
              <ChoiceOption checked={false} copy="Roadmap only · no lessons are being claimed" disabled group="field" onChange={() => undefined} title="Research with AI" value="research" code="R" />
            </fieldset>
          </section>
        );
      case "pace":
        return (
          <section className="onboarding-stage" aria-labelledby="onboarding-step-title">
            <span className="onboarding-kicker">RECOMMENDATION, NEVER PRESSURE</span>
            <h2 id="onboarding-step-title" ref={stageTitleRef} tabIndex={-1}>
              What pace fits a normal day?
            </h2>
            <p className="onboarding-lede">
              This sets the size of your suggested session. There is no streak
              loss, energy gate, or punishment for changing it.
            </p>
            <fieldset className="onboarding-pace-grid">
              <legend className="sr-only">Typical daily pace</legend>
              {paces.map((pace) => (
                <ChoiceOption
                  key={pace.value}
                  checked={draft.pace === pace.value}
                  copy={pace.copy}
                  group="pace"
                  onChange={() => updateDraft({ pace: pace.value })}
                  title={pace.title}
                  value={String(pace.value)}
                  code={`${pace.value}m`}
                />
              ))}
            </fieldset>
            <div className="onboarding-boundary-note">
              <strong>Pause without penalty</strong>
              <p>
                Lessons save at meaningful boundaries once real persistence is
                approved. This preview stores nothing.
              </p>
            </div>
          </section>
        );
      case "comfort":
        return (
          <section className="onboarding-stage" aria-labelledby="onboarding-step-title">
            <span className="onboarding-kicker">ACCESS IS PART OF THE PRODUCT</span>
            <h2 id="onboarding-step-title" ref={stageTitleRef} tabIndex={-1}>
              Choose a calmer starting setup.
            </h2>
            <p className="onboarding-lede">
              These preferences are not used to judge skill or detect cheating.
              They can be changed later in Settings.
            </p>
            <fieldset className="onboarding-comfort-list">
              <legend className="sr-only">Comfort preferences</legend>
              <label>
                <input checked={draft.reduceMotion} onChange={(event) => updateDraft({ reduceMotion: event.target.checked })} type="checkbox" />
                <span>
                  <strong>Reduce interface motion</strong>
                  <small>Use instant state changes instead of movement.</small>
                </span>
                <i aria-hidden="true">{draft.reduceMotion ? "✓" : ""}</i>
              </label>
              <label>
                <input checked={draft.calmerTimers} onChange={(event) => updateDraft({ calmerTimers: event.target.checked })} type="checkbox" />
                <span>
                  <strong>Calmer timer treatment</strong>
                  <small>Keep time visible without pulsing or urgency effects.</small>
                </span>
                <i aria-hidden="true">{draft.calmerTimers ? "✓" : ""}</i>
              </label>
              <label>
                <input checked={draft.spaciousReading} onChange={(event) => updateDraft({ spaciousReading: event.target.checked })} type="checkbox" />
                <span>
                  <strong>Spacious reading density</strong>
                  <small>Increase line height and separation during lessons.</small>
                </span>
                <i aria-hidden="true">{draft.spaciousReading ? "✓" : ""}</i>
              </label>
            </fieldset>
            <p className="onboarding-safety-line">
              This preview plays no sound and asks for no disability or health information.
            </p>
          </section>
        );
      case "ready":
        return (
          <section className="onboarding-stage is-ready" aria-labelledby="onboarding-step-title">
            <span className="onboarding-kicker">PRIVATE PREVIEW READY</span>
            <h2 id="onboarding-step-title" ref={stageTitleRef} tabIndex={-1}>
              Your first path has a clear starting point.
            </h2>
            <p className="onboarding-lede">
              This summary exists only in the current page. Closing or refreshing forgets every selection.
            </p>
            <dl className="onboarding-summary">
              <div><dt>Goal</dt><dd>{draft.goal ? goalNames[draft.goal] : "Not selected"}</dd></div>
              <div><dt>Field</dt><dd>Agentic Coding</dd></div>
              <div><dt>Suggested pace</dt><dd>{draft.pace ? `${draft.pace} minutes` : "Not selected"}</dd></div>
              <div>
                <dt>Comfort</dt>
                <dd>{[
                  draft.reduceMotion && "Reduced motion",
                  draft.calmerTimers && "Calmer timers",
                  draft.spaciousReading && "Spacious reading",
                ].filter(Boolean).join(" · ") || "Standard setup"}</dd>
              </div>
            </dl>
            <div className="onboarding-ready-actions">
              <Link className="onboarding-button is-primary" to="/play">
                Open private checkpoint <span aria-hidden="true">↗</span>
              </Link>
              <button className="onboarding-button is-secondary" onClick={() => setStep("goal")} type="button">
                Review choices
              </button>
            </div>
            <p className="onboarding-safety-line">
              The checkpoint still passes through the existing 13+ trial boundary. No account or public profile is created.
            </p>
          </section>
        );
    }
  }

  if (underAge) {
    return (
      <div className="onboarding-app is-underage">
        <aside className="onboarding-story">
          <OnboardingBrand />
          <div className="onboarding-story-copy">
            <span className="onboarding-story-index">AGE BOUNDARY</span>
            <h1>Safety comes before progress.</h1>
            <p>ProofMode does not create an under-13 run from this preview.</p>
          </div>
        </aside>
        <div className="onboarding-workspace">
          <main className="onboarding-underage" id="main-content">
            <span className="onboarding-age-mark" aria-hidden="true">13+</span>
            <span className="onboarding-kicker">NO RUN · NO PROFILE · NOTHING SAVED</span>
            <h2 id="onboarding-step-title" ref={stageTitleRef} tabIndex={-1}>
              ProofMode currently starts at age 13.
            </h2>
            <p>
              An under-13 experience needs separate consent, safety, and regional review.
              We will not ask you to change your answer or provide more information.
            </p>
            <Link className="onboarding-button is-primary" to="/">
              Return to the ProofMode website
            </Link>
          </main>
        </div>
      </div>
    );
  }

  const canContinue = policy.canInteract && canAdvanceOnboarding(step, draft);

  return (
    <div className="onboarding-app" data-view-state={state}>
      <aside className="onboarding-story">
        <OnboardingBrand />
        <div className="onboarding-story-copy">
          <span className="onboarding-story-index">FIELD SETUP · PRIVATE PREVIEW</span>
          <h1>Build a path that fits you—not a profile that follows you.</h1>
          <p>
            ProofMode starts with a goal, one real field, a realistic pace, and comfort settings.
            No account data is needed here.
          </p>
        </div>
        <ProofChainMini />
        <nav className="onboarding-step-nav" aria-label="Onboarding progress">
          <ol>
            {onboardingSteps.map((item, index) => (
              <li
                key={item}
                className={index < stepIndex ? "is-complete" : index === stepIndex ? "is-current" : ""}
              >
                <button
                  disabled={!policy.canInteract || index > stepIndex}
                  onClick={() => setStep(item)}
                  type="button"
                  aria-current={index === stepIndex ? "step" : undefined}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{stepLabels[item]}</strong>
                  <i aria-hidden="true">{index < stepIndex ? "✓" : ""}</i>
                </button>
              </li>
            ))}
          </ol>
        </nav>
        <div className="onboarding-private-note">
          <span aria-hidden="true" />
          <p>
            <strong>Nothing leaves this page.</strong>
            <small>Choices are not saved, uploaded, ranked, or shared.</small>
          </p>
        </div>
      </aside>

      <div className="onboarding-workspace">
        <header className="onboarding-topbar">
          <div><span>SETUP</span><strong>Step {stepIndex + 1} of {onboardingSteps.length}</strong></div>
          <div className="onboarding-local-status">
            <span aria-hidden="true" />
            <p><small>Storage</small><strong>Local preview only</strong></p>
          </div>
          <Link to="/app">Exit setup</Link>
        </header>
        <StateBanner state={state} onRetry={() => setErrorRecovered(true)} />
        <main className="onboarding-main" id="main-content">
          {state === "loading" ? <LoadingOnboarding /> : null}
          {state === "ready" || state === "offline" ? renderStep() : null}
          {state === "error" ? (
            <p className="onboarding-state-footnote" role="status">
              Setup controls remain paused. No choice or personal data was created.
            </p>
          ) : null}
        </main>
        {state === "ready" || state === "offline" ? (
          <footer className="onboarding-action-dock">
            <button className="onboarding-button is-secondary" disabled={step === "promise"} onClick={goBack} type="button">
              Back
            </button>
            <div>
              <span>{step === "ready" ? "Choices stay reversible" : "Nothing saved yet"}</span>
              <strong>{stepLabels[step]}</strong>
            </div>
            {step !== "ready" ? (
              <button className="onboarding-button is-primary" disabled={!canContinue} onClick={continueFlow} type="button">
                {step === "promise" ? "Set up my path" : step === "age" && draft.ageEligibility === "under13" ? "Confirm and exit" : "Continue"}
                <span aria-hidden="true">→</span>
              </button>
            ) : (
              <span className="onboarding-dock-complete">Ready to practise</span>
            )}
          </footer>
        ) : null}
      </div>
    </div>
  );
}
