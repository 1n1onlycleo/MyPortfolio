export type NavLink = {
  label: string;
  href: string;
};

export type HeroMetric = {
  value: string;
  label: string;
  note: string;
};

export type Project = {
  title: string;
  summary: string;
  impact: string;
  stack: string[];
  href: string;
};

export type Capability = {
  title: string;
  description: string;
};

export type Experience = {
  period: string;
  role: string;
  company: string;
  summary: string;
  highlights: string[];
};

export type Contact = {
  label: string;
  value: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Story", href: "#story" },
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export const heroMetrics: HeroMetric[] = [
  {
    value: "3D-first",
    label: "Portfolio direction",
    note: "Built to feel spatial, responsive, and product-ready.",
  },
  {
    value: "Fast shipping",
    label: "Execution style",
    note: "From concept to production-grade frontend with minimal drag.",
  },
  {
    value: "Editable",
    label: "Template structure",
    note: "All copy and showcase content lives in one file for quick updates.",
  },
];

export const profile = {
  name: "Sanjay Chang",
  role: "Creative Technologist",
  intro: "I design portfolio experiences that feel like interfaces from the near future.",
  headline:
    "A 3D portfolio built to present product thinking, motion craft, and engineering range in one surface.",
  summary:
    "I focus on interfaces that feel composed rather than assembled: clear systems, cinematic motion, and frontend architecture that still holds up under real product pressure.",
  focus:
    "Currently exploring branded 3D web experiences, interactive storytelling, and UI systems that balance visual ambition with practical performance.",
  principles: [
    "Narrative first: each section should explain value before visual detail.",
    "Motion with purpose: depth cues and animation should reinforce hierarchy.",
    "Engineering discipline: strong UI only matters if it stays maintainable.",
  ],
  primaryCta: {
    label: "Start a project",
    href: "mailto:1n1onlycleo@gmail.com",
  },
  secondaryCta: {
    label: "View GitHub",
    href: "https://github.com/",
  },
  contacts: [
    {
      label: "Email",
      value: "1n1onlycleo@gmail.com",
      href: "mailto:1n1onlycleo@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "/in/sanjay",
      href: "https://www.linkedin.com/",
    },
    {
      label: "GitHub",
      value: "@sanjay",
      href: "https://github.com/",
    },
  ] satisfies Contact[],
};

export const projects: Project[] = [
  {
    title: "Nebula Commerce",
    summary:
      "Reimagined a premium commerce landing flow with layered motion, ambient 3D cues, and a design system tuned for campaign velocity.",
    impact:
      "Structured as a case study placeholder for conversion lifts, launch speed, or design system adoption metrics.",
    stack: ["React", "Three.js", "Design Systems"],
    href: "#contact",
  },
  {
    title: "Signal Ops Dashboard",
    summary:
      "Built an operations interface for dense real-time information, using spatial grouping and strong typography to reduce scan time.",
    impact:
      "Use this slot for a project where you improved clarity, workflow efficiency, or decision-making speed.",
    stack: ["TypeScript", "Data Viz", "Product UI"],
    href: "#contact",
  },
  {
    title: "Pulse Studio Site",
    summary:
      "Developed a brand-forward marketing site that mixed editorial pacing with immersive visuals, optimized for both storytelling and performance.",
    impact:
      "Ideal for showcasing a launch, rebrand, or client engagement with visible business outcomes.",
    stack: ["Vite", "Animation", "Performance"],
    href: "#contact",
  },
];

export const capabilities: Capability[] = [
  {
    title: "Immersive Frontend",
    description:
      "3D scenes, layered motion, and interaction patterns that add depth without overwhelming the core message.",
  },
  {
    title: "Product Thinking",
    description:
      "Interfaces shaped around user intent, decision points, and the operational reality behind each screen.",
  },
  {
    title: "Design Systems",
    description:
      "Reusable UI foundations that let teams move quickly while keeping visual quality and consistency intact.",
  },
  {
    title: "Performance Discipline",
    description:
      "Animation and visuals tuned with restraint so the site still feels fast, responsive, and deployable.",
  },
];

export const experience: Experience[] = [
  {
    period: "Now",
    role: "Independent Builder",
    company: "Portfolio / Client Work",
    summary:
      "Designing a presence that combines polished interaction with a clear narrative around what I can ship.",
    highlights: [
      "Refine this into your current freelance, contract, or full-time role.",
      "Keep the bullets outcome-oriented rather than responsibility-heavy.",
    ],
  },
  {
    period: "Previous",
    role: "Frontend Engineer",
    company: "Product Team",
    summary:
      "Placeholder slot for a role where you improved UX quality, shipping velocity, or design-system maturity.",
    highlights: [
      "Swap in measurable results wherever possible.",
      "Highlight collaboration with design, product, and engineering.",
    ],
  },
  {
    period: "Earlier",
    role: "Creative Technologist",
    company: "Studio / Agency",
    summary:
      "Useful for showcasing brand work, campaign launches, or interactive prototypes that widened your range.",
    highlights: [
      "Showcase the kind of work you want more of.",
      "Keep older entries short and directional.",
    ],
  },
];
