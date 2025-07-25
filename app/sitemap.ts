import { MetadataRoute } from "next";
import { siteUrl } from "./utils/site-url";

const Url = siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${Url}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${Url}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${Url}/contact`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
