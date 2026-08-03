import Link from "next/link";
import { Footer, Header } from "../../_components/marketing";
import { fastestWayToWasteIdeaArticle, fromGuessingToKnowingArticle, innovationFellowshipNews, innovationSweetSpotArticle, publicPowerWebinar } from "@/content/insights";
import { figmaAssets } from "@/content/site";

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

function PlayIcon() {
  return (
    <span className="articles-play" aria-hidden="true">
      <svg viewBox="0 0 40 40">
        <path d="M12 6v28l22-14L12 6Z" fill="currentColor" />
      </svg>
    </span>
  );
}

function FilterControls() {
  return (
    <div className="articles-controls" aria-label="Article filters">
      <button className="articles-control articles-control--search" type="button">
        <SearchIcon />
        <span>Search</span>
      </button>
      <button className="articles-control articles-control--desktop" type="button">
        <span>Sort by</span>
        <ChevronDownIcon />
      </button>
      <button className="articles-control articles-control--desktop" type="button">
        <span>Topic</span>
        <ChevronDownIcon />
      </button>
      <button className="articles-control articles-control--desktop" type="button">
        <span>Duration</span>
        <ChevronDownIcon />
      </button>
      <button className="articles-control articles-control--filters" type="button">
        <span>Filters</span>
        <FilterIcon />
      </button>
    </div>
  );
}

function ContentDrop() {
  return (
    <nav className="articles-content-drop" aria-label="Articles page sections">
      <img alt="" src={figmaAssets.articlesContentTab} />
      <span className="articles-content-drop-label">CONTENT</span>
      <div>
        <a href="#spotlight">Spotlight</a>
        <a href="#recent">Recent Articles</a>
        <a href="#more">More Insights</a>
        <a href="#what-we-do">What We Do</a>
      </div>
    </nav>
  );
}

function ArticleCard({
  article,
  className = "",
  href,
}: {
  article: typeof innovationSweetSpotArticle;
  className?: string;
  href: string;
}) {
  return (
    <Link className={`articles-card figma-motion-card ${className}`} href={href}>
      <img alt="" src={figmaAssets.figmaBuilding} />
      <span className="articles-card-kind">ARTICLE</span>
      <span className="articles-card-title">{article.cardTitle}</span>
      <span className="articles-read-button">Read More</span>
    </Link>
  );
}

function SpotlightCard({ article, href }: { article: typeof innovationSweetSpotArticle; href: string }) {
  return (
    <Link className="articles-spotlight figma-motion-card" href={href} id="spotlight">
      <span className="articles-spotlight-image">
        <img alt="" src={figmaAssets.figmaBuilding} />
      </span>
      <span className="articles-spotlight-copy">
        <span>{article.title}</span>
        <span>{article.summary}</span>
      </span>
      <span className="articles-spotlight-button">Read More</span>
    </Link>
  );
}

function WebinarCard() {
  return (
    <Link className="articles-webinar-card figma-motion-card" href={publicPowerWebinar.href}>
      <img alt="" src={figmaAssets.figmaBusinessPartners} />
      <span className="articles-webinar-kind">MASTERCLASS</span>
      <PlayIcon />
      <span className="articles-webinar-duration">{publicPowerWebinar.duration}</span>
      <span className="articles-webinar-copy">
        <span>{publicPowerWebinar.title}</span>
        <span>{publicPowerWebinar.speakers}</span>
        <span>{publicPowerWebinar.date}</span>
      </span>
    </Link>
  );
}

function NewsCard() {
  return (
    <Link className="articles-news-card figma-motion-card" href={innovationFellowshipNews.href}>
      <img alt="" src={figmaAssets.figmaBuilding} />
      <span className="articles-news-button">Read More</span>
      <span className="articles-news-copy">
        <span>NEWS</span>
        <span>{innovationFellowshipNews.title}</span>
        <span>{innovationFellowshipNews.cardSummary}</span>
      </span>
    </Link>
  );
}

export default function ArticlesPage() {
  return (
    <main className="articles-page">
      <Header active="insights" />

      <section className="articles-frame" aria-labelledby="articles-title">
        <div className="figma-container articles-shell">
          <ContentDrop />

          <header className="articles-hero">
            <h1 id="articles-title">Articles</h1>
            <p>Learn what works before you decide what&apos;s next.</p>
          </header>

          <button className="articles-hero-search" type="button">
            <SearchIcon />
            <span>Search</span>
          </button>

          <p className="articles-section-label articles-section-label--spotlight">SPOTLIGHT</p>
          <SpotlightCard article={innovationSweetSpotArticle} href="/insights/articles/specific-article" />

          <FilterControls />

          <section className="articles-recent" id="recent" aria-labelledby="recent-articles-title">
            <p className="articles-section-label" id="recent-articles-title">
              RECENT ARTICLES
            </p>
            <div className="articles-grid">
              <ArticleCard article={fromGuessingToKnowingArticle} className="articles-card--a" href="/insights/articles/from-guessing-to-knowing" />
              <ArticleCard article={innovationSweetSpotArticle} className="articles-card--b" href="/insights/articles/specific-article" />
              <ArticleCard article={fastestWayToWasteIdeaArticle} className="articles-card--c" href="/insights/articles/fastest-way-to-waste-a-good-idea" />
            </div>
            <div className="articles-view-all">
              <Link className="articles-pill-button" href="/insights/articles">
                View All Articles
              </Link>
            </div>
          </section>

          <section className="articles-more" id="more" aria-label="More insights">
            <div className="articles-more-intro">
              <p>INSIGHTS</p>
              <h2>Understand what&apos;s changing, and what to do about it.</h2>
              <Link className="articles-pill-button articles-more-action" href="/insights">
                Our Insights
              </Link>
            </div>
            <WebinarCard />
            <NewsCard />
            <Link className="articles-pill-button articles-more-mobile-action" href="/insights/webinars">
              View Masterclasses
            </Link>
          </section>

          <section className="articles-what" id="what-we-do" aria-label="What we do">
            <div className="articles-what-image">
              <img alt="" src={figmaAssets.articlesWhatWeDo} />
            </div>
            <div className="articles-what-copy">
              <p>WHAT WE DO</p>
              <h2>Discover the right opportunities, develop the right solutions, and deploy them with confidence.</h2>
              <span>Helping organisations replace guesswork with evidence, clarity, and smarter strategy.</span>
              <Link className="articles-pill-button articles-help-button" href="/what-we-do">
                Let&apos;s Help
              </Link>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
