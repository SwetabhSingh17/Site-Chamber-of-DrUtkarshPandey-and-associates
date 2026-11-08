import { ICredentialRecord, IMentorshipRecord, IChamberOffice } from '../types/legal.types';

export const FOUNDER_CREDENTIALS = {
  fullName: 'Dr. Utkarsh Pandey',
  officialTitle: 'Advocate, High Court of Judicature at Allahabad',
  academicTitle: 'Ph.D. in Law, LL.M. (Hons.), B.A. LL.B. (Hons.), UGC-NET',
  barEnrollment: 'Bar Council of Uttar Pradesh • High Court Bar Association Allahabad',
  judicialExperience: 'Former Legal Researcher, High Court of Judicature at Allahabad (2022)',
  totalPublications: 22,
  totalMentorshipYears: '10+ Years Formative & Active Advocacy',
  primaryCourts: ['High Court at Allahabad (Prayagraj)', 'High Court Lucknow Bench', 'Supreme Court of India (Appellate Briefings)'],
  directPhone: '+91 82997 31098',
  phoneRaw: '918299731098',
  officeEmail: 'Consult@advdrutkarshpandey.com',
  founderEmail: 'founder@advdrutkarshpandey.com',
  domain: 'www.advdrutkarshpandey.com',
};

export const ACADEMIC_CREDENTIALS: ICredentialRecord[] = [
  {
    degree: 'Ph.D. in Law (Doctorate of Philosophy)',
    institution: 'Faculty of Law, University of Lucknow, Lucknow',
    notes: 'Doctoral dissertation centered on Advanced Constitutional Law, Judicial Discretion & Legislative Frameworks.',
  },
  {
    degree: 'LL.M. (Master of Laws) with Honours',
    institution: 'Rajiv Gandhi National University of Law (RGNUL), Patiala, Punjab',
    gradeOrDistinction: 'Honours with Distinction',
    notes: 'Specialization in Constitutional and Administrative Jurisprudence. UGC-NET (Law) Qualified.',
  },
  {
    degree: 'B.A. LL.B. (Honours) — 5-Year Integrated',
    institution: 'Damodaram Sanjivayya National Law University (DSNLU), Visakhapatnam, Andhra Pradesh',
    notes: 'Comprehensive training in Litigation, Criminal Jurisprudence, Moot Court advocacy, and Commercial Law.',
  },
];

export const FORMATIVE_MENTORSHIP: IMentorshipRecord[] = [
  {
    counselName: 'Mr. Harish N. Salve, Senior Advocate',
    designation: 'Former Solicitor General of India & King\'s Counsel (KC)',
    court: 'Supreme Court of India, New Delhi',
    periodOrTenure: 'Chamber Mentorship (Sept 2018)',
    focusArea: 'Complex Commercial Arbitration, Cross-Border Disputes & Constitutional Writs',
  },
  {
    counselName: 'Mr. N.K. Jain, Senior Advocate',
    designation: 'Senior Counsel, Supreme Court Bar',
    court: 'Supreme Court of India, New Delhi',
    periodOrTenure: 'Chamber Mentorship (Dec 2017)',
    focusArea: 'Civil Appellate Practice, Statutory Interpretations & High-Stakes Special Leave Petitions',
  },
  {
    counselName: 'Mr. M.C. Chaturvedi, Senior Advocate',
    designation: 'Former Additional Advocate General, Uttar Pradesh',
    court: 'High Court of Judicature at Allahabad',
    periodOrTenure: 'High Court Practice Training (Jan 2017)',
    focusArea: 'Article 226/227 Writ Jurisdiction, Administrative Law, Revenue & State Litigation',
  },
];

export const CHAMBER_OFFICES: IChamberOffice[] = [
  {
    id: 'prayagraj',
    city: 'Prayagraj (Allahabad)',
    tabLabel: 'Prayagraj Chamber (Principal Seat — Allahabad HC)',
    courtBench: 'High Court of Judicature at Allahabad (Principal Seat)',
    fullAddress: '5/2 Colvin Road, Pratap Enclave, Lohiya Marg, near Vaibhav Classes, Prayagraj, Uttar Pradesh – 211001',
    addressLines: [
      '5/2 Colvin Road, Pratap Enclave, Lohiya Marg',
      'Near Vaibhav Classes, Civil Lines / High Court Environs',
    ],
    postalCode: 'Prayagraj, Uttar Pradesh – 211001',
    jurisdictionFocus: 'Principal Seat of the High Court of Judicature at Allahabad, Civil Lines & Appellate Practice.',
    registryPhone: '+91 82997 31098',
    registryEmail: 'Consult@advdrutkarshpandey.com',
    clerkOrDesk: 'Chamber Registry Clerk: Principal Seat Desk',
    hearingDays: 'Mon – Fri: Court Listings & Mentions • Sat: Client Conferences',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=5%2F2+Colvin+Road%2C+Pratap+Enclave%2C+Lohiya+Marg%2C+near+Vaibhav+Classes%2C+Prayagraj%2C+Uttar+Pradesh+211001',
  },
  {
    id: 'lucknow',
    city: 'Lucknow',
    tabLabel: 'Lucknow Chamber (Lucknow Bench & Advisory Desk)',
    courtBench: 'High Court of Judicature at Allahabad (Lucknow Bench)',
    fullAddress: '1014 Skyline 3, Sushant Golf City, Ansal, Lucknow, Uttar Pradesh – 226030',
    addressLines: [
      '1014 Skyline 3, Sushant Golf City, Ansal',
      'Near Gomti Nagar Extension / High Court Bench Environs',
    ],
    postalCode: 'Lucknow, Uttar Pradesh – 226030',
    jurisdictionFocus: 'High Court of Judicature at Allahabad (Lucknow Bench), Corporate Advisory, Tribunals & Academic Consultations.',
    registryPhone: '+91 82997 31098',
    registryEmail: 'founder@advdrutkarshpandey.com',
    clerkOrDesk: 'Chamber Advisory Desk: Lucknow Bench Secretariat',
    hearingDays: 'Mon – Fri: High Court Bench Listings • Sat: Academic & Advisory Sessions',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=1014+Skyline+3%2C+Sushant+Golf+City%2C+Ansal%2C+Lucknow%2C+Uttar+Pradesh+226030',
  },
];
