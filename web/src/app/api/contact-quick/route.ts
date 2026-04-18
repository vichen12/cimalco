import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwN8MwN41IUcIB4yUQpc78vpyzUTQ2I9Hk369kFS0o9Nsh9ocsn0Tw18pYAnCyL_XTd/exec";

const schema = z.object({
  name:     z.string().trim().min(1),
  interest: z.string().trim().min(1),
  phone:    z.string().trim().optional().default(""),
  message:  z.string().trim().optional().default(""),
});

export async function POST(request: Request) {
  let body: unknown;
  try { body = await request.json(); } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false }, { status: 400 });

  const { name, interest, phone, message } = parsed.data;

  try {
    const res = await fetch(SCRIPT_URL, {
      method:   "POST",
      redirect: "follow",
      headers:  { "Content-Type": "application/json" },
      body: JSON.stringify({
        createdAt: new Date().toISOString(),
        name,
        email:     "",
        phone,
        company:   "Consulta express (WA)",
        interests: interest,
        obra:      "",
        zone:      "",
        message,
        line:      "",
        group:     "",
        item:      "",
      }),
    });
    const text = await res.text();
    console.log("[contact-quick] Apps Script:", res.status, text);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact-quick] error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
