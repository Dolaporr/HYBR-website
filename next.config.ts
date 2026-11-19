import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A parent Codex workspace also has a lockfile, so pin Turbopack to this app.
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Growth Opportunity Sprint page: served by src/app/GOS_sme/route.ts. /gos-sme (hyphen) goes there too.
  async redirects() {
    return [{ source: "/gos-sme", destination: "/GOS_sme", permanent: false }];
  },
  // The page's HTML is read from src/content when the route is built; keep it with the route's files.
  outputFileTracingIncludes: {
    "/GOS_sme": ["./src/content/gos-sme.html"],
  },
};

export default nextConfig;
