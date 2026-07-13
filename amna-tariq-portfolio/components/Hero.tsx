import RevealOnScroll from "./RevealOnScroll";
import { heroSummary } from "@/data/projects";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-40 pb-24 md:pt-52 md:pb-28">
      {/* soft gradient glow orbs — atmospheric, not literal */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-20 h-[26rem] w-[26rem] rounded-full bg-gold/20 blur-[110px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -left-24 h-[20rem] w-[20rem] rounded-full bg-orchid/20 blur-[100px]"
      />

      <div className="relative max-w-content mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold mb-6">
            Full-Stack Software Engineer — Lahore, Pakistan
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={80}>
          <h1 className="font-display text-balance text-4xl sm:text-5xl md:text-7xl leading-[1.08] max-w-4xl">
            I build the whole system —{" "}
            <span className="italic text-gradient-warm">web, mobile,</span> and the{" "}
            <span className="italic text-gradient-dusk">AI in between.</span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={160}>
          <p className="mt-8 max-w-xl text-porcelain-muted text-base md:text-lg leading-relaxed">
            {heroSummary}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-warm px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] text-base font-medium hover:opacity-90 transition-opacity"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] text-porcelain hover:border-gold/50 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
