import type { Metadata } from "next";
import { ArrowRight, Factory, HardHat, Package, Sun, Zap } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Servicios — Cimalco Patagonia",
  description:
    "Premoldeados industriales, postes pretensados, proyectos especiales y servicios en obra para infraestructura en Patagonia. Unica planta regional para postes de alta tension.",
};

type Service = {
  id: string;
  icon: React.ElementType;
  accent: string;
  accentFg: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  clients?: string;
  badge?: string;
};

const services: Service[] = [
  {
    id: "premoldeados",
    icon: Package,
    accent: "#41b6e1",
    accentFg: "#001a24",
    index: "01",
    title: "Premoldeados en serie",
    subtitle: "Produccion industrializada",
    description:
      "Fabricacion continua de productos estandarizados certificados bajo normas IRAM. Bloques para mamposteria, adoquines para pavimento articulado, losetas de proteccion de ductos, cordones premoldeados y sistemas de proteccion de erosiones. Stock disponible para proyectos de cualquier escala.",
    bullets: [
      "Bloques lisos, simil piedra y complementarios",
      "Adoquines IRAM — Uni Stone 8 cm y Holanda 6 cm",
      "Losetas LD para cobertura de ductos",
      "Cordones y sistemas de proteccion de erosiones",
      "Certificacion IRAM en lineas aplicables",
    ],
    clients: "Municipios, constructoras, desarrolladoras, corralones.",
  },
  {
    id: "medida",
    icon: Factory,
    accent: "#ffd239",
    accentFg: "#1a1000",
    index: "02",
    title: "Premoldeados a medida",
    subtitle: "Ingenieria aplicada",
    description:
      "Desarrollo y fabricacion de piezas especificas para proyectos con requerimientos fuera del catalogo estandar. Bases, sleepers, fundaciones, camaras de hormigon y cualquier pieza con geometria o resistencia particular. Especializados en Oil & Gas — Vaca Muerta y entornos de alta exigencia operativa.",
    bullets: [
      "Bases y fundaciones para equipos industriales",
      "Sleepers para yacimientos y plantas",
      "Camaras de valvulas y obras hidraulicas",
      "Piezas con armadura y geometria especial",
      "Habilitados con Ley 3338 para Oil & Gas",
    ],
    clients: "YPF, Tecpetrol y operadoras de Vaca Muerta.",
    badge: "Ley 3338",
  },
  {
    id: "postes",
    icon: Zap,
    accent: "#c9f442",
    accentFg: "#0f1a00",
    index: "03",
    title: "Postes pretensados",
    subtitle: "Alta · Media · Baja tension",
    description:
      "Fabricacion de postes pretensados para lineas de alta, media y baja tension. Unica planta en Patagonia con capacidad productiva para postes de alta tension. Obras ejecutadas en toda la region desde Neuquen hasta Tierra del Fuego. Proveedor de EPEN y otras distribuidoras regionales.",
    bullets: [
      "Postes de alta tension — exclusivo en la region",
      "Postes de media y baja tension IRAM",
      "Accesorios y complementos pretensados",
      "Cobertura desde Neuquen hasta Tierra del Fuego",
      "Proveedor de EPEN y distribuidoras regionales",
    ],
    clients: "EPEN, distribuidoras y empresas de infraestructura electrica.",
    badge: "Unica fabrica AT en Patagonia",
  },
  {
    id: "obras",
    icon: HardHat,
    accent: "#f0ede8",
    accentFg: "#1a1a1a",
    index: "04",
    title: "Servicios en obra",
    subtitle: "Colocacion y mantenimiento",
    description:
      "Equipo propio para la colocacion de adoquines en obra y cuadrilla especializada en yacimiento para mantenimiento y pequenas obras civiles vinculadas a la instalacion de premoldeados. Respaldo directo de fabrica sin necesidad de subcontratar.",
    bullets: [
      "Colocacion de adoquines en proyectos viales y urbanos",
      "Cuadrilla en yacimiento — Vaca Muerta",
      "Mantenimiento de premoldeados instalados",
      "Pequeñas obras civiles vinculadas a instalacion",
      "Coordinacion directa con equipo de planta",
    ],
    clients: "Operadoras, contratistas y municipios.",
  },
  {
    id: "especiales",
    icon: Sun,
    accent: "#ffd239",
    accentFg: "#1a1000",
    index: "05",
    title: "Proyectos especiales",
    subtitle: "Ingenieria y construccion",
    description:
      "Desarrollo de soluciones fuera de catalogo para requerimientos complejos o de nicho. Shelters de construccion metalica para salas de cromatografia en Oil & Gas, estructuras de estacionamiento con hormigon y paneles solares para generacion electrica, y cualquier proyecto que combine ingenieria civil con prefabricacion.",
    bullets: [
      "Shelters para salas de cromatografia — Oil & Gas",
      "Estructuras de estacionamiento con paneles solares",
      "Generacion electrica integrada a estructura civil",
      "Proyectos con diseno y calculo desde planta",
      "Contacto y asistencia tecnica directa",
    ],
    clients: "Operadoras Oil & Gas, empresas de energia, proyectos publicos.",
  },
];

export default function ServiciosPage() {
  return (
    <div className="relative z-10" style={{ background: "#fffdf0", minHeight: "100vh" }}>
      <SiteHeader />

      {/* Page header */}
      <section
        className="relative flex flex-col justify-center overflow-hidden"
        style={{
          height: "calc(100vh - 64px)",
          borderBottom: "3px solid #ffd239",
          backgroundImage: "url('/site-assets/heross.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0.50)_50%,rgba(0,0,0,0.88)_100%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-end justify-end overflow-hidden select-none">
          <span className="font-display font-bold uppercase" style={{ fontSize: "clamp(5rem,14vw,14rem)", color: "rgba(255,255,255,0.05)", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: "-0.1em", marginRight: "-0.05em" }}>
            SERVICIOS
          </span>
        </div>
        <div className="relative z-10 px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto w-full max-w-[1600px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/36">Capacidades</p>
            <h1 className="mt-2 font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.92] tracking-[0.04em] text-white">
              Lo que fabricamos
              <br />
              y <span className="text-brand-yellow">ejecutamos.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
              Cinco lineas de trabajo: premoldeados en serie, piezas a medida, postes pretensados,
              servicios en obra y proyectos de ingenieria especial. Todo desde Neuquen.
            </p>
            <div className="mt-8">
              <Button href="/contacto" variant="accent" className="gap-2 px-7 py-3.5 text-[11px] tracking-[0.22em]">
                Consultar disponibilidad
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <main className="mx-auto w-full max-w-[1600px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="space-y-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.id}
                className="overflow-hidden rounded-3xl border border-black/8 bg-white/80 backdrop-blur-sm shadow-[0_4px_24px_rgba(0,0,0,0.07)]"
              >
                {/* Accent bar */}
                <div className="h-[3px]" style={{ backgroundColor: service.accent }} />

                <div className="grid gap-0 lg:grid-cols-[1fr_1.8fr]">
                  {/* Left — identity */}
                  <div
                    className="flex flex-col justify-between gap-6 p-7 lg:p-10"
                    style={{ borderRight: "1px solid rgba(0,0,0,0.07)" }}
                  >
                    <div>
                      <div className="flex items-start gap-4">
                        <div
                          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl"
                          style={{ backgroundColor: service.accent, color: service.accentFg }}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <span
                          className="font-display text-[3rem] font-bold leading-none opacity-10"
                          style={{ color: service.accent === "#f0ede8" ? "#888" : service.accent }}
                        >
                          {service.index}
                        </span>
                      </div>

                      <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.24em] text-black/36">
                        {service.subtitle}
                      </p>
                      <h2 className="mt-1 font-display text-[clamp(1.6rem,3vw,2.4rem)] uppercase leading-[0.96] tracking-[0.03em] text-brand-charcoal">
                        {service.title}
                      </h2>

                      {service.badge && (
                        <div
                          className="mt-4 inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]"
                          style={{
                            backgroundColor: service.accent,
                            color: service.accentFg,
                          }}
                        >
                          {service.badge}
                        </div>
                      )}
                    </div>

                    {service.clients && (
                      <div className="rounded-2xl bg-black/[0.03] px-4 py-3">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/34">
                          Clientes tipo
                        </p>
                        <p className="mt-1 text-[13px] leading-5 text-black/58">
                          {service.clients}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Right — content */}
                  <div className="flex flex-col gap-6 p-7 lg:p-10">
                    <p className="text-sm leading-7 text-black/60 sm:text-base">
                      {service.description}
                    </p>

                    <div className="grid gap-2 sm:grid-cols-2">
                      {service.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-3">
                          <span
                            className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                            style={{ backgroundColor: service.accent === "#f0ede8" ? "#888" : service.accent }}
                          />
                          <p className="text-sm leading-6 text-black/64">{bullet}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto pt-2">
                      <a
                        href="/contacto"
                        className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/36 transition hover:text-black"
                      >
                        Consultar este servicio
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>

      {/* CTA band */}
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
              Hablemos de tu proyecto.
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
