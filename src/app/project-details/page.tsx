import { PageHero } from "@/components/layout/PageHero";
import { CheckCircle2, Calendar, User, Tag, Globe } from "lucide-react";
import { SocialShare } from "@/components/ui/SocialShare";

import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return await getPageMetadata("project-details");
}

export default async function ProjectDetailsPage() {
  const projectInfo = [
    { icon: User, label: "Client", value: "EcoTech Protocol" },
    { icon: Tag, label: "Category", value: "Infrastructure" },
    { icon: Calendar, label: "Date", value: "Oct 24, 2025" },
    { icon: Globe, label: "Website", value: "ecotech.example" },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <PageHero title="Project Details" />
      
      <section className="section-white">
        <div className="container-custom">
          <div className="mb-16 rounded-md overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2064&auto=format&fit=crop" 
              alt="Project Showcase" 
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            {/* Main Content */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary font-heading uppercase tracking-tight mb-8">
                Building The <span className="text-primary">Future</span>
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                The EcoTech Protocol was a groundbreaking initiative to create a carbon-neutral blockchain infrastructure. Our team was tasked with designing the consensus mechanism and the underlying node architecture to minimize energy consumption while maintaining enterprise-grade security.
              </p>
              
              <h3 className="text-2xl font-bold text-secondary font-heading uppercase tracking-tight mb-6 mt-12">The Solution</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The primary challenge was to scale the network without the traditional energy overhead associated with Proof of Work systems. We needed to implement a high-performance Proof of Stake mechanism with custom validation logic to ensure efficiency and fairness.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div className="p-8 bg-muted rounded-md border-l-4 border-primary">
                  <h4 className="font-heading font-bold uppercase text-secondary mb-4">Innovation</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Developed a proprietary 'Green Consensus' algorithm that reduces node energy consumption by 99%.
                  </p>
                </div>
                <div className="p-8 bg-muted rounded-md border-l-4 border-primary">
                  <h4 className="font-heading font-bold uppercase text-secondary mb-4">Scalability</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Designed a sharding architecture that allows the network to process high-volume transactions per second.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-secondary font-heading uppercase tracking-tight mb-8">Project Results</h3>
              <div className="space-y-4 mb-12">
                {[
                  "Successfully launched mainnet with 500+ validator nodes.",
                  "Achieved 100% carbon-neutral operations through integrated credits.",
                  "Reduced average transaction latency to under 2 seconds.",
                  "Secured $50M in total value locked within the first month.",
                ].map((result, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-medium text-secondary text-sm">{result}</span>
                  </div>
                ))}
              </div>
              <SocialShare title="Project Details" />
            </div>

            {/* Project Info Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-32 p-10 bg-secondary rounded-md text-white shadow-xl">
                <h3 className="font-heading text-xl font-bold uppercase mb-8 pb-4 border-b border-white/10 text-primary">Project Info</h3>
                <div className="space-y-8">
                  {projectInfo.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-6">
                      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-primary shrink-0">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">{item.label}</p>
                        <p className="font-heading font-bold text-sm uppercase tracking-tight">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 pt-10 border-t border-white/10">
                  <p className="text-xs text-white/60 leading-relaxed mb-8 italic">
                    "Venture Nodes delivered a solution that exceeded our expectations in both performance and sustainability."
                  </p>
                  <button className="btn-primary w-full !py-4">LAUNCH LIVE SITE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
