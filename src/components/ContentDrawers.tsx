"use client";

import { useEffect } from "react";

/**
 * Runs the content-drawer script after React has hydrated. As an inline <script> in the layout it changed
 * the drawers' classes and attributes before hydration, which raised a hydration warning on every page.
 */
export function ContentDrawers({ script }: { script: string }) {
  useEffect(() => {
    if ((window as Window & { __HYBR_CONTENT_DRAWERS__?: boolean }).__HYBR_CONTENT_DRAWERS__) return;
    const el = document.createElement("script");
    el.textContent = script;
    document.body.appendChild(el);
  }, [script]);

  return null;
}
