'use client';

import { VertealBackground } from '@/components/effects/verteal-background';
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider';

export function PublicPageShell({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-surface">
        <VertealBackground />
        <div className="relative z-10">{children}</div>
      </div>
    </SmoothScrollProvider>
  );
}
