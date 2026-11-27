import {
  DetailHero,
  DetailPage,
  DetailSection,
  MoreInsights,
  ServicesCta,
  WriterProfile,
  relatedNews,
} from "@/components/InsightArticleDetail";
import { innovationFellowshipNews } from "@/content/insights";

export default function FellowshipNewsPage() {
  return (
    <DetailPage variant="news">
      <DetailHero
        byline="HYBR Editorial"
        summary={innovationFellowshipNews.summary}
        title={innovationFellowshipNews.title}
        topics="Innovation Fellowship, Talent Development, Venture Building"
      />
      <div className="idt-body">
        <div className="idt-flow">
          <DetailSection
            heading="Real responsibility changes what people believe they can do."
            kicker="A year of learning through the work that matters."
            paragraphs={[
              innovationFellowshipNews.summary,
              "HYBR’s Innovation Fellowship creates room for graduates to work on meaningful challenges, learn alongside experienced practitioners and build the confidence that comes from contributing to real work.",
              "The fellowship is not designed around observation. It gives emerging innovators the space to ask better questions, test their thinking and discover where their capability can create the most value.",
            ]}
          />
          <WriterProfile
            bio="Practical perspectives on building, validating and scaling the ideas that matter."
            name="HYBR Editorial"
            role="HYBR Insights"
          />
          <MoreInsights items={relatedNews(innovationFellowshipNews.href)} variant="news" />
          <ServicesCta heading="Interested in building the next generation of innovators?" href="/contact" label="Let’s Talk" />
        </div>
      </div>
    </DetailPage>
  );
}
