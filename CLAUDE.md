# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BerlinAGI is a landing page and content site built with React, TypeScript, and Vite. It showcases BerlinAGI's mission to build modular architectures for artificial general intelligence through a clean, Bauhaus-inspired design aesthetic.

## Development Commands

### Running the Application
- **Start dev server**: `npm run dev` (runs on http://localhost:3000)
- **Build for production**: `npm run build`
- **Preview production build**: `npm run preview`

### Prerequisites
- Node.js installed
- Set `GEMINI_API_KEY` in `.env.local` (referenced in README, though currently unused in code)

## Architecture

### Tech Stack
- **Framework**: React 19.2.3 with React Router 6.20.0
- **Build Tool**: Vite 6.2.0
- **Language**: TypeScript 5.8.2
- **Styling**: Tailwind CSS (loaded via CDN in index.html)
- **Icons**: lucide-react 0.468.0

### Routing Structure
The app uses React Router with three main routes defined in [App.tsx](App.tsx):
- `/` - Landing page with all main sections
- `/thinking` - Article index page showing all articles
- `/thinking/:slug` - Individual article pages

The `ScrollToTop` component in App.tsx ensures the page scrolls to top on route changes.

### Component Organization

Components are organized into clear functional categories:

**Layout Components** ([components/layout/](components/layout/))
- `Layout.tsx` - Root layout wrapper providing Navbar, Footer, and global styling context
- `Navbar.tsx` - Top navigation bar
- `Footer.tsx` - Site footer
- `Container.tsx` - Content width constraint wrapper (max-width: 1200px)

**Section Components** ([components/sections/](components/sections/))
Landing page sections rendered in sequence: Hero, ProblemStatement, Approach, WhyEurope, Team, Thinking, Contact. Each section is self-contained and wrapped with `FadeIn` for scroll animations.

**Page Components** ([components/pages/](components/pages/))
- `Article.tsx` - Renders individual articles from data/articles.ts
- `ThinkingIndex.tsx` - Lists all articles

**UI Components** ([components/ui/](components/ui/))
- `Button.tsx` - Reusable button with primary/secondary variants
- `FadeIn.tsx` - Intersection Observer-based fade-in animation wrapper

**Typography Components** ([components/typography/Typography.tsx](components/typography/Typography.tsx))
Standardized typography components: `H1`, `H2`, `H3`, `Body`, `Caption`, `Code` with consistent Tailwind styling.

### Content Management

Article content is defined in [data/articles.ts](data/articles.ts) with a structured data model:
- `Article` interface defines metadata (slug, type, title, date, etc.)
- `ArticleBlock` interface defines content blocks (paragraph, h2, h3)
- Articles are exported as a typed array and consumed by Article/ThinkingIndex components

To add new articles, append to the `articles` array with appropriate type ("manifesto", "update", or "research").

### Styling System

**Color Palette** (defined in [index.html](index.html)):
- `warm-white` (#FAFAF8) - Background
- `warm-gray` (#F0EFEB) - Surface
- `charcoal` (#1A1A1A) - Primary text
- `slate-gray` (#5C5C5C) - Secondary text
- `berlin-blue` (#2D5A8A) - Primary accent
- `amber-gold` (#C9A227) - Secondary accent
- `soft-gray` (#E0DED8) - Borders

**Typography**:
- Body text: Inter (font-sans)
- Display/headings: IBM Plex Sans (font-display)
- Code: JetBrains Mono (font-mono)

Fonts are loaded from Google Fonts in index.html. Tailwind config extends the theme with these custom values.

### Path Aliases

The `@/*` alias maps to the root directory (configured in tsconfig.json and vite.config.ts), allowing imports like `import { Layout } from '@/components/layout/Layout'`.

### Animation Strategy

Scroll-based animations use the `FadeIn` component wrapping sections. It leverages IntersectionObserver to trigger fade-in and translate-up effects when elements enter viewport (10% visible threshold).

## Design Principles

The codebase follows a **Bauhaus-inspired minimalist aesthetic** with:
- Clean geometric SVG illustrations (see Hero.tsx)
- Consistent spacing and typography hierarchy
- Intentional use of whitespace
- Limited color palette emphasizing readability

When adding features, maintain this restrained, structured design language.
