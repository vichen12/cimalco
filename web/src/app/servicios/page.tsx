import type { Metadata } from "next";
import { ArrowRight, Factory, HardHat, Package, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Servicios - Cimalco Patagonia",
  description:
    "Servicios externos y especializados para montaje de premoldeados, colocacion de adoquines y construccion de cercos perimetrales en Patagonia.",
};

type SpecializedService = {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  accent: string;
  accentFg: string;
};

type Benefit = {
  title: string;
  description: string;
};

const specializedServices: SpecializedService[] = [
  {
    id: "montaje",
    icon: Factory,
    title: "Montaje de premoldeados",
    description:
      "Para proyectos industriales e infraestructura de gran escala.",
    accent: "#2d2d2d",
    accentFg: "#ffffff",
  },
  {
    id: "adoquines",
    icon: HardHat,
    title: "Colocacion de adoquines",
    description:
      "Especialistas en zonas de alto transito y urbanismo funcional.",
    accent: "#ffd239",
    accentFg: "#1a1000",
  },
  {
    id: "cercos",
    icon: Package,
    title: "Construccion de cercos perimetrales",
    description:
      "Soluciones en seguridad para industrias y residencias.",
    accent: "#919191",
    accentFg: "#111111",
  },
];

const benefits: Benefit[] = [
  {
    title: "Adaptabilidad",
    description:
      "Servicios personalizados segun los requerimientos del proyecto.",
  },
  {
    title: "Calidad garantizada",
    description:
      "Materiales premium y tecnicas modernas para resultados duraderos.",
  },
];

export default function ServiciosPage() {
  return (
    <div className="relative z-10" style={{ background: "#fffdf0", minHeight: "100vh" }}>
      <SiteHeader />

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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.16)_0%,rgba(0,0,0,0.52)_50%,rgba(0,0,0,0.88)_100%)]" />
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
            SERVICIOS
          </span>
        </div>
        <div className="relative z-10 px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <div className="mx-auto w-full max-w-[1600px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/36">
              Servicios externos
            </p>
            <h1 className="mt-2 max-w-[12ch] font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.92] tracking-[0.04em] text-white">
              Soluciones
              <span className="block text-brand-yellow">a medida.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/58 sm:text-base">
              Brindamos soluciones a medida para el montaje, la colocacion de
              adoquines, la construccion de cercos y otras necesidades del
              sector de la construccion y el Oil & Gas.
            </p>
            <div className="mt-8">
              <Button
                href="/contacto"
                variant="accent"
                className="gap-2 px-7 py-3.5 text-[11px] tracking-[0.22em]"
              >
                Contactanos
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-[1600px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <article className="overflow-hidden rounded-[32px] border border-black/8 bg-white/84 shadow-[0_18px_48px_rgba(0,0,0,0.06)]">
            <div className="h-[4px] bg-brand-yellow" />
            <div className="p-7 lg:p-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-black/36">
                Servicios externos
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.4rem)] uppercase leading-[0.94] tracking-[0.04em] text-brand-charcoal">
                Respuesta operativa
                <span className="block text-brand-yellow">para cada obra.</span>
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-black/56 sm:text-base">
                Trabajamos con equipos y soluciones pensadas para acompanar
                montajes, colocaciones y cierres perimetrales con una logica
                concreta de obra: ejecucion prolija, coordinacion y materiales
                durables.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[24px] border border-black/8 bg-black/[0.03] p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-black/34">
                    Sectores
                  </p>
                  <p className="mt-2 text-sm leading-6 text-black/66">
                    Construccion, industria, urbanismo y Oil & Gas.
                  </p>
                </div>
                <div className="rounded-[24px] border border-black/8 bg-black/[0.03] p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-black/34">
                    Modalidad
                  </p>
                  <p className="mt-2 text-sm leading-6 text-black/66">
                    Servicios personalizados segun la necesidad del proyecto.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[32px] border border-black/8 bg-[#15120d] p-7 text-white shadow-[0_22px_58px_rgba(0,0,0,0.14)] lg:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 14% 18%, rgba(255,210,57,0.18) 0%, transparent 28%), radial-gradient(circle at 82% 86%, rgba(255,255,255,0.06) 0%, transparent 22%)",
              }}
            />
            <div className="relative z-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/38">
                Enfoque
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.4rem)] uppercase leading-[0.94] tracking-[0.04em] text-white">
                Ejecucion tecnica
                <span className="block text-brand-yellow">y criterio de obra.</span>
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/58 sm:text-base">
                No bajamos una oferta generica: armamos el servicio segun el
                contexto del proyecto, el tipo de montaje, el nivel de
                circulacion y la necesidad real del cliente.
              </p>

              <div className="mt-8 space-y-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="rounded-[24px] border border-white/10 bg-white/[0.04] p-5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-yellow/18">
                        <ShieldCheck className="h-4.5 w-4.5 text-brand-yellow" />
                      </div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                        {benefit.title}
                      </p>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/64">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section className="mt-10">
          <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-black/34">
                Servicios especializados
              </p>
              <h2 className="mt-2 font-display text-[clamp(2rem,4vw,3.4rem)] uppercase leading-[0.94] tracking-[0.04em] text-brand-charcoal">
                Tres lineas para
                <span className="block text-brand-yellow">resolver en obra.</span>
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-black/50 sm:text-base">
              Montaje, colocacion y cerramientos ejecutados con materiales de
              calidad y una lectura concreta del proyecto.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {specializedServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.id}
                  className="overflow-hidden rounded-[30px] border border-black/8 bg-white/84 shadow-[0_14px_36px_rgba(0,0,0,0.05)]"
                >
                  <div
                    className="h-[4px]"
                    style={{ backgroundColor: service.accent }}
                  />
                  <div className="p-6 lg:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl"
                        style={{
                          backgroundColor: service.accent,
                          color: service.accentFg,
                        }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="font-display text-[2.7rem] leading-none text-black/10">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mt-6 max-w-[14ch] font-display text-[clamp(1.5rem,3vw,2.2rem)] uppercase leading-[0.96] tracking-[0.03em] text-brand-charcoal">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-black/58 sm:text-base">
                      {service.description}
                    </p>

                    <a
                      href="/contacto"
                      className="mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/38 transition hover:text-black"
                    >
                      Contactanos por este servicio
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </article>
              );
            })}
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
