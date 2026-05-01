import type { MetadataRoute } from "next";
import { data } from "@/lib/data";

const SITE_URL = data.business.website;

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}