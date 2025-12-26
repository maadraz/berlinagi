'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { ChevronDown } from 'lucide-react';
import { ApplicationModal } from '@/components/ui/ApplicationModal';

// --- Types ---

interface JobSection {
  heading: string;
  type?: 'paragraph' | 'list';
  content?: string;
  items?: string[];
}

interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  start: string;
  summary: string;
  sections: JobSection[];
  applyEmail: string;
  applyNote: string;
}

// --- Data ---

const jobs: Job[] = [
  {
    id: 1,
    title: "ML Training Engineer — Large-Scale Compute",
    location: "Berlin",
    type: "Full-time",
    start: "Q1 2026",
    summary: "Own our training infrastructure — clusters, distributed training, debugging at scale.",
    sections: [
      {
        heading: "The Role",
        type: 'paragraph',
        content: "We're looking for an ML engineer who has trained large models and knows what breaks at scale. You'll own our training infrastructure — from cluster setup to distributed training runs to debugging why loss spiked at step 47,000."
      },
      {
        heading: "What You'll Do",
        type: 'list',
        items: [
          "Train and iterate on 1B+ parameter models across multi-GPU clusters",
          "Build and optimize distributed training pipelines (FSDP, DeepSpeed, or similar)",
          "Debug training instabilities, optimize throughput, reduce costs",
          "Work directly with research to turn architecture ideas into running experiments"
        ]
      },
      {
        heading: "What You Bring",
        type: 'list',
        items: [
          "Hands-on experience training large models (not just fine-tuning)",
          "Strong PyTorch; familiarity with distributed training frameworks",
          "Comfortable with Linux, cluster management, GPU profiling",
          "You've debugged a training run that failed at 3am — and fixed it"
        ]
      },
      {
        heading: "Nice to Have",
        type: 'list',
        items: [
          "Experience with MoE architectures or sparse models",
          "Background in HPC or cloud infrastructure (Local, AWS, GCP)",
          "Contributions to open-source ML training tools"
        ]
      },
      {
        heading: "Why BerlinAGI",
        type: 'list',
        items: [
          "Early team at a European frontier AI lab",
          "Real compute, real experiments — not just paper writing",
          "Berlin-based, building something different"
        ]
      }
    ],
    applyEmail: "jobs@berlinagi.com",
    applyNote: "Send CV + brief note on your largest training run"
  }
];

// --- Components ---

const JobCard: React.FC<{ job: Job; isExpanded: boolean; onToggle: () => void; onApply: () => void }> = ({
  job,
  isExpanded,
  onToggle,
  onApply
}) => {
  return (
    <div className="mb-4">
      <button
        onClick={onToggle}
        className="w-full bg-warm-gray border border-soft-gray rounded-lg p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-berlin-blue/50"
        aria-expanded={isExpanded}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="text-left flex-grow">
            <h3 className="font-display font-semibold text-xl text-charcoal mb-2">
              {job.title}
            </h3>
            <p className="font-sans text-sm text-slate-gray">
              {job.location} · {job.type} · {job.start}
            </p>
            {!isExpanded && (
              <p className="font-sans text-base text-slate-gray mt-3">
                {job.summary}
              </p>
            )}
          </div>
          <div className="flex-shrink-0">
            <ChevronDown
              size={24}
              className={`text-berlin-blue transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              strokeWidth={1.5}
            />
          </div>
        </div>
      </button>

      {isExpanded && (
        <div className="bg-warm-gray border border-soft-gray border-t-0 rounded-b-lg p-6 pt-0 animate-in slide-in-from-top-2 duration-250">
          <div className="pt-6 border-t border-soft-gray/50 mt-2">
            {job.sections.map((section, idx) => (
              <div key={idx} className={idx > 0 ? 'mt-6' : ''}>
                <h4 className="font-display font-semibold text-lg text-charcoal mb-3">
                  {section.heading}
                </h4>

                {section.type === 'list' && section.items ? (
                  <ul className="space-y-2 ml-5">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="font-sans text-base text-charcoal leading-relaxed flex">
                        <span className="text-berlin-blue mr-3">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="font-sans text-base text-charcoal leading-[1.6]">
                    {section.content}
                  </p>
                )}
              </div>
            ))}

            {/* Apply Button */}
            <div className="mt-8 pt-6 border-t border-soft-gray/50">
              <button
                onClick={onApply}
                className="bg-berlin-blue text-white font-medium text-sm px-6 py-3 rounded-md hover:bg-[#244A73] transition-colors"
              >
                Apply →
              </button>
              <p className="font-sans text-sm text-slate-gray italic mt-2">
                Fill out our application form
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Main Component ---

export default function JobsPage() {
  const [expandedJobId, setExpandedJobId] = useState<number | null>(null);
  const [applicationModalOpen, setApplicationModalOpen] = useState(false);
  const [generalInquiryModalOpen, setGeneralInquiryModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const toggleJob = (jobId: number) => {
    setExpandedJobId(expandedJobId === jobId ? null : jobId);
  };

  const handleApply = (job: Job) => {
    setSelectedJob(job);
    setApplicationModalOpen(true);
  };

  return (
    <div className="bg-warm-white min-h-screen pt-32 pb-20">
      <Container className="max-w-[800px]">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="font-sans text-sm font-medium text-berlin-blue hover:text-charcoal transition-colors"
          >
            ← Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <header className="mb-12">
          <h1 className="font-display font-semibold text-5xl text-charcoal mb-4">
            Jobs
          </h1>
          <p className="font-sans text-xl text-slate-gray mb-8">
            Help build Europe's next frontier AI lab
          </p>
          <hr className="border-t border-soft-gray" />
        </header>

        {/* Introduction */}
        <div className="mb-12 max-w-[720px]">
          <p className="font-sans text-base text-charcoal leading-[1.7] mb-4">
            We're a small team building modular AI architectures in Berlin. We value clarity over hype, shipping over talking, and people who've done the hard work of making things run at scale.
          </p>
          <p className="font-sans text-base text-charcoal leading-[1.7]">
            If you're interested in joining early and shaping how we build, read on.
          </p>
        </div>

        {/* Open Positions */}
        <section className="mb-16">
          <h2 className="font-display font-semibold text-3xl text-charcoal mb-6">
            Open Positions
          </h2>

          {jobs.length > 0 ? (
            jobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                isExpanded={expandedJobId === job.id}
                onToggle={() => toggleJob(job.id)}
                onApply={() => handleApply(job)}
              />
            ))
          ) : (
            <div className="py-12 text-center">
              <p className="font-sans text-lg text-charcoal mb-2">
                No open positions right now.
              </p>
              <p className="font-sans text-base text-slate-gray">
                We're still building. Follow us or check back soon.
              </p>
            </div>
          )}
        </section>

        {/* General Application */}
        <section className="bg-warm-gray p-8 rounded-lg border border-soft-gray">
          <h3 className="font-display font-semibold text-xl text-charcoal mb-3">
            Don't see your role?
          </h3>
          <p className="font-sans text-base text-slate-gray mb-4 leading-relaxed">
            We're always interested in hearing from exceptional people. If you think you can contribute to what we're building, reach out.
          </p>
          <button
            onClick={() => setGeneralInquiryModalOpen(true)}
            className="font-sans text-base font-medium text-berlin-blue hover:underline"
          >
            Get in touch →
          </button>
        </section>

        {/* Application Modals */}
        <ApplicationModal
          isOpen={applicationModalOpen}
          onClose={() => setApplicationModalOpen(false)}
          jobTitle={selectedJob?.title}
        />
        <ApplicationModal
          isOpen={generalInquiryModalOpen}
          onClose={() => setGeneralInquiryModalOpen(false)}
          isGeneralInquiry={true}
        />
      </Container>
    </div>
  );
}
