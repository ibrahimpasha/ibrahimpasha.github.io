import { ProjectSection } from "@/app/components/ProjectShell";

export function HackathonBody() {
  return (
    <>
      <ProjectSection label="Summary">
        <p>
          At the Seeed Studio × NVIDIA Embodied AI Hackathon, I built a LeKiwi
          mobile robot end-to-end with my team and trained both Pi0 (vision-
          language-action) and ACT policies on top of the Hugging Face LeRobot
          platform.
        </p>
      </ProjectSection>

      <ProjectSection label="What we built">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Full LeKiwi assembly &mdash; hardware build, calibration,
            teleoperation pipeline.
          </li>
          <li>
            Finetuned the Pi0 VLA model using access to NVIDIA H100 GPUs
            provided by Nebius.
          </li>
          <li>ACT policy as a baseline for comparison.</li>
        </ul>
      </ProjectSection>

      <ProjectSection label="Takeaways">
        <p>
          Side-by-side training of Pi0 and ACT on the same teleop data made
          the cost/quality trade-offs of VLA models concrete &mdash; broader
          generalization at the price of more compute and data.
        </p>
      </ProjectSection>

      <ProjectSection label="Credits">
        <p>
          Thanks to Dustin Franklin and the NVIDIA team (Chitoku Yato, Ashwin
          Varghese Kuruttukulam, Asier Arranz), to the organizers
          (Baladhurgesh Balagurusamy Paramasivan, Aditya Bangde, Leah, Jinger
          Zeng, Elaine Wu), and to the SIGrobotics / LeRobot open-source
          community.
        </p>
      </ProjectSection>
    </>
  );
}
