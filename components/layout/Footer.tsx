import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { SITE_EMAIL } from "@/lib/constants";
import { violationTypes } from "@/data/violation-types";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="border-t border-[#C8D4E4] bg-[#0A2540] text-white">
      <div className="mx-auto min-w-0 max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 font-semibold text-[#C8922A]">Services</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {services.map((s) => (
                <li key={s.id}>
                  <Link href={`/services/${s.id}`} className="inline-flex min-h-[44px] items-center hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#C8922A]">Violation Types</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {violationTypes.slice(0, 5).map((v) => (
                <li key={v.slug}>
                  <Link
                    href={`/violation-types/${v.slug}`}
                    className="inline-flex min-h-[44px] items-center hover:text-white"
                  >
                    {v.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/violation-types" className="text-[#C8922A] hover:underline">
                  View all violation types
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#C8922A]">Resources</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/human-rights-framework" className="inline-flex min-h-[44px] items-center hover:text-white">Human Rights Framework</Link></li>
              <li><Link href="/article-3-deportation" className="inline-flex min-h-[44px] items-center hover:text-white">Article 3 Deportation</Link></li>
              <li><Link href="/how-reports-work" className="inline-flex min-h-[44px] items-center hover:text-white">How Reports Work</Link></li>
              <li><Link href="/guides" className="inline-flex min-h-[44px] items-center hover:text-white">Solicitor Guides</Link></li>
              <li><Link href="/how-to-instruct" className="inline-flex min-h-[44px] items-center hover:text-white">How to Instruct</Link></li>
              <li><Link href="/country-experts" className="inline-flex min-h-[44px] items-center hover:text-white">Country Experts</Link></li>
              <li><Link href="/qualifications" className="inline-flex min-h-[44px] items-center hover:text-white">Qualifications</Link></li>
              <li><Link href="/glossary" className="inline-flex min-h-[44px] items-center hover:text-white">Glossary</Link></li>
              <li><Link href="/what-is-a-human-rights-expert-witness" className="inline-flex min-h-[44px] items-center hover:text-white">What is a Human Rights Expert?</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#C8922A]">Contact</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href={`mailto:${SITE_EMAIL}`} className="break-all hover:text-white">
                  {SITE_EMAIL}
                </a>
              </li>
              <li><Link href="/contact" className="font-semibold text-[#C8922A] hover:underline">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-white/20 pt-6 text-center text-xs text-white/60">
          Human Rights Experts connects UK solicitors with qualified human rights expert witnesses for asylum and immigration tribunal proceedings. We are not a law firm and do not provide legal advice.
        </p>
        <p className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-xs text-white/50">
          <Link href="/privacy" className="inline-flex min-h-[44px] items-center hover:text-white">
            Privacy
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/cookie-policy" className="inline-flex min-h-[44px] items-center hover:text-white">
            Cookie Policy
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/terms" className="inline-flex min-h-[44px] items-center hover:text-white">
            Terms
          </Link>
          <span aria-hidden="true">·</span>
          <CookieSettingsButton variant="footer" />
        </p>
      </div>
    </footer>
  );
}
