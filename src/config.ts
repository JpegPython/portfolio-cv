import type { ImageMetadata } from "astro";
import profileImage from "./assets/profile.png";
import aboutImage from "./assets/about.jpg";
import type { IconName } from "./icons";
import type { Lang, Localized } from "./i18n";

// ---------------------------------------------------------------------------
// Types — what components receive (all text already in the page's language)
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
// Authoring: any text (or list of text) may be a plain value shared by every
// language, or `{ en: ..., pt: ... }` when it needs translating.
// ---------------------------------------------------------------------------

type Localizable<T> = T extends ImageMetadata
  ? T
  : T extends string
    ? string extends T
      ? string | Localized<string>
      : T
    : T extends (infer E)[]
      ? Localizable<E>[] | Localized<Localizable<E>[]>
      : T extends object
        ? { [K in keyof T]: Localizable<T[K]> }
        : T;

const config: Localizable<SiteConfig> = {
  name: "João Souza",
  fullName: "João Pedro Mateus Souza",
  title: {
    en: "Software Engineer · Data & AI · Machine Learning",
    pt: "Engenheiro de Software · Dados & IA · Machine Learning",
  },
  // Rotated in the hero, in order
  roles: {
    en: ["Software Engineer", "Full-Stack Developer", "Data & AI Engineer", "Machine Learning Enthusiast"],
    pt: ["Engenheiro de Software", "Desenvolvedor Full-Stack", "Engenheiro de Dados & IA", "Entusiasta de Machine Learning"],
  },
  intro: {
    en: "I build end-to-end platforms with Python, Django & React, data pipelines that drive decisions, and LLM-powered automation that turns documents into structured data.",
    pt: "Desenvolvo plataformas de ponta a ponta com Python, Django e React, pipelines de dados que orientam decisões e automações com LLMs que transformam documentos em dados estruturados.",
  },
  description: {
    en: "Portfolio of João Pedro Mateus Souza — Software Engineer specialised in full-stack development, data analytics, machine learning and LLM-powered automation. Based in Niterói, Brazil, open to remote and relocation opportunities.",
    pt: "Portfólio de João Pedro Mateus Souza — Engenheiro de Software com foco em desenvolvimento full-stack, análise de dados, machine learning e automação com LLMs. Em Niterói (RJ), aberto a oportunidades remotas e de realocação.",
  },
  location: { en: "Niterói, RJ, Brazil", pt: "Niterói, RJ, Brasil" },
  availability: {
    en: "Open to remote & relocation opportunities",
    pt: "Aberto a vagas remotas e realocação",
  },
  accentColor: "#1d4ed8",
  careerStartYear: 2023,
  profileImage,
  aboutImage,
  // Files in /public are resolved against the site base automatically.
  // Add a Portuguese PDF later with { en: "...", pt: "..." }.
  resume: "Joao_Pedro_Mateus_Souza_Resume.pdf",

  social: {
    email: "jpegmateussouza@gmail.com",
    linkedin: "https://linkedin.com/in/jpmsouza",
    github: "https://github.com/JpegPython",
  },

  aboutMe: {
    en: [
      "I'm a final-year Computer Science student at UFF and a Software Engineer working across full-stack development, data analytics, machine learning and AI-powered automation.",
      "Today I build end-to-end platforms with Python, Django and React — integrating REST APIs, modelling relational databases and shipping LLM-based document analysis that turns messy financial, legal and property documents into structured, validated data.",
      "My background spans deep learning and computer vision research, data pipelines for telecom operations at Nokia, and business-process automation. I enjoy translating complex requirements into scalable, well-engineered products — and I'm looking for full-time opportunities in Software Engineering, Data, Machine Learning or AI.",
    ],
    pt: [
      "Sou estudante do último ano de Ciência da Computação na UFF e Engenheiro de Software, atuando com desenvolvimento full-stack, análise de dados, machine learning e automação com IA.",
      "Hoje desenvolvo plataformas de ponta a ponta com Python, Django e React — integrando APIs REST, modelando bancos de dados relacionais e entregando análise de documentos com LLMs, que transforma documentos financeiros, jurídicos e imobiliários em dados estruturados e validados.",
      "Minha trajetória passa por pesquisa em deep learning e visão computacional, pipelines de dados para operações de telecom na Nokia e automação de processos de negócio. Gosto de traduzir requisitos complexos em produtos escaláveis e bem construídos — e busco oportunidades full-time em Engenharia de Software, Dados, Machine Learning ou IA.",
    ],
  },

  skills: [
    {
      category: { en: "Data & AI", pt: "Dados & IA" },
      icon: "brain",
      items: [
        "Machine Learning",
        "Deep Learning",
        { en: "Computer Vision", pt: "Visão Computacional" },
        { en: "Semantic Segmentation", pt: "Segmentação Semântica" },
        "LLMs",
        { en: "AI Agents", pt: "Agentes de IA" },
        { en: "Data Analytics", pt: "Análise de Dados" },
        { en: "KPI Design", pt: "Definição de KPIs" },
        { en: "Data Cleaning & Augmentation", pt: "Limpeza e Aumento de Dados" },
        { en: "Data Scraping", pt: "Web Scraping" },
        { en: "Data Normalization", pt: "Normalização de Dados" },
        { en: "Model Evaluation", pt: "Avaliação de Modelos" },
      ],
    },
    {
      category: { en: "Programming & Tools", pt: "Programação & Ferramentas" },
      icon: "code",
      items: [
        "Python",
        "SQL",
        "Bash",
        "Django",
        "Flask",
        "React",
        { en: "REST APIs", pt: "APIs REST" },
        "Docker",
        "Git",
        "Linux",
        "OpenStack",
        { en: "Automated Testing", pt: "Testes Automatizados" },
      ],
    },
    {
      category: { en: "Cloud & Infrastructure", pt: "Cloud & Infraestrutura" },
      icon: "cloud",
      items: [
        "AWS",
        "Azure",
        "Google Cloud",
        { en: "Virtual Machines", pt: "Máquinas Virtuais" },
        { en: "Containerization", pt: "Conteinerização" },
      ],
    },
    {
      category: { en: "Databases", pt: "Bancos de Dados" },
      icon: "database",
      items: ["PostgreSQL", "MySQL", "SQLite", "ClickHouse"],
    },
    {
      category: { en: "Methodologies", pt: "Metodologias" },
      icon: "layout-kanban",
      items: ["Agile", "Scrum", "Kanban", "Lean Six Sigma"],
    },
  ],

  experience: [
    {
      company: "Elevential Digital Solutions",
      title: { en: "Full-Stack Developer", pt: "Desenvolvedor Full-Stack" },
      dateRange: { en: "2026 – Present", pt: "2026 – Atual" },
      current: true,
      summary: {
        en: "End-to-end web platforms with Python, Django and React for clients across different business domains, with a focus on real estate credit and LLM-powered document intelligence.",
        pt: "Plataformas web de ponta a ponta com Python, Django e React para clientes de diferentes segmentos, com foco em crédito imobiliário e inteligência documental com LLMs.",
      },
      bullets: {
        en: [
          "Design and implement real estate credit origination platforms — from application intake and document processing to credit analysis and operational management.",
          "Build full-stack features with Django on the backend and React on the frontend, backed by relational databases and REST APIs.",
          "Implement LLM-based document analysis to extract, classify, validate and interpret information from financial, legal and property-related documents.",
          "Integrate external APIs from notary and property registry services, automating document retrieval, validation and real estate transaction workflows.",
          "Model business processes, data structures and system components for the scalability, maintainability and evolution of credit products.",
          "Orchestrate AI agents and LLM-assisted development workflows to support software engineering, process automation and solution delivery.",
          "Build an academic conference management platform, from product discovery and architecture to implementation, testing and deployment, working directly with stakeholders.",
        ],
        pt: [
          "Projeto e implemento plataformas de originação de crédito imobiliário — da entrada da proposta e processamento de documentos à análise de crédito e gestão operacional.",
          "Desenvolvo funcionalidades full-stack com Django no backend e React no frontend, apoiadas em bancos de dados relacionais e APIs REST.",
          "Implemento análise de documentos com LLMs para extrair, classificar, validar e interpretar informações de documentos financeiros, jurídicos e imobiliários.",
          "Integro APIs de cartórios e registros de imóveis, automatizando a obtenção e validação de documentos e os fluxos de transações imobiliárias.",
          "Modelo processos de negócio, estruturas de dados e componentes do sistema visando escalabilidade, manutenibilidade e evolução dos produtos de crédito.",
          "Orquestro agentes de IA e fluxos de desenvolvimento assistidos por LLMs para apoiar engenharia de software, automação de processos e entrega de soluções.",
          "Desenvolvo uma plataforma de gestão de conferências acadêmicas, da descoberta de produto e arquitetura à implementação, testes e deploy, em contato direto com stakeholders.",
        ],
      },
      skills: ["Python", "Django", "React", "REST APIs", "SQL", "LLMs", { en: "AI Agents", pt: "Agentes de IA" }],
    },
    {
      company: "Nokia Corporation",
      title: { en: "Automation & Data Analytics Intern", pt: "Estagiário de Automação e Análise de Dados" },
      dateRange: "2024 – 2026",
      summary: {
        en: "Automation and data analytics solutions supporting strategic decision-making across telecom operations.",
        pt: "Soluções de automação e análise de dados para apoiar a tomada de decisão estratégica em operações de telecom.",
      },
      bullets: {
        en: [
          "Designed and delivered end-to-end automation and data analytics solutions for telecom operations.",
          "Developed interactive dashboards and analytical tools to monitor operational KPIs and performance indicators.",
          "Built and maintained data pipelines covering scraping, cleaning, transformation and visualization.",
          "Developed web-based analytics platforms with Python (Flask), SQL and REST APIs, and modelled relational databases for analytics and governance.",
          "Shipped containerized solutions with Docker, deployed on OpenStack virtualized environments.",
          "Contributed to automation and monitoring solutions for telecommunications infrastructure across Canada.",
        ],
        pt: [
          "Projetei e entreguei soluções de automação e análise de dados de ponta a ponta para operações de telecom.",
          "Desenvolvi dashboards interativos e ferramentas analíticas para monitorar KPIs operacionais e indicadores de desempenho.",
          "Construí e mantive pipelines de dados, incluindo coleta (scraping), limpeza, transformação e visualização.",
          "Desenvolvi plataformas web de análise com Python (Flask), SQL e APIs REST, e modelei bancos de dados relacionais para análise e governança.",
          "Entreguei soluções conteinerizadas com Docker, implantadas em ambientes virtualizados OpenStack.",
          "Contribuí para soluções de automação e monitoramento da infraestrutura de telecomunicações em todo o Canadá.",
        ],
      },
      skills: ["Python", "Flask", "SQL", "Docker", "OpenStack", { en: "Data Pipelines", pt: "Pipelines de Dados" }, "Dashboards"],
    },
    {
      company: "Acceta Especialistas",
      title: { en: "Technical Consultant & Developer", pt: "Consultor Técnico e Desenvolvedor" },
      dateRange: "2023 – 2024",
      summary: {
        en: "R&D and innovation consultancy supporting technology-driven projects and client proposals.",
        pt: "Consultoria de P&D e inovação, apoiando projetos de base tecnológica e propostas para clientes.",
      },
      bullets: {
        en: [
          "Co-developed the company's first internal project management and documentation platform using Django and MySQL.",
          "Authored and automated technical project descriptions and R&D reports, improving productivity and consistency.",
          "Leveraged Large Language Models to support structured technical writing and ideation.",
          "Joined client meetings, translating business requirements into technical solutions.",
        ],
        pt: [
          "Co-desenvolvi a primeira plataforma interna de gestão de projetos e documentação da empresa, com Django e MySQL.",
          "Redigi e automatizei descrições técnicas de projetos e relatórios de P&D, aumentando produtividade e consistência.",
          "Utilizei Large Language Models (LLMs) para apoiar a redação técnica estruturada e a geração de ideias.",
          "Participei de reuniões com clientes, traduzindo requisitos de negócio em soluções técnicas.",
        ],
      },
      skills: ["Python", "Django", "MySQL", "LLMs"],
    },
  ],

  projects: [
    {
      name: "NFC-e API",
      tagline: {
        en: "Domestic purchase data management & analytics",
        pt: "Gestão e análise de dados de compras domésticas",
      },
      icon: "chart-dots",
      description: {
        en: "An API that extracts, organizes and analyzes household purchase data from Brazilian electronic consumer invoices (NFC-e), integrated with SEFAZ services.",
        pt: "API que extrai, organiza e analisa dados de compras domésticas a partir de Notas Fiscais de Consumidor Eletrônicas (NFC-e), integrada aos serviços da SEFAZ.",
      },
      highlights: {
        en: [
          "Serialized requests with configurable intervals and targeted retry policies for HTTP 429, server errors, network failures and unavailable invoices.",
          "Assisted workflow that accepts invoice HTML captured through a browser or WebView when CAPTCHA resolution is required.",
          "Conservative product-normalization model linking raw items to canonical records (category, brand, unit, reference quantity).",
          "Idempotent CLI routines for dry-run simulation and incremental normalization, covered by unittest suites.",
        ],
        pt: [
          "Requisições serializadas com intervalos configuráveis e políticas de retry específicas para HTTP 429, erros de servidor, falhas de rede e notas indisponíveis.",
          "Fluxo assistido que aceita o HTML da nota capturado por navegador ou WebView quando é preciso resolver um CAPTCHA.",
          "Modelo conservador de normalização de produtos, que vincula os itens originais a registros canônicos (categoria, marca, unidade, quantidade de referência).",
          "Rotinas de linha de comando idempotentes para simulação (dry-run) e normalização incremental, cobertas por testes com unittest.",
        ],
      },
      skills: [
        "Python",
        { en: "REST APIs", pt: "APIs REST" },
        "SQL",
        "Docker",
        { en: "Data Normalization", pt: "Normalização de Dados" },
        { en: "Automated Testing", pt: "Testes Automatizados" },
      ],
      // Private repository — intentionally no link
    },
    {
      name: { en: "Semantic Image Segmentation", pt: "Segmentação Semântica de Imagens" },
      tagline: {
        en: "Convolutional Neural Networks for pixel-level classification",
        pt: "Redes Neurais Convolucionais para classificação em nível de pixel",
      },
      icon: "brain",
      description: {
        en: "Research project designing and training CNNs for semantic image segmentation, studying how architecture, preprocessing and training configuration affect results.",
        pt: "Projeto de pesquisa em que projetei e treinei CNNs para segmentação semântica de imagens, estudando como arquitetura, pré-processamento e configuração de treino afetam os resultados.",
      },
      highlights: {
        en: [
          "Designed and trained convolutional networks for pixel-level classification.",
          "Built preprocessing and data-augmentation workflows to prepare image datasets for experimentation.",
          "Evaluated segmentation performance through structured, reproducible experiments.",
        ],
        pt: [
          "Projetei e treinei redes convolucionais para classificação em nível de pixel.",
          "Construí fluxos de pré-processamento e aumento de dados para preparar datasets de imagens.",
          "Avaliei o desempenho da segmentação por meio de experimentos estruturados e reprodutíveis.",
        ],
      },
      skills: [
        "Python",
        "Deep Learning",
        { en: "Computer Vision", pt: "Visão Computacional" },
        "CNNs",
        { en: "Data Augmentation", pt: "Aumento de Dados" },
      ],
      repo: "https://github.com/JpegPython/mlss",
    },
  ],

  research: [
    {
      title: {
        en: "Scientific Initiation — Computer Vision",
        pt: "Iniciação Científica — Visão Computacional",
      },
      organization: { en: "Fluminense Federal University (UFF)", pt: "Universidade Federal Fluminense (UFF)" },
      icon: "microscope",
      bullets: {
        en: [
          "Research in Deep Learning and Computer Vision, focused on semantic image segmentation.",
          "Designed and trained CNNs for pixel-level classification tasks.",
          "Hands-on experience with data preprocessing, model evaluation and experimentation workflows.",
        ],
        pt: [
          "Pesquisa em Deep Learning e Visão Computacional, com foco em segmentação semântica de imagens.",
          "Projetei e treinei CNNs para tarefas de classificação em nível de pixel.",
          "Experiência prática com pré-processamento de dados, avaliação de modelos e fluxos de experimentação.",
        ],
      },
    },
    {
      title: {
        en: "PET-Telecom — Tutorial Education Program",
        pt: "PET-Telecom — Programa de Educação Tutorial",
      },
      organization: { en: "Fluminense Federal University (UFF)", pt: "Universidade Federal Fluminense (UFF)" },
      icon: "flask",
      bullets: {
        en: ["Developed projects using Octave/MATLAB.", "Co-authored an educational article on Number Systems."],
        pt: ["Desenvolvi projetos com Octave/MATLAB.", "Coautor de um artigo educacional sobre Sistemas de Numeração."],
      },
    },
  ],

  education: [
    {
      school: { en: "Fluminense Federal University (UFF)", pt: "Universidade Federal Fluminense (UFF)" },
      degree: { en: "B.Sc. in Computer Science", pt: "Bacharelado em Ciência da Computação" },
      dateRange: { en: "Final year", pt: "Último ano" },
      location: { en: "Niterói, RJ, Brazil", pt: "Niterói, RJ, Brasil" },
      achievements: {
        en: [
          "Scientific Initiation research in Deep Learning & Computer Vision",
          "Member of PET-Telecom, the Tutorial Education Program",
        ],
        pt: [
          "Iniciação Científica em Deep Learning e Visão Computacional",
          "Membro do PET-Telecom, Programa de Educação Tutorial",
        ],
      },
    },
  ],

  // Official course titles, kept in English
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
    { name: { en: "Portuguese", pt: "Português" }, level: { en: "Native", pt: "Nativo" }, score: 5 },
    { name: { en: "English", pt: "Inglês" }, level: { en: "Advanced", pt: "Avançado" }, score: 4 },
    { name: { en: "French", pt: "Francês" }, level: { en: "Beginner", pt: "Iniciante" }, score: 1 },
  ],
};

// ---------------------------------------------------------------------------
// Resolution
// ---------------------------------------------------------------------------

const isLocalized = (v: object): v is Localized<unknown> =>
  !Array.isArray(v) && Object.keys(v).length === 2 && "en" in v && "pt" in v;

// Images carry non-enumerable metadata Astro needs, so they are never copied.
const isImage = (v: object) => "src" in v && "format" in v;

function resolve(value: unknown, lang: Lang): unknown {
  if (value === null || typeof value !== "object" || isImage(value)) return value;
  if (isLocalized(value)) return resolve(value[lang], lang);
  if (Array.isArray(value)) return value.map((v) => resolve(v, lang));
  return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, resolve(v, lang)]));
}

const cache = new Map<Lang, SiteConfig>();

/** The site config with every text in the given language. */
export function getConfig(lang: Lang): SiteConfig {
  if (!cache.has(lang)) cache.set(lang, resolve(config, lang) as SiteConfig);
  return cache.get(lang)!;
}
