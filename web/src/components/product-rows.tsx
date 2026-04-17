"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { buildContactHref } from "@/lib/contact-prefill";

const families = [
  {
    index: "01",
    title: "Adoquines",
    sub: "Pavimento articulado",
    category: "Vial + urbanizacion",
    image: "/Lo que fabricamos/Adoquines.jpg",
    alt: "Adoquines de hormigon Cimalco Patagonia",
    summary:
      "Formatos y espesores para circulacion, veredas y urbanizacion. Una linea pensada para resistencia, modulacion y velocidad de colocacion.",
    specs: [
      { name: "Uni Stone 8 cm", note: "Transito y alto desgaste" },
      { name: "Holanda 6 cm", note: "Urbanizacion y residencial" },
      { name: "Municipios y obra privada" },
    ],
    accent: "#41b6e1",
    accentFg: "#001a24",
    contactHref: buildContactHref({
      line: "Premoldeados industrializados",
      group: "Adoquines",
      item: "Consulta por adoquines",
    }),
  },
  {
    index: "02",
    title: "Bloques",
    sub: "Mamposteria y obra civil",
    category: "Constructoras + corralones",
    image: "/Lo que fabricamos/bloques.webp",
    alt: "Bloques de hormigon Cimalco Patagonia",
    summary:
      "Sistema completo para obra civil, cerramientos y proyectos que necesitan una solucion rapida de ejecutar y simple de escalar.",
    specs: [
      { name: "P20 / P20M", note: "Bloque estandar y variante" },
      { name: "SP20 / U20", note: "Variantes segun catalogo" },
      { name: "Corralones y desarrolladoras" },
    ],
    accent: "#ffd239",
    accentFg: "#1a1000",
    contactHref: buildContactHref({
      line: "Premoldeados industrializados",
      group: "Bloques",
      item: "Consulta por bloques",
    }),
  },
  {
    index: "03",
    title: "Camaras y postes",
    sub: "Infraestructura tecnica",
    category: "Energia + Oil & Gas",
    image: "/Lo que fabricamos/camaras y postes.png",
    alt: "Camaras y postes de hormigon Cimalco",
    summary:
      "Prefabricados para infraestructura de alta exigencia, con fabricacion especial y respuesta tecnica para energia, industria y yacimiento.",
    specs: [
      { name: "Camaras de valvulas", note: "Oil & Gas e industria" },
      { name: "Postes BT / MT", note: "Con referencia IRAM" },
      { name: "Piezas especiales a medida" },
    ],
    accent: "#c9f442",
    accentFg: "#0f1a00",
    contactHref: buildContactHref({
      line: "Premoldeados",
      group: "Camaras y postes",
      item: "Consulta por camaras y postes",
    }),
  },
];

export function ProductRows() {
  return (
    <section id="productos" className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-[1600px]">
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
            Tres familias con presencia visual propia, lectura mas clara y un acceso directo para consultar exactamente la linea que necesitas.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {families.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group overflow-hidden rounded-[34px] border border-black/8 bg-[#f6f1e5] shadow-[0_18px_44px_rgba(0,0,0,0.07)]"
            >
              <div
                className="absolute inset-x-0 top-0 z-10 h-[4px]"
                style={{ backgroundColor: item.accent }}
              />

              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.18)_28%,rgba(0,0,0,0.62)_100%)]" />

                <div className="absolute inset-x-0 top-0 flex items-start justify-between p-6">
                  <span
                    className="font-display text-[5.2rem] font-bold leading-none select-none"
                    style={{ color: "rgba(255,255,255,0.18)" }}
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

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/46">
                    {item.sub}
                  </p>
                  <h3 className="mt-2 font-display text-[clamp(2.1rem,4vw,3rem)] uppercase leading-none tracking-[0.02em] text-white">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="relative -mt-6 mx-4 mb-4 flex min-h-[300px] flex-col rounded-[28px] border border-black/8 bg-[rgba(255,255,255,0.92)] p-6 shadow-[0_16px_34px_rgba(0,0,0,0.08)] backdrop-blur-xl">
                <div
                  className="h-[2px] w-12 rounded-full"
                  style={{ backgroundColor: item.accent }}
                />

                <p className="mt-4 text-sm leading-7 text-black/56">
                  {item.summary}
                </p>

                <div className="mt-5 space-y-2.5">
                  {item.specs.map((spec) => (
                    <div key={spec.name} className="flex items-start gap-2.5 text-sm">
                      <span
                        className="mt-[7px] h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ backgroundColor: item.accent }}
                      />
                      <span>
                        <span className="font-medium text-black/78">{spec.name}</span>
                        {"note" in spec && spec.note ? (
                          <span className="text-black/42"> - {spec.note}</span>
                        ) : null}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={item.contactHref}
                  className="mt-auto inline-flex items-center gap-2 self-start rounded-full px-6 py-3 text-[11px] font-bold uppercase tracking-[0.22em] transition hover:-translate-y-0.5"
                  style={{ backgroundColor: item.accent, color: item.accentFg }}
                >
                  Contactanos
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
