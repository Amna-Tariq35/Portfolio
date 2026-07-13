import Image from "next/image";
import { Project } from "@/data/projects";

/**
 * Renders a real screenshot if project.image is set (drop files in /public/projects/
 * and point the project's `image` field at them). Otherwise falls back to a
 * generated gradient "poster" using the project's initial — so the grid never
 * looks empty while real screenshots are still being collected.
 */
export default function ProjectThumb({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  if (project.image) {
    return (
      <div className={`relative overflow-hidden rounded-2xl ${className}`}>
        <Image
          src={project.image}
          alt={`${project.name} preview`}
          fill
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${project.gradient} ${className}`}
    >
      <span
        aria-hidden
        className="absolute -bottom-6 -right-2 font-display italic text-[6rem] leading-none text-base/20 select-none"
      >
        {project.name.charAt(0)}
      </span>
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(19,11,21,0.9) 1px, transparent 0)",
          backgroundSize: "14px 14px",
        }}
      />
    </div>
  );
}
