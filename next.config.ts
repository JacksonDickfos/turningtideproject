import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Silence “inferred workspace root” warnings when other lockfiles exist higher up the filesystem.
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
