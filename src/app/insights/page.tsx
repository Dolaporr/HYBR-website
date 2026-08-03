import Link from "next/link";
import { Footer, Header } from "../_components/marketing";
import {
  businessModelsWebinar,
  fastestWayToWasteIdeaArticle,
  fromGuessingToKnowingArticle,
  innovationFellowshipNews,
  innovationSweetSpotArticle,
  publicPowerWebinar,
  spctaNewsFeature,
  systemsMindsetWebinar,
} from "@/content/insights";
import { figmaAssets } from "@/content/site";

const contentLinks = [
  { label: "Spotlight", href: "#spotlight" },
  { label: "Masterclasses", href: "#webinars" },
  { label: "Articles", href: "#articles" },
  { label: "News", href: "#news" },
  { label: "Newsletter", href: "#newsletter" },
];

function ContentDrop() {
  return (
    <aside className="insights-content-drop" aria-label="Insights content">
      <img alt="" src={figmaAssets.insightsContentTab} />
      <span className="insights-content-drop-label">CONTENT</span>
      <nav>
        {contentLinks.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

function SearchControls() {
  return (
    <div className="insights-search-row" aria-label="Insight search and filters">
      <button className="insights-search-pill" type="button">
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
          <path d="M16 16L21 21" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
        </svg>
        <span>Search</span>
      </button>
      <button className="insights-filter-pill" type="button">
        <span className="insights-filter-label">Filters</span>
        <span className="insights-filter-icon insights-filter-icon--arrow" aria-hidden="true">
          <svg fill="none" viewBox="0 0 24 24">
            <path d="M7 10L12 15L17 10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </span>
        <span className="insights-filter-icon insights-filter-icon--sliders" aria-hidden="true">
          <svg fill="none" viewBox="0 0 24 24">
            <path d="M4 7H20M4 17H20" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
            <circle cx="9" cy="7" r="2.25" fill="#ffffff" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="15" cy="17" r="2.25" fill="#ffffff" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </span>
      </button>
    </div>
  );
}

function PlayIcon({ small = false }: { small?: boolean }) {
  return (
    <span className={small ? "insights-play insights-play--small" : "insights-play"} aria-hidden="true">
      <svg fill="none" viewBox="0 0 80 80">
        <path d="M23 12L66 40L23 68V12Z" fill="currentColor" />
      </svg>
    </span>
  );
}

function WebinarCard({
  className,
  title,
  speakerOne = "Jedidiah Akpata & Charles Ojei",
  speakerTwo = "November 2023",
  duration = "01:40:35",
  imageSrc = figmaAssets.article,
  featured = false,
  href = "/insights/webinars",
}: {
  className: string;
  title: string;
  speakerOne?: string;
  speakerTwo?: string;
  duration?: string;
  imageSrc?: string;
  featured?: boolean;
  href?: string;
}) {
  return (
    <Link className={`insights-card insights-webinar-card ${className}`} href={href} rel={href.startsWith("http") ? "noreferrer" : undefined} target={href.startsWith("http") ? "_blank" : undefined}>
      <img alt="" src={imageSrc} />
      <span className="insights-card-overlay" />
      <span className="insights-card-kind">MASTERCLASS</span>
      <span className="insights-card-time">{duration}</span>
      <span className="insights-card-copy">
        <span className="insights-card-title">{title}</span>
        <span className="insights-card-meta">{speakerOne}</span>
        <span className="insights-card-meta">{speakerTwo}</span>
      </span>
      <PlayIcon small={!featured} />
    </Link>
  );
}

function InsightCard({
  className,
  kind,
  title,
  body,
  imageSrc = figmaAssets.article,
  href,
}: {
  className: string;
  kind: "ARTICLE" | "NEWS";
  title: string;
  body?: string;
  imageSrc?: string;
  href: string;
}) {
  return (
    <Link className={`insights-card insights-story-card ${className}`} href={href}>
      <img alt="" src={imageSrc} />
      <span className="insights-card-overlay" />
      <span className="insights-story-copy">
        <span>{kind}</span>
        <span>{title}</span>
        {body ? <span>{body}</span> : null}
      </span>
      <span className="insights-read-button">Read More</span>
    </Link>
  );
}

function SectionCopy({
  className,
  kicker,
  title,
  body,
}: {
  className: string;
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <section className={`insights-section-copy ${className}`}>
      <p>{kicker}</p>
      <h2>{title}</h2>
      <span>{body}</span>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="insights-newsletter" id="newsletter" aria-labelledby="insights-newsletter-title">
      <img alt="" src={figmaAssets.insightsNewsletter} />
      <span className="insights-newsletter-shade" />
      <div className="insights-newsletter-copy">
        <h2 id="insights-newsletter-title">Unveil more industry secrets.</h2>
        <p>Stay ahead with curated insights, useful tools and exclusive access to what HYBR is building next.</p>
      </div>
      <form className="insights-newsletter-form">
        <input aria-label="First name" placeholder="Insert Your First Name" />
        <input aria-label="Last name" placeholder="Insert Your Last Name" />
        <input aria-label="Email" placeholder="Insert Your Email" type="email" />
        <button type="button">Submit</button>
      </form>
    </section>
  );
}

export default function InsightsPage() {
  return (
    <main className="insights-hub-page">
      <div className="insights-stage">
        <Header active="insights" />
        <section className="insights-hero-copy">
          <h1>Our Insights</h1>
          <p>Understand what&apos;s changing, and what to do about it.</p>
        </section>
        <ContentDrop />
        <SearchControls />

        <section className="insights-spotlight" id="spotlight" aria-labelledby="insights-spotlight-title">
          <p id="insights-spotlight-title" className="insights-block-label">SPOTLIGHT</p>
          <WebinarCard
            className="insights-spotlight-main"
            featured
            href={systemsMindsetWebinar.href}
            imageSrc={figmaAssets.figmaBusinessPartners}
            speakerOne={systemsMindsetWebinar.speakerOne}
            speakerTwo={systemsMindsetWebinar.speakerTwo}
            title={systemsMindsetWebinar.title}
          />
          <InsightCard
            body={innovationSweetSpotArticle.subtitle}
            className="insights-spotlight-article"
            href="/insights/articles/specific-article"
            kind="ARTICLE"
            title={innovationSweetSpotArticle.cardTitle}
          />
          <InsightCard
            body={innovationFellowshipNews.compactSummary}
            className="insights-spotlight-news"
            href={innovationFellowshipNews.href}
            kind="NEWS"
            title={innovationFellowshipNews.title}
          />
        </section>

        <section className="insights-webinars" id="webinars" aria-label="Masterclasses">
          <SectionCopy
            body="Understand what's changing, and how leaders are responding live. Join the next session or watch past conversations."
            className="insights-webinars-copy"
            kicker="MASTERCLASSES"
            title="Learn how leaders are navigating today's toughest challenges."
          />
          <WebinarCard
            className="insights-webinar-a"
            imageSrc={figmaAssets.webinar}
            href={publicPowerWebinar.href}
            speakerOne={publicPowerWebinar.speakers}
            speakerTwo={publicPowerWebinar.date}
            duration={publicPowerWebinar.duration}
            title={publicPowerWebinar.title}
          />
          <WebinarCard
            className="insights-webinar-b"
            imageSrc={figmaAssets.figmaBusinessPartners}
            href={businessModelsWebinar.href}
            speakerOne={businessModelsWebinar.speakers}
            speakerTwo={businessModelsWebinar.date}
            duration={businessModelsWebinar.duration}
            title={businessModelsWebinar.title}
          />
          <Link className="insights-outline-button insights-webinars-button" href="/insights/webinars">
            View Masterclasses
          </Link>
        </section>

        <section className="insights-articles" id="articles" aria-label="Articles">
          <SectionCopy
            body="Still unsure about what's next? Start reading and feel confident in your next move."
            className="insights-articles-copy"
            kicker="ARTICLE"
            title="Learn what works before you decide what's next."
          />
          <Link className="insights-outline-button insights-articles-button" href="/insights/articles">
            All Articles
          </Link>
          <InsightCard
            body={fromGuessingToKnowingArticle.subtitle}
            className="insights-article-small-a"
            href="/insights/articles/from-guessing-to-knowing"
            kind="ARTICLE"
            title={fromGuessingToKnowingArticle.cardTitle}
          />
          <InsightCard
            body={innovationSweetSpotArticle.subtitle}
            className="insights-article-small-b"
            href="/insights/articles/specific-article"
            imageSrc={figmaAssets.article}
            kind="ARTICLE"
            title={innovationSweetSpotArticle.cardTitle}
          />
          <InsightCard
            body={fastestWayToWasteIdeaArticle.subtitle}
            className="insights-article-tall"
            href="/insights/articles/fastest-way-to-waste-a-good-idea"
            imageSrc={figmaAssets.figmaBuilding}
            kind="ARTICLE"
            title={fastestWayToWasteIdeaArticle.cardTitle}
          />
        </section>

        <section className="insights-news" id="news" aria-label="News">
          <SectionCopy
            body="Stay updated with innovation news currently shaping the future of business."
            className="insights-news-copy"
            kicker="NEWS"
            title="Catch up on what matters and stay prepared for what's next."
          />
          <InsightCard
            body={innovationFellowshipNews.compactSummary}
            className="insights-news-a"
            href={innovationFellowshipNews.href}
            kind="NEWS"
            title={innovationFellowshipNews.title}
          />
          <InsightCard
            body={spctaNewsFeature.compactSummary}
            className="insights-news-b"
            href="/insights/news/specific-news"
            kind="NEWS"
            title={spctaNewsFeature.title}
          />
          <Link className="insights-outline-button insights-news-button" href="/insights/news">
            All News
          </Link>
        </section>

        <Newsletter />
      </div>
      <Footer />
    </main>
  );
}
