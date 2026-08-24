import { useEffect, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { Link } from "react-router";
import { PublicFooter, PublicHeader } from "../components/PublicChrome";

const humanTiles = [
  "/media/human-1.svg",
  "/media/human-2.svg",
  "/media/human-3.svg",
  "/media/human-4.svg",
] as const;

const proofTiles = [
  "/media/proof-1.svg",
  "/media/proof-2.svg",
  "/media/proof-3.svg",
  "/media/proof-4.svg",
] as const;

const caseSteps = [
  {
    label: "The agent moves",
    title: "A fast answer arrives.",
    body: "The agent places payment capture before the inventory check and recommends shipping the shorter path.",
    visualLabel: "Agent proposal ready",
  },
  {
    label: "Evidence disagrees",
    title: "The contract says otherwise.",
    body: "A source requirement makes the risk concrete: stock must be verified before money is captured.",
    visualLabel: "Release blocked by evidence",
  },
  {
    label: "You intervene",
    title: "The order is corrected.",
    body: "You move verification ahead of capture, explain why, and keep the remaining uncertainty visible.",
    visualLabel: "Decision updated",
  },
  {
    label: "The proof holds",
    title: "The safer build survives.",
    body: "The corrected path clears the required checks. ProofMode preserves the evidence and the decision that changed the outcome.",
    visualLabel: "Required checks passed",
  },
] as const;

const practiceRows = [
  {
    name: "Direct",
    title: "Give the agent a precise job.",
    body: "Frame the objective, constraints, and acceptable result before generation begins.",
  },
  {
    name: "Inspect",
    title: "Read the evidence, not the confidence.",
    body: "Trace claims to requirements, tests, sources, and observed behavior.",
  },
  {
    name: "Challenge",
    title: "Interrupt the wrong assumption.",
    body: "Identify the exact claim that fails and choose the next verification action.",
  },
  {
    name: "Recover",
    title: "Fix the build before the lock.",
    body: "Correct the work, state what remains uncertain, and preserve a replayable decision trail.",
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

export function WebsiteRoute() {
  const [motionEnabled, setMotionEnabled] = useState(true);
  const [caseStep, setCaseStep] = useState(0);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setMotionEnabled(!preference.matches);
    syncPreference();
    preference.addEventListener("change", syncPreference);
    return () => preference.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    const revealNodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!motionEnabled) {
      revealNodes.forEach((node) => node.setAttribute("data-visible", "true"));
      return;
    }
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-visible", "true");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.15 },
    );
    revealNodes.forEach((node) => revealObserver.observe(node));
    return () => revealObserver.disconnect();
  }, [motionEnabled]);

  useEffect(() => {
    const stepNodes =
      document.querySelectorAll<HTMLElement>("[data-case-step]");
    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const nextStep = Number(
            (entry.target as HTMLElement).dataset.caseStep ?? 0,
          );
          setCaseStep(nextStep);
        });
      },
      { rootMargin: "-38% 0px -42% 0px", threshold: 0 },
    );
    stepNodes.forEach((node) => stepObserver.observe(node));
    return () => stepObserver.disconnect();
  }, []);

  function moveHero(event: ReactPointerEvent<HTMLElement>) {
    if (!motionEnabled) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.setProperty("--pm-x", `${x * 6}px`);
    event.currentTarget.style.setProperty("--pm-y", `${y * 6}px`);
    event.currentTarget.style.setProperty("--pm-rx", `${y * -1.5}deg`);
    event.currentTarget.style.setProperty("--pm-ry", `${x * 1.5}deg`);
  }

  function resetHero(event: ReactPointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty("--pm-x", "0px");
    event.currentTarget.style.setProperty("--pm-y", "0px");
    event.currentTarget.style.setProperty("--pm-rx", "0deg");
    event.currentTarget.style.setProperty("--pm-ry", "0deg");
  }

  const activeCase = caseSteps[caseStep];

  return (
    <div className="pm-site" data-motion={motionEnabled ? "on" : "off"}>
      <PublicHeader
        overlay
        motionEnabled={motionEnabled}
        onToggleMotion={() => setMotionEnabled((current) => !current)}
      />

      <main id="main-content">
        <section
          className="pm-hero"
          aria-labelledby="pm-hero-title"
          onPointerMove={moveHero}
          onPointerLeave={resetHero}
        >
          <div className="pm-hero-media" aria-hidden="true">
            <CinematicImage tiles={humanTiles} />
          </div>
          <div className="pm-hero-shade" aria-hidden="true" />

          <div className="pm-hero-copy">
            <span className="pm-kicker">Practice judgment with AI</span>
            <h1 id="pm-hero-title">
              AI can write it.
              <span>Can you make the call?</span>
            </h1>
            <p>
              ProofMode turns agentic coding into short, consequential missions:
              direct the work, verify the claim, and decide what is safe to
              ship.
            </p>
            <div className="pm-hero-actions">
              <Link className="pm-button pm-button-primary" to="/play">
                Try today’s mission <span aria-hidden="true">↗</span>
              </Link>
              <a className="pm-text-link" href="#case">
                See the decision <span aria-hidden="true">↓</span>
              </a>
            </div>
            <small>13+ · No account for practice · AI can be wrong</small>
          </div>

          <div
            className="pm-hero-proof"
            aria-label="Illustrative ProofMode recovery summary"
          >
            <div className="pm-proof-heading">
              <span>Mission / safe checkout</span>
              <strong>Recovered</strong>
            </div>
            <div className="pm-proof-row is-agent">
              <span>AI proposed</span>
              <p>Capture payment before checking stock.</p>
            </div>
            <div className="pm-proof-row is-source">
              <span>Source required</span>
              <p>Verify inventory before payment capture.</p>
            </div>
            <div className="pm-proof-row is-decision">
              <span>Your decision</span>
              <p>Block the release, reorder the calls, run the checks.</p>
            </div>
            <div className="pm-proof-outcome">
              <i aria-hidden="true" />
              Required checks passed. Decision trail saved.
            </div>
          </div>
        </section>

        <section className="pm-position" data-reveal>
          <p>ProofMode is not a course about prompting.</p>
          <h2>
            It is practice for the moment an AI answer becomes your
            responsibility.
          </h2>
        </section>

        <section className="pm-decision-scene" aria-labelledby="pm-scene-title">
          <CinematicImage
            tiles={proofTiles}
            label="A player comparing evidence during a ProofMode mission"
          />
          <div className="pm-scene-shade" aria-hidden="true" />
          <div className="pm-scene-copy" data-reveal>
            <span>One pivotal moment</span>
            <h2 id="pm-scene-title">
              The model wrote the patch. The player decided whether it survived.
            </h2>
            <p>
              ProofMode turns that intervention into practice you can repeat,
              compare, and improve.
            </p>
          </div>
        </section>

        <section className="pm-case" id="case" aria-labelledby="pm-case-title">
          <div className="pm-case-heading" data-reveal>
            <span className="pm-kicker">A ProofMode mission</span>
            <h2 id="pm-case-title">The evidence changes the build.</h2>
            <p>
              Scroll through one checkout decision. The interface changes only
              when the underlying evidence changes.
            </p>
          </div>

          <div className="pm-case-layout">
            <div className="pm-case-sticky">
              <div className="pm-product" data-step={caseStep}>
                <div className="pm-product-bar">
                  <span>checkout.ts / review</span>
                  <strong>
                    {caseStep + 1} of {caseSteps.length}
                  </strong>
                </div>

                <div className="pm-product-body">
                  <div className="pm-product-main">
                    <div className="pm-code-heading">
                      <span>{activeCase.label}</span>
                      <strong>{activeCase.title}</strong>
                    </div>
                    <div
                      className="pm-code-block"
                      aria-label="Illustrative checkout code"
                    >
                      <div className="pm-code-row pm-line-open">
                        <i>18</i>
                        <code>
                          <b>async function</b> finalize(order) &#123;
                        </code>
                      </div>
                      <div className="pm-code-row pm-line-capture">
                        <i>19</i>
                        <code>await capture(order.total);</code>
                      </div>
                      <div className="pm-code-row pm-line-verify">
                        <i>20</i>
                        <code>await verifyInventory(order);</code>
                      </div>
                      <div className="pm-code-row pm-line-return">
                        <i>21</i>
                        <code>
                          return &#123; status: &quot;ready&quot; &#125;;
                        </code>
                      </div>
                      <div className="pm-code-row pm-line-close">
                        <i>22</i>
                        <code>&#125;</code>
                      </div>
                    </div>
                    <div className="pm-change-note" aria-live="polite">
                      <span>{activeCase.visualLabel}</span>
                      <p>{activeCase.body}</p>
                    </div>
                  </div>

                  <aside className="pm-product-side">
                    <div className="pm-agent-claim">
                      <span>Agent claim</span>
                      <p>The shorter path is safe to ship.</p>
                    </div>
                    <div className="pm-contract-source">
                      <span>Inventory contract</span>
                      <p>Stock verification must finish before capture.</p>
                    </div>
                    <div className="pm-case-result">
                      <i aria-hidden="true" />
                      <span>
                        {caseStep === 3
                          ? "Release ready"
                          : "Decision in progress"}
                      </span>
                    </div>
                  </aside>
                </div>
              </div>
            </div>

            <ol className="pm-case-steps">
              {caseSteps.map((step, index) => (
                <li
                  key={step.label}
                  data-case-step={index}
                  aria-current={caseStep === index ? "step" : undefined}
                >
                  <span>0{index + 1}</span>
                  <p>{step.label}</p>
                  <h3>{step.title}</h3>
                  <small>{step.body}</small>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          className="pm-practice"
          id="practice"
          aria-labelledby="pm-practice-title"
        >
          <div className="pm-practice-heading" data-reveal>
            <span className="pm-kicker">What ProofMode trains</span>
            <h2 id="pm-practice-title">
              Four habits that survive the tool cycle.
            </h2>
            <p>
              Models will change. These are the behaviors that keep ambitious
              builders useful, accountable, and hard to fool.
            </p>
          </div>

          <ol className="pm-practice-list">
            {practiceRows.map((row, index) => (
              <li key={row.name} data-reveal>
                <span>0{index + 1}</span>
                <strong>{row.name}</strong>
                <h3>{row.title}</h3>
                <p>{row.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="pm-final" aria-labelledby="pm-final-title">
          <div data-reveal>
            <span className="pm-kicker">Begin with one decision</span>
            <h2 id="pm-final-title">Use the speed. Keep the judgment.</h2>
            <p>
              Try the current browser mission. Desktop and mobile builds remain
              in development.
            </p>
            <Link className="pm-button pm-button-primary" to="/play">
              Open ProofMode <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
}
