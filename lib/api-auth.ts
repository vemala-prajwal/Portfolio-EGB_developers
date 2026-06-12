import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

export type AdminUser = {
  email: string;
  role: string;
  name?: string;
};

export async function getAdminUser(): Promise<AdminUser | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;

  if (!token) return null;

  try {
    const payload = verifyToken(token);
    if (!payload.email || typeof payload.email !== 'string') return null;
    return {
      email: payload.email,
      role: typeof payload.role === 'string' ? payload.role : 'ADMIN',
      name: typeof payload.name === 'string' ? payload.name : undefined
    };
  } catch {
    return null;
  }
}

export function unauthorizedResponse() {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}

export async function requireAdmin() {
  const user = await getAdminUser();
  if (!user) return { user: null, response: unauthorizedResponse() };
  return { user, response: null };
}
