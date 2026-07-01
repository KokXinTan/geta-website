import type { NextConfig } from "next";

// Static export, served at the domain root (Cloudflare Pages).
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
