import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from 'next-themes';

export const metadata: Metadata = {
  title: 'EGB DEVELOPERS | Premium Digital Agency',
  description:
    'We build premium digital experiences — luminous products, brand systems, and conversion-focused websites for ambitious founders and global teams.',
  metadataBase: new URL('https://portfolio-egb-developers.vercel.app'),
  openGraph: {
    title: 'EGB DEVELOPERS | Premium Digital Agency',
    description: 'Premium digital agency crafting cinematic web experiences with world-class polish.',
    type: 'website',
    url: 'https://portfolio-egb-developers.vercel.app'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EGB DEVELOPERS | Premium Digital Agency',
    description: 'Premium digital agency crafting cinematic web experiences with world-class polish.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-surface font-body text-[18px] text-white antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
