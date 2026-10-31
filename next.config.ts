import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages: no server, so images are served as-is.
  output: "export",
  images: { unoptimized: true, qualities: [75, 90] },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
