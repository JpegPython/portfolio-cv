import { withBase } from "./utils";

// ---------------------------------------------------------------------------
// Languages
// ---------------------------------------------------------------------------

export const languages = {
  en: { label: "EN_US", name: "English", htmlLang: "en", ogLocale: "en_US", path: "" },
  pt: { label: "PT_BR", name: "Português", htmlLang: "pt-BR", ogLocale: "pt_BR", path: "pt/" },
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = "en";
export const langs = Object.keys(languages) as Lang[];

/** A value authored once per language. */
export type Localized<T> = { en: T; pt: T };

/** Language of the current page, taken from the URL (`/pt/...` → "pt"). */
export function getLang(url: URL): Lang {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const path = url.pathname.slice(base.length).replace(/^\//, "");
  const prefix = (l: Lang) => languages[l].path.replace(/\/$/, "");
  return (
    langs.find((l) => l !== defaultLang && (path === prefix(l) || path.startsWith(`${prefix(l)}/`))) ??
    defaultLang
  );
}

/** Home URL for a language, e.g. "/portfolio-cv/pt/". */
export const homeUrl = (lang: Lang) => withBase(languages[lang].path);

// ---------------------------------------------------------------------------
// Interface copy (content lives in config.ts)
// ---------------------------------------------------------------------------

const en = {
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    research: "Research",
    education: "Education",
    contact: "Contact",
  },
  a11y: {
    skip: "Skip to content",
    backToTop: "back to top",
    toggleTheme: "Toggle dark mode",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    scrollToAbout: "Scroll to About",
    technologies: "Technologies",
    portrait: "Portrait of",
    smiling: "smiling",
  },
  resume: "Résumé",
  downloadResume: "Download résumé",
  hero: {
    greeting: "Hi, I'm",
    cta: "Get in touch",
    scroll: "scroll",
  },
  about: {
    eyebrow: "about me",
    title: "Engineering software around data and AI.",
    openTo: "Open to full-time roles in",
    openToAreas: "Software, Data, ML & AI",
    facts: { basedIn: "Based in", currently: "Currently", studying: "Studying", speaks: "Speaks" },
    stats: {
      years: "Years of professional experience",
      companies: "Companies",
      projects: "Projects & research programs",
      certifications: "Certifications",
    },
  },
  skills: {
    eyebrow: "toolbox",
    title: "Skills & technologies",
    subtitle: "From model training to production web platforms — the stack I use to ship end-to-end.",
  },
  experience: {
    eyebrow: "career",
    title: "Where I've worked",
    subtitle: "Building products, pipelines and automation for credit, telecom and R&D teams.",
    current: "Current",
  },
  projects: {
    eyebrow: "selected work",
    title: "Projects",
    subtitle: "Side projects and research where I go deep on APIs, data quality and deep learning.",
    source: "Source code",
    live: "Live",
    more: "More on GitHub",
  },
  research: {
    eyebrow: "academic experience",
    title: "Research & academia",
    subtitle: "Where my interest in deep learning and computer vision started.",
  },
  education: {
    eyebrow: "learning",
    title: "Education & certifications",
    subtitle: "Formal education, continuous learning and the languages I work in.",
    languages: "Languages",
    certifications: "Certifications & courses",
    outOf: "out of 5",
  },
  contact: {
    eyebrow: "what's next",
    title: "Let's build something together.",
    text: "I'm looking for full-time opportunities in Software Engineering, Data, Machine Learning or AI — remote or with relocation. My inbox is always open.",
    cta: "Say hello",
    copied: "Copied to clipboard!",
    copiedStatus: "Email address copied to clipboard",
  },
  footer: {
    builtWith: "Built with Astro & Tailwind CSS",
    backToTop: "Back to top",
  },
  notFound: {
    title: "Page not found",
    text: "The page you're looking for doesn't exist or has been moved.",
    back: "Back home",
  },
};

export type UI = typeof en;

const pt: UI = {
  nav: {
    about: "Sobre",
    skills: "Skills",
    experience: "Experiência",
    projects: "Projetos",
    research: "Pesquisa",
    education: "Formação",
    contact: "Contato",
  },
  a11y: {
    skip: "Pular para o conteúdo",
    backToTop: "voltar ao topo",
    toggleTheme: "Alternar modo escuro",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    language: "Idioma",
    scrollToAbout: "Rolar até Sobre",
    technologies: "Tecnologias",
    portrait: "Foto de",
    smiling: "sorrindo",
  },
  resume: "Currículo",
  downloadResume: "Baixar currículo",
  hero: {
    greeting: "Olá, eu sou",
    cta: "Fale comigo",
    scroll: "rolar",
  },
  about: {
    eyebrow: "sobre mim",
    title: "Construindo software com dados e IA.",
    openTo: "Aberto a vagas full-time em",
    openToAreas: "Software, Dados, ML e IA",
    facts: { basedIn: "Moro em", currently: "Atualmente", studying: "Estudo", speaks: "Idiomas" },
    stats: {
      years: "Anos de experiência profissional",
      companies: "Empresas",
      projects: "Projetos e programas de pesquisa",
      certifications: "Certificações",
    },
  },
  skills: {
    eyebrow: "ferramentas",
    title: "Skills e tecnologias",
    subtitle: "Do treinamento de modelos a plataformas web em produção — a stack que uso para entregar de ponta a ponta.",
  },
  experience: {
    eyebrow: "carreira",
    title: "Onde trabalhei",
    subtitle: "Construindo produtos, pipelines e automações para times de crédito, telecom e P&D.",
    current: "Atual",
  },
  projects: {
    eyebrow: "trabalhos selecionados",
    title: "Projetos",
    subtitle: "Projetos pessoais e de pesquisa em que me aprofundo em APIs, qualidade de dados e deep learning.",
    source: "Código-fonte",
    live: "Online",
    more: "Mais no GitHub",
  },
  research: {
    eyebrow: "experiência acadêmica",
    title: "Pesquisa e academia",
    subtitle: "Onde começou meu interesse por deep learning e visão computacional.",
  },
  education: {
    eyebrow: "aprendizado",
    title: "Formação e certificações",
    subtitle: "Formação acadêmica, aprendizado contínuo e os idiomas com que trabalho.",
    languages: "Idiomas",
    certifications: "Certificações e cursos",
    outOf: "de 5",
  },
  contact: {
    eyebrow: "próximos passos",
    title: "Vamos construir algo juntos.",
    text: "Busco oportunidades full-time em Engenharia de Software, Dados, Machine Learning ou IA — remoto ou com realocação. Minha caixa de entrada está sempre aberta.",
    cta: "Diga olá",
    copied: "Copiado!",
    copiedStatus: "Endereço de e-mail copiado",
  },
  footer: {
    builtWith: "Feito com Astro & Tailwind CSS",
    backToTop: "Voltar ao topo",
  },
  notFound: {
    title: "Página não encontrada",
    text: "A página que você procura não existe ou foi movida.",
    back: "Voltar ao início",
  },
};

export const ui: Record<Lang, UI> = { en, pt };
