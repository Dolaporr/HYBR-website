import { InsightArticleDetail } from "@/components/InsightArticleDetail";
import { fastestWayToWasteIdeaArticle, innovationSweetSpotArticle } from "@/content/insights";

export default function FastestWayToWasteAGoodIdeaPage() {
  return (
    <InsightArticleDetail
      article={fastestWayToWasteIdeaArticle}
      relatedArticle={innovationSweetSpotArticle}
      relatedHref="/insights/articles/specific-article"
    />
  );
}
