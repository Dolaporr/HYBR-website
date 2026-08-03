import {
  figmaAssets,
  footerGroups,
  navigation,
  siteContent,
} from "@/content/site";

export type CmsSource = "local" | "wordpress";

export type SiteContent = {
  assets: typeof figmaAssets;
  footerGroups: typeof footerGroups;
  navigation: typeof navigation;
  site: typeof siteContent;
  source: CmsSource;
};

export async function getSiteContent(): Promise<SiteContent> {
  const wordpressUrl = process.env.WORDPRESS_API_URL;

  if (!wordpressUrl) {
    return {
      assets: figmaAssets,
      footerGroups,
      navigation,
      site: siteContent,
      source: "local",
    };
  }

  // WordPress will plug in here via REST or GraphQL once the CMS is available.
  return {
    assets: figmaAssets,
    footerGroups,
    navigation,
    site: siteContent,
    source: "wordpress",
  };
}
