import { AdminMobileNav } from '@/components/admin/admin-mobile-nav';
import { AdminSidebar } from '@/components/admin/admin-sidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-surface text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl">
        <div className="hidden w-64 shrink-0 lg:block">
          <AdminSidebar />
        </div>
        <main className="flex-1 px-6 py-8 sm:px-10 lg:px-12 lg:py-12">
          <AdminMobileNav />
          {children}
        </main>
      </div>
    </div>
  );
}
