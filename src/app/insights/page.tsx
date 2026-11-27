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
import { Glyph, PlayMark, PlayPolygon } from "./webinars/_parts/icons";
import "./figma.css";

/* Figma: Desktop 1:14637 (1440), Tablet Horizontal 1:14928 (1280), Tablet Vertical 1:15057 (800),
   Mobile 1:14775 (390). Layout and type live in ./figma.css, scoped under .ih-page. */

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
    <div className="ih-search" aria-label="Insight search and filters">
      <button className="ih-search-pill" type="button">
        <Glyph className="ih-search-icon" name="search" />
        <span>Search</span>
      </button>
      <button className="ih-filter-pill" type="button">
        <span className="ih-filter-label">Filters</span>
        <Glyph className="ih-filter-arrow" name="keyboard_arrow_down" />
        <svg aria-hidden="true" className="ih-filter-sliders" fill="none" viewBox="0 0 24 24">
          <path d="M3 7H21M3 17H21" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
          <circle cx="9" cy="7" fill="#ffffff" r="2.25" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="15" cy="17" fill="#ffffff" r="2.25" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
    </div>
  );
}

function WebinarCard({
  className = "",
  title,
  metaOne,
  metaTwo,
  duration,
  imageSrc,
  feature = false,
  href,
}: {
  className?: string;
  title: string;
  metaOne: string;
  metaTwo: string;
  duration: string;
  imageSrc: string;
  feature?: boolean;
  href: string;
}) {
  return (
    <Link className={`ih-card ih-webinar${feature ? " ih-webinar--feature" : ""} ${className}`} href={href}>
      <img alt="" className="ih-card-image" src={imageSrc} />
      <span className="ih-card-shade" />
      <span className="ih-webinar-kind">MASTERCLASS</span>
      <span className="ih-webinar-time">{duration}</span>
      <span className="ih-webinar-title">{title}</span>
      <span className="ih-webinar-meta">{metaOne}</span>
      <span className="ih-webinar-meta">{metaTwo}</span>
      {feature ? <PlayPolygon className="ih-play ih-play--large" /> : null}
      <PlayMark className={feature ? "ih-play ih-play--feature-small" : "ih-play ih-play--small"} />
    </Link>
  );
}

function StoryCard({
  className = "",
  kind,
  title,
  body,
  imageSrc = figmaAssets.article,
  href,
}: {
  className?: string;
  kind: "ARTICLE" | "NEWS";
  title: string;
  body?: string;
  imageSrc?: string;
  href: string;
}) {
  return (
    <Link className={`ih-card ih-story ${className}`} href={href}>
      <img alt="" className="ih-card-image" src={imageSrc} />
      <span className="ih-card-shade" />
      <span className="ih-story-copy">
        <span className="ih-story-kind">{kind}</span>
        <span className="ih-story-title">{title}</span>
        {body ? <span className="ih-story-body">{body}</span> : null}
      </span>
      <span className="ih-read">Read More</span>
    </Link>
  );
}

function SectionCopy({
  className = "",
  kicker,
  title,
  body,
  id,
}: {
  className?: string;
  kicker: string;
  title: string;
  body: string;
  id: string;
}) {
  return (
    <div className={`ih-copy ${className}`}>
      <p className="ih-kicker">{kicker}</p>
      <h2 id={id}>{title}</h2>
      <p className="ih-copy-body">{body}</p>
    </div>
  );
}

function Newsletter() {
  return (
    <section className="ih-newsletter" id="newsletter" aria-labelledby="ih-newsletter-title">
      <img alt="" className="ih-newsletter-image" src={figmaAssets.insightsNewsletter} />
      <span className="ih-newsletter-panel" />
      <div className="ih-newsletter-copy">
        <h2 id="ih-newsletter-title">Unveil more industry secrets.</h2>
        <p>Stay ahead with curated insights, useful tools and exclusive access to what HYBR is building next.</p>
      </div>
      <form className="ih-newsletter-form">
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
    <main className="insights-hub-page ih-page">
      <Header active="insights" />
      <ContentDrop />

      <div className="ih-wrap">
        <section className="ih-hero">
          <h1>Our Insights</h1>
          <p>Understand what&rsquo;s changing, and what to do about it.</p>
        </section>

        <SearchControls />

        <section className="ih-spotlight" id="spotlight" aria-labelledby="ih-spotlight-title">
          <p className="ih-label" id="ih-spotlight-title">
            SPOTLIGHT
          </p>
          <WebinarCard
            className="ih-spotlight-main"
            duration="01:40:35"
            feature
            href={systemsMindsetWebinar.href}
            imageSrc={figmaAssets.figmaBusinessPartners}
            metaOne={systemsMindsetWebinar.speakerOne}
            metaTwo={systemsMindsetWebinar.speakerTwo}
            title={systemsMindsetWebinar.title}
          />
          <div className="ih-pair ih-spotlight-pair">
            <StoryCard
              className="ih-story--article"
              href="/insights/articles/specific-article"
              kind="ARTICLE"
              title={innovationSweetSpotArticle.cardTitle}
            />
            <StoryCard
              body={innovationFellowshipNews.compactSummary}
              className="ih-story--news"
              href={innovationFellowshipNews.href}
              kind="NEWS"
              title={innovationFellowshipNews.title}
            />
          </div>
        </section>

        <section className="ih-webinars" id="webinars" aria-labelledby="ih-webinars-title">
          <SectionCopy
            body="Understand what’s changing, and how leaders are responding—live. Join the next session or watch past conversations."
            className="ih-copy--center"
            id="ih-webinars-title"
            kicker="MASTERCLASSES"
            title="Learn how leaders are navigating today’s toughest challenges."
          />
          <div className="ih-pair ih-webinar-pair">
            <WebinarCard
              duration={publicPowerWebinar.duration}
              href={publicPowerWebinar.href}
              imageSrc={figmaAssets.webinar}
              metaOne={publicPowerWebinar.speakers}
              metaTwo={publicPowerWebinar.date}
              title={publicPowerWebinar.title}
            />
            <WebinarCard
              duration={businessModelsWebinar.duration}
              href={businessModelsWebinar.href}
              imageSrc={figmaAssets.figmaBusinessPartners}
              metaOne={businessModelsWebinar.speakers}
              metaTwo={businessModelsWebinar.date}
              title={businessModelsWebinar.title}
            />
          </div>
          <Link className="ih-outline ih-webinars-button" href="/insights/webinars">
            View Masterclasses
          </Link>
        </section>

        <section className="ih-articles" id="articles" aria-labelledby="ih-articles-title">
          <div className="ih-articles-lead">
            <SectionCopy
              body="Still unsure about what’s next? Start reading and feel confident in your next move."
              id="ih-articles-title"
              kicker="ARTICLE"
              title="Learn what works before you decide what’s next."
            />
            <Link className="ih-outline ih-articles-button" href="/insights/articles">
              All Articles
            </Link>
          </div>
          <StoryCard
            className="ih-story--article ih-article-small"
            href="/insights/articles/from-guessing-to-knowing"
            kind="ARTICLE"
            title={fromGuessingToKnowingArticle.cardTitle}
          />
          <StoryCard
            className="ih-story--article ih-article-second"
            href="/insights/articles/specific-article"
            kind="ARTICLE"
            title={innovationSweetSpotArticle.cardTitle}
          />
          <StoryCard
            className="ih-story--article ih-article-tall"
            href="/insights/articles/fastest-way-to-waste-a-good-idea"
            imageSrc={figmaAssets.figmaBuilding}
            kind="ARTICLE"
            title={fastestWayToWasteIdeaArticle.cardTitle}
          />
        </section>

        <section className="ih-news" id="news" aria-labelledby="ih-news-title">
          <SectionCopy
            body="Stay updated with innovation news currently shaping the future of business."
            id="ih-news-title"
            kicker="NEWS"
            title="Catch up on what matters and stay prepared for what’s next."
          />
          <div className="ih-pair ih-news-pair">
            <StoryCard
              body={innovationFellowshipNews.compactSummary}
              className="ih-story--news ih-news-a"
              href={innovationFellowshipNews.href}
              kind="NEWS"
              title={innovationFellowshipNews.title}
            />
            <StoryCard
              body={spctaNewsFeature.compactSummary}
              className="ih-story--news ih-news-b"
              href="/insights/news/specific-news"
              kind="NEWS"
              title={spctaNewsFeature.title}
            />
          </div>
          <Link className="ih-outline ih-news-button" href="/insights/news">
            All News
          </Link>
        </section>

        <Newsletter />
      </div>
      <Footer />
    </main>
  );
}
