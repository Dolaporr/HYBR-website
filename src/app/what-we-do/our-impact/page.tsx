import Link from "next/link";
import type { ReactNode } from "react";
import {
  absaDiscoveryCaseStudy,
  alitheiaCaseStudy,
  cocaColaCaseStudy,
  type CaseStudyListing,
} from "@/content/caseStudies";
import { figmaAssets } from "@/content/site";
import { Footer, Header } from "../../_components/marketing";
import styles from "./impact.module.css";

const contentLinks = [
  { label: "HYBR's Impact", href: "#impact" },
  { label: "Countries Reached", href: "#countries" },
  { label: "Jobs Created", href: "#jobs" },
  { label: "Ventures Impacted", href: "#ventures" },
  { label: "Our Work", href: "#work" },
] as const;

function ImpactButton({
  children,
  className = "",
  href,
}: {
  children: ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <Link className={`impact-button ${className}`} href={href}>
      {children}
    </Link>
  );
}

function ContentDrop() {
  return (
    <aside aria-label="Our Impact page contents" className="impact-content-drop">
      <span
        aria-hidden="true"
        className="impact-content-drop-media"
        style={{ backgroundImage: `url(${figmaAssets.impactContentTab})` }}
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

function Metric({
  body,
  button,
  className,
  id,
  label,
  value,
}: {
  body: string;
  button?: string;
  className: string;
  id: string;
  label: string;
  value: string;
}) {
  return (
    <section className={`impact-metric ${className}`} id={id}>
      <div className="impact-metric-text">
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
      <p>{body}</p>
      {button ? (
        <ImpactButton href="/what-we-do/our-work">
          {button}
        </ImpactButton>
      ) : null}
    </section>
  );
}

function TrustedGrid() {
  return (
    <div aria-hidden="true" className="impact-trusted-grid">
      {Array.from({ length: 9 }).map((_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}

function CaseStudyCard({
  caseStudy,
  className = "",
}: {
  caseStudy: CaseStudyListing;
  className?: string;
}) {
  return (
    <article className={`impact-case-card ${className}`}>
      <span
        aria-hidden="true"
        className="impact-case-image"
        style={{
          backgroundImage: `url(${caseStudy.image})`,
          backgroundPosition: caseStudy.imagePosition,
        }}
      />
      <p className="impact-case-label">CASE STUDY</p>
      <h3>{caseStudy.title}</h3>
      <p className="impact-case-body is-long">
        {caseStudy.shortBody}
      </p>
      <p className="impact-case-body is-short">
        {caseStudy.shortBody}
      </p>
      {caseStudy.companyLogo ? (
        <img alt={caseStudy.company} className="impact-case-company-logo" src={caseStudy.companyLogo} />
      ) : (
        <p className="impact-case-company">{caseStudy.company}</p>
      )}
      <ImpactButton className="is-read" href={caseStudy.href}>
        Read More
      </ImpactButton>
    </article>
  );
}

export default function OurImpactPage() {
  return (
    <main className={`${styles.impactScope} impact-page`}>
      <div className="impact-frame">
        <Header active="what" />

        <section aria-labelledby="impact-title" className="impact-hero">
          <h1 id="impact-title">Our Impact</h1>
          <p>How your ideas can bring a positive impact to your business.</p>
        </section>

        <ContentDrop />

        <span
          aria-hidden="true"
          className="impact-intro-image"
          style={{ backgroundImage: `url(${figmaAssets.impactHybrImpact})` }}
        />
        <section aria-labelledby="impact-intro-title" className="impact-intro-copy" id="impact">
          <h2 id="impact-intro-title">HYBR&rsquo;s Impact</h2>
          <div>
            <p>
              Making the right decisions for your business isn&rsquo;t always easy.
              Many organisations struggle to get it right. HYBR brings structure
              to the process, helping you turn business ideas into clear,
              informed decisions.
            </p>
            <p>
              With the right decisions in place, confidence follows. Your ideas
              will be tested, validated, and made ready to work in the real
              world, so you can deliver solutions that create real impact for
              your business.
            </p>
          </div>
        </section>

        <img alt="" className="impact-globe" src={figmaAssets.impactGlobe} />

        <Metric
          body="Helping organizations make confident decisions worldwide."
          button="View All Locations"
          className="is-countries"
          id="countries"
          label="COUNTRIES REACHED"
          value="35+"
        />

        <div aria-hidden="true" className="impact-blue-band" />
        <p className="impact-trusted-label">TRUSTED BY</p>
        <TrustedGrid />

        <Metric
          body="Our work creates job opportunities at every level."
          className="is-jobs"
          id="jobs"
          label="JOBS CREATED"
          value="300K+"
        />

        <CaseStudyCard caseStudy={cocaColaCaseStudy} className="is-feature" />

        <Metric
          body="We help businesses turn good ideas into great results."
          button="View Our Work"
          className="is-ventures"
          id="ventures"
          label="VENTURES IMPACTED"
          value="4000+"
        />

        <section aria-labelledby="impact-work-title" className="impact-work-heading" id="work">
          <p>OUR WORK: CASE STUDIES</p>
          <h2 id="impact-work-title">Supporting Ideas From Start To Finish</h2>
          <span>See how we&rsquo;re working with people like you to change the world.</span>
        </section>

        <CaseStudyCard caseStudy={absaDiscoveryCaseStudy} className="is-work-one" />
        <CaseStudyCard caseStudy={alitheiaCaseStudy} className="is-work-two" />
        <ImpactButton className="is-all" href="/what-we-do/our-work">
          All Case Studies
        </ImpactButton>
      </div>

      <Footer />
    </main>
  );
}
