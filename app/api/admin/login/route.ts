import { NextResponse } from 'next/server';
import { signToken } from '@/lib/auth';

export async function POST(request: Request) {
  const data = await request.formData();
  const email = data.get('email')?.toString() ?? '';
  const password = data.get('password')?.toString() ?? '';

  // Placeholder credentials for the hidden admin panel.
  const validEmail = 'admin@example.com';
  const validPassword = 'Apollo2026!';

  if (email !== validEmail || password !== validPassword) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const token = signToken({ email, role: 'ADMIN' });
  const response = NextResponse.redirect(new URL('/admin/dashboard', request.url));
  response.cookies.set('admin_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7
  });

  return response;
}
