import { z } from "zod";

export const contactRecipientEmail = "consultas@cimalconeuquen.com.ar";
export const contactWhatsappPhone =
  process.env.NEXT_PUBLIC_CONTACT_WHATSAPP_PHONE ?? "5492994361973";
export const contactWorksheetName = "Consultas";

export const contactInterestOptions = [
  "Postes / Energía",
  "Oil & Gas",
  "Base AIB",
  "Cámaras / Sleepers / Fundaciones",
  "Protección de erosiones / HR",
  "Bloques",
  "Adoquines",
  "Colocación de adoquines",
  "Pieza bajo plano",
  "Otro",
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
  "Energía",
  "Industrial",
  "Residencial / privado",
  "Otro",
] as const;

export const contactSubmissionSchema = z.object({
  name: z.string().trim().min(2, "Escribí tu nombre"),
  email: z.string().trim().email("Escribí un email válido"),
  phone: optionalText,
  company: z.string().trim().min(2, "Escribí tu empresa o rubro"),
  cargo: optionalText,
  interests: z
    .array(z.string().trim())
    .min(1, "Seleccioná al menos una línea de interés"),
  obra: optionalText,
  zone: optionalText,
  localidad: optionalText,
  provincia: optionalText,
  volumen: optionalText,
  fecha: optionalText,
  entrega: z.boolean().optional().default(false),
  colocacion: z.boolean().optional().default(false),
  message: z.string().trim().min(12, "Contanos un poco más"),
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

function pushIfValue(lines: string[], label: string, value: string | boolean | undefined) {
  if (value !== undefined && value !== "" && value !== false) {
    lines.push(`${label}: ${value === true ? "Sí" : value}`);
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
    `Líneas de interés: ${formatContactInterests(payload.interests)}`,
  ];

  pushIfValue(lines, "Teléfono", payload.phone);
  pushIfValue(lines, "Cargo", payload.cargo);
  pushIfValue(lines, "Localidad", payload.localidad);
  pushIfValue(lines, "Provincia", payload.provincia);
  pushIfValue(lines, "Volumen estimado", payload.volumen);
  pushIfValue(lines, "Fecha estimada", payload.fecha);
  pushIfValue(lines, "Requiere entrega", payload.entrega);
  pushIfValue(lines, "Requiere colocación / montaje", payload.colocacion);
  pushIfValue(lines, "Línea preseleccionada", payload.line);
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
      ? `<p><strong>Teléfono:</strong> ${escapeHtml(payload.phone)}</p>`
      : "",
    `<p><strong>Empresa o rubro:</strong> ${escapeHtml(payload.company)}</p>`,
    payload.cargo
      ? `<p><strong>Cargo:</strong> ${escapeHtml(payload.cargo)}</p>`
      : "",
    `<p><strong>Líneas de interés:</strong> ${escapeHtml(
      formatContactInterests(payload.interests),
    )}</p>`,
    payload.localidad
      ? `<p><strong>Localidad:</strong> ${escapeHtml(payload.localidad)}</p>`
      : "",
    payload.provincia
      ? `<p><strong>Provincia:</strong> ${escapeHtml(payload.provincia)}</p>`
      : "",
    payload.volumen
      ? `<p><strong>Volumen estimado:</strong> ${escapeHtml(payload.volumen)}</p>`
      : "",
    payload.fecha
      ? `<p><strong>Fecha estimada:</strong> ${escapeHtml(payload.fecha)}</p>`
      : "",
    payload.entrega
      ? `<p><strong>Requiere entrega:</strong> Sí</p>`
      : "",
    payload.colocacion
      ? `<p><strong>Requiere colocación / montaje:</strong> Sí</p>`
      : "",
    payload.line
      ? `<p><strong>Línea preseleccionada:</strong> ${escapeHtml(payload.line)}</p>`
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
    "Hola Cimalco, envío una consulta desde la web.",
    "",
    `Nombre: ${payload.name}`,
    `Empresa: ${payload.company}`,
    `Email: ${payload.email}`,
  ];

  pushIfValue(lines, "Teléfono", payload.phone);
  pushIfValue(lines, "Cargo", payload.cargo);
  lines.push(`Líneas de interés: ${formatContactInterests(payload.interests)}`);
  pushIfValue(lines, "Tipo de obra", payload.obra);
  pushIfValue(lines, "Localidad", payload.localidad);
  pushIfValue(lines, "Provincia", payload.provincia);
  pushIfValue(lines, "Zona de entrega", payload.zone);
  pushIfValue(lines, "Volumen estimado", payload.volumen);
  pushIfValue(lines, "Fecha estimada", payload.fecha);
  pushIfValue(lines, "Requiere entrega", payload.entrega);
  pushIfValue(lines, "Requiere colocación / montaje", payload.colocacion);
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
    `Línea de interés: ${payload.interest}`,
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
    Cargo: payload.cargo,
    Intereses: formatContactInterests(payload.interests),
    Localidad: payload.localidad,
    Provincia: payload.provincia,
    Volumen: payload.volumen,
    Fecha_estimada: payload.fecha,
    Requiere_entrega: payload.entrega ? "Sí" : "",
    Requiere_colocacion: payload.colocacion ? "Sí" : "",
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
  "Cargo",
  "Intereses",
  "Localidad",
  "Provincia",
  "Volumen",
  "Fecha_estimada",
  "Requiere_entrega",
  "Requiere_colocacion",
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
    row.Cargo,
    row.Intereses,
    row.Localidad,
    row.Provincia,
    row.Volumen,
    row.Fecha_estimada,
    row.Requiere_entrega,
    row.Requiere_colocacion,
    row.LineaPreseleccionada,
    row.GrupoPreseleccionado,
    row.ItemPreseleccionado,
    row.Mensaje,
    row.Whatsapp,
  ];
}
