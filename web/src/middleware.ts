import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  if (host === "cimalco.vercel.app") {
    return new NextResponse(
      "<!DOCTYPE html><html lang='es'><head><meta charset='UTF-8'><title>410 Gone</title></head><body><h1>410 Gone</h1><p>Este recurso ya no está disponible.</p></body></html>",
      {
        status: 410,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
          "X-Robots-Tag": "noindex, nofollow",
        },
      }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
