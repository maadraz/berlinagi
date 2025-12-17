import React from 'react';
import { Container } from '../layout/Container';
import { H2, Body } from '../typography/Typography';

export const WhyEurope = () => {
  return (
    <section className="py-20 bg-warm-gray">
      <Container>
        <div className="max-w-[720px] mx-auto text-center">
          {/* Section Label */}
          <span className="block text-berlin-blue font-semibold tracking-widest uppercase text-sm mb-6">
            Why Europe
          </span>
          
          {/* Headline */}
          <H2 className="mb-8">
            Built in Berlin, <br className="hidden sm:block" />
            designed for sovereignty
          </H2>
          
          {/* Body Text */}
          <div className="space-y-6">
            <Body className="text-charcoal">
              Our architecture isn't European for political reasons — it's European because it solves European problems. Data that can't leave its jurisdiction. Expertise that must remain attributable. Compliance that's structural, not bolted on.
            </Body>
            <Body className="text-charcoal">
              We're based in Berlin, building with European talent, for a global future.
            </Body>
          </div>

           {/* Coordinates Marker */}
           <div className="mt-12 pt-8 border-t border-soft-gray/50 flex justify-center">
             <span className="font-mono text-sm text-slate-gray/60 tracking-wider">
               52.52°N, 13.40°E
             </span>
           </div>
        </div>
      </Container>
    </section>
  );
};