"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const families = [
  {
    index: "01",
    title: "Adoquines",
    sub: "Pavimento articulado",
    category: "Vial + urbanizacion",
    image: "/site-assets/adoquines.png",
    alt: "Adoquines de hormigon Cimalco Patagonia",
    summary:
      "Formatos y espesores para circulacion, veredas y urbanizacion. Transito liviano y pesado.",
    specs: [
      { name: "Uni Stone 8 cm", note: "Transito y alto desgaste" },
      { name: "Holanda 6 cm", note: "Urbanizacion y residencial" },
      { name: "Municipios y obra privada" },
    ],
    accent: "#41b6e1",
    accentFg: "#001a24",
  },
  {
    index: "02",
    title: "Bloques",
    sub: "Mamposteria y obra civil",
    category: "Constructoras + corralones",
    image: "/site-assets/bloques-hormigon.png",
    alt: "Bloques de hormigon Cimalco Patagonia",
    summary:
      "Sistema completo para obra civil. Rapido de ejecutar y facil de escalar en cualquier proyecto.",
    specs: [
      { name: "P20 / P20M", note: "Bloque estandar y variante" },
      { name: "SP20 / U20", note: "Variantes segun catalogo" },
      { name: "Corralones y desarrolladoras" },
    ],
    accent: "#ffd239",
    accentFg: "#1a1000",
  },
  {
    index: "03",
    title: "Camaras y postes",
    sub: "Infraestructura tecnica",
    category: "Energia + Oil & Gas",
    image: "/site-assets/camaras-de-valvulas.jpg",
    alt: "Camaras y postes de hormigon Cimalco",
    summary:
      "Prefabricados para infraestructura con alta exigencia. Incluye fabricacion especial a medida.",
    specs: [
      { name: "Camaras de valvulas", note: "Oil & Gas e industria" },
      { name: "Postes BT / MT", note: "Con referencia IRAM" },
      { name: "Piezas especiales a medida" },
    ],
    accent: "#c9f442",
    accentFg: "#0f1a00",
  },
];

export function ProductRows() {
  return (
    <section id="productos" className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-[1600px]">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/38">
              Productos
            </p>
            <h2 className="mt-2 font-display text-[clamp(2.4rem,5vw,4.5rem)] uppercase leading-[0.92] tracking-[0.04em] text-brand-charcoal">
              Lo que fabricamos.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-black/52 sm:text-base">
            Tres familias principales — contexto, escala y respaldo tecnico propio en cada una.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {families.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl"
              style={{ minHeight: 540, background: "#141210" }}
            >
              {/* Full-bleed image */}
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover opacity-55 transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient overlay — dark at bottom for text, subtle at top */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/96 via-black/55 to-black/10" />

              {/* Accent top border */}
              <div
                className="absolute inset-x-0 top-0 z-10 h-[3px]"
                style={{ backgroundColor: item.accent }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-1 flex-col justify-between p-7 sm:p-8">

                {/* Top row: index + category */}
                <div className="flex items-start justify-between">
                  <span
                    className="font-display text-[5.5rem] leading-none font-bold select-none"
                    style={{ color: item.accent, opacity: 0.12 }}
                  >
                    {item.index}
                  </span>
                  <span
                    className="rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]"
                    style={{ backgroundColor: item.accent, color: item.accentFg }}
                  >
                    {item.category}
                  </span>
                </div>

                {/* Bottom: all text content */}
                <div>
                  {/* Title */}
                  <h3
                    className="font-display text-[clamp(2.4rem,4.5vw,3.4rem)] uppercase leading-none tracking-[0.02em]"
                    style={{ color: item.accent }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium uppercase tracking-[0.14em] text-white/38">
                    {item.sub}
                  </p>

                  {/* Accent rule */}
                  <div
                    className="mt-4 h-[2px] w-10 rounded-full"
                    style={{ backgroundColor: item.accent }}
                  />

                  {/* Summary */}
                  <p className="mt-4 text-sm leading-6 text-white/58">
                    {item.summary}
                  </p>

                  {/* Specs */}
                  <div className="mt-5 space-y-2">
                    {item.specs.map((spec) => (
                      <div key={spec.name} className="flex items-start gap-2.5 text-sm">
                        <span
                          className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: item.accent }}
                        />
                        <span>
                          <span className="font-medium text-white/78">{spec.name}</span>
                          {"note" in spec && spec.note && (
                            <span className="text-white/36"> — {spec.note}</span>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="/contacto"
                    className="mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[11px] font-bold uppercase tracking-[0.22em] transition hover:opacity-88"
                    style={{ backgroundColor: item.accent, color: item.accentFg }}
                  >
                    Contactanos
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
