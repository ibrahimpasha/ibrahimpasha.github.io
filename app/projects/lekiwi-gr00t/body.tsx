import { ProjectSection } from "@/app/components/ProjectShell";

export function LeKiwiGr00tBody() {
  return (
    <>
      <ProjectSection label="Summary">
        <p>
          Finetuned NVIDIA&rsquo;s GR00T N1 robotic foundation model on a local
          RTX 5080 and deployed it on a Jetson Nano Super powering a LeKiwi
          mobile manipulator &mdash; think of it as Tesla FSD-style edge
          inference, but for a small mobile robot.
        </p>
      </ProjectSection>

      <ProjectSection label="Training stack">
        <ul className="list-disc space-y-2 pl-5">
          <li>RTX 5080 (16GB) on CUDA 12.8 with NVIDIA 570+ open drivers.</li>
          <li>
            PyTorch 2.8 nightly &mdash; 2.5.1 wouldn&rsquo;t initialize on the
            5080.
          </li>
          <li>
            Hyperparameter tuning to fit the model in 16GB. Training run took
            roughly 3 hours.
          </li>
          <li>192 episodes of teleoperated demonstration data.</li>
        </ul>
      </ProjectSection>

      <ProjectSection label="Edge deployment">
        <ul className="list-disc space-y-2 pl-5">
          <li>Jetson Nano Super with 64GB memory swap and 1TB M.2 SSD.</li>
          <li>
            <span className="font-mono text-xs uppercase tracking-[0.1em]">
              isaac-gr00t
            </span>{" "}
            Jetson container with a handful of Dockerfile tweaks.
          </li>
          <li>Inference client and server both running locally on-device.</li>
          <li>Modified gripper based on the Pollen Robotics design.</li>
        </ul>
      </ProjectSection>

      <ProjectSection label="What's next">
        <p>
          Client and server co-located on Jetson introduces some inference
          latency &mdash; that&rsquo;s the next optimization target. 192
          episodes is enough for basic task mastery; scaling demonstrations
          via NVIDIA Isaac Sim synthetic data is the path to harder behaviors.
        </p>
      </ProjectSection>

      <ProjectSection label="Credits">
        <p>
          Thanks to the NVIDIA ecosystem (Jim Fan, Dustin Franklin, You Liang
          Tan, Johnny Núñez Cano and team) and the Hugging Face LeRobot
          community (Remi Cadene&rsquo;s team).
        </p>
      </ProjectSection>
    </>
  );
}
