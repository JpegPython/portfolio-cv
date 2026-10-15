import { getConfig } from "./config";
import { ui, type Lang } from "./i18n";

const ids = ["about", "skills", "experience", "projects", "research", "education", "contact"] as const;

export type SectionId = (typeof ids)[number];

// Order of `ids` drives the page, the header nav, the footer nav and the section numbers.
// A section disappears everywhere when its data is removed from the config.
function isEnabled(id: SectionId, lang: Lang): boolean {
  const c = getConfig(lang);
  switch (id) {
    case "about":
      return c.aboutMe.length > 0;
    case "skills":
      return c.skills.length > 0;
    case "experience":
      return c.experience.length > 0;
    case "projects":
      return c.projects.length > 0;
    case "research":
      return c.research.length > 0;
    case "education":
      return c.education.length > 0 || c.certifications.length > 0 || c.languages.length > 0;
    case "contact":
      return Object.values(c.social).some(Boolean);
  }
}

export function getSections(lang: Lang) {
  return ids.filter((id) => isEnabled(id, lang)).map((id) => ({ id, label: ui[lang].nav[id] }));
}

/** "01", "02", … for the given section, based on which sections are enabled. */
export function sectionIndex(id: SectionId, lang: Lang): string {
  return String(getSections(lang).findIndex((s) => s.id === id) + 1).padStart(2, "0");
}
