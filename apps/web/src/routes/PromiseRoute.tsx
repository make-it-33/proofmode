import { Link } from "react-router";
import { Brand } from "../components/Brand";
import { CaseMeta } from "../components/CaseMeta";
import { mission } from "../data/northstar";

const scoreDimensions = [
  "Outcome",
  "Verification",
  "Judgment",
  "Efficiency",
  "Communication",
  "Recovery",
];

export function PromiseRoute() {
  return (
    <div className="public-shell">
      <header className="public-header">
        <Brand />
        <span className="build-status">Private pre-alpha</span>
      </header>

      <main className="promise-layout" id="main-content">
        <section className="promise-copy" aria-labelledby="promise-title">
          <p className="eyebrow">Today’s case · {mission.mission.caseCode}</p>
          <h1 id="promise-title">Make the call. Show your proof.</h1>
          <p className="promise-lede">
            Investigate a real-looking business problem, use AI if it helps, and decide what
            the evidence actually supports.
          </p>
          <div className="promise-actions">
            <Link className="button button-primary" to="/entry">
              Open today’s case
              <span aria-hidden="true">→</span>
            </Link>
            <span className="privacy-line">No account · no public result</span>
          </div>
          <CaseMeta />
        </section>

        <aside className="case-preview" aria-label="Today’s mission preview">
          <div className="case-preview-topline">
            <span>CASE 03</span>
            <span>INVESTIGATE</span>
          </div>
          <div className="case-preview-body">
            <span className="case-label">Decision brief</span>
            <h2>Enterprise revenue fell. Find the primary cause.</h2>
            <p>Five sources disagree. The optional AI may help—or overstate a weak signal.</p>
            <div className="evidence-stack" aria-hidden="true">
              <span>Revenue export</span>
              <span>Renewal log</span>
              <span>Pricing memo</span>
              <span>Customer calls</span>
            </div>
          </div>
          <div className="case-preview-footer">
            <span>One cause</span>
            <span>One action</span>
            <span>Two citations</span>
          </div>
        </aside>

        <section className="scoring-strip" aria-labelledby="score-heading">
          <div>
            <p className="eyebrow">How this is judged</p>
            <h2 id="score-heading">Good work leaves evidence.</h2>
          </div>
          <ul>
            {scoreDimensions.map((dimension) => (
              <li key={dimension}>{dimension}</li>
            ))}
          </ul>
          <p>Prompt length and writing style do not score by themselves. AI never grades you.</p>
        </section>
      </main>
    </div>
  );
}
