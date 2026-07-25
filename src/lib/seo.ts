import { Metadata } from "next";
import fs from "fs";
import path from "path";

// Helper to get absolute canonical URL
function getCanonicalUrl(urlPath: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://venturesnodes.com";
  const cleanPath = urlPath === "home" || urlPath === "/" ? "" : urlPath.startsWith("/") ? urlPath.slice(1) : urlPath;
  return `${baseUrl}/${cleanPath}`;
}

export async function getPageMetadata(slug: string): Promise<Metadata> {
  let canonical = getCanonicalUrl(slug);
  let title = "VenturesNodes | Expert Startup Consultation & Government Schemes";
  let description = "Expert Indian startup consultancy guiding MSMEs through government schemes, incubation centers, and securing vital seed funding.";
  let keywords = "VenturesNodes, startup consultation, government schemes, startup india, seed fund, MSME support, business incubation";

  if (slug === "home") {
    try {
      const filePath = path.join(process.cwd(), "content", "pages", "home.json");
      const fileContents = fs.readFileSync(filePath, "utf8");
      const data = JSON.parse(fileContents);
      
      if (data.metaTitle) title = data.metaTitle;
      if (data.metaDescription) description = data.metaDescription;
      if (data.keywords) keywords = data.keywords;
      if (data.canonicalUrl) canonical = data.canonicalUrl;
    } catch (e) {
      console.error("Error reading home.json", e);
    }
  }

  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    robots: "index, follow",
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "VenturesNodes",
      images: [
        {
          url: "https://venturesnodes.com/logo.png",
          width: 800,
          height: 600,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "VenturesNodes | Expert Startup Consultation & Government Schemes",
      description: "VenturesNodes provides expert consultation for startups, guiding MSMEs through government schemes.",
      images: ["https://venturesnodes.com/logo.png"],
    },
  };
}

// Helper to format slug to title case (e.g. iso-certification -> ISO Certification)
function formatSlugToTitle(slug: string): string {
  if (slug === 'iso-certification') return 'ISO Certification';
  if (slug === 'gst-registered') return 'GST Registration';
  if (slug === 'msme-udyam-registration') return 'MSME Udyam Registration';
  if (slug === 'startup-india') return 'Startup India Registration';
  
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export async function getServicePageMetadata(slug: string, imageUrl?: string): Promise<Metadata> {
  const canonical = getCanonicalUrl(`services/${slug}`);
  const title = formatSlugToTitle(slug);
  const finalImage = imageUrl || "https://venturesnodes.com/logo.png";
  
  return {
    title: `${title} Consultancy`,
    description: `Expert ${title} consultation and services in India. Partner with VenturesNodes for seamless compliance, registration, and business execution.`,
    alternates: { canonical },
    robots: "index, follow",
    openGraph: {
      title: `${title} Consultancy | VenturesNodes`,
      description: `Expert ${title} consultation and services in India. Partner with VenturesNodes for seamless compliance.`,
      url: canonical,
      siteName: "VenturesNodes",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: finalImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} Consultancy | VenturesNodes`,
      description: `Expert ${title} consultation and services in India. Partner with VenturesNodes for seamless compliance.`,
      images: [finalImage],
    },
  };
}

export async function getTeamMemberPageMetadata(slug: string): Promise<Metadata> {
  const canonical = getCanonicalUrl(`team/${slug}`);
  const name = formatSlugToTitle(slug);
  return {
    title: `${name} - Expert Consultant`,
    description: `Meet ${name}, a highly skilled consulting and advisory team member at VenturesNodes.`,
    alternates: { canonical },
    robots: "index, follow",
  };
}

export async function getLegalPageMetadata(slug: string): Promise<Metadata> {
  const canonical = getCanonicalUrl(`legal/${slug}`);
  let title = formatSlugToTitle(slug);
  
  if (slug === 'terms-conditions') title = 'Terms & Conditions';
  
  return {
    title: `${title}`,
    description: `Read the ${title} and legal policies for VenturesNodes startup consultancy.`,
    alternates: { canonical },
    robots: "noindex, follow",
  };
}
