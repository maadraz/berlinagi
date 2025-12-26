import type { Metadata } from 'next';
import { inter, ibmPlex, jetbrains } from './fonts';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://berlinagi.com'),
  title: {
    default: 'BerlinAGI - General Intelligence Through Composition',
    template: '%s | BerlinAGI',
  },
  description:
    'BerlinAGI builds modular architectures that scale capability, not compute. We believe general intelligence emerges through composition of specialized expert systems.',
  keywords: [
    'artificial general intelligence',
    'AGI',
    'modular AI',
    'AI research',
    'Berlin',
    'machine learning',
    'AI architecture',
    'expert systems',
  ],
  authors: [{ name: 'BerlinAGI' }],
  creator: 'BerlinAGI',
  publisher: 'BerlinAGI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://berlinagi.com',
    siteName: 'BerlinAGI',
    title: 'BerlinAGI - General Intelligence Through Composition',
    description:
      'BerlinAGI builds modular architectures that scale capability, not compute. We believe general intelligence emerges through composition of specialized expert systems.',
    images: [
      {
        url: '/images/company/logo.png',
        width: 1200,
        height: 630,
        alt: 'BerlinAGI Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BerlinAGI - General Intelligence Through Composition',
    description:
      'BerlinAGI builds modular architectures that scale capability, not compute.',
    images: ['/images/company/logo.png'],
    creator: '@berlinagi',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BerlinAGI',
    url: 'https://berlinagi.com',
    logo: 'https://berlinagi.com/images/company/logo.png',
    description:
      'BerlinAGI builds modular architectures that scale capability, not compute.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Berlin',
      addressCountry: 'DE',
    },
    sameAs: [
      'https://twitter.com/berlinagi',
      'https://github.com/berlinagi',
      'https://linkedin.com/company/berlinagi',
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlex.variable} ${jetbrains.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-warm-white text-charcoal font-sans flex flex-col selection:bg-berlin-blue selection:text-white">
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics
            measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
          />
        )}
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
