"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { alitheiaCaseStudy, alitheiaEditorial } from "@/content/caseStudies";
import { figmaAssets } from "@/content/site";
import { Footer, Header } from "../../_components/marketing";
import styles from "./page.module.css";

type ViewMode = "sections" | "report";
type CaseStudyId = "coca-cola" | "alitheia";
type ReportSection = {
  body: ReactNode[];
  id: string;
  intro: string;
  title: string;
};

const sectionNav = [
  { href: "#cover", label: "Cover" },
  { href: "#context", label: "Context" },
  { href: "#ambition", label: "Ambition" },
  { href: "#our-work", label: "Our Work" },
  { href: "#outcome", label: "Outcome" },
] as const;

const cocaColaReportSections: ReportSection[] = [
  {
    id: "context",
    title: "Context",
    intro: "Plastic waste is a ticking time-bomb with serious social, environmental, and health implications.",
    body: [
      "Almost 1.4 trillion plastic bottles, enough to fill 15,000 football fields per year, are generated in Africa, reflecting about 7% of the world's total. 90% of these bottles end up in landfills. This reflects about $12.5 billion lost every year. Coca-Cola, as a major PET bottle contributor, has a vision that imagines a world without plastic waste.",
    ],
  },
  {
    id: "ambition",
    title: "The Ambition",
    intro: "Turn a sustainability goal into an operating system",
    body: [
      "Coca-Cola was seeking practical, modular and scalable approaches that could support its wider ambition to reduce plastic waste. The task required more than a public campaign or a single collection project.",
    ],
  },
  {
    id: "our-work",
    title: "Our Work",
    intro: "Discover, Develop and Deploy: build the missing recovery layer",
    body: [
      <>
        HYBR designed the Entrepreneur Plastics Innovation Challenge, or{" "}
        <Link className="case-inline-link" href="https://www.epicforchange.com/" rel="noopener noreferrer" target="_blank">
          EPIC
        </Link>
        , as a 16-month programme to find, assess and develop business models working across the plastic-recovery chain. In parallel with the external venture programme, HYBR began developing a response to the collection and aggregation bottleneck.
      </>,
    ],
  },
  {
    id: "outcome",
    title: "Outcome",
    intro: "What the work made possible",
    body: [
      "The programme gave Coca-Cola access to proven recycling models, three pilot ventures and a clearer view of the collection bottleneck. It also produced a locally designed infrastructure concept linking sustainability goals with entrepreneurs, operating assets and the wider value chain.",
    ],
  },
];

const alitheiaReportSections: ReportSection[] = alitheiaEditorial.sections.map((section, index) => ({
  body: section.copy,
  id: ["context", "ambition", "our-work", "outcome"][index],
  intro:
    index === 0
      ? "Looking beyond financial performance"
      : index === 1
        ? "Know what it takes to scale before putting capital to work"
        : index === 2
          ? "Bring the right expertise to the table - fast"
          : "What the work made possible",
  title: ["Context", "The Ambition", "Our Work", "Outcome"][index],
}));

function getStudyContent(caseId: CaseStudyId) {
  if (caseId === "alitheia") {
    return {
      image: alitheiaCaseStudy.image,
      imagePosition: alitheiaCaseStudy.imagePosition,
      reportSections: alitheiaReportSections,
      subtitle: alitheiaEditorial.subtitle,
      title: alitheiaEditorial.title,
    };
  }

  return {
    image: figmaAssets.ourWorkCard,
    imagePosition: "center center",
    reportSections: cocaColaReportSections,
    subtitle:
      "How HYBR helped Coca-Cola move from a broad waste-reduction ambition to tested ventures, locally developed waste-to-value innovations.",
    title: "Towards a World Without Waste",
  };
}

function CaseButton({
  children,
  className = "",
  href,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}) {
  if (href) {
    return (
      <Link className={`case-button ${className}`} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={`case-button ${className}`} onClick={onClick} type="button">
      {children}
    </button>
  );
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" className="case-search-icon" fill="none" viewBox="0 0 40 40">
      <circle cx="18" cy="18" r="9.5" stroke="currentColor" strokeWidth="2.4" />
      <path d="M25.2 25.2L32 32" stroke="currentColor" strokeLinecap="round" strokeWidth="2.4" />
    </svg>
  );
}

function HandSwipeIcon() {
  return (
    <svg aria-hidden="true" className="case-swipe-icon" fill="none" viewBox="0 0 24 24">
      <path d="M7.8 10.2V6.8C7.8 5.9 8.5 5.2 9.4 5.2C10.3 5.2 11 5.9 11 6.8V10" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M11 9.1V5.9C11 5 11.7 4.3 12.6 4.3C13.5 4.3 14.2 5 14.2 5.9V10" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
      <path d="M14.2 9.4V7C14.2 6.1 14.9 5.4 15.8 5.4C16.7 5.4 17.4 6.1 17.4 7V12.7C17.4 16.1 15.1 18.8 11.9 18.8H10.8C8.4 18.8 6.6 17.8 5.4 15.7L3.7 12.8C3.3 12.1 3.6 11.2 4.3 10.8C5 10.5 5.8 10.7 6.2 11.3L7.8 13.4V10.2Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
      <path d="M4.2 3.8L2.4 2M19.8 3.8L21.6 2M20.2 19.8L22 21.6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </svg>
  );
}

function SearchControl() {
  return (
    <label className="case-search">
      <span className="sr-only">Search case studies</span>
      <SearchIcon />
      <input placeholder="Search" type="search" />
    </label>
  );
}

function HeroCard({ caseId, mode }: { caseId: CaseStudyId; mode: ViewMode }) {
  const study = getStudyContent(caseId);

  return (
    <section aria-labelledby="case-title" className="case-hero-card" id="cover">
      <span
        aria-hidden="true"
        className="case-hero-image"
        style={{ backgroundImage: `url(${study.image})`, backgroundPosition: study.imagePosition }}
      />

      {mode === "sections" ? (
        <nav aria-label="Case study sections" className="case-cover-nav">
          {sectionNav.map((section) => (
            <a href={section.href} key={section.href}>
              {section.label}
            </a>
          ))}
        </nav>
      ) : null}

      <div className="case-hero-copy">
        <h1 id="case-title">{study.title}</h1>
        <p>{study.subtitle}</p>
      </div>
      <p className="case-study-label">CASE STUDY</p>

      {mode === "sections" ? (
        <button className="case-swipe" type="button">
          <HandSwipeIcon />
          <span>Swipe to Read</span>
        </button>
      ) : null}
    </section>
  );
}

function ReportSections({ reportSections }: { reportSections: ReportSection[] }) {
  return (
    <section aria-label="Case study report" className="case-report-sections">
      {reportSections.map((section, index) => (
        <article className={`case-report-section is-section-${index + 1}`} id={section.id} key={section.id}>
          <h2>{section.title}</h2>
          <p className="case-report-intro">{section.intro}</p>
          <div className="case-report-body">
            {section.body.map((paragraph, paragraphIndex) => (
              <p key={`${section.id}-${paragraphIndex}`}>{paragraph}</p>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

function SectionReader({ reportSections }: { reportSections: ReportSection[] }) {
  return (
    <section aria-label="Case study sections" className="case-section-reader">
      {reportSections.map((section) => (
        <article className="case-section-card" id={section.id} key={section.id}>
          <h2>{section.title}</h2>
          <p className="case-section-intro">{section.intro}</p>
          <div className="case-section-body">
            {section.body.map((paragraph, paragraphIndex) => (
              <p key={`${section.id}-section-${paragraphIndex}`}>{paragraph}</p>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

function RelatedCard({ caseId, className = "" }: { caseId: CaseStudyId; className?: string }) {
  const study = getStudyContent(caseId);

  return (
    <article className={`case-related-card ${className}`}>
      <span
        aria-hidden="true"
        className="case-related-image"
        style={{ backgroundImage: `url(${study.image})`, backgroundPosition: study.imagePosition }}
      />
      <p className="case-related-eyebrow">CASE STUDY</p>
      <h3>{study.title}</h3>
      <p className="case-related-body">{study.subtitle}</p>
      <CaseButton className="is-read-more" href={caseId === "alitheia" ? "/case-studies/one-liner?case=alitheia" : "/case-studies/one-liner"}>
        Read More
      </CaseButton>
    </article>
  );
}

function RelatedWork({ caseId }: { caseId: CaseStudyId }) {
  return (
    <section aria-labelledby="related-title" className="case-related" id="related">
      <div className="case-related-intro">
        <p>MORE WORK</p>
        <h2 id="related-title">Related Case Studies</h2>
        <span>Work that reflects how we think, collaborate, and deliver.</span>
      </div>
      <RelatedCard caseId={caseId} className="is-first" />
      <RelatedCard caseId={caseId} className="is-second" />
      <CaseButton className="is-view-all" href="/what-we-do/our-work">
        View All Case Studies
      </CaseButton>
    </section>
  );
}

function ServicesCta() {
  return (
    <section aria-labelledby="services-title" className="case-services">
      <span
        aria-hidden="true"
        className="case-services-image"
        style={{ backgroundImage: `url(${figmaAssets.figmaBusinessPartners})` }}
      />
      <div className="case-services-copy">
        <p>OUR SERVICES</p>
        <h2 id="services-title">Curious how we do it? Explore our services.</h2>
        <span>Discover how our services support ideas from start to finish.</span>
        <CaseButton className="is-services" href="/what-we-do/services">
          <span className="is-desktop-label">Our Services</span>
          <span className="is-mobile-label">Explore Services</span>
        </CaseButton>
      </div>
    </section>
  );
}

export default function CaseStudyClient({
  caseId = "coca-cola",
  initialMode = "sections",
}: {
  caseId?: CaseStudyId;
  initialMode?: ViewMode;
}) {
  const [mode, setMode] = useState<ViewMode>(initialMode);
  const study = getStudyContent(caseId);

  useEffect(() => {
    const syncLocationMode = () => {
      const params = new URLSearchParams(window.location.search);
      setMode(params.get("view") === "report" || window.location.hash === "#report" ? "report" : "sections");
    };

    syncLocationMode();
    window.addEventListener("hashchange", syncLocationMode);
    window.addEventListener("popstate", syncLocationMode);

    return () => {
      window.removeEventListener("hashchange", syncLocationMode);
      window.removeEventListener("popstate", syncLocationMode);
    };
  }, []);

  const setViewMode = (nextMode: ViewMode) => {
    setMode(nextMode);

    const url = new URL(window.location.href);
    if (nextMode === "report") {
      url.searchParams.set("view", "report");
      url.hash = "report";
    } else {
      url.searchParams.delete("view");
      url.hash = "sections";
    }

    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    window.scrollTo(0, 0);
  };

  return (
    <main className={`${styles.caseScope} case-page is-${mode}`}>
      <div className={`case-frame is-${mode}`}>
        <Header active="what" tone={mode === "report" ? "dark" : "default"} />

        {mode === "sections" ? <SearchControl /> : null}
        <HeroCard caseId={caseId} mode={mode} />

        {mode === "sections" ? (
          <>
            <CaseButton className="is-view-report" onClick={() => setViewMode("report")}>
              View as Single Page Report
            </CaseButton>
            <SectionReader reportSections={study.reportSections} />
          </>
        ) : (
          <>
            <CaseButton className="is-read-sections is-top" onClick={() => setViewMode("sections")}>
              Read in Sections
            </CaseButton>
            <ReportSections reportSections={study.reportSections} />
            <CaseButton className="is-read-sections is-bottom" onClick={() => setViewMode("sections")}>
              Read in Sections
            </CaseButton>
          </>
        )}

        <RelatedWork caseId={caseId} />
        <ServicesCta />
      </div>

      <Footer />
    </main>
  );
}
