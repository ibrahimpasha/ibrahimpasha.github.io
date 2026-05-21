"use client";

import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/lib/projects";
import { MediaPlaceholder } from "./MediaPlaceholder";

type Props = {
  project: Project;
  children?: React.ReactNode;
};

export function ProjectCard({ project, children }: Props) {
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
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="pointer-events-none absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center border border-paper/70 bg-paper/15 font-mono text-base text-paper backdrop-blur-sm">
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

      <div className="relative z-20 space-y-5 p-8 sm:p-10 lg:p-12">
        <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.14em] text-ink/55">
          <span>
            {num} &middot; {project.domain}
          </span>
          <span>{project.year}</span>
        </div>

        <h3 className="text-2xl font-medium leading-tight tracking-tight sm:text-3xl lg:text-4xl">
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

        <div
          aria-hidden={!hover}
          className="grid transition-[grid-template-rows] duration-500 ease-out"
          style={{ gridTemplateRows: hover ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div
              className={`mt-6 space-y-7 border-t border-ink/15 pt-6 transition-opacity duration-300 ${
                hover ? "opacity-100 delay-200" : "opacity-0"
              }`}
            >
              {children}
            </div>
          </div>
        </div>

        <div
          className={`pt-2 font-mono text-xs uppercase tracking-[0.14em] transition-colors ${
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
