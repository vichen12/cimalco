import { NextResponse } from "next/server";
import {
  buildWhatsappUrl,
  contactSubmissionSchema,
} from "@/lib/contact";

export const runtime = "nodejs";

function getAppsScriptUrl() {
  const deploymentId = process.env.GOOGLE_APPS_SCRIPT_DEPLOYMENT_ID;
  const explicitUrl = process.env.GOOGLE_APPS_SCRIPT_URL;

  if (explicitUrl) {
    return explicitUrl;
  }

  if (deploymentId) {
    return `https://script.google.com/macros/s/${deploymentId}/exec`;
  }

  return null;
}

async function appendLeadToGoogleSheets(
  payload: ReturnType<typeof contactSubmissionSchema.parse>,
  createdAt: string,
) {
  const appsScriptUrl = getAppsScriptUrl();

  if (!appsScriptUrl) {
    throw new Error("Falta configurar GOOGLE_APPS_SCRIPT_DEPLOYMENT_ID.");
  }

  const response = await fetch(appsScriptUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      createdAt,
      ...payload,
    }),
    redirect: "follow",
    cache: "no-store",
  });

  const text = await response.text();

  if (!response.ok) {
    throw new Error(`Apps Script devolvio ${response.status}: ${text}`);
  }

  try {
    const json = JSON.parse(text) as { ok?: boolean; error?: string };

    if (!json.ok) {
      throw new Error(json.error ?? "Apps Script no pudo guardar la consulta.");
    }
  } catch (error) {
    if (error instanceof SyntaxError) {
      throw new Error("Apps Script no devolvio un JSON valido.");
    }

    throw error;
  }

  return appsScriptUrl;
}

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = contactSubmissionSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Datos invalidos en el formulario.",
          issues: parsed.error.flatten(),
        },
        { status: 400 },
      );
    }

    const payload = parsed.data;
    const createdAt = new Date().toISOString();
    const googleSheetsUrl = await appendLeadToGoogleSheets(payload, createdAt);

    return NextResponse.json({
      ok: true,
      emailStatus: "sent",
      whatsappUrl: buildWhatsappUrl(payload),
      savedTo: googleSheetsUrl,
    });
  } catch (error) {
    console.error("Error al procesar formulario de contacto", error);

    return NextResponse.json(
      {
        ok: false,
        error:
          "No pudimos guardar la consulta en Google Sheets. Revisa la implementacion del Apps Script o su deployment ID.",
      },
      { status: 500 },
    );
  }
}
