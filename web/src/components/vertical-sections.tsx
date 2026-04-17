"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Factory, Pickaxe, Route, Zap } from "lucide-react";

const verticals = [
  {
    title: "Energia",
    icon: Zap,
    accent: "#c9f442",
    accentFg: "#0f1a00",
    image: "/Donde opera Cimalco/energia.png",
    summary:
      "Unica planta en Patagonia con capacidad para postes de alta tension. Produccion para alta, media y baja tension con obras en toda la region hasta Tierra del Fuego.",
    items: [
      "Postes AT, MT y BT",
      "Unica fabrica regional AT",
      "Cobertura hasta Tierra del Fuego",
    ],
    index: "01",
    href: "/catalogo#pretensados",
  },
  {
    title: "Oil & Gas",
    icon: Pickaxe,
    accent: "#ffd239",
    accentFg: "#1a1000",
    image: "/Donde opera Cimalco/oil y gas .png",
    summary:
      "Camaras, bases, sleepers y premoldeados a medida para Vaca Muerta y entornos de alta exigencia operativa. Habilitados bajo Ley 3338.",
    items: [
      "Camaras y bases a medida",
      "Sleepers para yacimiento",
      "Ley 3338 - Habilitados",
    ],
    index: "02",
    href: "/contacto?line=Premoldeados",
  },
  {
    title: "Vial",
    icon: Route,
    accent: "#41b6e1",
    accentFg: "#001a24",
    image: "/Donde opera Cimalco/vial.png",
    summary:
      "Adoquines IRAM, cordones premoldeados, divisores Jersey y losetas de ductos para obra publica y privada en toda la region.",
    items: [
      "Uni Stone 8 / Holanda 6 IRAM",
      "Cordones y losetas",
      "Municipios y desarrolladoras",
    ],
    index: "03",
    href: "/catalogo#industrializados",
  },
  {
    title: "Especiales",
    icon: Factory,
    accent: "#ffffff",
    accentFg: "#1a1a1a",
    image: "/Donde opera Cimalco/especiales.png",
    summary:
      "Shelters industriales para cromatografia, estructuras con paneles solares y piezas a medida para requerimientos fuera del catalogo estandar.",
    items: [
      "Shelters para Oil & Gas",
      "Estructuras fotovoltaicas",
      "Diseno y fabricacion a pedido",
    ],
    index: "04",
    href: "/contacto?line=Premoldeados",
  },
];

export function VerticalSections() {
  const [active, setActive] = useState(0);

  return (
    <section id="verticales" className="px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/38">
              Verticales
            </p>
            <h2 className="mt-2 font-display text-[clamp(2.2rem,4.5vw,4rem)] uppercase leading-[0.92] tracking-[0.04em] text-brand-charcoal">
              Donde opera Cimalco.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-black/46">
            Cuatro verticales para entender rapido donde opera Cimalco y que tipo
            de respuesta tecnica aporta en cada rubro.
          </p>
        </div>

        <div
          className="hidden h-[580px] overflow-hidden rounded-[28px] border border-black/8 lg:flex"
          onMouseLeave={() => setActive(0)}
        >
          {verticals.map((item, i) => {
            const isActive = active === i;
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="relative cursor-pointer overflow-hidden"
                style={{
                  flex: isActive ? "3 0 0%" : "1 0 0%",
                  transition: "flex 0.55s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={() => setActive(i)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  style={{
                    transition: "filter 0.55s ease, transform 0.7s ease",
                    filter: isActive
                      ? "brightness(0.82)"
                      : "brightness(0.18) saturate(0.28) contrast(1.04)",
                    transform: isActive ? "scale(1.04)" : "scale(1)",
                  }}
                  sizes="(max-width: 1600px) 50vw, 800px"
                />

                <div
                  className="absolute inset-x-0 bottom-0 h-[3px]"
                  style={{ backgroundColor: item.accent }}
                />

                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    opacity: isActive ? 0 : 1,
                    transition: "opacity 0.3s ease",
                    pointerEvents: "none",
                  }}
                >
                  <div className="flex flex-col items-center gap-4">
                    <span
                      className="font-display text-[2.8rem] font-bold leading-none opacity-10"
                      style={{ color: item.accent }}
                    >
                      {item.index}
                    </span>
                    <span className="[writing-mode:vertical-rl] rotate-180 font-display text-[1.05rem] uppercase tracking-[0.12em] text-white/70">
                      {item.title}
                    </span>
                    <div
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: item.accent }}
                    />
                  </div>
                </div>

                <div
                  className="absolute inset-0 flex flex-col justify-end p-8"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 0.35s ease 0.1s",
                    pointerEvents: isActive ? "auto" : "none",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.4) 55%, transparent 100%)",
                  }}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 items-center justify-center rounded-xl"
                      style={{ backgroundColor: item.accent, color: item.accentFg }}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/34">
                      {item.index}
                    </span>
                  </div>

                  <h3
                    className="font-display text-[clamp(2rem,3.5vw,3rem)] uppercase leading-none tracking-[0.03em]"
                    style={{ color: item.accent }}
                  >
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-[38ch] text-sm leading-6 text-white/60">
                    {item.summary}
                  </p>

                  <div className="mt-5 space-y-1.5">
                    {item.items.map((bullet) => (
                      <div
                        key={bullet}
                        className="flex items-center gap-2 text-[12px] text-white/50"
                      >
                        <span
                          className="h-1 w-1 flex-shrink-0 rounded-full"
                          style={{ backgroundColor: item.accent }}
                        />
                        {bullet}
                      </div>
                    ))}
                  </div>

                  <a
                    href={item.href}
                    className="mt-6 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition hover:gap-3"
                    style={{ color: item.accent }}
                  >
                    Ver mas <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid gap-3 lg:hidden">
          {verticals.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="relative overflow-hidden rounded-[22px]"
                style={{ minHeight: 200 }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  style={{ filter: "brightness(0.55)" }}
                  sizes="100vw"
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-[3px]"
                  style={{ backgroundColor: item.accent }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-5">
                  <div className="mb-2 flex items-center gap-2.5">
                    <div
                      className="flex h-7 w-7 items-center justify-center rounded-lg"
                      style={{ backgroundColor: item.accent, color: item.accentFg }}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    <h3
                      className="font-display text-[1.6rem] uppercase leading-none tracking-[0.03em]"
                      style={{ color: item.accent }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-6 text-white/60">{item.summary}</p>
                  <a
                    href={item.href}
                    className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: item.accent }}
                  >
                    Ver mas <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
