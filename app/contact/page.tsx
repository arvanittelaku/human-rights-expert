import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Instruct a Human Rights Expert Witness | Contact UK",
  description:
    "Contact Human Rights Experts to instruct a qualified human rights expert witness for UK asylum, Article 3 deportation, and immigration tribunal cases. Legal Aid compatible.",
  path: "/contact",
  noindex: true,
});

export default function ContactPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Contact" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Instruct a Human Rights Expert Witness"
        subtitle="Submit your case details for a confidential response within one to two business days."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-[#374151] leading-relaxed">
          Complete the form below or email us at{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-semibold text-[#C8922A] hover:underline">
            {SITE_EMAIL}
          </a>
          . We respond to all instruction enquiries within one to two business days.
        </p>
        <ContactForm />
      </PageShell>
    </>
  );
}
