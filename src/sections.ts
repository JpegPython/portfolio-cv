import { siteConfig } from "./config";

// Order here drives the page, the header nav, the footer nav and the section numbers.
// A section disappears everywhere when its data is removed from the config.
const all = [
  { id: "about", label: "About", enabled: siteConfig.aboutMe.length > 0 },
  { id: "skills", label: "Skills", enabled: siteConfig.skills.length > 0 },
  { id: "experience", label: "Experience", enabled: siteConfig.experience.length > 0 },
  { id: "projects", label: "Projects", enabled: siteConfig.projects.length > 0 },
  { id: "research", label: "Research", enabled: siteConfig.research.length > 0 },
  {
    id: "education",
    label: "Education",
    enabled:
      siteConfig.education.length > 0 ||
      siteConfig.certifications.length > 0 ||
      siteConfig.languages.length > 0,
  },
  { id: "contact", label: "Contact", enabled: Object.values(siteConfig.social).some(Boolean) },
] as const;

export type SectionId = (typeof all)[number]["id"];

export const sections = all.filter((s) => s.enabled);

/** "01", "02", … for the given section, based on which sections are enabled. */
export function sectionIndex(id: SectionId): string {
  return String(sections.findIndex((s) => s.id === id) + 1).padStart(2, "0");
}
