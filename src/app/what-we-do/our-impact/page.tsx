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

function ImpactButton({ children, className, href }: { children: ReactNode; className: string; href: string }) {
  return (
    <Link className={`impact-button ${styles.button} ${className}`} href={href}>
      {children}
    </Link>
  );
}

function ContentDrop() {
  return (
    <aside aria-label="Our Impact page contents" className={`impact-content-drop ${styles.drop}`}>
      <span aria-hidden="true" className={styles.dropMedia} style={{ backgroundImage: `url(${figmaAssets.impactContentTab})` }} />
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
  className?: string;
  id: string;
  label: string;
  value: string;
}) {
  return (
    <section aria-labelledby={`${id}-label`} className={`${styles.metric} ${className ?? ""}`} id={id}>
      <strong className={styles.metricValue}>{value}</strong>
      <span className={styles.metricLabel} id={`${id}-label`}>
        {label}
      </span>
      <p className={styles.metricBody}>{body}</p>
      {button ? (
        <ImpactButton className={styles.metricButton} href="/what-we-do/our-work">
          {button}
        </ImpactButton>
      ) : null}
    </section>
  );
}

function CaseStudyCard({ caseStudy, className }: { caseStudy: CaseStudyListing; className: string }) {
  return (
    <article className={`${styles.card} ${className}`}>
      <span
        aria-hidden="true"
        className={styles.cardImage}
        style={{ backgroundImage: `url(${caseStudy.image})`, backgroundPosition: caseStudy.imagePosition }}
      />
      <img alt="" aria-hidden="true" className={styles.cardMark} src="/home/logo-case-study.svg" />
      <div className={styles.cardCopy}>
        <p className={styles.cardEyebrow}>CASE STUDY</p>
        <h3 className={styles.cardTitle}>{caseStudy.title}</h3>
        <p className={styles.cardBody}>{caseStudy.shortBody}</p>
      </div>
      <div className={styles.cardFooter}>
        {caseStudy.companyLogo ? (
          <img alt={caseStudy.company} className={styles.cardLogo} src={caseStudy.companyLogo} />
        ) : (
          <p className={styles.cardCompany}>{caseStudy.company}</p>
        )}
        <ImpactButton className={styles.read} href={caseStudy.href}>
          Read More
        </ImpactButton>
      </div>
    </article>
  );
}

export default function OurImpactPage() {
  return (
    <main className={`${styles.page} impact-page`}>
      <Header active="what" />
      <ContentDrop />

      <section aria-labelledby="impact-title" className={`${styles.wrap} ${styles.hero}`}>
        <h1 id="impact-title">Our Impact</h1>
        <p>How your ideas can bring a positive impact to your business.</p>
      </section>

      <section aria-labelledby="impact-intro-title" className={styles.intro} id="impact">
        <span aria-hidden="true" className={styles.introImage} style={{ backgroundImage: `url(${figmaAssets.impactHybrImpact})` }} />
        <div className={`${styles.wrap} ${styles.introCopyWrap}`}>
          <div className={styles.introCopy}>
            <h2 id="impact-intro-title">HYBR&rsquo;s Impact</h2>
            <p>
              Making the right decisions for your business isn&rsquo;t always easy. Many organisations struggle to get
              it right. HYBR brings structure to the process, helping you turn business ideas into clear, informed
              decisions.
            </p>
            <p>
              With the right decisions in place, confidence follows. Your ideas will be tested, validated, and made
              ready to work in the real world, so you can deliver solutions that create real impact for your business.
            </p>
          </div>
        </div>
      </section>

      <div className={`${styles.wrap} ${styles.countriesRow}`}>
        <img alt="" className={styles.globe} src={figmaAssets.impactGlobe} />
        <Metric
          body="Helping organizations make confident decisions worldwide."
          button="View All Locations"
          className={styles.countries}
          id="countries"
          label="COUNTRIES REACHED"
          value="35+"
        />
      </div>

      <div className={styles.band}>
        <div className={`${styles.wrap} ${styles.bandRow}`}>
          <Metric
            body="Our work creates job opportunities at every level."
            className={styles.jobs}
            id="jobs"
            label="JOBS CREATED"
            value="300K+"
          />
          <div className={styles.trusted}>
            <p className={styles.trustedLabel}>TRUSTED BY</p>
            <div aria-hidden="true" className={styles.trustedGrid}>
              {Array.from({ length: 9 }).map((_, index) => (
                <span key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.wrap} ${styles.venturesRow}`}>
        <Metric
          body="We help businesses turn good ideas into great results."
          button="View Our Reach"
          className={styles.ventures}
          id="ventures"
          label="VENTURES IMPACTED"
          value="4000+"
        />
        <CaseStudyCard caseStudy={cocaColaCaseStudy} className={styles.feature} />
      </div>

      <section aria-labelledby="impact-work-title" className={`${styles.wrap} ${styles.work}`} id="work">
        <div className={styles.workHeading}>
          <p>OUR WORK: CASE STUDIES</p>
          <h2 id="impact-work-title">Supporting Ideas From Start To Finish</h2>
          <span>See how we&rsquo;re working with people like you to change the world.</span>
        </div>
        <div className={styles.workGrid}>
          <CaseStudyCard caseStudy={absaDiscoveryCaseStudy} className={styles.workCard} />
          <CaseStudyCard caseStudy={alitheiaCaseStudy} className={styles.workCard} />
        </div>
        <ImpactButton className={styles.allButton} href="/what-we-do/our-work">
          All Case Studies
        </ImpactButton>
      </section>

      <Footer />
    </main>
  );
}
