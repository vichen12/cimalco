import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Poppins } from "next/font/google";
import Script from "next/script";
import { WhatsAppButton } from "@/components/whatsapp-button";
import {
  absoluteUrl,
  defaultDescription,
  defaultKeywords,
  defaultOgImage,
  legalName,
  organizationSchema,
  siteName,
  siteUrl,
  websiteSchema,
} from "@/lib/seo";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "Premoldeados y pretensados de hormigon en Neuquen",
    template: "%s | Cimalco Patagonia",
  },
  description: defaultDescription,
  keywords: defaultKeywords,
  alternates: {
    canonical: "/",
  },
  category: "construction",
  authors: [{ name: legalName, url: siteUrl }],
  creator: legalName,
  publisher: legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: siteName,
    description: defaultDescription,
    url: siteUrl,
    siteName,
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: absoluteUrl(defaultOgImage),
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: defaultDescription,
    images: [absoluteUrl(defaultOgImage)],
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

export const viewport: Viewport = {
  themeColor: "#ffd239",
};

const googleAnalyticsId = "G-D1RK1H07EP";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [organizationSchema, websiteSchema];

  return (
    <html
      lang="es-AR"
      className={`${poppins.variable} ${barlowCondensed.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full" suppressHydrationWarning>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleAnalyticsId}');
          `}
        </Script>
        {structuredData.map((item, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10"
          style={{ background: "#fffdf0" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 55% 45% at 8% 10%, rgba(255,210,57,0.24) 0%, transparent 100%), radial-gradient(ellipse 40% 50% at 92% 88%, rgba(145,145,145,0.12) 0%, transparent 100%), radial-gradient(ellipse 35% 40% at 55% 50%, rgba(45,45,45,0.06) 0%, transparent 100%)",
            animation: "bg-glow 20s ease-in-out infinite alternate",
          }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
