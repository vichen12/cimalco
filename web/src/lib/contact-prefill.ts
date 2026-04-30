import { contactWhatsappPhone } from "@/lib/contact";

type ContactPrefillParams = {
  line: string;
  group?: string;
  item?: string;
  message?: string;
};

export function buildContactHref({
  line,
  group,
  item,
  message,
}: ContactPrefillParams) {
  const params = new URLSearchParams();

  params.set("line", line);

  if (group) {
    params.set("group", group);
  }

  if (item) {
    params.set("item", item);
  }

  params.set(
    "message",
    message ??
      `Hola, quiero consultar por ${item ?? group ?? line} dentro de ${line}.`,
  );

  return `/contacto?${params.toString()}#contacto`;
}

export function buildWhatsAppHref(productName: string): string {
  const text = `Hola, me interesó el producto *${productName}* de Cimalco Patagonia. ¿Me pueden dar más información?`;
  return `https://wa.me/${contactWhatsappPhone}?text=${encodeURIComponent(text)}`;
}
