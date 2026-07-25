import { PageHero } from "@/components/layout/PageHero";
import { About } from "@/components/sections/About";
import { Benefits } from "@/components/sections/Benefits";
import { GovtSchemes } from "@/components/sections/GovtSchemes";
import { getPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export async function generateMetadata() {
  return await getPageMetadata("about");
}

export default async function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About VenturesNodes",
    "description": "Learn more about VenturesNodes and our mission to support startups.",
    "url": "https://venturesnodes.com/about"
  };

  const aboutData = {
    title: "Empowering Your Business Journey",
    subtitle: "Our Story",
    description: "VenturesNodes is dedicated to building a robust ecosystem for startups and MSMEs. We simplify complex government schemes, handle your compliances, and prepare you for scaling and securing funds.",
    experienceYears: "10+",
    features: [
      "Expert Consultation",
      "End-to-end Compliance",
      "Government Grants Strategy",
      "Seed Funding Access"
    ],
    mainImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
  };

  const benefitsData = [
    { title: "Tailored Solutions", description: "Custom strategies designed specifically for your industry and stage of growth.", icon: "briefcase" },
    { title: "Nationwide Reach", description: "Access a network of resources and incubation centers across India.", icon: "globe" },
    { title: "Proven Success", description: "Dedicated to driving high success rates for MSMEs.", icon: "shield" }
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <JsonLd data={aboutSchema} />
      <PageHero title="About Us" />
      <About data={aboutData} />
      <Benefits data={benefitsData} />
      <GovtSchemes />
    </main>
  );
}
