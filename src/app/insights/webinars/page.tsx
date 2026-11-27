import Link from "next/link";
import { Footer, Header } from "../../_components/marketing";
import { businessModelsWebinar, fromGuessingToKnowingArticle, innovationFellowshipNews, publicPowerWebinar } from "@/content/insights";
import { figmaAssets } from "@/content/site";
import { Glyph, PlayMark, PlayPolygon } from "./_parts/icons";
import "./figma.css";

/* Figma: Desktop 1:3727 (1440), Tablet Horizontal 1:8575 (1280), Tablet Vertical 1:10102 (800),
   Mobile 1:6235 (390). Layout and type live in ./figma.css, scoped under .wl-page. */

type WebinarCard = {
  href: string;
  id: string;
  image: string;
  speakers: string;
  date: string;
  duration: string;
  title: string;
};

const webinars: WebinarCard[] = [
  {
    href: publicPowerWebinar.href,
    id: "public-power-private-ingenuity",
    image: figmaAssets.figmaBusinessPartners,
    speakers: publicPowerWebinar.speakers,
    date: publicPowerWebinar.date,
    duration: publicPowerWebinar.duration,
    title: publicPowerWebinar.title,
  },
  {
    href: businessModelsWebinar.href,
    id: "business-models-that-work",
    image: figmaAssets.figmaBuilding,
    speakers: businessModelsWebinar.speakers,
    date: businessModelsWebinar.date,
    duration: businessModelsWebinar.duration,
    title: businessModelsWebinar.title,
  },
];

function ListingControls() {
  return (
    <div className="wl-controls" aria-label="Masterclass filters">
      <button className="wl-control wl-control--search" type="button">
        <Glyph className="wl-control-icon" name="search" />
        <span>Search</span>
      </button>
      <button className="wl-control wl-control--select" type="button">
        <span>Sort by</span>
        <Glyph className="wl-control-icon" name="keyboard_arrow_down" />
      </button>
      <button className="wl-control wl-control--select" type="button">
        <span>Topic</span>
        <Glyph className="wl-control-icon" name="keyboard_arrow_down" />
      </button>
      <button className="wl-control wl-control--select" type="button">
        <span>Duration</span>
        <Glyph className="wl-control-icon" name="keyboard_arrow_down" />
      </button>
      <button className="wl-control wl-control--filters" type="button">
        <span className="wl-filters-label">Filters</span>
        <svg aria-hidden="true" className="wl-filters-icon" fill="none" viewBox="0 0 24 24">
          <path d="M3 7H21M3 17H21" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
          <circle cx="9" cy="7" fill="#ffffff" r="2.25" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="15" cy="17" fill="#ffffff" r="2.25" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
    </div>
  );
}

function ContentDrop() {
  return (
    <nav className="webinars-content-drop" aria-label="Masterclasses page sections">
      <img alt="" src={figmaAssets.figmaBusinessPartners} />
      <span className="webinars-content-drop-label">CONTENT</span>
      <div>
        <a href="#spotlight">Spotlight</a>
        <a href="#recent">Newest Masterclasses</a>
        <a href="#more">More Insights</a>
        <Link href="/what-we-do">What We Do</Link>
      </div>
    </nav>
  );
}

function SpotlightCard() {
  return (
    <Link className="wl-spotlight" href={publicPowerWebinar.href}>
      <img alt="" className="wl-cover" src={figmaAssets.figmaBuilding} />
      <span className="wl-shade" />
      <span className="wl-kind">MASTERCLASS</span>
      <span className="wl-time">{publicPowerWebinar.duration}</span>
      <span className="wl-title">{publicPowerWebinar.title}</span>
      <span className="wl-meta">{publicPowerWebinar.speakers}</span>
      <span className="wl-meta">{publicPowerWebinar.date}</span>
      <PlayPolygon className="wl-play wl-play--large" />
      <PlayMark className="wl-play wl-play--small" />
    </Link>
  );
}

function WebinarListingCard({ card }: { card: WebinarCard }) {
  return (
    <Link className="wl-card" href={card.href}>
      <span className="wl-card-media">
        <img alt="" className="wl-cover" src={card.image} />
        <span className="wl-shade" />
        <span className="wl-kind">MASTERCLASS</span>
        <PlayMark className="wl-play wl-play--small" />
        <span className="wl-time">{card.duration}</span>
      </span>
      <span className="wl-card-copy">
        <span className="wl-title">{card.title}</span>
        <span className="wl-meta">{card.speakers}</span>
        <span className="wl-meta">{card.date}</span>
      </span>
    </Link>
  );
}

function StoryCard({
  className,
  href,
  kind,
  title,
  text,
}: {
  className: string;
  href: string;
  kind: "ARTICLE" | "NEWS";
  title: string;
  text?: string;
}) {
  return (
    <Link className={`wl-story ${className}`} href={href}>
      <img alt="" className="wl-cover" src={figmaAssets.figmaBuilding} />
      <span className="wl-shade" />
      <span className="wl-story-copy">
        <span className="wl-story-kind">{kind}</span>
        <span className="wl-story-title">{title}</span>
        {text ? <span className="wl-story-text">{text}</span> : null}
      </span>
      <span className="wl-read">Read More</span>
    </Link>
  );
}

export default function WebinarsPage() {
  return (
    <main className="webinars-listing-page wl-page">
      <Header active="insights" />

      <section className="webinars-listing-frame" aria-labelledby="webinars-title">
        <div className="figma-container webinars-listing-shell">
          <ContentDrop />

          <header className="wl-hero">
            <h1 id="webinars-title">Masterclasses</h1>
            <p>Learn how leaders are navigating today&rsquo;s toughest challenges.</p>
          </header>

          <ListingControls />

          <section className="wl-spotlight-block" id="spotlight" aria-labelledby="wl-spotlight-title">
            <p className="wl-label" id="wl-spotlight-title">
              SPOTLIGHT
            </p>
            <SpotlightCard />
          </section>

          <section className="wl-recent" id="recent" aria-labelledby="recent-webinars-title">
            <p className="wl-label" id="recent-webinars-title">
              RECENT MASTERCLASSES
            </p>
            <div className="wl-grid">
              {webinars.map((card) => (
                <WebinarListingCard card={card} key={card.id} />
              ))}
            </div>
            <Link className="wl-outline wl-view-all" href="/insights/webinars">
              View All Masterclasses
            </Link>
          </section>

          <section className="wl-more" id="more" aria-labelledby="wl-more-title">
            <div className="wl-more-lead">
              <p className="wl-label">INSIGHTS</p>
              <h2 id="wl-more-title">Understand what&rsquo;s changing, and what to do about it.</h2>
              <Link className="wl-outline wl-outline--green wl-more-button" href="/insights">
                Our Insights
              </Link>
            </div>
            <StoryCard
              className="wl-story--article"
              href="/insights/articles/from-guessing-to-knowing"
              kind="ARTICLE"
              title={fromGuessingToKnowingArticle.cardTitle}
            />
            <StoryCard
              className="wl-story--news"
              href={innovationFellowshipNews.href}
              kind="NEWS"
              text={innovationFellowshipNews.cardSummary}
              title={innovationFellowshipNews.title}
            />
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
