// The GitHub Pages project site is served under this base path.
// next/image does not prefix `public/` image sources with basePath, so we do it here.
export const BASE_PATH = "/geta-website";

/** Prefix a public asset path (e.g. "/images/hero.png") with the base path. */
export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
