import type { Metadata } from "next";
import Image from "next/image";
import { Building2, Clock3, ShieldCheck, Zap } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { absoluteUrl, createPageMetadata, legalName } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contacto comercial",
  description:
    "Contactate con Cimalco Patagonia por premoldeados, postes pretensados, adoquines y proyectos especiales en Neuquen y Patagonia.",
  path: "/contacto",
  image: "/foto contacto.png",
  keywords: [
    "contacto Cimalco",
    "consultas premoldeados",
    "contacto adoquines Neuquen",
    "contacto postes de hormigon",
  ],
});

type ContactoPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function resolveSearchParam(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

const trustItems = [
  {
    icon: Clock3,
    label: "Respuesta comercial",
    value: "Menos de 24 hs desde la planta",
  },
  {
    icon: Building2,
    label: "Planta propia",
    value: "Parque Industrial Neuquen Oeste",
  },
  {
    icon: ShieldCheck,
    label: "Control de calidad",
    value: "Fabricacion con referencia IRAM",
  },
  {
    icon: Zap,
    label: "Venta directa",
    value: "Sin intermediarios, desde fabrica",
  },
];

const tipItems = [
  {
    num: "01",
    title: "Tipo de obra",
    body: "Vial, industrial, energetica, Oil & Gas o urbanizacion.",
  },
  {
    num: "02",
    title: "Volumen estimado",
    body: "Aunque sea aproximado - ayuda a dimensionar la propuesta.",
  },
  {
    num: "03",
    title: "Zona de entrega",
    body: "Trabajamos Patagonia norte con logistica propia.",
  },
  {
    num: "04",
    title: "Linea de interes",
    body: "Piezas industriales, Bloques HR, adoquines, bloques o postes pretensados.",
  },
];

export default async function ContactoPage({
  searchParams,
}: ContactoPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const prefill = {
    line: resolveSearchParam(resolvedSearchParams.line),
    group: resolveSearchParam(resolvedSearchParams.group),
    item: resolveSearchParam(resolvedSearchParams.item),
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
    about: {
      "@type": "Corporation",
      name: legalName,
    },
  };

  return (
    <div
      className="relative z-10"
      style={{ background: "#fffdf0", minHeight: "100vh" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <SiteHeader />

      <section
        className="relative flex flex-col justify-center overflow-hidden"
        style={{
          minHeight: "calc(100svh - 60px)",
        }}
      >
        <Image
          src="/foto contacto.png"
          alt="Contacto Cimalco Patagonia"
          fill
          priority
          className="object-cover object-[72%_30%] sm:object-[center_30%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.5)_50%,rgba(0,0,0,0.88)_100%)]" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-end justify-end overflow-hidden select-none"
        >
          <span
            className="font-display font-bold uppercase"
            style={{
              fontSize: "clamp(5rem,14vw,14rem)",
              color: "rgba(255,255,255,0.05)",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              marginBottom: "-0.1em",
              marginRight: "-0.05em",
            }}
          >
            CONTACTO
          </span>
        </div>
        <div className="relative z-10 px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto w-full max-w-[1600px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/36">
              Contacto comercial
            </p>
            <h1 className="mt-2 max-w-[14ch] font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.92] tracking-[0.04em] text-white">
              Hablemos de
              <span className="block text-brand-yellow">tu proyecto.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/58 sm:text-base">
              Te atendemos desde fabrica. Respuesta comercial directa y soporte
              para obras de cualquier escala en Patagonia.
            </p>
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-[1600px] px-4 py-6 sm:px-8 sm:py-12 lg:px-10 lg:py-20">
        <div className="mb-5 sm:mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/36">
            Contacto comercial
          </p>
          <h2 className="mt-2 font-display text-[clamp(1.6rem,4vw,3.8rem)] uppercase leading-[0.9] tracking-[0.04em] text-brand-charcoal">
            Contanos que necesita
            <span className="block text-brand-yellow">tu obra.</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-black/48 sm:text-base">
            Completa el formulario y te respondemos en menos de 24 hs desde la
            planta.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_2fr_1fr]">
          <div className="hidden xl:flex flex-col gap-3">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.28em] text-black/34">
              Por que elegirnos
            </p>
            {trustItems.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-[18px] border border-black/8 bg-white/80 p-4 shadow-[0_6px_18px_rgba(0,0,0,0.04)]"
              >
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-xl bg-brand-yellow/16">
                  <Icon className="h-4 w-4 text-brand-charcoal" />
                </div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/34">
                  {label}
                </p>
                <p className="mt-1 text-xs leading-5 text-black/58">{value}</p>
              </div>
            ))}
          </div>

          <ContactForm prefill={prefill} />

          <div className="hidden xl:flex flex-col gap-3">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.28em] text-black/34">
              Para completar mejor
            </p>
            {tipItems.map(({ num, title, body }) => (
              <div
                key={num}
                className="rounded-[18px] border border-black/8 bg-white/80 p-4 shadow-[0_6px_18px_rgba(0,0,0,0.04)]"
              >
                <span className="font-display text-[1.8rem] leading-none text-black/10">
                  {num}
                </span>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-black/36">
                  {title}
                </p>
                <p className="mt-1 text-xs leading-5 text-black/52">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
