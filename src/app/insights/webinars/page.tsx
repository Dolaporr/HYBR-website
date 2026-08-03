import Link from "next/link";
import { Footer, Header } from "../../_components/marketing";
import { businessModelsWebinar, fromGuessingToKnowingArticle, innovationFellowshipNews, publicPowerWebinar } from "@/content/insights";
import { figmaAssets } from "@/content/site";

type WebinarCard = {
  href: string;
  id: string;
  image: string;
  speakers: string;
  date: string;
  duration: string;
  title: string;
};

type InsightCard = {
  href: string;
  image: string;
  kind: "ARTICLE" | "NEWS";
  text?: string;
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

const moreInsights: InsightCard[] = [
  {
    href: innovationFellowshipNews.href,
    image: figmaAssets.figmaBuilding,
    kind: "NEWS",
    text: innovationFellowshipNews.cardSummary,
    title: innovationFellowshipNews.title,
  },
  {
    href: "/insights/articles/from-guessing-to-knowing",
    image: figmaAssets.figmaBuilding,
    kind: "ARTICLE",
    title: fromGuessingToKnowingArticle.cardTitle,
  },
];

function SearchIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40">
      <path
        d="m28.7 27.1-6.1-6.1a8.5 8.5 0 1 0-1.6 1.6l6.1 6.1 1.6-1.6Zm-18.1-11a5.9 5.9 0 1 1 11.8 0 5.9 5.9 0 0 1-11.8 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40">
      <path d="m12 16 8 8 8-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40">
      <path d="M7 11h26M12 20h16M17 29h6" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.6" />
    </svg>
  );
}

function PlayIcon({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "webinars-play webinars-play--compact" : "webinars-play"} aria-hidden="true">
      <svg viewBox="0 0 104 104">
        <path d="M28 13v78l58-39L28 13Z" fill="currentColor" />
      </svg>
    </span>
  );
}

function ListingControls() {
  return (
    <div className="webinars-controls" aria-label="Masterclass filters">
      <button className="webinars-control webinars-control--search" type="button">
        <SearchIcon />
        <span>Search</span>
      </button>
      <button className="webinars-control webinars-control--filter webinars-control--desktop" type="button">
        <span>Sort by</span>
        <ChevronDownIcon />
      </button>
      <button className="webinars-control webinars-control--filter webinars-control--desktop" type="button">
        <span>Topic</span>
        <ChevronDownIcon />
      </button>
      <button className="webinars-control webinars-control--filter webinars-control--desktop" type="button">
        <span>Duration</span>
        <ChevronDownIcon />
      </button>
      <button className="webinars-control webinars-control--filters" type="button">
        <span>Filters</span>
        <FilterIcon />
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
    <Link className="webinars-spotlight-card figma-motion-card" href={publicPowerWebinar.href} id="spotlight">
      <img alt="" src={figmaAssets.figmaBuilding} />
      <span className="webinars-card-kicker">MASTERCLASS</span>
      <PlayIcon />
      <span className="webinars-duration">{publicPowerWebinar.duration}</span>
      <span className="webinars-spotlight-copy">
        <span>{publicPowerWebinar.title}</span>
        <span>{publicPowerWebinar.speakers}</span>
        <span>{publicPowerWebinar.date}</span>
      </span>
    </Link>
  );
}

function WebinarListingCard({ card }: { card: WebinarCard }) {
  return (
    <Link className="webinars-card figma-motion-card" href={card.href} rel={card.href.startsWith("http") ? "noreferrer" : undefined} target={card.href.startsWith("http") ? "_blank" : undefined}>
      <span className="webinars-card-media">
        <img alt="" src={card.image} />
        <span className="webinars-card-kicker">MASTERCLASS</span>
        <PlayIcon compact />
        <span className="webinars-card-duration">{card.duration}</span>
      </span>
      <span className="webinars-card-copy">
        <span>{card.title}</span>
        <span>{card.speakers}</span>
        <span>{card.date}</span>
      </span>
    </Link>
  );
}

function MoreInsightCard({ card, tall = false }: { card: InsightCard; tall?: boolean }) {
  return (
    <Link className={tall ? "webinars-more-card webinars-more-card--tall figma-motion-card" : "webinars-more-card figma-motion-card"} href={card.href}>
      <img alt="" src={card.image} />
      <span className="webinars-more-kind">{card.kind}</span>
      <span className="webinars-more-copy">
        <span>{card.title}</span>
        {card.text ? <span>{card.text}</span> : null}
      </span>
      <span className="webinars-more-button">Read More</span>
    </Link>
  );
}

export default function WebinarsPage() {
  return (
    <main className="webinars-listing-page">
      <Header active="insights" />

      <section className="webinars-listing-frame" aria-labelledby="webinars-title">
        <div className="figma-container webinars-listing-shell">
          <ContentDrop />

          <header className="webinars-hero">
            <h1 id="webinars-title">Masterclasses</h1>
            <p>Learn how leaders are navigating today&apos;s toughest challenges.</p>
          </header>

          <p className="webinars-section-label webinars-section-label--spotlight">SPOTLIGHT</p>
          <SpotlightCard />

          <ListingControls />

          <section className="webinars-recent" id="recent" aria-labelledby="recent-webinars-title">
            <p className="webinars-section-label" id="recent-webinars-title">
              RECENT MASTERCLASSES
            </p>
            <div className="webinars-grid">
              {webinars.map((card) => (
                <WebinarListingCard card={card} key={card.id} />
              ))}
            </div>
            <div className="webinars-view-all">
              <Link className="webinars-pill-button" href="/insights/webinars">
                View All Masterclasses
              </Link>
            </div>
          </section>

          <section className="webinars-more" id="more" aria-label="More insights">
            <div className="webinars-more-intro">
              <p>INSIGHTS</p>
              <h2>Understand what&apos;s changing, and what to do about it.</h2>
            </div>
            <MoreInsightCard card={moreInsights[0]} tall />
            <MoreInsightCard card={moreInsights[1]} />
            <Link className="webinars-pill-button webinars-more-action" href="/insights">
              Our Insights
            </Link>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
