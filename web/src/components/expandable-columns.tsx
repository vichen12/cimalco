"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "60+", label: "Años en Patagonia" },
  { value: "~26.000 m²", label: "Planta en Neuquen" },
  { value: "4 líneas", label: "Productivas activas" },
  { value: "Única AT", label: "Postes alta tension" },
];

const links = [
  {
    eyebrow: "Productos",
    title: "Catalogo 2025",
    body: "Premoldeados industrializados, pretensados y premoldeados tipicos con fichas tecnicas.",
    href: "/catalogo",
    cta: "Ver catalogo",
  },
  {
    eyebrow: "Servicios externos",
    title: "Montaje y colocacion",
    body: "Instalacion de premoldeados, adoquines y cercos perimetrales para obras de cualquier escala.",
    href: "/servicios",
    cta: "Ver servicios",
  },
  {
    eyebrow: "Contacto directo",
    title: "Hablemos de tu obra",
    body: "Respondemos desde planta en menos de 24 hs. Sin intermediarios, directo con el equipo comercial.",
    href: "/contacto",
    cta: "Contactanos",
  },
];

export function ExpandableColumns() {
  return (
    <section id="empresa" className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto w-full max-w-[1600px]">

        {/* Header + stats */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/38">
              Empresa · Neuquen, Patagonia
            </p>
            <h2 className="mt-2 font-display text-[clamp(2.2rem,4.5vw,4rem)] uppercase leading-[0.92] tracking-[0.04em] text-brand-charcoal">
              60 años fabricando
              <span className="block text-brand-yellow">Patagonia.</span>
            </h2>
          </div>
          {/* Stats inline on desktop */}
          <div className="hidden lg:grid grid-cols-4 gap-px overflow-hidden rounded-[18px] border border-black/8 bg-black/6">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/90 px-5 py-4">
                <p className="font-display text-[1.5rem] uppercase leading-none tracking-tight text-brand-charcoal">
                  {s.value}
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/38">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats mobile */}
        <div className="mb-8 grid grid-cols-2 gap-2 lg:hidden">
          {stats.map((s) => (
            <div key={s.label} className="rounded-[16px] border border-black/8 bg-white/80 px-4 py-4">
              <p className="font-display text-[1.5rem] uppercase leading-none text-brand-charcoal">{s.value}</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/38">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Link cards */}
        <div className="grid gap-4 lg:grid-cols-3">
          {links.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group flex flex-col rounded-[22px] border border-black/8 bg-white/72 p-6 shadow-[0_4px_16px_rgba(0,0,0,0.04)] transition hover:border-brand-yellow/40 hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)]"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-black/30">{item.eyebrow}</p>
              <h3 className="mt-2 font-display text-[1.25rem] uppercase leading-tight tracking-[0.03em] text-brand-charcoal">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-black/50">{item.body}</p>
              <div className="mt-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/36 transition group-hover:text-brand-charcoal">
                {item.cta}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Credentials strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-black/6 pt-6"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/26">Certificaciones</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/44">IRAM · Bloques y adoquines</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/44">Ley 3338 · Oil & Gas</span>
          <span className="mx-2 hidden h-3 w-px bg-black/14 lg:block" />
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/26">Clientes</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/44">YPF · Tecpetrol · EPEN</span>
        </motion.div>

      </div>
    </section>
  );
}
