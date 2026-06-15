import Link from "next/link";
import { CTASection } from "@/components/ui/CTASection";
import { CardGrid } from "@/components/ui/CardGrid";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { JsonLd } from "@/components/ui/JsonLd";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import { violationTypes } from "@/data/violation-types";
import { services } from "@/data/services";
import { caseTypes } from "@/data/case-types";
import { createMetadata } from "@/lib/metadata";
import { getHomepageRelatedLinks } from "@/data/related-links";

export const metadata = createMetadata({
  title: "Human Rights Expert Witness UK | Asylum, Article 3 & Immigration Tribunal Reports",
  description:
    "Find a qualified human rights expert witness in the UK. Independent expert reports on torture, Article 3 deportation risk, human rights violations, HR defenders, women's rights, and LGBT human rights for asylum and immigration tribunals. Legal Aid compatible.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />
      <section className="bg-[#0A2540] py-14 md:py-20">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-wide text-[#C8922A] sm:text-sm">
            UK Immigration & Asylum Tribunals
          </p>
          <h1 className="mt-4 max-w-4xl break-words text-2xl font-bold text-white min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Human Rights Expert Witness UK: Asylum, Article 3 & Immigration Tribunal Reports
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
            Human Rights Experts connects UK immigration solicitors, barristers, and Legal Aid practitioners with
            qualified human rights expert witnesses for asylum appeals, human rights appeals, deportation and removal
            proceedings, and immigration tribunal cases. Independent analysis of human rights violations, treaty
            standards, and return risk across all countries.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[4px] bg-[#C8922A] px-6 py-3 font-semibold text-white hover:bg-[#b07f22] sm:w-auto sm:px-8"
            >
              Instruct an Expert
            </Link>
            <Link
              href="/how-to-instruct"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[4px] border-2 border-white px-6 py-3 text-center font-semibold text-white hover:bg-white/10 sm:w-auto sm:px-8"
            >
              How to Instruct
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FB] py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#0A2540] sm:text-2xl md:text-3xl">Why Human Rights Expert Evidence Matters</h2>
          <p className="mt-4 max-w-3xl text-[#374151] leading-relaxed">
            Unlike country-specific expert witness sites, human rights experts provide the overarching international human
            rights law framework applicable in any country. Home Office refusals often fail to apply treaty standards or
            assess violation severity correctly. Independent expert evidence on Article 3 deportation risk, ICCPR, CAT,
            CEDAW standards, and human rights violation analysis is essential for FTT and Upper Tribunal proceedings.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Treaty Standards Analysis",
                desc: "Expert reports applying ICCPR, CAT, CEDAW, ICERD, and ECHR standards to assess human rights violations and return risk in any country.",
              },
              {
                title: "Practice Direction Compliant",
                desc: "Reports comply with Immigration Tribunal Practice Direction 2024 (20-page limit) and the Adam Pipe October 2025 expert report guide.",
              },
              {
                title: "Legal Aid Compatible",
                desc: "LAA prior authority rates available for human rights expert reports in FTT and Upper Tribunal proceedings.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-[8px] border border-[#C8D4E4] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                <h3 className="font-semibold text-[#0A2540]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#374151]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#0A2540] sm:text-2xl">Violation Types</h2>
          <p className="mt-2 max-w-3xl text-[#374151]">
            Thematic human rights violation analysis covering torture, detention, expression, religion, gender, LGBT
            rights, defenders, and state violence across all countries.
          </p>
          <div className="mt-8">
            <CardGrid
              items={violationTypes.slice(0, 6).map((v) => ({
                title: v.title,
                description: v.metaDescription.slice(0, 120) + "...",
                href: `/violation-types/${v.slug}`,
              }))}
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/violation-types" className="inline-flex min-h-[44px] items-center font-semibold text-[#C8922A] hover:underline">
              View all violation types
            </Link>
            <Link href="/human-rights-framework" className="inline-flex min-h-[44px] items-center font-semibold text-[#C8922A] hover:underline">
              Human Rights Framework Guide
            </Link>
            <Link href="/article-3-deportation" className="inline-flex min-h-[44px] items-center font-semibold text-[#C8922A] hover:underline">
              Article 3 Deportation Guide
            </Link>
            <Link href="/how-reports-work" className="inline-flex min-h-[44px] items-center font-semibold text-[#C8922A] hover:underline">
              How Reports Work
            </Link>
            <Link href="/country-experts" className="inline-flex min-h-[44px] items-center font-semibold text-[#C8922A] hover:underline">
              Country expert network
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FB] py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#0A2540] sm:text-2xl">Expert Services</h2>
          <div className="mt-8">
            <CardGrid
              items={services.map((s) => ({
                title: s.name,
                description: s.description,
                href: `/services/${s.id}`,
              }))}
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#0A2540] sm:text-2xl">Case Types</h2>
          <div className="mt-8">
            <CardGrid
              items={caseTypes.slice(0, 4).map((c) => ({
                title: c.title,
                description: c.metaDescription.slice(0, 120) + "...",
                href: `/case-types/${c.slug}`,
              }))}
            />
          </div>
          <Link href="/case-types" className="mt-8 inline-flex min-h-[44px] items-center font-semibold text-[#C8922A] hover:underline">
            View all case types
          </Link>
        </div>
      </section>

      <CTASection />
      <section className="bg-[#F4F7FB] py-12">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <RelatedLinks links={getHomepageRelatedLinks()} title="Key human rights resources" />
        </div>
      </section>
    </>
  );
}
