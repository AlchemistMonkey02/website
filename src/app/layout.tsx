import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-heading",
  display: "swap" 
});

const manrope = Manrope({ 
  subsets: ["latin"], 
  variable: "--font-body",
  display: "swap" 
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      default: "VenturesNodes | Startup Consultancy & Government Grants Advisory",
      template: "%s | VenturesNodes"
    },
    description: "Premier Indian startup consultancy specializing in government grants, MSME registration near Jaipur, Startup India, and seed funding.",
    keywords: ["startup grants India", "MSME registration near Jaipur", "Startup India registration", "government grants", "pitch deck consultancy", "startup funding", "PMEGP scheme"],
    authors: [{ name: "VenturesNodes" }],
    creator: "VenturesNodes",
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: "https://venturesnodes.com",
      title: "VenturesNodes | Startup Consultancy & Government Grants Advisory",
      description: "Premier Indian startup consultancy specializing in government grants, MSME registration near Jaipur, Startup India, and seed funding.",
      siteName: "VenturesNodes",
    },
    twitter: {
      card: "summary_large_image",
      title: "VenturesNodes | Startup Consultancy & Government Grants Advisory",
      description: "Expert startup consultancy in India for government grants, MSME registration, and business compliance.",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

import { Navbar } from "@/components/layout/Navbar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Footer } from "@/components/layout/Footer";
import { StickyContact } from "@/components/ui/StickyContact";





export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let settings: any = null;



  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${manrope.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col font-body">
        <CustomCursor />


        <Navbar settings={settings} />
        {children}
        <Footer settings={settings} />
        <StickyContact />
      </body>
    </html>
  );
}

