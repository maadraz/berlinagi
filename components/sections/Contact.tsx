'use client';

import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { H2 } from '../typography/Typography';
import { Button } from '../ui/Button';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData for API
      const apiFormData = new FormData();
      apiFormData.append('name', formData.name);
      apiFormData.append('email', formData.email);
      apiFormData.append('message', formData.message);
      apiFormData.append('isGeneralInquiry', 'true');

      // Send to API
      const response = await fetch('/api/send-application', {
        method: 'POST',
        body: apiFormData,
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Success - reset form
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully! We\'ll get back to you soon.');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again or email us directly at hello@berlinagi.com');
    } finally {
      setIsSubmitting(false);
    }
  };

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
             <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-charcoal mb-2">Name</label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-soft-gray px-4 py-3 text-charcoal placeholder-slate-gray/40 focus:outline-none focus:border-berlin-blue focus:ring-1 focus:ring-berlin-blue transition-all rounded-sm"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-charcoal mb-2">Email</label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-soft-gray px-4 py-3 text-charcoal placeholder-slate-gray/40 focus:outline-none focus:border-berlin-blue focus:ring-1 focus:ring-berlin-blue transition-all rounded-sm"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-charcoal mb-2">Message</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-soft-gray px-4 py-3 text-charcoal placeholder-slate-gray/40 focus:outline-none focus:border-berlin-blue focus:ring-1 focus:ring-berlin-blue transition-all rounded-sm resize-none"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <div>
                  <Button variant="primary" type="submit" className="w-full md:w-auto" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
             </form>
          </div>
        </div>
      </Container>
    </section>
  );
};