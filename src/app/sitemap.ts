import { MetadataRoute } from "next";


export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://venturesnodes.com";

  // Static routes
  const staticPaths = [
    "",
    "about",
    "services",
    "eligibility",
    // "projects",
    // "project-details",
    // "team",
    // "team-details",
    // "pricing",
    "faq",
    "contact",
  ];

  const staticEntries = staticPaths.map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date(),
    changeFrequency: (path === "" ? "daily" : "weekly") as "daily" | "weekly",
    priority: path === "" ? 1.0 : path === "services" /* || path === "pricing" */ ? 0.8 : 0.6,
  }));

  // Dynamic services
  let dynamicServiceEntries: any[] = [];

  if (dynamicServiceEntries.length === 0) {
    const fallbackServiceSlugs = [
      "agri-preneur-cohort", "seed-fund", "rkvy-raftaar", "textile-grants",
      "cgtmse-scheme", "samridh-scheme", "pmmy-scheme", "pmegp-scheme",
      "start-one-person-company", "register-llp", "section-8-company",
      "register-private-limited", "company-incorporation", "register-partnership",
      "12a-80g-registration", "enhance-credibility-zed", "iso-certification",
      "gst-registered", "manufacturing-funding", "trading-business-boost", "labour-id-registration"
    ];
    dynamicServiceEntries = fallbackServiceSlugs.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }));
  }

  // Dynamic team members (disabled)
  let dynamicTeamEntries: any[] = [];

  return [...staticEntries, ...dynamicServiceEntries];
}
