import type { Metadata } from "next";
import { ExpandableColumns } from "@/components/expandable-columns";
import { HeroSection } from "@/components/hero-section";
import { Particles } from "@/components/particles";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { VerticalSections } from "@/components/vertical-sections";
import { absoluteUrl, createPageMetadata, legalName, siteName } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Fábrica de premoldeados y pretensados de hormigón en Neuquén | Cimalco Patagonia",
  description:
    "Cimalco Patagonia: fábrica de premoldeados y pretensados de hormigón en Neuquén. Postes para líneas eléctricas AT/MT/BT, premoldeados para Oil & Gas en Vaca Muerta, bloques y adoquines IRAM. Planta propia 26.000 m² — venta directa.",
  path: "/",
  image: "/site-assets/premoldeados-de-hormigon.jpg",
  keywords: [
    "fábrica premoldeados hormigón Neuquén",
    "premoldeados y pretensados hormigón",
    "postes pretensados baja media alta tensión",
    "premoldeados Oil Gas Vaca Muerta",
    "bloques adoquines IRAM Neuquén",
    "venta directa hormigón Neuquén",
    "planta propia Neuquén 26000 m2",
  ],
});

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: siteName,
    url: absoluteUrl("/"),
    description:
      "Premoldeados y pretensados de hormigon para energia, Oil & Gas, vialidad e infraestructura en Neuquen y toda la Patagonia.",
    inLanguage: "es-AR",
    about: {
      "@type": "Corporation",
      name: legalName,
    },
    primaryImageOfPage: absoluteUrl("/site-assets/premoldeados-de-hormigon.jpg"),
  };

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
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
        <VerticalSections />
        <ExpandableColumns />
        <SiteFooter />
      </div>
    </main>
  );
}
