"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

// ── Estructura del menú ──────────────────────────────────────
type NavChild = { label: string; href: string; description?: string };
type NavItem =
  | { label: string; href: string; children?: undefined }
  | { label: string; href?: undefined; children: NavChild[] };

const navigation: NavItem[] = [
  {
    label: "Empresa",
    children: [
      { label: "Por qué Cimalco", href: "/#empresa", description: "Logistica directa, respuesta rapida y calidad certificada." },
      { label: "Verticales", href: "/#verticales", description: "Energia, Oil & Gas, Vial y Piezas especiales." },
      { label: "Productos", href: "/#productos", description: "Bloques, adoquines, postes y piezas especiales." },
      { label: "Clientes y referencias", href: "/#referencias", description: "Presencia en obra publica y privada en toda la region." },
    ],
  },
  { label: "Servicios", href: "/servicios" },
  { label: "Catalogo", href: "/catalogo" },
  { label: "Contacto", href: "/contacto" },
];

// ── Componente ───────────────────────────────────────────────
export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-xl"
      style={{
        background: "linear-gradient(to right, #ffffff 0%, #fffef5 40%, rgba(255,237,140,0.35) 100%)",
        borderBottom: "1px solid rgba(255,210,57,0.20)",
        boxShadow: "0 1px 20px rgba(255,210,57,0.08), 0 1px 4px rgba(0,0,0,0.04)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-8 px-5 py-3.5 sm:px-8 lg:px-10">

        {/* Logo */}
        <a href="/" aria-label="Ir al inicio" className="flex-shrink-0">
          <div className="relative h-10 w-[155px] sm:h-11 sm:w-[175px]">
            <Image
              src="/posibles-utilidades/Logotipo principal 4.png"
              alt="Cimalco Patagonia"
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </a>

        {/* Desktop nav con dropdowns */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {navigation.map((item) => {
            if (item.children) {
              const isOpen = openMenu === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  {/* Header del dropdown — también navega */}
                  <a
                    href={item.children[0]?.href ?? "/"}
                    className="flex items-center gap-1 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors"
                    style={{ color: isOpen ? "#8a6000" : "rgba(30,24,8,0.65)" }}
                    onClick={() => setOpenMenu(null)}
                  >
                    {item.label}
                    <ChevronDown
                      className="h-3 w-3 transition-transform duration-200"
                      style={{ transform: isOpen ? "rotate(-180deg)" : "rotate(0)" }}
                    />
                  </a>

                  {/* Dropdown panel — sin gap para que el mouse no pierda el hover */}
                  {isOpen && (
                    <div
                      className="absolute left-0 top-full min-w-[260px] overflow-hidden rounded-2xl py-2 shadow-xl"
                      style={{
                        background: "linear-gradient(135deg, #ffffff 0%, #fffef5 100%)",
                        border: "1px solid rgba(180,140,0,0.15)",
                        boxShadow: "0 12px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(255,210,57,0.08)",
                      }}
                    >
                      {item.children.map((child, idx) => (
                        <a
                          key={`${child.label}-${idx}`}
                          href={child.href}
                          onClick={() => setOpenMenu(null)}
                          className="group flex flex-col gap-0.5 px-5 py-3.5 transition-colors"
                          style={{ color: "rgba(30,24,8,0.75)" }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "rgba(255,210,57,0.08)";
                            e.currentTarget.style.color = "#7a5500";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "transparent";
                            e.currentTarget.style.color = "rgba(30,24,8,0.75)";
                          }}
                        >
                          <span className="text-[11px] font-bold uppercase tracking-[0.18em]">
                            {child.label}
                          </span>
                          {child.description && (
                            <span className="text-[10px] leading-[1.4]" style={{ color: "rgba(30,24,8,0.42)" }}>
                              {child.description}
                            </span>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            // Link simple
            return (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] transition-colors"
                style={{ color: "rgba(30,24,8,0.65)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#8a6000"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(30,24,8,0.65)"; }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* CTA button */}
        <a
          href="/contacto"
          className="hidden items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.22em] transition lg:inline-flex"
          style={{
            background: "#1e1808",
            color: "#ffd239",
            boxShadow: "0 2px 12px rgba(0,0,0,0.18)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#2d2510"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#1e1808"; }}
        >
          Contactanos
        </a>

        {/* Mobile menu */}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full transition lg:hidden"
              style={{ border: "1px solid rgba(0,0,0,0.15)", color: "rgba(30,24,8,0.65)" }}
              aria-label="Abrir menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm" />
            <Dialog.Content
              className="fixed inset-x-4 top-4 z-50 overflow-hidden rounded-3xl shadow-2xl sm:inset-x-auto sm:right-4 sm:w-[360px]"
              style={{
                background: "linear-gradient(135deg, #ffffff 0%, #fffce8 100%)",
                border: "1px solid rgba(180,140,0,0.18)",
              }}
            >
              <div className="p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div className="relative h-7 w-[130px]">
                    <Image
                      src="/posibles-utilidades/Logotipo principal 4.png"
                      alt="Cimalco"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <Dialog.Close asChild>
                    <button
                      className="rounded-full p-2 transition"
                      style={{ border: "1px solid rgba(0,0,0,0.12)", color: "rgba(30,24,8,0.50)" }}
                      aria-label="Cerrar"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </Dialog.Close>
                </div>

                {/* Mobile nav — expandible */}
                <nav className="space-y-1">
                  {navigation.map((item) => {
                    if (item.children) {
                      return (
                        <div key={item.label}>
                          <p
                            className="px-3 pb-1 pt-3 text-[9px] font-bold uppercase tracking-[0.28em]"
                            style={{ color: "rgba(30,24,8,0.38)" }}
                          >
                            {item.label}
                          </p>
                          {item.children.map((child) => (
                            <Dialog.Close asChild key={child.href + child.label}>
                              <a
                                href={child.href}
                                className="flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition"
                                style={{ color: "rgba(30,24,8,0.70)" }}
                              >
                                <span
                                  className="h-1 w-1 flex-shrink-0 rounded-full"
                                  style={{ background: "#ffd239" }}
                                />
                                {child.label}
                              </a>
                            </Dialog.Close>
                          ))}
                        </div>
                      );
                    }
                    return (
                      <Dialog.Close asChild key={item.href}>
                        <a
                          href={item.href}
                          className="flex items-center rounded-xl px-3 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] transition"
                          style={{ color: "rgba(30,24,8,0.70)" }}
                        >
                          {item.label}
                        </a>
                      </Dialog.Close>
                    );
                  })}
                </nav>

                <div className="mt-6">
                  <Dialog.Close asChild>
                    <a
                      href="/contacto"
                      className="block rounded-full px-5 py-3 text-center text-[11px] font-bold uppercase tracking-[0.22em] transition"
                      style={{ background: "#1e1808", color: "#ffd239" }}
                    >
                      Contactanos
                    </a>
                  </Dialog.Close>
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
