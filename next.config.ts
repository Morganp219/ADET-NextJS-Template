import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
console.log("🔍 GITHUB_PAGES =", process.env.GITHUB_PAGES);

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/ADET-NextJS-Template" : "",
  assetPrefix: isGithubPages ? "/ADET-NextJS-Template/" : "",
};

export default nextConfig;
