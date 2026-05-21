import type { Metadata } from "next";
import { getProject } from "@/lib/projects";
import { ProjectShell } from "@/app/components/ProjectShell";
import { LeKiwiGr00tBody } from "./body";

const project = getProject("lekiwi-gr00t")!;

export const metadata: Metadata = {
  title: `${project.title} — Ibrahim Mohammad`,
  description: project.tagline,
};

export default function LeKiwiGr00tPage() {
  return (
    <ProjectShell project={project}>
      <LeKiwiGr00tBody />
    </ProjectShell>
  );
}
