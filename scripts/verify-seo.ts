#!/usr/bin/env npx tsx
/**
 * Verifies public/sitemap.xml matches buildPublicUrlInventory(),
 * internal linking matrix, and slug redirects.
 * Run: npm run seo:verify
 */
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { buildPublicUrlInventory } from "../lib/seo/publicUrlInventory";
import { verifySeoArchitecture } from "../lib/seo/architecture-verify";
import { SITE_URL } from "../lib/constants";
import { violationTypes } from "../data/violation-types";
import { guides } from "../data/guides";
import {
  getViolationTypeRelatedLinks,
  getPillarRelatedLinks,
  getHomepageRelatedLinks,
  getCountryExpertsRelatedLinks,
  VIOLATION_REQUIRED_HREFS,
  HOME_REQUIRED_HREFS,
} from "../data/related-links";
import { SLUG_REDIRECTS, PERSECUTION_TYPE_SLUG_MAP } from "../lib/seo/slug-redirects";
import { glossaryTerms } from "../data/glossary";
import { GLOSSARY_TERM_LINKS } from "../lib/glossary-links";

const SITEMAP_PATH = join(process.cwd(), "public", "sitemap.xml");
const ROBOTS_PATH = join(process.cwd(), "public", "robots.txt");

const REQUIRED_STATIC_REDIRECTS: Record<string, string> = {
  "/persecution-grounds": "/human-rights-framework",
  "/persecution-types": "/violation-types",
  "/what-is-a-persecution-expert": "/what-is-a-human-rights-expert-witness",
  "/what-is-a-persecution-expert-witness": "/what-is-a-human-rights-expert-witness",
};

const APPENDIX_C_SLUGS = [
  "article-3-echr",
  "article-8-echr",
  "anxious-scrutiny",
  "cat-convention-against-torture",
  "cedaw",
  "chahal-v-uk-1996",
  "echr",
  "extrajudicial-killing",
  "freedom-of-expression",
  "human-rights-act-1998",
  "human-rights-defender",
  "iccpr",
  "icerd",
  "ikarian-reefer",
  "inhuman-or-degrading-treatment",
  "istanbul-protocol",
  "non-refoulement",
  "ohchr",
  "practice-direction-expert-evidence",
  "real-risk",
  "shrinking-civic-space",
  "soering-v-uk-1989",
  "special-rapporteur",
  "torture-cat-definition",
  "treaty-body",
  "udhr",
  "universal-periodic-review",
  "yogyakarta-principles",
  "adam-pipe-guide-october-2025",
];

function extractLocs(xml: string): string[] {
  const locs: string[] = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml)) !== null) {
    locs.push(m[1].trim());
  }
  return locs.sort();
}

function hrefs(links: { href: string }[]): string[] {
  return links.map((l) => l.href.split("#")[0]);
}

function verifyInternalLinking(): string[] {
  const errors: string[] = [];

  for (const type of violationTypes) {
    const links = hrefs(getViolationTypeRelatedLinks(type.slug));
    const required = VIOLATION_REQUIRED_HREFS[type.slug] ?? [];
    for (const path of required) {
      if (!links.includes(path)) {
        errors.push(`Violation ${type.slug} missing required link: ${path}`);
      }
    }
  }

  for (const slug of Object.keys(VIOLATION_REQUIRED_HREFS)) {
    if (!violationTypes.some((v) => v.slug === slug)) {
      errors.push(`VIOLATION_REQUIRED_HREFS references unknown slug: ${slug}`);
    }
  }

  const pillarLinks = hrefs(getPillarRelatedLinks());
  for (const v of violationTypes) {
    const path = `/violation-types/${v.slug}`;
    if (!pillarLinks.includes(path)) {
      errors.push(`Pillar related links missing: ${path}`);
    }
  }
  for (const g of guides) {
    const path = `/guides/${g.slug}`;
    if (!pillarLinks.includes(path)) {
      errors.push(`Pillar related links missing: ${path}`);
    }
  }
  for (const path of ["/how-reports-work", "/country-experts", "/how-to-instruct", "/contact"]) {
    if (!pillarLinks.includes(path)) {
      errors.push(`Pillar related links missing: ${path}`);
    }
  }

  const homeLinks = hrefs(getHomepageRelatedLinks());
  for (const path of HOME_REQUIRED_HREFS) {
    if (!homeLinks.includes(path)) {
      errors.push(`Homepage related links missing: ${path}`);
    }
  }

  const countryLinks = hrefs(getCountryExpertsRelatedLinks());
  for (const path of [
    "/human-rights-framework",
    "/article-3-deportation",
    "/violation-types/torture-cruel-inhuman-treatment",
    "/violation-types/human-rights-defenders-journalists",
    "/violation-types/womens-human-rights-violations",
    "/violation-types/lgbt-human-rights-violations",
    "/how-to-instruct",
  ]) {
    if (!countryLinks.includes(path)) {
      errors.push(`Country-experts related links missing: ${path}`);
    }
  }

  return errors;
}

function verifySlugRedirects(): string[] {
  const errors: string[] = [];
  for (const [from, to] of Object.entries(REQUIRED_STATIC_REDIRECTS)) {
    if (SLUG_REDIRECTS[from] !== to) {
      errors.push(`Missing or incorrect redirect: ${from} → ${to}`);
    }
  }
  if (Object.keys(PERSECUTION_TYPE_SLUG_MAP).length < 8) {
    errors.push("PERSECUTION_TYPE_SLUG_MAP should define at least 8 persecution-type mappings");
  }
  return errors;
}

function verifyGlossaryAnchors(): string[] {
  const errors: string[] = [];
  const slugs = new Set(glossaryTerms.map((t) => t.slug));
  for (const slug of APPENDIX_C_SLUGS) {
    if (!slugs.has(slug)) {
      errors.push(`Glossary missing Appendix C anchor slug: ${slug}`);
    }
  }
  for (const slug of APPENDIX_C_SLUGS) {
    if (!GLOSSARY_TERM_LINKS[slug]?.length) {
      errors.push(`Glossary term ${slug} missing Rule E internal links`);
    }
  }
  return errors;
}

function main() {
  let failed = false;

  if (!existsSync(SITEMAP_PATH)) {
    console.error(`Missing ${SITEMAP_PATH}. Run: npm run seo:generate`);
    process.exit(1);
  }
  if (!existsSync(ROBOTS_PATH)) {
    console.error(`Missing ${ROBOTS_PATH}. Run: npm run seo:generate`);
    process.exit(1);
  }
  const robotsTsPath = join(process.cwd(), "app", "robots.ts");
  if (!existsSync(robotsTsPath)) {
    console.error("Missing app/robots.ts");
    process.exit(1);
  }

  const inventory = buildPublicUrlInventory(SITE_URL);
  const expected = [...inventory.allUrls].sort();
  const actual = extractLocs(readFileSync(SITEMAP_PATH, "utf-8"));

  const missing = expected.filter((u) => !actual.includes(u));
  const extra = actual.filter((u) => !expected.includes(u));

  if (missing.length > 0) {
    failed = true;
    console.error(`Sitemap missing ${missing.length} URL(s):`);
    missing.forEach((u) => console.error(`  - ${u}`));
  }
  if (extra.length > 0) {
    failed = true;
    console.error(`Sitemap has ${extra.length} unexpected URL(s):`);
    extra.forEach((u) => console.error(`  + ${u}`));
  }

  const robots = readFileSync(ROBOTS_PATH, "utf-8");
  if (!robots.includes(`Sitemap: ${inventory.siteUrl}/sitemap.xml`)) {
    failed = true;
    console.error(`robots.txt missing correct Sitemap line for ${inventory.siteUrl}`);
  }

  const archIssues = verifySeoArchitecture();
  for (const issue of archIssues) {
    if (issue.level === "error") {
      failed = true;
      console.error(`Architecture: ${issue.message}`);
    } else {
      console.warn(`Architecture (warn): ${issue.message}`);
    }
  }

  const linkErrors = verifyInternalLinking();
  if (linkErrors.length > 0) {
    failed = true;
    console.error("Internal linking matrix errors:");
    linkErrors.forEach((e) => console.error(`  - ${e}`));
  }

  const redirectErrors = verifySlugRedirects();
  if (redirectErrors.length > 0) {
    failed = true;
    console.error("Slug redirect errors:");
    redirectErrors.forEach((e) => console.error(`  - ${e}`));
  }

  const glossaryErrors = verifyGlossaryAnchors();
  if (glossaryErrors.length > 0) {
    failed = true;
    console.error("Glossary anchor errors:");
    glossaryErrors.forEach((e) => console.error(`  - ${e}`));
  }

  if (failed) {
    console.error("\nSEO verification failed. Run: npm run seo:generate");
    process.exit(1);
  }

  console.log(
    `SEO verify OK: ${actual.length} sitemap URLs, architecture, internal linking, redirects, and glossary anchors.`
  );
}

main();
