import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { absoluteUrl, createPageMetadata, legalName } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contacto comercial",
  description:
    "Contactate con Cimalco Patagonia por premoldeados, postes pretensados, adoquines y proyectos especiales en Neuquén y Patagonia.",
  path: "/contacto",
  keywords: [
    "contacto Cimalco",
    "consultas premoldeados",
    "contacto adoquines Neuquén",
    "contacto postes de hormigón",
  ],
});

type ContactoPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function resolveSearchParam(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}


export default async function ContactoPage({ searchParams }: ContactoPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const prefill = {
    line:    resolveSearchParam(resolvedSearchParams.line),
    group:   resolveSearchParam(resolvedSearchParams.group),
    item:    resolveSearchParam(resolvedSearchParams.item),
    message: resolveSearchParam(resolvedSearchParams.message),
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contacto comercial Cimalco",
    url: absoluteUrl("/contacto"),
    description:
      "Canal de contacto comercial para consultas por premoldeados, pretensados y proyectos especiales en Patagonia.",
    inLanguage: "es-AR",
    about: { "@type": "Corporation", name: legalName },
  };

  return (
    <div className="relative z-10" style={{ background: "#fffdf0" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <SiteHeader />

      <div className="grid lg:min-h-[calc(100svh-60px)] lg:grid-cols-2">

        {/* ── Left: Photo + copy ── */}
        <div className="relative hidden overflow-hidden lg:block">
          <Image
            src="/foto contacto.png"
            alt="Premoldeados de hormigón Cimalco Patagonia"
            fill
            className="object-cover object-center"
            sizes="50vw"
            priority
          />

          {/* Gradient — stronger left + bottom coverage */}
          <div className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.18) 100%)",
            }}
          />
          {/* Bottom fade for stats */}
          <div className="absolute inset-x-0 bottom-0 h-48"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.80) 0%, transparent 100%)" }}
          />

          {/* ── TOP: eyebrow + headline + description ── */}
          <div className="absolute left-0 right-0 top-0 p-10 xl:p-14">
            {/* Accent bar */}
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-8 bg-brand-yellow" />
              <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-white/50">
                Contacto comercial
              </p>
            </div>

            <h1 className="font-display text-[clamp(2.8rem,4.5vw,5.2rem)] uppercase leading-[0.88] tracking-[0.02em] text-white">
              Hablemos de
              <span className="block" style={{ color: "#ffd239" }}>tu proyecto.</span>
            </h1>

            <p className="mt-6 max-w-[380px] text-[14px] leading-[1.8] text-white/55">
              Te atendemos desde fábrica. Respuesta directa y soporte
              para obras de cualquier escala en Patagonia.
            </p>
          </div>

          {/* ── BOTTOM: stats row ── */}
          <div className="absolute inset-x-0 bottom-0 px-10 pb-10 xl:px-14 xl:pb-12">
            <div className="mb-6 h-px w-full" style={{ background: "rgba(255,255,255,0.12)" }} />
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "60+", label: "Años fabricando" },
                { value: "26.000 m²", label: "Planta Neuquén" },
                { value: "Directa", label: "Atención desde planta" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-display text-[1.5rem] uppercase leading-none tracking-tight text-white">
                    {s.value}
                  </p>
                  <p className="mt-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/38">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>


        {/* ── Right: Form panel ── */}
        <div
          className="flex items-start justify-center px-5 py-6 sm:items-center sm:px-8 sm:py-8 lg:px-10 lg:py-10"
          style={{
            background: "#fffdf0",
            backgroundImage:
              "repeating-linear-gradient(-45deg, transparent 0px, transparent 20px, rgba(0,0,0,0.017) 20px, rgba(0,0,0,0.017) 21px)",
          }}
        >
          <div className="w-full max-w-lg">

            {/* Header above form */}
            <div className="mb-5">
              <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-black/32">
                Formulario de consulta técnica
              </p>
              <h2 className="mt-1.5 font-display text-[clamp(1.4rem,2vw,1.95rem)] uppercase leading-tight tracking-[0.03em] text-brand-charcoal">
                Completá tus datos.
              </h2>
              <p className="mt-1.5 text-[12.5px] leading-6 text-black/46">
                Te respondemos en menos de 24 hs directamente desde la planta.
              </p>

              <div className="mt-4 h-px bg-black/[0.08]" />
            </div>

            <ContactForm prefill={prefill} />
          </div>
        </div>

      </div>

      <SiteFooter hideCta />
    </div>
  );
}
