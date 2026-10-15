# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern, minimalist portfolio template built with Astro and Tailwind CSS v4. It's designed to be easily customizable through a single configuration file while maintaining a clean, professional appearance.

## Tech Stack

- **Astro**: Static site generator
- **Tailwind CSS v4**: Utility-first CSS framework using the new @tailwindcss/vite plugin
- **TypeScript**: For type-safe configuration
- **Tabler Icons**: Icon library

## Development Commands

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
```

## Architecture

The project follows a component-based architecture with all customization centralized in `src/config.ts`:

- **Components** (`src/components/`): One Astro component per section (Header, Hero, About, Skills, Experience, Projects, Research, Education, Contact, Footer) plus shared `Icon` and `SectionHeading`
- **Layout** (`src/layouts/Layout.astro`): `<head>` (SEO, Open Graph, JSON-LD, fonts), pre-paint theme script and scroll-reveal script
- **Pages** (`src/pages/`): `index.astro` (English, site root) and `pt/index.astro` (Português, `/pt/`) both render `components/Portfolio.astro`; `404.astro` for missing routes
- **Configuration** (`src/config.ts`): Single source of truth for all content and customization (typed); `getConfig(lang)` returns it in one language
- **i18n** (`src/i18n.ts`): Languages (EN_US / PT_BR), `getLang(Astro.url)`, and the `ui` dictionary for interface copy (nav labels, section headings, buttons)
- **Sections** (`src/sections.ts`): Section order; `getSections(lang)` drives nav, footer and the `01.`, `02.` numbering
- **Icons** (`src/icons.ts`): Inlined Tabler icon paths, rendered by `Icon.astro`
- **Assets** (`src/assets/`): Photos imported by the config and optimized by `astro:assets`; `public/` holds the résumé PDF, OG image and favicons

### Key Architectural Decisions

1. **Single Configuration File**: All content is managed through `src/config.ts` to make customization simple
   - Text that differs by language is written as `{ en: "...", pt: "..." }` (also works for whole lists); plain values are shared by both languages
2. **Conditional Rendering**: Sections automatically hide if their data is removed from the config
3. **Component Independence**: Each section is a self-contained component that reads from the config
4. **Accent Color System**: Single `accentColor` in config is set as `--accent` on `<html>` and exposed as the Tailwind colors `brand` (backgrounds) and `brand-ink` (text, auto-lightened in dark mode)
5. **Dark Mode**: Class-based (`.dark` on `<html>`), follows the system by default, toggle persisted in `localStorage`
6. **Base Path**: The site deploys under `/portfolio-cv/` — build links to `public/` files with `withBase()` from `src/utils.ts`

## Important Implementation Details

- The site uses Tailwind CSS v4 with the Vite plugin configuration
- No linting or testing framework is currently configured
- All components are in `.astro` format (not React/Vue/etc)
- Fonts: IBM Plex Mono (headings, labels, chips) and IBM Plex Sans (body text) from Google Fonts
- Social links in the config are all optional and will conditionally render

## Working with Components

When modifying components:
1. Components start with `const lang = getLang(Astro.url); const siteConfig = getConfig(lang); const t = ui[lang];` — never hard-code visible text, add it to `ui` in both languages
2. Use Tailwind utility classes for styling
3. Maintain the monospace aesthetic (`font-mono` for headings/labels), and add `dark:` variants
4. Use Tabler Icons via `<Icon name="..." />`; add new ones to `src/icons.ts`
5. Add `data-reveal` (optionally `style="--reveal-delay: 100ms"`) for scroll-in animation

## Configuration Structure

`src/config.ts` defines a typed, bilingual config (read it through `getConfig(lang)`) with these sections:
- Basic info: name, fullName, title, roles (hero typewriter), intro, description, location, availability, accentColor, careerStartYear
- Media: profileImage, aboutImage (imported from `src/assets/`), resume (path in `public/`)
- Social links: email, linkedin, github, twitter (all optional)
- aboutMe: string[] (paragraphs)
- skills: array of {category, icon, items}
- experience: array of {company, title, dateRange, location?, current?, summary?, bullets, skills?}
- projects: array of {name, tagline?, description, highlights?, skills, link?, repo?, icon?}
- research: array of {title, organization, icon?, bullets}
- education: array of {school, degree, dateRange, location?, achievements}
- certifications: array of {name, issuer}
- languages: array of {name, level, score (1–5)}
