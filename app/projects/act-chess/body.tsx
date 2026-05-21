import { ProjectSection } from "@/app/components/ProjectShell";

export function ActChessBody() {
  return (
    <>
      <ProjectSection label="Summary">
        <p>
          Trained an Action Chunking with Transformers (ACT) policy on a
          low-cost tabletop robotic arm using Hugging Face&rsquo;s LeRobot
          library, teaching it to pick up and place a chess piece.
        </p>
      </ProjectSection>

      <ProjectSection label="Method">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Behavior cloning via ACT &mdash; the policy learns from short
            chunks of human teleop demonstration.
          </li>
          <li>
            Trained directly on a local machine with an NVIDIA RTX 3080
            &mdash; no cloud GPU needed.
          </li>
          <li>
            Used the LeRobot library&rsquo;s ACT implementation and visual
            inputs from on-arm cameras.
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection label="Results">
        <p>
          The arm reliably picked up the chess piece and placed it at a target
          square, generalizing across small placement variations. The dataset
          and writeup were published openly to help others get started with
          imitation learning on real hardware.
        </p>
      </ProjectSection>

      <ProjectSection label="Credits">
        <p>
          Thanks to Remi Cadene and the LeRobot team for making the hardware
          designs accessible. The published dataset is linked from the
          LinkedIn writeup.
        </p>
      </ProjectSection>
    </>
  );
}
