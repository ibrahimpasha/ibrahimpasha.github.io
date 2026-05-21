import Link from "next/link";
import type { Project } from "@/lib/projects";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { YouTubeEmbed } from "./YouTubeEmbed";

export function ProjectCard({ project }: { project: Project }) {
  const num = String(project.order).padStart(2, "0");
  return (
    <Link
      href={`/projects/${project.slug}/`}
      className="group block border border-ink/15 bg-paper transition-colors hover:border-ink"
    >
      {project.youtubeId ? (
        <YouTubeEmbed
          videoId={project.youtubeId}
          variant="hero-loop"
          title={project.title}
        />
      ) : (
        <MediaPlaceholder label={project.mediaPlaceholder ?? project.title} />
      )}
      <div className="space-y-4 p-7 sm:p-9">
        <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.14em] text-ink/55">
          <span>
            {num} &middot; {project.domain}
          </span>
          <span>{project.year}</span>
        </div>
        <h3 className="text-2xl font-medium leading-tight tracking-tight sm:text-3xl">
          {project.title}
        </h3>
        <p className="text-base leading-relaxed text-ink/75 sm:text-lg">
          {project.tagline}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="border border-ink/15 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-ink/65"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="pt-2 font-mono text-xs uppercase tracking-[0.14em] text-ink/55 group-hover:text-ink">
          Read &rarr;
        </div>
      </div>
    </Link>
  );
}
