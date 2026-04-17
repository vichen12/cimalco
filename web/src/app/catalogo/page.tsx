import type { Metadata } from "next";
import Image from "next/image";
import { Download, MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Catalogo de Productos — Cimalco Patagonia",
  description:
    "Fichas tecnicas de bloques, adoquines, postes y piezas especiales de hormigon. Dimensiones, pesos, rendimientos y contacto directo por WhatsApp.",
};

const WHATSAPP_BASE = "https://wa.me/5492996109261";

type Spec = { label: string; value: string };

type Product = {
  title: string;
  model: string;
  family: string;
  description: string;
  accent: string;
  image: string;
  alt: string;
  specs: Spec[];
  colors?: string[];
};

const accentFg = (c: string) => (c === "#2d2d2d" ? "#fff" : "#111");

function resolveColor(color: string) {
  const n = color.toLowerCase();
  if (n.includes("gris oscuro")) return "#5e6468";
  if (n.includes("gris")) return "#9da3a6";
  if (n.includes("rojo texturizado")) return "#8e5246";
  if (n.includes("rojo")) return "#9b4e43";
  if (n.includes("amarillo")) return "#c4a857";
  if (n.includes("negro")) return "#1f2124";
  if (n.includes("simil piedra")) return "#908477";
  return "#d1d5db";
}

const families = [
  {
    id: "bloques",
    label: "Bloques",
    accent: "#ffd239",
  },
  {
    id: "pavimentos",
    label: "Pavimentos",
    accent: "#41b6e1",
  },
  {
    id: "complementarios",
    label: "Complementarios",
    accent: "#919191",
  },
];

const products: Product[] = [
  {
    title: "Bloque Liso",
    model: "P20",
    family: "bloques",
    description:
      "El estandar para muros de alta resistencia y terminacion estetica. Certificado IRAM.",
    accent: "#ffd239",
    image: "/catalogo/bloque-liso-p20-actualizado.png",
    alt: "Bloque liso P20 — Cimalco Patagonia",
    specs: [
      { label: "Dimensiones", value: "19 × 19 × 39 cm" },
      { label: "Peso", value: "14 kg / unidad" },
      { label: "Rendimiento", value: "12.5 u/m²" },
      { label: "Pallet", value: "90 u — 1.300 kg" },
    ],
    colors: ["Gris", "Rojo", "Amarillo", "Negro"],
  },
  {
    title: "Medio Bloque Liso",
    model: "P20M",
    family: "bloques",
    description:
      "Para terminaciones, esquinas y ajustes en muro sin necesidad de corte.",
    accent: "#ffd239",
    image: "/catalogo/medio-bloque-liso-p20m.png",
    alt: "Medio bloque liso P20M — Cimalco Patagonia",
    specs: [
      { label: "Dimensiones", value: "19 × 19 × 19 cm" },
      { label: "Peso", value: "8 kg / unidad" },
      { label: "Rendimiento", value: "25 u/m²" },
      { label: "Pallet", value: "180 u — 1.450 kg" },
    ],
    colors: ["Gris", "Rojo", "Amarillo", "Negro"],
  },
  {
    title: "Bloque Simil Piedra",
    model: "SP20",
    family: "bloques",
    description:
      "Terminacion rustica para muros texturados con lectura arquitectonica.",
    accent: "#2d2d2d",
    image: "/catalogo/pieza-complementarias-sp20-sp20m.png",
    alt: "Bloque simil piedra SP20 — Cimalco Patagonia",
    specs: [
      { label: "Dimensiones", value: "19 × 19 × 39 cm" },
      { label: "Peso", value: "19 kg / unidad" },
      { label: "Rendimiento", value: "12.5 u/m²" },
      { label: "Pallet", value: "90 u — 1.900 kg" },
    ],
    colors: ["Simil piedra"],
  },
  {
    title: "Medio Bloque Simil Piedra",
    model: "SP20M",
    family: "bloques",
    description:
      "Ajuste y terminacion de la linea simil piedra sin perder estetica.",
    accent: "#2d2d2d",
    image: "/catalogo/pieza-complementarias-sp20-sp20m.png",
    alt: "Medio bloque simil piedra SP20M — Cimalco Patagonia",
    specs: [
      { label: "Dimensiones", value: "19 × 19 × 19 cm" },
      { label: "Peso", value: "9.5 kg / unidad" },
      { label: "Rendimiento", value: "25 u/m²" },
      { label: "Pallet", value: "180 u — 1.800 kg" },
    ],
    colors: ["Simil piedra"],
  },
  {
    title: "Adoquin Uni Stone",
    model: "UNI8",
    family: "pavimentos",
    description:
      "Pavimento articulado IRAM de alta resistencia para transito vehicular y peatonal.",
    accent: "#41b6e1",
    image: "/catalogo/adoquin-uni-stone-8cm.png",
    alt: "Adoquin Uni Stone 8 cm — Cimalco Patagonia",
    specs: [
      { label: "Dimensiones", value: "10.1 × 20.4 × 8 cm" },
      { label: "Peso", value: "4.2 kg / unidad" },
      { label: "Rendimiento", value: "40 u/m²" },
      { label: "Pallet", value: "12.25 m² — 2.116 kg" },
    ],
    colors: ["Gris", "Rojo", "Amarillo", "Negro"],
  },
  {
    title: "Adoquin Holanda",
    model: "H6",
    family: "pavimentos",
    description:
      "Para veredas, accesos y espacios urbanos. Norma IRAM. Municipios y desarrolladoras.",
    accent: "#41b6e1",
    image: "/catalogo/adoquin-holanda-6cm-actualizado.png",
    alt: "Adoquin Holanda 6 cm — Cimalco Patagonia",
    specs: [
      { label: "Dimensiones", value: "10 × 20 × 6 cm" },
      { label: "Peso", value: "2.6 kg / unidad" },
      { label: "Rendimiento", value: "50 u/m²" },
      { label: "Pallet", value: "16.2 m² — 2.146 kg" },
    ],
    colors: ["Gris", "Rojo", "Amarillo", "Negro"],
  },
  {
    title: "Bloque Liso U",
    model: "U20",
    family: "complementarios",
    description:
      "Para vigas encadenadas y refuerzos estructurales en mamposteria armada.",
    accent: "#919191",
    image: "/catalogo/pieza-complementaria-bloque-liso-u-y-murete.png",
    alt: "Bloque liso U — Cimalco Patagonia",
    specs: [
      { label: "Dimensiones", value: "19 × 19 × 39 cm" },
      { label: "Peso", value: "19 kg / unidad" },
      { label: "Rendimiento", value: "12.5 u/m²" },
      { label: "Pallet", value: "90 u — 1.750 kg" },
    ],
    colors: ["Gris"],
  },
  {
    title: "Bloque Murete",
    model: "P10",
    family: "complementarios",
    description:
      "Tabiques divisorios delgados y muros de baja carga. Bajo consumo de material.",
    accent: "#919191",
    image: "/catalogo/pieza-complementaria-bloque-liso-u-y-murete.png",
    alt: "Bloque liso murete P10 — Cimalco Patagonia",
    specs: [
      { label: "Dimensiones", value: "10 × 19 × 39 cm" },
      { label: "Peso", value: "7 kg / unidad" },
      { label: "Rendimiento", value: "12.5 u/m²" },
      { label: "Pallet", value: "180 u — 1.300 kg" },
    ],
    colors: ["Gris"],
  },
  {
    title: "Esquinero Simil Piedra",
    model: "P20E",
    family: "complementarios",
    description:
      "Pieza de encuentro para resolver esquinas en muros texturados sin perder la continuidad.",
    accent: "#919191",
    image: "/catalogo/pieza-complementarias-p20e-psp20.png",
    alt: "Esquinero simil piedra P20E — Cimalco Patagonia",
    specs: [
      { label: "Dimensiones", value: "19 × 19 × 20 cm" },
      { label: "Peso", value: "10 kg / unidad" },
      { label: "Rendimiento", value: "25 u/m²" },
      { label: "Pallet", value: "180 u — 1.800 kg" },
    ],
    colors: ["Simil piedra"],
  },
  {
    title: "Placa Simil Piedra",
    model: "PSP20",
    family: "complementarios",
    description:
      "Placa delgada de alta densidad para revestimientos decorativos superficiales.",
    accent: "#919191",
    image: "/catalogo/pieza-complementarias-p20e-psp20.png",
    alt: "Placa simil piedra PSP20 — Cimalco Patagonia",
    specs: [
      { label: "Dimensiones", value: "5 × 19 × 39 cm" },
      { label: "Peso", value: "11.5 kg / unidad" },
      { label: "Rendimiento", value: "12.5 u/m²" },
      { label: "Pallet", value: "190 u — 2.185 kg" },
    ],
    colors: ["Simil piedra"],
  },
  {
    title: "Loseta para Ductos",
    model: "LD",
    family: "complementarios",
    description:
      "Cobertura de canalizaciones subterraneas o senderos. Bajo mantenimiento.",
    accent: "#2d2d2d",
    image: "/catalogo/pieza-complementaria-loseta-y-vanoton.png",
    alt: "Loseta para ductos LD — Cimalco Patagonia",
    specs: [
      { label: "Dimensiones", value: "100 × 50 × 7 cm" },
      { label: "Peso", value: "84 kg / unidad" },
      { label: "Rendimiento", value: "2 u/m²" },
      { label: "Pallet", value: "12 u — 1.100 kg" },
    ],
    colors: ["Gris oscuro"],
  },
  {
    title: "Adoquin Vanoton",
    model: "AV8",
    family: "pavimentos",
    description:
      "Textura antideslizante para exteriores de alta circulacion.",
    accent: "#41b6e1",
    image: "/catalogo/pieza-complementaria-loseta-y-vanoton.png",
    alt: "Adoquin Vanoton AV8 — Cimalco Patagonia",
    specs: [
      { label: "Dimensiones", value: "10.1 × 20.4 × 9 cm" },
      { label: "Peso", value: "4.2 kg / unidad" },
      { label: "Rendimiento", value: "40 u/m²" },
      { label: "Pallet", value: "12.25 m² — 2.050 kg" },
    ],
    colors: ["Rojo texturizado"],
  },
];

function ProductCard({ product }: { product: Product }) {
  const msg = encodeURIComponent(
    `Hola Cimalco, quiero contactarme por ${product.title} (${product.model}).`
  );
  return (
    <article className="flex flex-col overflow-hidden rounded-[24px] border border-black/8 bg-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.07)] backdrop-blur-sm">
      {/* Accent bar */}
      <div className="h-[3px]" style={{ backgroundColor: product.accent }} />

      {/* Image */}
      <div
        className="relative h-[200px]"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${product.accent}28 0%, transparent 60%), #f8f7f5`,
        }}
      >
        <Image
          src={product.image}
          alt={product.alt}
          fill
          className="object-contain p-6"
        />
        <div
          className="absolute right-3 top-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]"
          style={{ backgroundColor: product.accent, color: accentFg(product.accent) }}
        >
          {product.model}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-black/36">
            {families.find((f) => f.id === product.family)?.label}
          </p>
          <h3 className="mt-1 font-display text-[1.35rem] uppercase leading-none tracking-[0.03em] text-brand-charcoal">
            {product.title}
          </h3>
          <p className="mt-2 text-[13px] leading-5 text-black/52">
            {product.description}
          </p>
        </div>

        {/* Specs grid */}
        <div className="grid grid-cols-2 gap-1.5">
          {product.specs.map((s) => (
            <div
              key={s.label}
              className="rounded-[12px] bg-black/[0.03] px-3 py-2"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-black/36">
                {s.label}
              </p>
              <p className="mt-0.5 text-[12px] text-black/72">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Colors */}
        {product.colors && product.colors.length > 0 && (
          <div className="flex items-center gap-2">
            <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black/34">
              Colores
            </p>
            <div className="flex gap-1.5">
              {product.colors.map((c) => (
                <span
                  key={c}
                  title={c}
                  className="h-3.5 w-3.5 rounded-full border border-black/12"
                  style={{ backgroundColor: resolveColor(c) }}
                />
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <a
          href={`${WHATSAPP_BASE}?text=${msg}`}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-yellow px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#2d2d2d] transition hover:brightness-95"
        >
          Contactanos por WhatsApp
          <MessageCircle className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}

export default function CatalogoPage() {
  return (
    <div className="relative z-10" style={{ background: "#fffdf0", minHeight: "100vh" }}>
      <SiteHeader />

      {/* Page header */}
      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "calc(78vh - 64px)",
          borderBottom: "3px solid #ffd239",
          backgroundImage: "url('/site-assets/slider3.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.55)_50%,rgba(0,0,0,0.88)_100%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-end justify-end overflow-hidden select-none">
          <span className="font-display font-bold uppercase" style={{ fontSize: "clamp(6rem,16vw,16rem)", color: "rgba(255,255,255,0.05)", letterSpacing: "-0.02em", lineHeight: 1, marginBottom: "-0.1em", marginRight: "-0.05em" }}>
            CATALOGO
          </span>
        </div>
        <div className="relative z-10 px-5 pb-14 pt-24 sm:px-8 lg:px-10 lg:pb-16 lg:pt-28">
          <div className="mx-auto w-full max-w-[1600px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/36">Catalogo</p>
            <h1 className="mt-2 font-display text-[clamp(2.4rem,5vw,5rem)] uppercase leading-[0.92] tracking-[0.04em] text-white">
              Catalogo
              <span className="block text-brand-yellow">completo.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
              Bloques, adoquines, postes y piezas especiales de hormigon. Fichas tecnicas,
              dimensiones, rendimientos y contacto directo con el equipo comercial.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="https://cimalconeuquen.com.ar/archivos/cimalco-catalogo.pdf" target="_blank" rel="noreferrer" variant="accent" className="gap-2 px-7 py-3.5 text-[11px] tracking-[0.22em]">
                <Download className="h-4 w-4" />
                Descargar PDF
              </Button>
              <Button href="/contacto" variant="outline" className="gap-2 px-7 py-3.5 text-[11px] tracking-[0.22em] border-white/20 text-white/70 hover:text-white hover:border-white/50">
                Contactanos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products by family */}
      <main className="mx-auto w-full max-w-[1600px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        {families.map((family) => {
          const items = products.filter((p) => p.family === family.id);
          return (
            <div key={family.id} className="mb-16 last:mb-0">
              <div className="mb-8 flex items-center gap-4">
                <div
                  className="h-[3px] w-8 rounded-full"
                  style={{ backgroundColor: family.accent }}
                />
                <h2 className="font-display text-[clamp(1.6rem,3vw,2.6rem)] uppercase tracking-[0.06em] text-brand-charcoal">
                  {family.label}
                </h2>
                <span className="text-sm text-black/30">
                  {items.length} {items.length === 1 ? "producto" : "productos"}
                </span>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {items.map((product) => (
                  <ProductCard key={`${product.title}-${product.model}`} product={product} />
                ))}
              </div>
            </div>
          );
        })}
      </main>

      <SiteFooter />
    </div>
  );
}
