import { Link } from "react-router";
import { Brand } from "../components/Brand";
import { CaseMeta } from "../components/CaseMeta";
import { mission } from "../data/northstar";

const skills = [
  ["01", "Spot the signal", "Separate primary records from confident-looking noise."],
  ["02", "Challenge the move", "Inspect the source behind a consequential AI claim."],
  ["03", "Lock with proof", "Make a decision, cite evidence, and name uncertainty."],
] as const;

export function PromiseRoute() {
  return (
    <div className="arena-public">
      <header className="arena-public-header">
        <Brand />
        <div className="public-status">
          <span className="live-pip" aria-hidden="true" />
          Private pre-alpha
        </div>
      </header>

      <main id="main-content">
        <section className="arena-hero" aria-labelledby="arena-title">
          <div className="hero-copy">
            <div className="hero-label-row">
              <span className="season-chip">TODAY / TRIAL 03</span>
              <span>{mission.mission.durationSeconds / 60} min · Intermediate</span>
            </div>
            <h1 id="arena-title">Can you catch the AI’s bad call?</h1>
            <p className="hero-lede">
              Read the signals, challenge one confident AI move, then lock a decision you can
              actually defend.
            </p>

            <div className="hero-actions">
              <Link className="arena-button arena-button-primary" to="/entry">
                Enter today’s trial
                <span aria-hidden="true">↗</span>
              </Link>
              <span className="privacy-line">No account · private practice · ages 13+</span>
            </div>

            <CaseMeta />
          </div>

          <aside className="trial-card" aria-label="Today’s Agent Arena trial">
            <div className="trial-card-top">
              <span>NORTHSTAR / 03</span>
              <span className="difficulty-dot">INTERMEDIATE</span>
            </div>
            <div className="trial-card-copy">
              <span className="card-kicker">AI MOVE DETECTED</span>
              <h2>Enterprise revenue dropped 19%.</h2>
              <p>Five signals disagree. One modeled claim is confident, specific—and wrong.</p>
            </div>
            <div className="mini-proof" aria-label="Trial structure">
              <div>
                <span className="proof-icon proof-source" aria-hidden="true">S</span>
                <strong>Source</strong>
              </div>
              <span aria-hidden="true">→</span>
              <div>
                <span className="proof-icon proof-claim" aria-hidden="true">AI</span>
                <strong>Claim</strong>
              </div>
              <span aria-hidden="true">→</span>
              <div>
                <span className="proof-icon proof-check" aria-hidden="true">✓</span>
                <strong>Check</strong>
              </div>
              <span aria-hidden="true">→</span>
              <div>
                <span className="proof-icon proof-lock" aria-hidden="true">L</span>
                <strong>Lock</strong>
              </div>
            </div>
            <div className="trial-card-footer">
              <span>Scout</span>
              <span>Challenge</span>
              <span>Lock</span>
            </div>
          </aside>
        </section>

        <section className="skills-section" aria-labelledby="skills-title">
          <div className="section-heading">
            <div>
              <span className="section-index">THE GAME</span>
              <h2 id="skills-title">AI skill shows up in the decisions.</h2>
            </div>
            <p>No prompt theater. No trivia. Your proof chain is the work.</p>
          </div>
          <div className="skill-grid">
            {skills.map(([index, title, copy]) => (
              <article key={index}>
                <span>{index}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
