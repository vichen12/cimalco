import { BrandCarousel } from "@/components/brand-carousel";
import { ExpandableColumns } from "@/components/expandable-columns";
import { HeroSection } from "@/components/hero-section";
import { Particles } from "@/components/particles";
import { ProductRows } from "@/components/product-rows";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { VerticalSections } from "@/components/vertical-sections";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "-5%",
            width: "55vw",
            height: "55vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,210,57,0.10) 0%, transparent 65%)",
            animation: "bg-glow 22s ease-in-out infinite alternate",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "35%",
            left: "-10%",
            width: "45vw",
            height: "45vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(145,145,145,0.08) 0%, transparent 65%)",
            animation: "bg-glow 28s 4s ease-in-out infinite alternate-reverse",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10%",
            right: "5%",
            width: "35vw",
            height: "35vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(45,45,45,0.05) 0%, transparent 65%)",
            animation: "bg-glow 34s 8s ease-in-out infinite alternate",
          }}
        />
      </div>
      <Particles />
      <div className="relative z-10" style={{ background: "#fffdf0" }} >
        <SiteHeader />
        <HeroSection />
        <ExpandableColumns />
        <VerticalSections />
        <ProductRows />
        <BrandCarousel />
        <SiteFooter />
      </div>
      <WhatsAppButton />
    </main>
  );
}
