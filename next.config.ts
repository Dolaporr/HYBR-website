import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A parent Codex workspace also has a lockfile, so pin Turbopack to this app.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
