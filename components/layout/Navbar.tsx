import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Container } from './Container';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const navLinks = [
    { label: 'Approach', href: '#approach', type: 'anchor' },
    { label: 'Team', href: '#team', type: 'anchor' },
    { label: 'Thinking', href: '/thinking', type: 'route' },
    { label: 'Contact', href: '#contact', type: 'anchor' },
  ];

  // Scroll Spy (Only active on Home)
  useEffect(() => {
    if (!isHome) {
      setActiveSection('');
      return;
    }

    const handleScroll = () => {
      // Only spy on anchor links
      const sections = navLinks
        .filter(l => l.type === 'anchor')
        .map(link => link.href.substring(1));
      
      let current = '';
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = sectionId;
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks, isHome]);

  const handleNavClick = (e: React.MouseEvent, link: { href: string; type: string }) => {
    e.preventDefault();
    setIsOpen(false);

    if (link.type === 'route') {
      navigate(link.href);
      return;
    }

    // Anchor link logic
    if (isHome) {
      const targetId = link.href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      // If not home, navigate home then scroll (simple hash nav)
      // For simplicity in this iteration, just go home.
      navigate('/');
      // Timeout to allow render then scroll could be added here, 
      // but native browser hash handling usually works if URL has hash.
      setTimeout(() => {
        const targetId = link.href.replace('#', '');
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-warm-white/95 backdrop-blur-md border-b border-soft-gray h-16 transition-all duration-300">
      <Container className="flex items-center justify-between h-full">
        {/* Wordmark */}
        <a 
          href="/" 
          onClick={handleLogoClick}
          className="font-display font-semibold text-xl tracking-tight text-charcoal hover:opacity-80 transition-opacity select-none group"
        >
          Berlin<span className="text-berlin-blue group-hover:text-amber-gold transition-colors duration-300">AGI</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = isHome && activeSection === link.href.substring(1);
            const isRouteActive = !isHome && link.type === 'route' && location.pathname.startsWith(link.href);
            
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-sm font-medium transition-colors relative py-1 cursor-pointer ${
                  isActive || isRouteActive
                    ? 'text-berlin-blue' 
                    : 'text-charcoal/80 hover:text-berlin-blue'
                }`}
              >
                {link.label}
                {(isActive || isRouteActive) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-berlin-blue rounded-full animate-in fade-in zoom-in duration-300" />
                )}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 -mr-2 text-charcoal hover:text-berlin-blue transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
            {isOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </Container>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-warm-white border-b border-soft-gray md:hidden animate-in slide-in-from-top-2 duration-200 shadow-lg">
          <Container className="py-6 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`text-lg font-medium block cursor-pointer ${
                  (isHome && activeSection === link.href.substring(1)) || (!isHome && link.type === 'route' && location.pathname.startsWith(link.href))
                    ? 'text-berlin-blue'
                    : 'text-charcoal hover:text-berlin-blue'
                }`}
              >
                {link.label}
              </a>
            ))}
          </Container>
        </div>
      )}
    </nav>
  );
};