import type { RelatedLink } from "@/data/related-links";

/** Rule E: glossary term → internal links (Appendix C anchor mappings) */
export const GLOSSARY_TERM_LINKS: Record<string, RelatedLink[]> = {
  "article-3-echr": [
    { label: "Article 3 Deportation Guide", href: "/article-3-deportation" },
    { label: "Human Rights Framework", href: "/human-rights-framework#echr-article-3" },
    { label: "Torture & Ill-Treatment", href: "/violation-types/torture-cruel-inhuman-treatment" },
  ],
  "article-8-echr": [
    { label: "Article 8 Family & Private Life", href: "/case-types/article-8-family-private-life" },
    { label: "ECHR Immigration Tribunal Guide", href: "/guides/echr-immigration-tribunal-guide" },
    { label: "LGBT Human Rights Violations", href: "/violation-types/lgbt-human-rights-violations" },
  ],
  "anxious-scrutiny": [
    { label: "Article 3 Deportation Guide", href: "/article-3-deportation" },
    { label: "Human Rights Framework", href: "/human-rights-framework" },
  ],
  "cat-convention-against-torture": [
    { label: "Torture & Ill-Treatment", href: "/violation-types/torture-cruel-inhuman-treatment" },
    { label: "Torture & CAT Asylum Guide", href: "/guides/torture-cat-asylum-guide" },
    { label: "Human Rights Framework", href: "/human-rights-framework#echr-article-3" },
  ],
  cedaw: [
    { label: "Women's Human Rights Violations", href: "/violation-types/womens-human-rights-violations" },
    { label: "Human Rights Framework", href: "/human-rights-framework#cedaw" },
    { label: "Human Rights Framework Guide", href: "/guides/human-rights-framework-guide" },
  ],
  "chahal-v-uk-1996": [
    { label: "Article 3 Deportation Guide", href: "/article-3-deportation" },
    { label: "Torture & Ill-Treatment", href: "/violation-types/torture-cruel-inhuman-treatment" },
  ],
  echr: [
    { label: "Human Rights Framework", href: "/human-rights-framework" },
    { label: "ECHR Immigration Tribunal Guide", href: "/guides/echr-immigration-tribunal-guide" },
  ],
  "extrajudicial-killing": [
    { label: "Extrajudicial Killings & State Violence", href: "/violation-types/extrajudicial-killings-state-violence" },
    { label: "Human Rights Framework", href: "/human-rights-framework#iccpr" },
  ],
  "freedom-of-expression": [
    { label: "Freedom of Expression & Assembly", href: "/violation-types/freedom-of-expression-assembly" },
    { label: "Human Rights Defender Asylum Guide", href: "/guides/human-rights-defender-asylum-guide" },
    { label: "Human Rights Framework", href: "/human-rights-framework#iccpr" },
  ],
  "human-rights-act-1998": [
    { label: "Human Rights Framework", href: "/human-rights-framework" },
    { label: "ECHR Immigration Tribunal Guide", href: "/guides/echr-immigration-tribunal-guide" },
  ],
  "human-rights-defender": [
    { label: "Human Rights Defenders & Journalists", href: "/violation-types/human-rights-defenders-journalists" },
    { label: "Human Rights Defender Asylum Guide", href: "/guides/human-rights-defender-asylum-guide" },
    { label: "Shrinking Civic Space", href: "/human-rights-framework#shrinking-civic-space" },
  ],
  iccpr: [
    { label: "Human Rights Framework", href: "/human-rights-framework#iccpr" },
    { label: "Human Rights Framework Guide", href: "/guides/human-rights-framework-guide" },
  ],
  icerd: [
    { label: "Human Rights Framework", href: "/human-rights-framework" },
    { label: "Extrajudicial Killings & State Violence", href: "/violation-types/extrajudicial-killings-state-violence" },
  ],
  "ikarian-reefer": [
    { label: "How Reports Work", href: "/how-reports-work" },
    { label: "Instructing a Human Rights Expert", href: "/guides/instructing-human-rights-expert" },
  ],
  "inhuman-or-degrading-treatment": [
    { label: "Torture & Ill-Treatment", href: "/violation-types/torture-cruel-inhuman-treatment" },
    { label: "Article 3 Deportation Guide", href: "/article-3-deportation" },
  ],
  "istanbul-protocol": [
    { label: "Torture & Ill-Treatment", href: "/violation-types/torture-cruel-inhuman-treatment" },
    { label: "Torture & CAT Asylum Guide", href: "/guides/torture-cat-asylum-guide" },
  ],
  "non-refoulement": [
    { label: "Article 3 Deportation Guide", href: "/article-3-deportation" },
    { label: "Human Rights Framework", href: "/human-rights-framework#echr-article-3" },
  ],
  ohchr: [
    { label: "Human Rights Framework", href: "/human-rights-framework" },
    { label: "How Reports Work", href: "/how-reports-work" },
  ],
  "practice-direction-expert-evidence": [
    { label: "How Reports Work", href: "/how-reports-work#practice-direction-2024" },
    { label: "Instructing a Human Rights Expert", href: "/guides/instructing-human-rights-expert" },
  ],
  "real-risk": [
    { label: "Article 3 Deportation Guide", href: "/article-3-deportation" },
    { label: "Article 3 Deportation Case Type", href: "/case-types/article-3-deportation-removal" },
  ],
  "shrinking-civic-space": [
    { label: "Human Rights Defenders & Journalists", href: "/violation-types/human-rights-defenders-journalists#shrinking-civic-space" },
    { label: "Human Rights Framework", href: "/human-rights-framework#shrinking-civic-space" },
    { label: "Human Rights Defender Asylum Guide", href: "/guides/human-rights-defender-asylum-guide" },
  ],
  "soering-v-uk-1989": [
    { label: "Article 3 Deportation Guide", href: "/article-3-deportation" },
    { label: "Article 3 Deportation Guide (Solicitor's)", href: "/guides/article-3-deportation-guide" },
  ],
  "special-rapporteur": [
    { label: "Human Rights Defenders & Journalists", href: "/violation-types/human-rights-defenders-journalists" },
    { label: "Human Rights Framework", href: "/human-rights-framework" },
  ],
  "torture-cat-definition": [
    { label: "Torture & Ill-Treatment", href: "/violation-types/torture-cruel-inhuman-treatment" },
    { label: "Torture & CAT Asylum Guide", href: "/guides/torture-cat-asylum-guide" },
  ],
  "treaty-body": [
    { label: "Human Rights Framework", href: "/human-rights-framework" },
    { label: "How Reports Work", href: "/how-reports-work" },
  ],
  udhr: [
    { label: "Human Rights Framework", href: "/human-rights-framework" },
    { label: "Human Rights Framework Guide", href: "/guides/human-rights-framework-guide" },
  ],
  "universal-periodic-review": [
    { label: "Human Rights Framework", href: "/human-rights-framework" },
    { label: "How Reports Work", href: "/how-reports-work" },
  ],
  "yogyakarta-principles": [
    { label: "LGBT Human Rights Violations", href: "/violation-types/lgbt-human-rights-violations" },
    { label: "ECHR Immigration Tribunal Guide", href: "/guides/echr-immigration-tribunal-guide" },
  ],
  "adam-pipe-guide-october-2025": [
    { label: "How Reports Work", href: "/how-reports-work#adam-pipe-2025" },
    { label: "Instructing a Human Rights Expert", href: "/guides/instructing-human-rights-expert" },
  ],
};

export function getGlossaryTermLinks(slug: string): RelatedLink[] {
  return GLOSSARY_TERM_LINKS[slug] ?? [];
}
