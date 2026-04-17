"use client";

import Image from "next/image";

const logos = [
  { src: "/logos/ypf.png", alt: "YPF" },
  { src: "/logos/png-transparent-petrobras-hd-logo.png", alt: "Petrobras" },
  { src: "/logos/Techint_Logo.svg.png", alt: "Techint" },
  { src: "/logos/sk6796i788-skanska-ab-logo-investor-spotlight-skanska-usa-tampa-bay-economic-development.png", alt: "Skanska" },
  { src: "/logos/png-transparent-sika-claimu-pos-rgb-hd-logo.png", alt: "Sika" },
  { src: "/logos/Lomanegra_company_logo.png", alt: "Loma Negra" },
  { src: "/logos/Logo-vector-pluspetrol-transparent.png.web.480.480.webp", alt: "Pluspetrol" },
  { src: "/logos/abb.png", alt: "ABB" },
  { src: "/logos/edersa.png", alt: "Edersa" },
  { src: "/logos/distrocuyo-marca-horizontal-01-copia.webp", alt: "Distrocuyo" },
  { src: "/logos/Logo-wr_grace.svg.png", alt: "WR Grace" },
  { src: "/logos/Human Energy.png", alt: "Human Energy" },
];

const FADE =
  "linear-gradient(to right, transparent 0%, black 7%, black 93%, transparent 100%)";

function LogoTrack({
  items,
  duration,
  reverse = false,
}: {
  items: typeof logos;
  duration: number;
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden"
      style={{ maskImage: FADE, WebkitMaskImage: FADE }}
    >
      <div
        className="flex w-max gap-4"
        style={{
          animation: `marquee ${duration}s linear infinite${reverse ? " reverse" : ""}`,
        }}
      >
        {doubled.map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className="flex h-[88px] w-[180px] flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-black/8 bg-white/76 shadow-[0_10px_24px_rgba(0,0,0,0.04)]"
            aria-hidden={index >= items.length}
          >
            <div className="relative h-full w-full">
              <Image
                src={logo.src}
                alt={index < items.length ? logo.alt : ""}
                fill
                className="object-contain p-5 opacity-80 transition-opacity duration-300 hover:opacity-100"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BrandCarousel() {
  const reversed = [...logos].reverse();

  return (
    <section id="referencias" className="py-16 lg:py-20">
      <div className="mx-auto mb-12 w-full max-w-[1600px] px-5 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/38">
              Respaldo
            </p>
            <h2 className="mt-2 font-display text-[clamp(2.4rem,5vw,4.5rem)] uppercase leading-[0.92] tracking-[0.04em] text-brand-charcoal">
              Clientes y referencias.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-black/50 sm:text-base">
            Presencia en obra publica y privada en toda la region Patagonica.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <LogoTrack items={logos} duration={34} />
        <LogoTrack items={reversed} duration={40} reverse />
      </div>
    </section>
  );
}
