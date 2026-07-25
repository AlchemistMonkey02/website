import { PageHero } from "@/components/layout/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { getPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";

export async function generateMetadata() {
  return await getPageMetadata("contact");
}

const ICON_MAP: Record<string, any> = {
  MapPin,
  Phone,
  Mail,
  Clock
};

const fallbackContactInfo = [
  {
    icon: "MapPin",
    title: "Our Address",
    details: ["312, 3rd Floor, Mansarovar Plaza, Madhyam Marg, Mansarovar, Jaipur, Rajasthan, 302020"],
    color: "bg-orange-100 text-primary"
  },
  {
    icon: "Phone",
    title: "Contact Number",
    details: ["+91 70231 49122"],
    color: "bg-green-100 text-secondary"
  },
  {
    icon: "Mail",
    title: "Email Address",
    details: ["Contact@venturesnodes.com"],
    color: "bg-blue-100 text-blue-600"
  }
];

export default async function ContactPage() {
  const contactInfo = fallbackContactInfo;

  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "name": "Contact VenturesNodes",
        "description": "Get in touch with VenturesNodes for expert startup consultation and government schemes guidance.",
        "url": "https://venturesnodes.com/contact"
      },
      {
        "@type": "ProfessionalService",
        "name": "VenturesNodes",
        "image": "https://venturesnodes.com/logo.png",
        "description": "Expert startup consultation, MSME support, and government scheme guidance in India.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "312, 3rd Floor, Mansarovar Plaza, Madhyam Marg, Mansarovar",
          "addressLocality": "Jaipur",
          "postalCode": "302020",
          "addressRegion": "Rajasthan",
          "addressCountry": "IN"
        },
        "telephone": "+91-7023149122",
        "email": "Contact@venturesnodes.com",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "priceRange": "$$"
      }
    ]
  };

  return (
    <main className="flex min-h-screen flex-col">
      <JsonLd data={contactSchema} />
      <PageHero title="Contact Us" />
      
      <section className="section-white">
        <div className="container-custom">
          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {contactInfo.map((info: any, idx: number) => (
              <div key={idx} className="group p-10 bg-muted rounded-md text-center hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-black/5">
                <div className={`w-20 h-20 ${info.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {(() => {
                    const IconComponent = typeof info.icon === 'string' ? (ICON_MAP[info.icon] || MapPin) : (info.icon || MapPin);
                    return <IconComponent className="w-8 h-8" />;
                  })()}
                </div>
                <h3 className="text-xl font-bold text-secondary font-heading uppercase mb-4">{info.title}</h3>
                {info.details.map((line: string, i: number) => (
                  <p key={i} className="text-muted-foreground text-sm font-medium">{line}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image/Content Side */}
            <div className="relative">
              <div className="mb-10">
                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-4 block">
                  Visit Our Office
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-secondary font-heading uppercase tracking-tight mb-8">
                  Get In Touch With <br /><span className="text-primary">Our Experts</span>
                </h2>
                <p className="text-muted-foreground mb-10 leading-relaxed max-w-lg">
                  At the core of our ethos lies a dedication to our clients. Your success is our shared triumph, and we're here to help you navigate the complex world of technology.
                </p>
                
                <div className="flex items-center gap-6 p-8 bg-secondary rounded-md text-white">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shrink-0">
                    <Clock className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold uppercase tracking-widest text-sm mb-1">Working Hours</h4>
                    <p className="text-white/60 text-xs">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
