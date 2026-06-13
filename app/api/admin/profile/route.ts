import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const token = request.headers.get('cookie')?.split(';').find((item) => item.trim().startsWith('admin_token='))?.split('=')[1];

  if (!token) {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }

  try {
    const payload = verifyToken(token);
    return NextResponse.json({ authenticated: true, user: payload });
  } catch {
    return NextResponse.json({ authenticated: false }, { status: 401 });
  }
}
