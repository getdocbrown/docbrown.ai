import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://docbrown.ai", changeFrequency: "monthly", priority: 1 }, { url: "https://docbrown.ai/privacy", changeFrequency: "yearly", priority: 0.3 }];
}
