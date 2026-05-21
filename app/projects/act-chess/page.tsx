import type { Metadata } from "next";
import { getProject } from "@/lib/projects";
import { ProjectShell } from "@/app/components/ProjectShell";
import { ActChessBody } from "./body";

const project = getProject("act-chess")!;

export const metadata: Metadata = {
  title: `${project.title} — Ibrahim Mohammad`,
  description: project.tagline,
};

export default function ActChessPage() {
  return (
    <ProjectShell project={project}>
      <ActChessBody />
    </ProjectShell>
  );
}
