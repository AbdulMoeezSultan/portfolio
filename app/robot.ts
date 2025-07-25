import { MetadataRoute } from "next";
import { siteUrl } from "./utils/site-url";

export default function robots(): MetadataRoute.Robots {
  const Url = siteUrl;
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        disallow: "/",
      },
    ],
    sitemap: `${Url}/sitemap.xml`,
  };
}
