import Link from "next/link";
import type { Project } from "@/lib/projects";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { YouTubeEmbed } from "./YouTubeEmbed";

type ProjectShellProps = {
  project: Project;
  children: React.ReactNode;
};

export function ProjectShell({ project, children }: ProjectShellProps) {
  const num = String(project.order).padStart(2, "0");
  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <Link
        href="/#projects"
        className="font-mono text-xs uppercase tracking-[0.14em] text-ink/55 hover:text-ink"
      >
        &larr; Back to projects
      </Link>

      <header className="mt-8 space-y-4 border-b border-ink/15 pb-8">
        <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.14em] text-ink/55">
          <span>
            {num} &middot; {project.domain}
          </span>
          <span>{project.year}</span>
        </div>
        <h1 className="text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="text-base leading-relaxed text-ink/75 sm:text-lg">
          {project.tagline}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border border-ink/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-ink/65"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="mt-8">
        {project.youtubeId ? (
          <YouTubeEmbed videoId={project.youtubeId} title={project.title} />
        ) : (
          <MediaPlaceholder label={project.mediaPlaceholder ?? project.title} />
        )}
      </div>

      <div className="prose-content mt-10 space-y-8">{children}</div>
    </article>
  );
}

type SectionProps = {
  label: string;
  children: React.ReactNode;
};

export function ProjectSection({ label, children }: SectionProps) {
  return (
    <section className="grid gap-4 md:grid-cols-[140px_1fr]">
      <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55">
        {label}
      </h2>
      <div className="space-y-3 text-sm leading-relaxed text-ink/85 sm:text-base">
        {children}
      </div>
    </section>
  );
}
