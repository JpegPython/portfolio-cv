/** Prefix a site-relative path with the configured Astro `base`. External URLs pass through. */
export function withBase(path: string): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}

/** Two-digit section/card index: 1 -> "01". */
export const pad = (n: number) => String(n).padStart(2, "0");
