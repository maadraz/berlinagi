import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-warm-white text-charcoal font-sans flex flex-col selection:bg-berlin-blue selection:text-white">
      {/* 
        This layout serves as the root styling context.
        It enforces the 'warm-white' background and 'charcoal' text globally.
      */}
      <Navbar />
      <main className="flex-grow flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
};