"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

export function LightboxImage({
  src,
  alt,
  containerClassName = "",
  imageClassName = "object-contain",
}: {
  src: string;
  alt: string;
  containerClassName?: string;
  imageClassName?: string;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className={`group relative cursor-zoom-in ${containerClassName}`}>
          <Image src={src} alt={alt} fill className={imageClassName} />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-200 group-hover:bg-black/[0.07]">
            <div className="rounded-full bg-black/40 p-2 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
              <ZoomIn className="h-5 w-5 text-white" />
            </div>
          </div>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 duration-200" />
        <Dialog.Content
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <Dialog.Title className="sr-only">{alt}</Dialog.Title>
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{ width: "min(88vw, 1100px)", height: "min(82vh, 820px)" }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              sizes="min(88vw, 1100px)"
            />
          </div>
          <Dialog.Close className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20">
            <X className="h-5 w-5" />
            <span className="sr-only">Cerrar</span>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
