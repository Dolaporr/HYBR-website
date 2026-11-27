"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import {
  absaDiscoveryCaseStudy,
  alitheiaCaseStudy,
  alitheiaEditorial,
  cocaColaCaseStudy,
  type CaseStudyListing,
} from "@/content/caseStudies";
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

const MARK = "/home/logo-case-study.svg";
const SERVICES_IMAGE = "/case-studies/services-cta.jpg";

/* The shared listing images have a 10 px white frame baked into the file; these copies are cropped. */
const CLEAN_IMAGES: Record<string, string> = {
  "/home/edit-flags/plastic-waste.jpg": "/case-studies/coca-cola-plastic-waste.jpg",
  "/home/our-work-tall-source.png": "/case-studies/alitheia-building.jpg",
};
const clean = (src: string) => CLEAN_IMAGES[src] ?? src;

const navLabels: Record<string, string> = {
  context: "Context",
  ambition: "Ambition",
  "our-work": "Our Work",
  outcome: "Outcome",
};

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
        <Link className={styles.inlineLink} href="https://www.epicforchange.com/" rel="noopener noreferrer" target="_blank">
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

const alitheiaIntros = [
  "Looking beyond financial performance",
  "Know what it takes to scale before putting capital to work",
  "Bring the right expertise to the table - fast",
  "What the work made possible",
];

const alitheiaReportSections: ReportSection[] = alitheiaEditorial.sections.map((section, index) => ({
  body: section.copy,
  id: ["context", "ambition", "our-work", "outcome"][index],
  intro: alitheiaIntros[index],
  title: ["Context", "The Ambition", "Our Work", "Outcome"][index],
}));

function getStudy(caseId: CaseStudyId) {
  if (caseId === "alitheia") {
    return {
      company: alitheiaCaseStudy.company,
      image: clean(alitheiaCaseStudy.image),
      imagePosition: alitheiaCaseStudy.imagePosition,
      related: [cocaColaCaseStudy, absaDiscoveryCaseStudy],
      reportSections: alitheiaReportSections,
      shortSubtitle: alitheiaCaseStudy.shortBody,
      subtitle: alitheiaEditorial.subtitle,
      title: alitheiaEditorial.title,
    };
  }

  return {
    company: cocaColaCaseStudy.company,
    image: clean(cocaColaCaseStudy.image),
    imagePosition: cocaColaCaseStudy.imagePosition,
    related: [absaDiscoveryCaseStudy, alitheiaCaseStudy],
    reportSections: cocaColaReportSections,
    shortSubtitle: cocaColaCaseStudy.shortBody,
    subtitle:
      "How HYBR helped Coca-Cola move from a broad waste-reduction ambition to tested ventures, locally developed waste-to-value innovations.",
    title: "Towards a World Without Waste",
  };
}

type Study = ReturnType<typeof getStudy>;

function SearchIcon() {
  return (
    <svg aria-hidden="true" className={styles.searchIcon} fill="currentColor" viewBox="0 -960 960 960">
      <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
    </svg>
  );
}

function HandSwipeLeftIcon() {
  return (
    <svg aria-hidden="true" className={styles.swipeIcon} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.2498 13.1251V16.5001C20.2498 18.8991 19.4539 20.5173 19.4201 20.5857C19.3579 20.7102 19.2622 20.8149 19.1438 20.888C19.0254 20.9612 18.889 21 18.7498 21.0001C18.6336 21.0002 18.5189 20.9729 18.4151 20.9204C18.2373 20.8315 18.102 20.6756 18.0391 20.4869C17.9761 20.2983 17.9907 20.0924 18.0795 19.9145C18.0851 19.9032 18.7508 18.526 18.7508 16.5001V13.1251C18.7508 12.8267 18.6322 12.5406 18.4213 12.3296C18.2103 12.1186 17.9241 12.0001 17.6258 12.0001C17.3274 12.0001 17.0413 12.1186 16.8303 12.3296C16.6193 12.5406 16.5008 12.8267 16.5008 13.1251V13.5001C16.5008 13.699 16.4218 13.8898 16.2811 14.0304C16.1404 14.1711 15.9497 14.2501 15.7508 14.2501C15.5519 14.2501 15.3611 14.1711 15.2204 14.0304C15.0798 13.8898 15.0008 13.699 15.0008 13.5001V11.6251C15.0008 11.3267 14.8822 11.0406 14.6713 10.8296C14.4603 10.6186 14.1741 10.5001 13.8758 10.5001C13.5774 10.5001 13.2913 10.6186 13.0803 10.8296C12.8693 11.0406 12.7508 11.3267 12.7508 11.6251V12.7501C12.7508 12.949 12.6718 13.1398 12.5311 13.2804C12.3904 13.4211 12.1997 13.5001 12.0008 13.5001C11.8019 13.5001 11.6111 13.4211 11.4704 13.2804C11.3298 13.1398 11.2508 12.949 11.2508 12.7501V6.37509C11.2508 6.07672 11.1322 5.79057 10.9213 5.57959C10.7103 5.36861 10.4241 5.25009 10.1258 5.25009C9.8274 5.25009 9.54125 5.36861 9.33027 5.57959C9.1193 5.79057 9.00077 6.07672 9.00077 6.37509V16.5001C9.00076 16.663 8.94769 16.8215 8.84958 16.9516C8.75147 17.0817 8.61366 17.1763 8.457 17.2211C8.30034 17.2659 8.13335 17.2585 7.98129 17.2C7.82923 17.1414 7.70037 17.0349 7.61421 16.8966L5.86296 14.0841L5.84983 14.0626C5.77596 13.9345 5.6776 13.8223 5.56036 13.7323C5.44311 13.6423 5.30928 13.5762 5.16651 13.5379C5.02374 13.4996 4.87483 13.4898 4.72827 13.509C4.58171 13.5283 4.44037 13.5762 4.31233 13.6501C4.18429 13.724 4.07206 13.8223 3.98203 13.9396C3.89201 14.0568 3.82596 14.1906 3.78766 14.3334C3.74935 14.4762 3.73954 14.6251 3.75879 14.7717C3.77804 14.9182 3.82596 15.0595 3.89983 15.1876L6.64577 19.8751C6.70356 19.9603 6.74319 20.0565 6.76218 20.1577C6.78117 20.2589 6.77912 20.3629 6.75616 20.4633C6.7332 20.5637 6.68981 20.6582 6.62871 20.7411C6.5676 20.824 6.49009 20.8934 6.40099 20.945C6.3119 20.9966 6.21313 21.0293 6.11084 21.0411C6.00855 21.0529 5.90493 21.0435 5.80643 21.0135C5.70794 20.9835 5.61668 20.9335 5.53834 20.8667C5.46 20.7998 5.39626 20.7176 5.35108 20.6251L2.60233 15.9376C2.25212 15.3358 2.15533 14.6194 2.33326 13.9462C2.51118 13.2731 2.94925 12.6981 3.55108 12.3479C4.15292 11.9977 4.86922 11.9009 5.54242 12.0788C6.21562 12.2567 6.79056 12.6948 7.14077 13.2966L7.49983 13.8751V6.37509C7.49983 5.67889 7.77639 5.01121 8.26868 4.51893C8.76096 4.02665 9.42864 3.75009 10.1248 3.75009C10.821 3.75009 11.4887 4.02665 11.981 4.51893C12.4733 5.01121 12.7498 5.67889 12.7498 6.37509V9.25321C13.0874 9.09302 13.4552 9.00673 13.8288 9.0001C14.2023 8.99347 14.573 9.06666 14.916 9.21478C15.259 9.36289 15.5664 9.58252 15.8177 9.85898C16.069 10.1354 16.2584 10.4624 16.3733 10.8179C16.7731 10.601 17.2224 10.4918 17.6771 10.5008C18.1319 10.5099 18.5765 10.637 18.9674 10.8696C19.3582 11.1022 19.6819 11.4324 19.9067 11.8278C20.1316 12.2232 20.2498 12.6702 20.2498 13.1251ZM23.2498 4.50009H18.3101L20.0295 2.78071C20.1702 2.6401 20.2494 2.44935 20.2494 2.25042C20.2495 2.05148 20.1706 1.86066 20.03 1.71993C19.8894 1.5792 19.6986 1.50009 19.4997 1.5C19.3008 1.49991 19.1099 1.57885 18.9692 1.71946L15.9692 4.71946C15.8995 4.78912 15.8442 4.87183 15.8064 4.96288C15.7687 5.05393 15.7492 5.15152 15.7492 5.25009C15.7492 5.34865 15.7687 5.44624 15.8064 5.53729C15.8442 5.62834 15.8995 5.71106 15.9692 5.78071L18.9692 8.78071C19.1099 8.92132 19.3008 9.00026 19.4997 9.00017C19.6986 9.00008 19.8894 8.92097 20.03 8.78024C20.1706 8.63951 20.2495 8.44869 20.2494 8.24975C20.2494 8.05082 20.1702 7.86007 20.0295 7.71946L18.3101 6.00009H23.2498C23.4487 6.00009 23.6395 5.92107 23.7802 5.78042C23.9208 5.63976 23.9998 5.449 23.9998 5.25009C23.9998 5.05117 23.9208 4.86041 23.7802 4.71976C23.6395 4.5791 23.4487 4.50009 23.2498 4.50009Z" />
    </svg>
  );
}

function CompanyRow({ name }: { name: string }) {
  return (
    <div className={styles.company}>
      <img alt="" aria-hidden="true" className={styles.companyMark} src={MARK} />
      <span>{name}</span>
    </div>
  );
}

function HeroCopy({ study }: { study: Study }) {
  return (
    <div className={styles.heroCopy}>
      <h1 id="case-title">{study.title}</h1>
      <p className={styles.subtitleLong}>{study.subtitle}</p>
      <p className={styles.subtitleShort}>{study.shortSubtitle}</p>
    </div>
  );
}

/** Section reader: the cover card with COVER / section tabs; each tab (or a swipe) shows that section in the card. */
function SectionReader({ study }: { study: Study }) {
  const slides = ["cover", ...study.reportSections.map((section) => section.id)];
  const [active, setActive] = useState(0);
  const startX = useRef<number | null>(null);
  const go = (index: number) => setActive(Math.max(0, Math.min(slides.length - 1, index)));

  const onPointerDown = (event: ReactPointerEvent) => {
    startX.current = event.clientX;
  };
  const onPointerUp = (event: ReactPointerEvent) => {
    if (startX.current === null) return;
    const dx = event.clientX - startX.current;
    startX.current = null;
    if (Math.abs(dx) > 48) go(active + (dx < 0 ? 1 : -1));
  };

  return (
    <section
      aria-labelledby="case-title"
      aria-roledescription="carousel"
      className={styles.reader}
      id="cover"
      onPointerCancel={() => (startX.current = null)}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      <span
        aria-hidden="true"
        className={styles.readerImage}
        style={{ backgroundImage: `url(${study.image})`, backgroundPosition: study.imagePosition }}
      />
      <nav aria-label="Case study sections" className={styles.readerNav}>
        {slides.map((slide, index) => (
          <button
            aria-controls={`slide-${slide}`}
            aria-current={index === active ? "true" : undefined}
            key={slide}
            onClick={() => go(index)}
            type="button"
          >
            {index === 0 ? "Cover" : navLabels[slide]}
          </button>
        ))}
      </nav>

      <div className={styles.readerTrack}>
        <div
          aria-hidden={active !== 0}
          className={`${styles.slide} ${styles.coverSlide}`}
          data-active={active === 0}
          id="slide-cover"
          inert={active !== 0}
          style={{ transform: `translateX(${(0 - active) * 100}%)` }}
        >
          <HeroCopy study={study} />
          <div className={styles.coverFooter}>
            <CompanyRow name={study.company} />
            <p className={styles.caseLabel}>CASE STUDY</p>
          </div>
        </div>
        {study.reportSections.map((section, i) => {
          const index = i + 1;
          return (
            <div
              aria-hidden={active !== index}
              className={`${styles.slide} ${styles.sectionSlide}`}
              data-active={active === index}
              id={`slide-${section.id}`}
              inert={active !== index}
              key={section.id}
              style={{ transform: `translateX(${(index - active) * 100}%)` }}
            >
              <h2>{section.title}</h2>
              <p className={styles.sectionIntro}>{section.intro}</p>
              <div className={styles.sectionBody}>
                {section.body.map((paragraph, p) => (
                  <p key={`${section.id}-${p}`}>{paragraph}</p>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {active < slides.length - 1 ? (
        <button className={styles.swipe} onClick={() => go(active + 1)} type="button">
          <span>Swipe to Read</span>
          <HandSwipeLeftIcon />
        </button>
      ) : null}
    </section>
  );
}

function ReportHero({ study }: { study: Study }) {
  return (
    <section aria-labelledby="case-title" className={styles.reportHero} id="cover">
      <span
        aria-hidden="true"
        className={styles.reportHeroImage}
        style={{ backgroundImage: `url(${study.image})`, backgroundPosition: study.imagePosition }}
      />
      <div className={styles.reportHeroInner}>
        <HeroCopy study={study} />
        <div className={styles.coverFooter}>
          <CompanyRow name={study.company} />
          <p className={styles.caseLabel}>CASE STUDY</p>
        </div>
      </div>
    </section>
  );
}

function ReportSections({ sections }: { sections: ReportSection[] }) {
  return (
    <div className={styles.reportSections}>
      {sections.map((section) => (
        <article className={styles.reportSection} id={section.id} key={section.id}>
          <h2>{section.title}</h2>
          <p className={styles.sectionIntro}>{section.intro}</p>
          <div className={styles.sectionBody}>
            {section.body.map((paragraph, p) => (
              <p key={`${section.id}-${p}`}>{paragraph}</p>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

function RelatedCard({ item }: { item: CaseStudyListing }) {
  return (
    <article className={styles.relatedCard}>
      <span
        aria-hidden="true"
        className={styles.relatedImage}
        style={{ backgroundImage: `url(${clean(item.image)})`, backgroundPosition: item.imagePosition }}
      />
      <img alt="" aria-hidden="true" className={styles.relatedMark} src={MARK} />
      <p className={styles.relatedEyebrow}>CASE STUDY</p>
      <h3>{item.title}</h3>
      <p className={styles.relatedBodyLong}>{item.body}</p>
      <p className={styles.relatedBodyShort}>{item.shortBody}</p>
      <div className={styles.relatedFooter}>
        <p className={styles.relatedCompany}>{item.company}</p>
        <Link className={styles.readMore} href={item.href}>
          Read More
        </Link>
      </div>
    </article>
  );
}

function RelatedWork({ items }: { items: CaseStudyListing[] }) {
  return (
    <section aria-labelledby="related-title" className={`${styles.container} ${styles.related}`} id="related">
      <div className={styles.relatedIntro}>
        <p className={styles.eyebrow}>MORE WORK</p>
        <h2 id="related-title">Related Case Studies</h2>
        <p className={styles.introText}>Work that reflects how we think, collaborate, and deliver.</p>
      </div>
      <div className={styles.relatedGrid}>
        {items.map((item) => (
          <RelatedCard item={item} key={item.href} />
        ))}
      </div>
      <div className={styles.centerRow}>
        <Link className={`${styles.button} ${styles.viewAll}`} href="/what-we-do/our-work">
          View All Case Studies
        </Link>
      </div>
    </section>
  );
}

function ServicesCta() {
  return (
    <section aria-labelledby="services-title" className={styles.services}>
      <div className={styles.servicesImage}>
        <img alt="" aria-hidden="true" src={SERVICES_IMAGE} />
      </div>
      <div className={`${styles.container} ${styles.servicesInner}`}>
        <div className={styles.servicesCopy}>
          <p className={styles.eyebrow}>OUR SERVICES</p>
          <h2 id="services-title">Curious how we do it? Explore our services.</h2>
          <p className={styles.introText}>Discover how our services support ideas from start to finish.</p>
          <Link className={`${styles.button} ${styles.servicesButton}`} href="/what-we-do/services">
            Our Services
          </Link>
        </div>
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
  const study = getStudy(caseId);

  useEffect(() => {
    const sync = () => {
      const params = new URLSearchParams(window.location.search);
      setMode(params.get("view") === "report" || window.location.hash === "#report" ? "report" : "sections");
    };
    sync();
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, []);

  const setViewMode = (next: ViewMode) => {
    setMode(next);
    const url = new URL(window.location.href);
    if (next === "report") url.searchParams.set("view", "report");
    else url.searchParams.delete("view");
    url.hash = "";
    window.history.replaceState(null, "", `${url.pathname}${url.search}`);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <main className={styles.page} data-mode={mode}>
      <Header active="what" tone={mode === "report" ? "dark" : "default"} />

      {mode === "sections" ? (
        <div className={`${styles.container} ${styles.readerTop}`}>
          <label className={styles.search}>
            <span className="sr-only">Search case studies</span>
            <SearchIcon />
            <input placeholder="Search" type="search" />
          </label>
          <SectionReader key={caseId} study={study} />
          <div className={styles.centerRow}>
            <button className={`${styles.button} ${styles.viewReport}`} onClick={() => setViewMode("report")} type="button">
              View as Single Page Report
            </button>
          </div>
        </div>
      ) : (
        <>
          <ReportHero study={study} />
          <div className={styles.container}>
            <div className={styles.centerRow}>
              <button className={`${styles.button} ${styles.readSections} ${styles.readSectionsTop}`} onClick={() => setViewMode("sections")} type="button">
                Read in Sections
              </button>
            </div>
            <ReportSections sections={study.reportSections} />
            <div className={styles.bottomRow}>
              <button className={`${styles.button} ${styles.readSections} ${styles.readSectionsBottom}`} onClick={() => setViewMode("sections")} type="button">
                Read in Sections
              </button>
            </div>
          </div>
        </>
      )}

      <RelatedWork items={study.related} />
      <ServicesCta />
      <Footer />
    </main>
  );
}
