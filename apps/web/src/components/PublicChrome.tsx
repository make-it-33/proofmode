import { Link } from "react-router";
import { Brand } from "./Brand";

const navigation = [
  { to: "/about", label: "About" },
  { to: "/guide", label: "How it works" },
  { to: "/premium", label: "Premium" },
  { to: "/support", label: "Support" },
  { to: "/download", label: "Download" },
] as const;

type PublicHeaderProps = {
  activePath?: string;
  overlay?: boolean;
  motionEnabled?: boolean;
  onToggleMotion?: () => void;
};

export function PublicHeader({
  activePath,
  overlay = false,
  motionEnabled,
  onToggleMotion,
}: PublicHeaderProps) {
  return (
    <header className={`pm-site-header ${overlay ? "is-overlay" : "is-solid"}`}>
      <Brand />
      <nav className="pm-site-nav" aria-label="Website navigation">
        {navigation.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            aria-current={activePath === item.to ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
        {onToggleMotion ? (
          <button
            type="button"
            className="pm-motion-control"
            aria-pressed={!motionEnabled}
            onClick={onToggleMotion}
          >
            Motion {motionEnabled ? "on" : "off"}
          </button>
        ) : null}
        <Link className="pm-nav-action" to="/play">
          Open app
        </Link>
      </nav>

      <details className="pm-mobile-nav">
        <summary>Menu</summary>
        <div>
          <Link to="/">Home</Link>
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              aria-current={activePath === item.to ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <Link className="pm-mobile-app-action" to="/play">
            Open app
          </Link>
          {onToggleMotion ? (
            <button
              type="button"
              aria-pressed={!motionEnabled}
              onClick={onToggleMotion}
            >
              Motion {motionEnabled ? "on" : "off"}
            </button>
          ) : null}
        </div>
      </details>
    </header>
  );
}

export function PublicFooter() {
  return (
    <footer className="pm-site-footer">
      <Brand />
      <nav className="pm-footer-nav" aria-label="Footer navigation">
        <Link to="/about">About</Link>
        <Link to="/guide">Guide</Link>
        <Link to="/premium">Premium</Link>
        <Link to="/support">Support</Link>
        <Link to="/download">Download</Link>
      </nav>
      <span>Private pre-alpha · 13+</span>
    </footer>
  );
}
