import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { figmaAssets } from "@/content/site";
import { Footer, Header } from "../_components/marketing";

const primaryImage = figmaAssets.figmaBusinessPartners;

const contentLinks = [
  { label: "Our History", href: "#history" },
  { label: "Early Days", href: "#early-days" },
  { label: "About Us", href: "#about-us" },
  { label: "Our Team", href: "#our-team" },
  { label: "Careers", href: "#careers" },
];

const timeline = [
  {
    year: "2016",
    text: "HYBR conceptualised to help ventures scale their impact in Africa.",
    icon: "hybr",
    desktop: { x: 0, y: 171, w: 490, h: 164, side: "top" },
    mobile: { x: 130, y: 0, w: 212, h: 160 },
  },
  {
    year: "2017",
    text: "Launched maiden edition of the Young Enterprise (YES) Bootcamp in Lagos in partnership with Samsung, Google, Deloitte, and Sage.",
    icon: "shoe",
    desktop: { x: 366, y: 527, w: 490, h: 220, side: "bottom" },
    mobile: { x: 130, y: 279, w: 212, h: 217 },
  },
  {
    year: "2018",
    text: "YES expands to reach ventures in Lagos, Johannesburg, and Nairobi. HYBR opens office in Cape Town.",
    icon: "arrows",
    desktop: { x: 732, y: 143, w: 490, h: 192, side: "top" },
    mobile: { x: 130, y: 615, w: 212, h: 179 },
  },
  {
    year: "2019",
    text: "Implements the Merck-Make-IT-Africa Joint program to impact healthcare ventures across Africa.",
    icon: "health",
    desktop: { x: 1098, y: 527, w: 490, h: 192, side: "bottom" },
    mobile: { x: 130, y: 932, w: 212, h: 198 },
  },
  {
    year: "2019",
    text: "Implements the Entrepreneurs Plastics Innovation Challenge (EPIC) powered by Coca-Cola.",
    icon: "bottle",
    desktop: { x: 1464, y: 143, w: 490, h: 192, side: "top" },
    mobile: { x: 130, y: 1249, w: 212, h: 198 },
  },
  {
    year: "2020",
    text: "Supports ventures globally, through the Growing through Uncertainty program during COVID-19.",
    icon: "handshake",
    desktop: { x: 1830, y: 527, w: 490, h: 192, side: "bottom" },
    mobile: { x: 130, y: 1547, w: 212, h: 179 },
  },
  {
    year: "2020",
    text: "Ecosystem study - Innovating in the New Normal post COVID-19. Opens operations in London, UK.",
    icon: "pin",
    desktop: { x: 2196, y: 143, w: 490, h: 192, side: "top" },
    mobile: { x: 130, y: 1864, w: 212, h: 198 },
  },
  {
    year: "2021",
    text: "Partnership with ABSA for continent-wide innovation intelligence.",
    icon: "robot",
    desktop: { x: 2562, y: 527, w: 490, h: 164, side: "bottom" },
    mobile: { x: 130, y: 2162, w: 212, h: 160 },
  },
  {
    year: "2022",
    text: "Strategic reorganization, new purpose, and missions.",
    icon: "compass",
    desktop: { x: 2928, y: 171, w: 490, h: 164, side: "top" },
    mobile: { x: 130, y: 2441, w: 212, h: 160 },
  },
  {
    year: "2024",
    text: "Transition into a full-service innovation agency.",
    icon: "sparkle",
    desktop: { x: 3294, y: 527, w: 490, h: 164, side: "bottom" },
    mobile: { x: 130, y: 2701, w: 212, h: 141 },
  },
];

type TimelineIconKind = (typeof timeline)[number]["icon"];

const timelineIconAssets: Record<TimelineIconKind, string> = {
  hybr: "/who/timeline/hybr-mark.svg",
  shoe: "/who/timeline/sneaker-move.svg",
  arrows: "/who/timeline/arrows-out-cardinal.svg",
  health: "/who/timeline/asclepius.svg",
  bottle: "/who/timeline/beer-bottle.svg",
  handshake: "/who/timeline/handshake.svg",
  pin: "/who/timeline/map-pin-area.svg",
  robot: "/who/timeline/robot.svg",
  compass: "/who/timeline/compass.svg",
  sparkle: "/who/timeline/sparkle.svg",
};

function TimelineIcon({ kind }: { kind: TimelineIconKind }) {
  return (
    <img alt="" aria-hidden="true" loading="lazy" src={timelineIconAssets[kind]} />
  );
}

function timelineStyle(item: (typeof timeline)[number]) {
  return {
    "--history-x": `${item.desktop.x}px`,
    "--history-y": `${item.desktop.y}px`,
    "--history-w": `${item.desktop.w}px`,
    "--history-h": `${item.desktop.h}px`,
    "--history-mobile-x": `${item.mobile.x}px`,
    "--history-mobile-y": `${item.mobile.y}px`,
    "--history-mobile-w": `${item.mobile.w}px`,
    "--history-mobile-h": `${item.mobile.h}px`,
  } as CSSProperties;
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="who-section-label">{children}</p>;
}

function FigmaButton({
  children,
  className = "",
  href,
  light = false,
}: {
  children: ReactNode;
  className?: string;
  href: string;
  light?: boolean;
}) {
  const toneClass = light ? "who-button who-button--light" : "who-button";

  return (
    <Link className={`${toneClass} ${className}`.trim()} href={href}>
      {children}
    </Link>
  );
}

function ImageSurface({
  className = "",
  src = primaryImage,
  overlay,
  children,
}: {
  className?: string;
  src?: string;
  overlay?: string;
  children?: ReactNode;
}) {
  const image = overlay ? `${overlay}, url(${src})` : `url(${src})`;

  return (
    <div
      className={`who-image-surface ${className}`}
      style={{
        "--who-image": image,
        backgroundImage: image,
      } as CSSProperties}
    >
      {children}
    </div>
  );
}

function EarlyDaysCard() {
  return (
    <section className="who-early" id="early-days" aria-labelledby="who-early-title">
      <div className="who-early-image">
        <span
          aria-hidden="true"
          className="who-early-media"
          style={{ backgroundImage: `url(${primaryImage})` }}
        />
        <div>
          <h2 id="who-early-title">Early Days</h2>
          <p>Big ambitions. Small beginnings. Unwavering belief.</p>
        </div>
      </div>
    </section>
  );
}

function AboutImageCard() {
  return (
    <div className="who-about-image" aria-hidden="true">
      <span
        className="who-about-media"
        style={{ backgroundImage: `url(${primaryImage})` }}
      />
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

function Timeline() {
  return (
    <div className="who-timeline-shell">
      <div className="who-timeline-track">
        <div className="who-timeline-rail" aria-hidden="true" />
        <span className="who-timeline-range-year who-timeline-range-start" aria-hidden="true">
          2016
        </span>
        <span className="who-timeline-range-year who-timeline-range-end" aria-hidden="true">
          2025
        </span>
        {timeline.map((item, index) => (
          <article
            className={`who-timeline-card ${index === 0 ? "is-featured" : ""} is-${item.desktop.side}`}
            key={`${item.year}-${index}`}
            style={timelineStyle(item)}
          >
            <span className="who-timeline-pin" aria-hidden="true">
              <TimelineIcon kind={item.icon} />
            </span>
            <p>{item.text}</p>
            <strong>{item.year}</strong>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function WhoWeArePage() {
  return (
    <main className="who-page">
      <div className="who-frame">
        <Header active="who" />

        <section className="who-hero" aria-labelledby="who-title">
          <h1 id="who-title">Who We Are</h1>
          <p>A Tribe of Dynamic Doers &mdash; Building What&apos;s Next.</p>
        </section>

        <ContentDrop />

        <section className="who-history" id="history" aria-labelledby="who-history-title">
          <div className="who-history-head">
            <SectionLabel>Our History</SectionLabel>
          </div>
          <h2 id="who-history-title" className="sr-only">
            Our History
          </h2>
          <Timeline />
        </section>

        <EarlyDaysCard />

        <span className="who-about-orbit" aria-hidden="true" />

        <section className="who-about-copy" id="about-us" aria-labelledby="who-about-title">
          <SectionLabel>About Us</SectionLabel>
          <h2 id="who-about-title">
            We help innovators turn untapped potential into world-shaping solutions.
          </h2>
          <div className="who-copy-stack">
            <p>
              At HYBR, we don&rsquo;t just innovate&mdash;we reimagine the very blueprint of
              how innovation is discovered, nurtured, and scaled in underserved markets.
            </p>
            <p>
              We transform ideas, products, services, and organizations into innovation
              leaders. We are a purpose-driven innovation agency&mdash;unearthing
              breakthrough ideas, empowering brilliant innovation leaders, and igniting
              solutions with global impact. From Lagos to London, Cape Town to
              California, HYBR is where big ideas meet bold execution.
            </p>
          </div>
          <FigmaButton href="/who-we-are/about-us">Learn More</FigmaButton>
        </section>

        <AboutImageCard />

        <section className="who-team" id="our-team" aria-labelledby="who-team-title">
          <div className="who-team-head">
            <div>
              <SectionLabel>Our Team</SectionLabel>
              <h2 id="who-team-title">
                The people powering <span>HYBR</span>: innovators obsessed with building
                what&apos;s next.
              </h2>
            </div>
            <p>
              Our team brings together decades of experience across innovation strategy,
              venture building, AI, and enterprise transformation. From designing
              market-shifting business models to launching scalable technologies in
              frontier markets, we combine analytic rigor, creative problem-solving, and
              deep sector expertise to help organizations unlock what&apos;s possible.
            </p>
          </div>
          <ImageSurface className="who-team-image" />
          <FigmaButton className="who-team-button" href="/who-we-are/our-team" light>
            Learn More
          </FigmaButton>
        </section>

        <ImageSurface className="who-careers-image" src={primaryImage} />

        <section className="who-careers-copy" id="careers" aria-labelledby="who-careers-title">
          <SectionLabel>Careers</SectionLabel>
          <h2 id="who-careers-title">
            Join us and build the future&mdash;turning tough challenges into breakthrough
            solutions.
          </h2>
          <p>
            If you&rsquo;re driven by curiosity, obsessed with solving complex problems,
            and excited to shape the future of global underserved markets, you&rsquo;ll
            feel right at home here. Explore careers at HYBR and build what&rsquo;s next
            with us.
          </p>
          <FigmaButton href="/who-we-are/careers">Learn More</FigmaButton>
        </section>
      </div>

      <Footer />
    </main>
  );
}
