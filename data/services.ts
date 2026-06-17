import type { FAQ } from "@/lib/schema";

export type Service = {
 id: string;
 name: string;
 description: string;
 metaTitle: string;
 metaDescription: string;
 h1: string;
 content: string[];
 faqs: FAQ[];
};

export const services: Service[] = [
 {
    id: "human-rights-conditions-reports",
    name: "Human Rights Conditions Reports",
    description:
      "Independent analysis of human rights conditions on return, applying ICCPR, CAT, CEDAW, and ECHR treaty standards to the appellant's specific profile for tribunal proceedings.",
    metaTitle: "Human Rights Conditions Reports UK | Expert Witness",
    metaDescription:
      "Human rights conditions expert reports for UK immigration tribunals. ICCPR, CAT, CEDAW, ECHR standards applied to the appellant's profile and return risk.",
    h1: "Human Rights Conditions Reports UK",
    content: [
      "Human rights conditions reports provide independent analysis of the human rights situation on return, applying international treaty standards rather than reproducing Home Office CPIN summaries alone. Experts assess ICCPR, CAT, CEDAW, ICERD, and ECHR benchmarks against documented state practice.",
      "Reports address conditions on return relevant to the specific appellant profile: journalists, activists, religious minorities, women, LGBT individuals, torture survivors, and failed asylum returnees. Experts synthesise treaty body reports, OHCHR documentation, NGO sources, and Upper Tribunal guidance.",
      "Human rights conditions reports comply with Immigration Tribunal Practice Direction 2024 and the Adam Pipe October 2025 expert report guide. They focus on treaty standards and violation severity rather than geographic specialisation.",
    ],
    faqs: [
      {
        question: "When should I instruct a human rights conditions expert?",
        answer:
          "Instruct where the claim requires treaty standards analysis, violation severity assessment, or human rights framework evidence beyond CPIN coverage. Allow 2 to 3 weeks for a standard report.",
      },
      {
        question: "How do human rights conditions reports differ from CPINs?",
        answer:
          "CPINs provide Home Office policy information. Human rights experts apply independent treaty body standards, NGO documentation, and field research to assess violation severity and return risk for the specific appellant profile.",
      },
    ],
 },
 {
 id: "article-3-deportation",
 name: "Article 3 Deportation Risk Reports",
 description:
      "Expert assessment of real risk of torture, inhuman or degrading treatment on return for deportation and removal cases, applying Soering, Chahal, AAA [2023] UKSC, and DD [2024] UKSC jurisprudence.",
    metaTitle: "Article 3 Deportation Risk Expert Reports UK",
    metaDescription:
      "Article 3 ECHR deportation risk expert reports for UK removal cases. Soering, Chahal, AAA [2023] UKSC, DD [2024] UKSC, and real risk analysis for immigration tribunals.",
 h1: "Article 3 Deportation Risk Expert Reports UK",
 content: [
 "Article 3 deportation risk reports assess whether removal would expose the appellant to a real risk of torture, inhuman or degrading treatment. The Soering standard and anxious scrutiny apply, requiring careful analysis of conditions on return and individual profile.",
      "Experts apply leading authority including Chahal v UK [1996], AAA [2023] UKSC on failed asylum returnees, and DD [2024] UKSC on changed conditions on return. Reports address internal relocation viability and medical conditions where Paposhvili and Savran engage.",
 "Article 3 reports are essential in deportation and removal proceedings where persecution ground analysis alone is insufficient and return risk turns on human rights violations reaching the Article 3 threshold.",
 ],
 faqs: [
 {
 question: "What is the real risk test in Article 3 deportation cases?",
 answer:
 "Substantial grounds must exist for believing the individual would face torture or inhuman treatment on return. Experts analyse conditions on return, individual profile, and documented violation patterns against Soering and Chahal standards.",
 },
 {
 question: "How does AAA [2023] UKSC affect deportation expert evidence?",
 answer:
          "AAA [2023] UKSC established enhanced return risk for failed asylum seekers without support networks. Experts assess whether similar diaspora profile and lack of support network principles apply to the appellant's return destination and circumstances.",
 },
 ],
 },
 {
 id: "torture-ill-treatment",
 name: "Torture and Ill-Treatment Analysis",
 description:
 "CAT-standard analysis of torture and cruel, inhuman or degrading treatment patterns, severity assessment, and return risk for torture survivor claims and Article 3 proceedings.",
 metaTitle: "Torture & Ill-Treatment Expert Reports UK | CAT & Article 3",
 metaDescription:
 "Torture and ill-treatment expert reports for UK asylum and deportation cases. CAT standards, Istanbul Protocol interface, and Article 3 return risk analysis.",
 h1: "Torture and Ill-Treatment Expert Reports UK",
 content: [
 "Torture and ill-treatment analysis applies CAT Article 1 standards and Article 3 ECHR thresholds to assess whether documented treatment reaches the severity required for protection and whether return would expose the appellant to further harm.",
 "Experts analyse torture patterns in the return destination, state versus non-state perpetrators, impunity, detention conditions, and whether the appellant's profile creates specific targeting risk. Medical evidence is interfaced using Istanbul Protocol documentation standards without providing medical diagnoses.",
 "Reports address torture survivor claims, Article 3 deportation proceedings, and fresh claims where updated torture documentation or changed conditions on return affect return risk assessment.",
 ],
 faqs: [
 {
 question: "How do human rights experts work with medical evidence in torture cases?",
 answer:
 "Human rights experts analyse country torture patterns and return risk while medical experts assess physical and psychological sequelae. Experts reference Istanbul Protocol standards without providing medical diagnoses.",
 },
 {
 question: "Can past torture alone establish Article 3 return risk?",
 answer:
 "Past torture is significant but experts must assess whether return would expose the appellant to a real risk of further ill-treatment based on current conditions, perpetrator identity, impunity, and individual targeting risk.",
 },
 ],
 },
 {
 id: "arbitrary-detention",
 name: "Arbitrary Detention Reports",
 description:
 "Expert reports on arbitrary detention, enforced disappearance, and detention conditions reaching Article 3 thresholds under ICCPR Article 9 standards.",
 metaTitle: "Arbitrary Detention Expert Reports UK | Human Rights Asylum",
 metaDescription:
 "Arbitrary detention and enforced disappearance expert reports for UK asylum and human rights appeals. ICCPR Article 9, detention conditions, and return risk.",
 h1: "Arbitrary Detention Expert Reports UK",
 content: [
 "Arbitrary detention reports analyse ICCPR Article 9 violations, enforced disappearance patterns, and whether detention conditions reach inhuman or degrading treatment under Article 3 ECHR. Experts assess political detention, journalist targeting, and ethnic minority detention patterns.",
 "Reports address whether arbitrary detention is used systematically against the appellant's profile, detention facility conditions, state accountability mechanisms, and return risk for further arbitrary detention or disappearance.",
 "Experts draw on UN Working Group reports, ICCPR Human Rights Committee jurisprudence, and documented country practice to provide independent analysis beyond CPIN summaries.",
 ],
 faqs: [
 {
 question: "When does arbitrary detention ground an asylum or Article 3 claim?",
 answer:
 "Where detention is systematic against a particular profile and conditions reach inhuman or degrading treatment, or where return would expose the appellant to further arbitrary detention. Experts assess legal framework, patterns, and individual risk.",
 },
 {
 question: "How are enforced disappearance claims assessed?",
 answer:
 "Experts analyse documented disappearance patterns, state practice, whether the appellant's profile creates targeting risk, and whether return would expose them to disappearance or further arbitrary detention.",
 },
 ],
 },
 {
 id: "hr-defender-risk",
 name: "Human Rights Defender Risk Assessment",
 description:
 "Specialist assessment of return risk for journalists, activists, and human rights defenders in jurisdictions with shrinking civic space and diaspora monitoring.",
 metaTitle: "Human Rights Defender Risk Expert Reports UK",
 metaDescription:
 "Human rights defender and journalist risk expert reports for UK asylum cases. Shrinking civic space, diaspora activity, and UN Declaration standards.",
 h1: "Human Rights Defender Risk Assessment UK",
 content: [
 "Human rights defender risk assessments analyse whether the appellant's activist, journalist, or NGO profile creates specific return risk in jurisdictions with shrinking civic space. The UN Declaration on Human Rights Defenders provides the international standards framework.",
 "Experts assess past targeting, imputed affiliation, documented reprisal patterns, UK-based diaspora activity, and surveillance capacity. UN Special Rapporteur reports for 2025 and 2026 document increased targeting of defenders globally.",
 "Reports address the intersection of defender status with arbitrary detention, torture, extrajudicial killings, and freedom of expression violations, providing comprehensive return risk analysis for tribunal proceedings.",
 ],
 faqs: [
 {
 question: "Are human rights defenders at particular risk on return?",
 answer:
 "HR defenders, journalists, and activists face enhanced targeting in jurisdictions with shrinking civic space. Experts assess whether the appellant's defender profile creates specific return risk beyond general conditions on return.",
 },
 {
 question: "Does UK-based activism affect return risk?",
 answer:
 "Yes. Diaspora political activity, social media, journalism, and NGO work in the UK can create or enhance return risk where home country authorities monitor diaspora activity. Experts assess surveillance capacity and documented reprisals.",
 },
 ],
 },
 {
 id: "womens-human-rights",
 name: "Women's Human Rights Reports",
 description:
 "CEDAW-standard analysis of women's human rights violations including FGM, forced marriage, honour-based violence, and state protection failures.",
 metaTitle: "Women's Human Rights Expert Reports UK | CEDAW & Asylum",
 metaDescription:
 "Women's human rights expert reports for UK asylum cases. CEDAW standards, FGM, forced marriage, honour-based violence, and state protection failures.",
 h1: "Women's Human Rights Expert Reports UK",
 content: [
 "Women's human rights reports apply CEDAW standards and broader international human rights treaty obligations to assess gender-based violations including FGM, forced marriage, honour-based violence, domestic violence with state protection failures, and gender discrimination in law and practice.",
 "Experts assess whether documented violations reach the severity threshold for asylum or Article 3 protection, complementing particular social group and gender-based persecution analysis where Refugee Convention grounds are also engaged.",
 "Reports address daughter-at-risk claims, gender apartheid discourse in UN human rights mechanisms, and state enforcement failures using CEDAW committee observations and general recommendations.",
 ],
 faqs: [
 {
 question: "How does CEDAW apply in UK asylum proceedings?",
 answer:
 "CEDAW provides the international standard for assessing women's human rights violations. Experts use CEDAW committee observations to assess whether documented violations reach the severity threshold for protection.",
 },
 {
 question: "Can a human rights expert address FGM claims?",
 answer:
 "Yes. FGM violates multiple human rights including bodily integrity and freedom from cruel treatment. Experts assess prevalence, state enforcement, community pressure, and return risk using treaty body standards.",
 },
 ],
 },
 {
 id: "lgbt-human-rights",
 name: "LGBT Human Rights Violation Reports",
 description:
 "Thematic analysis of LGBT human rights violations across jurisdictions, covering criminalisation, enforcement, social hostility, and internal relocation viability.",
 metaTitle: "LGBT Human Rights Expert Reports UK",
 metaDescription:
 "LGBT human rights expert reports for UK asylum and deportation cases. ICCPR, Yogyakarta Principles, criminalisation, enforcement, and return risk across jurisdictions.",
 h1: "LGBT Human Rights Expert Reports UK",
 content: [
 "LGBT human rights reports apply ICCPR rights to privacy and non-discrimination, the Yogyakarta Principles, and ECHR Article 3 standards to assess criminalisation, state enforcement, social hostility, and return risk across multiple jurisdictions.",
 "Experts assess whether return would expose the appellant to violations reaching Article 3 or persecution threshold, including police harassment, non-state violence, and community hostility. HJ (Iran) [2010] principles inform discretion and concealment analysis.",
 "Thematic LGBT human rights experts provide analysis across return scenarios using treaty body standards and the overarching human rights framework.",
 ],
 faqs: [
 {
 question: "What human rights standards apply to LGBT asylum claims?",
 answer:
 "UN human rights mechanisms hold that criminalisation of same-sex conduct violates ICCPR rights. Experts assess criminal framework, enforcement practice, non-state violence, and whether return would expose the appellant to Article 3 level harm.",
 },
 {
 question: "Can a human rights expert cover LGBT claims from multiple return scenarios?",
 answer:
          "Yes. Human rights experts specialising in LGBT rights provide thematic analysis using ICCPR and Yogyakarta Principles standards across return scenarios.",
 },
 ],
 },
 {
 id: "rule-of-law",
 name: "Rule of Law and Judicial Independence Reports",
 description:
 "Expert analysis of rule of law failures, judicial independence deficits, and institutional accountability mechanisms relevant to human rights protection on return.",
 metaTitle: "Rule of Law Expert Reports UK | Judicial Independence Asylum",
 metaDescription:
 "Rule of law and judicial independence expert reports for UK human rights asylum and deportation cases. Institutional accountability and state protection analysis.",
 h1: "Rule of Law and Judicial Independence Expert Reports UK",
 content: [
 "Rule of law reports analyse institutional accountability mechanisms, judicial independence deficits, corruption in law enforcement and courts, and whether the state is willing and able to protect individuals from human rights violations on return.",
 "Experts assess documented patterns of impunity, politically compromised judiciary, lack of effective remedies, and whether the appellant could access meaningful state protection. These reports support both human rights violation analysis and state protection assessments.",
 "Reports draw on UN rule of law indicators, treaty body concluding observations, and NGO documentation on judicial independence and institutional reform failures in the return destination.",
 ],
 faqs: [
 {
 question: "When is a rule of law expert relevant to an asylum claim?",
 answer:
 "Where the claim turns on whether the state can provide effective protection, whether judicial remedies are accessible, or whether institutional failures enable human rights violations against the appellant's profile on return.",
 },
 {
 question: "How do rule of law reports relate to state protection analysis?",
 answer:
 "Rule of law analysis informs whether state protection is meaningful in practice. Experts assess institutional capacity, corruption, political interference in courts, and documented impunity patterns relevant to the appellant's claim.",
 },
 ],
 },
];

export function getService(id: string): Service | undefined {
 return services.find((s) => s.id === id);
}
