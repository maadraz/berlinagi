import React from 'react';
import { Container } from '../layout/Container';
import { H2 } from '../typography/Typography';
import { Button } from '../ui/Button';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-warm-white scroll-mt-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <span className="block text-berlin-blue font-semibold tracking-widest uppercase text-sm mb-6">
              Contact
            </span>
            <H2 className="mb-10">Get in Touch</H2>
            
            <div className="space-y-8">
              <div>
                <h4 className="font-display font-medium text-charcoal text-lg mb-1">Email</h4>
                <a href="mailto:hello@berlinagi.com" className="text-berlin-blue hover:text-charcoal transition-colors border-b border-transparent hover:border-charcoal text-lg">
                  hello@berlinagi.com
                </a>
              </div>

              <div className="pt-8 mt-4 border-t border-soft-gray w-full max-w-xs">
                <span className="font-mono text-sm text-slate-gray block">Berlin, Germany</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-warm-gray/30 p-8 md:p-10 rounded-sm border border-soft-gray/50">
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="w-full bg-white border border-soft-gray px-4 py-3 text-charcoal placeholder-slate-gray/40 focus:outline-none focus:border-berlin-blue focus:ring-1 focus:ring-berlin-blue transition-all rounded-sm"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="w-full bg-white border border-soft-gray px-4 py-3 text-charcoal placeholder-slate-gray/40 focus:outline-none focus:border-berlin-blue focus:ring-1 focus:ring-berlin-blue transition-all rounded-sm"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full bg-white border border-soft-gray px-4 py-3 text-charcoal placeholder-slate-gray/40 focus:outline-none focus:border-berlin-blue focus:ring-1 focus:ring-berlin-blue transition-all rounded-sm resize-none"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <div>
                  <Button variant="primary" type="submit" className="w-full md:w-auto">
                    Send Message
                  </Button>
                </div>
             </form>
          </div>
        </div>
      </Container>
    </section>
  );
};