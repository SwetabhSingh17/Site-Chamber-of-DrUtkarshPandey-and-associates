import { IPracticeArea } from '../types/legal.types';

export const PRACTICE_AREAS: IPracticeArea[] = [
  {
    id: 'constitutional-writ',
    pillarNumber: 'Pillar I',
    title: 'Constitutional, Writ & Administrative Law',
    shortDescription:
      'Article 226 & 227 Writ Petitions before the High Court of Judicature at Allahabad and Lucknow Bench, challenging arbitrary state action, defending civil liberties, and navigating complex administrative discretion.',
    fullScope: [
      'Writ of Mandamus, Certiorari, Prohibition, Habeas Corpus, and Quo Warranto under Article 226 of the Constitution of India.',
      'Supervisory Petitions under Article 227 challenging orders of subordinate tribunals, revenue courts, and authorities.',
      'Judicial Review of Executive Orders, arbitrary government tenders, cancellation of licenses, and policy decisions.',
      'Service Jurisprudence: Seniority disputes, wrongful termination, disciplinary inquiries, pensions, and promotions in Uttar Pradesh state services and educational institutions.',
      'Panchayati Raj & Local Governance disputes: No-confidence motions, delimitation challenges, and disqualifications under UP Panchayati Raj Act.',
      'Enforcement of Fundamental Rights under Part III (Articles 14, 19, 21), personal liberty, and equal opportunity guarantees.',
    ],
    statutoryFrameworks: [
      {
        statute: 'Constitution of India, 1950',
        sections: 'Articles 14, 19, 21, 226, 227, 309, 311',
        relevance: 'Prerogative writs, doctrine of legitimate expectation, natural justice, and protection of civil servants.',
      },
      {
        statute: 'U.P. Panchayati Raj Act, 1947 & Municipalities Act, 1916',
        sections: 'Sections 14, 95(1)(g), Rules 1997',
        relevance: 'Cease and determine administrative inquiries against elected rural functionaries.',
      },
      {
        statute: 'Administrative Tribunals Act, 1985',
        sections: 'Sections 14, 19, 28',
        relevance: 'Jurisdictional division between Central Administrative Tribunal and High Court supervisory review.',
      },
    ],
    representativeResearch: [
      {
        title: 'Proportionality and Reasonableness in Article 226 Judicial Review: The Allahabad High Court Precedent',
        journal: 'Journal of Indian Constitutional Law Studies',
        year: '2023',
      },
      {
        title: 'Natural Justice in Summary Administrative Actions: A Doctrinal Critique of Quasi-Judicial Inquiries',
        journal: 'RGNUL Law Review (RLR)',
        year: '2021',
      },
    ],
    typicalForums: [
      'High Court of Judicature at Allahabad (Principal Bench)',
      'High Court of Judicature at Allahabad (Lucknow Bench)',
      'Supreme Court of India (Special Leave Petitions / Article 32)',
      'Central Administrative Tribunal (CAT), Allahabad & Lucknow Benches',
    ],
    leadCounselRole:
      'Pleadings formulation, drafting urgent writ motions, oral arguments before Division & Single Benches, and emergency stay applications.',
  },
  {
    id: 'corporate-commercial',
    pillarNumber: 'Pillar II',
    title: 'Corporate, Commercial & Arbitration Law',
    shortDescription:
      'Strategic corporate advisory and dispute resolution across Corporate Insolvency (IBC), NCLT proceedings, domestic and international commercial arbitrations, contractual remedies, and whistleblower frameworks.',
    fullScope: [
      'Corporate Insolvency Resolution Process (CIRP) under Insolvency and Bankruptcy Code (IBC, 2016) before NCLT Allahabad & NCLAT.',
      'Initiation and defense of Section 7 (Financial Creditor) and Section 9 (Operational Creditor) insolvency applications.',
      'Domestic and International Commercial Arbitration under the Arbitration and Conciliation Act, 1996 (Sections 9, 11, 34, 37).',
      'Complex commercial contract disputes: Specific performance, liquidated damages, force majeure, and invocation of bank guarantees.',
      'Corporate Governance, board advisory, oppression and mismanagement petitions under Section 241/242 of the Companies Act, 2013.',
      'Whistleblower Protection frameworks, internal corporate inquiries, and director liability mitigation.',
    ],
    statutoryFrameworks: [
      {
        statute: 'Insolvency & Bankruptcy Code, 2016 (IBC)',
        sections: 'Sections 7, 9, 10, 14 (Moratorium), 60(5), 65',
        relevance: 'Debt restructuring, moratorium relief, and challenge to fraudulent or malicious insolvency filings.',
      },
      {
        statute: 'Arbitration and Conciliation Act, 1996',
        sections: 'Section 9 (Interim Measures), Section 11 (Appointment), Section 34 (Setting Aside Awards)',
        relevance: 'Commercial court enforcement, pre-arbitral injunctions, and public policy challenge standards.',
      },
      {
        statute: 'Companies Act, 2013',
        sections: 'Sections 149, 166, 177, 241-244',
        relevance: 'Fiduciary obligations of directors, audit committee mechanisms, and prevention of minority oppression.',
      },
    ],
    representativeResearch: [
      {
        title: 'Interplay Between CIRP Timelines and Operational Creditor Fair Play: An Empirical Assessment of NCLT Jurisprudence',
        journal: 'Insolvency Law Journal & Review',
        year: '2023',
      },
      {
        title: 'Whistleblower Safeguards in Indian Listed Entities: Comparative Analysis with Sarbanes-Oxley & UK PIDA',
        journal: 'Corporate Governance & Securities Law Review',
        year: '2022',
      },
    ],
    typicalForums: [
      'National Company Law Tribunal (NCLT), Allahabad Bench',
      'National Company Law Appellate Tribunal (NCLAT), New Delhi',
      'Commercial Courts & Commercial Divisions of Allahabad High Court',
      'Arbitral Tribunals (Domestic ad-hoc and Institutional venues)',
    ],
    leadCounselRole:
      'Arbitration briefing, section 9 interim measure advocacy, CIRP representation, and commercial contract risk audits.',
  },
  {
    id: 'criminal-defense',
    pillarNumber: 'Pillar III',
    title: 'Criminal Defense & White-Collar Litigation',
    shortDescription:
      'Vigorous criminal appellate practice, High Court regular and anticipatory bail petitions, quashing proceedings under BNSS 528 / CrPC 482, economic offences defense, and juvenile justice advocacy.',
    fullScope: [
      'High Court Regular Bail and Anticipatory Bail petitions under the Bharatiya Nagarik Suraksha Sanhita (BNSS, 2023) and CrPC, 1973.',
      'Quashing of FIRs, Charge-sheets, and Summoning Orders under Section 528 BNSS / Section 482 CrPC before Allahabad High Court.',
      'Criminal Appeals and Revisions against trial court convictions, sentences, and jurisdictional errors.',
      'White-Collar Crime & Financial Fraud: Defense in proceedings by Enforcement Directorate (PMLA), SFIO, and State Economic Offences Wing (EOW).',
      'Cybercrime, Online Defamation, Data Impersonation, and IT Act violations (Sections 66, 66C, 66D, 67 of the IT Act, 2000).',
      'Juvenile Justice (Care and Protection of Children) Act proceedings: Age determination inquiries, preliminary assessments, and rehabilitation defense.',
    ],
    statutoryFrameworks: [
      {
        statute: 'Bharatiya Nagarik Suraksha Sanhita, 2023 / CrPC, 1973',
        sections: 'Section 480/482 (Bail), Section 483 (Anticipatory Bail), Section 528 (Inherent Powers)',
        relevance: 'Constitutional safeguard of personal liberty against unwarranted pre-trial detention.',
      },
      {
        statute: 'Prevention of Money Laundering Act, 2002 (PMLA)',
        sections: 'Section 3, Section 4, Section 45 (Twin Conditions of Bail)',
        relevance: 'Challenging predicate offence linkages and arbitrary provisional attachment orders.',
      },
      {
        statute: 'Juvenile Justice (Care and Protection of Children) Act, 2015',
        sections: 'Sections 12, 14, 15, 94',
        relevance: 'Bail to children in conflict with law and conclusive evidentiary standards for age determination.',
      },
    ],
    representativeResearch: [
      {
        title: 'Transition from CrPC to Bharatiya Nagarik Suraksha Sanhita (BNSS): Procedural Rights & High Court Bail Jurisprudence',
        journal: 'Criminal Law Journal (CrLJ) Perspectives',
        year: '2024',
      },
      {
        title: 'The Inherent Jurisdiction of High Courts under Section 482: Thresholds for Quashing Malicious Criminal Prosecutions',
        journal: 'Lucknow Law Journal',
        year: '2022',
      },
    ],
    typicalForums: [
      'High Court of Judicature at Allahabad (Criminal Appellate & Bail Benches)',
      'High Court Lucknow Bench (Criminal Single & Division Benches)',
      'Special Courts for PMLA, CBI, and Anti-Corruption, Lucknow & Ghaziabad',
      'Sessions Courts & Juvenile Justice Boards across Uttar Pradesh',
    ],
    leadCounselRole:
      'Urgent bail mentions, Section 528 / 482 petition draftsmanship, cross-examination strategy, and appellate oral advocacy.',
  },
  {
    id: 'civil-regulatory',
    pillarNumber: 'Pillar IV',
    title: 'Civil, Land, Matrimonial & Regulatory Practice',
    shortDescription:
      'Rigorous trial and appellate representation in Civil Procedure Code (CPC) matters, UP Revenue Code land disputes, Intellectual Property, POSH compliance, and consumer remedies.',
    fullScope: [
      'First Appeals (Section 96 CPC), Second Appeals (Section 100 CPC on Substantial Questions of Law), and Civil Revisions.',
      'Injunction suits, declaration of title, partition, and specific performance of contracts.',
      'Land and Revenue Litigation under the Uttar Pradesh Revenue Code, 2006: Mutation appeals, ceiling disputes, consolidation challenges, and Gram Sabha land acquisitions.',
      'Intellectual Property Rights (IPR): Trademark infringement, copyright actions, trade secret protection, and passing off injunctions.',
      'Labour & Industrial Relations: Industrial Disputes Act, employee termination, wage disputes, and factory compliance.',
      'Prevention of Sexual Harassment (POSH Act, 2013): Formulation of Internal Committees (IC), external presiding officer advisory, and compliance audits.',
      'Consumer Protection Act, 2019: Real estate builder-buyer disputes before State Consumer Commission (UP SCDRC) and NCDRC.',
    ],
    statutoryFrameworks: [
      {
        statute: 'Code of Civil Procedure, 1908 (CPC)',
        sections: 'Order 39 Rules 1 & 2 (Temporary Injunctions), Section 100 (Second Appeal), Order 7 Rule 11',
        relevance: 'Interim protection of immovable property, rejection of plaint for lack of cause of action.',
      },
      {
        statute: 'Uttar Pradesh Revenue Code, 2006',
        sections: 'Sections 34 (Mutation), 104, 116 (Partition of Holding), 210 (Revision)',
        relevance: 'Agricultural land tenures, bhumidhari rights, and revenue hierarchy proceedings.',
      },
      {
        statute: 'POSH Act, 2013 & Trade Marks Act, 1999',
        sections: 'POSH Sections 4, 9-13; TM Sections 29, 134, 135',
        relevance: 'Workplace gender parity enforcement and statutory trademark protection suits.',
      },
    ],
    representativeResearch: [
      {
        title: 'Substantial Question of Law in Second Appeals: A Doctrinal Re-Examination of Section 100 CPC',
        journal: 'Civil & Commercial Law Review',
        year: '2023',
      },
      {
        title: 'Tenurial Rights and Gender Parity under the U.P. Revenue Code: Resolving Succession Ambiguities',
        journal: 'Journal of Property & Land Jurisprudence',
        year: '2022',
      },
    ],
    typicalForums: [
      'High Court at Allahabad (Civil Appellate Jurisdiction)',
      'Board of Revenue, Uttar Pradesh (Prayagraj & Lucknow)',
      'State Consumer Disputes Redressal Commission (SCDRC), Lucknow',
      'District Civil Courts across Uttar Pradesh',
    ],
    leadCounselRole:
      'Formulating substantive questions of law in Second Appeals, Order 39 arguments, and cross-forum regulatory counsel.',
  },
  {
    id: 'academic-policy',
    pillarNumber: 'Pillar V',
    title: 'Academic Advisory, Legal Research & Policy Consultation',
    shortDescription:
      'Leveraging doctoral scholarship to deliver legislative drafting, comparative constitutional analysis, curriculum and syllabus architecture, and high-level policy white papers.',
    fullScope: [
      'Legislative Drafting: Assisting statutory bodies, think tanks, and institutions in formulating model bills, regulations, and bylaws.',
      'Comparative Constitutional Research: Examining constitutional frameworks across Commonwealth, UK, US, and South Asian jurisdictions.',
      'Doctoral and Postgraduate Research Methodology Advisory: Epistemological framing, qualitative empirical methodologies, and citation compliance.',
      'University Syllabus Design & Curriculum Architecture for National Law Universities and Faculty of Law programs.',
      'Expert Legal Opinions for state departments, corporate boards, and non-profit institutions on ambiguous statutory interpretations.',
      'Faculty Development Programs, Guest Lectures, and Seminars on advanced jurisprudence, AI & law, and constitutionalism.',
    ],
    statutoryFrameworks: [
      {
        statute: 'General Clauses Act, 1897',
        sections: 'Sections 6, 8, 21, 24',
        relevance: 'Standard statutory interpretation, repeal effects, and subordinate legislation validity.',
      },
      {
        statute: 'University Grants Commission (UGC) Regulations & BCI Legal Education Rules',
        sections: 'BCI Rules Part IV (Legal Education Rules, 2008)',
        relevance: 'Accreditation compliance, curriculum standards for LL.B. and LL.M. degree programs.',
      },
    ],
    representativeResearch: [
      {
        title: 'Epistemology of Legal Research in Indian Doctoral Theses: Bridging Doctrinal and Empirical Gaps',
        journal: 'Journal of Legal Education & Pedagogy',
        year: '2024',
      },
      {
        title: 'Subordinate Legislation and Legislative Veto: A Comparative Inquiry into Indian and Westminster Conventions',
        journal: 'Indian Journal of Public Administration & Law',
        year: '2023',
      },
    ],
    typicalForums: [
      'Faculty of Law, University of Lucknow & Partner Universities',
      'State Legislative Research Cells & Policy Commissions',
      'National Law Universities (NLUs) and Academic Panels',
      'International Legal Research Symposia',
    ],
    leadCounselRole:
      'Principal research lead, legislative draftsperson, academic keynote speaker, and institutional policy adviser.',
  },
];

