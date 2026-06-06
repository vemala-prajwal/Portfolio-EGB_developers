import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Apollo Vale | Premium Portfolio & Agency',
  description: 'Ultra-premium personal portfolio and agency website with futuristic glassmorphism, animations, and dark mode.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Apollo Vale | Premium Portfolio & Agency',
    description: 'Ultra-premium personal portfolio and agency website.',
    type: 'website',
    url: 'https://example.com',
    images: [{ url: 'https://example.com/og-image.png', width: 1200, height: 630 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apollo Vale | Premium Portfolio & Agency',
    description: 'Ultra-premium personal portfolio and agency website.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-surface text-white antialiased', inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
