import Image from "next/image";
import { Download, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const nav = [
  { label: "Empresa", href: "/#empresa" },
  { label: "Verticales", href: "/#verticales" },
  { label: "Servicios", href: "/servicios" },
  { label: "Catalogo", href: "/catalogo" },
  { label: "Contacto", href: "/contacto" },
];

const verticals = [
  "Energia",
  "Oil & Gas",
  "Vial y urbanizacion",
  "Piezas especiales",
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#111009" }}>

      {/* CIMALCO watermark — blanco muy sutil */}
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

      {/* Yellow top accent */}
      <div className="relative h-[3px] w-full" style={{ background: "#ffd239" }} />

      {/* CTA band */}
      <div className="relative" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-5 px-5 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/36">
              Patagonia norte — desde 1947
            </p>
            <p className="mt-1 font-display text-[clamp(1.7rem,3vw,2.6rem)] uppercase leading-tight tracking-[0.04em] text-white">
              Fabricamos lo que tu obra necesita.
            </p>
          </div>
          <a
            href="/contacto"
            className="inline-flex w-fit flex-shrink-0 items-center gap-2.5 rounded-full bg-brand-yellow px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#1a1000] transition hover:bg-brand-yellow/90"
          >
            Contactanos
          </a>
        </div>
      </div>

      {/* Main: 3-col — info | mapa | links */}
      <div className="relative mx-auto w-full max-w-[1600px] px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_2fr_1.4fr]">

          {/* Left — brand + contacto */}
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
              <a
                href="https://cimalconeuquen.com.ar/archivos/cimalco-catalogo.pdf"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-yellow/70 transition hover:text-brand-yellow"
              >
                <Download className="h-3.5 w-3.5" />
                Descargar catalogo
              </a>
            </div>

            <div className="space-y-3.5">
              <a
                href="tel:+5429944361973"
                className="group flex items-center gap-3 text-sm text-white/62 transition hover:text-white"
              >
                <Phone className="h-4 w-4 flex-shrink-0 text-brand-yellow/70 transition group-hover:text-brand-yellow" />
                +54 299 436 1973
              </a>
              <a
                href="mailto:consultas@cimalconeuquen.com.ar"
                className="group flex items-start gap-3 text-sm text-white/62 transition hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-yellow/70 transition group-hover:text-brand-yellow" />
                consultas@cimalconeuquen.com.ar
              </a>
              <a
                href="https://wa.me/5492996109261"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 text-sm text-white/62 transition hover:text-white"
              >
                <MessageCircle className="h-4 w-4 flex-shrink-0" style={{ color: "#25d366" }} />
                +54 9 2996 109261
              </a>
            </div>
          </div>

          {/* Center — mapa */}
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
              ENET n°1 2089, Esq. Ing. Huergo — Parque Industrial Neuquen Oeste, 8300
            </div>
          </div>

          {/* Right — verticales + nav */}
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-1 lg:gap-10">
            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.28em] text-white/34">
                Verticales
              </p>
              <div className="space-y-3">
                {verticals.map((item) => (
                  <a
                    key={item}
                    href="#verticales"
                    className="group flex items-center gap-2 text-sm text-white/55 transition hover:text-white"
                  >
                    <span className="h-px w-0 flex-shrink-0 rounded-full bg-brand-yellow transition-all duration-300 group-hover:w-4" />
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.28em] text-white/34">
                Navegacion
              </p>
              <div className="space-y-3">
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

      {/* Bottom bar */}
      <div className="relative" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-1 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p className="text-xs text-white/36">
            © {new Date().getFullYear()} Cimalco Neuquen S.A. — Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/22">
            Parque Industrial Neuquen Oeste, Argentina.
          </p>
        </div>
      </div>
    </footer>
  );
}
