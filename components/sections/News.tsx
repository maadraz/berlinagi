import React from 'react';
import { Container } from '../layout/Container';
import { H2 } from '../typography/Typography';

const newsItems = [
  {
    date: 'December 2025',
    title: 'BerlinAGI selected for SPRIND Funke',
    description: "We're participating in SPRIND's Next Frontier AI Concepts program to develop our Modular Expert Architecture."
  },
  {
    date: 'Coming 2026',
    title: 'Technical paper',
    description: 'Our foundational architecture paper is in preparation.'
  }
];

export const News = () => {
  return (
    <section id="news" className="py-20 bg-warm-gray scroll-mt-20">
      <Container>
        {/* Header */}
        <div className="mb-12">
          <span className="block text-berlin-blue font-semibold tracking-widest uppercase text-sm mb-6">
            News
          </span>
          <H2>Updates</H2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-warm-white border border-soft-gray p-8 flex flex-col items-start transition-colors hover:border-berlin-blue/30"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-slate-gray/70 mb-4 block">
                {item.date}
              </span>
              <h3 className="font-display font-medium text-xl text-charcoal mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="font-sans text-slate-gray leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};