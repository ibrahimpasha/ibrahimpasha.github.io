export type Project = {
  slug: string;
  order: number;
  title: string;
  tagline: string;
  summary: string;
  year: string;
  domain: "Bipedal RL" | "Mobile VLA" | "Manipulation" | "Community";
  tags: string[];
  mediaPlaceholder: string;
  youtubeId?: string;
  linkedinUrl?: string;
  externalLinks?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "bdx-droid",
    order: 1,
    title: "BDX Droid Mini",
    tagline: "Bipedal RL, sim-to-real on Jetson Orin Nano",
    summary:
      "3D-printed and wired a Disney BDX-inspired bipedal robot, trained a walking policy in MuJoCo Playground with PPO, and deployed it on Jetson Orin Nano for real-time control with a joystick.",
    year: "2026",
    domain: "Bipedal RL",
    tags: [
      "PPO",
      "MuJoCo Playground",
      "Sim-to-Real",
      "Jetson Orin Nano",
      "3D Printing",
    ],
    mediaPlaceholder: "BDX droid walking on grass",
    youtubeId: "5-WnzBsH1KU",
  },
  {
    slug: "lekiwi-gr00t",
    order: 2,
    title: "LeKiwi + GR00T N1 on Jetson",
    tagline: "Finetuning and deploying NVIDIA's robotic foundation model on edge",
    summary:
      "Finetuned NVIDIA's GR00T N1 VLA on an RTX 5080 and deployed it on a Jetson Nano Super powering a LeKiwi mobile manipulator. 192 episodes of teleoperated data; inference client and server running locally on-device.",
    year: "2025",
    domain: "Mobile VLA",
    tags: [
      "GR00T N1",
      "VLA Finetune",
      "Jetson Nano Super",
      "LeRobot",
      "CUDA 12.8",
    ],
    mediaPlaceholder: "LeKiwi + GR00T N1 inference on Jetson",
    youtubeId: "xEyELB9Vrjc",
  },
  {
    slug: "act-chess",
    order: 3,
    title: "ACT Chess Pick-and-Place",
    tagline: "Imitation learning for a tabletop manipulator",
    summary:
      "Trained an ACT (Action Chunking with Transformers) policy on a low-cost arm using Hugging Face LeRobot, learning to pick up and place chess pieces from human demonstrations on a local RTX 3080.",
    year: "2024",
    domain: "Manipulation",
    tags: [
      "ACT",
      "Imitation Learning",
      "LeRobot",
      "Transformers",
      "RTX 3080",
    ],
    mediaPlaceholder: "ACT chess pick-and-place demo",
    youtubeId: "qoUHfi-56-w",
  },
  {
    slug: "hackathon",
    order: 4,
    title: "Seeed × NVIDIA Embodied AI Hackathon",
    tagline: "Building LeKiwi and training Pi0 + ACT on H100",
    summary:
      "At the Seeed Studio Embodied AI Hackathon, built a LeKiwi mobile robot end-to-end and finetuned the Pi0 vision-language-action model on Nebius H100 GPUs alongside an ACT baseline.",
    year: "2025",
    domain: "Community",
    tags: ["Pi0 VLA", "ACT", "H100", "LeKiwi", "LeRobot"],
    mediaPlaceholder: "Seeed x NVIDIA hackathon — LeKiwi build",
    youtubeId: "B4zv8M9mojI",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
