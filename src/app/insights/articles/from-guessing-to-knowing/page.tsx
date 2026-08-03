import { InsightArticleDetail } from "@/components/InsightArticleDetail";
import { fromGuessingToKnowingArticle, innovationSweetSpotArticle } from "@/content/insights";

export default function FromGuessingToKnowingPage() {
  return <InsightArticleDetail article={fromGuessingToKnowingArticle} relatedArticle={innovationSweetSpotArticle} relatedHref="/insights/articles/specific-article" />;
}
