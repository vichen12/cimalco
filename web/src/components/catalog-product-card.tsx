"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, X, ZoomIn } from "lucide-react";
import type { CatalogColorOption, CatalogProduct } from "@/data/catalogo-2025";
import { buildWhatsAppHref } from "@/lib/contact-prefill";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MODAL_INFO_BG =
  "repeating-linear-gradient(-45deg, transparent 0px, transparent 16px, rgba(0,0,0,0.016) 16px, rgba(0,0,0,0.016) 17px), linear-gradient(160deg, #fffdf0 0%, #fff8d6 100%)";

function resolveColor(color: string) {
  const v = color.toLowerCase();
  if (v.includes("gris")) return "#919191";
  if (v.includes("amarillo")) return "#ffd239";
  if (v.includes("rojo")) return "#9b4e43";
  if (v.includes("negro")) return "#2d2d2d";
  return "#d1d5db";
}

export function CatalogProductCard({
  product,
  line = "Catalogo 2025",
  accentColor = "#ffd239",
  accentFg = "#201708",
}: {
  product: CatalogProduct;
  line?: string;
  accentColor?: string;
  accentFg?: string;
}) {
  const [selectedColor, setSelectedColor] = useState<CatalogColorOption | null>(
    product.colorOptions?.[0] ?? null,
  );

  const currentImage = selectedColor?.image ?? product.image;
  const selectedItemLabel = selectedColor
    ? `${product.title} ${selectedColor.label}`
    : product.title;
  const contactHref = buildWhatsAppHref(selectedItemLabel);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-black/8 bg-white/84 shadow-[0_14px_36px_rgba(0,0,0,0.05)]">
      <div className="h-[4px]" style={{ backgroundColor: accentColor }} />
      <div className="flex h-full flex-col p-5 lg:p-6">
        {/* Card header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/34">
              {product.family}
            </p>
            <h3 className="mt-2 max-w-[16ch] font-display text-[clamp(1.35rem,2vw,2rem)] uppercase leading-[0.96] tracking-[0.03em] text-brand-charcoal">
              {product.title}
            </h3>
          </div>
          <span className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em]" style={{ backgroundColor: accentColor, color: accentFg }}>
            {product.code}
          </span>
        </div>

        {/* Image — opens modal on click */}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <div className="group relative mt-5 h-[200px] cursor-zoom-in overflow-hidden rounded-[24px] border border-black/6 bg-[linear-gradient(180deg,#fcfbf7_0%,#f2eee3_100%)]">
              <Image
                src={currentImage}
                alt={`${product.title}${selectedColor ? ` en ${selectedColor.label}` : ""}`}
                fill
                className="object-contain p-6 transition-opacity duration-200"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-all group-hover:bg-black/[0.05]">
                <div className="rounded-full bg-black/30 p-2 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <ZoomIn className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-200" />
            <Dialog.Content
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200"
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <Dialog.Title className="sr-only">{product.title}</Dialog.Title>
              <div className="relative w-full max-w-5xl overflow-hidden rounded-[28px] shadow-[0_32px_80px_rgba(0,0,0,0.3)]">
                <div className="grid max-h-[90vh] grid-rows-[300px_1fr] lg:max-h-none lg:grid-rows-none lg:grid-cols-[1.15fr_0.85fr]">
                  {/* Left — white image */}
                  <div className="flex items-center justify-center bg-white p-8">
                    <div className="relative h-[300px] w-full lg:h-[460px]">
                      <Image
                        src={currentImage}
                        alt={`${product.title}${selectedColor ? ` en ${selectedColor.label}` : ""}`}
                        fill
                        className="object-contain"
                        sizes="55vw"
                      />
                    </div>
                  </div>

                  {/* Right — yellow pastel + diagonal lines */}
                  <div
                    className="flex max-h-[52vh] flex-col overflow-y-auto p-7 lg:max-h-none"
                    style={{ backgroundImage: MODAL_INFO_BG }}
                  >
                    <div className="flex items-center gap-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-black/36">
                        {product.family}
                      </p>
                      <span className="rounded-full bg-brand-yellow px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#201708]">
                        {product.code}
                      </span>
                    </div>
                    <h2 className="mt-2 font-display text-[clamp(1.5rem,2.5vw,2.4rem)] uppercase leading-tight tracking-[0.03em] text-brand-charcoal">
                      {product.title}
                    </h2>
                    <p className="mt-3 text-sm leading-7 text-black/54">{product.description}</p>

                    <div className="mt-5 grid grid-cols-2 gap-2">
                      {product.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-[14px] border border-black/8 bg-white/70 px-3 py-3"
                        >
                          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/32">
                            {metric.label}
                          </p>
                          <p className="mt-1 text-[13px] leading-5 text-black/70">{metric.value}</p>
                        </div>
                      ))}
                    </div>

                    {product.colorOptions?.length ? (
                      <div className="mt-4">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/34">
                          Color
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {product.colorOptions.map((color) => {
                            const isActive = selectedColor?.label === color.label;
                            return (
                              <button
                                key={color.label}
                                type="button"
                                onClick={() => setSelectedColor(color)}
                                className={cn(
                                  "inline-flex items-center gap-2 rounded-full border px-2.5 py-1.5 transition",
                                  isActive
                                    ? "border-brand-charcoal bg-black/[0.06] shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                                    : "border-black/8 bg-white/80 hover:border-black/18",
                                )}
                              >
                                <span
                                  className="h-3.5 w-3.5 rounded-full border border-black/10"
                                  style={{ backgroundColor: resolveColor(color.label) }}
                                />
                                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-black/58">
                                  {color.label}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    ) : product.note ? (
                      <div className="mt-4 rounded-[14px] border border-black/8 bg-white/60 px-4 py-3">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black/32">
                          Nota tecnica
                        </p>
                        <p className="mt-1 text-xs leading-6 text-black/48">{product.note}</p>
                      </div>
                    ) : null}

                    <div className="mt-auto pt-6">
                      <Dialog.Close asChild>
                        <Button
                          href={contactHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="accent"
                          className="w-full gap-2 px-5 py-3 text-[10px] tracking-[0.2em]"
                          style={{ backgroundColor: accentColor, color: accentFg }}
                        >
                          Consultar este producto
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Dialog.Close>
                    </div>
                  </div>
                </div>

                <Dialog.Close className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white/90 text-black/60 shadow-sm backdrop-blur-sm transition hover:bg-white hover:text-brand-charcoal">
                  <X className="h-4 w-4" />
                  <span className="sr-only">Cerrar</span>
                </Dialog.Close>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

        {/* Card description */}
        <p className="mt-5 min-h-[84px] text-sm leading-7 text-black/56">{product.description}</p>

        {/* Card metrics */}
        <div className="mt-5 grid grid-cols-2 gap-2">
          {product.metrics.map((metric) => (
            <div
              key={`card-${product.code}-${metric.label}`}
              className="rounded-[16px] border border-black/6 bg-black/[0.03] px-3 py-3"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/34">
                {metric.label}
              </p>
              <p className="mt-1 text-[13px] leading-5 text-black/72">{metric.value}</p>
            </div>
          ))}
        </div>

        {/* Card colors / note */}
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
                      onClick={() => setSelectedColor(color)}
                      className={cn(
                        "inline-flex items-center gap-2 rounded-full border px-2.5 py-2 transition",
                        isActive
                          ? "border-brand-charcoal bg-black/[0.05] shadow-[0_8px_18px_rgba(0,0,0,0.08)]"
                          : "border-black/8 bg-white hover:border-black/18",
                      )}
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
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/34">Nota tecnica</p>
              <p className="mt-2 text-xs leading-6 text-black/46">{product.note}</p>
            </div>
          ) : (
            <div className="rounded-[18px] border border-black/6 bg-[rgba(255,255,255,0.6)] px-4 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/34">Consulta directa</p>
              <p className="mt-2 text-xs leading-6 text-black/46">Disponibilidad, tiempos y condiciones de entrega.</p>
            </div>
          )}
        </div>

        <div className="mt-auto pt-5">
          <Button
            href={contactHref}
            target="_blank"
            rel="noopener noreferrer"
            variant="accent"
            className="w-full gap-2 px-5 py-3 text-[10px] tracking-[0.2em]"
            style={{ backgroundColor: accentColor, color: accentFg }}
          >
            Contactanos por este producto
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}
