import { auth } from "@/app/auth";
import { NextResponse } from "next/server";

export const middleware = auth(function (req, res) {
  if (req.auth && (req.nextUrl.pathname === "/admin" || req.nextUrl.pathname === "/admin/")) {
    return NextResponse.redirect(new URL("/admin/dashboard", req.url));
  }
});

export const config = {
  matcher: ["/admin/:path*", "/((?!.*\\.(?:png|jpg|jpeg|gif|webp|svg)).*)"],
};
