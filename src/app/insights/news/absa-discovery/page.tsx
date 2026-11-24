import { InsightArticleDetail } from "@/components/InsightArticleDetail";
import { absaDiscoveryNews } from "@/content/insights";

export default function AbsaDiscoveryNewsPage() {
  return <InsightArticleDetail article={absaDiscoveryNews} href={absaDiscoveryNews.href} variant="news" />;
}
