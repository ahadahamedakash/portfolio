import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Configure remote image domains for optimization
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/gh/devicons/devicon/icons/**",
      },
    ],
    // Enable image optimization with modern formats
    formats: ["image/avif", "image/webp"],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes for responsive images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Minimum cache TTL (in seconds) for optimized images
    minimumCacheTTL: 60,
  },
};

export default nextConfig;
