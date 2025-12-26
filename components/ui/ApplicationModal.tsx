'use client';

import React, { useState, useEffect } from 'react';
import { X, Upload } from 'lucide-react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;
  isGeneralInquiry?: boolean;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  jobTitle,
  isGeneralInquiry = false
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedin: '',
    github: '',
    message: ''
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    // Prevent body scroll while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData for API
      const apiFormData = new FormData();
      apiFormData.append('name', formData.name);
      apiFormData.append('email', formData.email);
      apiFormData.append('message', formData.message);

      if (formData.linkedin) apiFormData.append('linkedin', formData.linkedin);
      if (formData.github) apiFormData.append('github', formData.github);
      if (jobTitle) apiFormData.append('jobTitle', jobTitle);
      if (isGeneralInquiry) apiFormData.append('isGeneralInquiry', 'true');
      if (cvFile) apiFormData.append('cv', cvFile);

      // Send to API
      const response = await fetch('/api/send-application', {
        method: 'POST',
        body: apiFormData,
      });

      if (!response.ok) {
        throw new Error('Failed to send application');
      }

      // Success - reset form and close
      setFormData({ name: '', email: '', linkedin: '', github: '', message: '' });
      setCvFile(null);
      alert('Application sent successfully! We\'ll get back to you soon.');
      onClose();
    } catch (error) {
      console.error('Error sending application:', error);
      alert('Failed to send application. Please try again or email us directly at hello@berlinagi.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-charcoal/40 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Modal Content */}
      <div
        className="relative bg-warm-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl animate-in zoom-in-95 duration-250 border border-soft-gray"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-gray hover:text-charcoal hover:bg-warm-gray rounded-full transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        <div className="p-8 sm:p-10">
          {/* Header */}
          <div className="mb-8">
            <h2 className="font-display font-semibold text-3xl text-charcoal mb-2">
              {isGeneralInquiry ? 'Get in Touch' : 'Apply for Position'}
            </h2>
            {jobTitle && !isGeneralInquiry && (
              <p className="font-sans text-base text-berlin-blue">
                {jobTitle}
              </p>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block font-sans text-sm font-medium text-charcoal mb-2">
                Full Name <span className="text-berlin-blue">*</span>
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-soft-gray rounded-md font-sans text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-berlin-blue/50 focus:border-berlin-blue transition-colors"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block font-sans text-sm font-medium text-charcoal mb-2">
                Email <span className="text-berlin-blue">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-soft-gray rounded-md font-sans text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-berlin-blue/50 focus:border-berlin-blue transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            {/* CV Upload - Only for job applications */}
            {!isGeneralInquiry && (
              <div>
                <label htmlFor="cv" className="block font-sans text-sm font-medium text-charcoal mb-2">
                  CV / Resume <span className="text-berlin-blue">*</span>
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="cv"
                    required={!isGeneralInquiry}
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="cv"
                    className="flex items-center justify-center w-full px-4 py-3 border border-soft-gray rounded-md font-sans text-base text-slate-gray hover:border-berlin-blue hover:bg-warm-gray cursor-pointer transition-colors"
                  >
                    <Upload size={20} className="mr-2" strokeWidth={1.5} />
                    {cvFile ? cvFile.name : 'Upload CV (PDF, DOC, DOCX)'}
                  </label>
                </div>
              </div>
            )}

            {/* LinkedIn */}
            <div>
              <label htmlFor="linkedin" className="block font-sans text-sm font-medium text-charcoal mb-2">
                LinkedIn {!isGeneralInquiry && <span className="text-slate-gray text-xs">(optional)</span>}
              </label>
              <input
                type="url"
                id="linkedin"
                value={formData.linkedin}
                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                className="w-full px-4 py-3 border border-soft-gray rounded-md font-sans text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-berlin-blue/50 focus:border-berlin-blue transition-colors"
                placeholder="https://linkedin.com/in/yourprofile"
              />
            </div>

            {/* GitHub */}
            <div>
              <label htmlFor="github" className="block font-sans text-sm font-medium text-charcoal mb-2">
                GitHub {!isGeneralInquiry && <span className="text-slate-gray text-xs">(optional)</span>}
              </label>
              <input
                type="url"
                id="github"
                value={formData.github}
                onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                className="w-full px-4 py-3 border border-soft-gray rounded-md font-sans text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-berlin-blue/50 focus:border-berlin-blue transition-colors"
                placeholder="https://github.com/yourusername"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block font-sans text-sm font-medium text-charcoal mb-2">
                Message <span className="text-berlin-blue">*</span>
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border border-soft-gray rounded-md font-sans text-base text-charcoal focus:outline-none focus:ring-2 focus:ring-berlin-blue/50 focus:border-berlin-blue transition-colors resize-none"
                placeholder="Tell us about yourself and your relevant experience..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-berlin-blue text-white font-medium text-base px-6 py-3 rounded-md hover:bg-[#244A73] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application →'}
              </button>
              <p className="font-sans text-xs text-slate-gray italic mt-3 text-center">
                This will open your email client to send the application to hello@berlinagi.com
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
