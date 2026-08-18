import { mission } from "../data/northstar";

export function CaseMeta() {
  return (
    <dl className="case-meta" aria-label="Trial facts">
      <div>
        <dt>Clock</dt>
        <dd>6 min</dd>
      </div>
      <div>
        <dt>Signals</dt>
        <dd>{mission.artifacts.length}</dd>
      </div>
      <div>
        <dt>AI move</dt>
        <dd>Fallible</dd>
      </div>
      <div>
        <dt>Run</dt>
        <dd>Private</dd>
      </div>
    </dl>
  );
}
