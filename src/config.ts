import type { ImageMetadata } from "astro";
import profileImage from "./assets/profile.png";
import aboutImage from "./assets/about.jpg";
import type { IconName } from "./icons";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface SkillGroup {
  category: string;
  icon: IconName;
  items: string[];
}

export interface Experience {
  company: string;
  title: string;
  dateRange: string;
  location?: string;
  current?: boolean;
  summary?: string;
  bullets: string[];
  skills?: string[];
}

export interface Project {
  name: string;
  tagline?: string;
  description: string;
  highlights?: string[];
  skills: string[];
  link?: string;
  repo?: string;
  icon?: IconName;
}

export interface Research {
  title: string;
  organization: string;
  icon?: IconName;
  bullets: string[];
}

export interface Education {
  school: string;
  degree: string;
  dateRange: string;
  location?: string;
  achievements: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Language {
  name: string;
  level: string;
  /** 1–5, used for the proficiency dots */
  score: number;
}

export interface SiteConfig {
  name: string;
  fullName: string;
  title: string;
  roles: string[];
  intro: string;
  description: string;
  location: string;
  availability: string;
  accentColor: string;
  careerStartYear: number;
  profileImage: ImageMetadata;
  aboutImage?: ImageMetadata;
  resume?: string;
  social: {
    email?: string;
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  aboutMe: string[];
  skills: SkillGroup[];
  experience: Experience[];
  projects: Project[];
  research: Research[];
  education: Education[];
  certifications: Certification[];
  languages: Language[];
}

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

export const siteConfig: SiteConfig = {
  name: "João Souza",
  fullName: "João Pedro Mateus Souza",
  title: "Software Engineer · Data & AI · Machine Learning",
  // Rotated in the hero, in order
  roles: [
    "Software Engineer",
    "Full-Stack Developer",
    "Data & AI Engineer",
    "Machine Learning Enthusiast",
  ],
  intro:
    "I build end-to-end platforms with Python & Django, data pipelines that drive decisions, and LLM-powered automation that turns documents into structured data.",
  description:
    "Portfolio of João Pedro Mateus Souza — Software Engineer specialised in full-stack development, data analytics, machine learning and LLM-powered automation. Based in Niterói, Brazil, open to remote and relocation opportunities.",
  location: "Niterói, RJ, Brazil",
  availability: "Open to remote & relocation opportunities",
  accentColor: "#1d4ed8",
  careerStartYear: 2023,
  profileImage,
  aboutImage,
  // Files in /public are resolved against the site base automatically
  resume: "Joao_Pedro_Mateus_Souza_Resume.pdf",

  social: {
    email: "jpegmateussouza@gmail.com",
    linkedin: "https://linkedin.com/in/jpmsouza",
    github: "https://github.com/JpegPython",
  },

  aboutMe: [
    "I'm a final-year Computer Science student at UFF and a Software Engineer working across full-stack development, data analytics, machine learning and AI-powered automation.",
    "Today I build end-to-end platforms with Python and Django — integrating REST APIs, modelling relational databases and shipping LLM-based document analysis that turns messy financial, legal and property documents into structured, validated data.",
    "My background spans deep learning and computer vision research, data pipelines for telecom operations at Nokia, and business-process automation. I enjoy translating complex requirements into scalable, well-engineered products — and I'm looking for full-time opportunities in Software Engineering, Data, Machine Learning or AI.",
  ],

  skills: [
    {
      category: "Data & AI",
      icon: "brain",
      items: [
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Semantic Segmentation",
        "LLMs",
        "AI Agents",
        "Data Analytics",
        "KPI Design",
        "Data Cleaning & Augmentation",
        "Data Scraping",
        "Data Normalization",
        "Model Evaluation",
      ],
    },
    {
      category: "Programming & Tools",
      icon: "code",
      items: [
        "Python",
        "SQL",
        "Bash",
        "Django",
        "Flask",
        "REST APIs",
        "Docker",
        "Git",
        "Linux",
        "OpenStack",
        "Automated Testing",
      ],
    },
    {
      category: "Cloud & Infrastructure",
      icon: "cloud",
      items: ["AWS", "Azure", "Google Cloud", "Virtual Machines", "Containerization"],
    },
    {
      category: "Databases",
      icon: "database",
      items: ["PostgreSQL", "MySQL", "SQLite", "ClickHouse"],
    },
    {
      category: "Methodologies",
      icon: "layout-kanban",
      items: ["Agile", "Scrum", "Kanban", "Lean Six Sigma"],
    },
  ],

  experience: [
    {
      company: "Elevential Digital Solutions",
      title: "Full-Stack Developer",
      dateRange: "2026 – Present",
      current: true,
      summary:
        "End-to-end web platforms for clients across different business domains, with a focus on real estate credit and LLM-powered document intelligence.",
      bullets: [
        "Design and implement real estate credit origination platforms — from application intake and document processing to credit analysis and operational management.",
        "Implement LLM-based document analysis to extract, classify, validate and interpret information from financial, legal and property-related documents.",
        "Integrate external APIs from notary and property registry services, automating document retrieval, validation and real estate transaction workflows.",
        "Model business processes, data structures and system components for the scalability, maintainability and evolution of credit products.",
        "Orchestrate AI agents and LLM-assisted development workflows to support software engineering, process automation and solution delivery.",
        "Build an academic conference management platform, from product discovery and architecture to implementation, testing and deployment, working directly with stakeholders.",
      ],
      skills: ["Python", "Django", "REST APIs", "SQL", "LLMs", "AI Agents"],
    },
    {
      company: "Nokia Corporation",
      title: "Automation & Data Analytics Intern",
      dateRange: "2024 – 2026",
      summary:
        "Automation and data analytics solutions supporting strategic decision-making across telecom operations.",
      bullets: [
        "Designed and delivered end-to-end automation and data analytics solutions for telecom operations.",
        "Developed interactive dashboards and analytical tools to monitor operational KPIs and performance indicators.",
        "Built and maintained data pipelines covering scraping, cleaning, transformation and visualization.",
        "Developed web-based analytics platforms with Python (Flask), SQL and REST APIs, and modelled relational databases for analytics and governance.",
        "Shipped containerized solutions with Docker, deployed on OpenStack virtualized environments.",
        "Contributed to automation and monitoring solutions for telecommunications infrastructure across Canada.",
      ],
      skills: ["Python", "Flask", "SQL", "Docker", "OpenStack", "Data Pipelines", "Dashboards"],
    },
    {
      company: "Acceta Especialistas",
      title: "Technical Consultant & Developer",
      dateRange: "2023 – 2024",
      summary:
        "R&D and innovation consultancy supporting technology-driven projects and client proposals.",
      bullets: [
        "Co-developed the company's first internal project management and documentation platform using Django and MySQL.",
        "Authored and automated technical project descriptions and R&D reports, improving productivity and consistency.",
        "Leveraged Large Language Models to support structured technical writing and ideation.",
        "Joined client meetings, translating business requirements into technical solutions.",
      ],
      skills: ["Python", "Django", "MySQL", "LLMs"],
    },
  ],

  projects: [
    {
      name: "NFC-e API",
      tagline: "Domestic purchase data management & analytics",
      icon: "chart-dots",
      description:
        "An API that extracts, organizes and analyzes household purchase data from Brazilian electronic consumer invoices (NFC-e), integrated with SEFAZ services.",
      highlights: [
        "Serialized requests with configurable intervals and targeted retry policies for HTTP 429, server errors, network failures and unavailable invoices.",
        "Assisted workflow that accepts invoice HTML captured through a browser or WebView when CAPTCHA resolution is required.",
        "Conservative product-normalization model linking raw items to canonical records (category, brand, unit, reference quantity).",
        "Idempotent CLI routines for dry-run simulation and incremental normalization, covered by unittest suites.",
      ],
      skills: ["Python", "REST APIs", "SQL", "Docker", "Data Normalization", "Automated Testing"],
    },
    {
      name: "Semantic Image Segmentation",
      tagline: "Convolutional Neural Networks for pixel-level classification",
      icon: "brain",
      description:
        "Research project designing and training CNNs for semantic image segmentation, studying how architecture, preprocessing and training configuration affect results.",
      highlights: [
        "Designed and trained convolutional networks for pixel-level classification.",
        "Built preprocessing and data-augmentation workflows to prepare image datasets for experimentation.",
        "Evaluated segmentation performance through structured, reproducible experiments.",
      ],
      skills: ["Python", "Deep Learning", "Computer Vision", "CNNs", "Data Augmentation"],
      repo: "https://github.com/JpegPython/mlss",
    },
  ],

  research: [
    {
      title: "Scientific Initiation — Computer Vision",
      organization: "Fluminense Federal University (UFF)",
      icon: "microscope",
      bullets: [
        "Research in Deep Learning and Computer Vision, focused on semantic image segmentation.",
        "Designed and trained CNNs for pixel-level classification tasks.",
        "Hands-on experience with data preprocessing, model evaluation and experimentation workflows.",
      ],
    },
    {
      title: "PET-Telecom — Tutorial Education Program",
      organization: "Fluminense Federal University (UFF)",
      icon: "flask",
      bullets: [
        "Developed projects using Octave/MATLAB.",
        "Co-authored an educational article on Number Systems.",
      ],
    },
  ],

  education: [
    {
      school: "Fluminense Federal University (UFF)",
      degree: "B.Sc. in Computer Science",
      dateRange: "Final year",
      location: "Niterói, RJ, Brazil",
      achievements: [
        "Scientific Initiation research in Deep Learning & Computer Vision",
        "Member of PET-Telecom, the Tutorial Education Program",
      ],
    },
  ],

  certifications: [
    { name: "Data Science Foundations: Fundamentals", issuer: "LinkedIn Learning" },
    { name: "Artificial Intelligence Foundations: Thinking Machines", issuer: "LinkedIn Learning" },
    { name: "AI Foundations: Machine Learning & Deep Learning", issuer: "LinkedIn Learning" },
    { name: "Introduction to Artificial Intelligence", issuer: "LinkedIn Learning" },
    { name: "Learning Docker", issuer: "LinkedIn Learning" },
    { name: "Process Improvement Foundations", issuer: "LinkedIn Learning" },
    { name: "Developing Business Acumen", issuer: "LinkedIn Learning" },
    { name: "Leading with a Growth Mindset", issuer: "LinkedIn Learning" },
  ],

  languages: [
    { name: "Portuguese", level: "Native", score: 5 },
    { name: "English", level: "Advanced", score: 4 },
    { name: "French", level: "Beginner", score: 1 },
  ],
};
