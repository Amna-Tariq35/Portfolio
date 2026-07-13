import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectThumb from "./ProjectThumb";
import RevealOnScroll from "./RevealOnScroll";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold mb-4">Selected Work</p>
          <h2 className="font-display text-3xl md:text-5xl max-w-2xl text-balance">
            Products I&apos;ve built, start to finish.
          </h2>
        </RevealOnScroll>

        <div className="relative mt-16 before:absolute before:left-[5px] md:before:left-[5px] before:top-2 before:bottom-16 before:w-px before:bg-base-line">
          {featured.map((project, i) => (
            <RevealOnScroll key={project.id} delay={i * 60}>
              <ProjectCard project={project} index={i} />
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll>
          <div className="mt-4 border-t border-base-line pt-12">
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-porcelain-muted mb-6">
              More Projects
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {more.map((project) => (
                <a
                  key={project.id}
                  href={project.link?.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass rounded-2xl p-4 hover:border-gold/40 transition-colors"
                >
                  <ProjectThumb project={project} className="aspect-video w-full mb-4" />
                  <h4 className="font-display text-lg text-porcelain group-hover:text-gold transition-colors">
                    {project.name}
                  </h4>
                  <p className="mt-1 text-xs text-porcelain-muted">{project.tagline}</p>
                  <p className="mt-3 font-mono text-[11px] text-porcelain-muted">
                    {project.stack.slice(0, 3).join(" · ")}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
