"use client";

import Image from "next/image";
import { ArrowRight, BookOpen, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const metrics = [
  { value: "1947", label: "Fundacion" },
  { value: "26.000 m2", label: "Planta propia" },
  { value: "IRAM", label: "Certificacion" },
  { value: "Directa", label: "Venta" },
];

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex flex-col justify-end overflow-hidden"
      style={{ minHeight: "calc(100svh - 60px)" }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/site-assets/premoldeados-de-hormigon.jpg"
        className="absolute inset-0 h-full w-full object-cover object-[72%_center] sm:object-center"
      >
        <source src="/VideoHero.mp4" type="video/mp4" />
        <Image
          src="/site-assets/premoldeados-de-hormigon.jpg"
          alt="Planta Cimalco Patagonia"
          fill
          priority
          className="object-cover"
        />
      </video>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.48)_0%,rgba(0,0,0,0.42)_32%,rgba(0,0,0,0.84)_100%)]" />

      <div className="relative z-10 w-full px-5 pb-10 pt-28 sm:px-8 sm:pb-12 lg:px-10 lg:pb-16">
        <div className="mx-auto w-full max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[860px]"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-black/34 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/72 backdrop-blur-md">
              <ShieldCheck className="h-3.5 w-3.5 text-brand-yellow" />
              Desde Neuquen para toda la Patagonia
            </div>

            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/56 sm:text-xs">
              Cimalco Patagonia
            </p>

            <h1 className="mt-3 max-w-[13ch] font-display text-[clamp(2.9rem,6vw,6.2rem)] uppercase leading-[0.92] tracking-[0.02em] text-white">
              Hormigon industrial
            </h1>

            <p className="mt-3 max-w-[22ch] font-display text-[clamp(1.2rem,2.4vw,2rem)] uppercase leading-[1] tracking-[0.08em] text-brand-yellow">
              Para obras que perduran en Patagonia
            </p>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
              Mas de seis decadas fabricando premoldeados y pretensados de hormigon en Neuquen.
              Unica planta regional con capacidad para postes de alta tension.
              Certificacion IRAM. Habilitados con Ley 3338 para Oil & Gas.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contacto" variant="accent" className="gap-2 px-8 py-4 text-[11px] tracking-[0.22em]">
                Contactanos
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href="/catalogo"
                variant="outline"
                className="gap-2 px-7 py-4 text-[11px] tracking-[0.22em]"
              >
                <BookOpen className="h-4 w-4" />
                Ver catalogo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 grid grid-cols-2 gap-3 sm:max-w-[620px] sm:grid-cols-4"
          >
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-2xl border border-white/10 bg-white/8 px-4 py-4 backdrop-blur-sm"
              >
                <p className="font-display text-3xl uppercase leading-none tracking-[0.05em] text-white">
                  {metric.value}
                </p>
                <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em] text-white/48">
                  {metric.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
