import { PageHero } from "@/components/layout/PageHero";
import { getPageMetadata } from "@/lib/seo";

export async function generateMetadata() {
  return await getPageMetadata("location-jaipur");
}

export default function JaipurLocationPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <PageHero 
        title="Startup & MSME Consultant in Jaipur" 
        breadcrumb={[
          { name: "Locations", href: "/location" },
          { name: "Jaipur" }
        ]}
      />
      <section className="section-white py-24">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold font-heading text-secondary mb-6">Expert Startup Consulting in Jaipur, Rajasthan</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Looking for a reliable Startup Consultant in Jaipur? VenturesNodes offers end-to-end guidance for entrepreneurs and MSMEs in Rajasthan. 
            From Startup India registration to securing seed funding and government grants, our local experts are here to help you build an Atmanirbhar Bharat.
          </p>

          <h3 className="text-2xl font-bold font-heading text-secondary mb-4">Our Services in Jaipur</h3>
          <ul className="list-disc pl-6 space-y-3 text-muted-foreground mb-8">
            <li><strong>Startup India Registration Jaipur:</strong> Get recognized by DPIIT with our expert help.</li>
            <li><strong>MSME Consultant Jaipur:</strong> Udyam registration and compliance made easy for local businesses.</li>
            <li><strong>Funding & Grant Assistance:</strong> Navigate Rajasthan state grants, RKVY RAFTAAR, and Seed Fund schemes.</li>
            <li><strong>Incubation Support:</strong> Connect with top incubators in Jaipur and across India.</li>
          </ul>

          <div className="bg-primary/5 p-8 border-l-4 border-primary rounded-md">
            <h4 className="font-bold text-xl mb-2 text-secondary">Visit Our Jaipur Office</h4>
            <p className="text-muted-foreground">
              VenturesNodes Business Solution<br />
              312, 3rd Floor, Mansarovar Plaza, Madhyam Marg, Mansarovar, Jaipur, Rajasthan 302020<br />
              <br />
              <strong>Contact:</strong> +91 70231 49122<br />
              <strong>Email:</strong> Contact@venturesnodes.com
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
