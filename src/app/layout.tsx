import type { Metadata } from "next";
import { Montserrat, Raleway, Inter } from "next/font/google";
import { SiteInteractions } from "@/components/HomeInteractions";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "HYBR | Build Ideas Faster, Smarter",
  description:
    "HYBR helps leaders find clarity, test ideas, and build innovation with purpose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const contentDrawerScript = `
(() => {
  const selector = [
    ".figma-content-drop",
    ".insights-content-drop",
    ".webinars-content-drop",
    ".articles-content-drop",
    ".news-content-drop",
    ".who-content-drop",
    ".team-content-drop",
    ".team-tier-drop",
    ".about-content-drop",
    ".what-content-drop",
    ".services-content-drop",
    ".work-content-drop",
    ".impact-content-drop",
    ".careers-content-drop"
  ].join(",");

  window.__HYBR_CONTENT_DRAWERS__ = true;
  const mobileDrawerMedia = "(max-width: 559px)";
  const mobileClosedPeek = 72;
  const desktopClosedPeek = 95;

  const isInsightsFamilyDrop = (drop) => (
    drop.classList.contains("insights-content-drop") ||
    drop.classList.contains("articles-content-drop") ||
    drop.classList.contains("webinars-content-drop") ||
    drop.classList.contains("news-content-drop")
  );

  const isMobileEdgeAlignedDrop = (drop) => (
    isInsightsFamilyDrop(drop) ||
    drop.classList.contains("who-content-drop") ||
    drop.classList.contains("team-content-drop") ||
    drop.classList.contains("team-tier-drop") ||
    drop.classList.contains("about-content-drop") ||
    drop.classList.contains("what-content-drop") ||
    drop.classList.contains("services-content-drop") ||
    drop.classList.contains("work-content-drop") ||
    drop.classList.contains("impact-content-drop") ||
    drop.classList.contains("careers-content-drop")
  );

  const getMobileSeedRight = (drop, isOpen) => {
    if (isMobileEdgeAlignedDrop(drop)) {
      return isOpen ? "0px" : "-260px";
    }

    return "";
  };

  const alignMobileDrop = (drop, isOpen) => {
    const isMobile = window.matchMedia(mobileDrawerMedia).matches;
    if (!isMobile && !isInsightsFamilyDrop(drop)) return;

    drop.style.removeProperty("transform");
    const rect = drop.getBoundingClientRect();
    if (rect.width <= 0) return;

    const viewportRight = isMobile
      ? document.documentElement.clientWidth
      : window.innerWidth;
    const targetRectRight = isOpen
      ? viewportRight
      : viewportRight + rect.width - (isMobile ? mobileClosedPeek : desktopClosedPeek);
    const translateX = targetRectRight - rect.right;

    drop.style.setProperty("left", "auto", "important");
    drop.style.setProperty("transform", "translateX(" + translateX + "px)", "important");
  };

  const applyMobileLayout = (drop, isOpen) => {
    const isMobile = window.matchMedia(mobileDrawerMedia).matches;
    const mobileRight = isMobile ? getMobileSeedRight(drop, isOpen) : "";

    if (mobileRight) {
      drop.style.setProperty("left", "auto", "important");
      drop.style.setProperty("right", mobileRight, "important");
    } else {
      drop.style.removeProperty("left");
      drop.style.removeProperty("right");
      drop.style.removeProperty("transform");
    }

    const nav = drop.querySelector("nav");
    if (
      nav &&
      isMobile &&
      (
        drop.classList.contains("careers-content-drop") ||
        drop.classList.contains("services-content-drop") ||
        drop.classList.contains("work-content-drop")
      )
    ) {
      nav.style.top = "34px";
      nav.style.transform = isOpen ? "translateX(0)" : "translateX(12px)";
    } else if (nav) {
      nav.style.top = "";
      nav.style.transform = "";
    }

    if (mobileRight || isInsightsFamilyDrop(drop)) {
      alignMobileDrop(drop, isOpen);
      window.setTimeout(() => alignMobileDrop(drop, isOpen), 120);
      window.setTimeout(() => alignMobileDrop(drop, isOpen), 520);
    }
  };

  const setOpen = (drop, isOpen) => {
    drop.classList.toggle("is-content-open", isOpen);
    drop.setAttribute("aria-expanded", String(isOpen));
    applyMobileLayout(drop, isOpen);
  };

  const closeAll = (except) => {
    document.querySelectorAll(selector).forEach((drop) => {
      if (drop !== except) setOpen(drop, false);
    });
  };

  const prepare = () => {
    document.querySelectorAll(selector).forEach((drop) => {
      if (drop.dataset.contentDrawerReady === "true") return;
      drop.dataset.contentDrawerReady = "true";
      drop.classList.add("site-content-drop");
      setOpen(drop, false);
      if (!drop.hasAttribute("role")) drop.setAttribute("role", "button");
      if (!drop.hasAttribute("tabindex")) drop.tabIndex = 0;
    });
  };

  const onClick = (event) => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;

    const drop = target.closest(selector);
    if (!drop) {
      closeAll();
      return;
    }

    const link = target.closest("a");
    if (link && drop.contains(link) && drop.classList.contains("is-content-open")) {
      window.setTimeout(() => setOpen(drop, false), 120);
      return;
    }

    event.preventDefault();
    const shouldOpen = !drop.classList.contains("is-content-open");
    closeAll(drop);
    setOpen(drop, shouldOpen);
  };

  const onKeydown = (event) => {
    if (event.key === "Escape") {
      closeAll();
      return;
    }

    if (event.key !== "Enter" && event.key !== " ") return;
    const active = document.activeElement instanceof Element ? document.activeElement : null;
    const drop = active?.closest(selector);
    if (!drop || active?.closest("a")) return;

    event.preventDefault();
    const shouldOpen = !drop.classList.contains("is-content-open");
    closeAll(drop);
    setOpen(drop, shouldOpen);
  };

  prepare();
  document.addEventListener("click", onClick);
  document.addEventListener("keydown", onKeydown);
  window.addEventListener("resize", () => {
    document.querySelectorAll(selector).forEach((drop) => {
      applyMobileLayout(drop, drop.classList.contains("is-content-open"));
    });
  }, { passive: true });
  new MutationObserver(prepare).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
`;

  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${raleway.variable} ${inter.variable}`}
    >
      <body>
        <SiteInteractions />
        {children}
        <script dangerouslySetInnerHTML={{ __html: contentDrawerScript }} />
      </body>
    </html>
  );
}
