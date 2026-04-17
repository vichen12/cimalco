"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { contactInterestOptions, contactWhatsappPhone } from "@/lib/contact";

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const schema = z.object({
  interests: z.array(z.string()).min(1, "Selecciona al menos una linea"),
  name: z.string().trim().min(2, "Escribi tu nombre"),
  phone: z.string().trim().optional(),
  message: z.string().trim().optional(),
});

type FormValues = z.infer<typeof schema>;

const inputCls =
  "w-full rounded-[11px] border border-black/10 bg-[#fafaf7] px-3.5 py-2.5 text-sm text-[#2d2d2d] transition placeholder:text-black/28 focus:border-[#ffd239] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ffd239]/14";

const labelCls = "block text-[10px] font-semibold uppercase tracking-[0.2em] text-black/38 mb-1.5";

function buildWaUrl(values: FormValues) {
  const lines = [
    "Hola Cimalco, consulta rapida desde la web.",
    "",
    `Nombre: ${values.name}`,
  ];
  if (values.phone) lines.push(`Telefono: ${values.phone}`);
  lines.push(`Lineas de interes: ${values.interests.join(", ")}`);
  if (values.message) {
    lines.push("");
    lines.push(`Mensaje: ${values.message}`);
  }
  return `https://wa.me/${contactWhatsappPhone}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const {
    register,
    setValue,
    watch,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { interests: [], name: "", phone: "", message: "" },
  });

  const selectedInterests = watch("interests") ?? [];

  const toggleInterest = (item: string) => {
    const next = selectedInterests.includes(item)
      ? selectedInterests.filter((i) => i !== item)
      : [...selectedInterests, item];
    setValue("interests", next, { shouldValidate: true });
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) { reset(); setSent(false); }
  };

  const onSubmit = (values: FormValues) => {
    const url = buildWaUrl(values);
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Trigger asChild>
        <button
          aria-label="Consulta express por WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-transform duration-200 hover:scale-105 sm:bottom-8 sm:right-8"
          style={{ backgroundColor: "#25d366" }}
        >
          {WA_ICON}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/20 backdrop-blur-[2px]" />
        <Dialog.Content className="fixed bottom-[88px] right-4 z-50 w-[calc(100vw-32px)] max-w-[380px] overflow-hidden rounded-[20px] border border-black/8 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.16)] sm:right-8">

          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-black/6 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full text-white" style={{ backgroundColor: "#25d366" }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-charcoal leading-none">
                  Consulta rapida
                </p>
                <p className="text-[10px] text-black/36 mt-0.5">Te respondemos por WhatsApp</p>
              </div>
            </div>
            <Dialog.Close asChild>
              <button
                className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-black/8 text-black/36 transition hover:text-brand-charcoal"
                aria-label="Cerrar"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </Dialog.Close>
          </div>

          {sent ? (
            <div className="px-4 py-6 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full" style={{ backgroundColor: "rgba(37,211,102,0.12)" }}>
                <svg viewBox="0 0 24 24" fill="#25d366" className="h-5 w-5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-charcoal">
                WhatsApp abierto
              </p>
              <p className="mt-1 text-[12px] text-black/44 leading-5">
                Tu mensaje ya esta listo.<br />Te respondemos a la brevedad.
              </p>
              <button
                onClick={() => { reset(); setSent(false); }}
                className="mt-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/36 underline underline-offset-2 transition hover:text-brand-charcoal"
              >
                Nueva consulta
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="px-4 pb-4 pt-3 space-y-4">
              {/* Intereses */}
              <div>
                <p className={labelCls}>Que te interesa?</p>
                <div className="flex flex-wrap gap-1.5">
                  {contactInterestOptions.map((item) => {
                    const active = selectedInterests.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleInterest(item)}
                        className={cn(
                          "rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] transition-all duration-150",
                          active
                            ? "border-[#ffd239] bg-[#ffd239] text-[#1a1000] shadow-[0_2px_8px_rgba(255,210,57,0.28)]"
                            : "border-black/10 bg-white text-black/44 hover:border-black/18 hover:text-brand-charcoal",
                        )}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
                {errors.interests && (
                  <p className="mt-1 text-[11px] text-red-500">{errors.interests.message}</p>
                )}
              </div>

              {/* Nombre + Telefono */}
              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label htmlFor="wa-name" className={labelCls}>Nombre *</label>
                  <input
                    id="wa-name"
                    type="text"
                    className={inputCls}
                    placeholder="Tu nombre"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-[10px] text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="wa-phone" className={labelCls}>Telefono</label>
                  <input
                    id="wa-phone"
                    type="tel"
                    className={inputCls}
                    placeholder="+54 9 ..."
                    {...register("phone")}
                  />
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="wa-message" className={labelCls}>Mensaje (opcional)</label>
                <textarea
                  id="wa-message"
                  rows={2}
                  className={cn(inputCls, "resize-none")}
                  placeholder="Contanos brevemente que necesitas..."
                  {...register("message")}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-full py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_4px_14px_rgba(37,211,102,0.32)] transition hover:brightness-95 disabled:opacity-60"
                style={{ backgroundColor: "#25d366" }}
              >
                Abrir WhatsApp
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
