import React, { useState, useEffect } from 'react';
import { Container } from '../layout/Container';
import { H2, Body } from '../typography/Typography';
import { X, Linkedin, Globe, GraduationCap } from 'lucide-react';

// --- Types ---

interface Publication {
  title: string;
  venue: string;
  year: number;
  url?: string;
}

interface TeamMemberLinks {
  scholar?: string;
  linkedin?: string;
  website?: string;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  initials: string;
  expertise: string[];
  bio: string;
  background: string;
  publications?: Publication[];
  links?: TeamMemberLinks;
}

// --- Data ---

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "ML Research",
    role: "Core Research",
    initials: "ML",
    expertise: ["Model Architecture", "Training Efficiency", "Reasoning"],
    bio: "Focused on advancing the frontiers of modular intelligence. Designing architectures that separate reasoning from knowledge to create more efficient, adaptable systems.",
    background: "Background: Top ML Research Labs",
    publications: [
      { title: "Modular Architectures for AGI", venue: "NeurIPS", year: 2024 },
      { title: "Sparse Expert Routing", venue: "ICML", year: 2023 }
    ],
    links: { scholar: "#", linkedin: "#" }
  },
  {
    id: 2,
    name: "Data Engineering",
    role: "Data Systems",
    initials: "DE",
    expertise: ["Data Pipelines", "Vector Databases", "Data Curation"],
    bio: "Building robust pipelines for massive datasets. Ensuring data quality, lineage, and efficient retrieval for training and inference is central to our approach.",
    background: "Background: Data Infrastructure at Scale",
    links: { linkedin: "#" }
  },
  {
    id: 3,
    name: "Domain Expert",
    role: "Applied Knowledge",
    initials: "DX",
    expertise: ["Legal Tech", "Medical AI", "Scientific Computing"],
    bio: "Encoding deep vertical expertise into independent modules. Bridging the gap between general AI capabilities and specific professional requirements.",
    background: "Background: Industry Specialization",
    links: { linkedin: "#" }
  },
  {
    id: 4,
    name: "Software & Database",
    role: "Core Engineering",
    initials: "SD",
    expertise: ["Distributed Systems", "SQL/NoSQL", "API Design"],
    bio: "Architecting the robust software layer that powers our platform. Focusing on reliability, consistency, and seamless integration of model outputs.",
    background: "Background: High-Scale Distributed Systems",
    links: { linkedin: "#" }
  },
  {
    id: 5,
    name: "Infrastructure",
    role: "Compute & Ops",
    initials: "IN",
    expertise: ["HPC Clusters", "GPU Optimization", "Kubernetes"],
    bio: "Orchestrating massive compute resources. Optimizing hardware utilization and managing scalable training infrastructure for peak performance.",
    background: "Background: Supercomputing & Cloud",
    links: { linkedin: "#" }
  }
];

// --- Components ---

const TeamCard: React.FC<{ member: TeamMember; onClick: () => void }> = ({ member, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="group flex flex-col items-start text-left w-full h-full p-6 bg-warm-gray/30 hover:bg-warm-gray/80 border border-transparent hover:border-soft-gray rounded-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-berlin-blue/50"
      aria-label={`View bio for ${member.name}`}
    >
      {/* Avatar / Placeholder */}
      <div className="w-24 h-24 rounded-full bg-warm-gray border border-soft-gray flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
        <span className="font-display font-medium text-2xl text-slate-gray/40">
          {member.initials}
        </span>
      </div>
      
      {/* Basic Info */}
      <h3 className="font-display font-semibold text-lg text-charcoal mb-1">
        {member.name}
      </h3>
      <span className="font-mono text-xs uppercase tracking-wider text-berlin-blue mb-4">
        {member.role}
      </span>
      
      {/* Tags (Collapsed View) */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {member.expertise.slice(0, 3).map((tag, idx) => (
          <span 
            key={idx} 
            className="inline-block px-2 py-0.5 rounded bg-[#E8F0F7] text-berlin-blue text-[11px] font-medium leading-relaxed"
          >
            {tag}
          </span>
        ))}
      </div>
    </button>
  );
};

const TeamModal = ({ member, onClose }: { member: TeamMember; onClose: () => void }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-warm-white w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl animate-in zoom-in-95 duration-200 border border-soft-gray">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-gray hover:text-charcoal hover:bg-warm-gray rounded-full transition-colors z-10"
          aria-label="Close modal"
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        <div className="p-8 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
             {/* Left Column: Avatar & Links (Desktop) */}
            <div className="flex-shrink-0 flex flex-col items-center md:items-start gap-6 w-full md:w-auto">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-warm-gray border border-soft-gray flex items-center justify-center">
                <span className="font-display font-medium text-3xl text-slate-gray/40">
                  {member.initials}
                </span>
              </div>
              
              {/* Social Links Row */}
              <div className="flex gap-4">
                {member.links?.scholar && (
                  <a href={member.links.scholar} className="text-slate-gray hover:text-berlin-blue transition-colors" title="Google Scholar">
                    <GraduationCap size={20} strokeWidth={1.5} />
                  </a>
                )}
                {member.links?.linkedin && (
                  <a href={member.links.linkedin} className="text-slate-gray hover:text-berlin-blue transition-colors" title="LinkedIn">
                    <Linkedin size={20} strokeWidth={1.5} />
                  </a>
                )}
                {member.links?.website && (
                  <a href={member.links.website} className="text-slate-gray hover:text-berlin-blue transition-colors" title="Website">
                    <Globe size={20} strokeWidth={1.5} />
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="flex-grow space-y-6">
              <div>
                <h3 className="font-display font-bold text-2xl md:text-3xl text-charcoal mb-2">
                  {member.name}
                </h3>
                <span className="font-mono text-sm uppercase tracking-wider text-berlin-blue block mb-1">
                  {member.role}
                </span>
                <span className="font-sans text-sm text-slate-gray block">
                  {member.background}
                </span>
              </div>

              {/* Bio */}
              <p className="font-sans text-base md:text-lg text-charcoal leading-relaxed">
                {member.bio}
              </p>

              {/* Expertise Tags (Expanded) */}
              <div>
                <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-slate-gray mb-3">
                  Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="inline-block px-3 py-1 rounded bg-[#E8F0F7] text-berlin-blue text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Publications (Optional) */}
              {member.publications && member.publications.length > 0 && (
                <div className="pt-6 border-t border-soft-gray">
                   <h4 className="font-display font-bold text-sm text-charcoal mb-4">
                    Selected Publications
                  </h4>
                  <ul className="space-y-3">
                    {member.publications.map((pub, idx) => (
                      <li key={idx} className="text-sm">
                        <span className="block text-charcoal font-medium hover:underline cursor-pointer">
                          {pub.title}
                        </span>
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
};

export const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Close on Escape key
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
            Built by researchers and engineers <br /> from leading labs
          </H2>
          <Body className="text-slate-gray">
            Our team combines deep ML research with systems engineering and operational experience.
          </Body>
        </div>

        {/* Grid - Adjusted for 5 items (responsive wrap) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member) => (
            <TeamCard 
              key={member.id} 
              member={member} 
              onClick={() => setSelectedMember(member)} 
            />
          ))}
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