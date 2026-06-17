import type { FAQ } from "@/lib/schema";

export type CaseType = {
 slug: string;
 title: string;
 metaTitle: string;
 metaDescription: string;
 h1: string;
 content: string[];
 faqs: FAQ[];
 relatedViolationTypes: string[];
};

export const caseTypes: CaseType[] = [
 {
 slug: "ftt-human-rights-appeal",
 title: "FTT Human Rights Appeal",
 metaTitle: "Human Rights Expert Report for FTT Appeals | First-tier Tribunal UK",
 metaDescription:
 "Human rights expert witness reports for First-tier Tribunal human rights appeals. Article 3, treaty standards, violation severity, and return risk analysis for UK immigration proceedings.",
 h1: "Human Rights Expert Report for First-tier Tribunal Human Rights Appeals",
 content: [
 "First-tier Tribunal (Immigration and Asylum Chamber) human rights appeals require independent expert analysis of whether removal or refusal of protection would breach the appellant's human rights under the ECHR and international treaty standards. Human rights expert witnesses provide the analytical framework that tribunals need when persecution ground analysis alone is insufficient.",
 "Reports address applicable human rights instruments (ICCPR, CAT, CEDAW, ECHR), violation severity assessment, conditions on return relevant to the specific profile, and return risk opinion. Experts go beyond CPIN reproduction to apply treaty body jurisprudence, NGO documentation, and field research to the appellant's individual circumstances.",
 "Reports must comply with Immigration Tribunal Practice Direction 2024 report limits (20 pages unless permission granted) and the Expert Reports in the Immigration Tribunal guide (October 2025) by Adam Pipe. Early instruction allows adequate time for a thorough human rights analysis.",
 ],
 faqs: [
 {
 question: "When should I instruct a human rights expert for an FTT human rights appeal?",
 answer:
 "Instruct where the claim turns on human rights violations, Article 3 return risk, treaty standards, or violation severity rather than purely Refugee Convention persecution grounds. Allow 2 to 3 weeks for a standard report. Human rights experts are essential where CPIN human rights sections do not address the specific violation profile.",
 },
 {
 question: "What should a human rights expert report for the FTT contain?",
 answer:
 "Reports should address applicable human rights standards, documented violation patterns, the appellant's individual risk profile, violation severity analysis, return risk opinion, and sources including treaty body reports, OHCHR documentation, NGO reports, and tribunal decisions. A statement of truth and declaration of independence are required.",
 },
 ],
 relatedViolationTypes: ["torture-cruel-inhuman-treatment", "human-rights-defenders-journalists", "extrajudicial-killings-state-violence"],
 },
 {
 slug: "upper-tribunal-human-rights",
 title: "Upper Tribunal Human Rights",
 metaTitle: "Human Rights Expert for Upper Tribunal Appeals | UK Immigration",
 metaDescription:
 "Human rights expert witness evidence for Upper Tribunal human rights appeals. Treaty standards, Article 3 jurisprudence, and oral evidence for complex UK immigration cases.",
 h1: "Human Rights Expert for Upper Tribunal Human Rights Appeals",
 content: [
 "Upper Tribunal human rights appeals involve the highest evidential standards for expert analysis of human rights violations and return risk. Human rights experts provide treaty body standards, violation severity methodology, and reasoned opinions that withstand anxious scrutiny and rigorous cross-examination.",
 "Expert evidence in Upper Tribunal work addresses leading authority on Article 3 non-refoulement including Soering v UK [1989], Chahal v UK [1996], AAA [2023] UKSC, and DD [2024] UKSC. Reports must demonstrate independence, objectivity, and primary duty to the tribunal.",
 "Oral evidence is frequently directed in complex human rights appeals. Experts experienced in Upper Tribunal attendance can give evidence on treaty standards, violation severity, and return risk analysis under cross-examination from both parties.",
 ],
 faqs: [
 {
 question: "When is a human rights expert needed in Upper Tribunal appeals?",
 answer:
 "Human rights experts are instructed where the appeal turns on treaty standards, violation severity, Article 3 return risk, or human rights framework analysis that requires expertise beyond the tribunal's ordinary knowledge. They are particularly valuable in cases involving novel violation profiles or updated treaty body jurisprudence.",
 },
 {
 question: "Is oral evidence common in Upper Tribunal human rights cases?",
 answer:
 "Yes. Oral evidence is frequently directed in complex human rights appeals, particularly where expert methodology or return risk opinion is contested. Experts should be prepared to defend their analysis under cross-examination.",
 },
 ],
 relatedViolationTypes: ["torture-cruel-inhuman-treatment", "arbitrary-detention-disappearance", "lgbt-human-rights-violations"],
 },
 {
 slug: "article-3-deportation-removal",
 title: "Article 3 Deportation & Removal",
 metaTitle: "Article 3 Deportation Expert Witness UK | Removal Risk Reports",
 metaDescription:
      "Human rights expert reports for Article 3 ECHR deportation and removal cases. Real risk of torture, inhuman or degrading treatment, AAA [2023] UKSC, and DD [2024] UKSC analysis.",
 h1: "Human Rights Expert for Article 3 Deportation and Removal Cases",
 content: [
 "Article 3 ECHR deportation and removal cases require expert analysis of whether return would expose the individual to a real risk of torture, inhuman or degrading treatment. The Soering standard and anxious scrutiny apply, requiring the tribunal to examine the evidence with particular care given the irreversible consequences of refoulement.",
 "Human rights experts assess conditions on return, the appellant's individual profile, documented violation patterns, and whether internal relocation provides protection from Article 3 harm. Leading authority including AAA [2023] UKSC on failed asylum returnees and DD [2024] UKSC on changed conditions on return informs current expert analysis.",
 "Reports for deportation cases must address ECtHR interim measures where relevant, medical conditions engaging Paposhvili [2017] and Savran [2021] standards, and the expert's independent analysis beyond Home Office CPIN reproduction.",
 ],
 faqs: [
 {
 question: "What is the real risk test in Article 3 deportation cases?",
 answer:
 "The real risk test requires assessment of whether substantial grounds exist for believing the individual would face a real risk of torture or inhuman or degrading treatment on return. Experts analyse conditions on return, individual profile, and documented violation patterns against Soering and Chahal standards.",
 },
 {
 question: "How does AAA [2023] UKSC affect expert evidence in removal cases?",
 answer:
          "AAA [2023] UKSC established that failed asylum seekers may face enhanced return risk based on diaspora profile and lack of support networks. Human rights experts assess whether similar principles apply to the appellant's return destination and profile, analysing returnee risk beyond general conditions on return.",
 },
 ],
 relatedViolationTypes: ["torture-cruel-inhuman-treatment", "extrajudicial-killings-state-violence", "arbitrary-detention-disappearance"],
 },
 {
 slug: "article-8-family-private-life",
 title: "Article 8 Family & Private Life",
 metaTitle: "Article 8 Expert Witness UK | Family & Private Life Human Rights",
 metaDescription:
 "Human rights expert reports supporting Article 8 ECHR family and private life claims. conditions on return, risk on return, and human rights context for UK immigration tribunals.",
 h1: "Human Rights Expert for Article 8 Family and Private Life Claims",
 content: [
 "Article 8 ECHR protects the right to respect for private and family life. While proportionality analysis is primarily legal, human rights expert evidence supports Article 8 claims where return conditions engage human rights violations affecting family life, private life, or health.",
 "Experts may be instructed to provide conditions on return analysis relevant to Article 8 claims, including human rights context for family members remaining in the return destination, risk to children, and conditions that would affect the quality of family or private life on return.",
 "Human rights experts complement immigration lawyers in Article 8 proceedings by providing independent analysis of conditions on return and human rights standards that inform the tribunal's proportionality assessment under Razgar [2004] UKHL 27.",
 ],
 faqs: [
 {
 question: "When is a human rights expert relevant to Article 8 claims?",
 answer:
 "Where return conditions engage human rights violations affecting family members, children, or the appellant's private life. Experts provide conditions on return and human rights context that informs the proportionality balancing exercise, particularly where conditions in the return destination are contested.",
 },
 {
 question: "Can human rights experts address medical conditions in Article 8 cases?",
 answer:
 "Human rights experts address conditions on return affecting health and medical treatment availability, complementing medical expert evidence. Paposhvili and Savran principles may engage both Article 3 and Article 8 analysis where medical conditions affect quality of life on return.",
 },
 ],
 relatedViolationTypes: ["womens-human-rights-violations", "lgbt-human-rights-violations", "torture-cruel-inhuman-treatment"],
 },
 {
 slug: "fresh-human-rights-claims",
 title: "Fresh Human Rights Claims",
 metaTitle: "Fresh Human Rights Claim Expert Witness UK | New Evidence Reports",
 metaDescription:
 "Human rights expert reports for fresh human rights claims and further submissions. Updated conditions on return, new violation evidence, and return risk analysis.",
 h1: "Human Rights Expert for Fresh Human Rights Claims",
 content: [
 "Fresh human rights claims require evidence that was not previously considered and is capable of giving rise to a realistic prospect of success. Human rights expert reports provide updated conditions on return analysis, new violation evidence, and return risk assessment that supports further submissions under paragraph 353 of the Immigration Rules.",
 "Experts address changes in conditions on return since the original decision, new treaty body reports, updated CPIN human rights sections, and emerging violation patterns such as shrinking civic space or digital surveillance targeting. Reports must clearly identify what is new and why it changes the risk assessment.",
 "Fresh claim expert evidence is particularly valuable where the original refusal failed to consider human rights treaty standards, violation severity, or the appellant's specific human rights profile.",
 ],
 faqs: [
 {
 question: "What makes human rights expert evidence suitable for a fresh claim?",
 answer:
 "Evidence must be new, capable of giving rise to a realistic prospect of success, and not merely a reargument of previously rejected material. Updated treaty body reports, changed conditions on return, new violation patterns, or expert analysis of human rights standards not previously considered may satisfy these requirements.",
 },
 {
 question: "How quickly can a human rights expert report be prepared for a fresh claim?",
 answer:
 "Standard reports require 2 to 3 weeks. Urgent instructions may be accommodated where tribunal deadlines require. Early instruction with a clear letter of instruction identifying what is new improves report quality and tribunal acceptance.",
 },
 ],
 relatedViolationTypes: ["human-rights-defenders-journalists", "freedom-of-expression-assembly", "extrajudicial-killings-state-violence"],
 },
 {
 slug: "human-rights-defender-asylum",
 title: "HR Defender Asylum",
 metaTitle: "Human Rights Defender Asylum Expert UK | Activist & Journalist Claims",
 metaDescription:
 "Expert witness reports for human rights defender and journalist asylum claims. Shrinking civic space, diaspora risk, and UN Declaration standards for UK tribunals.",
 h1: "Human Rights Expert for Human Rights Defender Asylum Claims",
 content: [
 "Human rights defender asylum claims require expert analysis of whether the appellant's activist, journalist, or NGO profile creates specific return risk in jurisdictions with shrinking civic space. The UN Declaration on Human Rights Defenders and Special Rapporteur reports provide the international standards framework.",
 "Experts assess past targeting, imputed affiliation, documented reprisal patterns, diaspora activity risk, and whether state protection is available. UK-based activism, social media presence, and journalism can enhance return risk where home country authorities monitor diaspora profiles.",
 "Reports address the intersection of human rights defender status with other violation types including arbitrary detention, torture, and extrajudicial killings, providing comprehensive return risk analysis for tribunal proceedings.",
 ],
 faqs: [
 {
 question: "What evidence supports a human rights defender asylum claim?",
 answer:
 "Documented past targeting, membership of civil society organisations, journalism or activism history, UN and NGO reports on defender risk in the country, and evidence of diaspora monitoring. Experts synthesise these sources into a reasoned return risk opinion.",
 },
 {
 question: "How has shrinking civic space affected defender claims in 2025–2026?",
 answer:
 "UN Human Rights Council and treaty body reports document increased targeting of HR defenders globally. Experts assess whether the appellant's profile matches documented targeting patterns and whether return risk has intensified since the original decision.",
 },
 ],
 relatedViolationTypes: ["human-rights-defenders-journalists", "freedom-of-expression-assembly", "arbitrary-detention-disappearance"],
 },
 {
 slug: "torture-survivor-claims",
 title: "Torture Survivor Claims",
 metaTitle: "Torture Survivor Expert Witness UK | CAT & Article 3 Reports",
 metaDescription:
 "Human rights expert reports for torture survivor asylum claims. CAT standards, Istanbul Protocol, medical evidence interface, and return risk for UK tribunals.",
 h1: "Human Rights Expert for Torture Survivor Claims",
 content: [
 "Torture survivor claims require expert analysis of whether past torture experience indicates real risk of further ill-treatment on return. Human rights experts apply CAT Article 1 standards and Article 3 ECHR thresholds, interfacing with medical evidence documented under the Istanbul Protocol.",
 "Experts assess whether the appellant's torture history, perpetrator identity, and country patterns indicate ongoing targeting risk. State versus non-state torture analysis addresses whether the state is able and willing to protect against further ill-treatment.",
 "Reports for torture survivors address detention conditions, methods of torture documented in the country, prevalence and impunity, and whether internal relocation provides protection from further torture or inhuman treatment.",
 ],
 faqs: [
 {
 question: "How do human rights experts work with medical evidence in torture cases?",
 answer:
 "Human rights experts analyse country torture patterns and return risk while medical experts assess physical and psychological sequelae. Experts reference Istanbul Protocol documentation standards and assess whether medical evidence supports the claimed experience without providing medical diagnoses.",
 },
 {
 question: "Can past torture alone establish return risk?",
 answer:
 "Past torture is a significant factor but experts must assess whether return would expose the appellant to a real risk of further ill-treatment based on current conditions on return, perpetrator identity, impunity, and individual targeting risk.",
 },
 ],
 relatedViolationTypes: ["torture-cruel-inhuman-treatment", "arbitrary-detention-disappearance", "extrajudicial-killings-state-violence"],
 },
 {
 slug: "medical-human-rights-claims",
 title: "Medical Human Rights Claims",
 metaTitle: "Medical Human Rights Expert Witness UK | Paposhvili & Article 3",
 metaDescription:
 "Human rights expert reports for medical human rights claims. Paposhvili, Savran, medical treatment abroad, and Article 3 deportation risk analysis for UK tribunals.",
 h1: "Human Rights Expert for Medical Human Rights Claims",
 content: [
 "Medical human rights claims engage Article 3 ECHR where removal would expose the individual to intense suffering or significantly reduce life expectancy due to inadequate medical treatment in the return destination. Paposhvili [2017] and Savran [2021] establish the current legal framework for medical deportation cases.",
 "Human rights experts provide conditions on return analysis relevant to medical treatment availability, healthcare infrastructure, and whether the appellant would face inhuman or degrading treatment due to inadequate care. This complements medical expert evidence on the appellant's condition and treatment needs.",
 "Experts assess the intensity of treatment available abroad, state healthcare capacity, discrimination in healthcare access, and whether the appellant's profile affects treatment availability. Reports address the intersection of medical conditions with broader human rights violations.",
 ],
 faqs: [
 {
 question: "What is the role of a human rights expert in medical deportation cases?",
 answer:
 "Human rights experts analyse healthcare conditions, treatment availability, and discrimination in the return destination. They complement medical experts by providing conditions on return context for whether inadequate treatment would reach the Article 3 threshold under Paposhvili and Savran standards.",
 },
 {
 question: "Do human rights experts provide medical diagnoses?",
 answer:
 "No. Human rights experts analyse conditions on return and human rights standards. Medical diagnoses and treatment opinions are provided by medical experts. Human rights experts address whether conditions in the return destination engage Article 3 through inadequate healthcare.",
 },
 ],
 relatedViolationTypes: ["torture-cruel-inhuman-treatment", "womens-human-rights-violations", "arbitrary-detention-disappearance"],
 },
];

export function getCaseType(slug: string): CaseType | undefined {
 return caseTypes.find((c) => c.slug === slug);
}
