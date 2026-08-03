import Link from "next/link";
import type { InsightArticle } from "@/content/insights";
import { figmaAssets } from "@/content/site";
import { Footer, Header } from "@/app/_components/marketing";

function ArticleSection({
  className = "",
  heading,
  kicker,
  paragraphs,
}: {
  className?: string;
  heading: string;
  kicker: string;
  paragraphs: string[];
}) {
  return (
    <section className={`news-detail-article-section ${className}`}>
      <h2>{heading}</h2>
      <p className="news-detail-kicker">{kicker}</p>
      <div className="news-detail-copy">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function MoreArticleCard({ article, href }: { article: InsightArticle; href: string }) {
  return (
    <Link className="news-detail-card article-detail-card figma-motion-card" href={href}>
      <img alt="" src={figmaAssets.figmaBuilding} />
      <span className="news-detail-card-copy">
        <span>ARTICLE</span>
        <span>{article.cardTitle}</span>
      </span>
      <span className="news-detail-card-button">Read More</span>
    </Link>
  );
}

export function InsightArticleDetail({
  article,
  relatedArticle,
  relatedHref,
}: {
  article: InsightArticle;
  relatedArticle: InsightArticle;
  relatedHref: string;
}) {
  return (
    <main className="news-detail-page article-detail-page">
      <section className="news-detail-hero">
        <Header active="insights" tone="dark" />
        <div className="news-detail-hero-image">
          <img alt="" src={figmaAssets.figmaBusinessPartners} />
        </div>
        <div className="news-detail-hero-copy">
          <h1>{article.title}</h1>
          <p className="news-detail-summary news-detail-summary--desktop">{article.subtitle}</p>
          <p className="news-detail-summary news-detail-summary--tablet-horizontal">{article.summary}</p>
          <p className="news-detail-summary news-detail-summary--tablet-vertical">{article.summary}</p>
          <p className="news-detail-author">
            {article.author} &bull; {article.date}
          </p>
          <div className="news-detail-topics">
            <p>Topics</p>
            <span>{article.topics}</span>
          </div>
        </div>
      </section>

      <section className="news-detail-body">
        <div className="figma-container news-detail-shell">
          <ArticleSection
            heading={article.subtitle}
            kicker="Practical evidence before a bigger commitment."
            paragraphs={article.intro}
          />
          <figure className="news-detail-feature">
            <div className="news-detail-feature-img">
              <img alt="" src={figmaAssets.figmaBusinessPartners} />
            </div>
            <figcaption>Evidence-led innovation turns uncertainty into a decision the team can stand behind.</figcaption>
          </figure>
          {article.sections.map((section) => (
            <ArticleSection
              className="news-detail-article-section--main"
              heading={section.heading}
              key={section.heading}
              kicker={section.kicker}
              paragraphs={section.paragraphs}
            />
          ))}
          <ArticleSection
            className="news-detail-article-section--main"
            heading="The Bottom Line"
            kicker="Evidence earns the right to scale."
            paragraphs={article.bottomLine}
          />
          <section className="news-detail-writer" aria-labelledby="article-writer-profile-title">
            <h2 id="article-writer-profile-title">WRITER PROFILE</h2>
            <article className="news-detail-writer-card">
              <img alt="" className="news-detail-writer-bg" src={figmaAssets.figmaBusinessPartners} />
              <span className="news-detail-writer-ring">
                <img alt="" src={figmaAssets.figmaTeamPortrait} />
              </span>
              <span className="news-detail-writer-copy">
                <strong>{article.author}</strong>
                <span>HYBR Insights</span>
                <span>Practical perspectives on building, validating and scaling the ideas that matter.</span>
              </span>
            </article>
          </section>
          <section className="news-detail-more article-detail-more" aria-labelledby="more-articles-title">
            <div className="news-detail-more-copy">
              <p id="more-articles-title">MORE ARTICLES</p>
              <h2>Enjoyed this article? Check out more insights like this.</h2>
              <span>Explore ideas and perspectives designed to help organisations understand what is changing and what it means for the decisions they make next.</span>
            </div>
            <div className="news-detail-more-grid article-detail-more-grid">
              <MoreArticleCard article={relatedArticle} href={relatedHref} />
            </div>
            <Link className="news-detail-outline-button news-detail-all-news" href="/insights/articles">
              All Articles
            </Link>
          </section>
          <section className="news-detail-services" aria-label="Services">
            <h2>Built to attain your goals - find the service that fits your next step.</h2>
            <Link className="news-detail-outline-button" href="/what-we-do/services">
              Our Services
            </Link>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
