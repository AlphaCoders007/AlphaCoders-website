import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  rewrites: async () => [
    {
      source: "/sitemap-:id.xml",  // Use straight quotes here
      destination: "/sitemap.xml/:id",
    },
  ],
  eslint: {
    ignoreDuringBuilds: false, // Disable ESLint during build
  },
};

export default nextConfig;
