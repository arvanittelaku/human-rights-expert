import { PageShell } from "@/components/layout/PageShell";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { networkSites } from "@/data/network-sites";
import { getCountryExpertsRelatedLinks } from "@/data/related-links";

export const metadata = createMetadata({
  title: "Country Expert Witness Network | Human Rights Experts UK",
  description:
    "Country expert witness network for UK immigration tribunals. Human rights framework from humanrightsexperts.com; country conditions from Nigeria, Pakistan, Somalia, Africa, and South Asia experts.",
  path: "/country-experts",
});

export default function CountryExpertsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Country Experts" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Country Expert Witness Network | Human Rights Experts UK"
        subtitle="Human rights framework experts and country-specific expert witnesses for UK immigration tribunals."
        breadcrumbs={crumbs}
      >
        <p className="mb-4 text-[#374151] leading-relaxed">
          humanrightsexperts.com provides the human rights violations framework and treaty standards analysis applicable
          across all countries. Country expert witnesses provide country-specific conditions evidence, CPIN analysis, and
          regional assessment. Together they provide comprehensive expert evidence for asylum, human rights appeals, and
          deportation proceedings.
        </p>
        <p className="mb-8 text-[#374151] leading-relaxed">
          persecutionexpert.com covers Refugee Convention persecution grounds and methodology. humanrightsexperts.com
          covers human rights violations, ECHR Article 3, and treaty body standards. Country sites provide
          country-specific profiles, CPINs, and regional analysis.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {networkSites.map((site) => (
            <a
              key={site.url}
              href={site.url}
              rel="noopener noreferrer"
              className="group rounded-[8px] border border-[#C8D4E4] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition hover:border-[#C8922A] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
            >
              <h2 className="font-semibold text-[#0A2540] group-hover:text-[#C8922A]">{site.name}</h2>
              <p className="mt-2 text-sm text-[#374151] leading-relaxed">{site.description}</p>
              <span className="mt-3 inline-block text-sm font-medium text-[#C8922A]">
                Visit site →
              </span>
            </a>
          ))}
        </div>
        <RelatedLinks links={getCountryExpertsRelatedLinks()} title="Human rights resources" />
      </PageShell>
    </>
  );
}
