import { violationTypes } from "./violation-types";
import { guides } from "./guides";

export type RelatedLink = { label: string; href: string };

const INSTRUCTION_LINKS: RelatedLink[] = [
  { label: "How to Instruct", href: "/how-to-instruct" },
  { label: "Contact Us", href: "/contact" },
];

function mergeLinks(...groups: RelatedLink[][]): RelatedLink[] {
  const seen = new Set<string>();
  const out: RelatedLink[] = [];
  for (const group of groups) {
    for (const link of group) {
      if (seen.has(link.href)) continue;
      seen.add(link.href);
      out.push(link);
    }
  }
  return out;
}

/** Minimum links per violation type slug */
const VIOLATION_LINKS: Record<string, RelatedLink[]> = {
  "torture-cruel-inhuman-treatment": [
    { label: "ECHR Article 3 Framework", href: "/human-rights-framework#echr-article-3" },
    { label: "How Reports Work", href: "/how-reports-work" },
    { label: "Violation Types Hub", href: "/violation-types" },
    { label: "Torture & CAT Asylum Guide", href: "/guides/torture-cat-asylum-guide" },
    { label: "Torture Survivor Claims", href: "/case-types/torture-survivor-claims" },
  ],
  "arbitrary-detention-disappearance": [
    { label: "ICCPR Standards", href: "/human-rights-framework#iccpr" },
    { label: "How Reports Work", href: "/how-reports-work" },
    { label: "Violation Types Hub", href: "/violation-types" },
    { label: "Human Rights Framework Guide", href: "/guides/human-rights-framework-guide" },
    { label: "FTT Human Rights Appeal", href: "/case-types/ftt-human-rights-appeal" },
  ],
  "freedom-of-expression-assembly": [
    { label: "ICCPR Standards", href: "/human-rights-framework#iccpr" },
    { label: "How Reports Work", href: "/how-reports-work" },
    { label: "Violation Types Hub", href: "/violation-types" },
    { label: "Human Rights Defender Asylum Guide", href: "/guides/human-rights-defender-asylum-guide" },
    { label: "Human Rights Defender Asylum", href: "/case-types/human-rights-defender-asylum" },
  ],
  "freedom-of-religion-belief": [
    { label: "ICCPR Standards", href: "/human-rights-framework#iccpr" },
    { label: "How Reports Work", href: "/how-reports-work" },
    { label: "Violation Types Hub", href: "/violation-types" },
    { label: "Human Rights Framework Guide", href: "/guides/human-rights-framework-guide" },
    { label: "Fresh Human Rights Claims", href: "/case-types/fresh-human-rights-claims" },
  ],
  "womens-human-rights-violations": [
    { label: "CEDAW Women's Rights Standards", href: "/human-rights-framework#cedaw" },
    { label: "How Reports Work", href: "/how-reports-work" },
    { label: "Violation Types Hub", href: "/violation-types" },
    { label: "Human Rights Framework Guide", href: "/guides/human-rights-framework-guide" },
    { label: "Medical Human Rights Claims", href: "/case-types/medical-human-rights-claims" },
  ],
  "lgbt-human-rights-violations": [
    { label: "ICCPR Standards", href: "/human-rights-framework#iccpr" },
    { label: "How Reports Work", href: "/how-reports-work" },
    { label: "Violation Types Hub", href: "/violation-types" },
    { label: "ECHR Immigration Tribunal Guide", href: "/guides/echr-immigration-tribunal-guide" },
    { label: "Article 8 Family & Private Life", href: "/case-types/article-8-family-private-life" },
  ],
  "human-rights-defenders-journalists": [
    { label: "Shrinking Civic Space Framework", href: "/human-rights-framework#shrinking-civic-space" },
    { label: "How Reports Work", href: "/how-reports-work" },
    { label: "Violation Types Hub", href: "/violation-types" },
    { label: "Human Rights Defender Asylum Guide", href: "/guides/human-rights-defender-asylum-guide" },
    { label: "Human Rights Defender Asylum", href: "/case-types/human-rights-defender-asylum" },
  ],
  "extrajudicial-killings-state-violence": [
    { label: "ICCPR Standards", href: "/human-rights-framework#iccpr" },
    { label: "How Reports Work", href: "/how-reports-work" },
    { label: "Violation Types Hub", href: "/violation-types" },
    { label: "Human Rights Framework Guide", href: "/guides/human-rights-framework-guide" },
    { label: "FTT Human Rights Appeal", href: "/case-types/ftt-human-rights-appeal" },
  ],
};

/** Matrix paths for seo:verify */
export const VIOLATION_REQUIRED_HREFS: Record<string, string[]> = {
  "torture-cruel-inhuman-treatment": [
    "/human-rights-framework",
    "/how-reports-work",
    "/violation-types",
    "/guides/torture-cat-asylum-guide",
    "/case-types/torture-survivor-claims",
    "/how-to-instruct",
    "/contact",
  ],
  "arbitrary-detention-disappearance": [
    "/human-rights-framework",
    "/how-reports-work",
    "/violation-types",
    "/guides/human-rights-framework-guide",
    "/case-types/ftt-human-rights-appeal",
    "/how-to-instruct",
    "/contact",
  ],
  "freedom-of-expression-assembly": [
    "/human-rights-framework",
    "/how-reports-work",
    "/violation-types",
    "/guides/human-rights-defender-asylum-guide",
    "/case-types/human-rights-defender-asylum",
    "/how-to-instruct",
    "/contact",
  ],
  "freedom-of-religion-belief": [
    "/human-rights-framework",
    "/how-reports-work",
    "/violation-types",
    "/guides/human-rights-framework-guide",
    "/case-types/fresh-human-rights-claims",
    "/how-to-instruct",
    "/contact",
  ],
  "womens-human-rights-violations": [
    "/human-rights-framework",
    "/how-reports-work",
    "/violation-types",
    "/guides/human-rights-framework-guide",
    "/case-types/medical-human-rights-claims",
    "/how-to-instruct",
    "/contact",
  ],
  "lgbt-human-rights-violations": [
    "/human-rights-framework",
    "/how-reports-work",
    "/violation-types",
    "/guides/echr-immigration-tribunal-guide",
    "/case-types/article-8-family-private-life",
    "/how-to-instruct",
    "/contact",
  ],
  "human-rights-defenders-journalists": [
    "/human-rights-framework",
    "/how-reports-work",
    "/violation-types",
    "/guides/human-rights-defender-asylum-guide",
    "/case-types/human-rights-defender-asylum",
    "/how-to-instruct",
    "/contact",
  ],
  "extrajudicial-killings-state-violence": [
    "/human-rights-framework",
    "/how-reports-work",
    "/violation-types",
    "/guides/human-rights-framework-guide",
    "/case-types/ftt-human-rights-appeal",
    "/how-to-instruct",
    "/contact",
  ],
};

export function getViolationTypeRelatedLinks(slug: string): RelatedLink[] {
  return mergeLinks(VIOLATION_LINKS[slug] ?? [], INSTRUCTION_LINKS);
}

/** Pillar pages link to all violation types, guides, and hub pages */
export function getPillarRelatedLinks(): RelatedLink[] {
  const violationLinks = violationTypes.map((v) => ({
    label: v.title,
    href: `/violation-types/${v.slug}`,
  }));
  const guideLinks = guides.map((g) => ({
    label: g.title,
    href: `/guides/${g.slug}`,
  }));
  const hubLinks: RelatedLink[] = [
    { label: "How Reports Work", href: "/how-reports-work" },
    { label: "Violation Types Hub", href: "/violation-types" },
  ];
  return mergeLinks(violationLinks, guideLinks, hubLinks, INSTRUCTION_LINKS);
}

/** Homepage required internal paths */
export const HOME_REQUIRED_HREFS = [
  "/human-rights-framework",
  "/article-3-deportation",
  "/violation-types/torture-cruel-inhuman-treatment",
  "/violation-types/human-rights-defenders-journalists",
  "/violation-types/womens-human-rights-violations",
  "/violation-types/lgbt-human-rights-violations",
  "/how-reports-work",
  "/violation-types",
  "/how-to-instruct",
  "/contact",
] as const;

export function getHomepageRelatedLinks(): RelatedLink[] {
  return [
    { label: "Human Rights Framework", href: "/human-rights-framework" },
    { label: "Article 3 Deportation Guide", href: "/article-3-deportation" },
    { label: "Torture & Ill-Treatment", href: "/violation-types/torture-cruel-inhuman-treatment" },
    { label: "Human Rights Defenders & Journalists", href: "/violation-types/human-rights-defenders-journalists" },
    { label: "Women's Human Rights Violations", href: "/violation-types/womens-human-rights-violations" },
    { label: "LGBT Human Rights Violations", href: "/violation-types/lgbt-human-rights-violations" },
    { label: "How Reports Work", href: "/how-reports-work" },
    { label: "Violation Types Hub", href: "/violation-types" },
    { label: "How to Instruct", href: "/how-to-instruct" },
    { label: "Contact Us", href: "/contact" },
  ];
}
