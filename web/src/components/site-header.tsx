"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavChild = {
  label: string;
  href: string;
  description?: string;
  groupLabel?: string;
};

type NavItem =
  | { label: string; href: string; children?: undefined }
  | { label: string; href?: string; children: NavChild[] };

const navigation: NavItem[] = [
  {
    label: "Empresa",
    children: [
      {
        label: "Por que Cimalco",
        href: "/#empresa",
        description: "Logistica directa, calidad certificada y respuesta rapida.",
      },
      {
        label: "Verticales",
        href: "/#verticales",
        description: "Energia, Oil & Gas, vialidad y piezas especiales.",
      },
      {
        label: "Productos",
        href: "/#productos",
        description: "Bloques, adoquines, postes y soluciones complementarias.",
      },
      {
        label: "Clientes y referencias",
        href: "/#referencias",
        description: "Obra publica y privada en toda la region.",
      },
    ],
  },
  {
    label: "Servicios",
    href: "/servicios",
    children: [
      {
        label: "Montaje de premoldeados",
        href: "/servicios#montaje",
        description: "Proyectos industriales e infraestructura de gran escala.",
      },
      {
        label: "Colocacion de adoquines",
        href: "/servicios#adoquines",
        description: "Zonas de alto transito y urbanismo funcional.",
      },
      {
        label: "Construccion de cercos",
        href: "/servicios#cercos",
        description: "Seguridad para industrias y residencias.",
      },
    ],
  },
  {
    label: "Catalogo",
    href: "/catalogo",
    children: [
      {
        groupLabel: "Premoldeados industrializados",
        label: "Bloquera y pavimentos",
        href: "/catalogo#industrializados",
        description: "Bloques y adoquines de produccion estandarizada.",
      },
      {
        label: "Revestimientos",
        href: "/catalogo#industrializados",
        description: "Canales aluvionales y obras hidraulicas.",
      },
      {
        groupLabel: "Otras lineas",
        label: "Pretensados",
        href: "/catalogo#pretensados",
        description: "Columnas para tendidos electricos.",
      },
      {
        label: "Premoldeados",
        href: "/catalogo#premoldeados",
        description: "Bases, bodegas y camaras tipicas.",
      },
    ],
  },
  { label: "Contacto", href: "/contacto" },
];

function isActiveLink(pathname: string, href: string) {
  if (href.startsWith("/#")) return pathname === "/";
  if (href.startsWith("/catalogo")) return pathname.startsWith("/catalogo");
  if (href.startsWith("/servicios")) return pathname.startsWith("/servicios");
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50">
      <div
        className="w-full border-b border-black/[0.06]"
        style={{
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: "0 1px 0 rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)",
        }}
      >
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-6 px-5 py-0 sm:px-8 lg:px-10">
          <a href="/" aria-label="Ir al inicio" className="flex-shrink-0 py-3">
            <div className="relative h-9 w-[160px] sm:h-10 sm:w-[176px]">
              <Image
                src="/posibles-utilidades/Logotipo principal 4.png"
                alt="Cimalco Patagonia"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => {
              if (item.children) {
                const isOpen = openMenu === item.label;
                const isActive = item.href
                  ? isActiveLink(pathname, item.href)
                  : pathname === "/";

                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(item.label)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <a
                      href={item.href ?? "/"}
                      onClick={() => setOpenMenu(null)}
                      className={[
                        "group relative inline-flex items-center gap-1 px-4 py-5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-150",
                        isActive || isOpen
                          ? "text-brand-charcoal"
                          : "text-black/44 hover:text-brand-charcoal",
                      ].join(" ")}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-3 w-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                      <span
                        className={[
                          "absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-brand-yellow transition-all duration-200",
                          isActive || isOpen
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-40",
                        ].join(" ")}
                      />
                    </a>

                    <div
                      className={`absolute left-1/2 top-full w-[320px] -translate-x-1/2 pt-2 transition-all duration-200 ${
                        isOpen
                          ? "pointer-events-auto translate-y-0 opacity-100"
                          : "pointer-events-none translate-y-2 opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden rounded-[18px] border border-black/[0.07] bg-white p-1.5 shadow-[0_16px_48px_rgba(0,0,0,0.14)]">
                        {item.children.map((child, idx) => {
                          const showGroup = child.groupLabel !== undefined;
                          return (
                            <div key={`${child.href}-${child.label}`}>
                              {showGroup && (
                                <div
                                  className={`px-3 pb-1 ${idx > 0 ? "mt-1 border-t border-black/[0.06] pt-3" : "pt-2"}`}
                                >
                                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-black/26">
                                    {child.groupLabel}
                                  </p>
                                </div>
                              )}
                              <a
                                href={child.href}
                                className="group flex items-start gap-3 rounded-[12px] px-3 py-2.5 transition hover:bg-black/[0.03]"
                                onClick={() => setOpenMenu(null)}
                              >
                                <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-yellow/60 transition group-hover:bg-brand-yellow" />
                                <div>
                                  <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-charcoal">
                                    {child.label}
                                  </span>
                                  {child.description && (
                                    <span className="mt-0.5 block text-[11px] leading-5 text-black/40">
                                      {child.description}
                                    </span>
                                  )}
                                </div>
                              </a>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              const active = isActiveLink(pathname, item.href);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={[
                    "group relative inline-flex items-center px-4 py-5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors duration-150",
                    active
                      ? "text-brand-charcoal"
                      : "text-black/44 hover:text-brand-charcoal",
                  ].join(" ")}
                >
                  {item.label}
                  <span
                    className={[
                      "absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-brand-yellow transition-all duration-200",
                      active ? "opacity-100" : "opacity-0 group-hover:opacity-40",
                    ].join(" ")}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/contacto"
              className="hidden items-center gap-2 rounded-full bg-brand-yellow px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1a1000] shadow-[0_4px_14px_rgba(255,210,57,0.32)] transition hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(255,210,57,0.4)] lg:inline-flex"
            >
              Contactanos
            </a>

            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-brand-charcoal shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition hover:border-black/18 lg:hidden"
                  aria-label="Abrir menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm" />
                <Dialog.Content className="fixed inset-x-3 top-3 z-50 rounded-[24px] border border-black/8 bg-white shadow-[0_24px_60px_rgba(0,0,0,0.16)] sm:left-auto sm:right-5 sm:top-4 sm:w-[320px]">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="relative h-7 w-[130px]">
                        <Image
                          src="/posibles-utilidades/Logotipo principal 4.png"
                          alt="Cimalco Patagonia"
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                      <Dialog.Close asChild>
                        <button
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-black/50 transition hover:text-brand-charcoal"
                          aria-label="Cerrar menu"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </Dialog.Close>
                    </div>

                    <nav className="space-y-1">
                      {[
                        { label: "Empresa", href: "/" },
                        { label: "Servicios", href: "/servicios" },
                        { label: "Catalogo", href: "/catalogo" },
                        { label: "Contacto", href: "/contacto" },
                      ].map((item) => {
                        const active = isActiveLink(pathname, item.href);
                        return (
                          <Dialog.Close asChild key={item.href}>
                            <a
                              href={item.href}
                              className={`flex items-center justify-between rounded-[14px] px-4 py-3.5 text-[13px] font-semibold uppercase tracking-[0.14em] transition ${
                                active
                                  ? "bg-brand-yellow text-[#1a1000]"
                                  : "text-brand-charcoal hover:bg-black/[0.04]"
                              }`}
                            >
                              {item.label}
                              <span className="text-[11px] opacity-40">{"->"}</span>
                            </a>
                          </Dialog.Close>
                        );
                      })}
                    </nav>

                    <Dialog.Close asChild>
                      <a
                        href="/contacto"
                        className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-brand-yellow py-3.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#1a1000] shadow-[0_4px_14px_rgba(255,210,57,0.32)] transition hover:brightness-95"
                      >
                        Contactanos
                      </a>
                    </Dialog.Close>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </div>
    </header>
  );
}
