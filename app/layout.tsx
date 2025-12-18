import type { Metadata } from 'next';
import { inter, ibmPlex, jetbrains } from './fonts';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'BerlinAGI',
  description: 'Modular architectures for artificial general intelligence',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ibmPlex.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen bg-warm-white text-charcoal font-sans flex flex-col selection:bg-berlin-blue selection:text-white">
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
