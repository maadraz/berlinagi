import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { articles, ArticleBlock } from '@/data/articles';

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

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  const description =
    article.subtitle ||
    article.content
      ?.find((block) => block.type === 'paragraph')
      ?.content.slice(0, 160) ||
    'Read this article from BerlinAGI';

  return {
    title: article.title,
    description,
    openGraph: {
      title: article.title,
      description,
      type: 'article',
      publishedTime: article.date,
      authors: ['BerlinAGI'],
      url: `https://berlinagi.com/thinking/${slug}`,
      images: [
        {
          url: '/images/company/logo.png',
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description,
      images: ['/images/company/logo.png'],
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Article Schema for SEO
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.subtitle || article.teaser,
    image: 'https://berlinagi.com/images/company/logo.png',
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Organization',
      name: 'BerlinAGI',
      url: 'https://berlinagi.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'BerlinAGI',
      logo: {
        '@type': 'ImageObject',
        url: 'https://berlinagi.com/images/company/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://berlinagi.com/thinking/${slug}`,
    },
  };

  return (
    <div className="bg-warm-white min-h-screen pt-32 pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Container className="max-w-[720px]">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Thinking', href: '/thinking' },
            { label: article.title },
          ]}
        />

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
}
