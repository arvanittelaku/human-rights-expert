import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Thank You | Human Rights Experts",
  description: "Thank you for your human rights expert witness instruction enquiry.",
  path: "/thank-you",
  noindex: true,
  follow: false,
});

export default function ThankYouPage() {
  return (
    <PageShell title="Thank You for Your Instruction Enquiry">
      <p className="mb-4 text-[#374151] leading-relaxed">
        Thank you for contacting Human Rights Experts. We have received your instruction enquiry and will respond
        within one to two business days with availability, fee information, and next steps.
      </p>
      <p className="mb-8 text-[#374151] leading-relaxed">
        If your matter is urgent, please email us directly with your tribunal deadline and we will prioritise your
        enquiry.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] bg-[#C8922A] px-6 py-3 font-semibold text-white hover:bg-[#b07f22]"
        >
          Return to Homepage
        </Link>
        <Link
          href="/how-to-instruct"
          className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] border border-[#C8D4E4] px-6 py-3 font-semibold text-[#0A2540] hover:bg-[#F4F7FB]"
        >
          How to Instruct
        </Link>
      </div>
    </PageShell>
  );
}
