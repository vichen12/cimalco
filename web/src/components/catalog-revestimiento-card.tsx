"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { ArrowRight, X, ZoomIn } from "lucide-react";
import type { Revestimiento } from "@/data/catalogo-2025";
import { buildWhatsAppHref } from "@/lib/contact-prefill";
import { Button } from "@/components/ui/button";

const MODAL_INFO_BG =
  "repeating-linear-gradient(-45deg, transparent 0px, transparent 16px, rgba(0,0,0,0.016) 16px, rgba(0,0,0,0.016) 17px), linear-gradient(160deg, #fffdf0 0%, #fff8d6 100%)";

export function CatalogRevestimientoCard({ item }: { item: Revestimiento }) {
  const contactHref = buildWhatsAppHref(item.title);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-black/8 bg-white/84 shadow-[0_14px_36px_rgba(0,0,0,0.05)]">
      <div className="h-[4px] bg-brand-yellow" />
      <div className="flex h-full flex-col p-5 lg:p-6">
        <h3 className="min-h-[64px] font-display text-[clamp(1.35rem,2vw,2rem)] uppercase tracking-[0.03em] text-brand-charcoal">
          {item.title}
        </h3>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <div className="group relative mt-5 h-[240px] cursor-zoom-in overflow-hidden rounded-[24px] border border-black/6 bg-white">
              <Image src={item.image} alt={item.title} fill className="object-contain p-4" />
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
              <Dialog.Title className="sr-only">{item.title}</Dialog.Title>
              <div className="relative w-full max-w-4xl overflow-hidden rounded-[28px] shadow-[0_32px_80px_rgba(0,0,0,0.3)]">
                <div className="grid max-h-[90vh] grid-rows-[280px_1fr] lg:max-h-none lg:grid-rows-none lg:grid-cols-[1.15fr_0.85fr]">
                  {/* Left — white image */}
                  <div className="flex items-center justify-center bg-white p-8">
                    <div className="relative h-[280px] w-full lg:h-[420px]">
                      <Image src={item.image} alt={item.title} fill className="object-contain" sizes="55vw" />
                    </div>
                  </div>
                  {/* Right — yellow pastel + lines */}
                  <div
                    className="flex max-h-[50vh] flex-col overflow-y-auto p-7 lg:max-h-none"
                    style={{ backgroundImage: MODAL_INFO_BG }}
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-black/36">
                      Revestimientos
                    </p>
                    <h2 className="mt-2 font-display text-[clamp(1.4rem,2.5vw,2.2rem)] uppercase leading-tight tracking-[0.03em] text-brand-charcoal">
                      {item.title}
                    </h2>
                    <div className="mt-5 grid grid-cols-2 gap-2">
                      {item.metrics.map((metric) => (
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
                    <div className="mt-auto pt-6">
                      <Dialog.Close asChild>
                        <Button
                          href={contactHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="accent"
                          className="w-full gap-2 px-5 py-3 text-[10px] tracking-[0.2em]"
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

        <div className="mt-5 grid grid-cols-2 gap-2">
          {item.metrics.map((metric) => (
            <div
              key={`card-${item.title}-${metric.label}`}
              className="rounded-[16px] border border-black/6 bg-black/[0.03] px-3 py-3"
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-black/34">
                {metric.label}
              </p>
              <p className="mt-1 text-[13px] leading-5 text-black/72">{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-5">
          <Button
            href={contactHref}
                          target="_blank"
                          rel="noopener noreferrer"
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
