import Image from "next/image";
import { ArrowRight, Building2, Mail, MapPin, Phone } from "lucide-react";

const nav = [
  { label: "Inicio", href: "/#top" },
  { label: "Empresa", href: "/#empresa" },
  { label: "Verticales", href: "/#verticales" },
  { label: "Productos", href: "/#productos" },
  { label: "Referencias", href: "/#referencias" },
  { label: "Servicios", href: "/servicios" },
  { label: "Catalogo", href: "/catalogo" },
  { label: "Contacto", href: "/contacto" },
];

const verticals = [
  { label: "Energia", href: "/#verticales" },
  { label: "Oil & Gas", href: "/#verticales" },
  { label: "Vialidad", href: "/#verticales" },
  { label: "Especiales", href: "/#verticales" },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#111009" }}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-end justify-center overflow-hidden select-none"
      >
        <span
          className="font-display font-bold uppercase"
          style={{
            fontSize: "clamp(8rem, 22vw, 22rem)",
            color: "rgba(255,255,255,0.04)",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            marginBottom: "-0.12em",
          }}
        >
          CIMALCO
        </span>
      </div>

      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #fffdf0 0%, #fff8d6 50%, #fef3b8 100%)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent 0px, transparent 18px, rgba(0,0,0,0.018) 18px, rgba(0,0,0,0.018) 19px), linear-gradient(135deg, #fffdf0 0%, #fff8d6 50%, #fef3b8 100%)",
        }}
      >
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-5 px-5 py-9 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10 lg:py-10">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/36">
              Patagonia norte | Desde 1947
            </p>
            <p className="mt-1.5 font-display text-[clamp(1.4rem,2.2vw,2rem)] uppercase leading-tight tracking-[0.03em] text-brand-charcoal">
              Fabricamos lo que tu obra necesita.
            </p>
            <p className="mt-2 text-sm leading-6 text-black/46">
              Consultanos por producto, volumen y zona. Te respondemos desde fabrica.
            </p>
          </div>
          <a
            href="/contacto"
            className="inline-flex flex-shrink-0 items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand-charcoal shadow-[0_8px_20px_rgba(0,0,0,0.10)] transition hover:-translate-y-0.5 hover:bg-[#fffdf0]"
          >
            Consultanos
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[1600px] px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_2fr_1.4fr]">
          <div className="flex flex-col gap-8">
            <div>
              <div className="relative h-11 w-[190px]">
                <Image
                  src="/posibles-utilidades/Logotipo principal 2.png"
                  alt="Cimalco Patagonia"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="mt-5 text-sm leading-7 text-white/55">
                Premoldeados y pretensados de hormigon para infraestructura, energia,
                Oil & Gas, vial y proyectos especiales en Patagonia norte. Desde 1947.
              </p>
            </div>

            <div className="space-y-3.5">
              <div className="flex items-center gap-3 text-sm text-white/62">
                <Phone className="h-4 w-4 flex-shrink-0 text-brand-yellow/70" />
                0299 4422656 / 299 4361973
              </div>
              <a
                href="mailto:consultas@cimalconeuquen.com.ar"
                className="group flex items-start gap-3 text-sm text-white/62 transition hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-yellow/70 transition group-hover:text-brand-yellow" />
                consultas@cimalconeuquen.com.ar
              </a>
              <div className="flex items-center gap-3 text-sm text-white/62">
                <Building2 className="h-4 w-4 flex-shrink-0 text-brand-yellow/70" />
                Cimalco Neuquen S.A.
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div
              className="overflow-hidden rounded-2xl"
              style={{ border: "1px solid rgba(255,255,255,0.10)", minHeight: 280 }}
            >
              <iframe
                title="Ubicacion Cimalco Neuquen S.A."
                src="https://maps.google.com/maps?q=Cimalco+Neuquen+S.A.&t=m&z=15&output=embed&iwloc=near"
                width="100%"
                height="280"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex items-start gap-2 text-sm text-white/40">
              <MapPin className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-white/26" />
              ENET n. 1 2089, Esq. Ing. Huergo - Parque Industrial Neuquen Oeste, 8300
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:grid-cols-1 lg:gap-10">
            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.28em] text-white/34">
                Verticales
              </p>
              <div className="space-y-3">
                {verticals.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
                  >
                    <span className="h-px w-0 flex-shrink-0 rounded-full bg-brand-yellow transition-all duration-300 group-hover:w-4" />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.28em] text-white/34">
                Navegacion
              </p>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
                  >
                    <span className="h-px w-0 flex-shrink-0 rounded-full bg-brand-yellow transition-all duration-300 group-hover:w-4" />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-1 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p className="text-xs text-white/36">
            (c) {new Date().getFullYear()} Cimalco Neuquen S.A. - Todos los derechos reservados.
          </p>
          <div className="flex flex-col items-start gap-1 sm:items-end">
            <p className="text-xs text-white/22">
              Parque Industrial Neuquen Oeste, Argentina.
            </p>
            <a
              href="https://instagram.com/dallapesystems/"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-white/32 transition hover:text-white/60"
            >
              Disenada por dallapesystems
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
