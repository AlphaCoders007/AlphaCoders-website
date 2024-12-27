import type { NextConfig } from "next";

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

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
        pathname: "/**", // This allows any path from randomuser.me
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during build
  },
};

export default nextConfig;
