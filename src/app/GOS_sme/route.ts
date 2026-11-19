import { readFileSync } from "node:fs";
import path from "node:path";

/**
 * Growth Opportunity Sprint campaign page (Charles, 19 Nov 2026) at hybrgroup.net/GOS_sme.
 * A standalone HTML page with its own styles and script (src/content/gos-sme.html), returned as is.
 * force-static: the page is read and written out once at build time, so the live site serves a plain
 * static file (a rewrite to a file in public/ came back 404 on Netlify).
 */
export const dynamic = "force-static";

const html = readFileSync(path.join(process.cwd(), "src/content/gos-sme.html"), "utf8");

export function GET() {
  return new Response(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
