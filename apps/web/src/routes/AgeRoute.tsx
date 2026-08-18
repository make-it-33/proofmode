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
    <div className="public-shell age-shell">
      <header className="public-header">
        <Brand />
        <Link className="text-link" to="/">
          Back to overview
        </Link>
      </header>

      <main className="age-layout" id="main-content">
        <section className="age-card" aria-labelledby="age-title">
          <span className="step-marker">ENTRY / 01</span>
          {underAge ? (
            <div className="age-exit" role="status">
              <span className="age-symbol" aria-hidden="true">
                13+
              </span>
              <h1 id="age-title">This preview is for people 13 and older.</h1>
              <p>
                No run was created and nothing was saved. ProofMode does not support under-13
                use in this phase.
              </p>
              <Link className="button button-secondary" to="/">
                Return home
              </Link>
            </div>
          ) : (
            <>
              <p className="eyebrow">Before the clock starts</p>
              <h1 id="age-title">Confirm you’re 13 or older.</h1>
              <p className="age-lede">
                You can inspect the mission before starting. This private preview needs no
                account and sends no personal information.
              </p>

              <div className="privacy-proof" aria-label="Privacy for this preview">
                <div>
                  <strong>No account</strong>
                  <span>Play without creating a profile.</span>
                </div>
                <div>
                  <strong>Local draft</strong>
                  <span>Notes stay in this browser tab.</span>
                </div>
                <div>
                  <strong>No sharing</strong>
                  <span>No school or employer can view it.</span>
                </div>
              </div>

              <div className="age-actions">
                <button className="button button-primary" onClick={continueAsEligible} type="button">
                  I’m 13 or older
                  <span aria-hidden="true">→</span>
                </button>
                <button className="button button-quiet" onClick={exitForAge} type="button">
                  I’m under 13
                </button>
              </div>
              <p className="fine-print">
                Don’t enter personal, school, health, account, financial, or third-party secrets.
              </p>
            </>
          )}
        </section>

        <aside className="age-context" aria-label="Mission context">
          <div className="context-rule" />
          <p className="eyebrow">The clock is paused</p>
          <h2>Read first. Start when you’re ready.</h2>
          <ol>
            <li>Inspect five fictional sources.</li>
            <li>Challenge any consequential AI claim.</li>
            <li>Choose one cause and one first action.</li>
          </ol>
        </aside>
      </main>
    </div>
  );
}
