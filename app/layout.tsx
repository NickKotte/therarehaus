import './globals.css';
import type { Metadata } from 'next';
import { Navigation } from './components/Navigation';
import { FloatingDots } from './components/FloatingDots';
import { BackgroundProvider } from './components/BackgroundProvider';
import { ScrollToTop } from './components/ScrollToTop';

export const metadata: Metadata = {
  title: {
    default: 'The Rare Haus | Luxury Art Gallery & Design Studio',
    template: '%s | The Rare Haus',
  },
  metadataBase: new URL('https://therarehaus.com'),
  description: 'Discover unique art pieces, custom murals, and contemporary installations at The Rare Haus. Pittsburgh-based art gallery specializing in transformative spatial design.',
  keywords: ['art gallery', 'contemporary art', 'murals', 'installations', 'Pittsburgh art', 'luxury design', 'custom artwork'],
  authors: [{ name: 'The Rare Haus' }],
  creator: 'The Rare Haus',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://therarehaus.com',
    title: 'The Rare Haus | Luxury Art Gallery & Design Studio',
    description: 'Discover unique art pieces, custom murals, and contemporary installations at The Rare Haus. Pittsburgh-based art gallery specializing in transformative spatial design.',
    siteName: 'The Rare Haus',
    creator: '@therarehaus',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Rare Haus | Luxury Art Gallery & Design Studio',
    description: 'Discover unique art pieces, custom murals, and contemporary installations at The Rare Haus',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Marcellus&family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="font-sans text-white bg-zinc-900 relative" style={{
        fontFamily: "'Montserrat', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
      }}>
        <BackgroundProvider />
        <FloatingDots />
        <Navigation />
        <main className="min-h-screen relative z-10">{children}</main>
        <footer className="relative z-10 py-8 text-center text-sm text-zinc-400">
          <p>&copy; {new Date().getFullYear()} The Rare Haus. All rights reserved.</p>
        </footer>
        <ScrollToTop />
      </body>
    </html>
  );
}