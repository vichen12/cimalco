import type { Metadata } from "next";
import { ArrowRight, Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contacto — Cimalco Patagonia",
  description:
    "Contactate con Cimalco Patagonia por premoldeados, postes pretensados y proyectos especiales. Neuquen, Patagonia Argentina.",
};

const contactItems = [
  {
    icon: Phone,
    label: "Telefono",
    value: "+54 299 436 1973",
    href: "tel:+5429944361973",
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
  },
  {
    icon: MapPin,
    label: "Planta",
    value: "ENET N 1 2089, Esq. Ing. Huergo, Parque Industrial Neuquen Oeste, 8300",
    href: "https://maps.google.com/maps?q=Cimalco+Neuquen+S.A.",
  },
];

const highlights = [
  {
    icon: Clock3,
    label: "Respuesta comercial",
    value: "Menos de 24 hs",
  },
  {
    icon: MessageCircle,
    label: "Canal directo",
    value: "WhatsApp y telefono",
  },
  {
    icon: MapPin,
    label: "Cobertura",
    value: "Patagonia norte",
  },
];

type ContactoPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function resolveSearchParam(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

export default async function ContactoPage({ searchParams }: ContactoPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const prefill = {
    line: resolveSearchParam(resolvedSearchParams.line),
    group: resolveSearchParam(resolvedSearchParams.group),
    item: resolveSearchParam(resolvedSearchParams.item),
    message: resolveSearchParam(resolvedSearchParams.message),
  };

  return (
    <div className="relative z-10" style={{ background: "#fffdf0", minHeight: "100vh" }}>
      <SiteHeader />

      <section
        className="relative overflow-hidden"
        style={{
          minHeight: "calc(74vh - 64px)",
          borderBottom: "3px solid #ffd239",
          backgroundImage: "url('/site-assets/premoldeados-de-hormigon.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.14)_0%,rgba(0,0,0,0.48)_42%,rgba(0,0,0,0.88)_100%)]" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-end justify-end overflow-hidden select-none">
          <span
            className="font-display font-bold uppercase"
            style={{
              fontSize: "clamp(5rem,14vw,14rem)",
              color: "rgba(255,255,255,0.05)",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              marginBottom: "-0.08em",
              marginRight: "-0.04em",
            }}
          >
            CONTACTO
          </span>
        </div>

        <div className="relative z-10 px-5 pb-14 pt-24 sm:px-8 lg:px-10 lg:pb-[4.5rem] lg:pt-28">
          <div className="mx-auto grid w-full max-w-[1600px] gap-8 xl:grid-cols-[1.08fr_0.92fr] xl:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">
                Contacto
              </p>
              <h1 className="mt-3 font-display text-[clamp(2.7rem,5vw,5.4rem)] uppercase leading-[0.92] tracking-[0.04em] text-white">
                Hablemos de
                <span className="block text-brand-yellow">tu proyecto.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/62 sm:text-base">
                Te atendemos desde fabrica, con respuesta comercial directa y soporte para obras de cualquier escala.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  href="https://wa.me/5492996109261"
                  target="_blank"
                  rel="noreferrer"
                  variant="accent"
                  className="gap-2 px-7 py-3.5 text-[11px] tracking-[0.22em]"
                >
                  Escribir por WhatsApp
                  <MessageCircle className="h-4 w-4" />
                </Button>
                <Button
                  href="https://maps.google.com/maps?q=Cimalco+Neuquen+S.A."
                  target="_blank"
                  rel="noreferrer"
                  variant="outline"
                  className="gap-2 border-white/20 px-7 py-3.5 text-[11px] tracking-[0.22em] text-white/72 hover:border-white/44 hover:text-white"
                >
                  Ver ubicacion
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
              {highlights.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-[24px] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm"
                >
                  <Icon className="h-4 w-4 text-brand-yellow" />
                  <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/36">
                    {label}
                  </p>
                  <p className="mt-1 text-sm text-white/84">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-[1600px] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="group rounded-[26px] border border-black/8 bg-white/84 p-5 shadow-[0_14px_36px_rgba(0,0,0,0.05)] transition hover:-translate-y-0.5 hover:border-black/14"
              >
                <Icon
                  className="h-4 w-4 transition"
                  style={{ color: item.color ?? "#ffd239" }}
                />
                <p className="mt-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-black/34">
                  {item.label}
                </p>
                <p className="text-sm leading-6 text-black/64 transition group-hover:text-brand-charcoal">
                  {item.value}
                </p>
              </a>
            );
          })}
        </section>

        <section className="mt-10">
          <ContactForm prefill={prefill} />
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden rounded-[30px] border border-black/8 bg-[#15120d] p-7 text-white shadow-[0_20px_52px_rgba(0,0,0,0.14)]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 14% 18%, rgba(255,210,57,0.18) 0%, transparent 28%), radial-gradient(circle at 86% 88%, rgba(255,255,255,0.05) 0%, transparent 22%)",
              }}
            />
            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/38">
                Planta y logistica
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.9rem,3vw,3rem)] uppercase leading-[0.94] tracking-[0.04em] text-white">
                Neuquen Oeste,
                <span className="block text-brand-yellow">respuesta desde fabrica.</span>
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-white/58">
                Coordinamos entregas, consultas y seguimiento comercial desde la planta para mantener una respuesta mas rapida y precisa.
              </p>

              <div className="mt-7 space-y-3 text-sm text-white/76">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-brand-yellow" />
                  <span>ENET N 1 2089, Esq. Ing. Huergo, Parque Industrial Neuquen Oeste, Neuquen.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock3 className="mt-1 h-4 w-4 flex-shrink-0 text-brand-yellow" />
                  <span>Atencion comercial de lunes a viernes, de 8 a 17 hs.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-4 w-4 flex-shrink-0 text-brand-yellow" />
                  <span>Coordina con el equipo para obras, catalogo, piezas especiales y disponibilidad.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-black/8 bg-white shadow-[0_16px_44px_rgba(0,0,0,0.08)]">
            <iframe
              title="Ubicacion Cimalco Neuquen S.A."
              src="https://maps.google.com/maps?q=Cimalco+Neuquen+S.A.&t=m&z=15&output=embed&iwloc=near"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: 420 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
