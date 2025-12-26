import React from 'react';
import Link from 'next/link';
import { Container } from '../layout/Container';
import { H1, Body } from '../typography/Typography';
import { Button } from '../ui/Button';

export const Hero = () => {
  return (
    <section className="pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-warm-white">
       <Container>
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Content */}
            <div className="max-w-2xl flex flex-col items-start text-left">
              <H1 className="mb-6">
                General Intelligence <br />
                <span className="text-berlin-blue">Through Composition</span>
              </H1>
              <Body className="mb-10 text-xl md:text-2xl text-slate-gray max-w-lg leading-relaxed">
                BerlinAGI builds modular architectures that scale capability, not compute.
              </Body>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="/thinking/our-mission">
                  <Button variant="primary">Mission</Button>
                </Link>
                <Link href="/jobs">
                  <Button variant="secondary">Join Us</Button>
                </Link>
              </div>
            </div>

            {/* Right Illustration: Bauhaus Modular Grid */}
            <div className="relative w-full flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
               <svg 
                 viewBox="0 0 500 500" 
                 className="w-full max-w-[500px] h-auto opacity-90"
                 xmlns="http://www.w3.org/2000/svg"
               >
                  {/* Base Grid */}
                  <defs>
                    <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" fill="#E0DED8" />
                    </pattern>
                  </defs>
                  
                  {/* Background Pattern */}
                  <rect x="50" y="50" width="400" height="400" fill="url(#smallGrid)" opacity="0.5" />
                  
                  {/* Structural Lines */}
                  <line x1="50" y1="250" x2="450" y2="250" stroke="#E0DED8" strokeWidth="1.5" />
                  <line x1="250" y1="50" x2="250" y2="450" stroke="#E0DED8" strokeWidth="1.5" />

                  {/* Primary Modular Element (Berlin Blue) */}
                  <circle cx="250" cy="250" r="120" stroke="#2D5A8A" strokeWidth="2" fill="none" />
                  <circle cx="250" cy="250" r="15" fill="#2D5A8A" />
                  
                  {/* Secondary Interlocking Element (Grid Offset) */}
                  <rect x="250" y="130" width="120" height="120" stroke="#1A1A1A" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
                  
                  {/* Accent Element (Amber) */}
                  <circle cx="370" cy="130" r="25" fill="#C9A227" />
                  
                  {/* Connection Vector */}
                  <line x1="250" y1="250" x2="370" y2="130" stroke="#1A1A1A" strokeWidth="1" />
               </svg>
            </div>
         </div>
       </Container>
    </section>
  );
};