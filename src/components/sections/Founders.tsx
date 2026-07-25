"use client";

import { SectionHeading } from "../ui/SectionHeading";

export const Founders = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container-custom">
        <SectionHeading 
          subtitle="Our Story" 
          title="Built by Founders, For Founders" 
          description="We started VenturesNodes because we saw too many incredible Indian startups fail not due to a lack of innovation, but a lack of compliance and funding guidance. Our mission is to be the bridge between founders and incubation opportunities."
          centered 
          className="mb-16" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Founder 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 rounded-full bg-gray-200 mb-6 overflow-hidden border-4 border-primary/20">
              {/* Placeholder for founder image */}
              <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-500 font-medium">Photo</div>
            </div>
            <h3 className="text-2xl font-bold font-heading text-secondary mb-2">Founder Name</h3>
            <p className="text-primary font-bold text-sm uppercase tracking-wider mb-4">Co-Founder & CEO</p>
            <p className="text-muted-foreground mb-4 text-sm max-w-xs">
              Extensive experience in startup ecosystem, helping scale multiple businesses from idea to funding.
            </p>
            <a href="#" className="text-blue-600 hover:underline text-sm font-medium">LinkedIn Profile</a>
          </div>

          {/* Founder 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 rounded-full bg-gray-200 mb-6 overflow-hidden border-4 border-primary/20">
              {/* Placeholder for founder image */}
              <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-500 font-medium">Photo</div>
            </div>
            <h3 className="text-2xl font-bold font-heading text-secondary mb-2">Founder Name</h3>
            <p className="text-primary font-bold text-sm uppercase tracking-wider mb-4">Co-Founder & COO</p>
            <p className="text-muted-foreground mb-4 text-sm max-w-xs">
              Expert in government grants, compliance, and incubation strategy with years of specialized consulting.
            </p>
            <a href="#" className="text-blue-600 hover:underline text-sm font-medium">LinkedIn Profile</a>
          </div>
        </div>
      </div>
    </section>
  );
};
