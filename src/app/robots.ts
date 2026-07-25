import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://venturesnodes.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/studio", "/studio/*", "/api", "/api/*", "/_next", "/_next/*"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
