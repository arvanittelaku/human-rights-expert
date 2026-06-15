import Link from "next/link";
import { RelatedLinks } from "@/components/ui/RelatedLinks";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { JsonLd } from "@/components/ui/JsonLd";
import { ResponsiveTableWrap } from "@/components/ui/ResponsiveTableWrap";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";
import { getPillarRelatedLinks } from "@/data/related-links";

const PAGE_DESCRIPTION =
  "Expert guide to Article 3 ECHR deportation and removal cases for UK solicitors: Soering standard, real risk of torture, inhuman or degrading treatment, AAA Somalia, DD Afghanistan, and expert evidence requirements.";

export const metadata = createMetadata({
  title: "Article 3 ECHR Deportation Expert UK | Removal Risk Reports 2025–2026",
  description: PAGE_DESCRIPTION,
  path: "/article-3-deportation",
});

export default function Article3DeportationPage() {
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Article 3 Deportation" },
  ];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <JsonLd
        data={articleSchema({
          headline: "Article 3 ECHR Deportation and Removal: Expert Evidence Guide for UK Solicitors",
          description: PAGE_DESCRIPTION,
          path: "/article-3-deportation",
        })}
      />
      <PageShell
        title="Article 3 ECHR Deportation and Removal: Expert Evidence Guide for UK Solicitors"
        subtitle="The definitive reference on Article 3 non-refoulement, real risk analysis, and expert evidence in UK deportation and removal proceedings."
        breadcrumbs={crumbs}
      >
        <p className="mb-4 text-[#374151] leading-relaxed">
          Article 3 ECHR prohibits torture and inhuman or degrading treatment without exception. In deportation and removal
          proceedings, the United Kingdom may not return an individual to a country where substantial grounds exist for
          believing they would face a real risk of such treatment. This guide explains the legal framework, leading
          authority, and expert evidence requirements for solicitors handling Article 3 cases in 2025 and 2026.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-[#0A2540]">The Article 3 Non-Refoulement Standard</h2>
        <p className="mt-4 mb-4 text-[#374151] leading-relaxed">
          Non-refoulement under Article 3 is absolute: no derogation is permitted regardless of the individual&apos;s conduct
          or national security considerations (Chahal v UK [1996]). The real risk test requires more than a mere possibility
          of harm but does not require proof on the balance of probabilities (Soering v UK [1989]). Tribunals apply anxious
          scrutiny, examining evidence with particular care given the irreversible consequences of refoulement (Abdi v SSHD
          [1996]).
        </p>

        <h2 className="mt-10 text-2xl font-bold text-[#0A2540]">Key Article 3 Framework Table</h2>
        <ResponsiveTableWrap>
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <caption className="mb-3 text-left text-sm font-medium text-[#374151]">
              Article 3 ECHR deportation framework: legal standards and 2025–2026 updates for expert evidence
            </caption>
            <thead>
              <tr className="bg-[#0A2540] text-left text-white">
                <th className="border border-[#C8D4E4] px-4 py-3 font-semibold">Issue</th>
                <th className="border border-[#C8D4E4] px-4 py-3 font-semibold">Legal Standard</th>
                <th className="border border-[#C8D4E4] px-4 py-3 font-semibold">2025–2026 Update</th>
              </tr>
            </thead>
            <tbody className="text-[#374151]">
              <tr className="bg-white">
                <td className="border border-[#C8D4E4] px-4 py-3 font-medium">Real risk test</td>
                <td className="border border-[#C8D4E4] px-4 py-3">Soering v UK [1989]; Chahal v UK [1996]</td>
                <td className="border border-[#C8D4E4] px-4 py-3">Anxious scrutiny applies</td>
              </tr>
              <tr className="bg-[#F4F7FB]">
                <td className="border border-[#C8D4E4] px-4 py-3 font-medium">Generalised violence</td>
                <td className="border border-[#C8D4E4] px-4 py-3">HN (Sudan) [2020]; Article 15(c) overlap</td>
                <td className="border border-[#C8D4E4] px-4 py-3">Country-specific analysis required</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-[#C8D4E4] px-4 py-3 font-medium">Medical conditions</td>
                <td className="border border-[#C8D4E4] px-4 py-3">Paposhvili [2017]; Savran [2021]</td>
                <td className="border border-[#C8D4E4] px-4 py-3">Intensity of treatment abroad</td>
              </tr>
              <tr className="bg-[#F4F7FB]">
                <td className="border border-[#C8D4E4] px-4 py-3 font-medium">Failed asylum returnees</td>
                <td className="border border-[#C8D4E4] px-4 py-3">Country-specific; diaspora support tests</td>
                <td className="border border-[#C8D4E4] px-4 py-3">AAA Somalia [2023] UKSC</td>
              </tr>
              <tr className="bg-white">
                <td className="border border-[#C8D4E4] px-4 py-3 font-medium">Interim measures</td>
                <td className="border border-[#C8D4E4] px-4 py-3">ECtHR Rule 39</td>
                <td className="border border-[#C8D4E4] px-4 py-3">Deportation pending applications</td>
              </tr>
              <tr className="bg-[#F4F7FB]">
                <td className="border border-[#C8D4E4] px-4 py-3 font-medium">Expert evidence role</td>
                <td className="border border-[#C8D4E4] px-4 py-3">Independent country conditions + profile</td>
                <td className="border border-[#C8D4E4] px-4 py-3">Beyond CPIN reproduction</td>
              </tr>
            </tbody>
          </table>
        </ResponsiveTableWrap>

        <h2 id="aaa-somalia" className="mt-10 scroll-mt-24 text-2xl font-bold text-[#0A2540]">AAA (Somalia) [2023] and Return Risk</h2>
        <p className="mt-4 mb-4 text-[#374151] leading-relaxed">
          The Supreme Court in AAA (Somalia) [2023] addressed return risk for failed asylum seekers without clan
          protection in Mogadishu. The decision established that diaspora profile, lack of support networks, and visibility
          as a failed asylum returnee can create enhanced Article 3 risk. Human rights experts assess whether similar
          principles apply to the appellant&apos;s country and profile, analysing returnee vulnerability beyond general
          country conditions in CPINs.
        </p>

        <h2 id="dd-afghanistan" className="mt-10 scroll-mt-24 text-2xl font-bold text-[#0A2540]">DD (Afghanistan) [2024] and Taliban Return</h2>
        <p className="mt-4 mb-4 text-[#374151] leading-relaxed">
          DD (Afghanistan) [2024] UKSC analysed return conditions under Taliban rule, addressing risk for women, Hazaras,
          and those with imputed Western affiliation. The decision confirms that country conditions analysis must be
          current and profile-specific. Experts must apply updated treaty body and NGO documentation rather than relying
          on outdated CPIN material when assessing Taliban-era return risk.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-[#0A2540]">When to Instruct a Human Rights Expert in Removal Cases</h2>
        <p className="mt-4 mb-4 text-[#374151] leading-relaxed">
          Instruct a human rights expert where return risk turns on torture or ill-treatment, state violence, arbitrary
          detention, defender targeting, or treaty standards beyond CPIN coverage. Human rights experts are essential in
          complex Article 3 cases where persecution ground analysis alone is insufficient. Early instruction allows 2 to 3
          weeks for a standard report complying with Practice Direction 2024 page limits.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-[#0A2540]">Expert Report Requirements in Article 3 Proceedings</h2>
        <p className="mt-4 mb-4 text-[#374151] leading-relaxed">
          Reports must comply with Practice Direction paragraph 10, CPR Part 35, and Ikarian Reefer duties of
          independence and objectivity. Content should include qualifications, methodology, sources, applicable human
          rights standards, country conditions for the specific profile, violation severity analysis, return risk opinion,
          and statement of truth. The Adam Pipe October 2025 guide sets updated tribunal expectations. Reports are limited
          to 20 pages unless permission is granted under PD 9.2 and 9.3.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-[#0A2540]">Relationship to Country Expert Evidence</h2>
        <p className="mt-4 mb-4 text-[#374151] leading-relaxed">
          Human rights framework experts and country experts serve complementary roles. Human rights experts apply treaty
          standards and violation severity methodology; country experts provide detailed local conditions, CPIN analysis,
          and regional assessment. Instruct both where the case requires human rights law analysis and detailed
          country-specific evidence. See our{" "}
          <Link href="/country-experts" className="text-[#C8922A] hover:underline">
            country expert network
          </Link>{" "}
          and{" "}
          <Link href="/human-rights-framework" className="text-[#C8922A] hover:underline">
            human rights framework guide
          </Link>
          .
        </p>
        <RelatedLinks links={getPillarRelatedLinks()} title="Explore human rights resources" />
      </PageShell>
    </>
  );
}
