import type { FAQ } from "@/lib/schema";

export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  content: string[];
  faqs: FAQ[];
};

export const guides: Guide[] = [
  {
    slug: "article-3-deportation-guide",
    title: "Article 3 Deportation Guide",
    metaTitle: "Article 3 ECHR Deportation Guide | Solicitor's Complete Reference",
    metaDescription:
      "Complete solicitor's guide to Article 3 ECHR deportation cases: Soering, Chahal, real risk test, AAA Somalia, DD Afghanistan, and expert evidence requirements.",
    h1: "Article 3 ECHR Deportation: Complete Solicitor's Guide",
    content: [
      "Article 3 ECHR prohibits torture and inhuman or degrading treatment without exception. In deportation and removal proceedings, the non-refoulement obligation prevents return where substantial grounds exist for believing the individual would face a real risk of such treatment. This guide explains the legal framework and expert evidence requirements for UK immigration practitioners.",
      "The real risk test originates in Soering v UK [1989] and Chahal v UK [1996]. Anxious scrutiny applies: tribunals must examine the evidence with particular care given the irreversible consequences of refoulement (Abdi v SSHD [1996]). The threshold is lower than proof on the balance of probabilities but requires more than a mere possibility of harm.",
      "AAA (Somalia) [2023] UKSC addressed return risk for failed asylum seekers without clan protection. DD (Afghanistan) [2024] UKSC analysed Taliban return conditions. Human rights experts must apply these authorities to the specific country and profile, going beyond CPIN reproduction to provide independent return risk analysis.",
      "Expert reports for Article 3 deportation cases should address country conditions, individual profile, documented violation patterns, internal relocation viability, and medical conditions where Paposhvili [2017] and Savran [2021] engage. Reports comply with Practice Direction 2024 (20-page default limit) and Adam Pipe October 2025 guidance.",
    ],
    faqs: [
      {
        question: "What is the Soering real risk test?",
        answer:
          "Substantial grounds must exist for believing the individual would face a real risk of torture or inhuman or degrading treatment on return. The test requires careful assessment of country conditions and individual circumstances with anxious scrutiny.",
      },
      {
        question: "When should solicitors instruct a human rights expert in deportation cases?",
        answer:
          "Where return risk turns on human rights violations, country conditions beyond CPIN coverage, or treaty standards requiring expert analysis. Human rights experts are essential in complex Article 3 cases involving torture, state violence, or defender profiles.",
      },
    ],
  },
  {
    slug: "human-rights-framework-guide",
    title: "Human Rights Framework Guide",
    metaTitle: "Human Rights Framework Guide | UK Asylum Expert Evidence",
    metaDescription:
      "Expert evidence guide to the human rights framework for UK asylum: ICCPR, CAT, CEDAW, ECHR, violation severity, and treaty body sources for solicitors.",
    h1: "Human Rights Framework for UK Asylum: Expert Evidence Guide",
    content: [
      "The human rights framework in UK asylum and immigration proceedings draws on multiple international instruments: ECHR Articles 3 and 8, ICCPR civil and political rights, CAT torture standards, CEDAW women's rights, and ICERD racial discrimination benchmarks. Human rights experts apply these standards to assess violation severity and return risk.",
      "Violation severity analysis determines whether documented human rights violations reach the threshold for asylum, subsidiary protection, or Article 3 non-refoulement. Experts assess whether violations are systematic, target specific profiles, and whether the state is willing and able to prevent further harm.",
      "Treaty body sources include OHCHR reports, Special Rapporteur documentation, Universal Periodic Review outcomes, and concluding observations from CAT, CCPR, CEDAW, and CERD committees. Experts use these sources alongside NGO reports, CPINs, and field research to provide independent analysis beyond Home Office country information.",
      "Human rights expert evidence complements persecution expert evidence where Refugee Convention ground analysis alone is insufficient. See persecutionexpert.com for persecution ground methodology and humanrightsexperts.com for the human rights violations framework.",
    ],
    faqs: [
      {
        question: "Which treaty instruments do human rights experts use?",
        answer:
          "ICCPR, CAT, CEDAW, ICERD, ECHR, and UDHR as foundational reference. Experts apply treaty body jurisprudence and concluding observations to assess violation severity and state obligations.",
      },
      {
        question: "What is the violation severity threshold?",
        answer:
          "A serious violation of fundamental human rights sufficient for asylum or Article 3 protection. Experts assess severity, systematic nature, targeting, and state response using international human rights standards.",
      },
    ],
  },
  {
    slug: "torture-cat-asylum-guide",
    title: "Torture & CAT Guide",
    metaTitle: "Torture Claims & CAT Standards | Expert Evidence Guide UK",
    metaDescription:
      "Guide to torture claims and CAT standards in UK asylum proceedings: CAT definition, Istanbul Protocol, medical interface, and state vs non-state torture analysis.",
    h1: "Torture Claims and CAT Standards: Expert Evidence Guide",
    content: [
      "The Convention Against Torture Article 1 defines torture as intentional infliction of severe pain or suffering by or with the consent of a public official for a specific purpose. Article 3 ECHR covers a broader category including inhuman or degrading treatment. Human rights experts assess whether documented treatment reaches these thresholds.",
      "The Istanbul Protocol provides standards for documenting torture and ill-treatment. Human rights experts reference these standards when interfacing with medical evidence but do not provide medical diagnoses. Medical experts assess physical and psychological sequelae while human rights experts analyse country torture patterns and return risk.",
      "State versus non-state torture analysis addresses whether the state is able and willing to protect against torture by non-state actors. CAT committee jurisprudence and UK tribunal decisions inform the due diligence standard. Experts assess impunity, institutional accountability, and whether internal relocation provides protection.",
      "Torture in detention, methods documented in the country, and targeting of specific profiles are central themes in expert reports for torture survivor claims and Article 3 deportation cases.",
    ],
    faqs: [
      {
        question: "How does the CAT apply in UK asylum proceedings?",
        answer:
          "While the CAT is not directly incorporated into UK domestic law, CAT standards inform Article 3 ECHR analysis and expert assessment of torture risk. CAT committee reports and general comments are authoritative sources for expert evidence.",
      },
      {
        question: "What is the Istanbul Protocol's role in expert evidence?",
        answer:
          "The Istanbul Protocol sets documentation standards for torture and ill-treatment. Human rights experts reference it when assessing consistency between claimed experience and country torture patterns, complementing medical expert evidence.",
      },
    ],
  },
  {
    slug: "human-rights-defender-asylum-guide",
    title: "HR Defender Asylum Guide",
    metaTitle: "Human Rights Defenders Asylum Guide | Expert Evidence UK",
    metaDescription:
      "Expert evidence guide for human rights defender and journalist asylum claims: UN Declaration, shrinking civic space, diaspora risk, and report structure.",
    h1: "Human Rights Defenders and Journalists: Expert Evidence Guide",
    content: [
      "The UN Declaration on Human Rights Defenders establishes that everyone has the right to promote and protect human rights. States must protect defenders from violence, retaliation, and discrimination. Expert witnesses assess whether the appellant's defender profile creates specific return risk.",
      "Shrinking civic space globally is documented in UN Human Rights Council reports for 2025 and 2026. Increased targeting of journalists, activists, and NGO workers creates enhanced return risk. Experts assess whether the appellant matches documented targeting patterns.",
      "Diaspora activity risk arises where UK-based political activity, social media, journalism, or NGO work is monitored by home country authorities. Experts assess surveillance capacity and documented reprisals against returnees with visible UK profiles.",
      "Expert report structure for defender claims should address: defender status and activities, past targeting, country patterns of reprisal, diaspora monitoring, state protection availability, and reasoned return risk opinion with sources including UN Special Rapporteur reports and Front Line Defenders documentation.",
    ],
    faqs: [
      {
        question: "What sources do experts use for defender risk analysis?",
        answer:
          "UN Declaration on Human Rights Defenders, Special Rapporteur reports, OHCHR defender documentation, Front Line Defenders, Amnesty International, Human Rights Watch, and updated CPIN human rights sections.",
      },
      {
        question: "Can imputed defender status create return risk?",
        answer:
          "Yes. Where authorities impute activist or journalist affiliation based on family connections, community association, or online activity, experts assess whether imputed status creates targeting risk on return.",
      },
    ],
  },
  {
    slug: "echr-immigration-tribunal-guide",
    title: "ECHR Tribunal Guide",
    metaTitle: "ECHR in UK Immigration Tribunals | Expert Evidence Guide",
    metaDescription:
      "Guide to ECHR application in UK immigration tribunals: Article 3 and Article 8, HRA 1998, tribunal application, and the human rights expert's role.",
    h1: "ECHR in UK Immigration Tribunals: Expert Evidence Guide",
    content: [
      "The Human Rights Act 1998 incorporates ECHR rights into UK law. Articles 3 and 8 are the primary ECHR provisions in immigration proceedings. Article 3 engages non-refoulement in deportation cases; Article 8 engages family and private life proportionality analysis.",
      "Tribunals apply ECHR rights with anxious scrutiny in removal cases. Human rights experts provide independent analysis of country conditions and treaty standards that inform the tribunal's assessment of whether removal would breach ECHR rights.",
      "The expert's role is to assist the tribunal with expertise beyond its ordinary knowledge. Experts must maintain independence, objectivity, and primary duty to the tribunal under Ikarian Reefer principles and Practice Direction paragraph 10.",
      "Expert reports should identify applicable ECHR provisions, relevant Strasbourg and domestic jurisprudence, country conditions, individual risk profile, and reasoned opinion on whether return would engage Article 3 or support Article 8 proportionality analysis.",
    ],
    faqs: [
      {
        question: "How does the HRA 1998 affect expert evidence?",
        answer:
          "The HRA requires public authorities including the Home Office and tribunals to act compatibly with ECHR rights. Expert evidence on country conditions and human rights standards directly informs whether removal would breach incorporated ECHR rights.",
      },
      {
        question: "What is the difference between Article 3 and Article 8 expert evidence?",
        answer:
          "Article 3 experts assess real risk of torture or inhuman treatment on return. Article 8 experts provide country conditions context for family and private life proportionality analysis. Both require independent human rights analysis beyond CPIN reproduction.",
      },
    ],
  },
  {
    slug: "instructing-human-rights-expert",
    title: "Instructing HR Expert Guide",
    metaTitle: "Instructing a Human Rights Expert | Solicitor's Guide UK",
    metaDescription:
      "Solicitor's guide to instructing a human rights expert witness: letter of instruction, documents needed, Legal Aid, and Practice Direction requirements.",
    h1: "Instructing a Human Rights Expert Witness: A Solicitor's Guide",
    content: [
      "Early instruction improves report quality and tribunal acceptance. Identify the human rights issue: violation type, Article 3 risk, or treaty standard requiring expert analysis. Determine whether a human rights framework expert, country expert, or both are needed.",
      "The letter of instruction should follow Adam Pipe October 2025 guidance: identify proceedings, funding, specific questions, appellant profile, documents provided, and deadline. Provide witness statements, Home Office decision, CPIN, medical reports, and country documentation.",
      "Legal Aid practitioners should obtain prior authority for expert fees. Standard human rights expert reports are compatible with LAA rates. Allow 2 to 3 weeks for standard reports; urgent instructions may be accommodated.",
      "Practice Direction 2024 limits expert reports to 20 pages unless permission is granted. Strategic instruction focusing on specific human rights questions improves report quality within page limits. Written questions and oral evidence may follow report service.",
    ],
    faqs: [
      {
        question: "What documents should solicitors provide to a human rights expert?",
        answer:
          "Witness statements, Home Office decision and reasons, CPIN, medical reports, country documentation, previous expert reports, and tribunal directions. A clear letter of instruction identifying specific questions is essential.",
      },
      {
        question: "Are human rights expert reports Legal Aid compatible?",
        answer:
          "Yes. Human rights expert reports are routinely funded under Legal Aid for asylum and human rights appeals. Prior authority should be obtained for expert fees in accordance with LAA guidance.",
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
