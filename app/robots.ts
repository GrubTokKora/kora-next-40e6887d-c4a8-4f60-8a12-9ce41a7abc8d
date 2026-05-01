import type { MetadataRoute } from "next";
import { data } from "@/lib/data";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = new URL("/sitemap.xml", data.business.website).toString();

  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: sitemapUrl,
  };
}