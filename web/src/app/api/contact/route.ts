import { NextResponse } from "next/server";
import { buildWhatsappUrl, contactSubmissionSchema } from "@/lib/contact";

export const runtime = "nodejs";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwN8MwN41IUcIB4yUQpc78vpyzUTQ2I9Hk369kFS0o9Nsh9ocsn0Tw18pYAnCyL_XTd/exec";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON invalido" }, { status: 400 });
  }

  const parsed = contactSubmissionSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Datos invalidos", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const payload = parsed.data;
  const waUrl   = buildWhatsappUrl(payload);

  /* ── Google Sheets via Apps Script ── */
  try {
    const row = {
      createdAt: new Date().toISOString(),
      name:      payload.name,
      email:     payload.email,
      phone:     payload.phone ?? "",
      company:   payload.company,
      interests: payload.interests.join(", "),
      obra:      payload.obra ?? "",
      zone:      payload.zone ?? "",
      message:   payload.message,
      line:      payload.line ?? "",
      group:     payload.group ?? "",
      item:      payload.item ?? "",
    };

    const res  = await fetch(SCRIPT_URL, {
      method:   "POST",
      redirect: "follow",
      headers:  { "Content-Type": "application/json" },
      body:     JSON.stringify(row),
    });

    const text = await res.text();
    console.log("[contact] Apps Script response:", res.status, text);

    let json: { ok?: boolean; error?: string } = {};
    try { json = JSON.parse(text) as typeof json; } catch { /* non-JSON response */ }

    if (!res.ok || json.ok === false) {
      console.error("[contact] Apps Script error:", text);
      return NextResponse.json({ ok: false, error: "Apps Script error", whatsappUrl: waUrl }, { status: 502 });
    }

    return NextResponse.json({ ok: true, whatsappUrl: waUrl });
  } catch (err) {
    console.error("[contact] fetch error:", err);
    return NextResponse.json({ ok: false, error: "Error de red", whatsappUrl: waUrl }, { status: 500 });
  }
}
