import type { Metadata } from "next";
import { getProject } from "@/lib/projects";
import { ProjectShell } from "@/app/components/ProjectShell";
import { BdxDroidBody } from "./body";

const project = getProject("bdx-droid")!;

export const metadata: Metadata = {
  title: `${project.title} — Ibrahim Mohammad`,
  description: project.tagline,
};

export default function BdxDroidPage() {
  return (
    <ProjectShell project={project}>
      <BdxDroidBody />
    </ProjectShell>
  );
}
