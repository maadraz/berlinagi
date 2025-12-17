import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const H1: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h1 className={`font-display font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tight text-charcoal leading-[1.1] ${className}`}>
    {children}
  </h1>
);

export const H2: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h2 className={`font-display font-medium text-2xl md:text-3xl lg:text-4xl tracking-tight text-charcoal leading-[1.2] ${className}`}>
    {children}
  </h2>
);

export const H3: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <h3 className={`font-display font-medium text-xl md:text-2xl text-charcoal mb-2 ${className}`}>
    {children}
  </h3>
);

export const Body: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <p className={`font-sans font-normal text-base md:text-lg text-slate-gray leading-relaxed ${className}`}>
    {children}
  </p>
);

export const Caption: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <span className={`font-sans font-normal text-sm text-slate-gray/80 ${className}`}>
    {children}
  </span>
);

export const Code: React.FC<TypographyProps> = ({ children, className = '' }) => (
  <code className={`font-mono text-sm bg-warm-gray px-1.5 py-0.5 rounded text-berlin-blue ${className}`}>
    {children}
  </code>
);