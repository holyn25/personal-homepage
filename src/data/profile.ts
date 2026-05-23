export type ProfileLink = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  summary: string;
  highlights: string[];
};

export type ProjectItem = {
  title: string;
  role: string;
  summary: string;
  impact: string;
  stack: string[];
  href: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const profile = {
  name: "Alex Chen",
  role: "Product Engineer",
  tagline:
    "I design and ship AI-ready products, internal tools, and reliable web systems from first sketch to production.",
  location: "Remote / Shanghai",
  status: "Open to senior product engineering roles and selective consulting.",
  availability: "Available for 2026 conversations",
  email: "hello@example.com",
  links: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
    { label: "Blog", href: "https://example.com/" },
  ] satisfies ProfileLink[],
  snapshot: [
    { label: "Focus", value: "AI products, workflow systems, and web platforms" },
    { label: "Experience", value: "8+ years across 0->1 builds and scale-ups" },
    { label: "Mode", value: "Hands-on architecture, prototyping, and delivery" },
    { label: "Signal", value: "Calm execution, clear tradeoffs, durable UX" },
  ],
  experience: [
    {
      period: "2023 - Now",
      title: "Independent Product Engineer",
      company: "Studio Practice",
      summary:
        "Partner with founders and operators to turn ambiguous AI workflows into focused products with production-ready interfaces.",
      highlights: [
        "Designed multi-step research and automation tools for internal teams.",
        "Built reusable frontend systems for fast product iteration.",
        "Shaped discovery, prototyping, delivery, and launch readiness.",
      ],
    },
    {
      period: "2020 - 2023",
      title: "Senior Frontend Engineer",
      company: "B2B SaaS Platform",
      summary:
        "Led core product surfaces for data-heavy operations teams, balancing speed, reliability, and interface clarity.",
      highlights: [
        "Improved critical task completion flows with focused interaction design.",
        "Established component patterns for complex admin and reporting views.",
        "Collaborated across product, backend, data, and customer teams.",
      ],
    },
    {
      period: "2017 - 2020",
      title: "Full-Stack Developer",
      company: "Product Agency",
      summary:
        "Built polished web applications for early-stage products, from landing experiences to authenticated workspaces.",
      highlights: [
        "Delivered responsive React applications and Node-backed prototypes.",
        "Translated business requirements into shippable user journeys.",
        "Maintained performance, accessibility, and deployment quality.",
      ],
    },
  ] satisfies ExperienceItem[],
  projects: [
    {
      title: "Signal Desk",
      role: "Lead engineer",
      summary:
        "A research workspace that turns scattered notes, files, and prompts into an organized decision flow.",
      impact: "Reduced repeated research setup and made review handoffs easier.",
      stack: ["React", "TypeScript", "AI workflows", "Design systems"],
      href: "https://example.com/",
    },
    {
      title: "Ops Console",
      role: "Product engineer",
      summary:
        "A compact operations dashboard for monitoring queue health, customer issues, and daily team actions.",
      impact: "Improved scan speed for daily operators and reduced context switching.",
      stack: ["Vite", "Charts", "API integration", "Accessibility"],
      href: "https://example.com/",
    },
    {
      title: "Launch Kit",
      role: "Builder",
      summary:
        "A reusable marketing and onboarding system for launching small SaaS products with consistent quality.",
      impact: "Shortened first-release timelines without flattening brand expression.",
      stack: ["React", "Motion", "Content modeling", "Static deploy"],
      href: "https://example.com/",
    },
  ] satisfies ProjectItem[],
  skills: [
    {
      title: "Product",
      items: ["Discovery", "Prototyping", "Roadmapping", "Launch planning"],
    },
    {
      title: "Frontend",
      items: ["React", "TypeScript", "Design systems", "Motion"],
    },
    {
      title: "Systems",
      items: ["API contracts", "Data flows", "Automation", "Observability"],
    },
    {
      title: "Collaboration",
      items: ["Technical writing", "Stakeholder alignment", "Mentoring"],
    },
  ] satisfies SkillGroup[],
  contact: {
    headline: "Bring me a messy product problem.",
    body:
      "I am most useful when a team needs a builder who can clarify the system, shape the interface, and move the work into production.",
  },
};
