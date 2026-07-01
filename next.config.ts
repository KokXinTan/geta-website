import type { NextConfig } from "next";

// Static export for GitHub Pages (project site served at /geta-website).
const repo = "geta-website";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  trailingSlash: true,
};

export default nextConfig;
