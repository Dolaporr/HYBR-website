import { InsightArticleDetail } from "@/components/InsightArticleDetail";
import { absaDiscoveryNews, innovationSweetSpotArticle } from "@/content/insights";

export default function AbsaDiscoveryNewsPage() {
  return (
    <InsightArticleDetail
      article={absaDiscoveryNews}
      relatedArticle={innovationSweetSpotArticle}
      relatedHref="/insights/articles/specific-article"
    />
  );
}
