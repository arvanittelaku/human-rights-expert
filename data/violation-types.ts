import type { FAQ } from "@/lib/schema";

export type ViolationType = {
 slug: string;
 title: string;
 metaTitle: string;
 metaDescription: string;
 h1: string;
 content: string[];
 faqs: FAQ[];
 relatedCaseTypes: string[];
};

export const violationTypes: ViolationType[] = [
 {
 slug: "torture-cruel-inhuman-treatment",
 title: "Torture & Ill-Treatment",
 metaTitle: "Torture Expert Witness UK | Article 3 & CAT Standards",
 metaDescription:
 "Human rights expert witness reports on torture and cruel, inhuman or degrading treatment for UK asylum and Article 3 deportation cases. CAT standards, Istanbul Protocol, and return risk analysis.",
 h1: "Torture & Ill-Treatment Expert Witness UK | Article 3 & CAT",
 content: [
 "Torture and cruel, inhuman or degrading treatment are among the most serious human rights violations assessed in UK asylum and immigration proceedings. The Convention Against Torture (CAT) Article 1 defines torture as intentional infliction of severe pain or suffering by or with the consent of a public official for a specific purpose. Article 3 ECHR prohibits torture, inhuman or degrading treatment without exception, forming the basis of non-refoulement in deportation cases.",
 "Human rights expert witnesses analyse documented patterns of torture and ill-treatment in the return destination, assess whether the appellant's profile creates specific targeting risk, and evaluate state capacity and willingness to prevent torture on return. Experts interface with medical evidence where torture survivors present psychological or physical sequelae, referencing the Istanbul Protocol for documentation standards without providing medical diagnoses.",
 "Expert analysis addresses torture in detention, state versus non-state actor torture, and whether internal relocation provides protection from further ill-treatment. Reports draw on CAT committee concluding observations, Amnesty International and Human Rights Watch documentation, OHCHR reports, and Upper Tribunal guidance to assess whether documented treatment reaches the Article 3 threshold and whether return would expose the appellant to a real risk of such treatment.",
 ],
 faqs: [
 {
 question:
 "What is the difference between torture and inhuman or degrading treatment under Article 3?",
 answer:
 "Torture under the CAT requires intentional infliction of severe pain or suffering for a specific purpose by or with consent of a public official. Article 3 ECHR covers a broader category including inhuman or degrading treatment that does not meet the full torture definition. Human rights experts assess whether documented treatment reaches the Article 3 threshold and whether return would expose the appellant to a real risk of such treatment.",
 },
 {
 question: "How do human rights experts assess torture risk on return?",
 answer:
 "Experts analyse: documented patterns of torture in the country; whether the appellant's profile creates specific targeting risk; state capacity and willingness to prevent torture; whether internal relocation provides protection; and whether medical or psychological evidence supports the claimed experience. Sources include CAT committee reports, Amnesty International, Human Rights Watch, and OHCHR.",
 },
 ],
 relatedCaseTypes: ["torture-survivor-claims", "article-3-deportation-removal", "ftt-human-rights-appeal"],
 },
 {
 slug: "arbitrary-detention-disappearance",
 title: "Arbitrary Detention & Disappearance",
 metaTitle: "Arbitrary Detention Expert Witness UK | Human Rights Asylum",
 metaDescription:
 "Expert witness reports on arbitrary detention and enforced disappearance for UK asylum and human rights appeals. ICCPR Article 9, detention conditions, and return risk analysis.",
 h1: "Arbitrary Detention Expert Witness UK | Human Rights Asylum",
 content: [
 "Arbitrary detention violates ICCPR Article 9, which guarantees the right to liberty and security of person. Enforced disappearance under international law involves detention followed by refusal to acknowledge deprivation of liberty, placing victims outside the protection of the law. Both violations are assessed by human rights expert witnesses in UK asylum and immigration tribunal proceedings.",
 "Political detention, detention of journalists, opposition members, and ethnic minorities may reach the severity threshold for asylum or Article 3 protection where conditions constitute inhuman or degrading treatment. Experts analyse the legal framework governing detention, patterns of arbitrary arrest, conditions in detention facilities, and whether the appellant's profile creates specific targeting risk on return.",
 "Expert methodology addresses documented patterns of detention and disappearance, state practice and institutional accountability, and whether return would expose the appellant to further arbitrary detention or enforced disappearance. Reports reference ICCPR treaty body jurisprudence, UN Working Group on Enforced or Involuntary Disappearances reports, and documented cases matching the appellant's profile.",
 ],
 faqs: [
 {
 question: "When does arbitrary detention constitute a human rights violation sufficient for asylum?",
 answer:
 "Arbitrary detention violates ICCPR Article 9. Where detention is used systematically against a particular profile (journalists, opposition members, ethnic minorities) and conditions reach inhuman or degrading treatment, it can ground asylum or Article 3 claims. Experts assess the legal framework, patterns of detention, conditions, and individual risk on return.",
 },
 {
 question: "How are enforced disappearance claims assessed?",
 answer:
 "Enforced disappearance involves detention followed by refusal to acknowledge deprivation of liberty. Experts analyse documented patterns, state practice, whether the appellant's profile creates targeting risk, and whether return would expose them to disappearance or further arbitrary detention.",
 },
 ],
 relatedCaseTypes: ["ftt-human-rights-appeal", "human-rights-defender-asylum", "article-3-deportation-removal"],
 },
 {
 slug: "freedom-of-expression-assembly",
 title: "Freedom of Expression & Assembly",
 metaTitle: "Freedom of Expression Expert Witness UK | Human Rights Asylum",
 metaDescription:
 "Human rights expert reports on freedom of expression and assembly violations for UK asylum appeals. ICCPR Articles 19 and 21, digital surveillance, and activist return risk.",
 h1: "Freedom of Expression Expert Witness UK | Human Rights Asylum",
 content: [
 "Freedom of expression and assembly are protected under ICCPR Articles 19 and 21 and form a central theme in human rights asylum claims involving journalists, activists, protesters, and political dissidents. Human rights expert witnesses assess whether restrictions on expression reach persecution or Article 3 severity and whether the appellant's actual or imputed expression creates a real risk on return.",
 "In 2025 and 2026, digital surveillance and online expression violations are emerging expert evidence themes. State use of social media monitoring, online harassment, and criminalisation of dissent creates enhanced return risk for activists and journalists whose UK-based activity may be known to home country authorities. Experts assess surveillance capacity and documented cases of reprisals against returnees.",
 "Expert reports address protest and assembly restrictions, criminalisation of dissent, imputed political opinion from expression, and the interface between freedom of expression and other human rights violations including arbitrary detention and torture. Sources include ICCPR Human Rights Committee general comments, Special Rapporteur on freedom of expression reports, and documented country practice.",
 ],
 faqs: [
 {
 question: "Can freedom of expression violations ground an asylum claim?",
 answer:
 "Yes, where restrictions on expression reach persecution or Article 3 severity and are linked to a Convention ground or human rights violation. Human rights experts assess whether the appellant's expression (actual or imputed) creates a real risk on return, referencing ICCPR standards and documented country practice.",
 },
 {
 question: "How does digital surveillance affect return risk in 2025–2026?",
 answer:
 "Increasing state use of digital surveillance, social media monitoring, and online harassment creates enhanced return risk for activists and journalists whose online activity in the UK may be known to home country authorities. Experts assess surveillance capacity and documented cases of reprisals.",
 },
 ],
 relatedCaseTypes: ["human-rights-defender-asylum", "ftt-human-rights-appeal", "fresh-human-rights-claims"],
 },
 {
 slug: "freedom-of-religion-belief",
 title: "Freedom of Religion & Belief",
 metaTitle: "Freedom of Religion Expert Witness UK | Human Rights Framework",
 metaDescription:
 "Human rights expert witness reports on freedom of religion and belief violations. ICCPR Article 18, ECHR Article 9, blasphemy laws, and return risk for UK immigration tribunals.",
 h1: "Freedom of Religion Expert Witness UK | Human Rights Framework",
 content: [
 "Freedom of religion and belief is protected under ICCPR Article 18 and ECHR Article 9. Human rights expert witnesses analyse violations through the international human rights law framework, assessing state obligations, blasphemy and apostasy laws, religious minority targeting, and violation severity from a human rights perspective distinct from Refugee Convention religion ground analysis.",
 "UN human rights mechanisms consistently hold that criminalisation of blasphemy and apostasy violates freedom of religion and expression. Experts assess the legal framework, enforcement practice, non-state actor violence against religious minorities, and risk to the specific appellant including converts, atheists, and members of minority faiths.",
 "Human rights experts may be instructed alongside persecution experts in complex religious freedom claims. Where persecution ground analysis alone is insufficient, human rights experts provide treaty body standards, violation severity assessment, and return risk analysis under Article 3 ECHR and ICCPR benchmarks.",
 ],
 faqs: [
 {
 question: "How does a human rights expert differ from a religious persecution expert?",
 answer:
 "A human rights expert analyses freedom of religion violations through ICCPR Article 18 and ECHR Article 9 standards, assessing state obligations and violation severity. Persecution experts analyse the Refugee Convention religion ground and persecution nexus. Both may be instructed in complex religious freedom claims.",
 },
 {
 question: "Are blasphemy and apostasy laws human rights violations?",
 answer:
 "UN human rights mechanisms consistently hold that criminalisation of blasphemy and apostasy violates freedom of religion and expression. Experts assess the legal framework, enforcement practice, and risk to the specific appellant including non-state actor violence.",
 },
 ],
 relatedCaseTypes: ["ftt-human-rights-appeal", "upper-tribunal-human-rights", "fresh-human-rights-claims"],
 },
 {
 slug: "womens-human-rights-violations",
 title: "Women's Human Rights",
 metaTitle: "Women's Human Rights Expert Witness UK | CEDAW & Asylum",
 metaDescription:
 "Expert witness reports on women's human rights violations for UK asylum cases. CEDAW standards, FGM, forced marriage, honour-based violence, and state protection failures.",
 h1: "Women's Human Rights Expert Witness UK | CEDAW & Asylum",
 content: [
 "Women's human rights violations are assessed against CEDAW standards and broader international human rights treaty obligations. Human rights expert witnesses analyse FGM as a violation of bodily integrity and freedom from torture, forced marriage, domestic violence with state protection failures, honour-based violence, and gender discrimination in law and practice.",
 "CEDAW provides the international standard for assessing women's human rights violations. While not directly enforceable in UK tribunals, experts use CEDAW committee observations and general recommendations to assess whether documented violations reach the severity threshold for protection. This complements particular social group and gender-based persecution analysis.",
 "Daughter-at-risk claims, gender apartheid discourse in UN human rights mechanisms, and state failure to protect women from violence are key themes in 2025 and 2026 expert evidence. Experts assess prevalence, state enforcement, community pressure, and return risk using treaty body standards alongside conditions on return evidence.",
 ],
 faqs: [
 {
 question: "How does CEDAW apply in UK asylum proceedings?",
 answer:
 "CEDAW provides the international standard for assessing women's human rights violations. While not directly enforceable in UK tribunals, experts use CEDAW committee observations and general recommendations to assess whether documented violations reach the severity threshold for protection. This complements PSG and gender-based persecution analysis.",
 },
 {
 question: "Can a human rights expert address FGM claims?",
 answer:
 "Yes. FGM violates multiple human rights including the right to bodily integrity, freedom from torture and cruel treatment, and the rights of the child. Human rights experts assess prevalence, state enforcement, community pressure, and return risk using treaty body standards alongside conditions on return evidence.",
 },
 ],
 relatedCaseTypes: ["ftt-human-rights-appeal", "fresh-human-rights-claims", "article-3-deportation-removal"],
 },
 {
 slug: "lgbt-human-rights-violations",
 title: "LGBT Human Rights",
 metaTitle: "LGBT Human Rights Expert Witness UK | ",
 metaDescription:
 "Human rights expert reports on LGBT violations for UK asylum and immigration tribunals. ICCPR, Yogyakarta Principles, criminalisation, and return risk across jurisdictions.",
 h1: "LGBT Human Rights Expert Witness UK | ",
 content: [
 "LGBT human rights violations are assessed against ICCPR rights to privacy and non-discrimination, the Yogyakarta Principles, and ECHR Article 3 standards. Human rights expert witnesses provide thematic analysis across jurisdictions covering criminalisation statutes, state enforcement versus social hostility, and internal relocation viability from a human rights law perspective.",
 "UN human rights mechanisms hold that criminalisation of same-sex conduct violates fundamental rights. Experts assess criminal framework, enforcement practice, non-state violence, and whether return would expose the appellant to violations reaching Article 3 or persecution threshold. The interface with HJ (Iran) [2010] UKSC principles informs discretion and concealment analysis.",
 "Thematic LGBT human rights experts provide analysis across return scenarios using the overarching human rights framework. Reports address state tolerance of violence, police harassment, and community hostility as human rights violations distinct from ordinary criminal violence.",
 ],
 faqs: [
 {
 question: "What human rights standards apply to LGBT asylum claims?",
 answer:
 "UN human rights mechanisms hold that criminalisation of same-sex conduct violates ICCPR rights to privacy and non-discrimination. Experts assess criminal framework, enforcement practice, non-state violence, and whether return would expose the appellant to violations reaching Article 3 or persecution threshold.",
 },
 {
 question: "Can a human rights expert cover LGBT claims from multiple return scenarios?",
 answer:
          "Yes. Human rights experts specialising in LGBT rights provide thematic analysis covering criminalisation, enforcement, social hostility, and internal relocation viability using treaty body standards.",
 },
 ],
 relatedCaseTypes: ["ftt-human-rights-appeal", "upper-tribunal-human-rights", "article-3-deportation-removal"],
 },
 {
 slug: "human-rights-defenders-journalists",
 title: "HR Defenders & Journalists",
 metaTitle: "Human Rights Defenders Expert Witness UK | Activists & Journalists",
 metaDescription:
 "Expert witness reports on human rights defenders, journalists, and activists at risk. UN Declaration, shrinking civic space, diaspora activity, and return risk analysis.",
 h1: "Human Rights Defenders Expert Witness UK | Activists & Journalists",
 content: [
 "Human rights defenders, journalists, and activists face enhanced targeting in jurisdictions with shrinking civic space. The UN Declaration on Human Rights Defenders establishes standards for state protection of those who promote and protect human rights. Expert witnesses assess whether the appellant's defender profile creates specific return risk beyond general conditions on return.",
 "UN Special Rapporteur reports document systematic reprisals against defenders in 2025 and 2026, including targeting of those with visible diaspora profiles. UK-based political activity, social media, journalism, and NGO work can create or enhance return risk where home country authorities monitor diaspora activity. Experts assess surveillance capacity and documented reprisals against returnees.",
 "Expert methodology for defender risk profiles addresses past targeting, imputed affiliation with opposition or civil society, documented patterns of reprisal against similar profiles, and whether state protection is available on return. Reports draw on OHCHR defender reports, Front Line Defenders documentation, and CPIN human rights sections updated in 2025.",
 ],
 faqs: [
 {
 question: "Are human rights defenders at particular risk on return?",
 answer:
 "HR defenders, journalists, and activists face enhanced targeting in jurisdictions with shrinking civic space. UN Special Rapporteur reports document systematic reprisals. Experts assess whether the appellant's defender profile creates specific return risk beyond general conditions on return.",
 },
 {
 question: "Does UK-based activism affect return risk?",
 answer:
 "Yes. Diaspora political activity, social media, journalism, and NGO work in the UK can create or enhance return risk where home country authorities monitor diaspora activity. Experts assess surveillance capacity and documented reprisals against returnees with visible UK profiles.",
 },
 ],
 relatedCaseTypes: ["human-rights-defender-asylum", "ftt-human-rights-appeal", "fresh-human-rights-claims"],
 },
 {
 slug: "extrajudicial-killings-state-violence",
 title: "Extrajudicial Killings & State Violence",
 metaTitle: "Extrajudicial Killings Expert Witness UK | State Violence Asylum",
 metaDescription:
 "Human rights expert reports on extrajudicial killings and state-sponsored violence for UK asylum cases. ICCPR Article 6, death squads, and individual return risk analysis.",
 h1: "Extrajudicial Killings Expert Witness UK | State Violence Asylum",
 content: [
 "The right to life under ICCPR Article 6 is among the most fundamental human rights. Extrajudicial killings, death squad activity, police and military violence, and ethnic targeting constitute serious human rights violations assessed by expert witnesses in UK asylum and deportation proceedings.",
 "Experts analyse documented patterns of extrajudicial execution, targeting criteria, state agent involvement or tolerance, and whether the appellant's profile matches documented victims. State-sponsored or tolerated violence against particular groups constitutes human rights violations distinct from ordinary criminal violence, requiring analysis of institutional accountability mechanisms.",
 "Return risk assessment addresses whether the appellant faces a real risk of extrajudicial killing based on their profile and whether the state is unable or unwilling to protect. Reports reference UN Special Rapporteur on extrajudicial executions reports, OHCHR documentation, and documented patterns of state violence updated in Home Office CPINs during 2025.",
 ],
 faqs: [
 {
 question: "When do extrajudicial killings constitute grounds for protection?",
 answer:
 "Where the appellant faces a real risk of extrajudicial killing on return based on their profile, and the state is unable or unwilling to protect. Experts analyse documented patterns of killings, targeting criteria, and whether the appellant's profile matches documented victims.",
 },
 {
 question: "How is state violence distinguished from general criminal violence?",
 answer:
 "Experts assess whether violence is systematic, targets specific profiles, involves state agents or state tolerance, and whether institutional accountability mechanisms exist. State-sponsored or tolerated violence against particular groups constitutes human rights violations distinct from ordinary crime.",
 },
 ],
 relatedCaseTypes: ["article-3-deportation-removal", "ftt-human-rights-appeal", "torture-survivor-claims"],
 },
];

export function getViolationType(slug: string): ViolationType | undefined {
 return violationTypes.find((v) => v.slug === slug);
}
