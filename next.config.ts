import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  experimental:{},
  webpack: (config) => {
    return config;
  },
  /* config options here */
};

export default nextConfig;
