import { aboutText } from "@/data/projects";
import RevealOnScroll from "./RevealOnScroll";

const pillars = [
  { label: "Full-Stack Web", detail: "Next.js, React, Node.js, Express" },
  { label: "Mobile & AR", detail: "Flutter, DeepAR, Google ML Kit" },
  { label: "AI Integration", detail: "Gemini, Groq, Vercel AI SDK" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[30rem] w-[30rem] rounded-full bg-rose/10 blur-[130px]"
      />

      <div className="relative max-w-content mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold mb-4">About</p>
        </RevealOnScroll>

        <div className="grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-16 items-start">
          <RevealOnScroll delay={60}>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-balance">
              Engineering things people can{" "}
              <span className="italic text-gradient-warm">actually use.</span>
            </h2>
          </RevealOnScroll>

          <div>
            <RevealOnScroll delay={120}>
              <p className="text-porcelain-muted text-base md:text-lg leading-relaxed">
                {aboutText}
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={180}>
              <div className="mt-10 grid sm:grid-cols-3 gap-4">
                {pillars.map((p) => (
                  <div key={p.label} className="glass rounded-2xl p-5">
                    <p className="font-display text-lg text-porcelain">{p.label}</p>
                    <p className="mt-1.5 font-mono text-[11px] text-porcelain-muted leading-relaxed">
                      {p.detail}
                    </p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
