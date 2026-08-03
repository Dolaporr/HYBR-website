import Link from "next/link";
import type { ReactNode } from "react";
import { Footer, Header } from "../../_components/marketing";
import { figmaAssets } from "@/content/site";

const aboutAssets = {
  founder: "/about/founder.jpg",
  history: figmaAssets.figmaBusinessPartners,
  earlyDays: "/about/early-days-optimized.jpg",
  valuesIntegrity: figmaAssets.aboutValuePurposefulIntegrity,
  valuesCreativity: figmaAssets.aboutValueAppliedCreativity,
  valuesEntrepreneurial: figmaAssets.aboutValueActivelyEntrepreneurial,
  valuesTogether: figmaAssets.aboutValueWorkWin,
  missionCircular: "/about/mission-circular.svg",
  missionInclusion: "/about/mission-inclusion.svg",
  missionSustainable: "/about/mission-sustainable.svg",
  iconHandshake: "/about/icon-handshake.svg",
  iconMagic: "/about/icon-magic.svg",
  iconBag: "/about/icon-bag.svg",
  iconTrophy: "/about/icon-trophy.svg",
} as const;

const contentLinks = [
  { label: "From Our Founder", href: "#founder" },
  { label: "Our History", href: "#history" },
  { label: "Our Purpose", href: "#purpose" },
  { label: "Our Missions", href: "#missions" },
  { label: "Our Values", href: "#values" },
  { label: "What We Do", href: "#what-we-do" },
] as const;

const missions = [
  {
    title: "Circular Economy",
    icon: aboutAssets.missionCircular,
    href: "/what-we-do/services",
  },
  {
    title: "Inclusion",
    icon: aboutAssets.missionInclusion,
    href: "/what-we-do/our-impact",
  },
  {
    title: "Sustainable Living",
    icon: aboutAssets.missionSustainable,
    href: "/what-we-do/our-work",
  },
] as const;

const values = [
  {
    title: "Purposeful Integrity",
    body: "We do the right work the right way—treating our people, clients, and partners with respect, honesty, and purpose.",
    image: aboutAssets.valuesIntegrity,
    icon: aboutAssets.iconHandshake,
  },
  {
    title: "Applied Creativity",
    body: "We solve problems by stretching beyond the obvious—experimenting, playing, and staying curious. We’re comfortable in uncertainty and open to being challenged as we search for new possibilities.",
    image: aboutAssets.valuesCreativity,
    icon: aboutAssets.iconMagic,
  },
  {
    title: "Actively Entrepreneurial",
    body: "We think and act like entrepreneurs—doing more with less, improving everything we touch. We build faster and smarter by co-designing with our partners.",
    image: aboutAssets.valuesEntrepreneurial,
    icon: aboutAssets.iconBag,
  },
  {
    title: "Work and Win Together",
    body: "Real change happens together. We partner, listen, and co-create with people who share our mission. Collaboration fuels us; breakthroughs happen together.",
    image: aboutAssets.valuesTogether,
    icon: aboutAssets.iconTrophy,
  },
] as const;

function AboutButton({
  children,
  href,
  tone = "green",
}: {
  children: ReactNode;
  href: string;
  tone?: "green" | "white";
}) {
  return (
    <Link className={`about-button about-button--${tone}`} href={href}>
      {children}
    </Link>
  );
}

export default function AboutUsPage() {
  return (
    <main className="about-page about-frame bg-white text-black">
      <Header active="who" />

      <div aria-hidden="true" className="about-floating-frames">
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>

      <section className="about-hero" id="top">
        <div className="about-hero-copy">
          <h1>About Us</h1>
          <p>Builders shaping scalable, sustainable futures.</p>
        </div>

        <aside className="about-content-drop" aria-label="About page contents">
          <img alt="" src={figmaAssets.aboutContentBar} />
          <p>CONTENT</p>
          <nav>
            {contentLinks.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </aside>
      </section>

      <section className="about-founder-section" id="founder">
        <div className="about-founder-card">
          <img alt="" src={aboutAssets.founder} />
          <div className="about-play-button" aria-hidden="true">
            <img alt="" src={figmaAssets.play} />
          </div>
          <div className="about-card-caption">
            <h2>A Word from Our Founder</h2>
            <p>Operators and visionaries building scalable solutions in sustainability, technology, and inclusive growth.</p>
          </div>
        </div>
      </section>

      <section className="about-history-section" id="history">
        <div className="about-history-card">
          <p className="about-label about-label--blue">OUR HISTORY</p>
          <h2>Born in Africa, built for the world—HYBR began with a simple belief: innovation should leave no market behind.</h2>
          <div className="about-history-body">
            <p>HYBR was created in response to a simple truth: brilliance is everywhere, but opportunity is not. From day one, we set out to close that gap—building tools, communities, and systems that unlock innovation in places the world too often overlooks.</p>
            <p>What began as a mission to elevate entrepreneurs and teams across Africa has evolved into a global movement, shaping how organizations discover, design, and scale solutions that matter.</p>
            <p>Today, HYBR works across continents, proving that when innovation includes every market, everyone wins.</p>
          </div>
          <div className="about-history-media">
            <img alt="" src={aboutAssets.history} />
          </div>
          <AboutButton href="/who-we-are" tone="white">Learn More</AboutButton>
        </div>
      </section>

      <section className="about-early-section">
        <div className="about-early-card">
          <img alt="" src={aboutAssets.earlyDays} />
          <div className="about-card-caption">
            <h2>Early Days</h2>
            <p>A captivating statement about what this section represents.</p>
          </div>
        </div>
      </section>

      <section className="about-purpose-section" id="purpose">
        <span aria-hidden="true" className="about-purpose-pill about-purpose-pill--top" />
        <span aria-hidden="true" className="about-purpose-pill about-purpose-pill--bottom" />
        <div className="about-purpose-copy">
          <p className="about-label">OUR PURPOSE</p>
          <h2>We tackle complex challenges to create prosperity for all.</h2>
          <div>
            <p>Our work begins where the challenges are the hardest—messy markets, underserved communities, and fast-changing industries. By pairing deep local insight with global expertise, we design solutions that create real value for people, businesses, and entire ecosystems.</p>
            <p>We’re committed to building a future where prosperity isn’t concentrated, but accessible; where innovation doesn’t divide, but connects; and where solving complex problems becomes a catalyst for shared progress.</p>
          </div>
        </div>
      </section>

      <section className="about-missions-section" id="missions">
        <div className="about-section-heading about-section-heading--left">
          <p className="about-label">OUR MISSIONS</p>
          <h2>To fulfil our purpose, we are pursuing three innovation missions.</h2>
        </div>
        <div className="about-mission-grid">
          {missions.map((mission) => (
            <Link className="about-mission-card" href={mission.href} key={mission.title}>
              <img alt="" src={mission.icon} />
              <span>
                <strong>{mission.title}</strong>
                <small>Learn More</small>
              </span>
            </Link>
          ))}
        </div>
        <AboutButton href="/contact">Work With Us</AboutButton>
      </section>

      <section className="about-values-section" id="values">
        <div className="about-section-heading about-section-heading--center">
          <p className="about-label">OUR VALUES</p>
          <h2>The principles that guide how we innovate, lead, and build.</h2>
        </div>
        <div className="about-values-stack">
          {values.map((value) => (
            <article className="about-value-card" key={value.title}>
              <img alt="" className="about-value-bg" src={value.image} />
              <div className="about-value-overlay" />
              <div className="about-value-content">
                <div className="about-value-title">
                  <img alt="" src={value.icon} />
                  <h3>{value.title}</h3>
                </div>
                <p>{value.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-cta-section" id="what-we-do">
        <div className="about-cta-copy">
          <h2>
            We help organizations <span>discover, design, and scale</span> <span>breakthrough innovations</span> that drive growth and impact.
          </h2>
          <p>Our work starts by understanding your toughest challenges, then unlocking the insights and strategies to move you forward. Explore our services and see how HYBR helps teams think bigger—and execute with confidence.</p>
        </div>
        <div className="about-cta-actions">
          <AboutButton href="/what-we-do">What We Do</AboutButton>
          <AboutButton href="/what-we-do/our-work">Explore Our Work</AboutButton>
        </div>
      </section>

      <Footer />
    </main>
  );
}
