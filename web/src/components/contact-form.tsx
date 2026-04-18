"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight, Building2, Check, CheckCircle2,
  ChevronDown, Mail, MapPin, MessageSquare, Phone, User, X,
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

/* ─── section header ─── */
function SectionHeader({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-[8px] font-black text-[#1a1000]">
        {num}
      </span>
      <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-black/40">{label}</span>
      <div className="h-px flex-1 bg-black/[0.06]" />
    </div>
  );
}

/* ─── pill input ─── */
type PillInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon: React.ElementType;
  error?: boolean;
};
function PillInput({ icon: Icon, error, className, ...props }: PillInputProps) {
  return (
    <div className="relative">
      <Icon className="pointer-events-none absolute left-4 top-1/2 h-[14px] w-[14px] -translate-y-1/2 text-black/22" />
      <input
        {...props}
        className={cn(
          "w-full rounded-full border bg-[#fafaf7] py-2.5 pl-9 pr-4 text-[13px] text-brand-charcoal outline-none transition-all",
          "placeholder:text-black/26 focus:bg-white focus:ring-2 focus:ring-[#ffd239]/16",
          error
            ? "border-red-300 focus:border-red-400"
            : "border-black/[0.09] focus:border-[#ffd239]/60 hover:border-black/16",
          className,
        )}
      />
    </div>
  );
}

/* ─── pill textarea ─── */
type PillTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  icon: React.ElementType;
  error?: boolean;
};
function PillTextarea({ icon: Icon, error, className, ...props }: PillTextareaProps) {
  return (
    <div className="relative">
      <Icon className="pointer-events-none absolute left-4 top-[14px] h-[14px] w-[14px] text-black/22" />
      <textarea
        {...props}
        className={cn(
          "w-full resize-none rounded-[18px] border bg-[#fafaf7] py-2.5 pl-9 pr-4 text-[13px] text-brand-charcoal outline-none transition-all",
          "placeholder:text-black/26 focus:bg-white focus:ring-2 focus:ring-[#ffd239]/16",
          error
            ? "border-red-300 focus:border-red-400"
            : "border-black/[0.09] focus:border-[#ffd239]/60 hover:border-black/16",
          className,
        )}
      />
    </div>
  );
}

/* ─── multi-select ─── */
type MultiSelectProps = {
  placeholder: string;
  value: string[];
  onChange: (v: string[]) => void;
  options: readonly string[];
  error?: boolean;
};
function MultiSelect({ placeholder, value, onChange, options, error }: MultiSelectProps) {
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
    value.length === 0 ? placeholder
    : value.length === 1 ? value[0]
    : `${value[0]} +${value.length - 1}`;

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex w-full items-center gap-2 rounded-full border bg-[#fafaf7] py-2.5 pl-4 pr-3 text-[13px] text-left outline-none transition-all",
          open && "border-[#ffd239]/60 bg-white ring-2 ring-[#ffd239]/16",
          error ? "border-red-300"
          : value.length > 0 && !open ? "border-[#ffd239]/60 bg-white font-medium text-brand-charcoal"
          : "border-black/[0.09] text-black/28 hover:border-black/16",
        )}
      >
        <span className="flex-1 truncate">{label}</span>
        <ChevronDown className={cn("h-3.5 w-3.5 shrink-0 text-black/22 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="absolute z-50 mt-1.5 w-full overflow-hidden rounded-[16px] border border-black/[0.08] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
          <div className="max-h-[220px] overflow-y-auto p-1.5">
            {options.map((opt) => {
              const selected = value.includes(opt);
              return (
                <button
                  type="button"
                  key={opt}
                  onClick={() => toggle(opt)}
                  className="flex w-full items-center gap-2.5 rounded-[10px] px-3 py-2.5 text-[12px] text-left outline-none transition hover:bg-[#fafaf7]"
                >
                  <span className={cn(
                    "flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 transition",
                    selected ? "border-brand-yellow bg-brand-yellow" : "border-black/18",
                  )}>
                    {selected && <Check className="h-2.5 w-2.5 text-[#1a1000]" />}
                  </span>
                  <span className={cn("transition", selected ? "font-semibold text-brand-charcoal" : "text-black/54")}>
                    {opt}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── types ─── */
type Prefill = { line?: string; group?: string; item?: string; message?: string };

/* ─── main component ─── */
export function ContactForm({ prefill }: { prefill?: Prefill }) {
  const [submitted, setSubmitted] = useState(false);
  const [waUrl, setWaUrl]         = useState("");
  const [obrasSelected, setObrasSelected] = useState<string[]>([]);

  const lineFromQuery  = prefill?.line    ?? "";
  const groupFromQuery = prefill?.group   ?? "";
  const itemFromQuery  = prefill?.item    ?? "";
  const msgFromQuery   = prefill?.message ?? "";

  const { register, setValue, watch, handleSubmit, reset,
    formState: { errors } } =
    useForm<ContactSubmissionInput, unknown, ContactSubmission>({
      resolver: zodResolver(contactSubmissionSchema),
      defaultValues: {
        name: "", email: "", phone: "", company: "",
        interests: [], obra: "", zone: "", message: "",
        line: "", group: "", item: "",
      },
    });

  const interests = watch("interests") ?? [];

  /* sync prefill */
  useEffect(() => {
    setValue("line",  lineFromQuery);
    setValue("group", groupFromQuery);
    setValue("item",  itemFromQuery);
    if (lineFromQuery) setValue("interests", [lineFromQuery], { shouldValidate: true });
    if (msgFromQuery)  setValue("message",   msgFromQuery,   { shouldValidate: true });
  }, [lineFromQuery, groupFromQuery, itemFromQuery, msgFromQuery, setValue]);

  /* sync obra multi-select → hidden field */
  useEffect(() => {
    setValue("obra", obrasSelected.join(", "));
  }, [obrasSelected, setValue]);

  /* ── submit ── */
  const onSubmit = (values: ContactSubmission) => {
    // 1. Build URL and open WhatsApp immediately (synchronous — browsers won't block it)
    const url = buildWhatsappUrl(values);
    window.open(url, "_blank", "noopener,noreferrer");

    // 2. Show success banner and save URL for the "reopen" link
    setWaUrl(url);
    setSubmitted(true);

    // 3. Fire-and-forget to Google Sheets (doesn't block UX)
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    }).catch(() => { /* silent — WA already opened */ });

    // 4. Reset form
    setObrasSelected([]);
    reset({
      name: "", email: "", phone: "", company: "",
      interests: lineFromQuery ? [lineFromQuery] : [],
      obra: "", zone: "", message: msgFromQuery,
      line: lineFromQuery, group: groupFromQuery, item: itemFromQuery,
    });
  };

  return (
    <div id="contacto" className="mx-auto w-full max-w-2xl">
      <div className="overflow-hidden rounded-[24px] border border-black/[0.07] bg-white shadow-[0_8px_40px_rgba(0,0,0,0.07)]">
        <div className="h-[3px] bg-brand-yellow" />

        {/* success banner */}
        {submitted && (
          <div className="flex items-start gap-3 border-b border-[#ffd239]/20 bg-[rgba(255,210,57,0.07)] px-5 py-4">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-charcoal" />
            <div className="flex-1">
              <p className="text-[12px] font-semibold text-brand-charcoal">
                Consulta enviada — te respondemos en menos de 24 hs.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-semibold text-brand-charcoal underline underline-offset-2 transition hover:opacity-70"
              >
                Abrir WhatsApp de nuevo <ArrowRight className="h-3 w-3" />
              </a>
            </div>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="mt-0.5 text-black/30 transition hover:text-brand-charcoal"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* prefill badge */}
        {(lineFromQuery || itemFromQuery || groupFromQuery) && (
          <div className="border-b border-black/[0.05] bg-[rgba(255,247,210,0.5)] px-5 py-2.5">
            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-black/36">Consulta preseleccionada</p>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {lineFromQuery && (
                <span className="rounded-full bg-brand-charcoal px-3 py-0.5 text-[10px] font-semibold text-white">{lineFromQuery}</span>
              )}
              {(itemFromQuery || groupFromQuery) && (
                <span className="rounded-full border border-black/10 px-3 py-0.5 text-[10px] font-semibold text-black/44">
                  {itemFromQuery || groupFromQuery}
                </span>
              )}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-7 px-5 py-6 sm:px-7">
          <input type="hidden" {...register("line")} />
          <input type="hidden" {...register("group")} />
          <input type="hidden" {...register("item")} />

          {/* 01 consulta */}
          <section>
            <SectionHeader num="01" label="Consulta" />
            <div className="space-y-2.5">
              <MultiSelect
                placeholder="Linea de interes *"
                value={interests}
                onChange={(v) => setValue("interests", v, { shouldValidate: true })}
                options={contactInterestOptions}
                error={!!errors.interests}
              />
              {errors.interests && (
                <p className="pl-4 text-[10px] text-red-500">{errors.interests.message}</p>
              )}
              <MultiSelect
                placeholder="Tipo de obra"
                value={obrasSelected}
                onChange={setObrasSelected}
                options={contactObraOptions}
              />
            </div>
          </section>

          {/* 02 datos */}
          <section>
            <SectionHeader num="02" label="Tus datos" />
            <div className="space-y-2.5">
              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <PillInput icon={User} placeholder="Tu nombre *" error={!!errors.name} {...register("name")} />
                  {errors.name && <p className="mt-0.5 pl-4 text-[10px] text-red-500">{errors.name.message}</p>}
                </div>
                <PillInput icon={Phone} placeholder="Telefono" type="tel" {...register("phone")} />
              </div>
              <div>
                <PillInput icon={Mail} placeholder="Email *" type="email" error={!!errors.email} {...register("email")} />
                {errors.email && <p className="mt-0.5 pl-4 text-[10px] text-red-500">{errors.email.message}</p>}
              </div>
              <div>
                <PillInput icon={Building2} placeholder="Empresa o rubro *" error={!!errors.company} {...register("company")} />
                {errors.company && <p className="mt-0.5 pl-4 text-[10px] text-red-500">{errors.company.message}</p>}
              </div>
            </div>
          </section>

          {/* 03 proyecto */}
          <section>
            <SectionHeader num="03" label="Tu proyecto" />
            <div className="space-y-2.5">
              <PillInput icon={MapPin} placeholder="Zona de entrega (Neuquen, Zapala...)" {...register("zone")} />
              <div>
                <PillTextarea
                  icon={MessageSquare}
                  placeholder="Contanos el tipo de obra, volumen estimado, fecha de inicio..."
                  rows={3}
                  error={!!errors.message}
                  {...register("message")}
                />
                {errors.message && <p className="mt-0.5 pl-4 text-[10px] text-red-500">{errors.message.message}</p>}
              </div>
            </div>
          </section>

          {/* submit */}
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-yellow py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#1a1000] shadow-[0_4px_20px_rgba(255,210,57,0.30)] transition hover:-translate-y-0.5 hover:brightness-95"
          >
            Enviar consulta
            <ArrowRight className="h-4 w-4" />
          </button>

          <p className="text-center text-[9px] text-black/22">* Campos requeridos</p>
        </form>
      </div>
    </div>
  );
}
