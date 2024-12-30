import { NextRequest, NextResponse } from "next/server";

export async function middleware(req : NextRequest) {
  const { pathname } = req.nextUrl;

  // 쿠키에서 세션 토큰 확인
  const sessionToken = req.cookies.get("authjs.session-token");

  // 로그인된 사용자가 로그인 페이지에 접근 시 리다이렉트
  if (pathname === "/api/auth/signin" && sessionToken) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
