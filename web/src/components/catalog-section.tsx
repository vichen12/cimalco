"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronDown, ChevronLeft, ChevronRight, Download, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

type CatalogSpec = {
  label: string;
  value: string;
};

type GroupedItem = {
  title: string;
  model: string;
  use: string;
  dimensions: string;
  weight: string;
  performance: string;
  pallet: string;
  color: string;
};

type CatalogCard = {
  title: string;
  subtitle: string;
  description: string;
  lineLabel: string;
  image: string;
  alt: string;
  accent: string;
  specs: CatalogSpec[];
  groupedItems?: GroupedItem[];
};

const WHATSAPP_BASE = "https://wa.me/5492996109261";

const cards: CatalogCard[] = [
  {
    title: "Bloque Liso",
    subtitle: "P20",
    description: "El estandar para muros de alta resistencia y terminacion estetica.",
    lineLabel: "Productos patagonicos | Linea bloques",
    image: "/catalogo/bloque-liso-p20-actualizado.png",
    alt: "Bloque liso P20 de Cimalco Patagonia",
    accent: "#ffd239",
    specs: [
      { label: "Modelo", value: "P20" },
      { label: "Dimensiones", value: "19 x 19 x 39 cm" },
      { label: "Peso por unidad", value: "14 kg" },
      { label: "Rendimiento", value: "12.5 unidades por m2" },
      { label: "Capacidad por pallet", value: "90 unidades (1300 kg)" },
      { label: "Colores", value: "Gris, Rojo, Amarillo, Negro" },
    ],
  },
  {
    title: "Medio Bloque Liso",
    subtitle: "P20M",
    description: "Ideal para terminaciones, esquinas y ajustes sin necesidad de corte.",
    lineLabel: "Productos patagonicos | Linea bloques",
    image: "/catalogo/medio-bloque-liso-p20m.png",
    alt: "Medio bloque liso P20M de Cimalco Patagonia",
    accent: "#919191",
    specs: [
      { label: "Modelo", value: "P20M" },
      { label: "Dimensiones", value: "19 x 19 x 19 cm" },
      { label: "Peso por unidad", value: "8 kg" },
      { label: "Rendimiento", value: "25 unidades por m2" },
      { label: "Capacidad por pallet", value: "180 unidades (1450 kg)" },
      { label: "Colores", value: "Gris, Rojo, Amarillo, Negro" },
    ],
  },
  {
    title: "Bloque Simil Piedra",
    subtitle: "SP20 y SP20M",
    description: "Terminacion rustica para muros texturados y proyectos de lectura arquitectonica.",
    lineLabel: "Productos patagonicos | Linea simil piedra",
    image: "/catalogo/pieza-complementarias-sp20-sp20m.png",
    alt: "Bloques simil piedra SP20 y SP20M de Cimalco Patagonia",
    accent: "#2d2d2d",
    specs: [],
    groupedItems: [
      {
        title: "Bloque Simil Piedra",
        model: "SP20",
        use: "Bloque texturado disenado para muros con una terminacion rustica y estetica.",
        dimensions: "19 x 19 x 39 cm",
        weight: "19 kg",
        performance: "12.5 unidades por m2",
        pallet: "90 unidades (1900 kg)",
        color: "Simil piedra",
      },
      {
        title: "Medio Bloque Simil Piedra",
        model: "SP20M",
        use: "Componente ideal para ajustes y terminaciones precisas manteniendo la estetica de la linea.",
        dimensions: "19 x 19 x 19 cm",
        weight: "9.5 kg",
        performance: "25 unidades por m2",
        pallet: "180 unidades (1800 kg)",
        color: "Simil piedra",
      },
    ],
  },
  {
    title: "Complementarias Simil Piedra",
    subtitle: "P20E y PSP20",
    description: "Piezas para resolver esquinas, remates y revestimientos de la linea simil piedra.",
    lineLabel: "Productos patagonicos | Linea simil piedra",
    image: "/catalogo/pieza-complementarias-p20e-psp20.png",
    alt: "Piezas complementarias simil piedra P20E y PSP20 de Cimalco Patagonia",
    accent: "#919191",
    specs: [],
    groupedItems: [
      {
        title: "Esquinero Simil Piedra",
        model: "P20E",
        use: "Pieza de encuentro especializada para resolver esquinas en muros texturados sin perder la continuidad.",
        dimensions: "19 x 19 x 20 cm",
        weight: "10 kg",
        performance: "25 unidades por m2",
        pallet: "180 unidades (1800 kg)",
        color: "Simil piedra",
      },
      {
        title: "Placa Simil Piedra Revest",
        model: "PSP20",
        use: "Placa delgada de alta densidad, perfecta para revestimientos decorativos superficiales.",
        dimensions: "5 x 19 x 39 cm",
        weight: "11.5 kg",
        performance: "12.5 unidades por m2",
        pallet: "190 unidades (2185 kg)",
        color: "Simil piedra",
      },
    ],
  },
  {
    title: "Adoquin Uni Stone 8 cm",
    subtitle: "UNI8",
    description: "Pavimento articulado de alta resistencia para transito vehicular y peatonal.",
    lineLabel: "Productos patagonicos | Linea pavimentos",
    image: "/catalogo/adoquin-uni-stone-8cm.png",
    alt: "Adoquin Uni Stone 8 cm de Cimalco Patagonia",
    accent: "#ffd239",
    specs: [
      { label: "Modelo", value: "UNI8" },
      { label: "Dimensiones", value: "10.1 x 20.4 x 8 cm" },
      { label: "Peso por unidad", value: "4.2 kg" },
      { label: "Rendimiento", value: "40 unidades por m2" },
      { label: "Capacidad por pallet", value: "12.25 m2 (2116 kg)" },
      { label: "Colores", value: "Gris, Rojo, Amarillo, Negro" },
    ],
  },
  {
    title: "Adoquin Holanda 6 cm",
    subtitle: "H6",
    description: "Pieza de pavimento para veredas, accesos y espacios urbanos con terminacion prolija.",
    lineLabel: "Productos patagonicos | Linea pavimentos",
    image: "/catalogo/adoquin-holanda-6cm-actualizado.png",
    alt: "Adoquin Holanda 6 cm de Cimalco Patagonia",
    accent: "#919191",
    specs: [
      { label: "Modelo", value: "H6" },
      { label: "Dimensiones", value: "10 x 20 x 6 cm" },
      { label: "Peso por unidad", value: "2.6 kg" },
      { label: "Rendimiento", value: "50 unidades por m2" },
      { label: "Capacidad por pallet", value: "16.2 m2 (2146 kg)" },
      { label: "Colores", value: "Gris, Rojo, Amarillo, Negro" },
    ],
  },
  {
    title: "Pieza Complementaria",
    subtitle: "U20 y P10",
    description: "Soluciones para vigas, encadenados y tabiqueria de hormigon.",
    lineLabel: "Productos patagonicos | Linea complementaria",
    image: "/catalogo/pieza-complementaria-bloque-liso-u-y-murete.png",
    alt: "Pieza complementaria U20 y P10 de Cimalco Patagonia",
    accent: "#2d2d2d",
    specs: [],
    groupedItems: [
      {
        title: "Bloque Liso U",
        model: "U20",
        use: "Vigas encadenadas y refuerzos estructurales.",
        dimensions: "19 x 19 x 39 cm",
        weight: "19 kg",
        performance: "12.5 unidades por m2",
        pallet: "90 unidades (1750 kg)",
        color: "Gris",
      },
      {
        title: "Bloque Liso Murete",
        model: "P10",
        use: "Tabiques divisorios delgados y muros de baja carga.",
        dimensions: "10 x 19 x 39 cm",
        weight: "7 kg",
        performance: "12.5 unidades por m2",
        pallet: "180 unidades (1300 kg)",
        color: "Gris",
      },
    ],
  },
  {
    title: "Pieza Complementaria",
    subtitle: "LD y AV8",
    description: "Piezas para cobertura de ductos y pavimentos exteriores texturizados.",
    lineLabel: "Productos patagonicos | Linea complementaria",
    image: "/catalogo/pieza-complementaria-loseta-y-vanoton.png",
    alt: "Pieza complementaria LD y AV8 de Cimalco Patagonia",
    accent: "#ffd239",
    specs: [],
    groupedItems: [
      {
        title: "Loseta para Ductos",
        model: "LD",
        use: "Cobertura de canalizaciones o senderos.",
        dimensions: "100 x 50 x 7 cm",
        weight: "84 kg",
        performance: "2 unidades por m2",
        pallet: "12 unidades (1100 kg)",
        color: "Gris oscuro",
      },
      {
        title: "Adoquin Vanoton",
        model: "AV8",
        use: "Exteriores con textura antideslizante.",
        dimensions: "10.1 x 20.4 x 9 cm",
        weight: "4.2 kg",
        performance: "40 unidades por m2",
        pallet: "12.25 m2 (2050 kg)",
        color: "Rojo texturizado",
      },
    ],
  },
];

function hexToRgba(hex: string, opacity: number) {
  const normalized = hex.replace("#", "");
  const bigint = Number.parseInt(normalized, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function getSpecValue(card: CatalogCard, label: string) {
  return card.specs.find((spec) => spec.label === label)?.value ?? "";
}

function resolveColor(color: string) {
  const normalized = color.toLowerCase();

  if (normalized.includes("gris oscuro")) return "#5e6468";
  if (normalized.includes("gris")) return "#9da3a6";
  if (normalized.includes("rojo texturizado")) return "#8e5246";
  if (normalized.includes("rojo")) return "#9b4e43";
  if (normalized.includes("amarillo")) return "#c4a857";
  if (normalized.includes("negro")) return "#1f2124";
  if (normalized.includes("simil piedra")) return "#908477";

  return "#d1d5db";
}

function getAccentForeground(accent: string) {
  return accent === "#2d2d2d" ? "#ffffff" : "#111111";
}

function getColorTokens(card: CatalogCard) {
  const colors = card.groupedItems
    ? Array.from(new Set(card.groupedItems.map((item) => item.color)))
    : getSpecValue(card, "Colores")
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);

  return colors.slice(0, 4);
}

function buildWhatsappLink(title: string, subtitle: string) {
  const message = encodeURIComponent(`Hola Cimalco, quiero contactarme por ${title} (${subtitle}).`);
  return `${WHATSAPP_BASE}?text=${message}`;
}

function SingleSpecCard({ card }: { card: CatalogCard }) {
  const keySpecs = [
    { label: "Dimensiones", value: getSpecValue(card, "Dimensiones") },
    { label: "Peso", value: getSpecValue(card, "Peso por unidad") },
    { label: "Rendimiento", value: getSpecValue(card, "Rendimiento") },
    { label: "Pallet", value: getSpecValue(card, "Capacidad por pallet") },
  ];
  const colors = getColorTokens(card);

  return (
    <div className="space-y-2.5">
      <div className="grid grid-cols-2 gap-2">
        {keySpecs.map((spec) => (
          <div
            key={`${card.title}-${spec.label}`}
            className="rounded-[14px] border border-black/8 bg-black/[0.03] px-3 py-2.5"
          >
            <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/38">
              {spec.label}
            </p>
            <p className="mt-1 text-[12px] leading-5 text-black/76">{spec.value}</p>
          </div>
        ))}
      </div>

      {colors.length > 0 ? (
        <div className="rounded-[14px] border border-black/8 bg-black/[0.03] px-3 py-2.5">
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/38">
            Colores disponibles
          </p>
          <div className="mt-2 flex items-center gap-2">
            {colors.map((color) => (
              <span
                key={`${card.title}-${color}`}
                title={color}
                className="h-3.5 w-3.5 rounded-full border border-black/12"
                style={{ backgroundColor: resolveColor(color) }}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

function GroupedSpecCard({ card }: { card: CatalogCard }) {
  return (
    <div className="space-y-2.5">
      {card.groupedItems?.map((item) => (
        <details
          key={`${card.title}-${item.model}`}
          className="group/item overflow-hidden rounded-[16px] border border-black/8 bg-black/[0.03]"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-3 px-3 py-3">
            <div className="min-w-0">
              <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-black/88">
                {item.title}
              </p>
              <p className="mt-1 text-[12px] leading-5 text-black/56">
                Abrir detalle tecnico
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em]"
                style={{ backgroundColor: card.accent, color: getAccentForeground(card.accent) }}
              >
                {item.model}
              </div>
              <ChevronDown className="h-4 w-4 shrink-0 text-black/40 transition-transform duration-200 group-open/item:rotate-180" />
            </div>
          </summary>

          <div className="border-t border-black/8 px-3 py-3">
            <p className="mb-3 text-[12px] leading-5 text-black/56">{item.use}</p>

            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-[12px] bg-white/78 px-3 py-2.5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/34">
                  Dimensiones
                </p>
                <p className="mt-1 text-[12px] leading-5 text-black/76">{item.dimensions}</p>
              </div>
              <div className="rounded-[12px] bg-white/78 px-3 py-2.5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/34">
                  Peso
                </p>
                <p className="mt-1 text-[12px] leading-5 text-black/76">{item.weight}</p>
              </div>
              <div className="rounded-[12px] bg-white/78 px-3 py-2.5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/34">
                  Rendimiento
                </p>
                <p className="mt-1 text-[12px] leading-5 text-black/76">{item.performance}</p>
              </div>
              <div className="rounded-[12px] bg-white/78 px-3 py-2.5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/34">
                  Pallet
                </p>
                <p className="mt-1 text-[12px] leading-5 text-black/76">{item.pallet}</p>
              </div>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}

export function CatalogSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="catalogo" className="px-5 pb-6 pt-10 sm:px-8 lg:px-10 lg:pb-8 lg:pt-12">
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="mb-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/38">
              Catalogo
            </p>
            <h2 className="mt-2 font-display text-[clamp(2rem,4vw,3.4rem)] uppercase leading-[0.92] tracking-[0.04em] text-brand-charcoal">
              Productos listos para consultar.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-black/54 sm:text-base">
              Fichas tecnicas, dimensiones y contacto directo por WhatsApp para cada producto.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            {/* Dot indicators */}
            <div className="flex items-center gap-1.5">
              {scrollSnaps.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Ir a producto ${i + 1}`}
                  className="transition-all duration-300"
                  style={{
                    height: 6,
                    width: i === selectedIndex ? 28 : 6,
                    borderRadius: 999,
                    backgroundColor: i === selectedIndex ? "#ffd239" : "rgba(0,0,0,0.18)",
                  }}
                />
              ))}
            </div>

            {/* Nav arrows */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => emblaApi?.scrollPrev()}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/80 text-black/50 transition hover:border-brand-yellow hover:text-black"
                aria-label="Producto anterior"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => emblaApi?.scrollNext()}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/80 text-black/50 transition hover:border-brand-yellow hover:text-black"
                aria-label="Siguiente producto"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <Button
              href="https://cimalconeuquen.com.ar/archivos/cimalco-catalogo.pdf"
              target="_blank"
              rel="noreferrer"
              variant="secondary"
              className="gap-2 px-5 py-3 text-[11px] tracking-[0.22em]"
            >
              <Download className="h-4 w-4" />
              Ver PDF completo
            </Button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-start gap-5">
            {cards.map((card, index) => (
              <motion.article
                key={`${card.title}-${card.subtitle}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="min-w-0 max-w-[340px] flex-[0_0_86%] self-start sm:flex-[0_0_320px] lg:flex-[0_0_320px]"
              >
                <div className="overflow-hidden rounded-[28px] border border-black/10 bg-white/88 shadow-[0_14px_36px_rgba(0,0,0,0.08)] backdrop-blur">
                  <div className="h-[4px]" style={{ backgroundColor: card.accent }} />

                  <div
                    className="relative h-[220px] overflow-hidden border-b border-black/8"
                    style={{
                      backgroundImage: `radial-gradient(circle at 26% 24%, ${hexToRgba(card.accent, 0.24)} 0%, transparent 34%), linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(245,245,245,0.98) 100%)`,
                    }}
                  >
                    <Image
                      src={card.image}
                      alt={card.alt}
                      fill
                      className="object-contain p-6"
                    />
                  </div>

                  <div className="flex flex-col gap-3 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/38">
                        {card.lineLabel}
                      </p>
                      <div
                        className="shrink-0 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em]"
                        style={{ backgroundColor: card.accent, color: getAccentForeground(card.accent) }}
                      >
                        {card.subtitle}
                      </div>
                    </div>

                    <h3 className="font-display text-[1.45rem] uppercase leading-[0.94] tracking-[0.04em] text-brand-charcoal">
                      {card.title}
                    </h3>

                    <p className="text-[13px] leading-6 text-black/56">
                      {card.description}
                    </p>

                    <div className="space-y-3">
                      <details className="group overflow-hidden rounded-[18px] border border-black/8 bg-black/[0.025]">
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-3.5 py-3">
                          <div className="min-w-0">
                            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/52">
                              Ver ficha tecnica
                            </p>
                            <p className="mt-1 text-[12px] leading-5 text-black/40">
                              Dimensiones, peso, rendimiento y detalles del producto.
                            </p>
                          </div>
                          <ChevronDown className="h-4 w-4 shrink-0 text-black/40 transition-transform duration-200 group-open:rotate-180" />
                        </summary>

                        <div className="border-t border-black/8 px-3.5 py-3">
                          {card.groupedItems ? (
                            <GroupedSpecCard card={card} />
                          ) : (
                            <SingleSpecCard card={card} />
                          )}
                        </div>
                      </details>

                      <a
                        href={buildWhatsappLink(card.title, card.subtitle)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#ffd239] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2d2d2d] transition hover:brightness-95"
                      >
                Contactanos por WhatsApp
                        <MessageCircle className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
