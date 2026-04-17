import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { ArrowRight, Download } from "lucide-react";
import { CatalogProductCard } from "@/components/catalog-product-card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import {
  bloqueraProducts,
  camarasTipicas,
  catalogDownloadHref,
  catalogSections,
  industrializadosDescription,
  premoldeadosDescription,
  premoldeadosTipicos,
  pretensadosColumns,
  pretensadosDescription,
  pretensadosNote,
  pretensadosRows,
  revestimientos,
  type Revestimiento,
} from "@/data/catalogo-2025";
import { buildContactHref } from "@/lib/contact-prefill";

export const metadata: Metadata = {
  title: "Catalogo 2025 - Cimalco Patagonia",
  description:
    "Catalogo 2025 de Cimalco Patagonia con premoldeados industrializados, pretensados y premoldeados tipicos.",
};

function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-black/34">
          {eyebrow}
        </p>
        <h2 className="mt-2 font-display text-[clamp(2rem,4vw,3.8rem)] uppercase leading-[0.94] tracking-[0.04em] text-brand-charcoal">
          {title}
          <span className="block text-brand-yellow">{accent}</span>
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
  children,
}: {
  label: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <article className="rounded-[34px] border border-black/8 bg-white/72 p-6 shadow-[0_16px_42px_rgba(0,0,0,0.05)] sm:p-7 lg:p-8">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/34">
            {label}
          </p>
          <h3 className="mt-2 font-display text-[clamp(1.6rem,3vw,2.6rem)] uppercase leading-[0.96] tracking-[0.03em] text-brand-charcoal">
            {title}
          </h3>
        </div>
        <p className="max-w-xl text-sm leading-7 text-black/54">{description}</p>
      </div>

      <div className="mt-7">{children}</div>
    </article>
  );
}

function RevestimientoCard({ item }: { item: Revestimiento }) {
  const contactHref = buildContactHref({
    line: "Premoldeados industrializados",
    group: "Revestimientos",
    item: item.title,
  });

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-black/8 bg-white/84 shadow-[0_14px_36px_rgba(0,0,0,0.05)]">
      <div className="h-[4px] bg-brand-yellow" />
      <div className="flex h-full flex-col p-5 lg:p-6">
        <h3 className="min-h-[64px] font-display text-[clamp(1.35rem,2vw,2rem)] uppercase tracking-[0.03em] text-brand-charcoal">
          {item.title}
        </h3>
        <div className="relative mt-5 h-[240px] overflow-hidden rounded-[24px] border border-black/6 bg-[linear-gradient(180deg,#ffffff_0%,#f5f2e8_100%)]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain p-4"
          />
        </div>
        <div className="mt-5 grid grid-cols-2 gap-2">
          {item.metrics.map((metric) => (
            <div
              key={`${item.title}-${metric.label}`}
              className="rounded-[16px] border border-black/6 bg-black/[0.03] px-3 py-3"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/34">
                {metric.label}
              </p>
              <p className="mt-1 text-[13px] leading-5 text-black/72">{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-5">
          <Button
            href={contactHref}
            variant="accent"
            className="w-full gap-2 px-5 py-3 text-[10px] tracking-[0.2em]"
          >
            Contactanos por este producto
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}

export default function CatalogoPage() {
  const bloques = bloqueraProducts.filter((product) => product.family === "Bloquera");
  const pavimentos = bloqueraProducts.filter((product) => product.family === "Pavimentos");

  return (
    <div className="relative z-10" style={{ background: "#fffdf0", minHeight: "100vh" }}>
      <SiteHeader />

      <section
        className="relative flex flex-col justify-center overflow-hidden"
        style={{
          height: "calc(100vh - 64px)",
          borderBottom: "3px solid #ffd239",
          backgroundImage: "url('/site-assets/slider3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.55)_48%,rgba(0,0,0,0.88)_100%)]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-end justify-end overflow-hidden select-none"
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

        <div className="relative z-10 px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto w-full max-w-[1600px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/36">
              Catalogo 2025
            </p>
            <h1 className="mt-2 max-w-[12ch] font-display text-[clamp(2.6rem,5vw,5.2rem)] uppercase leading-[0.92] tracking-[0.04em] text-white">
              Tres lineas para
              <span className="block text-brand-yellow">resolver proyecto.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/58 sm:text-base">
              Premoldeados industrializados, pretensados y premoldeados tipicos
              reunidos en un solo catalogo, con fichas tecnicas, imagenes y
              acceso al PDF 2025.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={catalogDownloadHref}
                target="_blank"
                rel="noreferrer"
                variant="accent"
                className="gap-2 px-7 py-3.5 text-[11px] tracking-[0.22em]"
              >
                <Download className="h-4 w-4" />
                Descargar PDF 2025
              </Button>
              <Button
                href="/contacto"
                variant="outline"
                className="gap-2 border-white/20 px-7 py-3.5 text-[11px] tracking-[0.22em] text-white/70 hover:border-white/50 hover:text-white"
              >
                Contactanos
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {catalogSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="rounded-[26px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm transition hover:border-white/18 hover:bg-white/[0.08]"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
                    Linea
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
        <section id="industrializados" className="scroll-mt-28">
          <SectionHeading
            eyebrow="Premoldeados industrializados"
            title="Bloques, adoquines"
            accent="y revestimientos."
            description={industrializadosDescription}
          />

          <div className="mt-10 space-y-8">
            <SubsectionBlock
              label="Sublinea 01"
              title="Bloquera y pavimentos"
              description="Piezas modulares para mamposteria, circulacion peatonal y superficies de alto transito, con variantes tecnicas y opciones de color."
            >
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-[3px] w-10 rounded-full bg-brand-yellow" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/40">
                    Productos bloquera
                  </p>
                </div>
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {bloques.map((product) => (
                    <CatalogProductCard
                      key={product.code}
                      product={product}
                      line="Premoldeados industrializados"
                    />
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <div className="mb-5 flex items-center gap-3">
                  <div className="h-[3px] w-10 rounded-full bg-brand-yellow" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/40">
                    Pavimentos con opcion color
                  </p>
                </div>
                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {pavimentos.map((product) => (
                    <CatalogProductCard
                      key={product.code}
                      product={product}
                      line="Premoldeados industrializados"
                    />
                  ))}
                </div>
              </div>
            </SubsectionBlock>

            <SubsectionBlock
              label="Sublinea 02"
              title="Revestimientos"
              description="Soluciones para canales aluvionales y obras hidraulicas, con fichas tecnicas diferenciadas para cada geometria de pieza."
            >
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {revestimientos.map((item) => (
                  <RevestimientoCard key={item.title} item={item} />
                ))}
              </div>
            </SubsectionBlock>
          </div>
        </section>

        <section id="pretensados" className="mt-16 scroll-mt-28">
          <SectionHeading
            eyebrow="Pretensados"
            title="Columnas y piezas"
            accent="para tendidos electricos."
            description={pretensadosDescription}
          />

          <div className="mt-10 grid gap-6 xl:grid-cols-[0.86fr_1.14fr]">
            <article className="overflow-hidden rounded-[32px] border border-black/8 bg-white/84 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
              <div className="h-[4px] bg-brand-yellow" />
              <div className="p-6 lg:p-7">
                <div className="relative h-[320px] overflow-hidden rounded-[26px] border border-black/6 bg-[linear-gradient(180deg,#f8f6ef_0%,#ece6d8_100%)]">
                  <Image
                    src="/catalogo-2025/pretensados/pretrensado.jpeg"
                    alt="Pretensados Cimalco Patagonia"
                    fill
                    className="object-cover"
                  />
                </div>
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
                    href={buildContactHref({
                      line: "Pretensados",
                      group: "Columnas y piezas especiales",
                      item: "Consulta por pretensados",
                    })}
                    variant="accent"
                    className="gap-2 px-6 py-3 text-[11px] tracking-[0.2em]"
                  >
                    Contactanos por pretensados
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </article>

            <article className="overflow-hidden rounded-[32px] border border-black/8 bg-white/84 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
              <div className="h-[4px] bg-brand-yellow" />
              <div className="p-6 lg:p-7">
                <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/34">
                      Columnas, pesos y medidas
                    </p>
                    <h3 className="mt-2 font-display text-[clamp(1.5rem,3vw,2.6rem)] uppercase leading-[0.96] tracking-[0.03em] text-brand-charcoal">
                      Tabla tecnica
                    </h3>
                  </div>
                  <p className="text-sm leading-6 text-black/46">
                    Valores de referencia en kg segun longitud y carga limite.
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
                          <th
                            key={`${column.load}-${column.diameter}-${index}`}
                            className="sticky top-0 z-10 bg-[#f2efe7] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-black/42"
                          >
                            {column.load}
                          </th>
                        ))}
                      </tr>
                      <tr className="border-t border-black/6 bg-white/55">
                        <th className="sticky left-0 top-[40px] z-20 border-r border-black/8 bg-[#faf7ef] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-black/42">
                          Diametro (cm)
                        </th>
                        {pretensadosColumns.map((column, index) => (
                          <th
                            key={`${column.diameter}-${column.load}-${index}`}
                            className="sticky top-[40px] z-10 bg-[#faf7ef] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-black/42"
                          >
                            {column.diameter}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {pretensadosRows.map((row) => (
                        <tr
                          key={row.length}
                          className="border-t border-black/6"
                        >
                          <td className="sticky left-0 z-10 border-r border-black/8 bg-[#fffdf5] px-4 py-3 text-sm font-semibold text-brand-charcoal">
                            {row.length}
                          </td>
                          {row.values.map((value, index) => (
                            <td
                              key={`${row.length}-${index}`}
                              className="px-4 py-3 text-sm text-black/62"
                            >
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

        <section id="premoldeados" className="mt-16 scroll-mt-28">
          <SectionHeading
            eyebrow="Premoldeados"
            title="Bases, bodegas"
            accent="y camaras tipicas."
            description={premoldeadosDescription}
          />

          <div className="mt-10 space-y-8">
            <SubsectionBlock
              label="Sublinea 01"
              title="Piezas y premoldeados tipicos"
              description="Elementos premoldeados de uso frecuente para obra e infraestructura, con una lectura mucho mas clara por pieza y acceso directo a contacto."
            >
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {premoldeadosTipicos.map((item) => (
                  <article
                    key={item.title}
                    className="flex h-full flex-col overflow-hidden rounded-[24px] border border-black/8 bg-[#f7f2e7]"
                  >
                    <div className="relative h-[180px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain p-5"
                      />
                    </div>
                    <div className="flex h-full flex-col border-t border-black/6 px-4 py-4">
                      <p className="font-display text-[1.05rem] uppercase tracking-[0.03em] text-brand-charcoal">
                        {item.title}
                      </p>
                      <div className="mt-auto pt-4">
                        <Button
                          href={buildContactHref({
                            line: "Premoldeados",
                            group: "Premoldeados tipicos",
                            item: item.title,
                          })}
                          variant="accent"
                          className="w-full gap-2 px-5 py-3 text-[10px] tracking-[0.2em]"
                        >
                          Contactanos por esta pieza
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </SubsectionBlock>

            <SubsectionBlock
              label="Sublinea 02"
              title="Camaras y guia dimensional"
              description="Tabla de camaras tipicas y apoyo visual de tamanos para que la linea de premoldeados se entienda mucho mas rapido."
            >
              <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
                <article className="overflow-hidden rounded-[32px] border border-black/8 bg-white/84 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
                  <div className="h-[4px] bg-brand-yellow" />
                  <div className="p-6 lg:p-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/34">
                      Explicacion de tamanos
                    </p>
                    <div className="relative mt-5 h-[420px] overflow-hidden rounded-[26px] border border-black/6 bg-[linear-gradient(180deg,#fbfaf6_0%,#efe7d7_100%)]">
                      <Image
                        src="/catalogo-2025/premoldeados/explicacion-tamanos.png"
                        alt="Explicacion de tamanos de premoldeados"
                        fill
                        className="object-contain p-6"
                      />
                    </div>
                    <div className="mt-5">
                      <Button
                        href={buildContactHref({
                          line: "Premoldeados",
                          group: "Camaras y dimensiones",
                          item: "Consulta por camaras tipicas",
                        })}
                        variant="accent"
                        className="w-full gap-2 px-5 py-3 text-[10px] tracking-[0.2em]"
                      >
                        Contactanos por esta linea
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </article>

                <article className="overflow-hidden rounded-[32px] border border-black/8 bg-white/84 shadow-[0_16px_40px_rgba(0,0,0,0.06)]">
                  <div className="h-[4px] bg-brand-yellow" />
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
                            {[
                              "Camara",
                              "A ext.",
                              "B ext.",
                              "C ext.",
                              "a int.",
                              "b int.",
                              "e",
                              "Peso",
                            ].map((header) => (
                              <th
                                key={header}
                                className="px-4 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-black/42"
                              >
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {camarasTipicas.map((item) => (
                            <tr key={item.camara} className="border-t border-black/6">
                              <td className="px-4 py-3 text-sm font-semibold text-brand-charcoal">
                                {item.camara}
                              </td>
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
      </main>

      <div
        className="relative"
        style={{ borderTop: "1px solid rgba(0,0,0,0.08)", background: "#111009" }}
      >
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-5 px-5 py-14 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/36">
              Contacto
            </p>
            <p className="mt-1 font-display text-[clamp(1.6rem,3vw,2.4rem)] uppercase leading-tight tracking-[0.04em] text-white">
              Necesitas una ficha puntual o asistencia comercial.
            </p>
          </div>
          <Button
            href="/contacto"
            variant="accent"
            className="w-fit flex-shrink-0 gap-2 px-7 py-3.5 text-[11px] tracking-[0.22em]"
          >
            Contactanos
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}

