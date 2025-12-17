import React from 'react';
import { Container } from '../layout/Container';
import { H2, Body } from '../typography/Typography';

export const ProblemStatement = () => {
  return (
    <section className="py-20 bg-warm-gray">
      <Container>
        <div className="max-w-[720px] mx-auto">
          {/* Section Label */}
          <span className="block text-berlin-blue font-semibold tracking-widest uppercase text-sm mb-6">
            The Problem
          </span>
          
          {/* Headline */}
          <H2 className="mb-8">
            Scaling alone won't get <br className="hidden md:block" />
            us to general intelligence
          </H2>
          
          {/* Body Text - Using text-charcoal for primary body text readability */}
          <div className="space-y-6">
            <Body className="text-charcoal">
              Current frontier AI depends on ever-larger models, ever-larger datasets, and ever-larger compute budgets. This path concentrates capability in a handful of organizations with billions in capital.
            </Body>
            <Body className="text-charcoal">
              It also hits fundamental limits. More parameters don't mean more knowledge — they mean more cost, more energy, and more brittleness. Adding a new domain means retraining from scratch.
            </Body>
            <Body className="text-charcoal font-medium">
              We believe there's a better architecture. One where capability grows with knowledge, not with compute.
            </Body>
          </div>
        </div>
      </Container>
    </section>
  );
};