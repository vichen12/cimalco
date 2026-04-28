"use client";

import { useRef, useState, useMemo } from "react";
import { ArrowRight, Search, X } from "lucide-react";

export type CatalogSearchItem = {
  id: string;
  name: string;
  code?: string;
  section: string;
  sectionId: string;
  tags?: string[];
};

export function CatalogSearch({ items }: { items: CatalogSearchItem[] }) {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (q.length < 2) return [];
    return items
      .filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.code?.toLowerCase().includes(q) ||
          item.section.toLowerCase().includes(q) ||
          item.tags?.some((t) => t.toLowerCase().includes(q)),
      )
      .slice(0, 12);
  }, [query, items]);

  const showDropdown = focused && query.trim().length >= 2;

  return (
    <div className="relative">
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/34" />
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 160)}
          placeholder="Buscar producto, codigo o linea..."
          className="w-full rounded-2xl border border-black/10 bg-white py-3.5 pl-11 pr-10 text-sm text-brand-charcoal shadow-[0_4px_14px_rgba(0,0,0,0.06)] outline-none transition placeholder:text-black/28 focus:border-black/18 focus:shadow-[0_6px_24px_rgba(0,0,0,0.10)]"
        />
        {query && (
          <button
            onClick={() => { setQuery(""); inputRef.current?.focus(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-black/30 transition hover:text-black/60"
            aria-label="Limpiar busqueda"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {showDropdown && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-[20px] border border-black/8 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.14)]">
          {results.length === 0 ? (
            <p className="px-5 py-6 text-center text-sm text-black/38">
              Sin resultados para &ldquo;{query}&rdquo;
            </p>
          ) : (
            <div className="p-1.5">
              <p className="px-3 pb-1 pt-2.5 text-[10px] font-bold uppercase tracking-[0.26em] text-black/24">
                {results.length} resultado{results.length !== 1 ? "s" : ""}
              </p>
              {results.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.sectionId}`}
                  className="group flex items-center justify-between rounded-[14px] px-3 py-2.5 transition hover:bg-black/[0.04]"
                >
                  <div>
                    <span className="text-[12px] font-semibold uppercase tracking-[0.10em] text-brand-charcoal">
                      {item.name}
                    </span>
                    {item.code && (
                      <span className="ml-2 font-mono text-[11px] text-black/36">
                        {item.code}
                      </span>
                    )}
                    <p className="text-[11px] text-black/36">{item.section}</p>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-black/22 transition group-hover:text-brand-charcoal" />
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
