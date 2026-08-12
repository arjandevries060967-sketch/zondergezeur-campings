import type { MetadataRoute } from "next";
import { camping } from "@/config/camping";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `https://${camping.domain}/sitemap.xml`
  };
}
