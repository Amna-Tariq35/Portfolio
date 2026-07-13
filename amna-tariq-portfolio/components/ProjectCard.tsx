import { Project } from "@/data/projects";
import ProjectThumb from "./ProjectThumb";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div className="relative pl-10 md:pl-14">
      <span
        aria-hidden
        className="absolute left-0 top-2 h-3 w-3 rounded-full border-2 border-gold bg-base"
      />

      <div className="grid md:grid-cols-[1fr_1.6fr] gap-6 md:gap-10 pb-16">
        <div>
          <ProjectThumb project={project} className="aspect-[4/3] w-full mb-4" />
          <span className="font-mono text-xs text-porcelain-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-2xl md:text-3xl mt-1 text-porcelain">{project.name}</h3>
          <p className="mt-1 text-rose text-sm">{project.tagline}</p>
        </div>

        <div>
          <p className="text-porcelain-muted leading-relaxed">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-base-line px-3 py-1 font-mono text-[11px] text-porcelain-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.link && (
            <a
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-gold hover:text-gold-soft transition-colors"
            >
              {project.link.label}
              <span aria-hidden>→</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
