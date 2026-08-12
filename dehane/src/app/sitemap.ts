import type { MetadataRoute } from "next";
import { camping } from "@/config/camping";
import { pages } from "@/config/pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${camping.domain}`;
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8
    },
    ...Object.keys(pages).map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7
    }))
  ];
}
