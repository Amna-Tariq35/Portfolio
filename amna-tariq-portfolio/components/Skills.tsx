import { skillGroups } from "@/data/projects";
import RevealOnScroll from "./RevealOnScroll";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold mb-4">Capabilities</p>
          <h2 className="font-display text-3xl md:text-5xl max-w-2xl text-balance">
            What I work with.
          </h2>
        </RevealOnScroll>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <RevealOnScroll key={group.label} delay={i * 60}>
              <div className="glass rounded-2xl p-6 h-full">
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-porcelain-muted">
                  {group.label}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                  {group.items.map((item, idx) => (
                    <li key={item} className="font-display text-lg text-porcelain italic">
                      {item}
                      {idx < group.items.length - 1 && (
                        <span className="not-italic text-porcelain-muted">,</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
