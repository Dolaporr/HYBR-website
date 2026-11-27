import Link from "next/link";
import type { ReactNode } from "react";
import { absaDiscoveryCaseStudy, alitheiaCaseStudy, cocaColaCaseStudy, type CaseStudyListing } from "@/content/caseStudies";
import { figmaAssets } from "@/content/site";
import { Footer, Header } from "../../_components/marketing";
import styles from "./page.module.css";

const contentLinks = [
  { label: "Spotlight", href: "#spotlight" },
  { label: "Search & Filter", href: "#search" },
  { label: "Recent Case Studies", href: "#recent" },
  { label: "Our Services", href: "#services" },
] as const;

/* Material Symbols (outlined, 400) used by the frames: "search" and "keyboard_arrow_down". */
const SEARCH_PATH =
  "M796-121 533-384q-30 26-70 40.5T378-329q-108 0-183-75t-75-181q0-106 75-181t182-75q106 0 180.5 75T632-585q0 43-14 83t-42 75l264 262-44 44ZM377-389q81 0 138-57.5T572-585q0-81-57-138.5T377-781q-82 0-139.5 57.5T180-585q0 81 57.5 138.5T377-389Z";
const CHEVRON_PATH = "M480-344 240-584l43-43 197 197 197-197 43 43-240 240Z";

function Icon({ className, path }: { className: string; path: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" focusable="false" viewBox="0 -960 960 960">
      <path d={path} />
    </svg>
  );
}

function WorkButton({ children, className, href }: { children: ReactNode; className: string; href: string }) {
  return (
    <Link className={`work-button ${styles.button} ${className}`} href={href}>
      {children}
    </Link>
  );
}

function ContentDrop() {
  return (
    <aside aria-label="Our Work page contents" className={`work-content-drop ${styles.drop}`}>
      <span aria-hidden="true" className={styles.dropMedia} style={{ backgroundImage: `url(${figmaAssets.workContentTab})` }} />
      <p className={styles.dropLabel}>CONTENT</p>
      <nav className={styles.dropNav}>
        {contentLinks.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

function FilterButton({ label, className }: { label: string; className?: string }) {
  return (
    <button className={`${styles.filter} ${styles.filterButton} ${className ?? ""}`} type="button">
      <span>{label}</span>
      <Icon className={styles.chevron} path={CHEVRON_PATH} />
    </button>
  );
}

function FilterControls() {
  return (
    <section aria-label="Search and filter case studies" className={styles.filters} id="search">
      <label className={`${styles.filter} ${styles.search}`}>
        <span className="sr-only">Search case studies</span>
        <Icon className={styles.searchIcon} path={SEARCH_PATH} />
        <input placeholder="Search" type="search" />
      </label>
      <FilterButton className={styles.isFilters} label="Filters" />
      <FilterButton className={styles.isDesktopFilter} label="Sort by" />
      <FilterButton className={styles.isDesktopFilter} label="Topic" />
      <FilterButton className={styles.isDesktopFilter} label="Duration" />
    </section>
  );
}

function CaseStudyCard({ caseStudy, spotlight = false }: { caseStudy: CaseStudyListing; spotlight?: boolean }) {
  return (
    <article className={`${styles.card} ${spotlight ? styles.spotlight : styles.recent}`}>
      <span
        aria-hidden="true"
        className={styles.cardImage}
        style={{ backgroundImage: `url(${caseStudy.image})`, backgroundPosition: caseStudy.imagePosition }}
      />
      <img alt="" aria-hidden="true" className={styles.cardMark} src="/home/logo-case-study.svg" />
      <div className={styles.cardCopy}>
        <p className={styles.cardEyebrow}>CASE STUDY</p>
        <h2 className={styles.cardTitle}>{caseStudy.title}</h2>
        <p className={`${styles.cardBody} ${styles.isLong}`}>{caseStudy.body}</p>
        <p className={`${styles.cardBody} ${styles.isShort}`}>{caseStudy.shortBody}</p>
        <p className={styles.cardCompany}>{caseStudy.company}</p>
      </div>
      <WorkButton className={styles.read} href={caseStudy.href}>
        Read More
      </WorkButton>
    </article>
  );
}

export default function OurWorkPage() {
  return (
    <main className={`${styles.page} work-page`}>
      <Header active="what" />
      <ContentDrop />

      <div className={styles.flow}>
        <section aria-labelledby="work-title" className={styles.hero}>
          <h1 id="work-title">Our Work</h1>
          <p>Ideas are easy. Getting results is work.</p>
        </section>

        <FilterControls />

        <section aria-labelledby="spotlight-title" className={styles.spotlightSection} id="spotlight">
          <p className={styles.sectionLabel} id="spotlight-title">
            SPOTLIGHT
          </p>
          <CaseStudyCard caseStudy={cocaColaCaseStudy} spotlight />
        </section>

        <section aria-labelledby="case-studies-title" className={styles.recentSection} id="recent">
          <p className={styles.sectionLabel} id="case-studies-title">
            CASE STUDIES
          </p>
          <div className={styles.grid}>
            <CaseStudyCard caseStudy={absaDiscoveryCaseStudy} />
            <CaseStudyCard caseStudy={alitheiaCaseStudy} />
          </div>
          <WorkButton className={styles.viewAll} href="/case-studies/one-liner">
            View All Case Studies
          </WorkButton>
        </section>

        <section aria-labelledby="services-cta-title" className={styles.services} id="services">
          <span aria-hidden="true" className={styles.servicesImage} style={{ backgroundImage: `url(${figmaAssets.workServices})` }} />
          <div className={styles.servicesCopy}>
            <p>OUR SERVICES</p>
            <h2 id="services-cta-title">Curious how we do it? Explore our services.</h2>
            <span>Discover how our services support ideas from start to finish.</span>
            <WorkButton className={styles.servicesButton} href="/what-we-do/services">
              <span className={styles.desktopLabel}>Our Services</span>
              <span className={styles.mobileLabel}>Explore Services</span>
            </WorkButton>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
