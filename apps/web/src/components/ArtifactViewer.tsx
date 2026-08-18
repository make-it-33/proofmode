import type {
  DashboardContent,
  DocumentContent,
  PublicArtifact,
  TableContent,
  TranscriptContent,
} from "../domain/publicMission";

function DataTable({ content }: { content: TableContent | DocumentContent }) {
  if (!content.columns || !content.rows) return null;
  return (
    <div className="table-scroll" tabIndex={0} aria-label="Scrollable evidence table">
      <table>
        <thead>
          <tr>
            {content.columns.map((column) => (
              <th key={column} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {content.rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`}>
              {row.map((cell, cellIndex) =>
                cellIndex === 0 ? (
                  <th key={cellIndex} scope="row">
                    {cell}
                  </th>
                ) : (
                  <td key={cellIndex}>{cell}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ArtifactViewer({ artifact }: { artifact: PublicArtifact }) {
  if (artifact.kind === "table") {
    const content = artifact.content as unknown as TableContent;
    return (
      <article className="artifact-document artifact-table" aria-labelledby="artifact-title">
        <p className="document-caption">{content.caption}</p>
        <h2 id="artifact-title">{artifact.title}</h2>
        <DataTable content={content} />
        {content.note && <p className="source-note">{content.note}</p>}
      </article>
    );
  }

  if (artifact.kind === "transcript") {
    const content = artifact.content as unknown as TranscriptContent;
    return (
      <article className="artifact-document artifact-transcript" aria-labelledby="artifact-title">
        <p className="document-caption">{content.caption}</p>
        <h2 id="artifact-title">{artifact.title}</h2>
        <div className="transcript-list">
          {content.excerpts.map((excerpt) => (
            <figure key={excerpt.marker}>
              <figcaption>{excerpt.marker}</figcaption>
              <blockquote>“{excerpt.quote}”</blockquote>
            </figure>
          ))}
        </div>
      </article>
    );
  }

  if (artifact.kind === "dashboard") {
    const content = artifact.content as unknown as DashboardContent;
    return (
      <article className="artifact-document artifact-dashboard" aria-labelledby="artifact-title">
        <p className="document-caption">{content.caption}</p>
        <h2 id="artifact-title">{artifact.title}</h2>
        <div className="metric-grid">
          {content.metrics.map((metric) => (
            <div className="metric-card" key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
            </div>
          ))}
        </div>
        <div className="caution-note">
          <strong>Model note</strong>
          <p>{content.note}</p>
        </div>
      </article>
    );
  }

  const content = artifact.content as unknown as DocumentContent;
  return (
    <article className="artifact-document artifact-memo" aria-labelledby="artifact-title">
      <p className="document-caption">{content.eyebrow ?? content.caption}</p>
      <h2 id="artifact-title">{content.heading ?? artifact.title}</h2>
      {content.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      <DataTable content={content} />
      {content.note && <p className="source-note">{content.note}</p>}
    </article>
  );
}
