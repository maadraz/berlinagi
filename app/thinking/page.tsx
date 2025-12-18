import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { articles } from '@/data/articles';

export default function ThinkingPage() {
  return (
    <div className="bg-warm-white min-h-screen pt-32 pb-20">
      <Container>
        <div className="max-w-3xl mb-16">
          <h1 className="font-display font-semibold text-4xl md:text-[48px] text-charcoal mb-4">
            Thinking
          </h1>
          <p className="font-sans text-lg text-slate-gray">
            Research updates, perspectives, and foundational ideas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((item, index) => (
            <Link
              key={index}
              href={`/thinking/${item.slug}`}
              className="group block bg-warm-white border border-soft-gray rounded-lg p-8 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg flex flex-col items-start h-full"
            >
              <div className="mb-3">
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

              <h3 className="font-display font-semibold text-2xl text-charcoal mb-3 mt-1 group-hover:text-berlin-blue transition-colors">
                {item.title}
              </h3>
              <p className="font-sans text-slate-gray leading-relaxed text-base mb-6">
                {item.teaser}
              </p>

              <div className="mt-auto font-sans text-sm font-medium text-berlin-blue">
                Read →
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
