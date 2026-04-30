import type { Metadata } from "next";
import { ArrowRight, Factory, ShieldCheck, Zap, MapPin, Truck, Wrench, Ruler } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { createPageMetadata, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Empresa — Cimalco Patagonia, más de seis décadas fabricando en Neuquén",
  description:
    "Cimalco Patagonia es la nueva identidad de una empresa industrial con trayectoria en Patagonia. Planta propia de 26.000 m² en Neuquén. IRAM en bloques y adoquines. Empresa Neuquina Ley 3338 para Oil & Gas.",
  path: "/empresa",
  keywords: [
    "empresa hormigón Neuquén",
    "fábrica premoldeados Patagonia",
    "historia Cimalco Neuquén",
    "planta industrial Neuquén",
    "Cimalco Patagonia empresa",
  ],
});

const stats = [
  { value: "60+", label: "Años de trayectoria industrial" },
  { value: "26.000 m²", label: "Planta propia en Neuquén" },
  { value: "2", label: "Grandes verticales de operación" },
  { value: "Única AT", label: "Planta patagónica con postes AT" },
];

const capacidades = [
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
    icon: Truck,
    titulo: "Logística directa",
    descripcion: "Producción local en Neuquén, sin dependencia de proveedores del centro del país.",
  },
  {
    icon: Ruler,
    titulo: "Fabricación bajo plano",
    descripcion: "Desarrollamos piezas especiales según requerimiento técnico del cliente.",
  },
];

const certificaciones = [
  {
    accent: "#c9f442",
    accentFg: "#1a2a00",
    icon: ShieldCheck,
    tag: "Empresa Neuquina · Ley 3338",
    titulo: "Habilitada para Oil & Gas",
    descripcion: "Cumple con requisitos provinciales específicos de Neuquén para proyectos petroleros y pliegos que exigen empresa neuquina.",
  },
  {
    accent: "#ffd239",
    accentFg: "#1a1000",
    icon: ShieldCheck,
    tag: "Norma IRAM",
    titulo: "Bloques y adoquines certificados",
    descripcion: "Fabricación bajo normativa IRAM vigente. Referencia técnica para licitaciones, obra pública y privada.",
  },
  {
    accent: "#41b6e1",
    accentFg: "#001a24",
    icon: Factory,
    tag: "Control técnico en planta",
    titulo: "Producción estandarizada",
    descripcion: "Control técnico interno en cada etapa del proceso. Garantía de consistencia dimensional y resistencia.",
  },
];

const soluciones = [
  {
    brand: "Cimalco Energía",
    color: "#c9f442",
    colorFg: "#0f1a00",
    noteFg: "#3d6000",
    lines: [
      {
        note: "Postes AT · MT · BT pretensados",
        titulo: "Líneas Eléctricas",
        descripcion: "Única planta en Patagonia con capacidad para postes de alta tensión. Obras desde Neuquén hasta Tierra del Fuego.",
        href: "/soluciones/energia",
      },
      {
        note: "Vaca Muerta · Ley 3338",
        titulo: "Oil & Gas",
        descripcion: "Cámaras, bases, sleepers y premoldeados a medida para entornos de alta exigencia operativa.",
        href: "/soluciones/oil-and-gas",
      },
    ],
  },
  {
    brand: "Cimalco Premoldeados",
    color: "#41b6e1",
    colorFg: "#001a24",
    noteFg: "#0e6a94",
    lines: [
      {
        note: "Pavimento articulado · IRAM",
        titulo: "Adoquines",
        descripcion: "Uni Stone 8 cm y Holanda 6 cm para tránsito, veredas y urbanización. Servicio de colocación incluido.",
        href: "/soluciones/prefabricados",
      },
      {
        note: "Mampostería · Obra civil · IRAM",
        titulo: "Bloques",
        descripcion: "Sistema completo para cerramientos y obra civil. P20, SP20, U20 y variantes según catálogo. Certificación IRAM.",
        href: "/soluciones/prefabricados",
      },
    ],
  },
];

export default function EmpresaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Empresa — Cimalco Patagonia",
    url: absoluteUrl("/empresa"),
    about: {
      "@type": "Corporation",
      name: "Cimalco Neuquén S.A.",
      alternateName: "Cimalco Patagonia",
      description: "Fabricante de premoldeados y pretensados de hormigón en Neuquén, Patagonia.",
    },
  };

  return (
    <main className="relative min-h-screen" style={{ background: "#fffdf0" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteHeader />

      {/* Hero */}
      <section
        className="px-5 pb-16 pt-28 sm:px-8 lg:px-10 lg:pb-24 lg:pt-32"
        style={{ background: "#111009" }}
      >
        <div className="mx-auto w-full max-w-[1600px]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
            Empresa · Neuquén, Patagonia
          </p>
          <h1 className="mt-3 font-display text-[clamp(2.4rem,5.5vw,5.5rem)] uppercase leading-[0.9] tracking-[0.02em] text-white max-w-[700px]">
            Más de seis décadas<br />fabricando en Patagonia.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
            Cimalco Patagonia es la identidad comercial de una empresa industrial
            con trayectoria en Neuquén. Fabricamos premoldeados, pretensados y
            prefabricados de hormigón para energía, Oil & Gas, construcción e infraestructura.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#181410" }}>
        <div className="mx-auto w-full max-w-[1600px]">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="flex flex-col gap-3 px-7 py-10 lg:px-10"
                style={{
                  borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.06)" : undefined,
                  borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.06)" : undefined,
                }}
              >
                <div className="h-[3px] w-8 rounded-full bg-brand-yellow" />
                <p className="font-display text-[clamp(1.7rem,2.8vw,2.8rem)] uppercase leading-none tracking-tight text-white">
                  {s.value}
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/32">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre la empresa — compacto */}
      <section id="historia" className="mx-auto w-full max-w-[1600px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/38">
              Trayectoria
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.8rem,3.5vw,3.2rem)] uppercase leading-tight tracking-[0.03em] text-brand-charcoal">
              De Cimalco Neuquén<br />a Cimalco Patagonia.
            </h2>
            <p className="mt-5 text-sm leading-7 text-black/55 max-w-lg">
              Con más de seis décadas de trayectoria, Cimalco renueva su identidad para reflejar el alcance
              real de su operación en toda la región. Misma base industrial, mismo equipo, mayor presencia.
            </p>
          </div>
          <div
            className="rounded-[20px] p-8"
            style={{ background: "#eee9db" }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-black/34 mb-4">
              La empresa hoy
            </p>
            <ul className="space-y-3">
              {[
                "Planta propia de 26.000 m² en Neuquén",
                "Dos verticales: Energía y Prefabricados",
                "Única planta patagónica para postes AT",
                "Cobertura desde Neuquén hasta Tierra del Fuego",
                "Fabricación directa sin intermediarios",
                "Venta directa desde planta",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-black/60">
                  <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-yellow" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Capacidades — cards con íconos */}
      <section id="planta" className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20" style={{ background: "#eee9db" }}>
        <div className="mx-auto w-full max-w-[1600px]">
          <div className="mb-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/38">
              Capacidad productiva
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.8rem,3.5vw,3rem)] uppercase leading-tight tracking-[0.03em] text-brand-charcoal">
              Planta industrial<br />en Neuquén.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capacidades.map((c) => {
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
        </div>
      </section>

      {/* Certificaciones — institucional */}
      <section id="certificaciones" className="mx-auto w-full max-w-[1600px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mb-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/38">
            Respaldo técnico e institucional
          </p>
          <h2 className="mt-2 font-display text-[clamp(1.8rem,3.5vw,3rem)] uppercase leading-tight tracking-[0.03em] text-brand-charcoal">
            Esta empresa cumple<br />con los estándares.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {certificaciones.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.titulo}
                className="relative overflow-hidden flex flex-col rounded-[20px] border border-black/10 bg-white shadow-[0_4px_18px_rgba(0,0,0,0.05)]"
              >
                <div className="h-[4px]" style={{ backgroundColor: c.accent }} />
                <div className="flex flex-1 flex-col px-6 py-6">
                  <span
                    className="inline-flex items-center gap-1.5 self-start rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] mb-4"
                    style={{ backgroundColor: c.accent, color: c.accentFg }}
                  >
                    <Icon className="h-2.5 w-2.5" />
                    {c.tag}
                  </span>
                  <h3 className="font-display text-lg uppercase tracking-[0.03em] text-brand-charcoal">
                    {c.titulo}
                  </h3>
                  <p className="mt-2.5 text-[12.5px] leading-[1.65] text-black/50">{c.descripcion}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Soluciones — integradas en empresa */}
      <section style={{ background: "#111009" }} className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto w-full max-w-[1600px]">
          <div className="mb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
              Lo que fabricamos
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.8rem,3.5vw,3.2rem)] uppercase leading-tight tracking-[0.03em] text-white">
              Dos verticales.<br />
              <span className="text-brand-yellow">Un solo fabricante.</span>
            </h2>
          </div>

          <div className="space-y-12">
            {soluciones.map((v) => (
              <div key={v.brand}>
                {/* Vertical header */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-8 w-1 flex-shrink-0 rounded-full" style={{ backgroundColor: v.color }} />
                  <div>
                    <span
                      className="inline-block rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-[0.28em]"
                      style={{ backgroundColor: v.color, color: v.colorFg }}
                    >
                      {v.brand.replace("Cimalco ", "")}
                    </span>
                    <h3 className="mt-1 font-display text-[clamp(1.4rem,2.5vw,2rem)] uppercase leading-none tracking-[0.03em] text-white">
                      {v.brand}
                    </h3>
                  </div>
                  <div className="hidden h-px flex-1 lg:block" style={{ background: "rgba(255,255,255,0.08)" }} />
                </div>

                {/* Cards */}
                <div className="grid gap-4 sm:grid-cols-2">
                  {v.lines.map((line) => (
                    <a
                      key={line.titulo}
                      href={line.href}
                      className="group flex flex-col gap-3 rounded-[18px] border p-6 transition-all duration-300 hover:-translate-y-0.5"
                      style={{ borderColor: "rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)" }}
                    >
                      <p className="text-[9px] font-bold uppercase tracking-[0.28em]" style={{ color: v.color }}>
                        {line.note}
                      </p>
                      <h4 className="font-display text-[1.2rem] uppercase leading-tight tracking-[0.025em] text-white">
                        {line.titulo}
                      </h4>
                      <p className="text-[13px] leading-[1.7] text-white/48">{line.descripcion}</p>
                      <div
                        className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] transition-all duration-200 group-hover:gap-3"
                        style={{ color: v.color }}
                      >
                        Ver más <ArrowRight className="h-3 w-3" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 lg:px-10" style={{ background: "#111009" }}>
        <div className="mx-auto w-full max-w-[1600px] border-t py-16 lg:py-20" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <h2 className="font-display text-[clamp(1.8rem,3.5vw,3rem)] uppercase leading-tight tracking-[0.03em] text-white max-w-[500px]">
            ¿Necesitás un premoldeado para tu obra?
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/60">
            Consultanos por producto, volumen y zona. Respondemos directamente desde planta.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/contacto"
              className="inline-flex items-center gap-2.5 rounded-full bg-brand-yellow px-8 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#1a1000] transition hover:-translate-y-px"
            >
              Solicitar consulta técnica
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/catalogo"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/30 px-8 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-white transition hover:border-white/60"
            >
              Ver catálogo técnico
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
