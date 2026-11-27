import { InsightListing } from "../_listing/InsightListing";
import {
  absaDiscoveryNews,
  innovationFellowshipNews,
  innovationSweetSpotArticle,
  publicPowerWebinar,
  spctaNewsFeature,
} from "@/content/insights";
import { figmaAssets } from "@/content/site";

// figmaBuilding without the 10 px white frame baked into the PNG
const buildingImage = "/insights/listing/building.jpg";

export default function NewsPage() {
  return (
    <InsightListing
      cardImage={buildingImage}
      drop={{
        image: figmaAssets.newsContentTab,
        label: "CONTENT",
        sections: [
          { label: "Spotlight", href: "#spotlight" },
          { label: "Latest Updates", href: "#latest" },
          { label: "More Insights", href: "#more" },
          { label: "What We Do", href: "#what-we-do" },
        ],
      }}
      grid={{
        id: "latest",
        label: "LATEST UPDATES",
        cards: [
          {
            kind: "NEWS",
            title: innovationFellowshipNews.shortTitle,
            body: innovationFellowshipNews.compactSummary,
            href: innovationFellowshipNews.href,
          },
          {
            kind: "NEWS",
            title: spctaNewsFeature.shortTitle,
            body: spctaNewsFeature.compactSummary,
            href: "/insights/news/specific-news",
          },
          {
            kind: "NEWS",
            title: absaDiscoveryNews.cardTitle,
            body: absaDiscoveryNews.compactSummary,
            href: absaDiscoveryNews.href,
          },
          // Fourth slot of the desktop / tablet grids: repeats the SPCTA feature until a fourth update exists.
          {
            kind: "NEWS",
            title: spctaNewsFeature.shortTitle,
            body: spctaNewsFeature.compactSummary,
            href: "/insights/news/specific-news",
          },
        ],
      }}
      more={{
        // The 800 and 390 frames show a line under this heading; it is still placeholder copy (kept from the site).
        intro: "A continuation of the one-liner above to drive users to check out more insights.",
        webinar: publicPowerWebinar,
        webinarImage: figmaAssets.figmaBusinessPartners,
        card: {
          kind: "ARTICLE",
          title: innovationSweetSpotArticle.cardTitle,
          href: "/insights/articles/specific-article",
        },
        cardImage: buildingImage,
      }}
      spotlight={{
        title: spctaNewsFeature.title,
        summary: spctaNewsFeature.cardSummary,
        href: "/insights/news/specific-news",
        image: buildingImage,
      }}
      subtitle="Catch up on what matters and stay prepared for what’s next."
      title="News"
      variant="news"
      viewAll={{ label: "View All News", href: "/insights/news" }}
      what={{ image: figmaAssets.newsWhatWeDo }}
    />
  );
}
