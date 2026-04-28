"use client";

import { motion } from "motion/react";

const credentials = [
  {
    label: "Habilitacion provincial",
    title: "Empresa Neuquina",
    subtitle: "Ley 3338",
    display: "3338",
    body: "Prioridad legal en licitaciones del Estado provincial. Habilitacion obligatoria para contratos en Oil & Gas y obra publica en Neuquen.",
    accent: "#c9f442",
    accentDark: "#3d6000",
  },
  {
    label: "Certificacion de calidad",
    title: "Norma IRAM",
    subtitle: "Bloques y adoquines",
    display: "IRAM",
    body: "Produccion certificada bajo normas IRAM vigentes. Garantia de cumplimiento para licitaciones, obra publica y privada.",
    accent: "#ffd239",
    accentDark: "#8a6800",
  },
  {
    label: "Fabricacion local",
    title: "Unica planta AT",
    subtitle: "Patagonia norte",
    display: "AT",
    body: "Unico fabricante regional con capacidad para postes de alta tension. Planta propia ~26.000 m² en Neuquen. Sin logistica de larga distancia.",
    accent: "#41b6e1",
    accentDark: "#0e6a94",
  },
];

export function CredentialsSection() {
  return (
    <section className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20" style={{ background: "#fffdf0" }}>
      <div className="mx-auto w-full max-w-[1600px]">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
          className="mb-10 text-[10px] font-bold uppercase tracking-[0.3em] text-black/30"
        >
          Certificaciones y habilitaciones
        </motion.p>

        <div className="grid gap-5 sm:grid-cols-3">
          {credentials.map((c, i) => (
            <motion.div
              key={c.subtitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col overflow-hidden rounded-[24px] border border-black/8 bg-white shadow-[0_8px_28px_rgba(0,0,0,0.06)]"
            >
              {/* Colored top zone */}
              <div
                className="relative flex items-end px-7 pb-5 pt-7 overflow-hidden"
                style={{ backgroundColor: `${c.accent}18` }}
              >
                {/* Decorative large display value */}
                <span
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-display font-bold uppercase leading-none select-none"
                  style={{
                    fontSize: "clamp(4rem, 8vw, 6.5rem)",
                    color: c.accent,
                    opacity: 0.18,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {c.display}
                </span>

                <div className="relative z-10">
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.3em]"
                    style={{ color: c.accentDark }}
                  >
                    {c.label}
                  </p>
                  <p className="mt-2 font-display text-[clamp(1.4rem,2vw,1.9rem)] uppercase leading-tight tracking-[0.03em] text-brand-charcoal">
                    {c.title}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <div
                      className="h-[3px] w-6 rounded-full"
                      style={{ backgroundColor: c.accent }}
                    />
                    <p
                      className="font-display text-[clamp(0.9rem,1.2vw,1.05rem)] uppercase tracking-[0.06em]"
                      style={{ color: c.accentDark }}
                    >
                      {c.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col px-7 py-6">
                <p className="text-sm leading-7 text-black/54">{c.body}</p>
              </div>

              {/* Bottom accent bar */}
              <div className="h-[4px]" style={{ backgroundColor: c.accent }} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
