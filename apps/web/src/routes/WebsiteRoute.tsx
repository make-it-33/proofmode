import { Link } from "react-router";
import { Brand } from "../components/Brand";

const signals = [
  ["Outcome", "88"],
  ["Verification", "92"],
  ["Judgment", "86"],
  ["Recovery", "94"],
] as const;

export function WebsiteRoute() {
  return (
    <div className="pm-site">
      <header className="pm-site-header">
        <Brand />
        <nav className="pm-site-nav" aria-label="Website navigation">
          <a href="#proof">How it works</a>
          <Link className="pm-nav-action" to="/play">
            Open app
          </Link>
        </nav>
      </header>

      <main id="main-content">
        <section className="pm-hero" aria-labelledby="pm-hero-title">
          <div className="pm-hero-copy">
            <span className="pm-eyebrow">Daily AI judgment game</span>
            <h1 id="pm-hero-title">
              AI can write it. <span>Can you make the call?</span>
            </h1>
            <p>
              Six-minute missions where the model sounds sure, the evidence
              disagrees, and your judgment decides what ships.
            </p>
            <div className="pm-hero-actions">
              <Link className="pm-button pm-button-primary" to="/play">
                Try today’s mission
                <span aria-hidden="true">↗</span>
              </Link>
              <a className="pm-button pm-button-secondary" href="#proof">
                See how it works
              </a>
            </div>
            <small>13+ · No account for practice · AI can be wrong</small>
          </div>

          <div className="pm-product-stage">
            <div className="pm-stage-grid" aria-hidden="true" />
            <span className="pm-proof-chip pm-proof-chip-a">
              <strong>+42</strong> verified evidence
            </span>
            <span className="pm-proof-chip pm-proof-chip-b">
              AI confidence <strong>94%</strong>
            </span>
            <span className="pm-proof-chip pm-proof-chip-c">
              <strong>Recovered</strong> before lock
            </span>

            <div className="pm-product-window">
              <div className="pm-window-bar">
                <span className="pm-window-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span>checkout.ts · review</span>
                <span>agent / 01</span>
              </div>
              <div className="pm-editor">
                <div className="pm-editor-gutter" aria-hidden="true">
                  18
                  <br />
                  19
                  <br />
                  20
                  <br />
                  21
                  <br />
                  22
                  <br />
                  23
                </div>
                <div className="pm-code">
                  <code>
                    <b>async function</b> finalize(order) &#123;
                  </code>
                  <code>
                    &nbsp;&nbsp;<mark>await capture(order.total);</mark>
                  </code>
                  <code>
                    &nbsp;&nbsp;<em>await verifyInventory(order);</em>
                  </code>
                  <code>
                    &nbsp;&nbsp;return &#123; status: &quot;ready&quot; &#125;;
                  </code>
                  <code>&#125;</code>
                  <div className="pm-ai-move">
                    <span>AI suggests</span>
                    <p>“Ship the faster path. Inventory retries are rare.”</p>
                  </div>
                  <span className="pm-test-signal">
                    12 tests · 1 hidden risk
                  </span>
                </div>
              </div>
            </div>
            <span className="pm-preview-cursor" aria-hidden="true" />
            <p className="pm-media-note">
              Product preview · verify before you ship
            </p>
          </div>
        </section>

        <section
          className="pm-proof-section"
          id="proof"
          aria-labelledby="pm-proof-title"
        >
          <div className="pm-section-heading">
            <div>
              <span className="pm-eyebrow">The promise</span>
              <h2 id="pm-proof-title">Not another prompt contest.</h2>
            </div>
            <p>
              ProofMode turns real AI work into short decisions: inspect the
              source, catch the weak claim, and ship a call you can defend.
            </p>
          </div>

          <div className="pm-story-grid">
            <article className="pm-versus-card">
              <span className="pm-card-label">Human + AI vs AI alone</span>
              <h3>The model is fast. You are accountable.</h3>
              <p>
                One confident answer. Two quiet contradictions. The difference
                is whether someone checks.
              </p>
              <div className="pm-versus-rows">
                <div>
                  <small>AI alone</small>
                  <strong>Ships the confident fix</strong>
                  <span>Missed the failure</span>
                </div>
                <div className="is-protected">
                  <small>You + AI</small>
                  <strong>Checks, recovers, then ships</strong>
                  <span>Decision protected</span>
                </div>
              </div>
            </article>

            <article className="pm-signal-card">
              <span className="pm-card-label">Private skill profile</span>
              <h3>See how you think.</h3>
              <p>
                A behavior signal across the run—not a fake intelligence score.
              </p>
              <div className="pm-signal-list">
                {signals.map(([name, value]) => (
                  <div key={name}>
                    <span>{name}</span>
                    <i>
                      <b style={{ width: `${value}%` }} />
                    </i>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="pm-final-cta" aria-labelledby="pm-final-title">
          <span className="pm-eyebrow">A better relationship with AI</span>
          <h2 id="pm-final-title">Use the speed. Keep the judgment.</h2>
          <p>Build with AI without letting confidence outrun evidence.</p>
          <Link className="pm-button pm-button-primary" to="/play">
            Open the app
            <span aria-hidden="true">↗</span>
          </Link>
        </section>
      </main>
    </div>
  );
}
