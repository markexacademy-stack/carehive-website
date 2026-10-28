import { ScrollMotion } from "@/components/motion/ScrollMotion";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/cta/FloatingWhatsApp";
import { MobileStickyCTA } from "@/components/cta/MobileStickyCTA";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <ScrollMotion />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navbar />
      <main
        id="main-content"
        className="flex-1 pb-[calc(5.75rem+env(safe-area-inset-bottom))] md:pb-0"
      >
        {children}
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyCTA />
    </>
  );
}
