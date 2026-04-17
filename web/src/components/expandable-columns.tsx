"use client";

import { Award, ShieldCheck, Truck } from "lucide-react";
import { motion } from "motion/react";

const pillars = [
  {
    icon: Award,
    color: "#ffd239",
    title: "Unica en la region",
    eyebrow: "Capacidad exclusiva en Patagonia",
    body: "La unica planta en Patagonia con capacidad para fabricar postes de alta tension. Mas de seis decadas de operacion ininterrumpida desde Neuquen capital, con obras en toda la region hasta Tierra del Fuego.",
  },
  {
    icon: ShieldCheck,
    color: "#919191",
    title: "Certificacion y norma",
    eyebrow: "IRAM · Ley 3338 · Control propio",
    body: "Bloques y adoquines certificados bajo normas IRAM vigentes. Habilitados con Ley 3338 para operaciones en Oil & Gas. Laboratorio de control y desarrollo de hormigones como respaldo tecnico de cada lote.",
  },
  {
    icon: Truck,
    color: "#2d2d2d",
    title: "Logistica directa",
    eyebrow: "Sin intermediarios desde planta",
    body: "Fabricamos y entregamos desde Neuquen. Sin depender de distribuidores del centro del pais: menor costo, menor tiempo de espera y trazabilidad directa de planta a obra en toda la Patagonia.",
  },
];

export function ExpandableColumns() {
  return (
    <section id="empresa" className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
      <div className="mx-auto w-full max-w-[1600px]">

        {/* Section header */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/38">
              Empresa
            </p>
            <h2 className="mt-2 font-display text-[clamp(2.4rem,5vw,4.5rem)] uppercase leading-[0.92] tracking-[0.04em] text-brand-charcoal">
              Por que Cimalco.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-black/48">
            Fabricacion propia, entrega directa y respaldo tecnico en cada proyecto.
          </p>
        </div>

        {/* Pillars */}
        <div className="grid gap-4 lg:grid-cols-3">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                className="group rounded-3xl border border-black/10 bg-white/55 p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
              >
                <div
                  className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: item.color, color: item.color === "#2d2d2d" ? "#fff" : "#111" }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/36">
                  {item.eyebrow}
                </p>
                <h3 className="mt-1.5 font-display text-2xl uppercase leading-none tracking-[0.04em] text-brand-charcoal">
                  {item.title}
                </h3>
                <div
                  className="mt-4 mb-4 h-[2px] w-10 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <p className="text-sm leading-7 text-black/58 sm:text-base">
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
