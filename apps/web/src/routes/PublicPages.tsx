import { useEffect, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { Link } from "react-router";
import { PublicFooter, PublicHeader } from "../components/PublicChrome";

const proofTiles = [
  "/media/proof-1.svg",
  "/media/proof-2.svg",
  "/media/proof-3.svg",
  "/media/proof-4.svg",
] as const;

const humanTiles = [
  "/media/human-1.svg",
  "/media/human-2.svg",
  "/media/human-3.svg",
  "/media/human-4.svg",
] as const;

const guideSteps = [
  {
    name: "Read the contract",
    title: "Know what the mission actually asks.",
    body: "Start with the objective, constraints, evidence sources, and the conditions that must be true before you lock a decision.",
    signal: "Mission brief",
    evidence: "Inventory must be verified before payment capture.",
    action: "Mark the release constraint before asking the agent to edit code.",
  },
  {
    name: "Direct the agent",
    title: "Give it a job, not a vague wish.",
    body: "Describe the intended result and important boundaries. You are still responsible for checking what the agent returns.",
    signal: "Instruction",
    evidence: "Repair checkout without changing the inventory contract.",
    action: "Ask for a small patch and require a reason for each changed call.",
  },
  {
    name: "Inspect the work",
    title: "Separate the patch from the explanation.",
    body: "Read the changed behavior first. Then compare the agent’s confidence against tests, source requirements, and observed output.",
    signal: "Agent proposal",
    evidence: "Payment capture was moved before inventory verification.",
    action: "Open the source contract instead of accepting the shorter path.",
  },
  {
    name: "Challenge the claim",
    title: "Point to the contradiction precisely.",
    body: "A useful challenge identifies which claim fails, why it fails, and what evidence should settle the disagreement.",
    signal: "Contradiction",
    evidence: "The proposal conflicts with the required operation order.",
    action: "Block the release and request a corrected call sequence.",
  },
  {
    name: "Lock the decision",
    title: "Choose what survives—and explain why.",
    body: "Accept, revise, or reject the work. The lock records your reason and the evidence you relied on, not just the final answer.",
    signal: "Decision",
    evidence: "Verification now completes before payment capture.",
    action: "Lock the corrected patch with uncertainty and evidence attached.",
  },
  {
    name: "Replay the proof",
    title: "Review the moment that changed the outcome.",
    body: "Replay compares the original claim, the contradiction, your intervention, and the resulting build so the lesson can transfer.",
    signal: "Replay",
    evidence: "The safer order clears the required checks.",
    action: "Carry the same verification habit into the next mission.",
  },
] as const;

const premiumRows = [
  {
    feature: "Current browser practice",
    free: "Included",
    premium: "Included",
  },
  {
    feature: "Beginner agent-coding path",
    free: "Core missions",
    premium: "Full path",
  },
  {
    feature: "Advanced production scenarios",
    free: "Selected previews",
    premium: "Planned library",
  },
  {
    feature: "Mission history and replay",
    free: "Recent activity",
    premium: "Planned extended history",
  },
  {
    feature: "Deeper feedback on decisions",
    free: "Mission result",
    premium: "Planned coaching analysis",
  },
  {
    feature: "Rank or competitive advantage",
    free: "Never sold",
    premium: "Never sold",
  },
] as const;

function CinematicImage({
  tiles,
  label,
}: {
  tiles: readonly string[];
  label?: string;
}) {
  return (
    <span
      className="pm-cinematic-image"
      role={label ? "img" : undefined}
      aria-label={label}
    >
      <svg
        viewBox="0 0 1376 768"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        focusable="false"
      >
        {tiles.map((href, index) => (
          <image
            key={href}
            href={href}
            x={index * 344}
            y="0"
            width="344"
            height="768"
          />
        ))}
      </svg>
    </span>
  );
}

function usePageTitle(title: string) {
  useEffect(() => {
    document.title = `${title} · ProofMode`;
    window.scrollTo(0, 0);
  }, [title]);
}

function PageLayout({
  activePath,
  title,
  children,
}: {
  activePath: string;
  title: string;
  children: ReactNode;
}) {
  usePageTitle(title);
  return (
    <div className="pm-site pm-info-site">
      <PublicHeader activePath={activePath} />
      <main id="main-content">{children}</main>
      <PublicFooter />
    </div>
  );
}

export function AboutRoute() {
  return (
    <PageLayout activePath="/about" title="About">
      <section className="pm-info-hero pm-about-hero">
        <div className="pm-info-hero-media" aria-hidden="true">
          <CinematicImage tiles={proofTiles} />
        </div>
        <div className="pm-info-hero-shade" aria-hidden="true" />
        <div className="pm-info-hero-copy">
          <span className="pm-kicker">About ProofMode</span>
          <h1>Practice for the decisions AI cannot own.</h1>
          <p>
            ProofMode is an agentic-coding game about directing AI, checking its
            work, and taking responsibility for what should ship.
          </p>
        </div>
        <div className="pm-info-status">
          <span>Current stage</span>
          <strong>Private pre-alpha</strong>
          <p>Browser missions first. Desktop and mobile later.</p>
        </div>
      </section>

      <section className="pm-about-definition">
        <div>
          <span className="pm-section-index">01 / What it is</span>
          <h2>A game built around judgment, not answer generation.</h2>
        </div>
        <div className="pm-definition-copy">
          <p>
            Each mission gives you a goal, an AI agent, and evidence that can
            confirm or contradict what the agent claims. Your job is to guide
            the work, inspect the result, and lock a defensible decision.
          </p>
          <p>
            The first learning path goes deeply into agent coding—from clear
            instructions and small patches to verification, recovery, and more
            advanced production decisions.
          </p>
        </div>
      </section>

      <section className="pm-origin">
        <div className="pm-origin-media">
          <CinematicImage
            tiles={humanTiles}
            label="A young builder working through an agent-coding mission"
          />
        </div>
        <div className="pm-origin-copy">
          <span className="pm-section-index">02 / Why we made it</span>
          <h2>AI made creating faster. It did not make judgment optional.</h2>
          <p>
            A new generation will begin building with agents before learning the
            habits that experienced teams use to verify risky work. Passive
            videos and prompt lists are not enough preparation for that
            responsibility.
          </p>
          <p>
            We are building ProofMode to make those habits practical,
            repeatable, and motivating: learn through real decisions, see the
            consequence, recover safely, and prove what you can do.
          </p>
        </div>
      </section>

      <section className="pm-principles" aria-labelledby="principles-title">
        <div className="pm-page-section-heading">
          <span className="pm-section-index">03 / Product principles</span>
          <h2 id="principles-title">What we refuse to compromise.</h2>
        </div>
        <ol>
          <li>
            <span>01</span>
            <h3>Evidence over confidence</h3>
            <p>
              An authoritative answer is still only a claim until the work
              supports it.
            </p>
          </li>
          <li>
            <span>02</span>
            <h3>Practice over passive content</h3>
            <p>
              The product should make you decide, not merely watch somebody else
              decide.
            </p>
          </li>
          <li>
            <span>03</span>
            <h3>Progress without pay-to-win</h3>
            <p>
              Ranks must represent demonstrated skill. Payment will never
              purchase wins.
            </p>
          </li>
          <li>
            <span>04</span>
            <h3>Honest product states</h3>
            <p>
              Planned features, uncertain AI output, and unfinished platforms
              stay labelled.
            </p>
          </li>
        </ol>
      </section>

      <section className="pm-direction" aria-labelledby="direction-title">
        <div className="pm-page-section-heading">
          <span className="pm-section-index">04 / Direction</span>
          <h2 id="direction-title">Focused now. Broader later.</h2>
        </div>
        <div className="pm-direction-list">
          <article>
            <span>Now</span>
            <h3>Agent-coding practice</h3>
            <p>
              Browser missions, human verification, recovery, and a clear
              beginner path.
            </p>
          </article>
          <article>
            <span>Next</span>
            <h3>Deeper progression</h3>
            <p>
              Advanced scenarios, richer replay, profiles, and skill-based
              competitive formats.
            </p>
          </article>
          <article>
            <span>Later</span>
            <h3>More fields of creation</h3>
            <p>
              Design, business, and game development only after the coding
              foundation works.
            </p>
          </article>
        </div>
        <Link className="pm-button pm-button-primary" to="/guide">
          Learn how a mission works <span aria-hidden="true">→</span>
        </Link>
      </section>
    </PageLayout>
  );
}

export function GuideRoute() {
  const [activeStep, setActiveStep] = useState(0);
  const step = guideSteps[activeStep];

  return (
    <PageLayout activePath="/guide" title="How to use ProofMode">
      <section className="pm-info-hero pm-guide-hero">
        <div className="pm-info-hero-copy">
          <span className="pm-kicker">How to use ProofMode</span>
          <h1>Your first mission, without the guesswork.</h1>
          <p>
            A ProofMode mission is a short loop: understand the contract, direct
            the agent, inspect the evidence, make the call, and replay why it
            worked.
          </p>
          <Link className="pm-button pm-button-primary" to="/play">
            Try the browser mission <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="pm-guide-summary" aria-label="Mission loop summary">
          <span>Mission loop</span>
          <ol>
            <li>Read</li>
            <li>Direct</li>
            <li>Inspect</li>
            <li>Challenge</li>
            <li>Lock</li>
            <li>Replay</li>
          </ol>
        </div>
      </section>

      <section className="pm-tutorial" aria-labelledby="tutorial-title">
        <div className="pm-page-section-heading">
          <span className="pm-section-index">Interactive tutorial</span>
          <h2 id="tutorial-title">One mission, six deliberate actions.</h2>
          <p>Select each action to see what changes inside the mission.</p>
        </div>

        <div className="pm-tutorial-layout">
          <div
            className="pm-tutorial-steps"
            role="tablist"
            aria-label="Tutorial steps"
          >
            {guideSteps.map((item, index) => (
              <button
                key={item.name}
                type="button"
                role="tab"
                aria-selected={activeStep === index}
                aria-controls="tutorial-panel"
                onClick={() => setActiveStep(index)}
              >
                <span>0{index + 1}</span>
                <strong>{item.name}</strong>
              </button>
            ))}
          </div>

          <div
            className="pm-guide-screen"
            id="tutorial-panel"
            role="tabpanel"
            data-guide-step={activeStep}
            aria-live="polite"
          >
            <div className="pm-guide-screen-bar">
              <span>Mission / safe checkout</span>
              <strong>
                {activeStep + 1} of {guideSteps.length}
              </strong>
            </div>
            <div className="pm-guide-screen-body">
              <span>{step.signal}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
              <div className="pm-guide-evidence">
                <small>Evidence in this step</small>
                <strong>{step.evidence}</strong>
              </div>
              <div className="pm-guide-action">
                <small>Your useful action</small>
                <p>{step.action}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pm-guide-rules" aria-labelledby="guide-rules-title">
        <div className="pm-page-section-heading">
          <span className="pm-section-index">How to do well</span>
          <h2 id="guide-rules-title">
            Speed is useful. Defensible judgment wins.
          </h2>
        </div>
        <div className="pm-guide-rule-list">
          <article>
            <span>01</span>
            <h3>State the objective</h3>
            <p>Tell the agent exactly what result and constraints matter.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Open the source</h3>
            <p>When confidence and evidence disagree, inspect the evidence.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Explain the lock</h3>
            <p>
              A strong decision includes the reason, remaining uncertainty, and
              next check.
            </p>
          </article>
        </div>
      </section>

      <section className="pm-before-start">
        <div>
          <span className="pm-section-index">Before you start</span>
          <h2>Practice does not require an account.</h2>
        </div>
        <ul>
          <li>Use a modern browser and a keyboard when possible.</li>
          <li>No microphone, camera, or audio is required.</li>
          <li>AI responses can be wrong, incomplete, or overconfident.</li>
          <li>
            Never paste secrets or private production data into a practice
            mission.
          </li>
        </ul>
      </section>
    </PageLayout>
  );
}

export function PremiumRoute() {
  return (
    <PageLayout activePath="/premium" title="Premium">
      <section className="pm-info-hero pm-premium-hero">
        <div className="pm-info-hero-copy">
          <span className="pm-kicker">ProofMode Premium</span>
          <h1>Pay for depth—not artificial limits.</h1>
          <p>
            Premium is being designed for people who want a complete
            agent-coding path, deeper replay, and advanced practice. Pricing and
            final scope are not live yet.
          </p>
          <Link className="pm-button pm-button-primary" to="/support">
            Join early feedback <span aria-hidden="true">→</span>
          </Link>
        </div>
        <aside className="pm-honesty-note">
          <span>Status</span>
          <strong>Premium is not available for purchase.</strong>
          <p>No payment, renewal, or trial is active in this review build.</p>
        </aside>
      </section>

      <section
        className="pm-premium-value"
        aria-labelledby="premium-value-title"
      >
        <div className="pm-page-section-heading">
          <span className="pm-section-index">Why it should be worth it</span>
          <h2 id="premium-value-title">
            A serious practice system, not a feature tax.
          </h2>
        </div>
        <div className="pm-value-list">
          <article>
            <span>01</span>
            <h3>A coherent path</h3>
            <p>
              Move from first instructions to advanced agent workflows without
              assembling a curriculum from scattered clips.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>More consequential practice</h3>
            <p>
              Work through longer, harder scenarios where evidence, uncertainty,
              and recovery matter.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>Replay that teaches</h3>
            <p>
              Review which claim changed your decision and which habit should
              transfer to the next mission.
            </p>
          </article>
          <article>
            <span>04</span>
            <h3>Progress you can explain</h3>
            <p>
              Build a history of demonstrated decisions instead of collecting
              passive completion badges.
            </p>
          </article>
        </div>
      </section>

      <section className="pm-plan-compare" aria-labelledby="compare-title">
        <div className="pm-page-section-heading">
          <span className="pm-section-index">Launch direction</span>
          <h2 id="compare-title">
            Free should be useful. Premium should go deeper.
          </h2>
          <p>These are product intentions, not a final commercial offer.</p>
        </div>
        <div
          className="pm-compare-table"
          role="table"
          aria-label="Proposed free and premium comparison"
        >
          <div className="pm-compare-row is-heading" role="row">
            <strong role="columnheader">Experience</strong>
            <strong role="columnheader">Free</strong>
            <strong role="columnheader">Premium direction</strong>
          </div>
          {premiumRows.map((row) => (
            <div className="pm-compare-row" role="row" key={row.feature}>
              <span role="cell">{row.feature}</span>
              <span role="cell">{row.free}</span>
              <span role="cell">{row.premium}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="pm-no-pay-win">
        <span className="pm-section-index">A permanent boundary</span>
        <h2>Premium will not buy rank, wins, or easier judgment.</h2>
        <p>
          Competitive results should reflect demonstrated decisions. Paid access
          may provide more practice and analysis, never a scoring advantage.
        </p>
      </section>
    </PageLayout>
  );
}

export function SupportRoute() {
  const [submitted, setSubmitted] = useState(false);

  function submitFeedback(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <PageLayout activePath="/support" title="Support and feedback">
      <section className="pm-info-hero pm-support-hero">
        <div className="pm-info-hero-copy">
          <span className="pm-kicker">Support and feedback</span>
          <h1>Get unstuck. Tell us what failed.</h1>
          <p>
            Use this page for mission problems, accessibility issues, product
            feedback, early-access interest, or a bug that interrupted practice.
          </p>
        </div>
        <div className="pm-support-promise">
          <span>What helps us investigate</span>
          <p>
            Page or mission · What you expected · What happened · Browser and
            device
          </p>
        </div>
      </section>

      <section className="pm-support-layout" aria-labelledby="feedback-title">
        <div className="pm-support-topics">
          <span className="pm-section-index">Choose the closest topic</span>
          <ul>
            <li>
              <strong>Mission issue</strong>
              <span>Evidence, controls, result, or replay</span>
            </li>
            <li>
              <strong>Access</strong>
              <span>Browser preview or future account access</span>
            </li>
            <li>
              <strong>Safety</strong>
              <span>Privacy, inappropriate content, or reporting</span>
            </li>
            <li>
              <strong>Accessibility</strong>
              <span>Keyboard, motion, contrast, or assistive technology</span>
            </li>
            <li>
              <strong>Premium interest</strong>
              <span>Pricing research and early feedback</span>
            </li>
          </ul>
        </div>

        <form className="pm-feedback-form" onSubmit={submitFeedback}>
          <span className="pm-section-index">Feedback form preview</span>
          <h2 id="feedback-title">What should we know?</h2>
          <label>
            Topic
            <select name="topic" required defaultValue="">
              <option value="" disabled>
                Select a topic
              </option>
              <option>Mission issue</option>
              <option>Product suggestion</option>
              <option>Accessibility</option>
              <option>Safety or privacy</option>
              <option>Premium interest</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            Message
            <textarea
              name="message"
              required
              minLength={12}
              rows={7}
              placeholder="What happened, what did you expect, and where were you?"
            />
          </label>
          <label>
            Contact email <small>Optional</small>
            <input
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
            />
          </label>
          <button className="pm-button pm-button-primary" type="submit">
            Check feedback form <span aria-hidden="true">→</span>
          </button>
          {submitted ? (
            <p className="pm-form-status" role="status">
              Preview only: your message was validated but not sent. A secure
              support destination will be connected before public release.
            </p>
          ) : (
            <p className="pm-form-note">
              This review form does not transmit or store your message.
            </p>
          )}
        </form>
      </section>

      <section className="pm-faq" aria-labelledby="faq-title">
        <div className="pm-page-section-heading">
          <span className="pm-section-index">Common questions</span>
          <h2 id="faq-title">Before you report a problem.</h2>
        </div>
        <div>
          <details>
            <summary>Do I need an account to practise?</summary>
            <p>
              No account is required for the current browser practice direction.
              Saved progression may require an account later.
            </p>
          </details>
          <details>
            <summary>Where are the desktop and mobile installers?</summary>
            <p>
              They do not exist yet. Desktop is in development and mobile is
              planned. Use only download links published on the official
              ProofMode site.
            </p>
          </details>
          <details>
            <summary>Can AI mission output be trusted?</summary>
            <p>
              No. AI can be wrong or overconfident. The product is designed to
              help you verify claims rather than trust them automatically.
            </p>
          </details>
          <details>
            <summary>Is Premium already charging users?</summary>
            <p>
              No. Pricing, payments, trials, and renewals are not active in this
              review build.
            </p>
          </details>
        </div>
      </section>
    </PageLayout>
  );
}

export function DownloadRoute() {
  return (
    <PageLayout activePath="/download" title="Download">
      <section className="pm-info-hero pm-download-hero">
        <div className="pm-info-hero-copy">
          <span className="pm-kicker">Get ProofMode</span>
          <h1>Start in the browser. Native apps are next.</h1>
          <p>
            The browser preview is the only available experience today. Desktop
            is in development, and mobile remains planned.
          </p>
          <Link className="pm-button pm-button-primary" to="/play">
            Open ProofMode web app <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <div className="pm-download-signal">
          <i aria-hidden="true" />
          <span>Web app available now</span>
        </div>
      </section>

      <section className="pm-platforms" aria-labelledby="platforms-title">
        <div className="pm-page-section-heading">
          <span className="pm-section-index">Platforms</span>
          <h2 id="platforms-title">One product, honest availability.</h2>
        </div>
        <div className="pm-platform-list">
          <article className="is-available">
            <span>01 / Available</span>
            <h3>Web app</h3>
            <p>
              Open ProofMode immediately in a modern desktop or mobile browser.
              Nothing needs to be installed.
            </p>
            <Link to="/play">
              Open web app <span aria-hidden="true">↗</span>
            </Link>
          </article>
          <article>
            <span>02 / In development</span>
            <h3>Windows</h3>
            <p>
              A signed Windows installer will install the native app and connect
              it to the supported update channel.
            </p>
            <Link to="/support">
              Join Windows feedback <span aria-hidden="true">→</span>
            </Link>
          </article>
          <article>
            <span>03 / In development</span>
            <h3>macOS</h3>
            <p>
              A signed macOS installer will provide the correct Apple build and
              the same visible update controls.
            </p>
            <Link to="/support">
              Join macOS feedback <span aria-hidden="true">→</span>
            </Link>
          </article>
          <article>
            <span>04 / Planned</span>
            <h3>iOS and Android</h3>
            <p>
              Mobile practice remains part of the product direction, not a
              current download.
            </p>
            <Link to="/support">
              Share mobile needs <span aria-hidden="true">→</span>
            </Link>
          </article>
        </div>
      </section>

      <section
        className="pm-installer-plan"
        aria-labelledby="installer-plan-title"
      >
        <div className="pm-page-section-heading">
          <span className="pm-section-index">Native installation plan</span>
          <h2 id="installer-plan-title">
            The right installer for each desktop.
          </h2>
          <p>
            These platform buttons are intentionally unavailable until signed,
            tested installers exist. The web app remains the active path today.
          </p>
        </div>
        <div
          className="pm-installer-buttons"
          aria-label="Planned native installers"
        >
          <div>
            <span>Windows</span>
            <button type="button" disabled>
              Windows installer · Coming later
            </button>
          </div>
          <div>
            <span>macOS</span>
            <button type="button" disabled>
              macOS installer · Coming later
            </button>
          </div>
        </div>
        <ol className="pm-update-flow">
          <li>
            <span>01</span>
            <p>Download the signed installer made for your operating system.</p>
          </li>
          <li>
            <span>02</span>
            <p>Install ProofMode and open the native app normally.</p>
          </li>
          <li>
            <span>03</span>
            <p>
              When a verified release is ready, the app shows an Update
              available action.
            </p>
          </li>
          <li>
            <span>04</span>
            <p>
              You confirm the update; the app installs it through the supported
              channel.
            </p>
          </li>
        </ol>
      </section>

      <section
        className="pm-download-safety"
        aria-labelledby="download-safety-title"
      >
        <div>
          <span className="pm-section-index">Download safety</span>
          <h2 id="download-safety-title">
            No installer should ask you to ignore a warning.
          </h2>
        </div>
        <ul>
          <li>
            Native installers will be published only when they are ready and
            signed.
          </li>
          <li>
            ProofMode will not ask you to disable operating-system security.
          </li>
          <li>
            Version, platform, and update channel will be visible before
            installation.
          </li>
          <li>There are no official native installers in this review build.</li>
        </ul>
      </section>

      <section className="pm-download-next">
        <span className="pm-kicker">Not ready to install?</span>
        <h2>Learn the mission loop first.</h2>
        <p>The guide explains what to inspect, challenge, lock, and replay.</p>
        <Link className="pm-button pm-button-primary" to="/guide">
          Read the tutorial <span aria-hidden="true">→</span>
        </Link>
      </section>
    </PageLayout>
  );
}
