import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aceternity.com",
        pathname: "/**", // This allows any path from this hostname
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**", // This allows any path from this hostname
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/**", // This allows any path from this hostname
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during build
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Caching policy for static assets
          },
        ],
      },
    ];
  },
};

export default nextConfig;