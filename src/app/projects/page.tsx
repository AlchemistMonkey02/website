import { PageHero } from "@/components/layout/PageHero";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { getPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export async function generateMetadata() {
  return await getPageMetadata("projects");
}

export default async function ProjectsPage() {
  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "VenturesNodes Projects",
    "description": "Explore our portfolio of successful startup projects and case studies.",
    "url": "https://venturesnodes.com/projects"
  };

  return (
    <main className="flex min-h-screen flex-col">
      <JsonLd data={projectsSchema} />
      <PageHero title="Our Projects" />
      
      <section className="section-white pt-24 pb-32">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">Case Studies</span>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary font-heading uppercase tracking-tight mb-8">
              Innovating Through <span className="text-primary">Strategic</span> Ventures
            </h2>
          </div>
          <ProjectsGrid data={[]} />
        </div>
      </section>
    </main>
  );
}
