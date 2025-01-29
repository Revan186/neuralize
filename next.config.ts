import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'https',
        hostname: 'ucarecdn.com',
      },
    ],
  },
  typescript: {
		// !! WARN !!
		// This will disable type checking during builds
		ignoreBuildErrors: true,
	},
};

export default nextConfig;
