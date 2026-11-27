import Link from "next/link";
import { Fragment, type ReactNode } from "react";
import { MenuIcon, SocialIcon, type SocialKind } from "./social-icons";
import { figmaAssets, footerGroups, navigation, siteContent } from "@/content/site";
import "./insight-listing.css";

export const imageUrl = figmaAssets.figmaBusinessPartners;

export const figmaFrameTargets = {
  desktop: 1440,
  tabletHorizontal: 1280,
  tabletVertical: 800,
  mobile: 390,
} as const;

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 56 56"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#bm-clip)">
        <path d="M27.8778 53.5091C33.5537 53.5091 38.1549 48.9079 38.1549 43.2321C38.1549 37.5563 33.5537 32.9551 27.8778 32.9551C22.202 32.9551 17.6008 37.5563 17.6008 43.2321C17.6008 48.9079 22.202 53.5091 27.8778 53.5091Z" stroke="currentColor" strokeMiterlimit="10" strokeWidth="4.53704" />
        <path d="M27.8779 53.4284C37.9997 53.4284 46.205 45.2231 46.205 35.1014C46.205 24.9797 37.9997 16.7744 27.8779 16.7744C17.7562 16.7744 9.55084 24.9797 9.55084 35.1014C9.55084 45.2231 17.7562 53.4284 27.8779 53.4284Z" stroke="currentColor" strokeMiterlimit="10" strokeWidth="4.53704" />
        <path d="M27.8782 53.423C41.9863 53.423 53.4231 41.9862 53.4231 27.8782C53.4231 13.7703 41.9863 2.3335 27.8782 2.3335C13.7702 2.3335 2.33331 13.7703 2.33331 27.8782C2.33331 41.9862 13.7702 53.423 27.8782 53.423Z" stroke="currentColor" strokeMiterlimit="10" strokeWidth="4.53704" />
      </g>
      <defs>
        <clipPath id="bm-clip">
          <rect fill="white" height="56" width="56" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Header({
  active,
  tone = "default",
}: {
  active?: "who" | "what" | "insights";
  tone?: "default" | "dark";
}) {
  const linkClass = (key: "who" | "what" | "insights") =>
    active === key ? "site-nav-link is-active" : "site-nav-link";
  // every frame keeps the coloured logo, over dark heroes too (1:11325)
  const logoSrc = figmaAssets.logoBlue;

  return (
    <header className={`site-header absolute left-0 right-0 top-0 z-20${tone === "dark" ? " site-header--dark" : ""}`}>
      <div className="site-header-inner mx-auto flex items-center justify-between">
        <Link aria-label={`${siteContent.brand} home`} className="site-logo block overflow-hidden" href="/">
          <img alt={siteContent.brand} className="h-full w-full object-contain" src={logoSrc} />
        </Link>
        <nav aria-label="Main navigation" className="site-nav flex items-center">
          {navigation.map((item) => (
            <Link
              aria-current={active === item.key ? "page" : undefined}
              className={linkClass(item.key)}
              href={item.href}
              key={item.key}
            >
              {item.label}
            </Link>
          ))}
          <Link className="site-talk-button inline-flex items-center justify-center" href="/contact">
            Let&apos;s Talk
          </Link>
        </nav>
        <details className="site-mobile-menu">
          <summary aria-label="Toggle navigation" className="site-menu-button">
            <span className="site-menu-icon site-menu-icon--open">
              <MenuIcon />
            </span>
            <span className="site-menu-icon site-menu-icon--close">
              <svg aria-hidden="true" fill="none" height="48" viewBox="0 0 48 48" width="48">
                <path d="M12 12L36 36M36 12L12 36" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
              </svg>
            </span>
          </summary>
          <div className="site-mobile-panel">
            <nav aria-label="Mobile navigation" className="site-mobile-nav">
              {navigation.map((item) => (
                <Link
                  aria-current={active === item.key ? "page" : undefined}
                  className={active === item.key ? "site-mobile-nav-link is-active" : "site-mobile-nav-link"}
                  href={item.href}
                  key={`mobile-${item.key}`}
                >
                  {item.label}
                </Link>
              ))}
              <Link className="site-mobile-talk-button" href="/contact">
                Let&apos;s Talk
              </Link>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}

const socialOrder: SocialKind[] = ["Instagram", "LinkedIn", "X", "YouTube", "Facebook", "Medium", "TikTok"];
const socialUrls: Partial<Record<SocialKind, string>> = {
  Instagram: "https://www.instagram.com/hybrgrouphq/",
  LinkedIn: "https://www.linkedin.com/company/15213999/admin/dashboard/",
  Facebook: "https://www.facebook.com/HYBRgroup/",
  TikTok: "https://www.tiktok.com/@hybrgroup",
};

/** Lets a long e-mail address break after the "@" on narrow phones instead of running off the screen. */
function breakableLabel(label: string) {
  const at = label.indexOf("@");
  if (at < 0) return label;
  return (
    <>
      <span className="sf-nobreak">{label.slice(0, at + 1)}</span>
      <span className="sf-nobreak">{label.slice(at + 1)}</span>
    </>
  );
}

// Site footer, from the Figma footers 1:11415 (1440), 1:16300 (1280), 1:17133 (800) and 1:11112 (390).
// Layout per width lives in globals.css under "SHELL: footer".
export function Footer() {
  return (
    <footer className="site-footer">
      <img alt="" aria-hidden="true" className="sf-pattern" src={figmaAssets.footerPattern} />
      <div className="sf-inner">
        <div className="sf-main">
          {footerGroups.map((group, index) => (
            <Fragment key={group.title}>
              <div className="sf-group">
                <h3 className="sf-title">
                  <Link href={group.href}>{group.title}</Link>
                </h3>
                <ul className="sf-links">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.label}-${link.href}`}>
                      <Link href={link.href}>{breakableLabel(link.label)}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              {index === 1 ? <span aria-hidden="true" className="sf-break" /> : null}
            </Fragment>
          ))}
          <div className="sf-follow">
            <h3 className="sf-title">Follow us</h3>
            <div className="sf-socials">
              {socialOrder.map((kind) => (
                <a
                  aria-label={`Visit HYBR on ${kind}`}
                  href={socialUrls[kind] ?? "#"}
                  key={kind}
                  rel="noreferrer"
                  target={socialUrls[kind] ? "_blank" : undefined}
                >
                  <SocialIcon kind={kind} />
                </a>
              ))}
            </div>
            <Link className="sf-talk" href="/contact">
              Let&apos;s Talk
            </Link>
          </div>
        </div>
        <div className="sf-bottom">
          <div className="sf-legal">
            <span>Privacy Policy</span>
            <span>Terms &amp; Conditions</span>
          </div>
          <img alt={siteContent.brand} className="sf-logo" src={figmaAssets.logoWhite} />
          <span className="sf-copy">{siteContent.footerCopyright}</span>
        </div>
      </div>
    </footer>
  );
}

export function Button({
  children,
  href,
  variant = "outline",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "outline" | "dark" | "white";
}) {
  const variants = {
    primary: "border-hybr-blue/85 bg-hybr-blue text-white",
    outline: "border-hybr-green/75 bg-white text-hybr-green",
    dark: "border-black/15 bg-white text-black",
    white: "border-white/55 bg-white text-black",
  };

  return (
    <Link
      className={`inline-flex min-h-12 items-center justify-center rounded-full border px-5 text-sm font-medium transition duration-200 md:min-h-[46px] md:px-7 md:text-[20px] ${variants[variant]}`}
      href={href}
    >
      {children}
    </Link>
  );
}

export function Label({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`text-sm font-bold uppercase md:text-base ${className}`}>{children}</p>;
}

export function ImagePanel({
  className = "",
  children,
  src = imageUrl,
  tint,
}: {
  className?: string;
  children?: ReactNode;
  src?: string;
  tint?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-black ${className}`}
      style={{
        backgroundColor: tint,
        backgroundImage: `url(${src})`,
        backgroundBlendMode: tint ? "multiply" : undefined,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {children}
    </div>
  );
}

export function PageHero({
  active,
  title,
  subtitle,
  menu,
}: {
  active?: "who" | "what" | "insights";
  title: string;
  subtitle: string;
  menu?: { label: string; href: string }[];
}) {
  return (
    <>
      <Header active={active} />
      <section className="inner-page-hero relative min-h-[540px] px-6 pt-48 md:min-h-[705px] md:pt-[232px]">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="inner-page-title font-display text-[56px] font-medium leading-none sm:text-[76px] md:text-[112px] lg:text-[150px]">
            {title}
          </h1>
          <p className="inner-page-subtitle mt-4 max-w-[760px] text-lg font-medium leading-relaxed md:text-2xl">
            {subtitle}
          </p>
        </div>
        {menu ? (
          <aside className="figma-content-drop mx-auto mt-10 max-w-[1200px] rounded-[30px] bg-black p-6 text-white xl:absolute xl:right-[-259px] xl:top-[238px] xl:mt-0 xl:block xl:h-[197px] xl:w-[337px] xl:overflow-hidden xl:rounded-bl-[1000px] xl:rounded-br-[800px] xl:rounded-tl-[1000px] xl:p-0">
            <ImagePanel className="absolute inset-0 opacity-70" src={figmaAssets.figmaBusinessPartners} />
            <p className="relative z-10 mb-4 font-display text-base font-bold xl:absolute xl:left-8 xl:top-1/2 xl:mb-0 xl:-translate-y-1/2 xl:-rotate-90">
              CONTENT
            </p>
            <nav className="relative z-10 flex flex-wrap gap-3 text-base font-medium xl:absolute xl:right-[92px] xl:top-1/2 xl:-translate-y-1/2 xl:flex-col xl:text-right">
              {menu.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>
        ) : null}
      </section>
    </>
  );
}

export function CaseCard({
  dark = false,
  imageSrc = figmaAssets.figmaFieldHero,
  className = "",
}: {
  dark?: boolean;
  imageSrc?: string;
  className?: string;
}) {
  return (
    <article
      className={`figma-motion-card relative overflow-hidden rounded-[20px] p-6 md:p-8 ${dark ? "text-white" : "bg-[#f1f1f1] text-black"} ${className}`}
      style={
        dark
          ? {
              backgroundColor: "rgba(0,0,0,.54)",
              backgroundImage: `url(${imageSrc})`,
              backgroundBlendMode: "multiply",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }
          : undefined
      }
    >
      {dark ? <BrandMark className="absolute right-5 top-5 h-7 w-7 text-white" /> : null}
      <Label>Case Study</Label>
      <h3 className="mt-3 max-w-[420px] font-display text-3xl font-medium leading-tight md:text-[42px]">
        One Liner For Specific Case Study
      </h3>
      <p className="mt-4 max-w-[480px] text-base leading-relaxed md:text-lg">
        A captivating statement about what service was offered to the company.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim
        fringilla feugiat.
      </p>
      <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between md:mt-14">
        <span className="text-xs font-bold uppercase tracking-[0.12em]">Company Name</span>
        <Button href="/case-studies/one-liner" variant={dark ? "white" : "dark"}>
          Read More
        </Button>
      </div>
    </article>
  );
}

const searchGlyph =
  "M796-121 533-384q-30 26-70 40.5T378-329q-108 0-183-75t-75-181q0-106 75-181t182-75q106 0 180.5 75T632-585q0 43-14 83t-42 75l264 262-44 44ZM377-389q81 0 138-57.5T572-585q0-81-57-138.5T377-781q-82 0-139.5 57.5T180-585q0 81 57.5 138.5T377-389Z";
const arrowDownGlyph = "M480-344 240-584l43-43 197 197 197-197 43 43-240 240Z";

/** Material Symbols "search" / "keyboard_arrow_down" (outlined, 400), as in the Figma controls. */
function ListingGlyph({ path }: { path: string }) {
  return (
    <svg aria-hidden="true" fill="currentColor" focusable="false" viewBox="0 -960 960 960">
      <path d={path} />
    </svg>
  );
}

/** The mobile frames' "Slider-Horizontal-Alternative" filter icon (24 x 24, black at 40 %). */
function SliderGlyph() {
  return (
    <svg aria-hidden="true" fill="none" focusable="false" viewBox="0 0 24 24">
      <g stroke="#000000" strokeOpacity="0.4">
        <path d="M0 5.5h6.5M9 5.5h15M1 12h13M15.5 12H23M0 18.5h6.5M9 18.5h15" />
        <path d="M6.5 3.5v4M5.5 4.5v2M16.5 9.5v5M15.5 10.5v3M6.5 16.5v4M5.5 17.5v2" />
      </g>
    </svg>
  );
}

/**
 * Search / sort / filter row of the insight listings (Figma "Sharp Button Test 3-6"): Search + Sort by, Topic and
 * Duration from 1360 px, Search + Filters from 560 px, Search + a filter icon below. Controls only (no behaviour yet).
 */
export function ListingControls({ className = "" }: { className?: string } = {}) {
  return (
    <div aria-label="Search and filter" className={`hlc ${className}`} role="group">
      <button className="hlc-pill hlc-search" type="button">
        <ListingGlyph path={searchGlyph} />
        <span>Search</span>
      </button>
      {["Sort by", "Topic", "Duration"].map((item) => (
        <button className="hlc-pill hlc-wide" key={item} type="button">
          <span>{item}</span>
          <ListingGlyph path={arrowDownGlyph} />
        </button>
      ))}
      <button className="hlc-pill hlc-mid" type="button">
        <span>Filters</span>
        <ListingGlyph path={arrowDownGlyph} />
      </button>
      <button aria-label="Filters" className="hlc-pill hlc-narrow" type="button">
        <SliderGlyph />
      </button>
    </div>
  );
}

/** Full-width search pill under a listing hero (Figma "Sharp Button Test 3", 1200 x 56). */
export function SearchBar({ placeholder = "Search", className = "" }: { placeholder?: string; className?: string }) {
  return (
    <div className={`search-bar hsb ${className}`} role="search">
      <ListingGlyph path={searchGlyph} />
      <span>{placeholder}</span>
    </div>
  );
}

/**
 * Figma "News Card - V2": image card with a kind label, title, optional summary and a white "Read More" pill.
 * `buttonPlacement="start"` puts the pill top right and the copy at the bottom; `size="small"` is the half-width
 * mobile card; `tone="mono"` shows the image in greyscale. `compact` is kept for older callers (same as small).
 */
export function InsightCard({
  kind,
  title,
  body,
  imageSrc = "/insights/listing/building.jpg",
  className = "",
  compact = false,
  href,
  buttonLabel = "Read More",
  buttonPlacement = "end",
  size,
  tone = "color",
  id,
}: {
  kind: string;
  title: string;
  body?: string;
  imageSrc?: string;
  className?: string;
  compact?: boolean;
  href?: string;
  buttonLabel?: string;
  buttonPlacement?: "end" | "start";
  size?: "default" | "small";
  tone?: "color" | "mono";
  id?: string;
}) {
  const fallbackHref =
    kind.toLowerCase() === "webinar"
      ? "/insights/webinars/specific-webinar"
      : kind.toLowerCase() === "news"
        ? "/insights/news/specific-news"
        : "/insights/articles/specific-article";

  return (
    <Link
      className={`hic-card ${className}`}
      data-button={buttonPlacement}
      data-size={size ?? (compact ? "small" : "default")}
      data-tone={tone}
      href={href ?? fallbackHref}
      id={id}
    >
      <img alt="" className="hic-image" src={imageSrc} />
      <span className="hic-copy">
        <span className="hic-kind">{kind}</span>
        <span className="hic-title">{title}</span>
        {body ? <span className="hic-body">{body}</span> : null}
      </span>
      <span className="hic-button">{buttonLabel}</span>
    </Link>
  );
}

export function WhatWeDoCta() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[588px_1fr] lg:items-center">
        <div>
          <Label>What We Do</Label>
          <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:text-5xl">
            Discover the right opportunities, develop the right solutions, and deploy them with confidence.
          </h2>
          <p className="mt-5 text-xl leading-relaxed">
            Helping organisations replace guesswork with evidence, clarity, and smarter strategy.
          </p>
          <div className="mt-8">
            <Button href="/contact">
              Let&apos;s Help
            </Button>
          </div>
        </div>
        <ImagePanel
          className="min-h-[280px] rounded-l-full rounded-r-[20px] md:min-h-[336px]"
          src={figmaAssets.figmaBusinessPartners}
        />
      </div>
    </section>
  );
}
