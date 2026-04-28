"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { ArrowRight, X, ZoomIn } from "lucide-react";
import type { PremoldeadoTipico } from "@/data/catalogo-2025";
import { buildContactHref } from "@/lib/contact-prefill";
import { Button } from "@/components/ui/button";

const MODAL_INFO_BG =
  "repeating-linear-gradient(-45deg, transparent 0px, transparent 16px, rgba(0,0,0,0.016) 16px, rgba(0,0,0,0.016) 17px), linear-gradient(160deg, #fffdf0 0%, #fff8d6 100%)";

export function CatalogPremoldeadoCard({ item, accentColor = "#ffd239", accentFg = "#201708" }: { item: PremoldeadoTipico; accentColor?: string; accentFg?: string }) {
  const contactHref = buildContactHref({
    line: "Premoldeados",
    group: "Premoldeados tipicos",
    item: item.title,
  });

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-black/8 bg-white/84 shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
      <div className="h-[3px]" style={{ backgroundColor: accentColor }} />

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <div className="group relative h-[280px] cursor-zoom-in bg-[linear-gradient(180deg,#fafaf6_0%,#f0ece0_100%)]">
            <Image src={item.image} alt={item.title} fill className="object-contain p-8" />
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
            <div className="relative w-full max-w-3xl overflow-hidden rounded-[28px] shadow-[0_32px_80px_rgba(0,0,0,0.3)]">
              <div className="grid grid-rows-[300px_1fr] lg:grid-rows-none lg:grid-cols-[1.2fr_0.8fr]">
                {/* Left — white image */}
                <div className="flex items-center justify-center bg-white p-10">
                  <div className="relative h-[300px] w-full">
                    <Image src={item.image} alt={item.title} fill className="object-contain" sizes="50vw" />
                  </div>
                </div>
                {/* Right — yellow pastel + lines */}
                <div className="flex flex-col p-7" style={{ backgroundImage: MODAL_INFO_BG }}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-black/36">
                    Premoldeados
                  </p>
                  <h2 className="mt-2 font-display text-[clamp(1.4rem,2.5vw,2.4rem)] uppercase leading-tight tracking-[0.03em] text-brand-charcoal">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-black/52">
                    Consultanos por disponibilidad, dimensiones y condiciones de entrega desde planta.
                  </p>
                  <div className="mt-auto pt-6">
                    <Dialog.Close asChild>
                      <Button
                        href={contactHref}
                        variant="accent"
                        className="w-full gap-2 px-5 py-3 text-[10px] tracking-[0.2em]"
                        style={{ backgroundColor: accentColor, color: accentFg }}
                      >
                        Consultar esta pieza
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

      <div className="flex h-full flex-col border-t border-black/6 px-5 py-5">
        <p className="font-display text-[1.15rem] uppercase leading-tight tracking-[0.03em] text-brand-charcoal">
          {item.title}
        </p>
        <div className="mt-auto pt-5">
          <Button
            href={contactHref}
            variant="accent"
            className="w-full gap-2 px-5 py-3 text-[10px] tracking-[0.2em]"
            style={{ backgroundColor: accentColor, color: accentFg }}
          >
            Contactanos por esta pieza
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}
