import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Human Rights Expert Witness Qualifications UK",
  description:
    "Qualifications for human rights expert witnesses in UK immigration tribunals: academic credentials, treaty standards expertise, field research, and Practice Direction compliance.",
  path: "/qualifications",
});

export default function QualificationsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Qualifications" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Human Rights Expert Witness Qualifications UK"
        subtitle="The credentials and expertise required for human rights expert evidence in UK immigration tribunals."
        breadcrumbs={crumbs}
      >
        <h2 className="text-xl font-bold text-[#0A2540]">Core Credentials</h2>
        <p className="mt-4 mb-4 text-[#374151] leading-relaxed">
          Human rights expert witnesses hold advanced academic qualifications including PhD, MA in human rights law,
          international law, political science, or sociology. They demonstrate field research experience, familiarity
          with ICCPR, CAT, CEDAW, ICERD, and ECHR standards, Immigration Tribunal Practice Direction compliance, and prior
          tribunal acceptance in human rights cases.
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#0A2540]">Thematic vs Country Expertise</h2>
        <p className="mt-4 mb-4 text-[#374151] leading-relaxed">
          Human rights framework experts provide treaty standards and violation analysis applicable across all countries.
          Country experts provide detailed country-specific conditions and CPIN analysis. Instruct a human rights expert
          where the claim turns on treaty standards, violation severity, or Article 3 return risk. Instruct a country
          expert where detailed local conditions evidence is required. Instruct both in complex claims. See our{" "}
          <Link href="/country-experts" className="text-[#C8922A] hover:underline">
            country expert network
          </Link>
          .
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#0A2540]">Expert Duties: Immigration Tribunal</h2>
        <p className="mt-4 mb-4 text-[#374151] leading-relaxed">
          Experts owe a paramount duty to the tribunal under Practice Direction paragraph 10 and Ikarian Reefer
          principles. Independence, objectivity, and unbiased assistance are required. Experts must not advocate for
          either party and must clearly distinguish assumed facts from independent opinion. A statement of truth and
          declaration of independence must accompany every report.
        </p>
      </PageShell>
    </>
  );
}
