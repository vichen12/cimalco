"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Select from "@radix-ui/react-select";
import { ArrowRight, CheckCircle2, ChevronDown, Check, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  buildWhatsappUrl,
  contactInterestOptions,
  contactObraOptions,
  contactSubmissionSchema,
  type ContactSubmissionInput,
  type ContactSubmission,
} from "@/lib/contact";

/* ── shared styles ── */
const inputCls =
  "w-full rounded-[10px] border border-black/10 bg-[#fafaf7] px-3 py-2 text-[13px] text-[#2d2d2d] transition placeholder:text-black/28 focus:border-[#ffd239] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ffd239]/12";

const labelCls =
  "block text-[9px] font-bold uppercase tracking-[0.2em] text-black/36 mb-1";

/* ── custom select ── */
type StyledSelectProps = {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
  accentColor?: "yellow" | "charcoal";
  error?: boolean;
};

function StyledSelect({
  placeholder,
  value,
  onChange,
  options,
  accentColor = "yellow",
  error,
}: StyledSelectProps) {
  const accent =
    accentColor === "yellow"
      ? { border: "#ffd239", bg: "rgba(255,210,57,0.08)", check: "#1a1000" }
      : { border: "#2d2d2d", bg: "rgba(45,45,45,0.06)", check: "#2d2d2d" };

  return (
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger
        className={cn(
          "flex w-full items-center justify-between rounded-[10px] border bg-[#fafaf7] px-3 py-2 text-[13px] transition-all outline-none",
          "data-[state=open]:ring-2 data-[state=open]:ring-[#ffd239]/20 data-[state=open]:border-[#ffd239]",
          error
            ? "border-red-300"
            : value
            ? "border-[#ffd239]/60 bg-white font-medium text-[#2d2d2d]"
            : "border-black/10 text-black/32 hover:border-black/20 hover:text-black/48",
        )}
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon asChild>
          <ChevronDown className="h-3.5 w-3.5 shrink-0 text-black/30" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position="popper"
          sideOffset={4}
          className="z-50 w-[var(--radix-select-trigger-width)] overflow-hidden rounded-[14px] border border-black/8 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.14)]"
        >
          <Select.Viewport className="p-1.5">
            {options.map((opt) => (
              <Select.Item
                key={opt}
                value={opt}
                className="group flex cursor-pointer select-none items-center justify-between gap-2 rounded-[9px] px-3 py-2 text-[12px] text-black/60 outline-none transition hover:bg-[#fafaf7] hover:text-brand-charcoal data-[state=checked]:bg-[rgba(255,210,57,0.10)] data-[state=checked]:font-semibold data-[state=checked]:text-brand-charcoal"
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
  );
}

/* ── helpers ── */
type ContactFormPrefill = {
  line?: string;
  group?: string;
  item?: string;
  message?: string;
};

type SubmitResult = {
  whatsappUrl: string;
  emailStatus: "sent" | "pending_config" | "failed";
};

function openWhatsAppInNewTab(url: string, pendingWindow?: Window | null) {
  if (typeof window === "undefined") return;
  if (pendingWindow && !pendingWindow.closed) {
    pendingWindow.location.href = url;
    pendingWindow.focus();
    return;
  }
  const w = window.open(url, "_blank", "noopener,noreferrer");
  if (w) { w.focus(); return; }
  window.location.assign(url);
}

/* ── form ── */
export function ContactForm({ prefill }: { prefill?: ContactFormPrefill }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitResult, setSubmitResult] = useState<SubmitResult | null>(null);

  const lineFromQuery = prefill?.line ?? "";
  const groupFromQuery = prefill?.group ?? "";
  const itemFromQuery = prefill?.item ?? "";
  const messageFromQuery = prefill?.message ?? "";
  const requestedFromQuery = itemFromQuery || groupFromQuery;

  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactSubmissionInput, unknown, ContactSubmission>({
    resolver: zodResolver(contactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      interests: [],
      obra: "",
      zone: "",
      message: "",
      line: "",
      group: "",
      item: "",
    },
  });

  const interests = watch("interests") ?? [];
  const selectedInterest = interests[0] ?? "";
  const selectedObra = watch("obra") ?? "";

  useEffect(() => {
    setValue("line", lineFromQuery);
    setValue("group", groupFromQuery);
    setValue("item", itemFromQuery);
    if (lineFromQuery) setValue("interests", [lineFromQuery], { shouldValidate: true });
    if (messageFromQuery) setValue("message", messageFromQuery, { shouldValidate: true });
  }, [groupFromQuery, itemFromQuery, lineFromQuery, messageFromQuery, setValue]);

  const onSubmit = async (values: ContactSubmission) => {
    const fallbackUrl = buildWhatsappUrl(values);
    const pendingWindow =
      typeof window !== "undefined"
        ? window.open("", "_blank", "noopener,noreferrer")
        : null;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        whatsappUrl?: string;
        emailStatus?: "sent" | "pending_config" | "failed";
      };
      const result = {
        whatsappUrl: data.whatsappUrl ?? fallbackUrl,
        emailStatus: data.emailStatus ?? "pending_config",
      } satisfies SubmitResult;

      openWhatsAppInNewTab(result.whatsappUrl, pendingWindow);
      setSubmitResult(result);
      setSubmitted(true);
      reset({
        name: "", email: "", phone: "", company: "",
        interests: lineFromQuery ? [lineFromQuery] : [],
        obra: "", zone: "",
        message: messageFromQuery,
        line: lineFromQuery, group: groupFromQuery, item: itemFromQuery,
      });
    } catch {
      openWhatsAppInNewTab(fallbackUrl, pendingWindow);
      setSubmitResult({ whatsappUrl: fallbackUrl, emailStatus: "failed" });
      setSubmitted(true);
    }
  };

  /* ── success state ── */
  if (submitted) {
    return (
      <div
        id="contacto"
        className="mx-auto flex min-h-[220px] max-w-2xl items-center justify-center rounded-[18px] border border-black/8 bg-white p-8 text-center shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
      >
        <div>
          <div
            className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full"
            style={{ background: "rgba(255,210,57,0.14)", border: "1px solid rgba(255,210,57,0.28)" }}
          >
            <CheckCircle2 className="h-5 w-5 text-brand-charcoal" />
          </div>
          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-black/34">
            Consulta enviada
          </p>
          <h3 className="mt-1.5 font-display text-[clamp(1.4rem,3vw,2.2rem)] uppercase leading-[0.94] tracking-[0.04em] text-brand-charcoal">
            Te respondemos
            <span className="block text-brand-yellow">en menos de 24 hs.</span>
          </h3>
          <div className="mt-5 flex flex-wrap justify-center gap-2.5">
            {submitResult?.whatsappUrl && (
              <a
                href={submitResult.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-yellow px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1a1000] transition hover:-translate-y-0.5"
              >
                Abrir WhatsApp <ArrowRight className="h-3.5 w-3.5" />
              </a>
            )}
            <button
              onClick={() => { setSubmitted(false); setSubmitResult(null); }}
              className="inline-flex rounded-full border border-black/10 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-charcoal transition hover:border-brand-yellow"
            >
              Nueva consulta
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ── form ── */
  return (
    <div id="contacto" className="mx-auto w-full max-w-2xl">
      <div className="overflow-hidden rounded-[18px] border border-black/8 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
        {/* top accent */}
        <div className="h-[3px] bg-brand-yellow" />

        {/* prefill badge */}
        {(lineFromQuery || requestedFromQuery) && (
          <div className="border-b border-black/6 bg-[rgba(255,247,210,0.6)] px-4 py-2">
            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-black/38">
              Consulta preseleccionada
            </p>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {lineFromQuery && (
                <span className="rounded-full bg-[#2d2d2d] px-2.5 py-0.5 text-[10px] font-semibold text-white">
                  {lineFromQuery}
                </span>
              )}
              {requestedFromQuery && (
                <span className="rounded-full border border-black/10 px-2.5 py-0.5 text-[10px] font-semibold text-black/48">
                  {requestedFromQuery}
                </span>
              )}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" {...register("line")} />
          <input type="hidden" {...register("group")} />
          <input type="hidden" {...register("item")} />

          <div className="space-y-0 divide-y divide-black/[0.05]">

            {/* ── Selects row ── */}
            <div className="grid grid-cols-2 gap-3 px-4 py-4">
              <div>
                <label className={labelCls}>Linea de interes *</label>
                <StyledSelect
                  placeholder="Seleccione una"
                  value={selectedInterest}
                  onChange={(v) => setValue("interests", [v], { shouldValidate: true })}
                  options={contactInterestOptions}
                  accentColor="yellow"
                  error={!!errors.interests}
                />
                {errors.interests && (
                  <p className="mt-0.5 text-[10px] text-red-500">{errors.interests.message}</p>
                )}
              </div>
              <div>
                <label className={labelCls}>Tipo de obra</label>
                <StyledSelect
                  placeholder="Seleccione uno"
                  value={selectedObra}
                  onChange={(v) => setValue("obra", v)}
                  options={contactObraOptions}
                  accentColor="charcoal"
                />
              </div>
            </div>

            {/* ── Datos ── */}
            <div className="px-4 py-4">
              <p className="mb-2.5 text-[9px] font-bold uppercase tracking-[0.24em] text-black/30">
                Datos de contacto
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label htmlFor="name" className={labelCls}>Nombre *</label>
                  <input
                    id="name"
                    type="text"
                    className={inputCls}
                    placeholder="Tu nombre"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="mt-0.5 text-[10px] text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className={labelCls}>Telefono</label>
                  <input
                    id="phone"
                    type="tel"
                    className={inputCls}
                    placeholder="+54 9 ..."
                    {...register("phone")}
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="email" className={labelCls}>Email *</label>
                  <input
                    id="email"
                    type="email"
                    className={inputCls}
                    placeholder="tuemail@empresa.com"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="mt-0.5 text-[10px] text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div className="col-span-2">
                  <label htmlFor="company" className={labelCls}>Empresa o rubro *</label>
                  <input
                    id="company"
                    type="text"
                    className={inputCls}
                    placeholder="Constructora, municipio, estudio..."
                    {...register("company")}
                  />
                  {errors.company && (
                    <p className="mt-0.5 text-[10px] text-red-500">{errors.company.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* ── Proyecto ── */}
            <div className="px-4 py-4">
              <p className="mb-2.5 text-[9px] font-bold uppercase tracking-[0.24em] text-black/30">
                Tu proyecto
              </p>
              <div className="space-y-2">
                <div>
                  <label htmlFor="zone" className={labelCls}>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-2.5 w-2.5" />
                      Zona de entrega
                    </span>
                  </label>
                  <input
                    id="zone"
                    type="text"
                    className={inputCls}
                    placeholder="Neuquen, Zapala, Cutral Co..."
                    {...register("zone")}
                  />
                </div>
                <div>
                  <label htmlFor="message" className={labelCls}>Mensaje *</label>
                  <textarea
                    id="message"
                    rows={3}
                    className={cn(inputCls, "resize-none")}
                    placeholder="Contanos el tipo de obra, volumen estimado, fecha de inicio..."
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="mt-0.5 text-[10px] text-red-500">{errors.message.message}</p>
                  )}
                </div>
              </div>
            </div>

          </div>

          {/* ── footer ── */}
          <div className="flex items-center justify-between border-t border-black/[0.05] px-4 py-3">
            <p className="text-[9px] text-black/22">* Campos requeridos</p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-yellow px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1a1000] shadow-[0_4px_14px_rgba(255,210,57,0.28)] transition hover:-translate-y-0.5 hover:brightness-95 disabled:opacity-60"
            >
              {isSubmitting ? "Enviando..." : "Enviar consulta"}
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
