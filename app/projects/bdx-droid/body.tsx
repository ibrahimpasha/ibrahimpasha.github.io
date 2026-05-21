import { ProjectSection } from "@/app/components/ProjectShell";

export function BdxDroidBody() {
  return (
    <>
      <ProjectSection label="Summary">
        <p>
          BDX Droid Mini is a bipedal robot inspired by the original Disney BDX
          paper. I 3D-printed all the structural parts, assembled and wired the
          hardware myself, and trained a walking policy entirely in simulation
          before deploying it onto the real robot.
        </p>
        <p>
          The whole build took roughly three months and was a hands-on study in
          sim-to-real transfer, RL training, and embedded deployment.
        </p>
      </ProjectSection>

      <ProjectSection label="Method">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Trained the locomotion policy in MuJoCo Playground using Proximal
            Policy Optimization (PPO).
          </li>
          <li>
            Exported the trained policy and ran real-time control on Jetson
            Orin Nano.
          </li>
          <li>
            Used a SteelSeries joystick for high-level commands (walk, stop,
            turn) layered on top of the learned low-level controller.
          </li>
        </ul>
      </ProjectSection>

      <ProjectSection label="Results">
        <p>
          The robot walks reliably on flat indoor surfaces. The sim policy
          transferred cleanly enough that it could follow joystick commands
          out-of-the-box on hardware.
        </p>
      </ProjectSection>

      <ProjectSection label="What broke">
        <p>
          On real-world terrain &mdash; grass in particular &mdash; the robot
          got wobbly and started to hurt itself on falls. The flat-ground
          policy didn&rsquo;t generalize to uneven contact dynamics.
        </p>
      </ProjectSection>

      <ProjectSection label="Next">
        <p>
          Retraining on rough and uneven terrain in Isaac Lab to improve
          outdoor robustness, plus tuning reward shaping around foot contact
          and recovery behaviors.
        </p>
      </ProjectSection>

      <ProjectSection label="Credits">
        <p>
          Huge thanks to Antoine Pirrone, Jaime Machuca, and the open-source
          BDX Mini community. Original Disney paper linked from the LinkedIn
          writeup.
        </p>
      </ProjectSection>
    </>
  );
}
