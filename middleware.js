import { auth } from "@/app/auth";
import { NextResponse } from "next/server";

export const middleware = auth(function (req, res) {
  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*", "/((?!.*\\.(?:png|jpg|jpeg|gif|webp|svg)).*)"],
};
