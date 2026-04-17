import type { Metadata } from "next";
import { Barlow_Condensed, Poppins } from "next/font/google";
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
  title: "Cimalco Patagonia",
  description:
    "Premoldeados y pretensados de hormigon para infraestructura en Patagonia.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-AR"
      className={`${poppins.variable} ${barlowCondensed.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full" suppressHydrationWarning>
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
      </body>
    </html>
  );
}
