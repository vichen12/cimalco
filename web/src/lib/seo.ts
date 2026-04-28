import type { Metadata } from "next";

export const siteUrl = "https://www.cimalcopatagonia.com.ar";
export const siteName = "Cimalco Patagonia";
export const legalName = "Cimalco Neuquen S.A.";
export const defaultOgImage = "/site-assets/premoldeados-de-hormigon.jpg";
export const defaultDescription =
  "Premoldeados y pretensados de hormigon para energia, Oil & Gas, vialidad e infraestructura en Neuquen y toda la Patagonia.";

export const defaultKeywords = [
  "premoldeados Neuquen",
  "premoldeados Patagonia",
  "fabricante premoldeados Neuquen",
  "hormigon premoldeado Patagonia",
  "postes de hormigon pretensado Neuquen",
  "postes de alta tension Patagonia",
  "postes pretensados Patagonia",
  "lineas electricas Patagonia",
  "premoldeados Vaca Muerta",
  "premoldeados Oil and Gas Neuquen",
  "piezas industriales hormigon Oil Gas",
  "base para equipos AIB",
  "base AIB Oil Gas Neuquen",
  "camaras de valvulas premoldeadas",
  "sleepers premoldeados",
  "bloques HR proteccion de erosiones",
  "proteccion de taludes hormigon",
  "sistema proteccion hidraulica hormigon",
  "adoquines Neuquen",
  "adoquin Uni Stone 8 cm",
  "adoquin Holanda 6 cm",
  "pavimento articulado Neuquen",
  "bloques de hormigon Neuquen",
  "bloque P20 Neuquen",
  "bloque mamposteria hormigon",
  "Empresa Neuquina Ley 3338",
  "Cimalco Patagonia",
  "cimalcopatagonia",
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
  foundingDate: "1947",
  description: defaultDescription,
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "ENET n. 1 2089, Esq. Ing. Huergo - Parque Industrial Neuquen Oeste",
    addressLocality: "Neuquen",
    addressRegion: "Neuquen",
    postalCode: "8300",
    addressCountry: "AR",
  },
  areaServed: "Patagonia, Argentina",
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
    "Premoldeados de hormigon",
    "Pretensados de hormigon",
    "Postes de hormigon",
    "Adoquines y pavimentos",
    "Infraestructura para Oil & Gas",
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
