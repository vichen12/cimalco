import type { Metadata } from "next";

export const siteUrl = "https://www.cimalcopatagonia.com.ar";
export const siteName = "Cimalco Patagonia";
export const legalName = "Cimalco Neuquén S.A.";
export const defaultOgImage = "/site-assets/premoldeados-de-hormigon.jpg";
export const defaultDescription =
  "Fábrica de premoldeados y pretensados de hormigón en Neuquén. Postes para líneas eléctricas AT/MT/BT, premoldeados para Oil & Gas en Vaca Muerta, bloques y adoquines IRAM. Planta propia de 26.000 m² — venta directa en Patagonia.";

export const defaultKeywords = [
  // Marca
  "Cimalco Patagonia",
  "Cimalco Neuquén",
  "cimalcopatagonia",

  // Genérico industrial
  "fábrica de premoldeados Neuquén",
  "premoldeados de hormigón Neuquén",
  "premoldeados y pretensados de hormigón",
  "pretensados de hormigón Neuquén",
  "hormigón industrial Patagonia",
  "fabricante premoldeados Patagonia",
  "premoldeados Patagonia",
  "planta industrial Neuquén",
  "venta directa premoldeados Neuquén",

  // Energía / postes
  "postes pretensados Patagonia",
  "postes de hormigón Neuquén",
  "postes de hormigón pretensado",
  "postes para líneas eléctricas",
  "postes de alta tensión Patagonia",
  "postes media tensión Neuquén",
  "postes baja tensión Neuquén",
  "infraestructura eléctrica Patagonia",
  "columnas de hormigón armado",

  // Oil & Gas / Vaca Muerta
  "premoldeados Oil & Gas",
  "premoldeados Oil y Gas Neuquén",
  "premoldeados Vaca Muerta",
  "bases AIB Vaca Muerta",
  "bases premoldeadas yacimiento",
  "sleepers de hormigón Oil & Gas",
  "cámaras premoldeadas Oil & Gas",
  "fundaciones premoldeadas Neuquén",
  "piezas bajo plano Oil & Gas",
  "Ley 3338 Oil & Gas Neuquén",
  "Empresa Neuquina Ley 3338",

  // Bloques
  "bloques de hormigón Neuquén",
  "bloques de cemento Neuquén",
  "bloques de hormigón Patagonia",
  "bloques de hormigón Alto Valle",
  "bloque P20 Neuquén",
  "venta de bloques Neuquén",
  "bloques IRAM",
  "bloques hormigón IRAM",
  "mampostería hormigón Neuquén",

  // Adoquines
  "adoquines de hormigón Neuquén",
  "adoquines de hormigón Patagonia",
  "adoquines de hormigón Alto Valle",
  "pavimento articulado Neuquén",
  "pavimento articulado Patagonia",
  "adoquín Uni Stone 8 cm",
  "adoquín Holanda 6 cm",
  "venta de adoquines Neuquén",
  "adoquines IRAM",
  "adoquines para tránsito liviano",
  "colocación de adoquines Neuquén",

  // Protección erosiones
  "bloques HR",
  "protección de erosiones Neuquén",
  "protección de taludes hormigón",
  "sistema protección hidráulica hormigón",
  "revestimiento de canales hormigón",

  // Geo — Patagonia
  "premoldeados Alto Valle",
  "hormigón Neuquén capital",
  "premoldeados para obras en Patagonia",
];

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  type?: "website" | "article";
};

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  image = defaultOgImage,
  keywords = [],
  type = "website",
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    keywords: [...new Set([...defaultKeywords, ...keywords])],
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName,
      locale: "es_AR",
      type,
      images: [
        {
          url: absoluteUrl(image),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  name: legalName,
  alternateName: siteName,
  url: siteUrl,
  logo: absoluteUrl("/icon.png"),
  image: absoluteUrl(defaultOgImage),
  email: "consultas@cimalcopatagonia.com.ar",
  telephone: "+54-299-4422656",
  description: defaultDescription,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "ENET n. 1 2089, Esq. Ing. Huergo — Parque Industrial Neuquén Oeste",
    addressLocality: "Neuquén",
    addressRegion: "Neuquén",
    postalCode: "8300",
    addressCountry: "AR",
  },
  areaServed: [
    "Neuquén, Argentina",
    "Patagonia, Argentina",
    "Vaca Muerta, Neuquén",
    "Alto Valle, Río Negro",
    "Argentina",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+54-299-4422656",
      email: "consultas@cimalcopatagonia.com.ar",
      areaServed: "AR",
      availableLanguage: ["es"],
    },
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+54-299-4361973",
      email: "consultas@cimalcopatagonia.com.ar",
      areaServed: "AR",
      availableLanguage: ["es"],
    },
  ],
  knowsAbout: [
    "Premoldeados de hormigón",
    "Pretensados de hormigón",
    "Postes de hormigón pretensado para líneas eléctricas AT MT BT",
    "Premoldeados para Oil & Gas Vaca Muerta",
    "Bases AIB sleepers cámaras para yacimiento",
    "Adoquines y pavimento articulado IRAM",
    "Bloques de hormigón IRAM",
    "Protección de erosiones bloques HR",
    "Fabricación bajo plano hormigón",
    "Ley 3338 empresa neuquina",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  inLanguage: "es-AR",
  publisher: {
    "@type": "Organization",
    name: legalName,
  },
  description: defaultDescription,
};



