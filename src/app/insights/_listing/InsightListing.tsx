import Link from "next/link";
import { Footer, Header, InsightCard, ListingControls, SearchBar } from "../../_components/marketing";
import "./listing.css";

/**
 * Shared layout of the Articles and News listing pages, built from the Figma frames
 * Articles 1:4009 / 1:8684 / 1:10211 / 1:6364 and News 1:4293 / 1:8775 / 1:10302 / 1:6465
 * (1440 / 1280 / 800 / 390). The two pages differ only in content and a few spacings (listing.css).
 */

type CardContent = {
  kind: string;
  title: string;
  body?: string;
  href: string;
};

type WebinarContent = {
  title: string;
  speakers: string;
  date: string;
  duration: string;
  href: string;
};

export type InsightListingProps = {
  variant: "articles" | "news";
  title: string;
  subtitle: string;
  drop: { image: string; label: string; sections: { label: string; href: string }[] };
  spotlight: { title: string; summary: string; href: string; image: string };
  grid: { id: string; label: string; cards: [CardContent, CardContent, CardContent, CardContent] };
  viewAll: { label: string; href: string };
  more: { intro?: string; webinar: WebinarContent; webinarImage: string; card: CardContent; cardImage: string };
  what: { image: string };
  cardImage: string;
};

function PlayTriangle() {
  return (
    <svg aria-hidden="true" className="il-webinar-play" focusable="false" viewBox="0 0 24 28">
      <path d="M24 14 0 28V0l24 14Z" fill="currentColor" />
    </svg>
  );
}

function WebinarCard({ webinar, image }: { webinar: WebinarContent; image: string }) {
  return (
    <Link className="il-webinar" href={webinar.href}>
      <img alt="" className="il-webinar-image" src={image} />
      <span className="il-webinar-top">
        <span className="il-webinar-kind">MASTERCLASS</span>
        <span className="il-webinar-duration il-webinar-duration--top">{webinar.duration}</span>
        <PlayTriangle />
      </span>
      <span className="il-webinar-bottom">
        <span className="il-webinar-copy">
          <span className="il-webinar-kind il-webinar-kind--bottom">MASTERCLASS</span>
          <span className="il-webinar-title">{webinar.title}</span>
          <span className="il-webinar-meta">{webinar.speakers}</span>
          <span className="il-webinar-meta">{webinar.date}</span>
        </span>
        <span className="il-webinar-duration">{webinar.duration}</span>
      </span>
    </Link>
  );
}

export function InsightListing({
  variant,
  title,
  subtitle,
  drop,
  spotlight,
  grid,
  viewAll,
  more,
  what,
  cardImage,
}: InsightListingProps) {
  const [a, b, c, d] = grid.cards;

  return (
    <main className={`${variant}-page il il--${variant}`}>
      <Header active="insights" />

      <nav aria-label={`${title} page sections`} className={`il-drop ${variant}-content-drop`}>
        <img alt="" src={drop.image} />
        <span className="il-drop-label">{drop.label}</span>
        <div>
          {drop.sections.map((section) => (
            <a href={section.href} key={section.href}>
              {section.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="il-container">
        <header className="il-hero">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </header>

        <SearchBar className="il-hero-search" />
        <ListingControls className="il-controls-top" />

        <section aria-labelledby={`${variant}-spotlight-label`} className="il-spotlight-section" id="spotlight">
          <p className="il-label" id={`${variant}-spotlight-label`}>
            SPOTLIGHT
          </p>
          <Link className="il-spotlight" href={spotlight.href}>
            <span className="il-spotlight-image">
              <img alt="" src={spotlight.image} />
            </span>
            <span className="il-spotlight-copy">
              <span className="il-spotlight-title">{spotlight.title}</span>
              <span className="il-spotlight-summary">{spotlight.summary}</span>
            </span>
            <span className="il-spotlight-button">Read More</span>
          </Link>
        </section>

        <ListingControls className="il-controls" />

        <section aria-labelledby={`${grid.id}-label`} className="il-recent" id={grid.id}>
          <p className="il-label" id={`${grid.id}-label`}>
            {grid.label}
          </p>
          <div className="il-grid">
            <InsightCard {...a} className="il-card il-card--a" imageSrc={cardImage} size="small" tone="mono" />
            <InsightCard {...b} className="il-card il-card--b" imageSrc={cardImage} size="small" tone="mono" />
            <InsightCard {...c} className="il-card il-card--c" imageSrc={cardImage} tone="mono" />
            <InsightCard {...d} className="il-card il-card--d" imageSrc={cardImage} tone="mono" />
          </div>
          <Link className="il-pill il-view-all" href={viewAll.href}>
            {viewAll.label}
          </Link>
        </section>

        <section aria-label="More insights" className="il-more" id="more">
          <div className="il-more-intro">
            <p className="il-label">INSIGHTS</p>
            <h2>Understand what’s changing, and what to do about it.</h2>
            {more.intro ? <p className="il-more-text">{more.intro}</p> : null}
            <Link className="il-pill il-more-action" href="/insights">
              Our Insights
            </Link>
          </div>
          <WebinarCard image={more.webinarImage} webinar={more.webinar} />
          <InsightCard
            {...more.card}
            buttonPlacement="start"
            className="il-more-card"
            imageSrc={more.cardImage}
          />
          <Link className="il-pill il-more-bottom il-more-bottom--tablet" href="/insights">
            Our Insights
          </Link>
          <Link className="il-pill il-more-bottom il-more-bottom--mobile" href="/insights/webinars">
            View Masterclasses
          </Link>
        </section>

        <section aria-labelledby={`${variant}-what-title`} className="il-what" id="what-we-do">
          <div className="il-what-image">
            <img alt="" src={what.image} />
          </div>
          <div className="il-what-copy">
            <p className="il-label">WHAT WE DO</p>
            <h2 id={`${variant}-what-title`}>
              Discover the right opportunities, develop the right solutions, and deploy them with confidence.
            </h2>
            <p className="il-what-text">Helping organisations replace guesswork with evidence, clarity, and smarter strategy.</p>
            <Link className="il-pill il-what-action" href="/what-we-do">
              Let’s Help
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
