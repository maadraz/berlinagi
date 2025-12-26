import React from 'react';
import { Container } from '../layout/Container';
import { H2, Body } from '../typography/Typography';

export const Approach = () => {
  return (
    <section id="approach" className="py-24 bg-warm-white scroll-mt-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Text & Features */}
          <div>
            <span className="block text-berlin-blue font-semibold tracking-widest uppercase text-sm mb-6">
              Our Approach
            </span>
            <H2 className="mb-6">
              Modular Expert <br /> Architecture
            </H2>
            <Body className="mb-10 text-charcoal">
              We separate what a model knows from how it reasons. A core model learns to think, compose, and generate. Independently-trained expert modules encode domain knowledge. A learned adapter integrates any expert — even ones created after training.
              <br /><br />
              The result: add new capabilities in hours, not months. No retraining. Data stays local. Expertise remains attributable.
            </Body>

            <div className="space-y-8 mt-12">
              {/* Feature 1 */}
              <div className="flex flex-col border-l-2 border-berlin-blue pl-6 py-1">
                <span className="font-display font-medium text-xl text-charcoal mb-1">100-1000× cheaper</span>
                <span className="text-slate-gray font-sans">Add domain expertise without retraining the full model</span>
              </div>
              
              {/* Feature 2 */}
              <div className="flex flex-col border-l-2 border-amber-gold pl-6 py-1">
                <span className="font-display font-medium text-xl text-charcoal mb-1">Post-hoc extensibility</span>
                <span className="text-slate-gray font-sans">Integrate new experts after deployment</span>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col border-l-2 border-soft-gray pl-6 py-1">
                <span className="font-display font-medium text-xl text-charcoal mb-1">Data sovereignty</span>
                <span className="text-slate-gray font-sans">Experts train locally. Knowledge never leaves its source.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bauhaus Diagram */}
          <div className="w-full flex items-center justify-center">
             <div className="relative w-full max-w-[500px] aspect-[4/3] bg-warm-gray/30 rounded-sm p-4 md:p-8 border border-soft-gray/50">
               <svg
                 className="w-full h-full"
                 viewBox="0 0 500 360"
                 fill="none"
                 xmlns="http://www.w3.org/2000/svg"
                 role="img"
                 aria-label="Architecture diagram showing core reasoning model connected to adapter layer, which connects to multiple specialized expert models"
               >
                  {/* Background Grid Lines for Technical Feel */}
                  <line x1="50" y1="0" x2="50" y2="360" stroke="#E0DED8" strokeWidth="1" />
                  <line x1="180" y1="0" x2="180" y2="360" stroke="#E0DED8" strokeWidth="1" />
                  <line x1="280" y1="0" x2="280" y2="360" stroke="#E0DED8" strokeWidth="1" />
                  
                  {/* Connection Lines (Paths) */}
                  {/* From Core to Adapter */}
                  <path d="M150 180 L220 180" stroke="#1A1A1A" strokeWidth="2" />
                  
                  {/* From Adapter to Experts (Branching) */}
                  <path d="M260 180 L320 180" stroke="#1A1A1A" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M240 160 L240 80 L320 80" stroke="#1A1A1A" strokeWidth="1.5" />
                  <path d="M240 200 L240 280 L320 280" stroke="#1A1A1A" strokeWidth="1.5" />

                  {/* Core Model */}
                  <g transform="translate(50, 130)">
                    <rect width="100" height="100" fill="#2D5A8A" rx="2" />
                    <text x="50" y="55" textAnchor="middle" fill="white" fontSize="14" fontFamily="Inter" fontWeight="600">Core</text>
                    <text x="50" y="75" textAnchor="middle" fill="white" fontSize="12" fontFamily="Inter" opacity="0.8">Reasoning</text>
                  </g>

                  {/* Adapter */}
                  <g transform="translate(220, 160)">
                    <rect width="40" height="40" fill="white" stroke="#1A1A1A" strokeWidth="2" rx="2" />
                    <circle cx="20" cy="20" r="8" fill="#1A1A1A" />
                  </g>
                  <text x="240" y="215" textAnchor="middle" fill="#5C5C5C" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="0.05em">ADAPTER</text>

                  {/* Expert 1 (Top) */}
                  <g transform="translate(320, 40)">
                    <rect width="130" height="80" fill="#F0EFEB" stroke="#C9A227" strokeWidth="2" rx="2" />
                    <text x="65" y="45" textAnchor="middle" fill="#1A1A1A" fontSize="14" fontFamily="Inter" fontWeight="500">Legal Expert</text>
                  </g>

                  {/* Expert 2 (Middle) */}
                  <g transform="translate(320, 140)">
                    <rect width="130" height="80" fill="#F0EFEB" stroke="#C9A227" strokeWidth="2" rx="2" />
                    <text x="65" y="45" textAnchor="middle" fill="#1A1A1A" fontSize="14" fontFamily="Inter" fontWeight="500">Code Expert</text>
                  </g>

                  {/* Expert 3 (Bottom) */}
                  <g transform="translate(320, 240)">
                    <rect width="130" height="80" fill="#F0EFEB" stroke="#C9A227" strokeWidth="2" rx="2" />
                    <text x="65" y="45" textAnchor="middle" fill="#1A1A1A" fontSize="14" fontFamily="Inter" fontWeight="500">Bio Expert</text>
                  </g>

               </svg>
             </div>
          </div>

        </div>
      </Container>
    </section>
  );
};