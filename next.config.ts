import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A parent Codex workspace also has a lockfile, so pin Turbopack to this app.
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Growth Opportunity Sprint campaign page (Charles, 19 Nov 2026): a standalone HTML page served at
  // hybrgroup.net/GOS_sme. The file lives in public/campaigns/gos-sme.html.
  // Matching is case-insensitive, so /gos_sme works too; /gos-sme (hyphen) is sent to the same address.
  async rewrites() {
    return [{ source: "/GOS_sme", destination: "/campaigns/gos-sme.html" }];
  },
  async redirects() {
    return [{ source: "/gos-sme", destination: "/GOS_sme", permanent: false }];
  },
};

export default nextConfig;
