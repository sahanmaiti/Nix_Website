import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://nix-mu.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://nix-mu.vercel.app/privacy",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
