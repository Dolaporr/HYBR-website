import Link from "next/link";
import { Footer, Header } from "../../_components/marketing";
import { absaDiscoveryNews, innovationFellowshipNews, innovationSweetSpotArticle, publicPowerWebinar, spctaNewsFeature } from "@/content/insights";
import { figmaAssets } from "@/content/site";

const newsHref = "/insights/news/specific-news";

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
    <span className="news-play" aria-hidden="true">
      <svg viewBox="0 0 40 40">
        <path d="M12 6v28l22-14L12 6Z" fill="currentColor" />
      </svg>
    </span>
  );
}

function FilterControls() {
  return (
    <div className="news-controls" aria-label="News filters">
      <button className="news-control news-control--search" type="button">
        <SearchIcon />
        <span>Search</span>
      </button>
      <button className="news-control news-control--desktop" type="button">
        <span>Sort by</span>
        <ChevronDownIcon />
      </button>
      <button className="news-control news-control--desktop" type="button">
        <span>Topic</span>
        <ChevronDownIcon />
      </button>
      <button className="news-control news-control--desktop" type="button">
        <span>Duration</span>
        <ChevronDownIcon />
      </button>
      <button className="news-control news-control--filters" type="button">
        <span>Filters</span>
        <FilterIcon />
      </button>
    </div>
  );
}

function ContentDrop() {
  return (
    <nav className="news-content-drop" aria-label="News page sections">
      <img alt="" src={figmaAssets.newsContentTab} />
      <span className="news-content-drop-label">CONTENT</span>
      <div>
        <a href="#spotlight">Spotlight</a>
        <a href="#latest">Latest Updates</a>
        <a href="#more">More Insights</a>
        <a href="#what-we-do">What We Do</a>
      </div>
    </nav>
  );
}

function NewsCard({
  className = "",
  news,
}: {
  className?: string;
  news: typeof spctaNewsFeature | typeof innovationFellowshipNews | typeof absaDiscoveryNews;
}) {
  return (
    <Link className={`news-card figma-motion-card ${className}`} href={"href" in news ? news.href : newsHref}>
      <img alt="" src={figmaAssets.figmaBuilding} />
      <span className="news-card-copy">
        <span>{news.kind}</span>
        <span>{news.title}</span>
        <span>{news.compactSummary}</span>
      </span>
      <span className="news-read-button">Read More</span>
    </Link>
  );
}

function SpotlightCard() {
  return (
    <Link className="news-spotlight figma-motion-card" href={newsHref} id="spotlight">
      <span className="news-spotlight-copy">
        <span>{spctaNewsFeature.title}</span>
        <span>{spctaNewsFeature.cardSummary}</span>
      </span>
      <span className="news-spotlight-image">
        <img alt="" src={figmaAssets.figmaBuilding} />
      </span>
      <span className="news-spotlight-button">Read More</span>
    </Link>
  );
}

function WebinarCard() {
  return (
    <Link className="news-webinar-card figma-motion-card" href={publicPowerWebinar.href}>
      <img alt="" src={figmaAssets.figmaBusinessPartners} />
      <span className="news-webinar-kind">MASTERCLASS</span>
      <PlayIcon />
      <span className="news-webinar-duration">{publicPowerWebinar.duration}</span>
      <span className="news-webinar-copy">
        <span>{publicPowerWebinar.title}</span>
        <span>{publicPowerWebinar.speakers}</span>
        <span>{publicPowerWebinar.date}</span>
      </span>
    </Link>
  );
}

function ArticleCard() {
  return (
    <Link className="news-article-card figma-motion-card" href="/insights/articles/specific-article">
      <img alt="" src={figmaAssets.figmaBuilding} />
      <span className="news-article-button">Read More</span>
      <span className="news-article-copy">
        <span>ARTICLE</span>
        <span>{innovationSweetSpotArticle.cardTitle}</span>
      </span>
    </Link>
  );
}

export default function NewsPage() {
  return (
    <main className="news-page">
      <Header active="insights" />

      <section className="news-frame" aria-labelledby="news-title">
        <div className="figma-container news-shell">
          <ContentDrop />

          <header className="news-hero">
            <h1 id="news-title">News</h1>
            <p>Catch up on what matters and stay prepared for what&apos;s next.</p>
          </header>

          <button className="news-hero-search" type="button">
            <SearchIcon />
            <span>Search</span>
          </button>

          <p className="news-section-label news-section-label--spotlight">SPOTLIGHT</p>
          <SpotlightCard />

          <FilterControls />

          <section className="news-latest" id="latest" aria-labelledby="latest-updates-title">
            <p className="news-section-label" id="latest-updates-title">
              LATEST UPDATES
            </p>
            <div className="news-grid">
              <NewsCard className="news-card--a" news={innovationFellowshipNews} />
              <NewsCard className="news-card--b" news={spctaNewsFeature} />
              <NewsCard className="news-card--c" news={absaDiscoveryNews} />
              <NewsCard className="news-card--d" news={spctaNewsFeature} />
            </div>
            <div className="news-view-all">
              <Link className="news-pill-button" href="/insights/news">
                View All News
              </Link>
            </div>
          </section>

          <section className="news-more" id="more" aria-label="More insights">
            <div className="news-more-intro">
              <p>INSIGHTS</p>
              <h2>Understand what&apos;s changing, and what to do about it.</h2>
              <span>A continuation of the one-liner above to drive users to check out more insights.</span>
              <Link className="news-pill-button news-more-action" href="/insights">
                Our Insights
              </Link>
            </div>
            <WebinarCard />
            <ArticleCard />
            <Link className="news-pill-button news-more-mobile-action" href="/insights/webinars">
              View Masterclasses
            </Link>
          </section>

          <section className="news-what" id="what-we-do" aria-label="What we do">
            <div className="news-what-image">
              <img alt="" src={figmaAssets.newsWhatWeDo} />
            </div>
            <div className="news-what-copy">
              <p>WHAT WE DO</p>
              <h2>Discover the right opportunities, develop the right solutions, and deploy them with confidence.</h2>
              <span>Helping organisations replace guesswork with evidence, clarity, and smarter strategy.</span>
              <Link className="news-pill-button news-help-button" href="/what-we-do">
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
