import { MetadataRoute } from "next";
import { getMarketingSiteUrl } from "@/lib/site-config";

const siteUrl = getMarketingSiteUrl();

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/privacy", "/terms"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : ("monthly" as const),
    priority: route === "" ? 1 : 0.8,
  }));
}
