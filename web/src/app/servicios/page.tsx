import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Settings } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { absoluteUrl, createPageMetadata, legalName } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Servicios especializados",
  description:
    "Servicios externos y especializados para montaje de premoldeados, colocacion de adoquines y construccion de cercos perimetrales en Neuquen y Patagonia.",
  path: "/servicios",
  image: "/fotos servicios/herobg.png",
  keywords: [
    "montaje de premoldeados",
    "colocacion de adoquines",
    "cercos perimetrales",
    "servicios para Oil & Gas",
    "servicios de obra Neuquen",
  ],
});

const specializedServices = [
  {
    id: "montaje",
    num: "01",
    title: "Montaje de premoldeados",
    description:
      "Instalacion y puesta en obra de elementos premoldeados para proyectos industriales, viales e infraestructura de gran escala. Coordinamos logistica, equipos y criterio tecnico en cada etapa.",
    image: "/fotos servicios/herobg.png",
    href: "/contacto?line=Servicios&item=Montaje+de+premoldeados",
  },
  {
    id: "adoquines",
    num: "02",
    title: "Colocacion de adoquines",
    description:
      "Especialistas en pavimentacion con adoquines de hormigon para zonas de alto transito, urbanismo funcional, playas de maniobras y proyectos municipales.",
    image: "/fotos servicios/image copy.png",
    href: "/contacto?line=Servicios&item=Colocacion+de+adoquines",
  },
  {
    id: "cercos",
    num: "03",
    title: "Construccion de cercos perimetrales",
    description:
      "Soluciones estructurales de cerramiento para industrias, plantas, predios y residencias, con materiales durables y ejecucion prolija.",
    image: "/fotos servicios/image copy 2.png",
    href: "/contacto?line=Servicios&item=Construccion+de+cercos",
  },
];

const benefits = [
  {
    icon: Settings,
    title: "Adaptabilidad",
    description:
      "Armamos el servicio segun el contexto del proyecto, el tipo de montaje y la necesidad real del cliente. No bajamos una oferta generica.",
  },
  {
    icon: ShieldCheck,
    title: "Calidad garantizada",
    description:
      "Materiales de fabricacion propia con control tecnico en planta, mas tecnicas de obra modernas para resultados duraderos.",
  },
];

export default function ServiciosPage() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Servicios especializados Cimalco",
    provider: {
      "@type": "Corporation",
      name: legalName,
      url: absoluteUrl("/"),
    },
    areaServed: "Patagonia, Argentina",
    serviceType: specializedServices.map((service) => service.title),
    description:
      "Montaje de premoldeados, colocacion de adoquines y construccion de cercos perimetrales para industria, urbanismo y Oil & Gas.",
    url: absoluteUrl("/servicios"),
  };

  return (
    <div className="relative z-10" style={{ background: "#fffdf0", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <SiteHeader />

      {/* Hero */}
      <section
        className="relative flex flex-col justify-center overflow-hidden"
        style={{
          minHeight: "calc(100svh - 60px)",
        }}
      >
        <Image
          src="/fotos servicios/herobg.png"
          alt="Servicios Cimalco Patagonia"
          fill
          priority
          className="object-cover object-[72%_center] sm:object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.52)_50%,rgba(0,0,0,0.88)_100%)]" />
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
            <h1 className="mt-2 max-w-[14ch] font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.92] tracking-[0.04em] text-white">
              Montaje, colocacion
              <span className="block text-brand-yellow">y cerramientos.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/58 sm:text-base">
              Servicios especializados para obras de cualquier escala en Patagonia.
              Equipos propios, materiales de planta y criterio tecnico en cada etapa.
            </p>
            <div className="mt-8">
              <Button
                href="/contacto?line=Servicios"
                variant="accent"
                className="gap-2 px-7 py-3.5 text-[11px] tracking-[0.22em]"
              >
                Consultar por servicios
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-[1600px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">

        {/* Servicios Externos intro */}
        <section className="mb-14">
          <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-black/36">
                Servicios externos
              </p>
              <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3.4rem)] uppercase leading-[0.94] tracking-[0.04em] text-brand-charcoal">
                Respuesta operativa
                <span className="block text-brand-yellow">para cada obra.</span>
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-black/56 sm:text-base">
                Trabajamos con equipos y soluciones pensadas para acompanar montajes,
                colocaciones y cierres perimetrales con una logica concreta de obra:
                ejecucion prolija, coordinacion y materiales durables fabricados en planta propia.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[22px] border border-black/8 bg-white/80 p-5 shadow-[0_6px_18px_rgba(0,0,0,0.04)]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/34">Sectores</p>
                  <p className="mt-2 text-sm leading-6 text-black/64">
                    Construccion, industria, urbanismo y Oil & Gas.
                  </p>
                </div>
                <div className="rounded-[22px] border border-black/8 bg-white/80 p-5 shadow-[0_6px_18px_rgba(0,0,0,0.04)]">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/34">Modalidad</p>
                  <p className="mt-2 text-sm leading-6 text-black/64">
                    Servicios personalizados segun la necesidad del proyecto.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative h-[320px] overflow-hidden rounded-[32px] border border-black/8 xl:h-[420px]">
              <Image
                src="/fotos servicios/image copy 2.png"
                alt="Servicios externos Cimalco"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 45vw"
              />
            </div>
          </div>
        </section>

        {/* Servicios Especializados */}
        <section>
          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
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

          <div className="grid gap-6 lg:grid-cols-3">
            {specializedServices.map((service) => (
              <article
                key={service.id}
                className="flex flex-col overflow-hidden rounded-[30px] border border-black/8 bg-white/84 shadow-[0_14px_36px_rgba(0,0,0,0.06)]"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/30" />
                  <span className="absolute bottom-4 right-4 font-display text-[2.8rem] leading-none text-white/20">
                    {service.num}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 lg:p-7">
                  <div className="h-[3px] w-8 rounded-full bg-brand-yellow mb-4" />
                  <h3 className="font-display text-[clamp(1.4rem,2.5vw,2rem)] uppercase leading-[0.96] tracking-[0.03em] text-brand-charcoal">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-black/56">{service.description}</p>
                  <div className="mt-auto pt-6">
                    <a
                      href={service.href}
                      className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-black/38 transition hover:text-black"
                    >
                      Consultar por este servicio
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Beneficios */}
        <section className="mt-14">
          <div className="mb-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-black/34">
              Beneficios destacados
            </p>
            <h2 className="mt-2 font-display text-[clamp(1.8rem,3.5vw,3rem)] uppercase leading-[0.94] tracking-[0.04em] text-brand-charcoal">
              Por que trabajar
              <span className="block text-brand-yellow">con Cimalco.</span>
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <article
                  key={benefit.title}
                  className="flex gap-5 rounded-[28px] border border-black/8 bg-white/84 p-6 shadow-[0_12px_32px_rgba(0,0,0,0.05)] lg:p-8"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-yellow/16">
                    <Icon className="h-5 w-5 text-brand-charcoal" />
                  </div>
                  <div>
                    <h3 className="font-display text-[1.4rem] uppercase leading-tight tracking-[0.03em] text-brand-charcoal">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-black/56">{benefit.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
