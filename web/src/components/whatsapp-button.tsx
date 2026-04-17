"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import { ArrowRight, Building2, Check, ChevronDown, MessageSquare, Phone, User, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { contactInterestOptions, contactWhatsappPhone } from "@/lib/contact";

/* ── WA icon ── */
const WaIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ── schema ── */
const schema = z.object({
  interest: z.string().min(1, "Selecciona una linea"),
  name: z.string().trim().min(2, "Escribi tu nombre"),
  phone: z.string().trim().optional(),
  message: z.string().trim().optional(),
});
type FormValues = z.infer<typeof schema>;

/* ── pill input helper ── */
function PillField({
  icon: Icon,
  error,
  children,
}: {
  icon: React.ElementType;
  error?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-[13px] w-[13px] -translate-y-1/2 text-black/22" />
      <div className={cn(error && "ring-1 ring-red-300 rounded-full")}>{children}</div>
    </div>
  );
}

const pillInputCls =
  "w-full rounded-full border border-black/[0.09] bg-[#fafaf7] py-2.5 pl-9 pr-4 text-[12px] text-brand-charcoal outline-none transition-all placeholder:text-black/28 focus:border-[#ffd239]/60 focus:bg-white focus:ring-2 focus:ring-[#ffd239]/14";

function buildWaUrl(values: FormValues) {
  const lines = [
    "Hola Cimalco, consulta desde la web.",
    "",
    `Nombre: ${values.name}`,
  ];
  if (values.phone) lines.push(`Telefono: ${values.phone}`);
  lines.push(`Linea de interes: ${values.interest}`);
  if (values.message) { lines.push(""); lines.push(`Mensaje: ${values.message}`); }
  return `https://wa.me/${contactWhatsappPhone}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/* ── component ── */
export function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const { register, setValue, watch, handleSubmit, reset, formState: { errors } } =
    useForm<FormValues>({
      resolver: zodResolver(schema),
      defaultValues: { interest: "", name: "", phone: "", message: "" },
    });

  const interest = watch("interest") ?? "";

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) { reset(); setSent(false); }
  };

  const onSubmit = (values: FormValues) => {
    window.open(buildWaUrl(values), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      {/* trigger */}
      <Dialog.Trigger asChild>
        <button
          aria-label="Consulta express por WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_4px_24px_rgba(37,211,102,0.38)] transition hover:scale-105 sm:bottom-8 sm:right-8"
          style={{ backgroundColor: "#25d366" }}
        >
          <WaIcon className="h-6 w-6" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/18 backdrop-blur-[2px]" />
        <Dialog.Content className="fixed bottom-[88px] right-4 z-50 w-[calc(100vw-32px)] max-w-[360px] overflow-hidden rounded-[22px] border border-black/8 bg-white shadow-[0_16px_50px_rgba(0,0,0,0.13)] sm:right-8">

          {/* header */}
          <div className="flex items-center justify-between border-b border-black/[0.06] px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full text-white" style={{ backgroundColor: "#25d366" }}>
                <WaIcon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-[12px] font-semibold text-brand-charcoal leading-none">
                  Consulta rapida
                </p>
                <p className="mt-0.5 text-[10px] text-black/34">
                  Te respondemos por WhatsApp
                </p>
              </div>
            </div>
            <Dialog.Close asChild>
              <button className="flex h-7 w-7 items-center justify-center rounded-full border border-black/8 text-black/30 transition hover:border-black/16 hover:text-brand-charcoal">
                <X className="h-3.5 w-3.5" />
              </button>
            </Dialog.Close>
          </div>

          {sent ? (
            /* success */
            <div className="px-5 py-8 text-center">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full" style={{ background: "rgba(37,211,102,0.10)" }}>
                <WaIcon className="h-5 w-5 text-[#25d366]" />
              </div>
              <p className="text-[12px] font-semibold text-brand-charcoal">
                WhatsApp abierto
              </p>
              <p className="mt-1.5 text-[11px] leading-5 text-black/40">
                Tu mensaje esta listo.<br />Te respondemos a la brevedad.
              </p>
              <button
                onClick={() => { reset(); setSent(false); }}
                className="mt-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-black/30 underline underline-offset-2 transition hover:text-brand-charcoal"
              >
                Nueva consulta
              </button>
            </div>
          ) : (
            /* form */
            <form onSubmit={handleSubmit(onSubmit)} className="px-4 py-4 space-y-3">

              {/* linea de interes */}
              <div>
                <label className="mb-1.5 block text-[9px] font-bold uppercase tracking-[0.2em] text-black/34">
                  Linea de interes *
                </label>
                <Select.Root value={interest} onValueChange={(v) => setValue("interest", v, { shouldValidate: true })}>
                  <Select.Trigger
                    className={cn(
                      "flex w-full items-center justify-between rounded-full border px-4 py-2.5 text-[12px] outline-none transition-all",
                      "data-[state=open]:border-[#ffd239]/60 data-[state=open]:ring-2 data-[state=open]:ring-[#ffd239]/14 data-[state=open]:bg-white",
                      errors.interest
                        ? "border-red-300 bg-red-50/40"
                        : interest
                        ? "border-[#ffd239]/60 bg-white font-medium text-brand-charcoal"
                        : "border-black/[0.09] bg-[#fafaf7] text-black/28 hover:border-black/16",
                    )}
                  >
                    <Select.Value placeholder="Seleccione una linea" />
                    <Select.Icon asChild>
                      <ChevronDown className="h-3.5 w-3.5 text-black/28 shrink-0" />
                    </Select.Icon>
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Content
                      position="popper"
                      sideOffset={4}
                      className="z-[60] w-[var(--radix-select-trigger-width)] overflow-hidden rounded-[16px] border border-black/8 bg-white shadow-[0_10px_36px_rgba(0,0,0,0.13)]"
                    >
                      <Select.Viewport className="p-1.5">
                        {contactInterestOptions.map((opt) => (
                          <Select.Item
                            key={opt}
                            value={opt}
                            className="flex cursor-pointer select-none items-center justify-between rounded-[10px] px-3 py-2.5 text-[11px] text-black/56 outline-none transition hover:bg-[#fafaf7] hover:text-brand-charcoal data-[state=checked]:bg-[rgba(255,210,57,0.10)] data-[state=checked]:font-semibold data-[state=checked]:text-brand-charcoal"
                          >
                            <Select.ItemText>{opt}</Select.ItemText>
                            <Select.ItemIndicator>
                              <Check className="h-3 w-3 text-brand-charcoal" />
                            </Select.ItemIndicator>
                          </Select.Item>
                        ))}
                      </Select.Viewport>
                    </Select.Content>
                  </Select.Portal>
                </Select.Root>
                {errors.interest && (
                  <p className="mt-0.5 pl-1 text-[10px] text-red-500">{errors.interest.message}</p>
                )}
              </div>

              {/* nombre + telefono */}
              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="mb-1.5 block text-[9px] font-bold uppercase tracking-[0.2em] text-black/34">Nombre *</label>
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3.5 top-1/2 h-[13px] w-[13px] -translate-y-1/2 text-black/22" />
                    <input type="text" className={pillInputCls} placeholder="Tu nombre" {...register("name")} />
                  </div>
                  {errors.name && <p className="mt-0.5 text-[10px] text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-[9px] font-bold uppercase tracking-[0.2em] text-black/34">Telefono</label>
                  <div className="relative">
                    <Phone className="pointer-events-none absolute left-3.5 top-1/2 h-[13px] w-[13px] -translate-y-1/2 text-black/22" />
                    <input type="tel" className={pillInputCls} placeholder="+54 9 ..." {...register("phone")} />
                  </div>
                </div>
              </div>

              {/* mensaje */}
              <div>
                <label className="mb-1.5 block text-[9px] font-bold uppercase tracking-[0.2em] text-black/34">Mensaje breve</label>
                <div className="relative">
                  <MessageSquare className="pointer-events-none absolute left-3.5 top-[11px] h-[13px] w-[13px] text-black/22" />
                  <textarea
                    rows={2}
                    className="w-full resize-none rounded-[16px] border border-black/[0.09] bg-[#fafaf7] py-2.5 pl-9 pr-4 text-[12px] text-brand-charcoal outline-none transition-all placeholder:text-black/28 focus:border-[#ffd239]/60 focus:bg-white focus:ring-2 focus:ring-[#ffd239]/14"
                    placeholder="Contanos brevemente que necesitas..."
                    {...register("message")}
                  />
                </div>
              </div>

              {/* submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-white shadow-[0_4px_16px_rgba(37,211,102,0.28)] transition hover:brightness-95"
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
