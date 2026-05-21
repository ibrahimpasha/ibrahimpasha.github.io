"use client";

import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/lib/projects";
import { MediaPlaceholder } from "./MediaPlaceholder";

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  const [hover, setHover] = useState(false);
  const num = String(project.order).padStart(2, "0");

  return (
    <article
      id={project.slug}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative min-w-0 overflow-hidden border border-ink/15 bg-paper transition-colors hover:border-ink"
    >
      <Link
        href={`/projects/${project.slug}/`}
        aria-label={`Open ${project.title}`}
        className="absolute inset-0 z-10"
      />

      <div className="relative aspect-video w-full overflow-hidden bg-ink">
        {project.youtubeId ? (
          hover ? (
            <iframe
              key={`play-${project.youtubeId}`}
              src={buildEmbedUrl(project.youtubeId)}
              title={project.title}
              allow="autoplay; encrypted-media; picture-in-picture"
              className="absolute inset-0 h-full w-full border-0"
            />
          ) : (
            <>
              <img
                src={`https://i.ytimg.com/vi/${project.youtubeId}/maxresdefault.jpg`}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="pointer-events-none absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center border border-paper/70 bg-paper/15 font-mono text-sm text-paper backdrop-blur-sm">
                &#9654;
              </div>
            </>
          )
        ) : (
          <MediaPlaceholder
            label={project.mediaPlaceholder ?? project.title}
          />
        )}
      </div>

      <div className="relative z-20 space-y-3 p-5 sm:p-6">
        <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.14em] text-ink/55">
          <span>
            {num} &middot; {project.domain}
          </span>
          <span>{project.year}</span>
        </div>
        <h3 className="text-xl font-medium leading-tight tracking-tight sm:text-2xl">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-ink/75 sm:text-base">
          {project.tagline}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="border border-ink/15 px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.1em] text-ink/65"
            >
              {tag}
            </span>
          ))}
        </div>
        <div
          className={`pt-1 font-mono text-xs uppercase tracking-[0.14em] transition-colors ${
            hover ? "text-ink" : "text-ink/55"
          }`}
        >
          Read full writeup &rarr;
        </div>
      </div>
    </article>
  );
}

function buildEmbedUrl(videoId: string): string {
  const params = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    loop: "1",
    playlist: videoId,
    controls: "0",
    modestbranding: "1",
    rel: "0",
    playsinline: "1",
    disablekb: "1",
    iv_load_policy: "3",
    fs: "0",
  });
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}
