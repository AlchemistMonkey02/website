import { PageHero } from "@/components/layout/PageHero";
import { EligibilityChecker } from "@/components/sections/EligibilityChecker";
import { getPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export async function generateMetadata() {
  return await getPageMetadata("eligibility");
}

export default function EligibilityPage() {
  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Startup Grant Eligibility Checker",
    "description": "Free interactive tool by VenturesNodes to help Indian startup founders check their eligibility for government grants, MSME registration, and seed funding schemes based on their sector, stage, and revenue.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "provider": {
      "@type": "LocalBusiness",
      "name": "VenturesNodes"
    },
    "url": "https://venturesnodes.com/eligibility"
  };

  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      <JsonLd data={toolSchema} />
      <PageHero title="Check Your Eligibility" />
      <section className="py-24">
        <div className="container-custom">
          <EligibilityChecker />
        </div>
      </section>
    </main>
  );
}
