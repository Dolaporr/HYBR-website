import Link from "next/link";
import { Footer, Header } from "../../../_components/marketing";
import { spctaNewsFeature } from "@/content/insights";
import { figmaAssets } from "@/content/site";

type EditorialImage = {
  src: string;
  alt: string;
  caption: string;
};

function EditorialFigure({
  image,
  className = "",
}: {
  image: EditorialImage;
  className?: string;
}) {
  return (
    <figure className={`spcta-editorial-figure ${className}`}>
      <img alt={image.alt} src={image.src} />
      <figcaption>{image.caption}</figcaption>
    </figure>
  );
}

function EditorialSection({
  heading,
  kicker,
  paragraphs,
}: {
  heading: string;
  kicker: string;
  paragraphs: string[];
}) {
  return (
    <section className="spcta-editorial-section">
      <p className="spcta-editorial-section-kicker">{kicker}</p>
      <h2>{heading}</h2>
      <div className="spcta-editorial-copy">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

function PullQuote({ quote }: { quote: string }) {
  return (
    <blockquote className="spcta-editorial-quote">
      <span aria-hidden="true">“</span>
      <p>{quote}</p>
    </blockquote>
  );
}

function FactsPanel({ nextStage }: { nextStage: string }) {
  return (
    <section className="spcta-editorial-facts" aria-labelledby="spcta-facts-title">
      <div className="spcta-editorial-facts-heading">
        <p>SPCTA AT A GLANCE</p>
        <h2>Early execution, built into a larger infrastructure platform.</h2>
      </div>
      <dl>
        {spctaNewsFeature.facts.map(([term, detail]) => (
          <div key={term}>
            <dt>{term}</dt>
            <dd>{detail}</dd>
          </div>
        ))}
      </dl>
      <p className="spcta-editorial-facts-next">
        <strong>Next stage:</strong> {nextStage}
      </p>
    </section>
  );
}

function WriterProfile() {
  return (
    <section className="news-detail-writer" aria-labelledby="news-writer-profile-title">
      <h2 id="news-writer-profile-title">WRITER PROFILE</h2>
      <article className="news-detail-writer-card">
        <img alt="" className="news-detail-writer-bg" src={figmaAssets.figmaBusinessPartners} />
        <span className="news-detail-writer-ring">
          <img alt="" src={figmaAssets.figmaTeamPortrait} />
        </span>
        <span className="news-detail-writer-copy">
          <span>Feature desk, HYBR Insights</span>
          <span>
            Sharing venture-building stories, systems insights and field-tested
            lessons from the work behind HYBR Labs.
          </span>
        </span>
      </article>
    </section>
  );
}

function MoreNewsCard({ className = "", compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link className={`news-detail-card figma-motion-card ${className}`} href="/insights/news/specific-news">
      <img alt="" src={figmaAssets.figmaBuilding} />
      <span className="news-detail-card-copy">
        <span>{spctaNewsFeature.kind}</span>
        <span>{spctaNewsFeature.title}</span>
        <span>{compact ? spctaNewsFeature.compactSummary : spctaNewsFeature.summary}</span>
      </span>
      <span className="news-detail-card-button">Read More</span>
    </Link>
  );
}

function MoreNews() {
  return (
    <section className="news-detail-more" aria-labelledby="more-news-title">
      <div className="news-detail-more-copy">
        <p id="more-news-title">MORE NEWS</p>
        <h2>Enjoyed this update? Check out more insights like this.</h2>
        <span>Discover insights built to replace guesswork with clearer thinking and smarter innovation.</span>
      </div>
      <div className="news-detail-more-grid">
        <MoreNewsCard className="news-detail-card--small" compact />
        <MoreNewsCard className="news-detail-card--large" />
      </div>
      <Link className="news-detail-outline-button news-detail-all-news" href="/insights/news">
        All News
      </Link>
    </section>
  );
}

function AudienceCtas() {
  return (
    <section className="spcta-editorial-audiences" aria-labelledby="spcta-audiences-title">
      <div className="spcta-editorial-audiences-heading">
        <p>WHERE SPCTA GOES NEXT</p>
        <h2>Building the recovery layer takes aligned partners.</h2>
      </div>
      <div className="spcta-editorial-audiences-grid">
        {spctaNewsFeature.audiences.map((audience) => (
          <article key={audience.title}>
            <h3>{audience.title}</h3>
            <p>{audience.copy}</p>
            <Link href={audience.href}>{audience.linkLabel}</Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function NewsTemplatePage() {
  const [bottleSection, companySection, platformSection, glanceSection, ilorinSection] = spctaNewsFeature.sections;

  return (
    <main className="news-detail-page news-detail-page--spcta">
      <section className="spcta-editorial-hero">
        <Header active="insights" tone="dark" />
        <img alt={spctaNewsFeature.heroImage.alt} className="spcta-editorial-hero-image" src={spctaNewsFeature.heroImage.src} />
        <div className="spcta-editorial-hero-shade" />
        <div className="figma-container spcta-editorial-hero-copy">
          <p>{spctaNewsFeature.eyebrow}</p>
          <h1>{spctaNewsFeature.title}</h1>
          <p className="spcta-editorial-hero-summary">{spctaNewsFeature.summary}</p>
          <div>
            <span>{spctaNewsFeature.author}</span>
            <span>{spctaNewsFeature.date}</span>
            <span>{spctaNewsFeature.readingTime} read</span>
          </div>
        </div>
      </section>

      <article className="spcta-editorial-story">
        <div className="figma-container spcta-editorial-shell">
          <section className="spcta-editorial-intro">
            <p>FEATURE ARTICLE</p>
            {spctaNewsFeature.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <EditorialSection {...bottleSection} />
          <PullQuote quote={spctaNewsFeature.pullQuotes[0]} />
          <EditorialFigure image={spctaNewsFeature.images.operations} className="spcta-editorial-figure--inset" />

          <EditorialSection {...companySection} />
          <EditorialFigure image={spctaNewsFeature.images.recovery} className="spcta-editorial-figure--split" />

          <EditorialSection {...platformSection} />
          <PullQuote quote={spctaNewsFeature.pullQuotes[1]} />
          <EditorialFigure image={spctaNewsFeature.images.partners} className="spcta-editorial-figure--wide" />

          <FactsPanel nextStage={glanceSection.paragraphs[4].replace(/^Next stage:\s*/, "")} />
          <EditorialFigure image={spctaNewsFeature.images.material} className="spcta-editorial-figure--inset spcta-editorial-figure--material" />

          <EditorialSection {...ilorinSection} />
          <EditorialFigure image={spctaNewsFeature.images.cohort} className="spcta-editorial-figure--wide spcta-editorial-figure--cohort" />
          <PullQuote quote={spctaNewsFeature.pullQuotes[2]} />

          <AudienceCtas />
          <WriterProfile />
          <MoreNews />
        </div>
      </article>

      <Footer />
    </main>
  );
}
