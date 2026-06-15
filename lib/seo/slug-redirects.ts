/** 301 redirects from legacy persecution-scaffold paths to canonical human rights routes. */
export const SLUG_REDIRECTS: Record<string, string> = {
  "/persecution-grounds": "/human-rights-framework",
  "/persecution-types": "/violation-types",
  "/what-is-a-persecution-expert": "/what-is-a-human-rights-expert-witness",
  "/what-is-a-persecution-expert-witness": "/what-is-a-human-rights-expert-witness",
};

/** Legacy persecution-type slugs → violation-type slugs (Appendix F) */
export const PERSECUTION_TYPE_SLUG_MAP: Record<string, string> = {
  "political-opinion-persecution": "freedom-of-expression-assembly",
  "religious-persecution": "freedom-of-religion-belief",
  "lgbtq-persecution-all-countries": "lgbt-human-rights-violations",
  "gender-based-persecution": "womens-human-rights-violations",
  "racial-ethnic-persecution": "extrajudicial-killings-state-violence",
  "particular-social-group": "womens-human-rights-violations",
  "non-state-actor-persecution": "torture-cruel-inhuman-treatment",
  "state-persecution-direct": "extrajudicial-killings-state-violence",
};

export function resolveSlugRedirect(pathname: string): string | null {
  const exact = SLUG_REDIRECTS[pathname];
  if (exact) return exact;

  const persecutionMatch = pathname.match(/^\/persecution-types\/([^/]+)$/);
  if (persecutionMatch) {
    const mapped = PERSECUTION_TYPE_SLUG_MAP[persecutionMatch[1]];
    if (mapped) return `/violation-types/${mapped}`;
    return "/violation-types";
  }

  return null;
}
