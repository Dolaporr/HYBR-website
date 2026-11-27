import Link from "next/link";
import {
  DetailFigure,
  DetailHero,
  DetailPage,
  DetailSection,
  MoreInsights,
  ServicesCta,
  WriterProfile,
  relatedNews,
} from "@/components/InsightArticleDetail";
import { spctaNewsFeature } from "@/content/insights";
import "./figma.css";

/*
 * The SPCTA feature on the News template (Figma 1:4209 / 1:9095 / 1:10623 / 1:7300). The template's hero, sections,
 * image cards, writer profile, "More News" and services blocks carry the feature's own copy; its pull quotes, facts
 * panel and partner calls to action are extra editorial blocks set in the template's type scale (figma.css).
 */

type EditorialImage = { src: string; alt: string; caption: string };

function Figure({ image }: { image: EditorialImage }) {
  return <DetailFigure alt={image.alt} caption={image.caption} image={image.src} mirrored={false} />;
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
    <section aria-labelledby="spcta-facts-title" className="spcta-editorial-facts">
      <div className="spcta-editorial-facts-heading">
        <p>SPCTA AT A GLANCE</p>
        <h2 id="spcta-facts-title">Early execution, built into a larger infrastructure platform.</h2>
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

function AudienceCtas() {
  return (
    <section aria-labelledby="spcta-audiences-title" className="spcta-editorial-audiences">
      <div className="spcta-editorial-audiences-heading">
        <p>WHERE SPCTA GOES NEXT</p>
        <h2 id="spcta-audiences-title">Building the recovery layer takes aligned partners.</h2>
      </div>
      <div className="spcta-editorial-audiences-grid">
        {spctaNewsFeature.audiences.map((audience) => (
          <div key={audience.title}>
            <h3>{audience.title}</h3>
            <p>{audience.copy}</p>
            <Link href={audience.href}>{audience.linkLabel}</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function NewsTemplatePage() {
  const [bottleSection, companySection, platformSection, glanceSection, ilorinSection] = spctaNewsFeature.sections;
  const { images, pullQuotes } = spctaNewsFeature;

  return (
    <DetailPage className="idt--spcta" variant="news">
      <DetailHero
        byline={`${spctaNewsFeature.author} • ${spctaNewsFeature.date} • ${spctaNewsFeature.readingTime} read`}
        eyebrow={spctaNewsFeature.eyebrow}
        image={spctaNewsFeature.heroImage.src}
        imageAlt={spctaNewsFeature.heroImage.alt}
        summary={spctaNewsFeature.summary}
        title={spctaNewsFeature.title}
        topics={spctaNewsFeature.topics}
      />
      <div className="idt-body">
        <div className="idt-flow">
          <DetailSection kicker="Feature article" paragraphs={spctaNewsFeature.intro} />
          <DetailSection {...bottleSection} />
          <PullQuote quote={pullQuotes[0]} />
          <Figure image={images.operations} />
          <DetailSection {...companySection} />
          <Figure image={images.recovery} />
          <DetailSection {...platformSection} />
          <PullQuote quote={pullQuotes[1]} />
          <Figure image={images.partners} />
          <FactsPanel nextStage={glanceSection.paragraphs[4].replace(/^Next stage:\s*/, "")} />
          <Figure image={images.material} />
          <DetailSection {...ilorinSection} />
          <Figure image={images.cohort} />
          <PullQuote quote={pullQuotes[2]} />
          <AudienceCtas />
          <WriterProfile
            bio="Sharing venture-building stories, systems insights and field-tested lessons from the work behind HYBR Labs."
            name={spctaNewsFeature.author}
            role="Feature desk, HYBR Insights"
          />
          <MoreInsights items={relatedNews("/insights/news/specific-news")} variant="news" />
          <ServicesCta />
        </div>
      </div>
    </DetailPage>
  );
}
