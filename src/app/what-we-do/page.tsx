import Link from "next/link";
import { figmaAssets } from "@/content/site";
import { productDescriptions } from "@/content/products";
import { Footer, Header } from "../_components/marketing";
import styles from "./page.module.css";

const contentLinks = [
  { label: "Our Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "Our Products", href: "#products" },
  { label: "Our Impact", href: "#impact" },
  { label: "Our Team", href: "#team" },
];

const products = [
  {
    key: "indx",
    name: "INDX",
    heading: "Know where to grow.",
    body: productDescriptions.indx,
    cta: "Join Waiting List",
    hasDesktopEmail: true,
  },
  {
    key: "flywheel",
    name: "FLYWHEEL",
    heading: "Build the capability to grow.",
    body: productDescriptions.flywheel,
    cta: "Join Waiting List",
    hasDesktopEmail: true,
  },
  {
    key: "alpha",
    name: "ALPHA",
    heading: "Develop Tomorrow's Innovators. Today.",
    body: productDescriptions.alpha,
    cta: "Access ALPHA",
    hasDesktopEmail: false,
  },
] as const;

const caseStudies = {
  feature: {
    image: "/home/edit-flags/plastic-waste.jpg",
    title: "Eliminating Plastic Waste In Nigeria",
    body: "We delivered a holistic innovation programme to tackle a critical and urgent environmental problem which helps Coca Cola to radically eliminate plastic waste.",
    company: "Coca-Cola",
    companyClass: "is-coca-cola",
  },
  tall: {
    image: figmaAssets.ourWorkTall,
    title: "Operational and Technical Diagnosis",
    body: "We conducted - in record time - robust due diligence and scale diagnostics for a female-led food company working towards Series A round funding.",
    company: "Alitheia Capital",
    companyClass: "is-alitheia",
  },
} as const;

const productIconAssets: Record<(typeof products)[number]["key"], string> = {
  flywheel: "/what/vectors/icon-flywheel.svg",
  indx: "/what/vectors/icon-indx.svg",
  alpha: "/what/vectors/icon-alpha.svg",
};

function ButtonLink({
  children,
  className = "",
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) {
  return (
    <Link className={`what-button ${className}`} href={href}>
      {children}
    </Link>
  );
}

function ContentDrop() {
  return (
    <aside aria-label="What We Do page contents" className="what-content-drop">
      <span
        aria-hidden="true"
        className="what-content-drop-media"
        style={{ backgroundImage: `url(${figmaAssets.whatContentTab})` }}
      />
      <p>CONTENT</p>
      <nav>
        {contentLinks.map((link) => (
          <a href={link.href} key={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

function ProductIcon({ type }: { type: (typeof products)[number]["key"] }) {
  return (
    <img alt="" aria-hidden="true" className="what-product-icon" src={productIconAssets[type]} />
  );
}

function ProcessMap() {
  return (
    <div aria-hidden="true" className="what-process-map">
      <span className="what-process-word is-discover">Discover</span>
      <span className="what-process-word is-develop">Develop</span>
      <span className="what-process-word is-deploy">Deploy</span>
      <img
        alt=""
        className="what-process-arrow what-process-arrow--mobile is-first"
        src="/what/vectors/service-arrow-mobile-down.svg"
      />
      <img
        alt=""
        className="what-process-arrow what-process-arrow--mobile is-second"
        src="/what/vectors/service-arrow-mobile-loop.svg"
      />
      <img
        alt=""
        className="what-process-arrow what-process-arrow--desktop is-first"
        src="/what/vectors/service-arrow-down.svg"
      />
      <img
        alt=""
        className="what-process-arrow what-process-arrow--desktop is-second"
        src="/what/vectors/service-arrow-loop.svg"
      />
    </div>
  );
}

function CaseStudyCard({ kind }: { kind: "feature" | "tall" }) {
  const study = caseStudies[kind];

  return (
    <article className={`what-case-card is-${kind}`}>
      <span
        aria-hidden="true"
        className="what-case-image"
        style={{ backgroundImage: `url(${study.image})` }}
      />
      <div className="what-case-copy">
        <p>CASE STUDY</p>
        <h3>{study.title}</h3>
        <span>{study.body}</span>
      </div>
      <ButtonLink className="is-white is-read" href={study.companyClass === "is-alitheia" ? "/case-studies/one-liner?case=alitheia" : "/case-studies/one-liner"}>
        Read More
      </ButtonLink>
    </article>
  );
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <article className={`what-product-card is-${product.key}`}>
      <div className="what-product-brand">
        <ProductIcon type={product.key} />
        <div>
          <h3>{product.name}</h3>
          <Link href="/what-we-do/products">Learn More</Link>
        </div>
      </div>
      <div className="what-product-copy">
        <div>
          <strong className="what-product-heading">{product.heading}</strong>
          <p>{product.body}</p>
        </div>
        <form className="what-product-actions">
          <input
            aria-label={`${product.name} email access`}
            className={product.hasDesktopEmail ? "" : "is-tablet-only"}
            placeholder="Insert Your Email"
            type="email"
          />
          <ButtonLink className="is-lime" href="/what-we-do/products">
            {product.cta}
          </ButtonLink>
        </form>
      </div>
    </article>
  );
}

function TeamStatement() {
  return (
    <>
      We are powered by a team that blends{" "}
      <span>strategy</span>, <span>creativity</span>, and <span>execution</span>.
    </>
  );
}

export default function WhatWeDoPage() {
  return (
    <main className={`${styles.whatScope} what-page`}>
      <div className="what-frame">
        <Header active="what" />

        <section aria-labelledby="what-title" className="what-hero">
          <h1 id="what-title">What We Do</h1>
          <p>Your shortcut from &lsquo;what if&rsquo; to &lsquo;what&rsquo;s next.&rsquo;</p>
        </section>

        <ContentDrop />

        <section aria-labelledby="services-title" className="what-services" id="services">
          <span
            aria-hidden="true"
            className="what-services-bg"
            style={{ backgroundImage: `url(${figmaAssets.figmaBusinessPartners})` }}
          />
          <div className="what-services-copy">
            <p>OUR SERVICES</p>
            <h2 id="services-title">
              We take you from understanding the problem to owning the market,
              all in one innovation pipeline.
            </h2>
            <ButtonLink className="is-glass" href="/what-we-do/services">
              Explore Services
            </ButtonLink>
          </div>
          <ProcessMap />
        </section>

        <section aria-label="Our work case studies" className="what-work" id="work">
          <CaseStudyCard kind="tall" />
          <CaseStudyCard kind="feature" />
          <div className="what-work-copy">
            <p>OUR WORK</p>
            <h2>Real Problems. Measurable Results.</h2>
            <span>
              See how we&apos;ve helped organizations eliminate innovation by
              guesswork and turn bold ideas into measurable business impact.
            </span>
            <ButtonLink href="/what-we-do/our-work">View Case Studies</ButtonLink>
          </div>
        </section>

        <section aria-labelledby="products-title" className="what-products" id="products">
          <span aria-hidden="true" className="what-product-orbit" />
          <div className="what-section-heading">
            <p>OUR PRODUCTS</p>
            <h2 id="products-title">Tools designed to make innovation feel effortless.</h2>
            <span>Helping you turn your best ideas into meaningful results.</span>
          </div>
          <div className="what-products-list">
            {products.map((product) => (
              <ProductCard key={product.key} product={product} />
            ))}
          </div>
          <ButtonLink className="what-products-button" href="/what-we-do/products">
            Explore All Products
          </ButtonLink>
        </section>

        <section aria-labelledby="impact-title" className="what-impact" id="impact">
          <div className="what-impact-heading">
            <p>OUR IMPACT</p>
            <h2 id="impact-title">We counted because it matters to us.</h2>
            <span>
              Every data point represents a life improved and a business transformed.
            </span>
          </div>
          <div className="what-impact-stats">
            <div className="is-countries">
              <strong>35+</strong>
              <span>COUNTRIES REACHED</span>
            </div>
            <div className="is-jobs">
              <strong>300K+</strong>
              <span>JOBS CREATED</span>
            </div>
            <div className="is-ventures">
              <strong>4000+</strong>
              <span>VENTURES IMPACTED</span>
            </div>
          </div>
          <ButtonLink className="what-impact-button is-clear" href="/what-we-do/our-impact">
            Learn More
          </ButtonLink>

          <section aria-labelledby="team-title" className="what-team" id="team">
            <div className="what-team-copy">
              <p>OUR TEAM</p>
              <h2 id="team-title"><TeamStatement /></h2>
              <span>
                If you&rsquo;re passionate about growth, creativity, and solving
                challenges that matter, this is the place for you &mdash; learn
                more about the team you could be a part of.
              </span>
            </div>
            <div aria-hidden="true" className="what-team-image">
              <svg viewBox="0 0 278 124" preserveAspectRatio="none" role="presentation">
                <defs>
                  <clipPath id="what-team-image-clip">
                    <path d="M0 0 H154 C222.483 0 278 55.5167 278 124 H124 C55.5167 124 0 68.4833 0 0 Z" />
                  </clipPath>
                </defs>
                <image
                  clipPath="url(#what-team-image-clip)"
                  height="124"
                  href={figmaAssets.whatOurTeam}
                  preserveAspectRatio="xMidYMid slice"
                  width="278"
                  x="0"
                  y="0"
                />
              </svg>
            </div>
            <div className="what-team-actions">
              <ButtonLink className="is-clear" href="/who-we-are/our-team">
                Our Team
              </ButtonLink>
              <ButtonLink className="is-clear" href="/who-we-are/careers">
                Join Us
              </ButtonLink>
            </div>
          </section>
        </section>
      </div>

      <Footer />
    </main>
  );
}
