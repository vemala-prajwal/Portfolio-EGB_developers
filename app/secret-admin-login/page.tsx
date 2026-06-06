import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-surface px-6 py-24 text-white">
      <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-surface2/80 p-10 shadow-glow backdrop-blur-xl">
        <div className="mb-10 space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Hidden admin panel</p>
          <h1 className="text-4xl font-semibold">Secure access</h1>
          <p className="text-slate-400">Sign in to edit the portfolio content, projects, blog posts, and site settings.</p>
        </div>
        <form action="/api/admin/login" className="space-y-6">
          <Input type="email" name="email" placeholder="Email" required />
          <Input type="password" name="password" placeholder="Password" required />
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
      </div>
    </main>
  );
}
