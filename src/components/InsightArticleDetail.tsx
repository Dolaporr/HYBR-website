import Link from "next/link";
import type { ReactNode } from "react";
import type { InsightArticle } from "@/content/insights";
import {
  absaDiscoveryNews,
  fastestWayToWasteIdeaArticle,
  fromGuessingToKnowingArticle,
  innovationFellowshipNews,
  innovationSweetSpotArticle,
  spctaNewsFeature,
} from "@/content/insights";
import { figmaAssets } from "@/content/site";
import { Footer, Header, InsightCard } from "@/app/_components/marketing";
import "./insight-detail.css";

/*
 * Article / News template, built from the Figma frames
 * Article 1:4122 / 1:9014 / 1:10542 / 1:7219 and News 1:4209 / 1:9095 / 1:10623 / 1:7300 (1440 / 1280 / 800 / 390).
 * The building blocks are exported so the news pages with their own content (Fellowship, the SPCTA feature) use the
 * same hero, sections, writer profile, "More" grid and services call to action.
 */

export type DetailVariant = "article" | "news";

export type RelatedItem = { kind: string; title: string; body?: string; href: string };

const buildingImage = "/insights/listing/building.jpg";

export function DetailPage({ variant, className = "", children }: { variant: DetailVariant; className?: string; children: ReactNode }) {
  return (
    <main className={`news-detail-page idt idt--${variant} ${className}`}>
      {children}
      <Footer />
    </main>
  );
}

export function DetailHero({
  title,
  summary,
  byline,
  topics,
  image = figmaAssets.figmaBusinessPartners,
  imageAlt = "",
  eyebrow,
}: {
  title: string;
  summary: string;
  byline: string;
  topics?: string;
  image?: string;
  imageAlt?: string;
  eyebrow?: string;
}) {
  return (
    <section className="idt-hero">
      <Header active="insights" tone="dark" />
      <img alt={imageAlt} className="idt-hero-image" src={image} />
      <div className="idt-hero-inner">
        {eyebrow ? <p className="idt-hero-eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <p className="idt-hero-summary">{summary}</p>
        <p className="idt-hero-byline">{byline}</p>
        {topics ? (
          <div className="idt-hero-topics">
            <p>Topics</p>
            <p>{topics}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function DetailSection({
  heading,
  kicker,
  paragraphs,
  className = "",
  children,
}: {
  heading?: string;
  kicker?: string;
  paragraphs?: string[];
  className?: string;
  children?: ReactNode;
}) {
  return (
    <section className={`idt-section ${className}`}>
      {heading ? <h2>{heading}</h2> : null}
      {kicker ? <p className="idt-kicker">{kicker}</p> : null}
      {paragraphs?.length ? (
        <div className="idt-copy">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}
      {children}
    </section>
  );
}

export function DetailFigure({
  image = figmaAssets.figmaBusinessPartners,
  alt = "",
  caption,
  mirrored = true,
  className = "",
}: {
  image?: string;
  alt?: string;
  caption: string;
  mirrored?: boolean;
  className?: string;
}) {
  return (
    <figure className={`idt-figure ${className}`}>
      <div className="idt-figure-image">
        <img alt={alt} data-mirrored={mirrored ? "true" : undefined} src={image} />
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function WriterProfile({
  name,
  role,
  bio,
  avatar = figmaAssets.figmaTeamPortrait,
}: {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
}) {
  return (
    <section aria-label="Writer profile" className="idt-writer">
      <p className="idt-label">WRITER PROFILE</p>
      <div className="idt-writer-card">
        <img alt="" className="idt-writer-bg" src={figmaAssets.figmaBusinessPartners} />
        <span className="idt-writer-ring">
          <img alt="" src={avatar} />
        </span>
        <span className="idt-writer-copy">
          <span className="idt-writer-name">{name}</span>
          <span className="idt-writer-role">{role}</span>
          <span className="idt-writer-bio">{bio}</span>
        </span>
      </div>
    </section>
  );
}

export function MoreInsights({
  variant,
  items,
  heading,
  text,
}: {
  variant: DetailVariant;
  items: RelatedItem[];
  heading?: string;
  text?: string;
}) {
  const isNews = variant === "news";
  return (
    <section aria-labelledby="idt-more-label" className="idt-more">
      <p className="idt-label" id="idt-more-label">
        {isNews ? "MORE NEWS" : "MORE ARTICLES"}
      </p>
      <h2>{heading ?? (isNews ? "Enjoyed this update? Check out more insights like this." : "Enjoyed this article? Check out more insights like this.")}</h2>
      <p className="idt-more-text">
        {text ??
          (isNews
            ? "Discover insights built to replace guesswork with clearer thinking and smarter innovation."
            : "Explore ideas and perspectives designed to help organisations understand what is changing and what it means for the decisions they make next.")}
      </p>
      <div className="idt-more-grid" data-count={items.length}>
        {items.map((item, index) => (
          <InsightCard
            {...item}
            className={`idt-card idt-card--${index + 1}`}
            imageSrc={buildingImage}
            key={`${item.href}-${index}`}
            size={index < 2 ? "small" : "default"}
            tone="mono"
          />
        ))}
      </div>
      <Link className="idt-pill idt-more-all" href={isNews ? "/insights/news" : "/insights/articles"}>
        {isNews ? "All News" : "All Articles"}
      </Link>
    </section>
  );
}

export function ServicesCta({
  heading = "Built to attain your goals — find the service that fits your next step.",
  href = "/what-we-do/services",
  label = "Our Services",
}: {
  heading?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section aria-label="Next step" className="idt-services">
      <h2>{heading}</h2>
      <Link className="idt-pill" href={href}>
        {label}
      </Link>
    </section>
  );
}

/* ---------- related content ---------- */

const articleLinks: Array<{ article: InsightArticle; href: string }> = [
  { article: innovationSweetSpotArticle, href: "/insights/articles/specific-article" },
  { article: fromGuessingToKnowingArticle, href: "/insights/articles/from-guessing-to-knowing" },
  { article: fastestWayToWasteIdeaArticle, href: "/insights/articles/fastest-way-to-waste-a-good-idea" },
];

const newsItems: RelatedItem[] = [
  { kind: "NEWS", title: innovationFellowshipNews.shortTitle, body: innovationFellowshipNews.compactSummary, href: innovationFellowshipNews.href },
  { kind: "NEWS", title: spctaNewsFeature.shortTitle, body: spctaNewsFeature.compactSummary, href: "/insights/news/specific-news" },
  { kind: "NEWS", title: absaDiscoveryNews.cardTitle, body: absaDiscoveryNews.compactSummary, href: absaDiscoveryNews.href },
];

/** The two other news items (the News frames show two cards). */
export function relatedNews(currentHref: string): RelatedItem[] {
  return newsItems.filter((item) => item.href !== currentHref).slice(0, 2);
}

/** Three cards for an article (the Article frames show three): the other articles, then the Absa piece. */
function relatedArticles(current: InsightArticle): RelatedItem[] {
  const others = articleLinks
    .filter(({ article }) => article !== current)
    .map(({ article, href }) => ({ kind: "ARTICLE", title: article.cardTitle, href }));
  const extra = { kind: "NEWS", title: absaDiscoveryNews.cardTitle, href: absaDiscoveryNews.href };
  return [...others, extra].slice(0, 3);
}

/**
 * Article template used by the three articles and the Absa piece. `relatedArticle` / `relatedHref` are kept for
 * older callers; the cards now list the other pieces of the same kind.
 */
export function InsightArticleDetail({
  article,
  variant,
  href,
}: {
  article: InsightArticle;
  relatedArticle?: InsightArticle;
  relatedHref?: string;
  variant?: DetailVariant;
  href?: string;
}) {
  const kind: DetailVariant = variant ?? ("kind" in article && (article as { kind?: string }).kind === "NEWS" ? "news" : "article");
  const items = kind === "news" ? relatedNews(href ?? "") : relatedArticles(article);

  return (
    <DetailPage variant={kind}>
      <DetailHero byline={`${article.author} • ${article.date}`} summary={article.summary} title={article.title} topics={article.topics} />
      <div className="idt-body">
        <div className="idt-flow">
          <DetailSection heading={article.subtitle} kicker="Practical evidence before a bigger commitment." paragraphs={article.intro} />
          <DetailFigure caption="Evidence-led innovation turns uncertainty into a decision the team can stand behind." />
          {article.sections.map((section) => (
            <DetailSection heading={section.heading} key={section.heading} kicker={section.kicker} paragraphs={section.paragraphs} />
          ))}
          <DetailSection heading="The Bottom Line" kicker="Evidence earns the right to scale." paragraphs={article.bottomLine} />
          <WriterProfile
            bio="Practical perspectives on building, validating and scaling the ideas that matter."
            name={article.author}
            role="HYBR Insights"
          />
          <MoreInsights items={items} variant={kind} />
          <ServicesCta />
        </div>
      </div>
    </DetailPage>
  );
}
