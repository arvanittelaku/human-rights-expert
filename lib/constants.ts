export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.humanrightsexperts.com";
export const SITE_NAME = "Human Rights Experts";
export const SITE_EMAIL = "contact@humanrightsexperts.com";
export const LINKEDIN_URL = "https://www.linkedin.com/company/HumanRightsExpertsUK";

export const COLORS = {
  primary: "#0A2540",
  accent: "#C8922A",
  background: "#FFFFFF",
  sectionAlt: "#F4F7FB",
  border: "#C8D4E4",
  heading: "#0A2540",
  body: "#374151",
} as const;
