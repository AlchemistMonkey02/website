import { PageHero } from "@/components/layout/PageHero";
import { Services } from "@/components/sections/Services";
import { getPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export async function generateMetadata() {
  return await getPageMetadata("services");
}

export default async function ServicesPage() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "VenturesNodes Services",
    "description": "Explore our expert consulting, incorporation schemes, and corporate registrations.",
    "url": "https://venturesnodes.com/services"
  };

  return (
    <main className="flex min-h-screen flex-col">
      <JsonLd data={servicesSchema} />
      <PageHero title="Our Services" />
      <Services data={[]} />
    </main>
  );
}
