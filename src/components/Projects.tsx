import { useState } from "react";
import { projects, GITHUB_REPOS } from "../data";
import RagDemo from "./RagDemo";

export default function Projects() {
  const [id, setId] = useState(projects[0].id);
  const p = projects.find((x) => x.id === id)!;
  return (
    <div>
      <div className="grid gap-8 lg:grid-cols-[290px_1fr]">
        <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0" role="tablist" aria-label="Projects">
          {projects.map((x) => (
            <button
              key={x.id} role="tab" id={`tab-${x.id}`} aria-selected={x.id === id} aria-controls="proj-panel"
              onClick={() => setId(x.id)}
              className={`shrink-0 rounded-lg border px-4 py-3 text-left transition-colors ${
                x.id === id ? "border-accent bg-card text-ink" : "border-line text-muted hover:border-muted hover:text-ink"
              }`}
            >
              <span className="block font-display text-[17px] font-bold leading-tight">{x.title}</span>
              <span className="block text-sm">{x.period}</span>
            </button>
          ))}
        </div>

        <article id="proj-panel" role="tabpanel" aria-labelledby={`tab-${p.id}`} className="rounded-2xl border border-line bg-card p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            <span>{p.kind}</span>
            {p.status && <span className="rounded-full border border-line px-2.5 py-0.5 text-xs text-ok">{p.status}</span>}
          </div>
          <h3 className="mt-1 font-display text-3xl font-extrabold tracking-tight">{p.title}</h3>
          <p className="mt-3 max-w-[60ch] text-lg text-muted">{p.summary}</p>

          {p.metric && (
            <div className="mt-6 flex items-baseline gap-3 border-y border-line py-4">
              <span className="font-display text-4xl font-extrabold text-accent">{p.metric.value}</span>
              <span className="text-muted">{p.metric.label}</span>
            </div>
          )}

          <h4 className="mt-6 font-display text-lg font-bold">Problem</h4>
          <p className="mt-1 max-w-[62ch] text-muted">{p.problem}</p>
          {p.approach.length > 0 && (
            <>
              <h4 className="mt-5 font-display text-lg font-bold">Approach</h4>
              <ul className="mt-1 max-w-[62ch] list-disc space-y-1.5 pl-5 text-muted marker:text-accent">
                {p.approach.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </>
          )}

          {p.architecture.length > 0 && (
            <>
              <h4 className="mt-5 font-display text-lg font-bold">Architecture</h4>
              <ol className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
                {p.architecture.map((s, k) => (
                  <li key={s} className="flex items-start gap-3 rounded-lg border border-line bg-surface p-3">
                    <span className="font-mono text-xs text-accent2">{String(k + 1).padStart(2, "0")}</span>
                    <span className="text-sm leading-snug">{s}</span>
                  </li>
                ))}
              </ol>
            </>
          )}

          {p.result && (
            <>
              <h4 className="mt-5 font-display text-lg font-bold">Results</h4>
              <p className="mt-1 max-w-[62ch] text-muted">{p.result}</p>
            </>
          )}

          <h4 className="mt-5 font-display text-lg font-bold">Technologies</h4>
          <ul className="mt-2 flex flex-wrap gap-2">
            {p.stack.map((s) => <li key={s} className="rounded-md border border-line px-2.5 py-0.5 font-mono text-xs">{s}</li>)}
          </ul>

          {p.id === "rag" && <div className="mt-6"><RagDemo /></div>}

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {p.links.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noreferrer"
                className={`rounded-full px-5 py-2.5 font-semibold transition-colors ${l.primary ? "bg-accent text-bg hover:bg-accent-hover" : "border border-line hover:border-accent"}`}>
                {l.label}
              </a>
            ))}
            {p.links.length === 0 && <span className="text-sm text-muted">Links will be added when the project is complete.</span>}
          </div>
        </article>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-line bg-card p-6">
        <div>
          <h3 className="font-display text-xl font-bold">More projects on GitHub</h3>
          <p className="mt-1 text-muted">Explore all of my repositories and experiments.</p>
        </div>
        <a href={GITHUB_REPOS} target="_blank" rel="noreferrer" className="rounded-full bg-accent px-5 py-2.5 font-semibold text-bg transition-colors hover:bg-accent-hover">View GitHub</a>
      </div>
    </div>
  );
}
