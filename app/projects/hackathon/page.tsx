import type { Metadata } from "next";
import { getProject } from "@/lib/projects";
import { ProjectShell } from "@/app/components/ProjectShell";
import { HackathonBody } from "./body";

const project = getProject("hackathon")!;

export const metadata: Metadata = {
  title: `${project.title} — Ibrahim Mohammad`,
  description: project.tagline,
};

export default function HackathonPage() {
  return (
    <ProjectShell project={project}>
      <HackathonBody />
    </ProjectShell>
  );
}
