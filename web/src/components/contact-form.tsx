"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Escribi tu nombre"),
  company: z.string().min(2, "Escribi tu empresa o rubro"),
  interest: z.string().min(1, "Selecciona una linea"),
  message: z.string().min(12, "Contanos un poco mas"),
});

type FormValues = z.infer<typeof formSchema>;

const interests = ["Adoquines", "Bloques", "Energia", "Oil & Gas", "Piezas especiales"];

const directContacts = [
  {
    icon: Phone,
    label: "Llamanos",
    value: "+54 299 436 1973",
    href: "tel:+5429944361973",
    color: "#ffd239",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+54 9 2996 109261",
    href: "https://wa.me/5492996109261",
    color: "#25d366",
  },
  {
    icon: Mail,
    label: "Email",
    value: "consultas@cimalconeuquen.com.ar",
    href: "mailto:consultas@cimalconeuquen.com.ar",
    color: "#ffd239",
  },
];

const quickFacts = [
  {
    icon: Clock3,
    label: "Respuesta comercial",
    value: "Menos de 24 hs",
  },
  {
    icon: MapPin,
    label: "Planta",
    value: "Neuquen Oeste",
  },
  {
    icon: MessageCircle,
    label: "Canal directo",
    value: "WhatsApp activo",
  },
];

const inputClassName =
  "w-full rounded-[22px] border border-black/10 bg-white px-5 py-4 text-sm text-[#2d2d2d] shadow-[0_10px_24px_rgba(0,0,0,0.04)] transition placeholder:text-black/32 focus:border-[#ffd239] focus:outline-none focus:ring-4 focus:ring-[#ffd239]/20";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", company: "", interest: "", message: "" },
  });

  const selectedInterest = watch("interest");

  const onSubmit = async (values: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.info("Lead Cimalco", values);
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <section
        id="contacto"
        className="relative overflow-hidden rounded-[32px] border border-black/8 bg-white/88 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl"
      >
        <div className="absolute inset-x-0 top-0 h-[4px] bg-brand-yellow" />
        <div className="flex min-h-[360px] items-center justify-center px-5 py-16 text-center sm:px-8">
          <div className="max-w-xl">
            <div
              className="mx-auto mb-6 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full"
              style={{ background: "rgba(255,210,57,0.18)", border: "1px solid rgba(255,210,57,0.35)" }}
            >
              <CheckCircle2 className="h-8 w-8 text-brand-charcoal" />
            </div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/38">
              Consulta recibida
            </p>
            <h3 className="mt-3 font-display text-[clamp(2rem,4vw,3.4rem)] uppercase leading-[0.92] tracking-[0.04em] text-brand-charcoal">
              Te respondemos
              <span className="block text-brand-yellow">a la brevedad.</span>
            </h3>
            <p className="mt-4 text-sm leading-7 text-black/52 sm:text-base">
              El mensaje ya llego al equipo comercial de Cimalco. Si queres, podes enviar otra consulta.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-charcoal transition hover:border-brand-yellow"
            >
              Nueva consulta
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contacto"
      className="relative overflow-hidden rounded-[32px] border border-black/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(247,243,234,0.94)_100%)] shadow-[0_24px_64px_rgba(0,0,0,0.08)] backdrop-blur-xl"
    >
      <div className="absolute inset-x-0 top-0 h-[4px] bg-brand-yellow" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 12% 16%, rgba(255,210,57,0.14) 0%, transparent 28%), radial-gradient(circle at 88% 22%, rgba(45,45,45,0.06) 0%, transparent 24%)",
        }}
      />

      <div className="relative grid gap-6 p-5 sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:p-10">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-black/40">
            Contacto comercial
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.2rem,4vw,4rem)] uppercase leading-[0.9] tracking-[0.04em] text-brand-charcoal">
            Contanos que necesita
            <span className="block text-brand-yellow">tu obra.</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-black/54 sm:text-base">
            Compartinos el tipo de proyecto, la escala y la linea de interes.
            Armamos una respuesta clara, directa y desde fabrica.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-[10px] font-bold uppercase tracking-[0.24em] text-black/38"
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
                {errors.name ? <p className="text-[11px] text-red-500">{errors.name.message}</p> : null}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="block text-[10px] font-bold uppercase tracking-[0.24em] text-black/38"
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
                {errors.company ? <p className="text-[11px] text-red-500">{errors.company.message}</p> : null}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-black/38">
                Linea de interes
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setValue("interest", item, { shouldValidate: true })}
                    className={cn(
                      "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-150",
                      selectedInterest === item
                        ? "border-brand-yellow bg-brand-yellow text-[#1a1000]"
                        : "border-black/10 bg-white text-black/56 hover:border-black/20 hover:text-brand-charcoal",
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
              {errors.interest ? <p className="text-[11px] text-red-500">{errors.interest.message}</p> : null}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-[10px] font-bold uppercase tracking-[0.24em] text-black/38"
              >
                Tu proyecto
              </label>
              <textarea
                id="message"
                rows={6}
                className={cn(inputClassName, "resize-none")}
                placeholder="Tipo de obra, volumen estimado, producto de interes, zona de entrega..."
                {...register("message")}
              />
              {errors.message ? <p className="text-[11px] text-red-500">{errors.message.message}</p> : null}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-sm text-xs leading-6 text-black/42">
                El mensaje llega directo al equipo comercial y tecnico de Cimalco Patagonia.
              </p>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-yellow px-8 py-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[#1a1000] transition hover:brightness-95 disabled:opacity-60"
              >
                {isSubmitting ? "Enviando..." : "Enviar consulta"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>

        <aside className="relative overflow-hidden rounded-[30px] bg-[#15120d] p-6 text-white shadow-[0_18px_48px_rgba(0,0,0,0.18)] sm:p-7">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 18% 14%, rgba(255,210,57,0.16) 0%, transparent 28%), radial-gradient(circle at 88% 92%, rgba(255,255,255,0.06) 0%, transparent 24%)",
            }}
          />

          <div className="relative z-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/42">
              Canales directos
            </p>
            <h3 className="mt-3 font-display text-[clamp(1.9rem,3vw,2.8rem)] uppercase leading-[0.94] tracking-[0.04em] text-white">
              Preferis hablar
              <span className="block text-brand-yellow">primero?</span>
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/56">
              Si ya tenes claro lo que necesitas, podes escribirnos o llamarnos directamente.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {quickFacts.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-4"
                >
                  <Icon className="h-4 w-4 text-brand-yellow" />
                  <p className="mt-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/34">
                    {label}
                  </p>
                  <p className="mt-1 text-sm text-white/82">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-7 space-y-3">
              {directContacts.map(({ icon: Icon, label, value, href, color }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-[20px] border border-white/10 bg-white/[0.04] px-4 py-4 transition hover:border-white/18 hover:bg-white/[0.07]"
                >
                  <div
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl"
                    style={{ background: `${color}18`, border: `1px solid ${color}26` }}
                  >
                    <Icon className="h-4.5 w-4.5" style={{ color, width: 18, height: 18 }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/34">
                      {label}
                    </p>
                    <p className="truncate text-sm font-medium text-white/88">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-7 rounded-[22px] border border-white/10 bg-black/18 px-4 py-4">
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/34">
                Planta y atencion
              </p>
              <p className="mt-2 text-sm leading-7 text-white/62">
                Parque Industrial Neuquen Oeste, Argentina. Atendemos lun-vie de 8 a 17 hs.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
