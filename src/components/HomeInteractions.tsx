"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const figmaLockedPageFilters = [
  ".what-page",
  ".services-page",
  ".work-page",
  ".impact-page",
  ".who-page",
  ".about-page",
  ".team-page",
  ".careers-page",
  ".insights-hub-page",
  ".articles-page",
  ".webinars-listing-page",
  ".news-page",
].map((selector) => `:not(${selector})`).join("");

const animatedMainSelector = `main:not(.homepage-live)${figmaLockedPageFilters}`;

const revealSelectors = [
  ".site-reveal",
  ".home-reveal",
  `${animatedMainSelector} .inner-page-hero`,
  `${animatedMainSelector} section`,
  `${animatedMainSelector} article`,
].join(",");

const tiltSelectors = [
  ".site-tilt-card",
  ".home-tilt-card",
  `${animatedMainSelector} article`,
  `${animatedMainSelector} .what-services`,
  `${animatedMainSelector} .what-team`,
  `${animatedMainSelector} .figma-content-drop`,
].join(",");

const contentDropSelector = [
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
  ".careers-content-drop",
].join(",");

const revealDirections = ["up", "left", "right", "scale"] as const;

export function SiteInteractions() {
  const pathname = usePathname();

  useEffect(() => {
    const page = document.body;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(revealSelectors));
    const tiltItems = Array.from(document.querySelectorAll<HTMLElement>(tiltSelectors));
    const impactStatItems = Array.from(document.querySelectorAll<HTMLElement>(".home-impact-stat"));
    const homeFlipCards = Array.from(document.querySelectorAll<HTMLElement>("[data-home-service-card]"));
    const nativeDrawerReady =
      (window as Window & { __HYBR_CONTENT_DRAWERS__?: boolean }).__HYBR_CONTENT_DRAWERS__ === true;
    const contentDrops = nativeDrawerReady
      ? []
      : Array.from(document.querySelectorAll<HTMLElement>(contentDropSelector));
    let pointerFrame = 0;

    revealItems.forEach((item, index) => {
      item.classList.add("site-reveal");
      if (!item.dataset.reveal) {
        item.dataset.reveal = revealDirections[index % revealDirections.length];
      }
    });

    tiltItems.forEach((item) => {
      item.classList.add("site-tilt-card");
    });

    page.classList.add("site-motion-ready", "home-motion-ready");

    const setContentDropOpen = (drop: HTMLElement, isOpen: boolean) => {
      drop.classList.toggle("is-content-open", isOpen);
      drop.setAttribute("aria-expanded", String(isOpen));
    };

    const closeContentDrops = (except?: HTMLElement) => {
      contentDrops.forEach((drop) => {
        if (drop !== except) setContentDropOpen(drop, false);
      });
    };

    contentDrops.forEach((drop) => {
      drop.classList.add("site-content-drop");
      setContentDropOpen(drop, false);
      if (!drop.hasAttribute("role")) drop.setAttribute("role", "button");
      if (!drop.hasAttribute("tabindex")) drop.tabIndex = 0;
    });

    homeFlipCards.forEach((card) => {
      card.setAttribute("aria-pressed", "false");
    });

    const toggleHomeFlipCard = (card: HTMLElement) => {
      const isFlipped = !card.classList.contains("is-flipped");
      card.classList.toggle("is-flipped", isFlipped);
      card.setAttribute("aria-pressed", String(isFlipped));
      const back = card.querySelector<HTMLElement>(".home-service-back");
      if (back) back.setAttribute("aria-hidden", String(!isFlipped));
    };

    const handleHomeFlipCardClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      if (event.target.closest("a")) return;

      const card = event.target.closest<HTMLElement>("[data-home-service-card]");
      if (!card) return;

      event.preventDefault();
      toggleHomeFlipCard(card);
    };

    const handleHomeFlipCardKeydown = (event: KeyboardEvent) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      if (!(event.target instanceof Element)) return;

      const card = event.target.closest<HTMLElement>("[data-home-service-card]");
      if (!card || event.target.closest("a")) return;

      event.preventDefault();
      toggleHomeFlipCard(card);
    };

    const handleContentDropClick = (event: MouseEvent) => {
      if (nativeDrawerReady) return;
      if (!(event.target instanceof Element)) return;

      const drop = event.target.closest<HTMLElement>(contentDropSelector);
      if (!drop) {
        closeContentDrops();
        return;
      }

      const link = event.target.closest("a");
      if (link && drop.contains(link) && drop.classList.contains("is-content-open")) {
        window.setTimeout(() => setContentDropOpen(drop, false), 120);
        return;
      }

      event.preventDefault();
      const shouldOpen = !drop.classList.contains("is-content-open");
      closeContentDrops(drop);
      setContentDropOpen(drop, shouldOpen);
    };

    const handleContentDropKeydown = (event: KeyboardEvent) => {
      if (nativeDrawerReady) return;
      if (event.key === "Escape") {
        closeContentDrops();
        return;
      }

      if (event.key !== "Enter" && event.key !== " ") return;
      if (!(document.activeElement instanceof Element)) return;

      const drop = document.activeElement.closest<HTMLElement>(contentDropSelector);
      if (!drop || document.activeElement.closest("a")) return;

      event.preventDefault();
      const shouldOpen = !drop.classList.contains("is-content-open");
      closeContentDrops(drop);
      setContentDropOpen(drop, shouldOpen);
    };

    document.addEventListener("click", handleContentDropClick);
    document.addEventListener("keydown", handleContentDropKeydown);
    document.addEventListener("click", handleHomeFlipCardClick);
    document.addEventListener("keydown", handleHomeFlipCardKeydown);

    const cleanupContentDrops = () => {
      document.removeEventListener("click", handleContentDropClick);
      document.removeEventListener("keydown", handleContentDropKeydown);
      document.removeEventListener("click", handleHomeFlipCardClick);
      document.removeEventListener("keydown", handleHomeFlipCardKeydown);
      contentDrops.forEach((drop) => {
        drop.classList.remove("site-content-drop", "is-content-open");
        drop.removeAttribute("aria-expanded");
        if (drop.getAttribute("role") === "button") drop.removeAttribute("role");
        if (drop.tabIndex === 0) drop.removeAttribute("tabindex");
      });
      homeFlipCards.forEach((card) => {
        card.classList.remove("is-flipped");
        card.removeAttribute("aria-pressed");
        const back = card.querySelector<HTMLElement>(".home-service-back");
        if (back) back.setAttribute("aria-hidden", "true");
      });
    };

    if (prefersReducedMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      page.classList.add("is-loaded");
      return () => {
        cleanupContentDrops();
        page.classList.remove("site-motion-ready", "home-motion-ready", "is-loaded");
      };
    }

    const loaderTimer = window.setTimeout(() => {
      page.classList.add("is-loaded");
    }, 520);

    const revealVisibleItems = () => {
      const triggerLine = window.innerHeight * 0.94;
      revealItems.forEach((item) => {
        if (item.classList.contains("is-visible")) return;
        const rect = item.getBoundingClientRect();
        if (rect.top < triggerLine && rect.bottom > 0) {
          item.classList.add("is-visible");
        }
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -4% 0px", threshold: 0.05 },
    );

    revealItems.forEach((item) => observer.observe(item));
    requestAnimationFrame(revealVisibleItems);
    window.addEventListener("resize", revealVisibleItems, { passive: true });

    // The impact stats' highlight (colour + scale pop) is a :hover effect,
    // which touch devices can never trigger. Drive the same visual state
    // from scroll position instead: whichever stat is nearest the vertical
    // centre of the viewport as the page scrolls gets the "active" class.
    // The CSS only applies this class's styling under (hover: none), so
    // desktop hover behaviour is untouched.
    const impactObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-impact-active", entry.isIntersecting);
        });
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 },
    );

    impactStatItems.forEach((item) => impactObserver.observe(item));

    // Performance (QA 18 Nov 2026, "hovering feels like it drags"): the ring used to follow the mouse by
    // rewriting custom properties on <body> every frame, which re-styled the whole page and moved the ring
    // with left/top (layout). Now only the ring moves, through the independent `translate` property, which
    // the compositor handles; the ring's own transform rules (centring, scale) stay as they were.
    const pointerRings = Array.from(document.querySelectorAll<HTMLElement>(".site-pointer-ring"));
    let pointerX = 0;
    let pointerY = 0;
    const handlePointerMove = (event: PointerEvent) => {
      if (!supportsFinePointer || event.pointerType !== "mouse") return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (pointerFrame) return;
      pointerFrame = requestAnimationFrame(() => {
        pointerFrame = 0;
        if (!page.classList.contains("has-pointer")) page.classList.add("has-pointer");
        pointerRings.forEach((ring) => {
          ring.style.translate = `${pointerX}px ${pointerY}px`;
        });
      });
    };

    // The per-card pointer tilt was removed (QA 18 Nov 2026): it wrote --home-tilt-x/y on every mouse move
    // but no stylesheet reads those properties, so it only cost style recalculation while hovering.

    if (supportsFinePointer) {
      window.addEventListener("pointermove", handlePointerMove, { passive: true });
    }

    return () => {
      window.clearTimeout(loaderTimer);
      observer.disconnect();
      impactObserver.disconnect();
      cleanupContentDrops();
      window.removeEventListener("resize", revealVisibleItems);
      if (supportsFinePointer) {
        window.removeEventListener("pointermove", handlePointerMove);
      }
      if (pointerFrame) cancelAnimationFrame(pointerFrame);
      page.classList.remove("site-motion-ready", "home-motion-ready", "is-loaded", "has-pointer");
    };
  }, [pathname]);

  return (
    <>
      <span aria-hidden="true" className="site-pointer-ring home-pointer-ring" />
      <span aria-hidden="true" className="site-loading-bar home-loading-bar" />
    </>
  );
}

export function HomeInteractions() {
  return <SiteInteractions />;
}
