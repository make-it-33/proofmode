import { mission } from "../data/northstar";

export function CaseMeta() {
  return (
    <dl className="case-meta" aria-label="Mission facts">
      <div>
        <dt>Time</dt>
        <dd>6 min</dd>
      </div>
      <div>
        <dt>Evidence</dt>
        <dd>{mission.artifacts.length} sources</dd>
      </div>
      <div>
        <dt>AI</dt>
        <dd>Optional</dd>
      </div>
      <div>
        <dt>Result</dt>
        <dd>Private</dd>
      </div>
    </dl>
  );
}
