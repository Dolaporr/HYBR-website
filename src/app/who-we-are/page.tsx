import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { figmaAssets } from "@/content/site";
import { Footer, Header } from "../_components/marketing";
import { HistoryTimeline, type HistoryItem } from "./HistoryTimeline";
import "./figma.css";

const primaryImage = figmaAssets.figmaBusinessPartners;

const contentLinks = [
  { label: "Our History", href: "#history" },
  { label: "Early Days", href: "#early-days" },
  { label: "About Us", href: "#about-us" },
  { label: "Our Team", href: "#our-team" },
  { label: "Careers", href: "#careers" },
];

// mobileGap / mobilePin come from the 390 frame (1:5939): card tops 515, 794, 1130, ... and pin centres 605, 912, ...
const timeline: HistoryItem[] = [
  {
    year: "2016",
    text: "HYBR conceptualised to help ventures scale their impact in Africa.",
    icon: "/who/timeline/hybr-mark.svg",
    mobileGap: 0,
    mobilePin: 90,
  },
  {
    year: "2017",
    text: "Launched maiden edition of the Young Enterprise (YES) Bootcamp in Lagos in partnership with Samsung, Google, Deloitte, and Sage.",
    icon: "/who/timeline/sneaker-move.svg",
    mobileGap: 119,
    mobilePin: 118,
  },
  {
    year: "2018",
    text: "YES expands to reach ventures in Lagos, Johannesburg, and Nairobi. HYBR opens office in Cape Town.",
    icon: "/who/timeline/arrows-out-cardinal.svg",
    mobileGap: 119,
    mobilePin: 109,
  },
  {
    year: "2019",
    text: "Implements the Merck-Make-IT-Africa Joint program to impact healthcare ventures across Africa.",
    icon: "/who/timeline/asclepius.svg",
    mobileGap: 138,
    mobilePin: 109,
  },
  {
    year: "2019",
    text: "Implements the Entrepreneurs Plastics Innovation Challenge (EPIC) powered by Coca-Cola.",
    icon: "/who/timeline/beer-bottle.svg",
    mobileGap: 119,
    mobilePin: 99,
  },
  {
    year: "2020",
    text: "Supports ventures globally, through the Growing through Uncertainty program during COVID-19.",
    icon: "/who/timeline/handshake.svg",
    mobileGap: 100,
    mobilePin: 108,
  },
  {
    year: "2020",
    text: "Ecosystem study - Innovating in the New Normal post COVID-19. Opens operations in London, UK.",
    icon: "/who/timeline/map-pin-area.svg",
    mobileGap: 138,
    mobilePin: 99,
  },
  {
    year: "2021",
    text: "Partnership with ABSA for continent-wide innovation intelligence.",
    icon: "/who/timeline/robot.svg",
    mobileGap: 100,
    mobilePin: 90,
  },
  {
    year: "2022",
    text: "Strategic reorganization, new purpose, and missions.",
    icon: "/who/timeline/compass.svg",
    mobileGap: 119,
    mobilePin: 80,
  },
  {
    year: "2024",
    text: "Transition into a full-service innovation agency.",
    icon: "/who/timeline/sparkle.svg",
    mobileGap: 100,
    mobilePin: 71,
  },
];

function Label({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <p className="wwa-label" id={id}>
      {children}
    </p>
  );
}

function OutlineButton({ children, href, light = false }: { children: ReactNode; href: string; light?: boolean }) {
  return (
    <Link className={`wwa-button${light ? " wwa-button--light" : ""}`} href={href}>
      {children}
    </Link>
  );
}

function Photo({ className, src }: { className: string; src: string }) {
  return (
    <div aria-hidden="true" className={className}>
      <span className="wwa-photo" style={{ backgroundImage: `url(${src})` } as CSSProperties} />
    </div>
  );
}

function ContentDrop() {
  return (
    <aside className="who-content-drop" aria-label="Page contents">
      <span
        aria-hidden="true"
        className="who-content-drop-media"
        style={{ backgroundImage: `url(${figmaAssets.whoContentTab})` }}
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

export default function WhoWeArePage() {
  return (
    <main className="who-page wwa-page">
      <Header active="who" />

      <section className="wwa-hero wwa-container" aria-labelledby="wwa-title">
        <h1 id="wwa-title">Who We Are</h1>
        <p>
          A Tribe of Dynamic Doers <br className="wwa-break-mobile" />
          &mdash; Building What&apos;s Next.
        </p>
      </section>

      <ContentDrop />

      <HistoryTimeline items={timeline} />

      <div className="wwa-story">
        <div aria-hidden="true" className="wwa-orbits">
          <span className="wwa-orbit wwa-orbit--a" />
          <span className="wwa-orbit wwa-orbit--b" />
          <span className="wwa-orbit wwa-orbit--c" />
        </div>

        <section className="wwa-early wwa-container" id="early-days" aria-labelledby="wwa-early-title">
          <div className="wwa-early-card">
            <span className="wwa-photo" style={{ backgroundImage: `url(${primaryImage})` }} />
            <div className="wwa-early-copy">
              <h2 id="wwa-early-title">Early Days</h2>
              <p>Big ambitions. Small beginnings. Unwavering belief.</p>
            </div>
          </div>
        </section>

        <section className="wwa-split wwa-about wwa-container" id="about-us" aria-labelledby="wwa-about-title">
          <Photo className="wwa-pill wwa-pill--right" src={figmaAssets.whoAboutUs} />
          <div className="wwa-copy">
            <Label>About Us</Label>
            <h2 id="wwa-about-title">
              We help innovators turn untapped potential into world-shaping solutions.
            </h2>
            <div className="wwa-body">
              <p>
                At HYBR, we don&rsquo;t just innovate&mdash;we reimagine the very blueprint of how
                innovation is discovered, nurtured, and scaled in underserved markets.
              </p>
              <p>
                We transform ideas, products, services, and organizations into innovation leaders. We
                are a purpose-driven innovation agency&mdash;unearthing breakthrough ideas, empowering
                brilliant innovation leaders, and igniting solutions with global impact. From Lagos to
                London, Cape Town to California, HYBR is where big ideas meet bold execution.
              </p>
            </div>
            <OutlineButton href="/who-we-are/about-us">Learn More</OutlineButton>
          </div>
        </section>

        <section className="wwa-team wwa-container" id="our-team" aria-labelledby="wwa-team-title">
          <div className="wwa-team-card">
            <div className="wwa-team-head">
              <Label>Our Team</Label>
              <h2 id="wwa-team-title">
                The people powering <span>HYBR</span>: <br className="wwa-break-tablet" />
                innovators obsessed with building what&apos;s next.
              </h2>
            </div>
            <p className="wwa-team-body">
              Our team brings together decades of experience across innovation strategy, venture
              building, AI, and enterprise transformation. From designing market-shifting business
              models to launching scalable technologies in frontier markets, we combine analytic rigor,
              creative problem-solving, and deep sector expertise to help organizations unlock
              what&apos;s possible.
            </p>
            <div className="wwa-team-media">
              <span className="wwa-photo" style={{ backgroundImage: `url(${primaryImage})` }} />
              <OutlineButton href="/who-we-are/our-team" light>
                Learn More
              </OutlineButton>
            </div>
          </div>
        </section>
      </div>

      <section className="wwa-split wwa-careers wwa-container" id="careers" aria-labelledby="wwa-careers-title">
        <Photo className="wwa-pill wwa-pill--left" src={figmaAssets.whoCareers} />
        <div className="wwa-copy">
          <Label>Careers</Label>
          <h2 id="wwa-careers-title">
            Join us and build the future&mdash;turning tough challenges into breakthrough solutions.
          </h2>
          <div className="wwa-body">
            <p>
              If you&rsquo;re driven by curiosity, obsessed with solving complex problems, and excited to
              shape the future of global underserved markets, you&rsquo;ll feel right at home here.
              Explore careers at HYBR and build what&rsquo;s next with us.
            </p>
          </div>
          <OutlineButton href="/who-we-are/careers">Learn More</OutlineButton>
        </div>
      </section>

      <Footer />
    </main>
  );
}
