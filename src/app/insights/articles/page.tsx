import { InsightListing } from "../_listing/InsightListing";
import {
  fastestWayToWasteIdeaArticle,
  fromGuessingToKnowingArticle,
  innovationFellowshipNews,
  innovationSweetSpotArticle,
  publicPowerWebinar,
} from "@/content/insights";
import { figmaAssets } from "@/content/site";

// figmaBuilding without the 10 px white frame baked into the PNG
const buildingImage = "/insights/listing/building.jpg";

const articleCard = (title: string, href: string) => ({ kind: "ARTICLE", title, href });

export default function ArticlesPage() {
  return (
    <InsightListing
      cardImage={buildingImage}
      drop={{
        image: figmaAssets.articlesContentTab,
        label: "CONTENT",
        sections: [
          { label: "Spotlight", href: "#spotlight" },
          { label: "Recent Articles", href: "#recent" },
          { label: "More Insights", href: "#more" },
          { label: "What We Do", href: "#what-we-do" },
        ],
      }}
      grid={{
        id: "recent",
        label: "RECENT ARTICLES",
        cards: [
          articleCard(fromGuessingToKnowingArticle.cardTitle, "/insights/articles/from-guessing-to-knowing"),
          articleCard(innovationSweetSpotArticle.cardTitle, "/insights/articles/specific-article"),
          articleCard(fastestWayToWasteIdeaArticle.cardTitle, "/insights/articles/fastest-way-to-waste-a-good-idea"),
          // The grid has a 4th slot (desktop and tablet frames) but there is no 4th article yet, so it repeats
          // "From Guessing to Knowing" until one exists. The mobile frame shows three cards and hides it.
          articleCard(fromGuessingToKnowingArticle.cardTitle, "/insights/articles/from-guessing-to-knowing"),
        ],
      }}
      more={{
        webinar: publicPowerWebinar,
        webinarImage: figmaAssets.figmaBusinessPartners,
        card: {
          kind: "NEWS",
          title: innovationFellowshipNews.title,
          body: innovationFellowshipNews.compactSummary,
          href: innovationFellowshipNews.href,
        },
        cardImage: buildingImage,
      }}
      spotlight={{
        title: innovationSweetSpotArticle.cardTitle,
        summary: innovationSweetSpotArticle.summary,
        href: "/insights/articles/specific-article",
        image: buildingImage,
      }}
      subtitle="Learn what works before you decide what’s next."
      title="Articles"
      variant="articles"
      viewAll={{ label: "View All Articles", href: "/insights/articles" }}
      what={{ image: figmaAssets.articlesWhatWeDo }}
    />
  );
}
