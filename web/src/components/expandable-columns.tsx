"use client";

import { motion } from "motion/react";
import { ShieldCheck, Factory, Zap } from "lucide-react";

const stats = [
  { value: "60+", label: "Años en Patagonia" },
  { value: "26.000 m²", label: "Planta industrial" },
  { value: "Ley 3338", label: "Para Oil & Gas" },
  { value: "Única AT", label: "Postes alta tensión" },
];

const certifications = [
  {
    icon: ShieldCheck,
    accent: "#c9f442",
    accentFg: "#1a2a00",
    tag: "Ley 3338 · Oil & Gas",
    headline: "Empresa Neuquina habilitada",
    sub: "Cumple con requisitos provinciales para proyectos petroleros y pliegos específicos de Neuquén.",
  },
  {
    icon: ShieldCheck,
    accent: "#ffd239",
    accentFg: "#1a1000",
    tag: "Norma IRAM",
    headline: "Calidad certificada en planta",
    sub: "Bloques y adoquines fabricados bajo normativa IRAM vigente. Apto para licitaciones y obra pública.",
  },
  {
    icon: Zap,
    accent: "#41b6e1",
    accentFg: "#001a24",
    tag: "Único fabricante AT · Patagonia",
    headline: "Postes de alta tensión",
    sub: "Única planta regional con capacidad para postes AT. Planta propia de 26.000 m² en Neuquén.",
  },
];

export function ExpandableColumns() {
  return (
    <section
      id="empresa"
      className="px-5 pb-16 pt-14 sm:px-8 lg:px-10 lg:pb-20 lg:pt-16"
      style={{ background: "#eee9db" }}
    >
      <div className="mx-auto w-full max-w-[1600px] space-y-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/38">
              Empresa · Neuquén, Patagonia
            </p>
            <h2 className="mt-2 font-display text-[clamp(2rem,4vw,3.6rem)] uppercase leading-[0.92] tracking-[0.04em] text-brand-charcoal">
              Más de seis décadas
              <span className="block text-brand-yellow">fabricando en Patagonia.</span>
            </h2>
          </div>
          <a
            href="/empresa"
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 transition hover:text-black/70 shrink-0"
          >
            Ver empresa →
          </a>
        </motion.div>

        {/* Stats band */}
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

        {/* Certification badges — institutional style */}
        <div className="grid gap-3 sm:grid-cols-3">
          {certifications.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.tag}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="relative overflow-hidden rounded-[18px] border border-black/8 bg-white/70 px-6 py-5"
              >
                {/* Color top stripe */}
                <div className="absolute inset-x-0 top-0 h-[3px]" style={{ backgroundColor: c.accent }} />

                {/* Tag pill */}
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.18em] mb-3"
                  style={{ backgroundColor: c.accent, color: c.accentFg }}
                >
                  <Icon className="h-2.5 w-2.5" />
                  {c.tag}
                </span>

                <p className="font-display text-[15px] uppercase tracking-[0.03em] text-brand-charcoal leading-tight">
                  {c.headline}
                </p>
                <p className="mt-2 text-[11.5px] leading-[1.6] text-black/48">
                  {c.sub}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
