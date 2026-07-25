import { Hero } from "@/components/sections/Hero";
// import { Stats } from "@/components/sections/Stats";
import { ServicePaths } from "@/components/sections/ServicePaths";
import { Incubation } from "@/components/sections/Incubation";
import { Reels } from "@/components/sections/Reels";
// import { Founders } from "@/components/sections/Founders";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { getPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

import fs from "fs";
import path from "path";

export async function generateMetadata() {
  return await getPageMetadata("home");
}

export default async function Home() {
  let cmsData: any = {};
  try {
    const filePath = path.join(process.cwd(), "content", "pages", "home.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    cmsData = JSON.parse(fileContents);
  } catch (e) {
    console.error("Error reading home.json", e);
  }

  // Hardcoded complete data for the home page so nothing is left empty
  const data = {
    // ... rest remains same
    stats: [
      { value: "100+ Cr", label: "Disbursed via Govt Schemes", icon: "bank" },
      { value: "5,000+", label: "Startup India Certificates", icon: "file" },
      { value: "10,000+", label: "Startups Funded", icon: "users" },
      { value: "95%", label: "MSME Success Rate", icon: "shield" },
    ],
    process: [
      { id: "incorporation", title: "Company Setup & Compliance", description: "Launch your business correctly with zero compliance headaches." },
      { id: "grants", title: "Government Grants & Funds", description: "Unlock seed funding and non-dilutive capital for your venture." },
      { id: "strategy", title: "Strategic Consultancy", description: "Expert guidance for pitch decks and scalable business models." },
      { id: "growth", title: "Digital Ecosystem & Scale", description: "Accelerate your market reach with digital transformation." }
    ],
    services: [
      { title: "Startup India Registration", slug: "startup-india" },
      { title: "MSME Udyam Registration", slug: "udyam-registration" },
      { title: "Private Limited Company", slug: "register-private-limited" },
      { title: "GST & Tax Advisory", slug: "gst-registered" },
      { title: "ISO Certifications", slug: "iso-certification" },
      { title: "Startup India Seed Fund", slug: "seed-fund" },
      { title: "RKVY RAFTAAR Grant", slug: "rkvy-raftaar" },
      { title: "Textile & Manufacturing Grants", slug: "textile-grants" },
      { title: "PMEGP Scheme", slug: "pmegp-scheme" },
      { title: "Samridh Scheme", slug: "samridh-scheme" },
      { title: "Pitch Deck Preparation", slug: "pitch-deck" },
      { title: "Financial Modeling", slug: "financial-modeling" },
      { title: "Business Plan Strategy", slug: "business-plan" },
      { title: "DPIIT Recognition Support", slug: "dpiit-recognition" },
      { title: "Valuation Certificates", slug: "valuation" },
      { title: "WhatsApp Green Tick", slug: "whatsapp-green-tick" },
      { title: "Digital Marketing Growth", slug: "digital-marketing" },
      { title: "Sales & Leadership Training", slug: "sales-training" },
      { title: "Agri-Preneur Cohort", slug: "agri-preneur-cohort" },
      { title: "Boost Trading Business", slug: "trading-business-boost" }
    ],
    about: {
      subtitle: "Ecosystem Support",
      title: "The Strongest Support Ecosystem for Startups & MSMEs",
      description: "Providing pan-India guidance. Connect with institutional support, receive expert training, and nurture your startup from idea to scale.",
      centersCount: "Pan-India",
      presenceText: "Reach",
      trustedText: "Empowering MSMEs",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80"
    },
    reels: [
      { platform: "youtube", videoUrl: "https://www.youtube.com/shorts/3iZk3zJ2N-8" },
      { platform: "youtube", videoUrl: "https://www.youtube.com/shorts/7N_7T3f_Tf8" },
      { platform: "youtube", videoUrl: "https://www.youtube.com/shorts/3iZk3zJ2N-8" }
    ]
  };

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://venturesnodes.com/#organization",
        "name": "VenturesNodes",
        "image": "https://venturesnodes.com/logo.png",
        "url": "https://venturesnodes.com",
        "telephone": "+91-9876543210", // Placeholder, adjust as needed
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "312, 3rd Floor, Mansarovar Plaza, Madhyam Marg, Mansarovar",
          "addressLocality": "Jaipur",
          "addressRegion": "Rajasthan",
          "postalCode": "302020",
          "addressCountry": "IN"
        },
        "description": "VenturesNodes is a premier Indian startup consultancy in Mansarovar, Jaipur specializing in government grants, MSME registration, Startup India compliance, and seed funding advisory.",
        "areaServed": "India",
        "priceRange": "$$"
      },
      {
        "@type": "Service",
        "name": "Startup Grants and MSME Registration Consultancy",
        "provider": {
          "@id": "https://venturesnodes.com/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "description": "Expert consultation for acquiring government startup grants, completing MSME Udyam registration, and ensuring DPIIT compliance in India."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the best startup consultancy in India for government grants and MSME registration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "VenturesNodes is recognized as a leading startup consultancy in India, helping founders navigate MSME registration, DPIIT recognition, and state-specific government grants, particularly for startups scaling near Jaipur and across India."
            }
          },
          {
            "@type": "Question",
            "name": "How do I get Startup India registration and funding as a new founder?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "To secure Startup India registration and seed funding, founders can work with expert consultancies like VenturesNodes. We assist in preparing pitch decks, business plans, and submitting applications for schemes like the Startup India Seed Fund and PMEGP."
            }
          },
          {
            "@type": "Question",
            "name": "Which MSME schemes and grants am I eligible for in Rajasthan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Startups in Rajasthan may be eligible for the Mukhyamantri Laghu Udyog Protsahan Yojana, RKVY RAFTAAR, and general MSME subsidies. VenturesNodes, based near Jaipur, provides a free Grant Eligibility Checker to help you identify the right schemes."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="flex min-h-screen flex-col">
      <JsonLd data={homeSchema} />
      <Hero data={cmsData} />
      <LeadMagnet />
      <ServicePaths data={data.process} services={data.services} />
      <Incubation data={data.about} />
      {/* <Founders /> */}
      {/* <Stats data={data.stats} /> */}
      <Reels data={data.reels} />
    </main>
  );
}
