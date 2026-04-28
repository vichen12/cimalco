"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const verticals = [
  {
    brand: "Cimalco Energía",
    shortLabel: "Energía",
    color: "#c9f442",
    colorFg: "#0f1a00",
    noteFg: "#3d6000",
    lines: [
      {
        title: "Líneas Eléctricas",
        note: "Postes AT · MT · BT pretensados",
        description:
          "Única planta en Patagonia con capacidad para postes de alta tensión. Obras desde Neuquén hasta Tierra del Fuego.",
        image: "/Donde opera Cimalco/energia.png",
        href: "/catalogo#pretensados",
      },
      {
        title: "Oil & Gas",
        note: "Vaca Muerta · Ley 3338",
        description:
          "Cámaras, bases, sleepers y premoldeados a medida para entornos de alta exigencia operativa.",
        image: "/Donde opera Cimalco/oil y gas .png",
        href: "/contacto?line=Premoldeados",
      },
    ],
  },
  {
    brand: "Cimalco Premoldeados",
    shortLabel: "Premoldeados",
    color: "#41b6e1",
    colorFg: "#001a24",
    noteFg: "#0e6a94",
    lines: [
      {
        title: "Adoquines",
        note: "Pavimento articulado · IRAM",
        description:
          "Uni Stone 8 cm y Holanda 6 cm para tránsito, veredas y urbanización. Servicio de colocación incluido.",
        image: "/Lo que fabricamos/Adoquines.jpg",
        href: "/catalogo#industrializados",
      },
      {
        title: "Bloques",
        note: "Mampostería · Obra civil · IRAM",
        description:
          "Sistema completo para cerramientos y obra civil. P20, SP20, U20 y variantes según catálogo. Certificación IRAM.",
        image: "/Lo que fabricamos/bloques.webp",
        href: "/catalogo#industrializados",
      },
    ],
  },
];

export function VerticalSections() {
  return (
    <section id="verticales" className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-[1600px] space-y-20">

        {verticals.map((v, vi) => (
          <motion.div
            key={v.brand}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.06 }}
            transition={{ duration: 0.6, delay: vi * 0.08 }}
          >
            {/* Section header */}
            <div className="mb-8 flex items-center gap-5">
              <div
                className="h-10 w-1 flex-shrink-0 rounded-full"
                style={{ backgroundColor: v.color }}
              />
              <div>
                <span
                  className="inline-block rounded-full px-3 py-1 text-[9px] font-bold uppercase tracking-[0.28em]"
                  style={{ backgroundColor: v.color, color: v.colorFg }}
                >
                  {v.shortLabel}
                </span>
                <h3 className="mt-1.5 font-display text-[clamp(1.9rem,3.8vw,3.2rem)] uppercase leading-none tracking-[0.03em] text-brand-charcoal">
                  {v.brand}
                </h3>
              </div>
              <div className="hidden h-px flex-1 bg-black/8 lg:block" />
            </div>

            {/* Cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              {v.lines.map((line, li) => (
                <motion.a
                  key={line.title}
                  href={line.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.55, delay: vi * 0.08 + li * 0.12 }}
                  className="group overflow-hidden rounded-[20px] border border-black/[0.07] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(0,0,0,0.12)]"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ height: "clamp(220px, 28vw, 360px)" }}>
                    <Image
                      src={line.image}
                      alt={line.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    {/* Bottom fade to white */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/20 to-transparent" />
                    {/* Color accent top bar */}
                    <div
                      className="absolute inset-x-0 top-0 h-[3px]"
                      style={{ backgroundColor: v.color }}
                    />
                  </div>

                  {/* Text */}
                  <div className="px-7 py-6">
                    <p
                      className="text-[9px] font-bold uppercase tracking-[0.28em]"
                      style={{ color: v.noteFg }}
                    >
                      {line.note}
                    </p>
                    <h4 className="mt-2.5 font-display text-[1.35rem] uppercase leading-tight tracking-[0.025em] text-brand-charcoal">
                      {line.title}
                    </h4>
                    <p className="mt-2.5 text-sm leading-[1.75] text-black/50">
                      {line.description}
                    </p>
                    <div
                      className="mt-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] transition-all duration-200 group-hover:gap-3"
                      style={{ color: v.noteFg }}
                    >
                      Ver más <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
