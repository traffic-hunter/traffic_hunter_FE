import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";

export async function middleware(req: NextRequest) {
  const SIGNIN_URL = '/api/auth/signin';
  const session = await auth();

  if (!session) {
    return NextResponse.redirect(new URL(SIGNIN_URL, req.url));
  }

  return NextResponse.next();
}

// Specify the paths that the middleware should apply to
export const config = {
  matcher: [
    /*
     * Apply middleware to all pages except:
     * 1. /api/* (exclude all API routes)
     * 2. /_next/* (exclude Next.js assets, e.g., /_next/static/*)
     */
    '/((?!api|_next/static|.svg|.ico|_next/image).*)',
  ],
}