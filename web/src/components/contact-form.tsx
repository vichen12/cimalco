"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, ChevronDown, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  buildWhatsappUrl,
  contactInterestOptions,
  contactObraOptions,
  contactSubmissionSchema,
  type ContactSubmissionInput,
  type ContactSubmission,
} from "@/lib/contact";

const inputCls =
  "w-full rounded-[10px] border border-black/10 bg-[#fafaf7] px-3 py-2 text-[13px] text-[#2d2d2d] transition placeholder:text-black/28 focus:border-[#ffd239] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ffd239]/12";

const labelCls =
  "block text-[9px] font-bold uppercase tracking-[0.2em] text-black/36 mb-1";

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

/* ── Collapsible section for mobile ── */
function Section({
  title,
  badge,
  defaultOpen = false,
  children,
}: {
  title: string;
  badge?: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-2.5 text-left transition hover:bg-black/[0.02]"
      >
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-charcoal">
            {title}
          </span>
          {badge && (
            <span className="rounded-full bg-brand-yellow px-1.5 py-0.5 text-[8px] font-bold text-[#1a1000]">
              {badge}
            </span>
          )}
        </div>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 text-black/28 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      {open && <div className="border-t border-black/6 px-4 pb-3 pt-2.5">{children}</div>}
    </div>
  );
}

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

  const selectedInterests = watch("interests") ?? [];
  const selectedObra = watch("obra") ?? "";
  const nameVal = watch("name");
  const emailVal = watch("email");
  const companyVal = watch("company");

  const toggleInterest = (item: string) => {
    const next = selectedInterests.includes(item)
      ? selectedInterests.filter((i) => i !== item)
      : [...selectedInterests, item];
    setValue("interests", next, { shouldValidate: true });
  };

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

  if (submitted) {
    return (
      <div
        id="contacto"
        className="mx-auto flex min-h-[240px] max-w-2xl items-center justify-center rounded-[18px] border border-black/8 bg-white p-8 text-center shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
      >
        <div>
          <div
            className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full"
            style={{ background: "rgba(255,210,57,0.14)", border: "1px solid rgba(255,210,57,0.28)" }}
          >
            <CheckCircle2 className="h-5 w-5 text-brand-charcoal" />
          </div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/34">
            Consulta enviada
          </p>
          <h3 className="mt-1.5 font-display text-[clamp(1.4rem,3vw,2.4rem)] uppercase leading-[0.94] tracking-[0.04em] text-brand-charcoal">
            Te respondemos
            <span className="block text-brand-yellow">en menos de 24 hs.</span>
          </h3>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {submitResult?.whatsappUrl && (
              <a
                href={submitResult.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1a1000] transition hover:-translate-y-0.5"
              >
                Abrir WhatsApp <ArrowRight className="h-3.5 w-3.5" />
              </a>
            )}
            <button
              onClick={() => { setSubmitted(false); setSubmitResult(null); }}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-charcoal transition hover:border-brand-yellow"
            >
              Nueva consulta
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="contacto" className="mx-auto w-full max-w-2xl">
      <div className="overflow-hidden rounded-[18px] border border-black/8 bg-white shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
        <div className="h-[3px] bg-brand-yellow" />

        {(lineFromQuery || requestedFromQuery) && (
          <div className="border-b border-black/6 bg-[rgba(255,247,210,0.6)] px-4 py-2.5">
            <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-black/40">
              Consulta preseleccionada
            </p>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {lineFromQuery && (
                <span className="rounded-full bg-[#2d2d2d] px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-white">
                  {lineFromQuery}
                </span>
              )}
              {requestedFromQuery && (
                <span className="rounded-full border border-black/10 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-black/50">
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

          <div className="divide-y divide-black/6">
            {/* Linea de interes */}
            <Section
              title="Linea de interes"
              badge={selectedInterests.length > 0 ? String(selectedInterests.length) : undefined}
              defaultOpen
            >
              <div className="flex flex-wrap gap-1.5">
                {contactInterestOptions.map((item) => {
                  const active = selectedInterests.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleInterest(item)}
                      className={cn(
                        "rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] transition-all duration-150",
                        active
                          ? "border-[#ffd239] bg-[#ffd239] text-[#1a1000]"
                          : "border-black/10 bg-white text-black/44 hover:border-black/18 hover:text-brand-charcoal",
                      )}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
              {errors.interests && (
                <p className="mt-1.5 text-[10px] text-red-500">{errors.interests.message}</p>
              )}
            </Section>

            {/* Tipo de obra */}
            <Section
              title="Tipo de obra"
              badge={selectedObra ? "1" : undefined}
            >
              <div className="flex flex-wrap gap-1.5">
                {contactObraOptions.map((obra) => {
                  const active = selectedObra === obra;
                  return (
                    <button
                      key={obra}
                      type="button"
                      onClick={() => setValue("obra", active ? "" : obra)}
                      className={cn(
                        "rounded-full border px-2.5 py-1 text-[10px] font-medium tracking-[0.06em] transition-all duration-150",
                        active
                          ? "border-brand-charcoal bg-brand-charcoal text-white"
                          : "border-black/10 bg-white text-black/44 hover:border-black/20 hover:text-brand-charcoal",
                      )}
                    >
                      {obra}
                    </button>
                  );
                })}
              </div>
            </Section>

            {/* Datos de contacto */}
            <Section
              title="Tus datos"
              badge={nameVal && emailVal && companyVal ? "✓" : undefined}
              defaultOpen
            >
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label htmlFor="name" className={labelCls}>Nombre *</label>
                  <input id="name" type="text" className={inputCls} placeholder="Tu nombre" {...register("name")} />
                  {errors.name && <p className="mt-0.5 text-[10px] text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className={labelCls}>Telefono</label>
                  <input id="phone" type="tel" className={inputCls} placeholder="+54 9 ..." {...register("phone")} />
                </div>
                <div className="col-span-2">
                  <label htmlFor="email" className={labelCls}>Email *</label>
                  <input id="email" type="email" className={inputCls} placeholder="tuemail@empresa.com" {...register("email")} />
                  {errors.email && <p className="mt-0.5 text-[10px] text-red-500">{errors.email.message}</p>}
                </div>
                <div className="col-span-2">
                  <label htmlFor="company" className={labelCls}>Empresa o rubro *</label>
                  <input id="company" type="text" className={inputCls} placeholder="Constructora, municipio, estudio..." {...register("company")} />
                  {errors.company && <p className="mt-0.5 text-[10px] text-red-500">{errors.company.message}</p>}
                </div>
              </div>
            </Section>

            {/* Zona + Mensaje */}
            <Section title="Tu proyecto">
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
                  <label htmlFor="message" className={labelCls}>Contanos tu proyecto *</label>
                  <textarea
                    id="message"
                    rows={2}
                    className={cn(inputCls, "resize-none")}
                    placeholder="Tipo de obra, volumen estimado, fecha estimada..."
                    {...register("message")}
                  />
                  {errors.message && <p className="mt-0.5 text-[10px] text-red-500">{errors.message.message}</p>}
                </div>
              </div>
            </Section>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-black/6 px-4 py-2.5">
            <p className="text-[9px] text-black/24">* Requeridos</p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-yellow px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#1a1000] shadow-[0_3px_12px_rgba(255,210,57,0.24)] transition hover:-translate-y-0.5 hover:brightness-95 disabled:opacity-60"
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
