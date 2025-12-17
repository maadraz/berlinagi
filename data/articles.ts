export interface ArticleBlock {
  type: 'paragraph' | 'h2' | 'h3';
  content: string;
}

export interface Article {
  slug: string;
  type: 'manifesto' | 'update' | 'research';
  title: string;
  subtitle?: string;
  teaser: string;
  date?: string;
  pinned: boolean;
  content?: ArticleBlock[];
}

export const articles: Article[] = [
  {
    type: "manifesto",
    slug: "our-mission",
    title: "Our Mission",
    subtitle: "General intelligence through composition",
    teaser: "BerlinAGI builds modular architectures that scale capability through composition — not compute. This is why we exist.",
    date: "December 2025",
    pinned: true,
    content: [
      {
        type: 'h2',
        content: 'Why We Exist'
      },
      {
        type: 'paragraph',
        content: "BerlinAGI builds modular architectures for artificial general intelligence. We believe the path to AGI lies not in ever-larger monolithic models, but in systems that can dynamically integrate specialized knowledge — combining the reasoning capabilities of foundation models with the accumulated expertise of many contributors."
      },
      {
        type: 'paragraph',
        content: "Current frontier AI depends on ever-larger models, ever-larger datasets, and ever-larger compute budgets. This path concentrates capability in a handful of organizations with billions in capital. It also hits fundamental limits: more parameters don't mean more knowledge — they mean more cost, more energy, and more brittleness."
      },
      {
        type: 'paragraph',
        content: "We believe there's a better architecture."
      },
      {
        type: 'h2',
        content: 'Our Approach'
      },
      {
        type: 'paragraph',
        content: "We separate what a model knows from how it reasons."
      },
      {
        type: 'paragraph',
        content: "A core model learns to think, compose, and generate. Independently-trained expert modules encode domain knowledge. A learned adapter integrates any expert — even ones created after the core model was trained."
      },
      {
        type: 'paragraph',
        content: "The result: add new capabilities in hours, not months. No retraining. Data stays where it originates. Expertise remains attributable."
      },
      {
        type: 'paragraph',
        content: "This is not a distributed system for ideological reasons. It is an architectural choice driven by necessity. The compute and data requirements of monolithic scaling are approaching physical and economic limits. Our approach offers a tractable path to general capability: a core model that learns *how* to reason, combined with a growing network of experts that encode *what* is known."
      },
      {
        type: 'h2',
        content: 'Why Europe'
      },
      {
        type: 'paragraph',
        content: "Our architecture isn't European for political reasons — it's European because it solves European problems."
      },
      {
        type: 'paragraph',
        content: "Data that can't leave its jurisdiction can still contribute expertise. Knowledge remains attributable to its source. Compliance is structural, not bolted on. We're not trying to catch up to US or Chinese labs on their terms. We're building something different because we see a better path."
      },
      {
        type: 'paragraph',
        content: "We're based in Berlin, building with European talent, for a global future."
      },
      {
        type: 'h2',
        content: "What We're Building"
      },
      {
        type: 'paragraph',
        content: "We are developing the Modular Expert Architecture (MEA): a system where capability grows with knowledge, not with compute."
      },
      {
        type: 'paragraph',
        content: "Our near-term goal is to demonstrate that independently-trained experts can be integrated into a foundation model after training — with performance gains and no retraining cost. Our long-term goal is to prove that this compositional approach can match or exceed monolithic scaling, at a fraction of the cost."
      },
      {
        type: 'paragraph',
        content: "This is frontier AI research. It may not work. But if it does, it changes who can build general intelligence — and how."
      }
    ]
  }
  // Commented out until content is ready
  // {
  //   type: "update",
  //   slug: "sprind-funke-2025",
  //   date: "December 2025",
  //   title: "Selected for SPRIND Funke",
  //   teaser: "We're participating in SPRIND's Next Frontier AI Concepts program to develop our Modular Expert Architecture.",
  //   pinned: false,
  //   content: [
  //     { type: 'paragraph', content: "Content coming soon."}
  //   ]
  // },
  // {
  //   type: "research",
  //   slug: "architecture-paper",
  //   date: "Coming 2026",
  //   title: "Technical Paper",
  //   teaser: "Our foundational paper on Modular Expert Architecture is in preparation.",
  //   pinned: false,
  //   content: [
  //     { type: 'paragraph', content: "Content coming soon."}
  //   ]
  // }
];