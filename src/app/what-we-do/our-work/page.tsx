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

function WorkButton({
  children,
  className = "",
  href,
}: {
  children: ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <Link className={`work-button ${className}`} href={href}>
      {children}
    </Link>
  );
}

function SearchIcon() {
  return (
    <svg aria-hidden="true" className="work-filter-icon" fill="none" viewBox="0 0 24 24">
      <circle cx="10.8" cy="10.8" r="5.8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M15.4 15.4L20 20" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg aria-hidden="true" className="work-filter-chevron" fill="none" viewBox="0 0 24 24">
      <path d="M7 10L12 15L17 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function ContentDrop() {
  return (
    <aside aria-label="Our Work page contents" className="work-content-drop">
      <span
        aria-hidden="true"
        className="work-content-drop-media"
        style={{ backgroundImage: `url(${figmaAssets.workContentTab})` }}
      />
      <p>CONTENT</p>
      <nav>
        {contentLinks.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

function FilterControls() {
  return (
    <section aria-label="Search and filter case studies" className="work-filters" id="search">
      <label className="work-filter is-search">
        <span className="sr-only">Search case studies</span>
        <SearchIcon />
        <input placeholder="Search" type="search" />
      </label>
      <button className="work-filter is-filters" type="button">
        <span>Filters</span>
        <ChevronDown />
      </button>
      <button className="work-filter is-sort" type="button">
        <span>Sort by</span>
        <ChevronDown />
      </button>
      <button className="work-filter is-topic" type="button">
        <span>Topic</span>
        <ChevronDown />
      </button>
      <button className="work-filter is-duration" type="button">
        <span>Duration</span>
        <ChevronDown />
      </button>
    </section>
  );
}

function CaseStudyCard({ caseStudy, className = "" }: { caseStudy: CaseStudyListing; className?: string }) {
  return (
    <article className={`work-card ${className}`}>
      <span
        aria-hidden="true"
        className="work-card-image"
        style={{ backgroundImage: `url(${caseStudy.image})`, backgroundPosition: caseStudy.imagePosition }}
      />
      <p className="work-card-eyebrow">CASE STUDY</p>
      <h2>{caseStudy.title}</h2>
      <p className="work-card-body is-long">
        {caseStudy.body}
      </p>
      <p className="work-card-body is-short">
        {caseStudy.shortBody}
      </p>
      <WorkButton className="is-read" href={caseStudy.href}>
        Read More
      </WorkButton>
    </article>
  );
}

function ServicesCta() {
  return (
    <section aria-labelledby="services-cta-title" className="work-services" id="services">
      <span
        aria-hidden="true"
        className="work-services-image"
        style={{ backgroundImage: `url(${figmaAssets.workServices})` }}
      />
      <div className="work-services-copy">
        <p>OUR SERVICES</p>
        <h2 id="services-cta-title">Curious how we do it? Explore our services.</h2>
        <span>Discover how our services support ideas from start to finish.</span>
        <WorkButton className="is-services" href="/what-we-do/services">
          <span className="is-desktop-label">Our Services</span>
          <span className="is-mobile-label">Explore Services</span>
        </WorkButton>
      </div>
    </section>
  );
}

export default function OurWorkPage() {
  return (
    <main className={`${styles.workScope} work-page`}>
      <div className="work-frame">
        <Header active="what" />

        <section aria-labelledby="work-title" className="work-hero">
          <h1 id="work-title">Our Work</h1>
          <p>Ideas are easy. Getting results is work.</p>
        </section>

        <ContentDrop />
        <FilterControls />

        <p className="work-section-label is-spotlight-label">SPOTLIGHT</p>
        <section aria-label="Spotlight case study" className="work-spotlight" id="spotlight">
          <CaseStudyCard caseStudy={cocaColaCaseStudy} className="is-spotlight" />
        </section>

        <section aria-labelledby="case-studies-title" id="recent">
          <p className="work-section-label is-recent-label" id="case-studies-title">
            CASE STUDIES
          </p>
          <div className="work-recent-grid">
            <CaseStudyCard caseStudy={absaDiscoveryCaseStudy} className="is-recent is-first" />
            <CaseStudyCard caseStudy={alitheiaCaseStudy} className="is-recent is-second" />
          </div>
          <WorkButton className="is-view-all" href="/case-studies/one-liner">
            View All Case Studies
          </WorkButton>
        </section>

        <ServicesCta />
      </div>

      <Footer />
    </main>
  );
}
