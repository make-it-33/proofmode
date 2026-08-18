import { Link } from "react-router";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand" to="/" aria-label="ProofMode home">
      <span className="brand-mark" aria-hidden="true">
        <span>P</span>
        <span>M</span>
      </span>
      {!compact && (
        <span className="brand-type">
          <strong>ProofMode</strong>
          <small>Casefile practice</small>
        </span>
      )}
    </Link>
  );
}
