import Link from "next/link";
import type { ReactNode } from "react";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import {
  absaDiscoveryCaseStudy,
  alitheiaCaseStudy,
  cocaColaCaseStudy,
  type CaseStudyListing,
} from "@/content/caseStudies";
import { figmaAssets } from "@/content/site";
import { Footer, Header } from "../../_components/marketing";
import styles from "./page.module.css";

const contentLinks = [
  { label: "HYBR's Impact", href: "/what-we-do/our-impact" },
  { label: "Countries Reached", href: "/what-we-do/our-impact#countries" },
  { label: "Jobs Created", href: "/what-we-do/our-impact#jobs" },
  { label: "Ventures Impacted", href: "/what-we-do/our-impact#ventures" },
  { label: "Our Work", href: "/what-we-do/our-work" },
];

const services = [
  {
    key: "discover",
    title: "Discover",
    body: "We help you discover what matters most. Using applied research, data and analytics, innovation sourcing, and value chain diagnostics, we reveal insights that guide confident decisions and unlock real value.",
    tags: [
      "Applied Research",
      "Value Chain Diagnostics",
      "Innovation Sourcing",
      "Data & Analytics",
    ],
    caseStudy: absaDiscoveryCaseStudy,
  },
  {
    key: "develop",
    title: "Develop",
    body: "Where insight becomes action. Through product and service innovation, experience design, fast prototyping, and field experiments, concepts evolve into solutions that work in practice.",
    tags: [
      "Product & Service Innovation",
      "User Experience & Interface Design",
      "Rapid Prototyping",
      "Pilot & Field Experiments",
    ],
    caseStudy: cocaColaCaseStudy,
  },
  {
    key: "deploy",
    title: "Deploy",
    body: "Your solutions are ready for the real world. From go-to-market strategy and venture building to scaling execution and impact assessment, everything is focused on helping you launch with confidence and grow with purpose.",
    tags: [
      "Go-To Market Strategy",
      "Venture Building",
      "Market Execution and Scaling",
      "Impact Assessment",
    ],
    caseStudy: alitheiaCaseStudy,
  },
] as const;

function ButtonLink({
  children,
  className = "",
  href,
}: {
  children: ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <Link className={`services-button ${className}`} href={href}>
      {children}
    </Link>
  );
}

function ContentDrop() {
  return (
    <aside aria-label="Our Services page contents" className="services-content-drop">
      <span
        aria-hidden="true"
        className="services-content-drop-media"
        style={{ backgroundImage: `url(${figmaAssets.servicesContentTab})` }}
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

function ProcessMap() {
  return (
    <div aria-hidden="true" className="services-process-map">
      <span className="services-process-word is-discover">Discover</span>
      <span className="services-process-word is-develop">Develop</span>
      <span className="services-process-word is-deploy">Deploy</span>
      <img
        alt=""
        className="services-process-arrow services-process-arrow--mobile is-first"
        src="/what/services-vectors/process-mobile-first.svg"
      />
      <img
        alt=""
        className="services-process-arrow services-process-arrow--mobile is-second"
        src="/what/services-vectors/process-mobile-second.svg"
      />
      <img
        alt=""
        className="services-process-arrow services-process-arrow--desktop is-first"
        src="/what/vectors/service-arrow-down.svg"
      />
      <img
        alt=""
        className="services-process-arrow services-process-arrow--desktop is-second"
        src="/what/vectors/service-arrow-loop.svg"
      />
    </div>
  );
}

function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudyListing }) {
  return (
    <article className="services-case-card">
      <span
        aria-hidden="true"
        className="services-case-image"
        style={{
          backgroundImage: `url(${caseStudy.image})`,
          backgroundPosition: caseStudy.imagePosition,
        }}
      />
      <p className="services-case-statement">
        {caseStudy.shortBody}
      </p>
      <p className="services-case-label">CASE STUDY</p>
      <ButtonLink className="is-read" href={caseStudy.href}>
        Read More
      </ButtonLink>
    </article>
  );
}

function ServiceSection({ service }: { service: (typeof services)[number] }) {
  return (
    <section className={`services-service is-${service.key}`} id={service.key}>
      <div className="services-service-copy">
        <h2>{service.title}</h2>
        <p>{service.body}</p>
      </div>
      <div className="services-tags">
        {service.tags.map((tag) => (
          <span key={`${service.key}-${tag}`}>{tag}</span>
        ))}
      </div>
      <CaseStudyCard caseStudy={service.caseStudy} />
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main className={`${styles.servicesScope} services-page`}>
      <div className="services-frame">
        <Header active="what" />

        <section aria-labelledby="services-title" className="services-hero">
          <h1 id="services-title">Our Services</h1>
          <p>Built to attain your goals — find the service that fits your next step.</p>
        </section>

        <ContentDrop />

        <section aria-label="Discover develop deploy process" className="services-process">
          <span
            aria-hidden="true"
            className="services-process-bg"
            style={{ backgroundImage: `url(${figmaAssets.figmaBusinessPartners})` }}
          />
          <ProcessMap />
        </section>

        {services.map((service) => (
          <ServiceSection key={service.key} service={service} />
        ))}

        <ButtonLink className="services-book-button" href="/contact">
          Book A Meeting
        </ButtonLink>

        <section aria-labelledby="services-testimonials-title" className="services-testimonials-heading">
          <p>TESTIMONIALS</p>
          <h2 id="services-testimonials-title">What our clients say about working with us.</h2>
          <span>These testimonials reflect the trust and confidence that come from our partnerships.</span>
        </section>

        <section aria-label="Client testimonials" className="services-shared-testimonials">
          <TestimonialsCarousel />
        </section>

        <ButtonLink className="services-talk-button" href="/contact">
          Let&apos;s Talk
        </ButtonLink>
      </div>

      <Footer />
    </main>
  );
}
