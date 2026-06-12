import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const errorMessages: Record<string, string> = {
  invalid: 'Invalid email or password.',
  missing: 'Please enter your email and password.',
  server: 'Unable to sign in right now. Please try again.'
};

type AdminLoginPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function AdminLoginPage({ searchParams }: AdminLoginPageProps) {
  const { error } = await searchParams;
  const message = error ? errorMessages[error] ?? 'Sign in failed.' : '';

  return (
    <main className="flex min-h-screen items-center justify-center bg-surface px-6 py-24 text-white">
      <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-surface2/80 p-10 shadow-glow backdrop-blur-xl">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Admin panel</p>
          <h1 className="text-4xl font-semibold">Secure access</h1>
          <p className="text-slate-400">Sign in to manage portfolio projects and publish new work to your public site.</p>
        </div>

        {message ? (
          <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-center text-sm text-red-200">
            {message}
          </div>
        ) : null}

        <form action="/api/admin/login" method="post" className="space-y-6">
          <Input type="email" name="email" placeholder="Email" required autoComplete="email" />
          <Input type="password" name="password" placeholder="Password" required autoComplete="current-password" />
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>

        <p className="mt-8 text-center text-xs text-muted">
          Default credentials are set via <code className="text-white/70">ADMIN_EMAIL</code> and{' '}
          <code className="text-white/70">ADMIN_PASSWORD</code> in your environment.
        </p>
      </div>
    </main>
  );
}
