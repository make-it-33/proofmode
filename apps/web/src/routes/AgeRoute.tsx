import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useRun } from "../app/RunProvider";
import { Brand } from "../components/Brand";

export function AgeRoute() {
  const navigate = useNavigate();
  const { confirmAge, rejectAge } = useRun();
  const [underAge, setUnderAge] = useState(false);

  function continueAsEligible() {
    confirmAge();
    navigate("/mission/northstar-sales-drop");
  }

  function exitForAge() {
    rejectAge();
    setUnderAge(true);
  }

  return (
    <div className="arena-public entry-page">
      <header className="arena-public-header">
        <Brand />
        <Link className="quiet-link" to="/">
          Exit trial
        </Link>
      </header>

      <main className="entry-layout" id="main-content">
        <section className="entry-card" aria-labelledby="entry-title">
          <div className="entry-step">
            <span>ENTRY CHECK</span>
            <span>00 / 03</span>
          </div>

          {underAge ? (
            <div className="age-exit" role="status">
              <span className="age-badge" aria-hidden="true">13+</span>
              <h1 id="entry-title">This preview starts at age 13.</h1>
              <p>
                No run was created and nothing was saved. An under-13 mode needs a separate
                safety and consent review.
              </p>
              <Link className="arena-button arena-button-secondary" to="/">
                Return home
              </Link>
            </div>
          ) : (
            <>
              <span className="entry-kicker">ONE QUICK BOUNDARY</span>
              <h1 id="entry-title">Are you 13 or older?</h1>
              <p className="entry-lede">
                This private trial runs without an account. Your draft stays in this browser
                session and is not shared with a school or employer.
              </p>

              <div className="privacy-grid" aria-label="Privacy in this trial">
                <div><span>01</span><strong>No account</strong><small>Start without a profile.</small></div>
                <div><span>02</span><strong>Local draft</strong><small>Session storage only.</small></div>
                <div><span>03</span><strong>No ranking</strong><small>Practice result only.</small></div>
              </div>

              <div className="entry-actions">
                <button className="arena-button arena-button-primary" onClick={continueAsEligible} type="button">
                  I’m 13 or older
                  <span aria-hidden="true">↗</span>
                </button>
                <button className="arena-button arena-button-ghost" onClick={exitForAge} type="button">
                  I’m under 13
                </button>
              </div>
              <p className="safety-note">
                Never enter personal, school, health, account, financial, or third-party secrets.
              </p>
            </>
          )}
        </section>

        <aside className="entry-preview" aria-label="How the trial works">
          <span className="entry-preview-label">YOUR RUN</span>
          <ol>
            <li><span>01</span><div><strong>Scout</strong><small>Read signals. Build the chain.</small></div></li>
            <li><span>02</span><div><strong>Challenge</strong><small>Break or support the AI move.</small></div></li>
            <li><span>03</span><div><strong>Lock</strong><small>Commit with proof and uncertainty.</small></div></li>
          </ol>
          <div className="entry-proof-line">
            <span className="proof-icon proof-source">S</span>
            <i />
            <span className="proof-icon proof-claim">AI</span>
            <i />
            <span className="proof-icon proof-check">✓</span>
            <i />
            <span className="proof-icon proof-lock">L</span>
          </div>
        </aside>
      </main>
    </div>
  );
}
