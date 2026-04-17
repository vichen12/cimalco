import { z } from "zod";

export const contactRecipientEmail = "consultas@cimalconeuquen.com.ar";
export const contactWhatsappPhone =
  process.env.NEXT_PUBLIC_CONTACT_WHATSAPP_PHONE ?? "5492994361973";
export const contactWorksheetName = "Consultas";

export const contactInterestOptions = [
  "Premoldeados industrializados",
  "Pretensados",
  "Premoldeados",
  "Servicios",
  "Consulta general",
] as const;

const optionalText = z
  .string()
  .optional()
  .nullable()
  .transform((value) => value?.trim() ?? "");

export const contactObraOptions = [
  "Vial / infraestructura",
  "Urbanismo / municipal",
  "Oil & Gas",
  "Energia",
  "Industrial",
  "Residencial / privado",
  "Otro",
] as const;

export const contactSubmissionSchema = z.object({
  name: z.string().trim().min(2, "Escribi tu nombre"),
  email: z.string().trim().email("Escribi un email valido"),
  phone: optionalText,
  company: z.string().trim().min(2, "Escribi tu empresa o rubro"),
  interests: z
    .array(z.string().trim())
    .min(1, "Selecciona al menos una linea"),
  obra: optionalText,
  zone: optionalText,
  message: z.string().trim().min(12, "Contanos un poco mas"),
  line: optionalText,
  group: optionalText,
  item: optionalText,
});

export type ContactSubmissionInput = z.input<typeof contactSubmissionSchema>;
export type ContactSubmission = z.infer<typeof contactSubmissionSchema>;
export type QuickWhatsappSubmission = {
  interest: string;
  request: string;
  timing: string;
};

function pushIfValue(lines: string[], label: string, value: string) {
  if (value) {
    lines.push(`${label}: ${value}`);
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function formatContactInterests(interests: string[]) {
  return interests.join(", ");
}

export function buildContactEmailSubject(payload: ContactSubmission) {
  const scope = payload.item || payload.group || formatContactInterests(payload.interests);
  return `Nueva consulta web - ${payload.name} - ${scope}`;
}

export function buildContactPlainText(payload: ContactSubmission) {
  const lines = [
    "Nueva consulta recibida desde el sitio web de Cimalco.",
    "",
    `Nombre: ${payload.name}`,
    `Email: ${payload.email}`,
    `Empresa o rubro: ${payload.company}`,
    `Lineas de interes: ${formatContactInterests(payload.interests)}`,
  ];

  pushIfValue(lines, "Telefono", payload.phone);
  pushIfValue(lines, "Linea preseleccionada", payload.line);
  pushIfValue(lines, "Grupo preseleccionado", payload.group);
  pushIfValue(lines, "Item preseleccionado", payload.item);

  lines.push("");
  lines.push("Mensaje:");
  lines.push(payload.message);

  return lines.join("\n");
}

export function buildContactHtml(payload: ContactSubmission) {
  const pieces = [
    `<p>Nueva consulta recibida desde el sitio web de Cimalco.</p>`,
    `<p><strong>Nombre:</strong> ${escapeHtml(payload.name)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>`,
    payload.phone
      ? `<p><strong>Telefono:</strong> ${escapeHtml(payload.phone)}</p>`
      : "",
    `<p><strong>Empresa o rubro:</strong> ${escapeHtml(payload.company)}</p>`,
    `<p><strong>Lineas de interes:</strong> ${escapeHtml(
      formatContactInterests(payload.interests),
    )}</p>`,
    payload.line
      ? `<p><strong>Linea preseleccionada:</strong> ${escapeHtml(payload.line)}</p>`
      : "",
    payload.group
      ? `<p><strong>Grupo preseleccionado:</strong> ${escapeHtml(payload.group)}</p>`
      : "",
    payload.item
      ? `<p><strong>Item preseleccionado:</strong> ${escapeHtml(payload.item)}</p>`
      : "",
    `<p><strong>Mensaje:</strong><br />${escapeHtml(payload.message).replaceAll(
      "\n",
      "<br />",
    )}</p>`,
  ];

  return pieces.filter(Boolean).join("");
}

export function buildWhatsappMessage(payload: ContactSubmission) {
  const lines = [
    "Hola Cimalco, envio una consulta desde la web.",
    "",
    `Nombre: ${payload.name}`,
    `Empresa: ${payload.company}`,
    `Email: ${payload.email}`,
  ];

  pushIfValue(lines, "Telefono", payload.phone);
  lines.push(`Lineas de interes: ${formatContactInterests(payload.interests)}`);
  pushIfValue(lines, "Tipo de obra", payload.obra);
  pushIfValue(lines, "Zona de entrega", payload.zone);
  pushIfValue(lines, "Grupo", payload.group);
  pushIfValue(lines, "Item", payload.item);
  lines.push("");
  lines.push(`Mensaje: ${payload.message}`);

  return lines.join("\n");
}

export function buildWhatsappUrl(payload: ContactSubmission) {
  const baseUrl = `https://wa.me/${contactWhatsappPhone}`;
  return `${baseUrl}?text=${encodeURIComponent(buildWhatsappMessage(payload))}`;
}

export function buildQuickWhatsappMessage(payload: QuickWhatsappSubmission) {
  return [
    "Hola Cimalco, quiero hacer una consulta express desde la web.",
    "",
    `Linea de interes: ${payload.interest}`,
    `Necesito: ${payload.request}`,
    `Plazo estimado: ${payload.timing}`,
  ].join("\n");
}

export function buildQuickWhatsappUrl(payload: QuickWhatsappSubmission) {
  const baseUrl = `https://wa.me/${contactWhatsappPhone}`;
  return `${baseUrl}?text=${encodeURIComponent(buildQuickWhatsappMessage(payload))}`;
}

export function buildWorkbookRow(payload: ContactSubmission, createdAt: string) {
  return {
    Fecha: createdAt,
    Nombre: payload.name,
    Email: payload.email,
    Telefono: payload.phone,
    Empresa: payload.company,
    Intereses: formatContactInterests(payload.interests),
    LineaPreseleccionada: payload.line,
    GrupoPreseleccionado: payload.group,
    ItemPreseleccionado: payload.item,
    Mensaje: payload.message,
    Whatsapp: buildWhatsappUrl(payload),
  };
}

export const contactSheetHeaders = [
  "Fecha",
  "Nombre",
  "Email",
  "Telefono",
  "Empresa",
  "Intereses",
  "LineaPreseleccionada",
  "GrupoPreseleccionado",
  "ItemPreseleccionado",
  "Mensaje",
  "Whatsapp",
] as const;

export function buildSheetRowValues(
  payload: ContactSubmission,
  createdAt: string,
) {
  const row = buildWorkbookRow(payload, createdAt);

  return [
    row.Fecha,
    row.Nombre,
    row.Email,
    row.Telefono,
    row.Empresa,
    row.Intereses,
    row.LineaPreseleccionada,
    row.GrupoPreseleccionado,
    row.ItemPreseleccionado,
    row.Mensaje,
    row.Whatsapp,
  ];
}
