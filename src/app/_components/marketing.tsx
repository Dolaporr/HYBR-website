import Link from "next/link";
import type { ReactNode } from "react";
import { figmaAssets, footerGroups, navigation, siteContent } from "@/content/site";

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
  const logoSrc = tone === "dark" ? figmaAssets.logoWhite : figmaAssets.logoBlue;

  return (
    <header className={`site-header absolute left-0 right-0 top-0 z-20${tone === "dark" ? " site-header--dark" : ""}`}>
      <div className="site-header-inner mx-auto flex items-center justify-between">
        <Link className="site-logo block overflow-hidden" href="/">
          <img alt={siteContent.brand} className="h-full w-full object-contain" src={logoSrc} />
        </Link>
        <nav className="site-nav flex items-center">
          {navigation.map((item) => (
            <Link className={linkClass(item.key)} href={item.href} key={item.key}>
              {item.label}
            </Link>
          ))}
          <Link
            className="site-talk-button inline-flex items-center justify-center"
            href="/contact"
          >
            Let&apos;s Talk
          </Link>
        </nav>
        <details className="site-mobile-menu">
          <summary aria-label="Toggle navigation" className="site-menu-button">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
              <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" />
            </svg>
          </summary>
          <div className="site-mobile-panel">
            <nav aria-label="Mobile navigation" className="site-mobile-nav">
              {navigation.map((item) => (
                <Link
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

function FooterSocialIcon({ kind }: { kind: string }) {
  if (kind === "Instagram") {
    return <svg aria-label="Instagram" className="size-7" fill="none" viewBox="0 0 32 32"><rect x="6" y="6" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="1.7" /><circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.7" /><circle cx="22.4" cy="9.6" r="1.6" fill="currentColor" /></svg>;
  }

  if (kind === "Facebook") {
    return <svg aria-label="Facebook" className="size-7" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.7" /><path d="M17.5 26V16.8H20.4L20.9 13.4H17.5V11.2C17.5 10.2 17.8 9.5 19.2 9.5H21V6.5C20.1 6.4 19.4 6.4 18.6 6.4C16.1 6.4 14.4 7.9 14.4 10.7V13.4H11.6V16.8H14.4V26" fill="currentColor" /></svg>;
  }

  if (kind === "TikTok") {
    return <svg aria-label="TikTok" className="size-7" fill="none" viewBox="0 0 32 32"><path d="M18.5 6C19 9.1 20.8 11 24 11.4V14.7C21.9 14.7 20.1 14.1 18.5 12.9V20.2C18.5 23.8 16.2 26 12.9 26C9.9 26 7.7 24 7.7 21.1C7.7 18.1 10.1 16 13.5 16C14.1 16 14.6 16.1 15.1 16.2V19.6C14.6 19.4 14.1 19.3 13.5 19.3C12.1 19.3 11.1 20 11.1 21.1C11.1 22.2 11.9 22.9 13.1 22.9C14.4 22.9 15.2 22.1 15.2 20.5V6H18.5Z" fill="currentColor" /></svg>;
  }

  if (kind === "LinkedIn") {
    return <svg aria-label="LinkedIn" className="size-7" fill="none" viewBox="0 0 32 32"><rect x="6" y="6" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.7" /><path d="M11 14V22" stroke="currentColor" strokeWidth="1.7" /><path d="M16 22V17.5C16 15.8431 17.3431 14.5 19 14.5C20.6569 14.5 22 15.8431 22 17.5V22" stroke="currentColor" strokeWidth="1.7" /><circle cx="11" cy="10.5" r="1.5" fill="currentColor" /></svg>;
  }

  if (kind === "X") {
    return <svg aria-label="X" className="size-7" fill="none" viewBox="0 0 32 32"><path d="M18.86 14.25 26.24 5.75h-1.75l-6.41 7.38-5.12-7.38H7.06l7.74 11.15-7.74 8.92h1.75l6.77-7.8 5.41 7.8h5.89l-8.02-11.57Zm-2.4 2.76-.78-1.11-6.24-8.86h2.68l5.03 7.14.78 1.11 6.55 9.29H21.8l-5.34-7.57Z" fill="currentColor" /></svg>;
  }

  if (kind === "YouTube") {
    return <svg aria-label="YouTube" className="size-7" fill="none" viewBox="0 0 32 32"><rect x="4.5" y="8" width="23" height="16" rx="5" stroke="currentColor" strokeWidth="1.7" /><path d="M14 12.8L20.4 16L14 19.2V12.8Z" fill="currentColor" /></svg>;
  }

  return <svg aria-label="Medium" className="size-7" fill="none" viewBox="0 0 32 32"><circle cx="10" cy="16" r="4" fill="currentColor" /><ellipse cx="18.5" cy="16" rx="3.5" ry="8" fill="currentColor" opacity="0.85" /><ellipse cx="24.5" cy="16" rx="2.5" ry="6" fill="currentColor" opacity="0.72" /></svg>;
}

export function Footer() {
  const socialOrder = ["Instagram", "LinkedIn", "X", "YouTube", "Facebook", "Medium", "TikTok"];
  const socialUrls: Partial<Record<(typeof socialOrder)[number], string>> = {
    Instagram: "https://www.instagram.com/hybrgrouphq/",
    LinkedIn: "https://www.linkedin.com/company/15213999/admin/dashboard/",
    Facebook: "https://www.facebook.com/HYBRgroup/",
    TikTok: "https://www.tiktok.com/@hybrgroup",
  };

  return (
    <footer className="site-footer home-footer bg-black px-6 py-14 text-white md:py-20">
      <div className="site-footer-inner home-footer-inner mx-auto max-w-[1200px]">
        <div className="home-footer-main relative grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <img
            alt=""
            className="home-footer-pattern pointer-events-none absolute -bottom-44 -right-64 hidden h-[390px] w-[390px] opacity-50 lg:block"
            src={figmaAssets.footerPattern}
          />
          {footerGroups.map((group) => (
            <div className="home-footer-group" key={group.title}>
              <h3 className="font-bold uppercase">{group.title}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.label}-${link.href}`}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="home-footer-follow">
            <h3 className="font-bold uppercase">Follow us</h3>
            <div className="home-footer-socials mt-4 flex flex-wrap gap-4 text-white">
              {socialOrder.map((link) => (
                <a
                  aria-label={`Visit HYBR on ${link}`}
                  href={socialUrls[link] ?? "#"}
                  key={link}
                  rel="noreferrer"
                  target={socialUrls[link] ? "_blank" : undefined}
                >
                  <FooterSocialIcon kind={link} />
                </a>
              ))}
            </div>
            <div className="mt-8">
              <Link className="hybr-button hybr-button--white" href="/contact">
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>
        <div className="home-footer-bottom mt-14 flex flex-col gap-6 text-sm uppercase md:mt-20 md:flex-row md:items-center md:justify-between">
          <div className="home-footer-legal flex flex-wrap gap-5 md:gap-8">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
          <img alt={siteContent.brand} className="home-footer-logo h-10 w-[128px] object-contain" src={figmaAssets.logoWhite} />
          <span>{siteContent.footerCopyright}</span>
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
      className={`inline-flex min-h-12 items-center justify-center rounded-full border px-5 text-sm font-medium shadow-[0_8px_18px_rgba(0,0,0,0.06)] transition duration-200 md:min-h-[46px] md:px-7 md:text-[20px] ${variants[variant]}`}
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

export function ListingControls() {
  return (
    <div className="listing-controls flex flex-wrap gap-3 md:gap-4">
      {["Search", "Sort by", "Topic", "Duration"].map((item) => (
        <button
          className="min-h-11 rounded-full border border-black/15 px-5 text-sm font-semibold md:min-h-[56px] md:px-7 md:text-[20px]"
          key={item}
          type="button"
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export function SearchBar({ placeholder = "Search" }: { placeholder?: string }) {
  return (
    <div className="search-bar flex h-14 items-center justify-center gap-3 rounded-full border border-black/60 bg-white px-6 text-sm font-medium text-black/70 shadow-[0_8px_18px_rgba(0,0,0,0.04)] md:px-8">
      <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
        <path d="M16 16L21 21" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      </svg>
      <span>{placeholder}</span>
    </div>
  );
}

export function InsightCard({
  kind,
  title,
  body,
  imageSrc = figmaAssets.figmaBuilding,
  className = "",
  compact = false,
  href,
}: {
  kind: string;
  title: string;
  body?: string;
  imageSrc?: string;
  className?: string;
  compact?: boolean;
  href?: string;
}) {
  const fallbackHref =
    kind.toLowerCase() === "webinar"
      ? "/insights/webinars/specific-webinar"
      : kind.toLowerCase() === "news"
        ? "/insights/news/specific-news"
        : "/insights/articles/specific-article";

  return (
    <article
      className={`figma-motion-card rounded-[20px] bg-black p-6 text-white md:p-8 ${className}`}
      style={{
        backgroundColor: "rgba(0,0,0,.48)",
        backgroundImage: `url(${imageSrc})`,
        backgroundBlendMode: "multiply",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Label>{kind}</Label>
      <h3 className={`font-display text-3xl font-medium leading-tight md:text-4xl ${compact ? "mt-8 md:mt-12" : "mt-24 md:mt-36"}`}>
        {title}
      </h3>
      {kind.toLowerCase() === "webinar" ? (
        <div className="mt-3 space-y-1 text-sm font-semibold md:text-base">
          <p>Jedidiah Akpata &amp; Charles Ojei</p>
          <p>November 2023</p>
          <p>01:40:35</p>
        </div>
      ) : null}
      {body ? <p className="mt-4 max-w-[320px] text-base leading-relaxed">{body}</p> : null}
      <div className="mt-8">
        <Button href={href ?? fallbackHref} variant="white">
          Read More
        </Button>
      </div>
    </article>
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
