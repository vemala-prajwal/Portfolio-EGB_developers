import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  const response = NextResponse.redirect(new URL('/secret-admin-login', request.url));
  response.cookies.delete('admin_token');
  return response;
}
