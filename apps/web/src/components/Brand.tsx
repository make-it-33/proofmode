import { Link } from "react-router";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand" to="/" aria-label="ProofMode home">
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-cut" />
        <span className="brand-dot" />
      </span>
      {!compact && (
        <span className="brand-type">
          <strong>ProofMode</strong>
          <small>Agent Arena</small>
        </span>
      )}
    </Link>
  );
}
