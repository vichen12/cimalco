"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import type { CatalogColorOption, CatalogProduct } from "@/data/catalogo-2025";
import { buildContactHref } from "@/lib/contact-prefill";
import { Button } from "@/components/ui/button";

function resolveColor(color: string) {
  const value = color.toLowerCase();
  if (value.includes("gris")) return "#919191";
  if (value.includes("amarillo")) return "#ffd239";
  if (value.includes("rojo")) return "#9b4e43";
  if (value.includes("negro")) return "#2d2d2d";
  return "#d1d5db";
}

function getInitialColor(product: CatalogProduct) {
  return product.colorOptions?.[0] ?? null;
}

export function CatalogProductCard({
  product,
  line = "Catalogo 2025",
}: {
  product: CatalogProduct;
  line?: string;
}) {
  const [selectedColor, setSelectedColor] = useState<CatalogColorOption | null>(
    getInitialColor(product),
  );

  const currentImage = selectedColor?.image ?? product.image;
  const selectedItemLabel = selectedColor
    ? `${product.title} ${selectedColor.label}`
    : product.title;
  const contactHref = buildContactHref({
    line,
    group: product.family,
    item: selectedItemLabel,
  });

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-black/8 bg-white/84 shadow-[0_14px_36px_rgba(0,0,0,0.05)]">
      <div className="h-[4px] bg-brand-yellow" />
      <div className="flex h-full flex-col p-5 lg:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/34">
              {product.family}
            </p>
            <h3 className="mt-2 max-w-[16ch] font-display text-[clamp(1.35rem,2vw,2rem)] uppercase leading-[0.96] tracking-[0.03em] text-brand-charcoal">
              {product.title}
            </h3>
          </div>
          <span className="rounded-full bg-brand-yellow px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#201708]">
            {product.code}
          </span>
        </div>

        <div className="relative mt-5 h-[200px] overflow-hidden rounded-[24px] border border-black/6 bg-[linear-gradient(180deg,#fcfbf7_0%,#f2eee3_100%)]">
          <Image
            src={currentImage}
            alt={`${product.title}${selectedColor ? ` en ${selectedColor.label}` : ""}`}
            fill
            className="object-contain p-6 transition-opacity duration-200"
          />
        </div>

        <p className="mt-5 min-h-[84px] text-sm leading-7 text-black/56">{product.description}</p>

        <div className="mt-5 grid grid-cols-2 gap-2">
          {product.metrics.map((metric) => (
            <div
              key={`${product.code}-${metric.label}`}
              className="rounded-[16px] border border-black/6 bg-black/[0.03] px-3 py-3"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/34">
                {metric.label}
              </p>
              <p className="mt-1 text-[13px] leading-5 text-black/72">{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 min-h-[110px]">
          {product.colorOptions?.length ? (
            <div className="rounded-[18px] border border-black/6 bg-[rgba(255,255,255,0.72)] px-4 py-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/34">
                  Seleccionar color
                </p>
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/46">
                  {selectedColor?.label ?? "Color disponible"}
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {product.colorOptions.map((color) => {
                  const isActive = selectedColor?.label === color.label;

                  return (
                    <button
                      key={`${product.code}-${color.label}`}
                      type="button"
                      aria-label={`Ver ${product.title} en ${color.label}`}
                      aria-pressed={isActive}
                      onClick={() => setSelectedColor(color)}
                      className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-2 transition ${
                        isActive
                          ? "border-brand-charcoal bg-black/[0.05] shadow-[0_8px_18px_rgba(0,0,0,0.08)]"
                          : "border-black/8 bg-white hover:border-black/18"
                      }`}
                    >
                      <span
                        className="h-4 w-4 rounded-full border border-black/10"
                        style={{ backgroundColor: resolveColor(color.label) }}
                      />
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-black/58">
                        {color.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : product.note ? (
            <div className="rounded-[18px] border border-black/6 bg-[rgba(255,255,255,0.72)] px-4 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/34">
                Nota tecnica
              </p>
              <p className="mt-2 text-xs leading-6 text-black/46">{product.note}</p>
            </div>
          ) : (
            <div className="rounded-[18px] border border-black/6 bg-[rgba(255,255,255,0.6)] px-4 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/34">
                Consulta directa
              </p>
              <p className="mt-2 text-xs leading-6 text-black/46">
                Podemos ayudarte con disponibilidad, tiempos y condiciones de entrega.
              </p>
            </div>
          )}
        </div>

        <div className="mt-auto pt-5">
          <Button
            href={contactHref}
            variant="accent"
            className="w-full gap-2 px-5 py-3 text-[10px] tracking-[0.2em]"
          >
            Contactanos por este producto
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}
