import { education } from "@/data/projects";
import RevealOnScroll from "./RevealOnScroll";

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold mb-4">Education</p>

          <div className="glass rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
            <div>
              <h2 className="font-display text-2xl md:text-4xl text-balance text-porcelain">
                {education.university}
              </h2>
              <p className="mt-2 text-porcelain-muted italic font-display text-lg">{education.degree}</p>
            </div>
            <div className="text-left md:text-right font-mono text-sm text-porcelain-muted shrink-0">
              <p>{education.dates}</p>
              <p className="text-gold mt-1">{education.gpa}</p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
