import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const isAuthenticated = req.cookies.get('isAuthenticated')?.value || ''; 
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/admin/dashboard') && isAuthenticated !== 'true') {
    return NextResponse.redirect(new URL('/admin', req.url));
  }

  return NextResponse.next(); 
}

export const config = {
  matcher: ['/admin/dashboard'],
};
