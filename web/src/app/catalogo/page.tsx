import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { CatalogProductCard } from "@/components/catalog-product-card";
import { CatalogPremoldeadoCard } from "@/components/catalog-premoldeado-card";
import { CatalogRevestimientoCard } from "@/components/catalog-revestimiento-card";
import { CatalogSearch, type CatalogSearchItem } from "@/components/catalog-search";
import { LightboxImage } from "@/components/lightbox-image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import {
  bloqueraProducts,
  camarasTipicas,

  catalogSections,
  industrializadosDescription,
  premoldeadosDescription,
  premoldeadosTipicos,
  pretensadosColumns,
  pretensadosDescription,
  pretensadosNote,
  pretensadosRows,
  revestimientos,
} from "@/data/catalogo-2025";
import { buildContactHref, buildWhatsAppHref } from "@/lib/contact-prefill";
import { absoluteUrl, createPageMetadata, legalName } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Catálogo técnico de productos",
  description:
    "Consultá fichas técnicas, medidas, aplicaciones, normas y disponibilidad de productos para energía, Oil & Gas, construcción e infraestructura. Premoldeados, pretensados y prefabricados Cimalco Patagonia.",
  path: "/catalogo",
  image: "/site-assets/slider3.png",
  keywords: [
    "catálogo premoldeados",
    "catálogo adoquines",
    "catálogo pretensados",
    "catálogo postes de hormigón",
    "bloques HR protección erosiones",
    "fichas técnicas hormigón",
  ],
});

function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  accentColor = "#ffd239",
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  accentColor?: string;
}) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-black/34">
          {eyebrow}
        </p>
        <h2 className="mt-2 font-display text-[clamp(2rem,4vw,3.8rem)] uppercase leading-[0.94] tracking-[0.04em] text-brand-charcoal">
          {title}
          <span className="block" style={{ color: accentColor }}>{accent}</span>
        </h2>
      </div>
      <p className="max-w-xl text-sm leading-7 text-black/54 sm:text-base">
        {description}
      </p>
    </div>
  );
}

function SubsectionBlock({
  label,
  title,
  description,
  accentColor = "#ffd239",
  children,
}: {
  label: string;
  title: string;
  description: string;
  accentColor?: string;
  children: ReactNode;
}) {
  return (
    <article className="overflow-hidden rounded-[34px] border border-black/8 bg-white/72 shadow-[0_16px_42px_rgba(0,0,0,0.05)]">
      <div className="h-[4px]" style={{ backgroundColor: accentColor }} />
      <div className="p-6 sm:p-7 lg:p-8">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/34">
              {label}
            </p>
            <h3 className="mt-2 font-display text-[clamp(1.6rem,3vw,2.6rem)] uppercase leading-[0.96] tracking-[0.03em] text-brand-charcoal">
              {title}
            </h3>
          </div>
          <p className="max-w-xl text-sm leading-7 text-black/54">
            {description}
          </p>
        </div>
        <div className="mt-7">{children}</div>
      </div>
    </article>
  );
}

export default function CatalogoPage() {
  const bloques = bloqueraProducts.filter(
    (product) => product.family === "Bloquera",
  );
  const pavimentos = bloqueraProducts.filter(
    (product) => product.family === "Pavimentos",
  );
  const catalogSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Catálogo técnico de productos",
    url: absoluteUrl("/catalogo"),
    description:
      "Fichas técnicas, medidas, aplicaciones y normas para premoldeados, pretensados y prefabricados de Cimalco Patagonia.",
    inLanguage: "es-AR",
    about: {
      "@type": "Corporation",
      name: legalName,
    },
    hasPart: catalogSections.map((section) => ({
      "@type": "CollectionPage",
      name: section.title,
      url: absoluteUrl(`/catalogo#${section.id}`),
      description: section.description,
    })),
  };

  const searchItems: CatalogSearchItem[] = [
    ...bloqueraProducts.map((p) => ({
      id: `bloquera-${p.code}`,
      name: p.title,
      code: p.code,
      section: p.family === "Bloquera" ? "Bloquera y mamposteria" : "Pavimentos y adoquines",
      sectionId: "industrializados",
      tags: ["bloque", "adoquin", "pavimento", "mamposteria", "iram", p.family.toLowerCase()],
    })),
    ...revestimientos.map((r) => ({
      id: `rev-${r.title}`,
      name: r.title,
      section: "Protección de erosiones · Bloques HR",
      sectionId: "hr",
      tags: ["hr", "revestimiento", "canal", "hidraulico", "erosion", "maccaferi"],
    })),
    ...premoldeadosTipicos.map((p) => ({
      id: `prem-${p.title}`,
      name: p.title,
      section: "Piezas industriales y camaras",
      sectionId: "premoldeados",
      tags: ["camara", "base", "sleeper", "aib", "premoldeado", "oil", "gas"],
    })),
    {
      id: "pretensados",
      name: "Postes pretensados",
      section: "Líneas eléctricas – Cimalco Energía",
      sectionId: "pretensados",
      tags: ["poste", "pretensado", "at", "mt", "bt", "alta tension", "energia", "linea electrica"],
    },
  ];

  return (
    <div
      className="relative z-10"
      style={{ background: "#fffdf0", minHeight: "100vh" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogSchema) }}
      />
      <SiteHeader />

      <section
        className="relative flex flex-col justify-end overflow-hidden"
        style={{
          minHeight: "calc(100svh - 60px)",
        }}
      >
        <Image
          src="/site-assets/slider3.png"
          alt="Catalogo Cimalco Patagonia"
          fill
          priority
          className="object-cover object-[18%_50%] sm:object-[40%_30%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.45)_48%,rgba(0,0,0,0.88)_100%)]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden items-end justify-end overflow-hidden select-none sm:flex"
        >
          <span
            className="font-display font-bold uppercase"
            style={{
              fontSize: "clamp(6rem,16vw,16rem)",
              color: "rgba(255,255,255,0.05)",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              marginBottom: "-0.1em",
              marginRight: "-0.05em",
            }}
          >
            CATALOGO
          </span>
        </div>

        <div className="relative z-10 px-5 pb-10 pt-24 sm:px-8 sm:pb-12 lg:px-10 lg:pb-16">
          <div className="mx-auto w-full max-w-[1600px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/36">
              Catálogo técnico
            </p>
            <h1 className="mt-2 max-w-[16ch] font-display text-[clamp(2.6rem,5vw,5.2rem)] uppercase leading-[0.92] tracking-[0.04em] text-white">
              Catálogo técnico
              <span className="block text-brand-yellow">
                de productos.
              </span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/58 sm:text-base">
              Consultá fichas técnicas, medidas, aplicaciones, normas y disponibilidad de
              productos para energía, Oil & Gas, construcción e infraestructura.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href="/contacto"
                variant="accent"
                className="gap-2 px-7 py-3.5 text-[11px] tracking-[0.22em]"
              >
                Contactanos
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-10 hidden gap-4 lg:grid lg:grid-cols-4">
              {catalogSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-[26px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm transition hover:border-white/18 hover:bg-white/[0.08]"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
                    Línea
                  </p>
                  <h2 className="mt-2 font-display text-[1.45rem] uppercase leading-none tracking-[0.03em] text-white">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/58">
                    {section.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-[1600px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">

        {/* Search bar */}
        <div className="mb-12">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-black/36">
            Buscador de productos
          </p>
          <div className="max-w-2xl">
            <CatalogSearch items={searchItems} />
          </div>
        </div>

        {/* ── CIMALCO PREMOLDEADOS ── */}
        <div className="mb-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-black/6" />
          <span className="rounded-full bg-[#41b6e1] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#001a24]">
            Cimalco Premoldeados
          </span>
          <div className="h-px flex-1 bg-black/6" />
        </div>

        {/* Bloques y adoquines */}
        <section id="industrializados" className="scroll-mt-28">
          <SectionHeading
            eyebrow="Premoldeados industrializados"
            title="Bloques y adoquines"
            accent="para obra civil y vial."
            description={industrializadosDescription}
            accentColor="#41b6e1"
          />

          <div className="mt-10 space-y-8">
            <SubsectionBlock
              label="Bloquera"
              title="Bloques para mampostería"
              description="Piezas modulares para cerramientos, obra civil y construcción en seco. Variantes técnicas fabricadas bajo norma IRAM."
              accentColor="#41b6e1"
            >
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {bloques.map((product) => (
                  <CatalogProductCard
                    key={product.code}
                    product={product}
                    line="Premoldeados industrializados"
                    accentColor="#41b6e1"
                    accentFg="#001a24"
                  />
                ))}
              </div>
            </SubsectionBlock>

            <SubsectionBlock
              label="Adoquines"
              title="Pavimento articulado"
              description="Adoquines para circulación, veredas y urbanización. Producción en serie con opción de color. Fabricados bajo norma IRAM."
              accentColor="#41b6e1"
            >
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {pavimentos.map((product) => (
                  <CatalogProductCard
                    key={product.code}
                    product={product}
                    line="Premoldeados industrializados"
                    accentColor="#41b6e1"
                    accentFg="#001a24"
                  />
                ))}
              </div>
            </SubsectionBlock>
          </div>
        </section>

        {/* Piezas industriales */}
        <div className="mb-10 mt-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-black/6" />
          <span className="rounded-full border border-[#41b6e1]/40 bg-[#41b6e1]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#0e6a94]">
            Cimalco Premoldeados · Piezas industriales
          </span>
          <div className="h-px flex-1 bg-black/6" />
        </div>

        <section id="oil-gas" className="scroll-mt-28">
          <SectionHeading
            eyebrow="Premoldeados · Oil & Gas"
            title="Premoldeados para Oil & Gas,"
            accent="Vaca Muerta y Patagonia."
            description={premoldeadosDescription}
            accentColor="#41b6e1"
          />

          <div className="mt-10 space-y-8">
            <SubsectionBlock
              label="Piezas a medida"
              title="Industriales y Oil & Gas"
              description="Bases AIB, sleepers, cámaras, fundaciones y piezas bajo plano. Respaldo Ley 3338 para Oil & Gas en Neuquén."
              accentColor="#41b6e1"
            >
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {premoldeadosTipicos.map((item) => (
                  <CatalogPremoldeadoCard key={item.title} item={item} accentColor="#41b6e1" accentFg="#001a24" />
                ))}
              </div>
            </SubsectionBlock>

            <SubsectionBlock
              label="Cámaras"
              title="Cámaras típicas"
              description="Dimensiones estándar de cámaras premoldeadas con tabla de pesos para especificación rápida."
              accentColor="#41b6e1"
            >
              <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
                <article className="overflow-hidden rounded-[32px] border border-black/8 bg-white/84 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
                  <div className="h-[4px]" style={{ backgroundColor: "#41b6e1" }} />
                  <div className="p-6 lg:p-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/34">
                      Explicación de tamaños
                    </p>
                    <LightboxImage
                      src="/catalogo-2025/premoldeados/explicacion-tamanos.png"
                      alt="Explicación de tamaños de premoldeados"
                      containerClassName="mt-5 h-[420px] overflow-hidden rounded-[26px] border border-black/6 bg-[linear-gradient(180deg,#fbfaf6_0%,#efe7d7_100%)]"
                      imageClassName="object-contain p-6"
                    />
                    <div className="mt-5">
                      <Button
                        href={buildWhatsAppHref("Cámaras premoldeadas")}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="accent"
                        className="w-full gap-2 px-5 py-3 text-[10px] tracking-[0.2em]"
                        style={{ backgroundColor: "#41b6e1", color: "#001a24" }}
                      >
                        Contactanos por esta linea
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </article>

                <article className="overflow-hidden rounded-[32px] border border-black/8 bg-white/84 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
                  <div className="h-[4px]" style={{ backgroundColor: "#41b6e1" }} />
                  <div className="p-6 lg:p-7">
                    <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/34">
                          Camaras tipicas
                        </p>
                        <h3 className="mt-2 font-display text-[clamp(1.5rem,3vw,2.6rem)] uppercase leading-[0.96] tracking-[0.03em] text-brand-charcoal">
                          Dimensiones y peso
                        </h3>
                      </div>
                      <p className="text-sm leading-6 text-black/46">
                        Valores externos, internos y espesor segun la tabla entregada.
                      </p>
                    </div>

                    <div className="mt-6 overflow-x-auto rounded-[24px] border border-black/8">
                      <table className="min-w-[860px] w-full border-collapse text-left">
                        <thead className="bg-black/[0.03]">
                          <tr>
                            {["Camara","A ext.","B ext.","C ext.","a int.","b int.","e","Peso"].map((header) => (
                              <th key={header} className="px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-black/42">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {camarasTipicas.map((item) => (
                            <tr key={item.camara} className="border-t border-black/6">
                              <td className="px-4 py-3 text-sm font-semibold text-brand-charcoal">{item.camara}</td>
                              <td className="px-4 py-3 text-sm text-black/62">{item.aExterior}</td>
                              <td className="px-4 py-3 text-sm text-black/62">{item.bExterior}</td>
                              <td className="px-4 py-3 text-sm text-black/62">{item.cExterior}</td>
                              <td className="px-4 py-3 text-sm text-black/62">{item.aInterior}</td>
                              <td className="px-4 py-3 text-sm text-black/62">{item.bInterior}</td>
                              <td className="px-4 py-3 text-sm text-black/62">{item.espesor}</td>
                              <td className="px-4 py-3 text-sm text-black/62">{item.peso}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </article>
              </div>
            </SubsectionBlock>
          </div>
        </section>

        {/* ── PROTECCIÓN DE EROSIONES ── */}
        <div className="mb-10 mt-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-black/6" />
          <span className="rounded-full border border-[#41b6e1]/40 bg-[#41b6e1]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#0e6a94]">
            Cimalco Premoldeados · Protección de erosiones
          </span>
          <div className="h-px flex-1 bg-black/6" />
        </div>

        <section id="hr" className="scroll-mt-28">
          <SectionHeading
            eyebrow="Sistema HR · Bloques para canales y taludes"
            title="Protección de erosiones"
            accent="con Bloques HR."
            description="Bloques de hormigón para revestimiento de canales aluvionales, taludes, ductos y obras hidráulicas. Alternativa durable frente a enrocados, gaviones y sistemas Maccaferri."
            accentColor="#41b6e1"
          />

          <div className="mt-10">
            <SubsectionBlock
              label="Sistema HR"
              title="Bloques HR y losetas"
              description="Piezas para revestimiento de obras hidráulicas e infraestructura vial. Consultar disponibilidad según modelo y cantidad."
              accentColor="#41b6e1"
            >
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {revestimientos.map((item) => (
                  <CatalogRevestimientoCard key={item.title} item={item} />
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/soluciones/proteccion-de-erosiones"
                  className="inline-flex items-center gap-2 rounded-full border border-[#41b6e1]/50 bg-[#41b6e1]/8 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0e6a94] transition hover:bg-[#41b6e1]/14"
                >
                  Ver página de solución HR
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href="/contacto?line=Premoldeados&group=Sistema+HR&item=Consulta+bloques+HR"
                  className="inline-flex items-center gap-2 rounded-full bg-[#41b6e1] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#001a24] transition hover:opacity-90"
                >
                  Consultar sistema HR
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </SubsectionBlock>
          </div>
        </section>

        {/* ── CIMALCO ENERGÍA ── */}
        <div className="mb-10 mt-20 flex items-center gap-4">
          <div className="h-px flex-1 bg-black/6" />
          <span className="rounded-full bg-[#c9f442] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#0f1a00]">
            Cimalco Energía
          </span>
          <div className="h-px flex-1 bg-black/6" />
        </div>

        <section id="pretensados" className="scroll-mt-28">
          <SectionHeading
            eyebrow="Pretensados · Líneas eléctricas"
            title="Postes pretensados"
            accent="para tendidos eléctricos."
            description={pretensadosDescription}
            accentColor="#c9f442"
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-[0.86fr_1.14fr]">
            <article className="overflow-hidden rounded-[32px] border border-black/8 bg-white/84 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
              <div className="h-[4px]" style={{ backgroundColor: "#c9f442" }} />
              <div className="p-6 lg:p-7">
                <LightboxImage
                  src="/catalogo-2025/pretensados/pretrensado.jpeg"
                  alt="Pretensados Cimalco Patagonia"
                  containerClassName="h-[320px] overflow-hidden rounded-[26px] border border-black/6 bg-[linear-gradient(180deg,#f8f6ef_0%,#ece6d8_100%)]"
                  imageClassName="object-cover"
                />
                <p className="mt-5 text-sm leading-7 text-black/56">
                  La linea de pretensados esta orientada a baja, media y alta
                  tension, con piezas para infraestructura electrica y control
                  tecnico en fabrica.
                </p>
                <p className="mt-4 text-xs leading-6 text-black/42">
                  {pretensadosNote}
                </p>
                <div className="mt-6">
                  <Button
                    href={buildWhatsAppHref("Postes pretensados")}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="accent"
                    className="gap-2 px-6 py-3 text-[11px] tracking-[0.2em]"
                    style={{ backgroundColor: "#c9f442", color: "#0f1a00" }}
                  >
                    Contactanos por pretensados
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </article>

            <article className="overflow-hidden rounded-[32px] border border-black/8 bg-white/84 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
              <div className="h-[4px]" style={{ backgroundColor: "#c9f442" }} />
              <div className="p-6 lg:p-7">
                <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/34">
                      Columnas, pesos y medidas
                    </p>
                    <h3 className="mt-2 font-display text-[clamp(1.5rem,3vw,2.6rem)] uppercase leading-[0.96] tracking-[0.03em] text-brand-charcoal">
                      Tabla técnica
                    </h3>
                  </div>
                  <p className="text-sm leading-6 text-black/46">
                    Valores de referencia en kg según longitud y carga límite.
                  </p>
                </div>

                <div className="mt-6 max-h-[560px] overflow-auto rounded-[24px] border border-black/8">
                  <table className="min-w-[1100px] border-collapse text-left">
                    <thead className="bg-black/[0.03]">
                      <tr>
                        <th className="sticky left-0 top-0 z-20 border-r border-black/8 bg-[#f2efe7] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-black/42">
                          L (m)
                        </th>
                        {pretensadosColumns.map((column, index) => (
                          <th key={`${column.load}-${column.diameter}-${index}`} className="sticky top-0 z-10 bg-[#f2efe7] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-black/42">
                            {column.load}
                          </th>
                        ))}
                      </tr>
                      <tr className="border-t border-black/6 bg-white/55">
                        <th className="sticky left-0 top-[40px] z-20 border-r border-black/8 bg-[#faf7ef] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-black/42">
                          Diametro (cm)
                        </th>
                        {pretensadosColumns.map((column, index) => (
                          <th key={`${column.diameter}-${column.load}-${index}`} className="sticky top-[40px] z-10 bg-[#faf7ef] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-black/42">
                            {column.diameter}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {pretensadosRows.map((row) => (
                        <tr key={row.length} className="border-t border-black/6">
                          <td className="sticky left-0 z-10 border-r border-black/8 bg-[#fffdf5] px-4 py-3 text-sm font-semibold text-brand-charcoal">
                            {row.length}
                          </td>
                          {row.values.map((value, index) => (
                            <td key={`${row.length}-${index}`} className="px-4 py-3 text-sm text-black/62">
                              {value || "-"}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
