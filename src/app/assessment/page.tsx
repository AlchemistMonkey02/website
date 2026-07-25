import { getPageMetadata } from "@/lib/seo";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AssessmentForm } from "@/components/sections/AssessmentForm";

export async function generateMetadata() {
  return await getPageMetadata("assessment");
}

export default function AssessmentPage() {
  return (
    <main className="flex min-h-screen flex-col pt-32 pb-20 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="container-custom max-w-4xl relative z-10">
        <SectionHeading 
          subtitle="Free Eligibility Check" 
          title="Startup Funding Readiness Assessment" 
          description="Fill out this quick assessment to discover which government grants, incubator programs, and tax benefits your startup qualifies for. A dedicated consultant will review your profile and schedule a free consultation call."
          centered 
          className="mb-12"
        />

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-border">
          <AssessmentForm />
        </div>
      </div>
    </main>
  );
}
