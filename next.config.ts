import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // The built-in sharp-based optimizer re-encodes some of these photos as
    // progressive JPEGs that Chrome's decoder partially fails to decode
    // (undecoded blocks render as flat gray). Serve the verified originals
    // as-is instead of re-encoding them.
    unoptimized: true,
  },
};

export default nextConfig;
