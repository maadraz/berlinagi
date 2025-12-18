import React from 'react';
import Link from 'next/link';
import { Container } from '../layout/Container';
import { articles } from '../../data/articles';

export const Thinking = () => {
  return (
    <section id="thinking" className="py-20 bg-warm-gray scroll-mt-20">
      <Container>
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/thinking"
            className="inline-block text-berlin-blue font-semibold tracking-widest uppercase text-sm mb-6 hover:underline"
          >
            Thinking
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((item, index) => (
            <Link
              key={index}
              href={`/thinking/${item.slug}`}
              className="group block bg-warm-white border border-soft-gray rounded-lg p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {/* Top Label */}
              <div className="mb-2">
                {item.type === 'manifesto' ? (
                  <span className="font-display font-semibold text-xs uppercase text-amber-gold tracking-wider">
                    Manifesto
                  </span>
                ) : (
                  <span className="font-mono text-sm text-slate-gray">
                    {item.date}
                  </span>
                )}
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-xl text-charcoal mb-3 mt-2 group-hover:text-berlin-blue transition-colors">
                {item.title}
              </h3>
              <p className="font-sans text-slate-gray leading-relaxed text-base line-clamp-3">
                {item.teaser}
              </p>

              {/* Footer */}
              <div className="mt-4 font-sans text-sm font-medium text-berlin-blue">
                Read →
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};