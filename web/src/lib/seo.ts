import type { Metadata } from "next";

export const siteUrl = "https://www.cimalconeuquen.com.ar";
export const siteName = "Cimalco Patagonia";
export const legalName = "Cimalco Neuquen S.A.";
export const defaultOgImage = "/site-assets/premoldeados-de-hormigon.jpg";
export const defaultDescription =
  "Premoldeados y pretensados de hormigon para energia, Oil & Gas, vialidad e infraestructura en Neuquen y toda la Patagonia.";

export const defaultKeywords = [
  "premoldeados Neuquen",
  "pretensados Neuquen",
  "premoldeados Patagonia",
  "postes de hormigon",
  "adoquines de hormigon",
  "bloques de hormigon",
  "camaras premoldeadas",
  "revestimientos hidraulicos",
  "Cimalco Patagonia",
  "Cimalco Neuquen",
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
  email: "consultas@cimalconeuquen.com.ar",
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
      email: "consultas@cimalconeuquen.com.ar",
      areaServed: "AR",
      availableLanguage: ["es"],
    },
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+54-299-4361973",
      email: "consultas@cimalconeuquen.com.ar",
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
