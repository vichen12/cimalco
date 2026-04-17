"use client";

import Image from "next/image";
import { ArrowRight, Factory, Pickaxe, Route, Zap } from "lucide-react";
import { motion } from "motion/react";

const verticals = [
  {
    title: "Energia",
    icon: Zap,
    accent: "#c9f442",
    accentFg: "#0f1a00",
    image: "/site-assets/postes-lineas-electricas.png",
    summary: "Unica planta en Patagonia con capacidad para postes de alta tension. Produccion para alta, media y baja tension con obras en toda la region hasta Tierra del Fuego.",
    items: ["Postes alta, media y baja tension", "Unica fabrica regional AT", "Cobertura hasta T. del Fuego"],
    index: "01",
  },
  {
    title: "Oil & Gas",
    icon: Pickaxe,
    accent: "#ffd239",
    accentFg: "#1a1000",
    image: "/site-assets/camaras-de-valvulas.jpg",
    summary: "Camaras, bases, sleepers y premoldeados a medida para Vaca Muerta y entornos con alta exigencia operativa. Habilitados con Ley 3338.",
    items: ["Camaras y bases a medida", "Sleepers para yacimiento", "Ley 3338 — Habilitados"],
    index: "02",
  },
  {
    title: "Vial",
    icon: Route,
    accent: "#41b6e1",
    accentFg: "#001a24",
    image: "/site-assets/adoquines.png",
    summary: "Adoquines IRAM, cordones premoldeados, divisores Jersey y losetas de ductos para obra publica y privada en toda la region.",
    items: ["Uni Stone 8 / Holanda 6 IRAM", "Divisores Jersey", "Municipios y desarrolladoras"],
    index: "03",
  },
  {
    title: "Especiales",
    icon: Factory,
    accent: "#f0ede8",
    accentFg: "#1a1a1a",
    image: "/site-assets/camaras-hormigon-premoldeadas.png",
    summary: "Shelters industriales para cromatografia, estructuras con paneles solares y piezas a medida para requerimientos fuera de catalogo estandar.",
    items: ["Shelters para Oil & Gas", "Estructuras fotovoltaicas", "Diseno y contacto directo"],
    index: "04",
  },
];

export function VerticalSections() {
  return (
    <section id="verticales" className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/38">
              Verticales
            </p>
            <h2 className="mt-2 font-display text-[clamp(2.4rem,5vw,4.5rem)] uppercase leading-[0.92] tracking-[0.04em] text-brand-charcoal">
              Donde opera Cimalco.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-black/48">
            Cuatro sectores con solucion concreta para cada requerimiento tecnico.
          </p>
        </div>

        <div className="space-y-3">
          {verticals.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                className="group relative overflow-hidden rounded-2xl"
                style={{ minHeight: 176 }}
              >
                {/* Background image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {/* Overlay: heavy left, fades right */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/55 to-black/15" />
                {/* Accent left strip */}
                <div
                  className="absolute inset-y-0 left-0 w-[4px]"
                  style={{ backgroundColor: item.accent }}
                />

                <div className="relative z-10 flex h-full items-center gap-6 px-8 py-7 sm:gap-8 sm:px-10 lg:gap-12">

                  {/* Ghost index */}
                  <span
                    className="hidden font-display text-[4rem] leading-none font-bold select-none opacity-12 lg:block"
                    style={{ color: item.accent }}
                  >
                    {item.index}
                  </span>

                  {/* Icon badge */}
                  <div
                    className="flex-shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ backgroundColor: item.accent, color: item.accentFg }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Title + summary */}
                  <div className="min-w-0 flex-1">
                    <h3
                      className="font-display text-[clamp(1.9rem,3.8vw,3rem)] uppercase leading-none tracking-[0.03em]"
                      style={{ color: item.accent }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-1.5 max-w-lg text-sm leading-6 text-white/58 sm:text-base">
                      {item.summary}
                    </p>
                  </div>

                  {/* Bullets + CTA — desktop only */}
                  <div className="hidden shrink-0 flex-col items-end gap-3 lg:flex">
                    <div className="space-y-1.5">
                      {item.items.map((bullet) => (
                        <div key={bullet} className="flex items-center justify-end gap-2 text-sm text-white/48">
                          {bullet}
                          <span
                            className="h-1 w-2 flex-shrink-0 rounded-full"
                            style={{ backgroundColor: item.accent }}
                          />
                        </div>
                      ))}
                    </div>
                    <a
                      href="/contacto"
                      className="mt-1 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] opacity-60 transition group-hover:opacity-100"
                      style={{ color: item.accent }}
                    >
                      Consultar <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
