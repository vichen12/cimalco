"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  User,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  buildWhatsappUrl,
  contactInterestOptions,
  contactObraOptions,
  contactSubmissionSchema,
  type ContactSubmissionInput,
  type ContactSubmission,
} from "@/lib/contact";

/* ─── input ─── */
function FormInput({
  icon: Icon,
  error,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ElementType;
  error?: boolean;
}) {
  return (
    <div className="relative">
      {Icon && (
        <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-[14px] w-[14px] -translate-y-1/2 text-black/28" />
      )}
      <input
        {...props}
        className={cn(
          "w-full rounded-xl border bg-[#fafaf6] py-[7px] sm:py-[9px] pr-4 text-[12.5px] sm:text-[13.5px] text-brand-charcoal outline-none transition-all duration-150",
          Icon ? "pl-[36px]" : "pl-3.5",
          "placeholder:text-black/30",
          "hover:bg-white hover:border-black/18 focus:bg-white focus:border-[#ffd239]/65 focus:ring-2 focus:ring-[#ffd239]/14",
          error ? "border-red-300 focus:border-red-400" : "border-black/[0.1]",
          className,
        )}
      />
    </div>
  );
}

/* ─── textarea ─── */
function FormTextarea({
  icon: Icon,
  error,
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  icon?: React.ElementType;
  error?: boolean;
}) {
  return (
    <div className="relative">
      {Icon && (
        <Icon className="pointer-events-none absolute left-3.5 top-[13px] h-[14px] w-[14px] text-black/28" />
      )}
      <textarea
        {...props}
        className={cn(
          "w-full resize-none rounded-xl border bg-[#fafaf6] py-[7px] sm:py-[9px] pr-4 text-[12.5px] sm:text-[13.5px] text-brand-charcoal outline-none transition-all duration-150",
          Icon ? "pl-[36px]" : "pl-3.5",
          "placeholder:text-black/30",
          "hover:bg-white hover:border-black/18 focus:bg-white focus:border-[#ffd239]/65 focus:ring-2 focus:ring-[#ffd239]/14",
          error ? "border-red-300 focus:border-red-400" : "border-black/[0.1]",
          className,
        )}
      />
    </div>
  );
}

/* ─── section header with extending rule ─── */
function SectionHeader({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-[#ffd239] text-[9px] font-bold leading-none text-[#1a1000]">
        {n}
      </span>
      <p className="whitespace-nowrap text-[9.5px] font-bold uppercase tracking-[0.22em] text-black/40">
        {title}
      </p>
      <span className="h-px flex-1 bg-black/[0.07]" />
    </div>
  );
}

/* ─── multi-select ─── */
type SelectProps = {
  placeholder: string;
  value: string[];
  onChange: (v: string[]) => void;
  options: readonly string[];
  error?: boolean;
};
function FormSelect({ placeholder, value, onChange, options, error }: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOut(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleOut);
    return () => document.removeEventListener("mousedown", handleOut);
  }, []);

  const toggle = (opt: string) =>
    onChange(value.includes(opt) ? value.filter((v) => v !== opt) : [...value, opt]);

  const label =
    value.length === 0
      ? placeholder
      : value.length === 1
        ? value[0]
        : `${value[0]} +${value.length - 1}`;

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex w-full items-center gap-2 rounded-xl border bg-[#fafaf6] px-3.5 py-[7px] sm:py-[9px] text-[12.5px] sm:text-[13.5px] text-left outline-none transition-all duration-150",
          "hover:bg-white hover:border-black/18",
          open
            ? "border-[#ffd239]/65 bg-white ring-2 ring-[#ffd239]/14"
            : error
              ? "border-red-300"
              : value.length > 0
                ? "border-[#ffd239]/45 bg-white"
                : "border-black/[0.1]",
        )}
      >
        <span className={cn("flex-1 truncate", value.length === 0 ? "text-black/30" : "font-medium text-brand-charcoal")}>
          {label}
        </span>
        <ChevronDown className={cn("h-[14px] w-[14px] shrink-0 text-black/26 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="absolute z-50 mt-1.5 w-full overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-[0_16px_48px_rgba(0,0,0,0.13)]">
          <div className="max-h-[200px] overflow-y-auto p-1.5">
            {options.map((opt) => {
              const sel = value.includes(opt);
              return (
                <button
                  type="button"
                  key={opt}
                  onClick={() => toggle(opt)}
                  className="flex w-full items-center gap-2.5 rounded-[10px] px-3 py-2.5 text-[12.5px] text-left outline-none transition hover:bg-[#fafaf6]"
                >
                  <span className={cn(
                    "flex h-[14px] w-[14px] shrink-0 items-center justify-center rounded-full border-2 transition",
                    sel ? "border-[#ffd239] bg-[#ffd239]" : "border-black/16",
                  )}>
                    {sel && <Check className="h-[8px] w-[8px] text-[#1a1000]" />}
                  </span>
                  <span className={cn("transition", sel ? "font-semibold text-brand-charcoal" : "text-black/52")}>
                    {opt}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="border-t border-black/[0.05] px-1.5 pb-1.5 pt-1">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-1.5 rounded-[10px] bg-[#ffd239] py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1a1000] transition hover:brightness-95"
            >
              <Check className="h-3 w-3" /> Listo
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── field error ─── */
function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 pl-1 text-[11px] text-red-500">{message}</p>;
}

/* ─── types ─── */
type Prefill = { line?: string; group?: string; item?: string; message?: string };

/* ─── main component ─── */
export function ContactForm({ prefill }: { prefill?: Prefill }) {
  const [submitted, setSubmitted] = useState(false);
  const [waUrl, setWaUrl] = useState("");
  const [obrasSelected, setObrasSelected] = useState<string[]>([]);

  const lineFromQuery  = prefill?.line    ?? "";
  const groupFromQuery = prefill?.group   ?? "";
  const itemFromQuery  = prefill?.item    ?? "";
  const msgFromQuery   = prefill?.message ?? "";

  const {
    register,
    setValue,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactSubmissionInput, unknown, ContactSubmission>({
    resolver: zodResolver(contactSubmissionSchema),
    defaultValues: {
      name: "", email: "", phone: "", company: "", cargo: "",
      interests: [], obra: "", zone: "",
      localidad: "", provincia: "", volumen: "", fecha: "",
      entrega: false, colocacion: false,
      message: "",
      line: "", group: "", item: "",
    },
  });

  const interests = watch("interests") ?? [];

  useEffect(() => {
    setValue("line",  lineFromQuery);
    setValue("group", groupFromQuery);
    setValue("item",  itemFromQuery);
    if (lineFromQuery) setValue("interests", [lineFromQuery], { shouldValidate: true });
    if (msgFromQuery)  setValue("message",   msgFromQuery,   { shouldValidate: true });
  }, [lineFromQuery, groupFromQuery, itemFromQuery, msgFromQuery, setValue]);

  useEffect(() => {
    setValue("obra", obrasSelected.join(", "));
  }, [obrasSelected, setValue]);

  const onSubmit = (values: ContactSubmission) => {
    const url = buildWhatsappUrl(values);
    window.open(url, "_blank", "noopener,noreferrer");
    setWaUrl(url);
    setSubmitted(true);

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }).catch(() => {});

    setObrasSelected([]);
    reset({
      name: "", email: "", phone: "", company: "", cargo: "",
      interests: lineFromQuery ? [lineFromQuery] : [],
      obra: "", zone: "", localidad: "", provincia: "", volumen: "", fecha: "",
      entrega: false, colocacion: false,
      message: msgFromQuery,
      line: lineFromQuery, group: groupFromQuery, item: itemFromQuery,
    });
  };

  return (
    <div id="contacto" className="mx-auto w-full">
      <div className="overflow-hidden rounded-[22px] border border-black/[0.08] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.10),0_4px_16px_rgba(0,0,0,0.06)]">

        {/* Accent bar */}
        <div className="h-[3px] bg-[#ffd239]" />

        {/* Prefill badge */}
        {(lineFromQuery || itemFromQuery || groupFromQuery) && (
          <div className="border-b border-[#ffd239]/18 bg-[rgba(255,247,210,0.55)] px-5 py-3">
            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-black/34">Consulta preseleccionada</p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {lineFromQuery && (
                <span className="rounded-full bg-brand-charcoal px-3 py-0.5 text-[10px] font-semibold text-white">{lineFromQuery}</span>
              )}
              {(itemFromQuery || groupFromQuery) && (
                <span className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-0.5 text-[10px] font-semibold text-black/50">
                  {itemFromQuery || groupFromQuery}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Success */}
        {submitted && (
          <div className="flex items-start gap-3 border-b border-[#ffd239]/20 bg-[rgba(255,243,186,0.4)] px-5 py-4">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#b38600]" />
            <div className="flex-1">
              <p className="text-[12.5px] font-semibold text-brand-charcoal">
                Consulta enviada — te respondemos en menos de 24 hs.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-[11px] font-semibold text-black/50 underline underline-offset-2 transition hover:text-brand-charcoal"
              >
                Abrir WhatsApp de nuevo <ArrowRight className="h-3 w-3" />
              </a>
            </div>
            <button type="button" onClick={() => setSubmitted(false)} className="mt-0.5 text-black/22 transition hover:text-black/60">
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Form body */}
        <form onSubmit={handleSubmit(onSubmit)} className="px-4 py-3 sm:px-5 sm:py-4">
          <input type="hidden" {...register("line")} />
          <input type="hidden" {...register("group")} />
          <input type="hidden" {...register("item")} />

          {/* ── 01 CONSULTA ── */}
          <SectionHeader n="01" title="Consulta" />
          <div className="mt-2 space-y-1.5">
            <div>
              <FormSelect
                placeholder="Línea de interés *"
                value={interests}
                onChange={(v) => setValue("interests", v, { shouldValidate: true })}
                options={contactInterestOptions}
                error={!!errors.interests}
              />
              <FieldError message={errors.interests?.message} />
            </div>
            <FormSelect
              placeholder="Tipo de obra"
              value={obrasSelected}
              onChange={setObrasSelected}
              options={contactObraOptions}
            />
          </div>

          <div className="my-2.5 border-t border-black/[0.07]" />

          {/* ── 02 TUS DATOS ── */}
          <SectionHeader n="02" title="Tus datos" />
          <div className="mt-2 space-y-1.5">
            <div className="grid grid-cols-2 gap-1.5">
              <div>
                <FormInput placeholder="Tu nombre *" icon={User} error={!!errors.name} {...register("name")} />
                <FieldError message={errors.name?.message} />
              </div>
              <FormInput placeholder="Teléfono" type="tel" icon={Phone} {...register("phone")} />
            </div>
            <div>
              <FormInput placeholder="Email *" type="email" icon={Mail} error={!!errors.email} {...register("email")} />
              <FieldError message={errors.email?.message} />
            </div>
            <div>
              <FormInput placeholder="Empresa o rubro *" icon={Building2} error={!!errors.company} {...register("company")} />
              <FieldError message={errors.company?.message} />
            </div>
          </div>

          <div className="my-2.5 border-t border-black/[0.07]" />

          {/* ── 03 TU PROYECTO ── */}
          <SectionHeader n="03" title="Tu proyecto" />
          <div className="mt-2 space-y-1.5">
            <FormInput placeholder="Zona de entrega (Neuquén, Zapala...)" icon={MapPin} {...register("zone")} />
            <div>
              <FormTextarea
                placeholder="Contanos el tipo de obra, volumen estimado, fecha de inicio..."
                rows={2}
                icon={MessageSquare}
                error={!!errors.message}
                {...register("message")}
              />
              <FieldError message={errors.message?.message} />
            </div>
          </div>

          {/* Submit */}
          <div className="mt-3">
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-[#ffd239] py-[11px] text-[11px] font-bold uppercase tracking-[0.24em] text-[#1a1000] shadow-[0_4px_20px_rgba(255,210,57,0.30)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(255,210,57,0.44)] active:translate-y-0"
            >
              Enviar consulta
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
            <p className="mt-2 text-center text-[9px] text-black/20">
              * Campos requeridos · Solo usamos tus datos para responder tu consulta.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
