import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Container } from '../layout/Container';
import { articles, ArticleBlock } from '../../data/articles';

const renderBlock = (block: ArticleBlock, index: number) => {
  switch (block.type) {
    case 'h2':
      return (
        <h2 key={index} className="font-display font-semibold text-[28px] text-charcoal mt-12 mb-4">
          {block.content}
        </h2>
      );
    case 'h3':
      return (
        <h3 key={index} className="font-display font-semibold text-[22px] text-charcoal mt-8 mb-3">
          {block.content}
        </h3>
      );
    case 'paragraph':
      const parts = block.content.split(/(\*[^*]+\*)/g);
      return (
        <p key={index} className="font-sans text-[18px] leading-[1.7] text-charcoal mb-6">
           {parts.map((part, i) => {
              if (part.startsWith('*') && part.endsWith('*')) {
                return <em key={i} className="not-italic text-charcoal font-medium">{part.slice(1, -1)}</em>;
              }
              return part;
           })}
        </p>
      );
    default:
      return null;
  }
};

export const Article = () => {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/thinking" replace />;
  }

  return (
    <div className="bg-warm-white min-h-screen pt-32 pb-32">
      <Container className="max-w-[720px]">
        {/* Back Link */}
        <div className="mb-12">
          <Link 
            to="/thinking"
            className="font-sans text-sm font-medium text-berlin-blue hover:text-charcoal transition-colors"
          >
            ← Back to Thinking
          </Link>
        </div>

        {/* Header */}
        <header className="mb-8">
          {article.type === 'manifesto' ? (
            <span className="block font-display font-semibold text-xs uppercase text-amber-gold tracking-wider mb-4">
              Manifesto
            </span>
          ) : (
             <span className="block font-mono text-sm text-slate-gray mb-4">
              {article.date}
            </span>
          )}
          
          <h1 className="font-display font-semibold text-4xl md:text-[48px] leading-[1.1] text-charcoal mb-3">
            {article.title}
          </h1>
          
          {article.subtitle && (
            <p className="font-sans text-xl md:text-2xl text-slate-gray font-normal mt-3">
              {article.subtitle}
            </p>
          )}

          <hr className="border-t border-soft-gray mt-8" />
        </header>

        {/* Body */}
        <article className="mt-12">
          {article.content?.map((block, index) => renderBlock(block, index))}
        </article>

        {/* Footer */}
        <footer className="mt-16 pt-6 border-t border-soft-gray">
          <span className="font-sans text-sm text-slate-gray">
            Published: {article.date}
          </span>
        </footer>

      </Container>
    </div>
  );
};