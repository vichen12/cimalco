"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

type NavChild = { label: string; href: string; description?: string };
type NavItem =
  | { label: string; href: string; children?: undefined }
  | { label: string; href?: undefined; children: NavChild[] };

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
  { label: "Servicios", href: "/servicios" },
  { label: "Catalogo", href: "/catalogo" },
  { label: "Contacto", href: "/contacto" },
];

function isActiveLink(pathname: string, href: string) {
  if (href.startsWith("/#")) return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function linkClasses(active: boolean) {
  return [
    "inline-flex items-center gap-1 border-b-2 border-transparent px-1 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-200",
    active
      ? "border-[#ead585] text-[#201708]"
      : "text-black/58 hover:border-[#ead585]/55 hover:text-brand-charcoal",
  ].join(" ");
}

export function SiteHeader() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50">
      <div
        className="w-full border-b border-black/8 shadow-[0_10px_28px_rgba(0,0,0,0.05)] backdrop-blur-xl"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.97) 0%, rgba(255,250,235,0.98) 44%, rgba(255,242,196,0.96) 100%)",
        }}
      >
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:grid lg:grid-cols-[auto_1fr_auto] lg:px-8">
          <a href="/" aria-label="Ir al inicio" className="min-w-0 flex-shrink-0">
            <div className="relative h-10 w-[160px] sm:h-11 sm:w-[182px]">
              <Image
                src="/posibles-utilidades/Logotipo principal 4.png"
                alt="Cimalco Patagonia"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </a>

          <nav className="hidden items-center justify-center lg:flex">
            <div className="flex items-center gap-6">
              {navigation.map((item) => {
                if (item.children) {
                  const isOpen = openMenu === item.label;
                  const isActive = pathname === "/";

                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setOpenMenu(item.label)}
                      onMouseLeave={() => setOpenMenu(null)}
                    >
                      <a
                        href="/"
                        className={linkClasses(isActive || isOpen)}
                        onClick={() => setOpenMenu(null)}
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </a>

                      <div
                        className={`absolute left-1/2 top-full w-[320px] -translate-x-1/2 pt-3 transition-all duration-200 ${
                          isOpen
                            ? "pointer-events-auto translate-y-0 opacity-100"
                            : "pointer-events-none translate-y-2 opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden rounded-[18px] border border-black/8 bg-[rgba(255,255,255,0.97)] p-2 shadow-[0_24px_50px_rgba(0,0,0,0.12)] backdrop-blur-xl">
                          {item.children.map((child) => (
                            <a
                              key={child.href}
                              href={child.href}
                              className="block rounded-[14px] px-4 py-3 transition hover:bg-brand-yellow/12"
                              onClick={() => setOpenMenu(null)}
                            >
                              <span className="block text-[11px] font-bold uppercase tracking-[0.18em] text-brand-charcoal">
                                {child.label}
                              </span>
                              {child.description ? (
                                <span className="mt-1 block text-[12px] leading-5 text-black/48">
                                  {child.description}
                                </span>
                              ) : null}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={linkClasses(isActiveLink(pathname, item.href))}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/contacto"
              className="hidden border border-[#e7cf83] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.22em] text-[#201708] shadow-[0_12px_22px_rgba(255,222,136,0.18)] transition hover:-translate-y-0.5 lg:inline-flex"
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.99) 0%, rgba(255,248,226,0.99) 44%, rgba(255,236,168,0.96) 100%)",
              }}
            >
              Contactanos
            </a>

            <Dialog.Root>
              <Dialog.Trigger asChild>
                <button
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/82 text-brand-charcoal shadow-[0_8px_22px_rgba(0,0,0,0.06)] transition hover:border-black/16 lg:hidden"
                  aria-label="Abrir menu"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-black/48 backdrop-blur-sm" />
                <Dialog.Content className="fixed inset-x-4 top-4 z-50 overflow-hidden rounded-[30px] border border-black/8 bg-[rgba(255,253,240,0.98)] shadow-[0_24px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:inset-x-auto sm:right-5 sm:w-[390px]">
                  <div className="p-5 sm:p-6">
                    <div className="flex items-center justify-between gap-4">
                      <div className="relative h-8 w-[150px]">
                        <Image
                          src="/posibles-utilidades/Logotipo principal 4.png"
                          alt="Cimalco Patagonia"
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                      <Dialog.Close asChild>
                        <button
                          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black/60 transition hover:border-black/16 hover:text-brand-charcoal"
                          aria-label="Cerrar menu"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </Dialog.Close>
                    </div>

                    <div className="mt-5 rounded-[24px] border border-black/8 bg-white/72 p-2">
                      {navigation.map((item) => {
                        if (item.children) {
                          return (
                            <div key={item.label} className="rounded-[20px]">
                              <p className="px-3 pb-2 pt-3 text-[10px] font-bold uppercase tracking-[0.24em] text-black/34">
                                {item.label}
                              </p>
                              <div className="space-y-1">
                                {item.children.map((child) => (
                                  <Dialog.Close asChild key={child.href}>
                                    <a
                                      href={child.href}
                                      className="block rounded-[18px] px-3 py-3 transition hover:bg-brand-yellow/12"
                                    >
                                      <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-brand-charcoal">
                                        {child.label}
                                      </span>
                                      {child.description ? (
                                        <span className="mt-1 block text-[12px] leading-5 text-black/46">
                                          {child.description}
                                        </span>
                                      ) : null}
                                    </a>
                                  </Dialog.Close>
                                ))}
                              </div>
                            </div>
                          );
                        }

                        return (
                          <Dialog.Close asChild key={item.href}>
                            <a
                              href={item.href}
                              className={`mt-1 block rounded-[18px] px-3 py-3 text-[11px] font-bold uppercase tracking-[0.18em] transition ${
                                isActiveLink(pathname, item.href)
                                  ? "bg-brand-yellow text-[#201708]"
                                  : "text-brand-charcoal hover:bg-black/[0.04]"
                              }`}
                            >
                              {item.label}
                            </a>
                          </Dialog.Close>
                        );
                      })}
                    </div>

                    <div className="mt-5 rounded-[24px] border border-[#e7c855] bg-[linear-gradient(135deg,rgba(255,255,255,0.95)_0%,rgba(255,245,204,0.94)_52%,rgba(255,210,57,0.88)_100%)] px-5 py-5 text-brand-charcoal">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/36">
                        Contacto directo
                      </p>
                      <p className="mt-2 text-sm leading-6 text-black/68">
                        Hablemos de tu obra y te derivamos con el equipo comercial.
                      </p>
                      <Dialog.Close asChild>
                        <a
                          href="/contacto"
                          className="mt-4 inline-flex rounded-full border border-[#d5b334] bg-white px-5 py-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#201708]"
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
        </div>
      </div>
    </header>
  );
}
