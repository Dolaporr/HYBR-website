import { InsightArticleDetail } from "@/components/InsightArticleDetail";
import { fromGuessingToKnowingArticle, innovationSweetSpotArticle } from "@/content/insights";

export default function ArticleTemplatePage() {
  return <InsightArticleDetail article={innovationSweetSpotArticle} relatedArticle={fromGuessingToKnowingArticle} relatedHref="/insights/articles/from-guessing-to-knowing" />;
}
