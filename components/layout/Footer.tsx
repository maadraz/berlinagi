import React from 'react';
import { Container } from './Container';

export const Footer = () => {
  return (
    <footer className="bg-warm-gray border-t border-soft-gray py-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left Side: Legal & Location */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
             <span className="font-sans text-sm text-slate-gray">© 2025 BerlinAGI</span>
             <span className="hidden md:inline text-soft-gray">|</span>
             <span className="font-sans text-sm text-slate-gray">Berlin, Germany</span>
          </div>
          
          {/* Right Side: Social Links */}
          <div className="flex gap-6 items-center">
            <a 
              href="mailto:hello@berlinagi.com" 
              className="font-sans text-sm text-slate-gray hover:text-berlin-blue transition-colors font-medium"
            >
              hello@berlinagi.com
            </a>
            <a 
              href="https://www.linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-sans text-sm text-slate-gray hover:text-berlin-blue transition-colors font-medium"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};