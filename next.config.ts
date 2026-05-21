import type { NextConfig } from "next";

const isProjectSite = process.env.GITHUB_PROJECT_SITE === "true";
const repoName = process.env.GITHUB_REPO_NAME || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProjectSite && repoName ? `/${repoName}` : "",
  assetPrefix: isProjectSite && repoName ? `/${repoName}/` : "",
};

export default nextConfig;
