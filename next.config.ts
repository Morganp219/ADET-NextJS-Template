import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/ADET-NextJS-Template" : "",
  assetPrefix: isGithubPages ? "/ADET-NextJS-Template/" : "",
};

export default nextConfig;
