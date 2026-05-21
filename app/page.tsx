import Link from "next/link";
import { projects, getProject } from "@/lib/projects";
import { MediaPlaceholder } from "./components/MediaPlaceholder";
import { YouTubeEmbed } from "./components/YouTubeEmbed";
import { ProjectCard } from "./components/ProjectCard";
import { BdxDroidBody } from "./projects/bdx-droid/body";
import { LeKiwiGr00tBody } from "./projects/lekiwi-gr00t/body";
import { ActChessBody } from "./projects/act-chess/body";
import { HackathonBody } from "./projects/hackathon/body";

const bodyBySlug: Record<string, React.ReactNode> = {
  "bdx-droid": <BdxDroidBody />,
  "lekiwi-gr00t": <LeKiwiGr00tBody />,
  "act-chess": <ActChessBody />,
  hackathon: <HackathonBody />,
};

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Press />
      <Contact />
    </>
  );
}

function Hero() {
  const bdx = getProject("bdx-droid");
  return (
    <section className="border-b border-ink/15">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.25fr] md:items-center md:gap-14 md:py-24">
        <div className="space-y-5">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55">
            Robotics &middot; Embodied AI
          </div>
          <h1 className="text-2xl font-medium leading-[1.1] tracking-tight sm:text-3xl md:text-4xl">
            Building robots that learn to move.
          </h1>
          <p className="max-w-prose text-sm leading-relaxed text-ink/75 sm:text-base">
            Applied Scientist at Amazon. RL, sim-to-real, and embedded VLA on
            Jetson.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="#projects"
              className="border border-ink bg-ink px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-paper transition-colors hover:bg-transparent hover:text-ink"
            >
              View projects
            </Link>
            <Link
              href="#contact"
              className="border border-ink/30 px-4 py-2 font-mono text-xs uppercase tracking-[0.14em] text-ink/75 transition-colors hover:border-ink hover:text-ink"
            >
              Get in touch
            </Link>
          </div>
        </div>
        <div>
          {bdx?.youtubeId ? (
            <YouTubeEmbed
              videoId={bdx.youtubeId}
              variant="hero-loop"
              title="BDX Droid walking"
            />
          ) : (
            <MediaPlaceholder label="BDX droid walking loop" />
          )}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="border-b border-ink/15">
      <div className="mx-auto max-w-[120rem] px-4 py-20 sm:px-6 lg:px-8">
        <header className="mx-auto mb-10 flex w-full max-w-[66rem] items-baseline justify-between">
          <h2 className="text-xs font-medium uppercase tracking-[0.18em] text-ink/55 sm:text-sm">
            Selected work
          </h2>
          <span className="font-mono text-xs text-ink/40">
            {projects.length} projects
          </span>
        </header>
        <div className="flex flex-col gap-12">
          {chunk(projects, 2).map((row, i) => (
            <div key={i} className="project-row-side relative">
              {row[0] ? (
                <aside className="project-panel project-panel-left">
                  <div className="project-panel-inner">
                    {bodyBySlug[row[0].slug]}
                    {row[0].linkedinUrl ? (
                      <a
                        href={row[0].linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-2 border border-ink/25 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/75 transition-colors hover:border-ink hover:text-ink"
                      >
                        View on LinkedIn
                        <span aria-hidden>&#8599;</span>
                      </a>
                    ) : null}
                  </div>
                </aside>
              ) : null}
              {row[1] ? (
                <aside className="project-panel project-panel-right">
                  <div className="project-panel-inner">
                    {bodyBySlug[row[1].slug]}
                    {row[1].linkedinUrl ? (
                      <a
                        href={row[1].linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-2 border border-ink/25 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-ink/75 transition-colors hover:border-ink hover:text-ink"
                      >
                        View on LinkedIn
                        <span aria-hidden>&#8599;</span>
                      </a>
                    ) : null}
                  </div>
                </aside>
              ) : null}
              <div className="project-row-tiles">
                {row.map((p) => (
                  <ProjectCard key={p.slug} project={p} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-ink/15">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-[180px_1fr] md:items-baseline">
        <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55">
          About
        </h2>
        <div className="space-y-5 text-base leading-relaxed text-ink/85 sm:text-lg">
          <p>
            I&rsquo;m an applied scientist at Amazon who builds robots on
            nights and weekends. My focus is getting policies trained in
            simulation to actually work on physical hardware &mdash; bipedal
            locomotion with RL, finetuning robotic foundation models, and
            squeezing real-time inference onto edge devices like Jetson.
          </p>
          <p>
            Day job is multi-agent AI systems, LLM fine-tuning, and
            large-scale ML pipelines.
          </p>
          <dl className="grid grid-cols-2 gap-y-3 pt-4 font-mono text-xs uppercase tracking-[0.12em]">
            <dt className="text-ink/45">Learning</dt>
            <dd className="text-ink/85">PPO &middot; ACT &middot; VLA finetune</dd>
            <dt className="text-ink/45">Simulation</dt>
            <dd className="text-ink/85">MuJoCo Playground &middot; Isaac Lab</dd>
            <dt className="text-ink/45">Deployment</dt>
            <dd className="text-ink/85">Jetson Orin &middot; Jetson Nano Super</dd>
            <dt className="text-ink/45">Hardware</dt>
            <dd className="text-ink/85">3D print &middot; assemble &middot; wire</dd>
          </dl>
        </div>
      </div>
    </section>
  );
}

function Press() {
  const items = [
    {
      source: "Open Robotics",
      title:
        "Featured at the NVIDIA × Seeed Studio × Hackster Embodied AI Hackathon",
      meta: "2025",
    },
    {
      source: "NVIDIA",
      title:
        "Working alongside Jim Fan and Dustin Franklin's GR00T / Jetson teams",
      meta: "2025",
    },
    {
      source: "Hugging Face LeRobot",
      title: "Open-source ACT chess manipulation dataset and writeup",
      meta: "2024",
    },
  ];

  return (
    <section id="press" className="border-b border-ink/15">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-[180px_1fr] md:items-baseline">
        <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55">
          Featured
        </h2>
        <ul className="divide-y divide-ink/15">
          {items.map((item, i) => (
            <li
              key={i}
              className="grid grid-cols-[110px_1fr_60px] gap-4 py-4 text-sm sm:grid-cols-[150px_1fr_80px] sm:text-base"
            >
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink/55">
                {item.source}
              </span>
              <span className="text-ink/85">{item.title}</span>
              <span className="text-right font-mono text-xs text-ink/55">
                {item.meta}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  const links = [
    {
      label: "Email",
      href: "mailto:ibrahimpasha.m.d@gmail.com",
      text: "ibrahimpasha.m.d@gmail.com",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/heyitsme/",
      text: "/in/heyitsme",
    },
    {
      label: "GitHub",
      href: "https://github.com/ibrahimpasha",
      text: "@ibrahimpasha",
    },
    {
      label: "Hugging Face",
      href: "https://huggingface.co/ibru",
      text: "@ibru",
    },
  ];

  return (
    <section id="contact">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 md:grid-cols-[180px_1fr] md:items-baseline">
        <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-ink/55">
          Contact
        </h2>
        <div className="space-y-6">
          <p className="max-w-prose text-base leading-relaxed text-ink/85 sm:text-lg">
            Open to conversations with robotics labs, startups, and research
            teams working on embodied AI, locomotion, manipulation, and
            sim-to-real. The fastest way to reach me is email.
          </p>
          <ul className="divide-y divide-ink/15 border-y border-ink/15">
            {links.map((l) => (
              <li
                key={l.label}
                className="grid grid-cols-[110px_1fr] items-center gap-4 py-3 text-sm sm:grid-cols-[150px_1fr] sm:text-base"
              >
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-ink/55">
                  {l.label}
                </span>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    l.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-ink/85 underline-offset-4 hover:underline"
                >
                  {l.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
