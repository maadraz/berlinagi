'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { Container } from '../layout/Container';
import { H2, Body } from '../typography/Typography';
import { X, Linkedin, GraduationCap, Github } from 'lucide-react';

// --- Types ---

interface Publication {
  title: string;
  venue: string;
  year: number;
  url?: string | null;
}

interface TeamMemberLinks {
  scholar?: string | null;
  linkedin?: string | null;
  github?: string | null;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  photo: string | null;
  initials: string;
  oneLiner: string;
  expertise: string[];
  bio: string;
  previously: string | null;
  achievements: string[];
  publications: Publication[];
  links: TeamMemberLinks;
}

// --- Data ---

const coreTeam: TeamMember[] = [
  {
    id: 1,
    name: "Muhammad ElNokrashy",
    role: "ML Research Lead",
    photo: "/images/team/muhammad-elnokrashy.jpeg",
    initials: "ME",
    oneLiner: "AI architecture research at Microsoft, ACL publications",
    expertise: ["Foundation Models", "LLM Architectures", "Multilingual NLP"],
    bio: "Leads architecture research at BerlinAGI. Focus on modular approaches to scaling intelligence, with published work on layer fusion methods and cultural alignment in large language models.",
    previously: "Microsoft, American University in Cairo",
    achievements: [
      // "Designed novel Depth-Wise Attention method for efficient model adaptation",
      // "Research on LLM cultural alignment across languages and regions",
      // "Adapted transformer architectures for multilingual zero-shot transfer"
    ],
    publications: [
      { title: "Investigating Cultural Alignment of Large Language Models", venue: "ACL", year: 2024, url: "https://arxiv.org/abs/2402.13231" },
      { title: "Language Tokens: Zero-Shot Multilingual Translation", venue: "AMTA", year: 2022, url: "https://arxiv.org/abs/2208.05852" },
      { title: "Depth-Wise Attention: Layer Fusion for Data-Efficient Classification", venue: "arXiv", year: 2022, url: "https://arxiv.org/abs/2209.15168" }
    ],
    links: {
      linkedin: "https://www.linkedin.com/in/muhammad-elnokrashy/",
      scholar: "https://scholar.google.com/citations?user=XXXXXX"
    }
  },
  {
    id: 2,
    name: "Mahmoud Draz",
    role: "Founder & Domain Expert",
    photo: "/images/team/mahmoud-draz.jpg",
    initials: "MD",
    oneLiner: "Distributed AI research at TU Berlin, founder of EnergyAI",
    expertise: ["Distributed AI", "Research-to-Product"],
    bio: "Bridges research and industry at BerlinAGI. PhD researcher at TU Berlin's DAI-Labor (Germany's largest distributed AI laboratory), founder of EnergyAI Berlin GmbH, with experience at Accenture and Volkswagen.",
    previously: "TU Berlin DAI-Labor, EnergyAI (Founder), Accenture, Volkswagen, Hubject",
    achievements: [
      // "Founded EnergyAI Berlin GmbH — AI startup that builds AI native operating system for energy networks",
      // "Leads national and EU research projects bridging research and industry",
      // "Developed Master's course on ML and optimization for energy systems"
    ],
    publications: [
      { title: "Probabilistic Risk Assessment in Power Systems with High Wind Energy Penetration", venue: "IEEE", year: 2024, url: "https://ieeexplore.ieee.org/document/10684197" },
      { title: "Optimal Energy Supply Scheduling for a Single Household: Integrating Machine Learning for Power Forecasting", venue: "ISGT Europe", year: 2019, url: "https://ieeexplore.ieee.org/abstract/document/8905536" }
    ],
    links: {
      linkedin: "https://www.linkedin.com/in/mdraz/",
      scholar: "https://scholar.google.com/citations?user=_498YPAAAAAJ"
    }
  },
  {
    id: 3,
    name: "Eyad Salama",
    role: "Inference & Systems",
    photo: "/images/team/eyad-salama.jpg",
    initials: "ES",
    oneLiner: "Transformer inference engines at Microsoft, shipped to 500M+ users",
    expertise: ["LLM Inference", "C++ Systems", "Performance Optimization"],
    bio: "Works on inference optimization at BerlinAGI. At Microsoft, built and optimized the NLP inference engine powering SwiftKey, Windows keyboard, and Samsung — serving 500M+ users with transformer-based models.",
    previously: "Microsoft (SwiftKey NLP Engine)",
    achievements: [
      // "Adapted production inference engine for GPT-2 and modern transformer architectures",
      // "Achieved 15% reduction in inference latency through performance optimization",
      // "Improved prediction accuracy by 5% via hyperparameter optimization tooling"
    ],
    publications: [],
    links: {
      linkedin: "https://www.linkedin.com/in/esalama/"
    }
  },
  {
    id: 4,
    name: "David Zumaquero",
    role: "Data & AI Engineering",
    photo: "/images/team/david-zumaquero.jpg",
    initials: "DZ",
    oneLiner: "Scalable data and AI pipelines, Mathematics background",
    expertise: ["Data Pipelines", "ML Infrastructure"],
    bio: "Builds data infrastructure at BerlinAGI. 5+ years building scalable AI solutions with Databricks, Spark, and Azure. Strong mathematical foundation with Master's in Mathematics from Interuniversity of Andalucía.",
    previously: "Accenture & PWC",
    achievements: [
      // "Implements scalable data pipelines for AI systems using Databricks and Spark",
      // "Master's degree in Mathematics — brings rigorous analytical thinking"
    ],
    publications: [],
    links: {
      linkedin: "https://www.linkedin.com/in/davidzuma/",
    }
  },
  {
    id: 5,
    name: "Mustafa Bahaaeldin",
    role: "Platform Engineering",
    photo: "/images/team/mustafa-bahaaeldin.jpg",
    initials: "MB",
    oneLiner: "Full-stack systems and database architecture",
    expertise: ["Full-Stack", "Database", "API Design"],
    bio: "Builds the platform infrastructure at BerlinAGI. Experience in full-stack development, database architecture, and backend systems that enable rapid prototyping and production deployment.",
    previously: "Mercedes-Benz, Valeo",
    achievements: [],
    publications: [],
    links: {
      linkedin: "https://www.linkedin.com/in/mustafa-bahaaeldin/"
    }
  },
  {
    id: 6,
    name: "Anna Gulueva",
    role: "Operations & Design",
    photo: "/images/team/anna-gulueva.jpg",
    initials: "AG",
    oneLiner: "Die-hard entrepreneur since age 20, building AI that people love to use",
    expertise: ["Operations", "User Experience", "Stakeholder"],
    bio: "Entrepreneur who has never worked as an employee. Started in the beauty industry and brings a practical, user-first mindset to BerlinAGI. Ensures our technology is not just powerful, but loved and trusted by real users. Leads operations, product experience, and go-to-market strategy — translating technical innovation into products people actually want to use.",
    previously: "Inanna GmbH (Founder & CEO), ESMT Berlin Women's Leadership Excellence",
    achievements: [
      // "Decade of independent entrepreneurship across beauty and tech industries",
      // "Built premium, user-centric businesses from the ground up",
      // "Practical-first approach: convince users before convincing investors"
    ],
    publications: [],
    links: {
      linkedin: "https://www.linkedin.com/in/anna-gulueva-241386251/"
    }
  }
];

const advisors: TeamMember[] = [
  {
    id: 7,
    name: "Prof. Brijnesh Jain",
    role: "Scientific Advisor — Mathematical Foundations",
    photo: null,
    initials: "BJ",
    oneLiner: " ML research and non-Euclidean learning, 50+ publications",
    expertise: ["Graph Machine Learning", "Non-Euclidean Data", "Clustering Theory"],
    bio: "Advises on mathematical foundations of shared embedding spaces and expert clustering. Professor at OTH Regensburg with PhD from TU Berlin. Leading researcher in statistical pattern recognition on non-Euclidean data.",
    previously: "OTH Regensburg (Professor), TU Berlin (PhD)",
    achievements: [
      // "50+ publications in machine learning theory",
      // "Pioneering work on graph space analysis and structured data learning"
    ],
    publications: [
      { title: "Statistical Graph Space Analysis", venue: "Pattern Recognition", year: 2016, url: null },
      { title: "Central Clustering of Attributed Graphs", venue: "Machine Learning", year: 2004, url: null }
    ],
    links: {
      linkedin: "https://www.linkedin.com/in/brijnesh-jain-745085291/",
      scholar: null
    }
  },
  {
    id: 8,
    name: "Dr. Mikhail Lipatov",
    role: "Scientific Advisor — Quantitative Modeling",
    photo: null,
    initials: "ML",
    oneLiner: "Statistical modeling of complex adaptive systems, studied and taught at Harvard, Stanford, and University of California",
    expertise: ["Statistical Modeling", "Population Dynamics", "Computational Methods"],
    bio: "Advises on quantitative methods and dynamics of expert populations. Postdoctoral Scholar at University of Tennessee, formerly Stanford University. Brings rigorous statistical methodology applicable to expert routing and knowledge flow analysis.",
    previously: "Harvard, Stanford, and University of California",
    achievements: [
      // "Co-authored paper with 799 citations on adaptive dynamics",
      // "Co-developed widely-used Drosophila Recombination Rate Calculator"
    ],
    publications: [
      { title: "Coevolution of network and attitudes under competing propaganda machines", venue: "Nature", year: 2025, url: "https://www.nature.com/articles/s44260-025-00033-3" }
    ],
    links: {
      scholar: "https://scholar.google.com/citations?user=nQqrAqsAAAAJ"
    }
  }
];

// --- Components ---

const TeamCard: React.FC<{ member: TeamMember; onClick: () => void }> = ({ member, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-start text-left w-full h-full p-8 bg-warm-white border border-soft-gray hover:border-berlin-blue/30 rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-berlin-blue/50"
      aria-label={`View details for ${member.name}`}
    >
      {/* Avatar */}
      <div className="w-[100px] h-[100px] rounded-full bg-soft-gray flex items-center justify-center mb-6 overflow-hidden">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="font-display font-bold text-[32px] text-berlin-blue">
            {member.initials}
          </span>
        )}
      </div>

      {/* Name & Role */}
      <h3 className="font-display font-semibold text-lg text-charcoal mb-1">
        {member.name}
      </h3>
      <span className="font-sans text-sm text-berlin-blue mb-3 block">
        {member.role}
      </span>

      {/* One-liner */}
      <p className="font-sans text-sm text-slate-gray italic mb-4 leading-relaxed">
        {member.oneLiner}
      </p>

      {/* Expertise Tags (max 3) */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {member.expertise.slice(0, 3).map((tag, idx) => (
          <span
            key={idx}
            className="inline-block px-2.5 py-1 rounded-xl bg-[#E8F0F7] text-berlin-blue text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </button>
  );
};

const TeamModal = ({ member, onClose }: { member: TeamMember; onClose: () => void }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Prevent body scroll while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      // Restore original overflow
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Don't render on server, wait for client mount
  if (!mounted) return null;

  const modalContent = (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-charcoal/40 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Modal Content - centered in viewport with max height */}
      <div
        className="relative bg-warm-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl animate-in zoom-in-95 duration-250 border border-soft-gray"
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

        <div className="p-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left: Avatar & Links */}
            <div className="flex-shrink-0 flex flex-col items-start gap-6">
              <div className="w-[100px] h-[100px] rounded-full bg-soft-gray flex items-center justify-center overflow-hidden">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-display font-bold text-[32px] text-berlin-blue">
                    {member.initials}
                  </span>
                )}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {member.links?.scholar && (
                  <a
                    href={member.links.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-gray hover:text-berlin-blue transition-colors"
                    title="Google Scholar"
                  >
                    <GraduationCap size={20} strokeWidth={1.5} />
                  </a>
                )}
                {member.links?.linkedin && (
                  <a
                    href={member.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-gray hover:text-berlin-blue transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin size={20} strokeWidth={1.5} />
                  </a>
                )}
                {member.links?.github && (
                  <a
                    href={member.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-gray hover:text-berlin-blue transition-colors"
                    title="GitHub"
                  >
                    <Github size={20} strokeWidth={1.5} />
                  </a>
                )}
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex-grow space-y-6">
              {/* Header */}
              <div>
                <h3 className="font-display font-semibold text-3xl text-charcoal mb-2">
                  {member.name}
                </h3>
                <span className="font-sans text-base text-berlin-blue block mb-2">
                  {member.role}
                </span>
                {member.previously && (
                  <p className="font-sans text-sm text-slate-gray">
                    Previously: {member.previously}
                  </p>
                )}
              </div>

              {/* Bio */}
              <p className="font-sans text-base text-charcoal leading-[1.7]">
                {member.bio}
              </p>

              {/* Achievements */}
              {member.achievements.length > 0 && (
                <div>
                  <h4 className="font-display font-semibold text-sm text-charcoal mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {member.achievements.map((achievement, idx) => (
                      <li key={idx} className="font-sans text-sm text-charcoal leading-relaxed flex">
                        <span className="text-berlin-blue mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Expertise Tags */}
              <div>
                <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-gray mb-3">
                  Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-block px-3 py-1 rounded-xl bg-[#E8F0F7] text-berlin-blue text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Publications */}
              {member.publications.length > 0 && (
                <div className="pt-6 border-t border-soft-gray">
                  <h4 className="font-display font-semibold text-sm text-charcoal mb-4">
                    Selected Publications
                  </h4>
                  <ul className="space-y-3">
                    {member.publications.map((pub, idx) => (
                      <li key={idx} className="text-sm">
                        {pub.url ? (
                          <a
                            href={pub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-charcoal font-medium hover:underline hover:text-berlin-blue transition-colors"
                          >
                            {pub.title}
                          </a>
                        ) : (
                          <span className="block text-charcoal font-medium">
                            {pub.title}
                          </span>
                        )}
                        <span className="text-slate-gray">
                          {pub.venue}, {pub.year}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render modal via portal to document.body to escape transform context
  return createPortal(modalContent, document.body);
};

export const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Sort team members alphabetically by first name
  const sortedCoreTeam = [...coreTeam].sort((a, b) => {
    const firstNameA = a.name.split(' ')[0];
    const firstNameB = b.name.split(' ')[0];
    return firstNameA.localeCompare(firstNameB);
  });

  const sortedAdvisors = [...advisors].sort((a, b) => {
    const firstNameA = a.name.split(' ')[0];
    const firstNameB = b.name.split(' ')[0];
    return firstNameA.localeCompare(firstNameB);
  });

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedMember(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="team" className="py-24 bg-warm-white scroll-mt-20">
      <Container>
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <span className="block text-berlin-blue font-semibold tracking-widest uppercase text-sm mb-6">
            Team
          </span>
          <H2 className="mb-6">
            Built by researchers and engineers from leading AI labs
          </H2>
          <Body className="text-slate-gray">
            Our team combines frontier ML research with production systems experience and startup execution.
          </Body>
        </div>

        {/* Core Team */}
        <div className="mb-16">
          <h3 className="font-display font-semibold text-2xl text-charcoal mb-8">
            Core Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedCoreTeam.map((member) => (
              <TeamCard
                key={member.id}
                member={member}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div>

        {/* Scientific Advisors */}
        {/* <div>
          <h3 className="font-display font-semibold text-2xl text-charcoal mb-8">
            Scientific Advisors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sortedAdvisors.map((member) => (
              <TeamCard
                key={member.id}
                member={member}
                onClick={() => setSelectedMember(member)}
              />
            ))}
          </div>
        </div> */}

        {/* Hiring Banner */}
        <div className="mt-12 bg-warm-gray p-6 rounded-lg border border-soft-gray">
          <p className="font-sans text-base text-charcoal">
            We're building the team. Interested in joining?{' '}
            <Link
              href="/jobs"
              className="text-berlin-blue font-medium hover:underline"
            >
              See opportunities →
            </Link>
          </p>
        </div>

        {/* Modal */}
        {selectedMember && (
          <TeamModal
            member={selectedMember}
            onClose={() => setSelectedMember(null)}
          />
        )}
      </Container>
    </section>
  );
};
