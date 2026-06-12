import { NextResponse } from 'next/server';
import { verifyPassword, signToken } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  const data = await request.formData();
  const email = data.get('email')?.toString().trim() ?? '';
  const password = data.get('password')?.toString() ?? '';

  if (!email || !password) {
    return NextResponse.redirect(new URL('/secret-admin-login?error=missing', request.url));
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await verifyPassword(password, user.password))) {
      return NextResponse.redirect(new URL('/secret-admin-login?error=invalid', request.url));
    }

    const token = signToken({ email: user.email, role: user.role, name: user.name });
    const response = NextResponse.redirect(new URL('/admin/dashboard', request.url));
    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7
    });

    return response;
  } catch (error) {
    console.error('Login failed:', error);
    return NextResponse.redirect(new URL('/secret-admin-login?error=server', request.url));
  }
}
