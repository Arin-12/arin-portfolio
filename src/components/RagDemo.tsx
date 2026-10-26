import { useState } from "react";

interface Case { q: string; chunks: { title: string; text: string; score: number }[]; answer: string; cite: string }

const cases: Case[] = [
  {
    q: "Can I take Machine Learning next term?",
    chunks: [
      { title: "CS 301 Machine Learning", text: "Prerequisites: CS 210 Data Structures and MATH 220 Linear Algebra.", score: 0.91 },
      { title: "Degree plan, year 3", text: "CS 301 is offered in the fall and spring terms.", score: 0.84 },
    ],
    answer: "Yes, if you have completed CS 210 and MATH 220. The course runs in both terms.",
    cite: "[1] [2]",
  },
  {
    q: "What do I need before Deep Learning?",
    chunks: [
      { title: "CS 402 Deep Learning", text: "Prerequisite: CS 301 Machine Learning.", score: 0.93 },
      { title: "CS 301 Machine Learning", text: "Prerequisites: CS 210 and MATH 220.", score: 0.79 },
    ],
    answer: "CS 402 requires CS 301. To reach CS 301 you also need CS 210 and MATH 220.",
    cite: "[1] [2]",
  },
  {
    q: "Is there a quantum computing course?",
    chunks: [{ title: "Catalog search", text: "No entry matched above the confidence threshold.", score: 0.31 }],
    answer: "I can’t find a quantum computing course in the catalog, so I won’t guess. Please check with your academic advisor.",
    cite: "no source",
  },
];

export default function RagDemo() {
  const [i, setI] = useState(0);
  const c = cases[i];
  return (
    <div className="rounded-2xl border border-line bg-surface p-5 sm:p-6" aria-labelledby="rag-demo-title">
      <p id="rag-demo-title" className="mb-4 font-mono text-xs text-muted">
        How my RAG Course Planning Assistant answers. Illustrative example, pick a question.
      </p>
      <div className="mb-5 flex flex-wrap gap-2" role="group" aria-label="Sample questions">
        {cases.map((x, k) => (
          <button
            key={x.q}
            type="button"
            aria-pressed={k === i}
            onClick={() => setI(k)}
            className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
              k === i ? "border-accent text-ink" : "border-line text-muted hover:text-ink"
            }`}
          >
            {x.q}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <p className="mb-3 font-mono text-xs text-muted">Retrieved from catalog</p>
          {c.chunks.map((ch, k) => (
            <div key={ch.title} className={`mb-3 border-l-2 pl-3.5 text-[15px] ${ch.score > 0.5 ? "border-accent" : "border-line"}`}>
              <p className="font-mono text-xs text-accent">[{k + 1}] {ch.title} · {ch.score.toFixed(2)}</p>
              <p className="text-muted">{ch.text}</p>
            </div>
          ))}
        </div>
        <div aria-live="polite">
          <p className="mb-3 font-mono text-xs text-muted">Grounded answer</p>
          <p className="text-[16px] leading-relaxed">
            {c.answer} <span className="font-mono text-xs text-accent">{c.cite}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
