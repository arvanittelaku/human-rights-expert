import Link from "next/link";
import { violationTypes } from "@/data/violation-types";

export default function NotFound() {
  const featuredTypes = violationTypes.slice(0, 4);

  return (
    <>
      <section className="relative overflow-hidden bg-[#0A2540] py-16 text-center md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #C8922A 0%, transparent 50%), radial-gradient(circle at 80% 20%, #C8922A 0%, transparent 40%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#C8922A]">Human Rights Experts</p>
          <p className="mt-8 text-8xl font-bold leading-none text-[#C8922A]/90 sm:text-9xl" aria-hidden="true">
            404
          </p>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Page Not Found</h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/80">
            The page you requested does not exist or may have moved. Use the links below to find human rights expert
            witness guidance for UK asylum and immigration tribunals.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] bg-[#C8922A] px-8 py-3 font-semibold text-white transition hover:bg-[#b07f22]"
            >
              Return to Homepage
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] border-2 border-white/80 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Instruct an Expert
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F7FB] py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-xl font-bold text-[#0A2540]">Popular destinations</h2>
          <nav className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="Quick links">
            {[
              { label: "Violation Types", href: "/violation-types", desc: "Torture, detention, expression, religion, gender, LGBT" },
              { label: "Expert Services", href: "/services", desc: "Article 3, torture, detention, defender risk reports" },
              { label: "Human Rights Framework", href: "/human-rights-framework", desc: "ICCPR, CAT, CEDAW, ECHR treaty standards guide" },
              { label: "Article 3 Deportation", href: "/article-3-deportation", desc: "Removal risk, Soering, AAA, DD Afghanistan" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-[8px] border border-[#C8D4E4] bg-white p-5 text-left transition hover:border-[#C8922A] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
              >
                <span className="font-semibold text-[#0A2540] group-hover:text-[#C8922A]">{item.label}</span>
                <span className="mt-1 block text-sm text-[#374151]">{item.desc}</span>
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-lg font-bold text-[#0A2540]">Violation types</h2>
              <ul className="mt-4 space-y-2">
                {featuredTypes.map((v) => (
                  <li key={v.slug}>
                    <Link
                      href={`/violation-types/${v.slug}`}
                      className="text-sm font-medium text-[#C8922A] hover:underline"
                    >
                      {v.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/violation-types" className="text-sm font-semibold text-[#0A2540] hover:underline">
                    View all violation types
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#0A2540]">Resources</h2>
              <ul className="mt-4 space-y-2">
                {[
                  { label: "How Reports Work", href: "/how-reports-work" },
                  { label: "How to Instruct", href: "/how-to-instruct" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm font-medium text-[#C8922A] hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
