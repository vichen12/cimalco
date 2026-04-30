import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // Home
    { url: siteUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },

    // Empresa
    { url: `${siteUrl}/empresa`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // Soluciones — páginas por mercado (como El Fortín / PREAR)
    { url: `${siteUrl}/cimalco`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },

    // Catálogo técnico
    { url: `${siteUrl}/catalogo`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },

    // Servicios
    { url: `${siteUrl}/servicios`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Contacto
    { url: `${siteUrl}/contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
  ];
}
