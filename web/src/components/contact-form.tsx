"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, MessageCircleWarning } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  buildWhatsappUrl,
  contactInterestOptions,
  contactSubmissionSchema,
  type ContactSubmissionInput,
  type ContactSubmission,
} from "@/lib/contact";

const inputClassName =
  "w-full rounded-[14px] border border-black/10 bg-[#fafaf7] px-5 py-3.5 text-sm text-[#2d2d2d] transition placeholder:text-black/28 focus:border-[#ffd239] focus:bg-white focus:outline-none focus:ring-4 focus:ring-[#ffd239]/14";

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

function openWhatsAppInNewTab(
  url: string,
  pendingWindow?: Window | null,
) {
  if (typeof window === "undefined") return;

  if (pendingWindow && !pendingWindow.closed) {
    pendingWindow.location.href = url;
    pendingWindow.focus();
    return;
  }

  const nextWindow = window.open(url, "_blank", "noopener,noreferrer");

  if (nextWindow) {
    nextWindow.focus();
    return;
  }

  window.location.assign(url);
}

export function ContactForm({ prefill }: { prefill?: ContactFormPrefill }) {
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
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
      message: "",
      line: "",
      group: "",
      item: "",
    },
  });

  const selectedInterests = watch("interests") ?? [];

  const toggleInterest = (item: string) => {
    const updated = selectedInterests.includes(item)
      ? selectedInterests.filter((interest) => interest !== item)
      : [...selectedInterests, item];

    setValue("interests", updated, { shouldValidate: true });
  };

  useEffect(() => {
    setValue("line", lineFromQuery);
    setValue("group", groupFromQuery);
    setValue("item", itemFromQuery);

    if (lineFromQuery) {
      setValue("interests", [lineFromQuery], { shouldValidate: true });
    }

    if (messageFromQuery) {
      setValue("message", messageFromQuery, { shouldValidate: true });
    }
  }, [
    groupFromQuery,
    itemFromQuery,
    lineFromQuery,
    messageFromQuery,
    setValue,
  ]);

  const onSubmit = async (values: ContactSubmission) => {
    setSubmissionError("");
    const fallbackWhatsappUrl = buildWhatsappUrl(values);
    const pendingWhatsappWindow =
      typeof window !== "undefined"
        ? window.open("", "_blank", "noopener,noreferrer")
        : null;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as {
        ok?: boolean;
        error?: string;
        whatsappUrl?: string;
        emailStatus?: "sent" | "pending_config" | "failed";
      };

      const nextResult = {
        whatsappUrl: data.whatsappUrl ?? fallbackWhatsappUrl,
        emailStatus: data.emailStatus ?? "pending_config",
      } satisfies SubmitResult;

      if (!response.ok || !data.ok) {
        console.error(
          "No pudimos guardar la consulta en la base, pero redirigimos a WhatsApp.",
          data.error,
        );
      }

      if (typeof window !== "undefined") {
        openWhatsAppInNewTab(
          nextResult.whatsappUrl,
          pendingWhatsappWindow,
        );
        return;
      }

      setSubmitResult(nextResult);
      setSubmitted(true);
      reset({
        name: "",
        email: "",
        phone: "",
        company: "",
        interests: lineFromQuery ? [lineFromQuery] : [],
        message: messageFromQuery,
        line: lineFromQuery,
        group: groupFromQuery,
        item: itemFromQuery,
      });
    } catch (error) {
      console.error(
        "Fallo el envio al backend, pero redirigimos igual a WhatsApp.",
        error,
      );

      if (typeof window !== "undefined") {
        openWhatsAppInNewTab(
          fallbackWhatsappUrl,
          pendingWhatsappWindow,
        );
      }
    }
  };

  if (submitted) {
    return (
      <div
        id="contacto"
        className="mx-auto flex min-h-[360px] max-w-2xl items-center justify-center rounded-[24px] border border-black/8 bg-white p-10 text-center shadow-[0_16px_48px_rgba(0,0,0,0.06)]"
      >
        <div>
          <div
            className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full"
            style={{
              background: "rgba(255,210,57,0.14)",
              border: "1px solid rgba(255,210,57,0.28)",
            }}
          >
            <CheckCircle2 className="h-6 w-6 text-brand-charcoal" />
          </div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-black/34">
            Consulta recibida
          </p>
          <h3 className="mt-2 font-display text-[clamp(1.8rem,3.5vw,3rem)] uppercase leading-[0.92] tracking-[0.04em] text-brand-charcoal">
            La consulta ya se
            <span className="block text-brand-yellow">guardo correctamente.</span>
          </h3>
          <p className="mt-3 text-sm leading-7 text-black/46">
            El mensaje se registro en la base comercial y ya esta listo para
            seguimiento.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {submitResult?.whatsappUrl ? (
              <a
                href={submitResult.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1a1000] transition hover:-translate-y-0.5"
              >
                Abrir WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            ) : null}
            <button
              onClick={() => {
                setSubmitted(false);
                setSubmitResult(null);
              }}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-charcoal transition hover:border-brand-yellow"
            >
              Nueva consulta <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="contacto" className="mx-auto w-full max-w-2xl">
      <div className="overflow-hidden rounded-[24px] border border-black/8 bg-white shadow-[0_16px_52px_rgba(0,0,0,0.07)]">
        <div className="h-[3px] bg-brand-yellow" />
        <div className="p-6 sm:p-8">
          {(lineFromQuery || requestedFromQuery) && (
            <div className="mb-6 rounded-[14px] border border-[#e8d06a]/50 bg-[rgba(255,247,210,0.5)] px-4 py-3.5">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-black/36">
                Consulta preseleccionada
              </p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {lineFromQuery && (
                  <span className="rounded-full bg-[#2d2d2d] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                    {lineFromQuery}
                  </span>
                )}
                {requestedFromQuery && (
                  <span className="rounded-full border border-black/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-black/50">
                    {requestedFromQuery}
                  </span>
                )}
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <input type="hidden" {...register("line")} />
            <input type="hidden" {...register("group")} />
            <input type="hidden" {...register("item")} />

            <div className="space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.26em] text-black/34">
                Linea de interes
                <span className="ml-2 font-normal normal-case text-black/28">
                  (podes seleccionar varias)
                </span>
              </p>
              <div className="flex flex-wrap gap-2">
                {contactInterestOptions.map((item) => {
                  const active = selectedInterests.includes(item);

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleInterest(item)}
                      className={cn(
                        "rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] transition-all duration-150",
                        active
                          ? "border-[#ffd239] bg-[#ffd239] text-[#1a1000] shadow-[0_4px_12px_rgba(255,210,57,0.3)]"
                          : "border-black/10 bg-white text-black/46 hover:border-black/18 hover:bg-[#fafaf7] hover:text-brand-charcoal",
                      )}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
              {errors.interests && (
                <p className="text-[11px] text-red-500">
                  {errors.interests.message}
                </p>
              )}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-black/36"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  className={inputClassName}
                  placeholder="Tu nombre"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-[11px] text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-black/36"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={inputClassName}
                  placeholder="tuemail@empresa.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-[11px] text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-black/36"
                >
                  Empresa o rubro
                </label>
                <input
                  id="company"
                  type="text"
                  className={inputClassName}
                  placeholder="Empresa, estudio o rubro"
                  {...register("company")}
                />
                {errors.company && (
                  <p className="text-[11px] text-red-500">
                    {errors.company.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-black/36"
                >
                  Telefono
                </label>
                <input
                  id="phone"
                  type="tel"
                  className={inputClassName}
                  placeholder="+54 9 ..."
                  {...register("phone")}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-black/36"
              >
                Contanos tu proyecto
              </label>
              <textarea
                id="message"
                rows={5}
                className={cn(inputClassName, "resize-none")}
                placeholder="Tipo de obra, volumen estimado, zona de entrega..."
                {...register("message")}
              />
              {errors.message && (
                <p className="text-[11px] text-red-500">
                  {errors.message.message}
                </p>
              )}
            </div>

            {submissionError && (
              <div className="rounded-[14px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                <div className="flex items-start gap-2">
                  <MessageCircleWarning className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>{submissionError}</span>
                </div>
              </div>
            )}

            <div className="flex justify-end pt-1">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-full bg-brand-yellow px-8 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#1a1000] shadow-[0_8px_22px_rgba(255,210,57,0.26)] transition hover:-translate-y-0.5 hover:brightness-95 disabled:opacity-60"
              >
                {isSubmitting ? "Enviando..." : "Enviar consulta"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
