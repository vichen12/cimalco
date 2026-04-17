import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cimalco Patagonia",
    short_name: "Cimalco",
    description:
      "Premoldeados y pretensados de hormigon para infraestructura, energia, Oil & Gas y vialidad en Patagonia.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffdf0",
    theme_color: "#ffd239",
    lang: "es-AR",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
