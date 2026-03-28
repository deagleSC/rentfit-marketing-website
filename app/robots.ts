import { MetadataRoute } from "next";
import { getMarketingSiteUrl } from "@/lib/site-config";

const siteUrl = getMarketingSiteUrl();

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
