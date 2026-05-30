import { createFileRoute } from "@tanstack/react-router";
import { StickyHeader } from "@/components/StickyHeader";
import { HeroSection } from "@/components/HeroSection";
import { LegalCalloutBar } from "@/components/LegalCalloutBar";
import { ServicesSection } from "@/components/ServicesSection";
import { FrequencyTable } from "@/components/FrequencyTable";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { TrustSection } from "@/components/TrustSection";
import { CoverageSection } from "@/components/CoverageSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { MobileCallBar } from "@/components/MobileCallBar";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VH Kominictví — Revize, čištění a kontroly komínů | Praha" },
      {
        name: "description",
        content:
          "Certifikovaný kominík pro Prahu a Středočeský kraj. Revize, čištění a kontroly komínů dle vyhlášky 34/2016 Sb. Rychlý termín, férová cena, papíry hned.",
      },
      { property: "og:title", content: "VH Kominictví — Revize a kontroly komínů" },
      {
        property: "og:description",
        content: "Komín v pořádku. Papíry hned. Praha a Středočeský kraj.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <StickyHeader />
      <main>
        <HeroSection />
        <LegalCalloutBar />
        <ServicesSection />
        <FrequencyTable />
        <HowItWorksSection />
        <TrustSection />
        <CoverageSection />
        <FaqSection />
        <ContactForm />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
}
