import type { Metadata } from "next";
import { ArrowRight, Factory, ShieldCheck, Zap, Ruler } from "lucide-react";
import Image from "next/image";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { VerticalSections } from "@/components/vertical-sections";
import { createPageMetadata, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Cimalco Patagonia — Premoldeados y pretensados de hormigón en Neuquén",
  description:
    "Más de seis décadas fabricando en Patagonia. Planta propia de 26.000 m² en Neuquén. Energía, Oil & Gas y Prefabricados de hormigón. Venta directa desde planta.",
  path: "/cimalco",
  keywords: [
    "Cimalco Patagonia",
    "premoldeados hormigón Neuquén",
    "postes pretensados Patagonia",
    "planta industrial Neuquén",
    "Oil Gas Vaca Muerta prefabricados",
    "adoquines bloques Neuquén",
  ],
});

const metrics = [
  { value: "60+", label: "Años de trayectoria" },
  { value: "26.000 m²", label: "Planta industrial" },
  { value: "IRAM", label: "Bloques y adoquines" },
  { value: "Ley 3338", label: "Para Oil & Gas" },
];


const certificaciones = [
  {
    accent: "#c9f442",
    accentFg: "#1a2a00",
    icon: ShieldCheck,
    tag: "Empresa Neuquina · Ley 3338",
    titulo: "Habilitada para Oil & Gas",
    descripcion:
      "Cumple con requisitos provinciales de Neuquén para proyectos petroleros y pliegos que exigen empresa neuquina.",
  },
  {
    accent: "#ffd239",
    accentFg: "#1a1000",
    icon: ShieldCheck,
    tag: "Norma IRAM",
    titulo: "Bloques y adoquines certificados",
    descripcion:
      "Fabricación bajo normativa IRAM vigente. Referencia para licitaciones, obra pública y privada.",
  },
  {
    accent: "#41b6e1",
    accentFg: "#001a24",
    icon: Factory,
    tag: "Control técnico en planta",
    titulo: "Producción estandarizada",
    descripcion:
      "Control técnico interno en cada etapa del proceso. Consistencia dimensional y resistencia garantizada.",
  },
];

export default function CimalcoPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Cimalco Patagonia",
    url: absoluteUrl("/cimalco"),
    about: {
      "@type": "Corporation",
      name: "Cimalco Neuquén S.A.",
      alternateName: "Cimalco Patagonia",
      description:
        "Fabricante de premoldeados y pretensados de hormigón en Neuquén, Patagonia.",
    },
  };

  return (
    <main className="relative min-h-screen" style={{ background: "#fffdf0" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteHeader />

      {/* ── HERO ── */}
      <section
        className="relative flex flex-col justify-end overflow-hidden"
        style={{ minHeight: "calc(100svh - 60px)" }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/site-assets/premoldeados-de-hormigon.jpg"
          className="absolute inset-0 h-full w-full object-cover object-[72%_center] sm:object-center"
        >
          <source src="/VideoHero.mp4" type="video/mp4" />
          <Image
            src="/site-assets/premoldeados-de-hormigon.jpg"
            alt="Planta Cimalco Patagonia"
            fill
            priority
            className="object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.48)_0%,rgba(0,0,0,0.42)_32%,rgba(0,0,0,0.84)_100%)]" />

        <div className="relative z-10 w-full px-5 pb-20 pt-0 sm:px-8 sm:pb-24 lg:px-10 lg:pb-32">
          <div className="mx-auto w-full max-w-[1600px]">
            <div className="max-w-[820px]">
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/56 sm:text-xs">
                Cimalco Patagonia · Más de seis décadas fabricando en Patagonia
              </p>
              <h1 className="mt-3 font-display text-[clamp(2rem,4.8vw,5rem)] uppercase leading-[0.92] tracking-[0.02em] text-white">
                Premoldeados, pretensados
                <br className="hidden sm:block" />
                {" "}e industrializados en serie.
              </h1>
              <p className="mt-3 max-w-[32ch] font-display text-[clamp(1.05rem,2.2vw,1.7rem)] uppercase leading-[1.1] tracking-[0.08em] text-brand-yellow">
                Para obras que perduran en Patagonia
              </p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
                Fabricamos postes pretensados, premoldeados para Oil & Gas, bloques,
                adoquines y soluciones de hormigón a medida desde nuestra planta
                industrial en Neuquén.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/contacto"
                  className="inline-flex items-center gap-2.5 rounded-full bg-brand-yellow px-8 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#1a1000] transition hover:-translate-y-px"
                >
                  Solicitar consulta técnica
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:max-w-[620px] sm:grid-cols-4">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-sm"
                >
                  <p className="font-display text-3xl uppercase leading-none tracking-[0.05em] text-white">
                    {m.value}
                  </p>
                  <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-white/48">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUCIONES ── */}
      <div style={{ background: "#fffdf0" }}>
        <VerticalSections />
      </div>

      {/* ── TRAYECTORIA ── */}
      <section
        id="empresa"
        className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
        style={{ background: "#fffdf0" }}
      >
        <div className="mx-auto w-full max-w-[1600px]">
          <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.28em] text-black/35">
            Cimalco · La empresa
          </p>

          <div className="grid gap-3 lg:grid-cols-2">
            {/* Narrativa */}
            <div className="flex min-h-[300px] flex-col justify-between rounded-[24px] bg-[#111009] p-8 lg:p-10">
              <div className="h-px w-10 bg-brand-yellow" />
              <div>
                <h2 className="font-display text-[clamp(1.7rem,3vw,2.8rem)] uppercase leading-[1.04] tracking-[0.02em] text-white">
                  De Cimalco Neuquén<br />a Cimalco Patagonia.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-white/50">
                  Con más de seis décadas de trayectoria, Cimalco renueva su identidad para
                  reflejar el alcance real de su operación en toda la región. Misma base
                  industrial, mismo equipo, mayor presencia.
                </p>
              </div>
            </div>

            {/* La empresa hoy */}
            <div className="rounded-[24px] p-8 lg:p-10" style={{ background: "#eee9db" }}>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.28em] text-black/34">
                La empresa hoy
              </p>
              <ul className="space-y-4">
                {[
                  "Planta propia de 26.000 m² en Neuquén",
                  "Dos verticales: Energía y Prefabricados",
                  "Única planta patagónica para postes AT",
                  "Cobertura desde Neuquén hasta Tierra del Fuego",
                  "Fabricación directa sin intermediarios",
                  "Venta directa desde planta",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-black/60">
                    <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-yellow" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAPACIDADES + RESPALDO ── */}
      <section
        id="planta"
        className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
        style={{ background: "#eee9db" }}
      >
        <div className="mx-auto w-full max-w-[1600px]">

          {/* Capacidad productiva */}
          <div className="mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/38">
              Capacidad productiva
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.7rem,3vw,2.8rem)] uppercase leading-tight tracking-[0.03em] text-brand-charcoal">
              Planta industrial<br />en Neuquén.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: Factory,
                titulo: "Planta industrial propia",
                descripcion: "26.000 m² en el Parque Industrial Neuquén Oeste. Producción continua.",
              },
              {
                icon: Zap,
                titulo: "Única planta AT en Patagonia",
                descripcion: "Único fabricante regional con capacidad para postes de alta tensión.",
              },
              {
                icon: Ruler,
                titulo: "Fabricación bajo plano",
                descripcion: "Desarrollamos piezas especiales según requerimiento técnico del cliente.",
              },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.titulo}
                  className="flex flex-col gap-4 rounded-[18px] border border-black/8 bg-white/80 p-6 shadow-[0_4px_18px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow/15">
                    <Icon className="h-5 w-5 text-brand-charcoal" />
                  </div>
                  <div>
                    <h3 className="font-display text-base uppercase tracking-[0.04em] text-brand-charcoal">
                      {c.titulo}
                    </h3>
                    <p className="mt-2 text-[13px] leading-[1.6] text-black/48">{c.descripcion}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Respaldo técnico */}
          <div id="certificaciones" className="mt-16">
            <div className="mb-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/38">
                Respaldo técnico e institucional
              </p>
              <h2 className="mt-2 font-display text-[clamp(1.7rem,3vw,2.8rem)] uppercase leading-tight tracking-[0.03em] text-brand-charcoal">
                Esta empresa cumple<br />con los estándares.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {certificaciones.map((c) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.titulo}
                    className="relative flex flex-col overflow-hidden rounded-[20px] border border-black/10 bg-white shadow-[0_4px_18px_rgba(0,0,0,0.04)]"
                  >
                    <div className="h-[4px]" style={{ backgroundColor: c.accent }} />
                    <div className="flex flex-1 flex-col px-6 py-6">
                      <span
                        className="mb-4 inline-flex items-center gap-1.5 self-start rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em]"
                        style={{ backgroundColor: c.accent, color: c.accentFg }}
                      >
                        <Icon className="h-2.5 w-2.5" />
                        {c.tag}
                      </span>
                      <h3 className="font-display text-lg uppercase tracking-[0.03em] text-brand-charcoal">
                        {c.titulo}
                      </h3>
                      <p className="mt-2.5 text-[12.5px] leading-[1.65] text-black/50">
                        {c.descripcion}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
