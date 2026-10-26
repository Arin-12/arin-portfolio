import { useState, type ReactNode } from "react";
import Projects from "./components/Projects";
import Avatar from "./components/Avatar";
import { LINKS, skills, certificates, achievements, building } from "./data";

const nav = [["Home", "#top"], ["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Experience", "#experience"], ["Contact", "#contact"]] as const;

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 pt-28">
      <h2 className="mb-10 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {children}
    </section>
  );
}
const ext = { target: "_blank", rel: "noreferrer" } as const;

export default function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line bg-bg/85 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Main">
          <a href="#top" className="font-display text-xl font-extrabold">Arin Jain</a>
          <button className="rounded-lg border border-line px-3.5 py-2 text-sm md:hidden" aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>Menu</button>
          <ul id="menu" className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-16 flex-col border-b border-line bg-bg px-6 py-2 md:static md:flex md:flex-row md:gap-8 md:border-0 md:bg-transparent md:p-0`}>
            {nav.map(([l, h]) => (
              <li key={h}><a className="block py-3 text-[15px] text-muted hover:text-ink md:py-0" href={h} onClick={() => setOpen(false)}>{l}</a></li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="pb-8">
        <div className="relative">
          <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-8 pt-20 sm:pt-28 lg:grid-cols-[1fr_320px]">
            <div className="hero-in">
            <p className="mb-8 inline-flex items-center gap-2 text-sm text-muted"><span className="size-2 rounded-full bg-ok" />Open to internships and AI/ML roles</p>
            <h1 className="font-display text-5xl font-extrabold leading-none tracking-tight sm:text-6xl lg:text-7xl">Arin Jain</h1>
            <p className="mt-5 font-mono text-sm text-accent2 sm:text-base">AI &amp; Data Science | ML Engineer | GenAI &amp; RAG Developer</p>
            <p className="mt-6 max-w-[52ch] text-lg text-muted sm:text-xl">I build ML, RAG and agentic AI systems, and ship them as working applications.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-accent px-6 py-3 font-semibold text-bg transition-colors hover:bg-accent-hover">View Projects</a>
              <a href="#contact" className="rounded-full border border-line px-6 py-3 font-semibold hover:border-accent">Contact Me</a>
              <a href={LINKS.github} {...ext} className="rounded-full border border-line px-6 py-3 font-semibold hover:border-accent">GitHub</a>
              <a href={LINKS.linkedin} {...ext} className="rounded-full border border-line px-6 py-3 font-semibold hover:border-accent">LinkedIn</a>
            </div>
            </div>
            <div className="order-first lg:order-none"><Avatar /></div>
          </div>
        </div>

        <Section id="about" title="About me">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div className="max-w-[62ch] space-y-5 text-lg text-muted">
              <p>I’m Arin Jain, an AI &amp; Data Science engineer focused on building practical machine learning and generative AI systems. My work spans machine learning, deep learning, NLP, RAG, transformers, and AI agents, with an emphasis on turning ideas into usable applications.</p>
              <p>I enjoy working across the complete AI development lifecycle, from data preprocessing and model development to retrieval pipelines, agentic workflows, APIs, and deployment. I’ve built projects involving large-scale accident prediction, semantic resume screening, RAG-based course planning, automated customer support, and multi-agent research workflows.</p>
              <p>Currently, I’m deepening my expertise in production-ready GenAI systems, agentic RAG, cloud AI, and MLOps while continuing to build projects that solve practical problems.</p>
            </div>
            <div className="self-start rounded-2xl border border-line bg-card p-6">
              <h3 className="font-display text-lg font-bold">Currently building and learning</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {building.map((b) => <li key={b} className="rounded-md border border-line px-3 py-1 text-sm">{b}</li>)}
              </ul>
            </div>
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <dl className="grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((g) => (
              <div key={g.group} className="border-t border-line py-5">
                <dt className="font-display text-lg font-bold">{g.group}</dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((i) => <span key={i} className="rounded-md border border-line px-2.5 py-0.5 text-sm text-muted">{i}</span>)}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="projects" title="Featured projects"><Projects /></Section>

        <Section id="experience" title="Experience and leadership">
          <div className="grid gap-4">
            <div className="grid gap-4 rounded-2xl border border-line bg-card p-6 sm:grid-cols-[200px_1fr] sm:p-8">
              <p className="text-muted">18 March 2026</p>
              <div>
                <h3 className="font-display text-2xl font-bold">Hands-on AI/ML workshop, GDG On Campus MIT-A</h3>
                <p className="mt-3 max-w-[62ch] text-muted">Conducted the Deep Learning part of the workshop, covering activation functions, ANN and CNN, with a practical demo of an ASL (sign language) classifier. Students applied the basics in real time.</p>
              </div>
            </div>
            <div className="grid gap-4 rounded-2xl border border-line bg-card p-6 sm:grid-cols-[200px_1fr] sm:p-8">
              <p className="text-muted">Apr – May 2025<br />Remote</p>
              <div>
                <h3 className="font-display text-2xl font-bold">AI Intern, Edunet Foundation</h3>
                <ul className="mt-3 max-w-[62ch] list-disc space-y-1.5 pl-5 text-muted marker:text-accent">
                  <li>Implemented supervised and unsupervised machine learning algorithms with Scikit-learn.</li>
                  <li>Ran EDA, preprocessing and feature engineering on structured datasets.</li>
                  <li>Developed a CNN-based object localization model using bounding box regression.</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section id="certifications" title="Certifications">
          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
            {["Cloud and AI", "Academic (NPTEL)"].map((g) => (
              <div key={g}>
                <h3 className="mb-1 font-mono text-xs uppercase tracking-wider text-accent">{g}</h3>
                <ul>
                  {certificates.filter((c) => c.group === g).map((c) => (
                    <li key={c.name} className="flex items-start justify-between gap-4 border-t border-line py-5">
                      <div>
                        <p className="font-display text-lg font-bold leading-snug">{c.name}</p>
                        <p className="mt-1 text-sm text-muted">{c.by}, {c.when}</p>
                      </div>
                      {c.url && <a href={c.url} {...ext} className="shrink-0 rounded-full border border-line px-4 py-1.5 text-sm hover:border-accent" aria-label={`Verify ${c.name}`}>Verify</a>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="rounded-2xl border border-line bg-card p-6 sm:p-8">
            <h3 className="font-display text-2xl font-bold">B.Tech, Artificial Intelligence &amp; Data Science</h3>
            <p className="mt-1 text-muted">Maharashtra Institute of Technology, Chhatrapati Sambhajinagar</p>
            <p className="mt-1 text-muted">CGPA 9.08 · Aug 2023 – Jul 2027 (expected)</p>
          </div>
        </Section>

        <Section id="achievements" title="Highlights">
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {achievements.map((a) => (
              <div key={a.value} className="bg-card p-6">
                <dt className="font-display text-3xl font-extrabold text-accent">{a.value}</dt>
                <dd className="mt-1 text-muted">{a.text}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="contact" title="Let’s build something">
          <p className="max-w-[50ch] text-lg text-muted">I’m looking for roles where I can build and ship AI applications. The fastest way to reach me is email.</p>
          <a className="mt-6 inline-block break-all border-b-2 border-accent font-display text-xl font-bold hover:text-accent-hover sm:text-2xl" href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={LINKS.resume} {...ext} className="rounded-full bg-accent px-6 py-3 font-semibold text-bg hover:bg-accent-hover">Resume</a>
            <a href={LINKS.linkedin} {...ext} className="rounded-full border border-line px-6 py-3 font-semibold hover:border-accent">LinkedIn</a>
            <a href={LINKS.github} {...ext} className="rounded-full border border-line px-6 py-3 font-semibold hover:border-accent">GitHub</a>
          </div>
        </Section>
      </main>

      <footer className="mx-auto mt-16 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-line px-6 py-8 text-sm text-muted">
        <p>© 2026 Arin Jain</p>
        <p className="flex gap-5">
          <a className="hover:text-ink" href={LINKS.github} {...ext}>GitHub</a>
          <a className="hover:text-ink" href={LINKS.linkedin} {...ext}>LinkedIn</a>
          <a className="hover:text-ink" href="#top">Back to top</a>
        </p>
      </footer>
    </>
  );
}
