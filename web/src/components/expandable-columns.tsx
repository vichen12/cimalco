"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "60+", label: "Años en Patagonia" },
  { value: "26.000 m²", label: "Planta propia" },
  { value: "Ley 3338", label: "Empresa Neuquina" },
  { value: "Única AT", label: "Postes alta tension" },
];

const credentials = [
  {
    label: "Habilitacion provincial",
    title: "Empresa Neuquina",
    subtitle: "Ley 3338",
    body: "Prioridad legal en licitaciones del Estado provincial. Habilitacion obligatoria para contratos en Oil & Gas y obra publica en Neuquen.",
    accent: "#c9f442",
    accentDark: "#3d6000",
  },
  {
    label: "Certificacion de calidad",
    title: "Norma IRAM",
    subtitle: "Bloques y adoquines",
    body: "Produccion certificada bajo normas IRAM vigentes. Garantia de cumplimiento para licitaciones, obra publica y privada.",
    accent: "#ffd239",
    accentDark: "#8a6800",
  },
  {
    label: "Fabricacion local",
    title: "Unica planta AT",
    subtitle: "Patagonia norte",
    body: "Unico fabricante regional con capacidad para postes de alta tension. Planta propia ~26.000 m² en Neuquen. Sin logistica de larga distancia.",
    accent: "#41b6e1",
    accentDark: "#0e6a94",
  },
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
    <section
      id="empresa"
      className="px-5 pb-16 pt-14 sm:px-8 lg:px-10 lg:pb-24 lg:pt-20"
      style={{ background: "#eee9db" }}
    >
      <div className="mx-auto w-full max-w-[1600px] space-y-10">

        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
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
          <p className="max-w-md text-sm leading-7 text-black/48 lg:text-right">
            Planta propia en Neuquen, logistica directa y la unica capacidad en Patagonia
            para fabricar postes de alta tension.
          </p>
        </motion.div>

        {/* ── Stats band (dark) ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="overflow-hidden rounded-[20px]"
          style={{ background: "#181410" }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="flex flex-col gap-3 px-7 py-9 lg:px-8 lg:py-10"
                style={{
                  borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.06)" : undefined,
                  borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.06)" : undefined,
                }}
              >
                <div className="h-[3px] w-8 rounded-full bg-brand-yellow" />
                <p className="font-display text-[clamp(1.7rem,2.8vw,2.6rem)] uppercase leading-none tracking-tight text-white">
                  {s.value}
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/32">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Credentials ── */}
        <div className="grid gap-4 sm:grid-cols-3">
          {credentials.map((c, i) => (
            <motion.div
              key={c.subtitle}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="flex flex-col overflow-hidden rounded-[20px] border border-black/10 bg-white shadow-[0_4px_18px_rgba(0,0,0,0.05)]"
            >
              <div className="h-[4px]" style={{ backgroundColor: c.accent }} />
              <div className="flex flex-1 flex-col px-6 py-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-black/34">
                  {c.label}
                </p>
                <p className="mt-2 font-display text-[clamp(1.15rem,1.8vw,1.55rem)] uppercase leading-tight tracking-[0.03em] text-brand-charcoal">
                  {c.title}
                </p>
                <p
                  className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.1em]"
                  style={{ color: c.accentDark }}
                >
                  {c.subtitle}
                </p>
                <div className="mt-1 h-px bg-black/8" />
                <p className="mt-4 text-[13px] leading-6 text-black/50">{c.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Link cards ── */}
        <div className="grid gap-4 lg:grid-cols-3">
          {links.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-[20px] border border-white/20 bg-brand-charcoal p-6 shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(0,0,0,0.18)]"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-brand-yellow/70">
                {item.eyebrow}
              </p>
              <h3 className="mt-2 font-display text-[clamp(1.2rem,2vw,1.55rem)] uppercase leading-tight tracking-[0.03em] text-white">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-white/44">{item.body}</p>
              <div className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-brand-yellow px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a1000] transition-all duration-200 group-hover:gap-3">
                {item.cta}
                <ArrowRight className="h-3 w-3" />
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
