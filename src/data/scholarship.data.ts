import { IPublicationWork } from '../types/legal.types';

/**
 * Complete Academic Publications Dataset for Dr. Utkarsh Pandey.
 * Total: 22 Indexed Works (1 Featured Book Chapter + 21 Peer-Reviewed Journal Papers).
 * Faithfully extracted from Dr. Utkarsh Pandey's academic curriculum vitae.
 */
export const ALL_PUBLICATIONS: IPublicationWork[] = [
  // --- FEATURED BOOK CHAPTER ---
  {
    id: 'pub-book-chapter',
    type: 'book_chapter',
    title: 'Sovereign Authority VS Fundamental Law: Delving into Parliamentary Sovereignty and Constitutional Supremacy',
    publicationVenue: 'A Landmark on the Indian Constitution, Institute of Legal Education',
    identifierType: 'ISBN',
    identifierValue: '978-81-954687-6-8',
    publicationDate: 'Sept 2023',
    category: 'Constitutional & Public Law',
    citation:
      'Pandey, U. (2023). Sovereign Authority VS Fundamental Law: Delving into Parliamentary Sovereignty and Constitutional Supremacy. In A Landmark on the Indian Constitution (pp. 45–82). Institute of Legal Education. ISBN: 978-81-954687-6-8.',
    isFeatured: true,
    abstractSnippet:
      'An exhaustive doctrinal inquiry contrasting the British Diceyan doctrine of unlimited Parliamentary Sovereignty with the Indian doctrine of Constitutional Supremacy and the Basic Structure inviolability established in Kesavananda Bharati.',
    peerReviewed: true,
  },

  // --- 21 PEER-REVIEWED JOURNAL PAPERS ---
  {
    id: 'pub-paper-1',
    itemNumber: 1,
    type: 'journal_paper',
    title: 'Sacred Inequities: The Evolution of Gender Dynamics in Religious Practices',
    publicationVenue: 'Indian Journal of Integrated Research in Law (IJIRL)',
    identifierType: 'ISSN',
    identifierValue: '2583-0538',
    publicationDate: 'July 2025',
    category: 'Human Rights & Socio-Legal',
    citation:
      'Pandey, U. (2025). Sacred Inequities: The Evolution of Gender Dynamics in Religious Practices. Indian Journal of Integrated Research in Law (IJIRL), 5(4), ISSN: 2583-0538.',
    isFeatured: true,
    abstractSnippet:
      'Deconstructs the constitutional intersection between religious freedom under Articles 25 and 26 and gender equality under Articles 14 and 15, examining patriarchal institutional resistance to feminist religious access.',
    peerReviewed: true,
  },
  {
    id: 'pub-paper-2',
    itemNumber: 2,
    type: 'journal_paper',
    title: "Female Genital Mutilation: An Examination Of its Impact on Women's Rights and Empowerment",
    publicationVenue: 'Indian Law Institute Law Review (ILILR)',
    identifierType: 'ISSN',
    identifierValue: 'ILI Indexed',
    publicationDate: 'May 2025',
    category: 'Human Rights & Socio-Legal',
    citation:
      "Pandey, U. (2025). Female Genital Mutilation: An Examination Of its Impact on Women's Rights and Empowerment. Indian Law Institute Law Review (ILILR), May 2025.",
    isFeatured: true,
    abstractSnippet:
      'A human rights jurisprudence assessment under international conventions (CEDAW, CRC) evaluating bodily integrity, personal liberty under Article 21, and criminal legislative lacunae in India.',
    peerReviewed: true,
  },
  {
    id: 'pub-paper-3',
    itemNumber: 3,
    type: 'journal_paper',
    title: 'Mining Operations, Indigenous Rights, And Development: Unraveling the Challenges Faced by Adivasi Communities in Niyamgiri',
    publicationVenue: 'Socio-Legal Review of Marginalised Sections (SLRMCS)',
    identifierType: 'ISSN',
    identifierValue: 'Peer-Reviewed Ref',
    publicationDate: 'May 2024',
    category: 'Human Rights & Socio-Legal',
    citation:
      'Pandey, U. (2024). Mining Operations, Indigenous Rights, And Development: Unraveling the Challenges Faced by Adivasi Communities in Niyamgiri. Socio-Legal Review of Marginalised Sections (SLRMCS), May 2024.',
    isFeatured: false,
    abstractSnippet:
      'Analyzes forest rights jurisprudence, Gram Sabha resolutions under the FRA 2006, and indigenous cultural self-determination in the aftermath of the landmark Vedanta Niyamgiri Supreme Court ruling.',
    peerReviewed: true,
  },
  {
    id: 'pub-paper-4',
    itemNumber: 4,
    type: 'journal_paper',
    title: 'Exploring The Correlation Between Cyber Stalking And Subsequent Online Harassment',
    publicationVenue: 'International Journal for Legal Research and Analysis (IJLRA)',
    identifierType: 'ISSN',
    identifierValue: '2582-6433',
    publicationDate: 'Jan 2024',
    category: 'Criminal & Cyber Law',
    citation:
      'Pandey, U. (2024). Exploring The Correlation Between Cyber Stalking And Subsequent Online Harassment. International Journal for Legal Research and Analysis (IJLRA), ISSN: 2582-6433, Jan 2024.',
    isFeatured: true,
    abstractSnippet:
      'Examines Section 354D of the IPC / Section 78 of BNS alongside Sections 66E and 67 of the Information Technology Act, evaluating procedural deficits in tracing IP spoofing and safeguarding victims.',
    peerReviewed: true,
  },
  {
    id: 'pub-paper-5',
    itemNumber: 5,
    type: 'journal_paper',
    title: 'The Psyche of Criminality: An Elaborative Examination of Mental State',
    publicationVenue: 'International Journal of Law Management and Humanities (IJLMH)',
    identifierType: 'ISSN',
    identifierValue: '2581-5369',
    publicationDate: 'Jan 2024',
    category: 'Criminal & Cyber Law',
    citation:
      'Pandey, U. (2024). The Psyche of Criminality: An Elaborative Examination of Mental State. International Journal of Law Management and Humanities (IJLMH), 7(1), ISSN: 2581-5369.',
    isFeatured: false,
    abstractSnippet:
      'Explores Mens Rea doctrines, the McNaghten rules under Section 84 of the Indian Penal Code, and modern neuropsychological insights regarding culpable mental states.',
    peerReviewed: true,
  },
  {
    id: 'pub-paper-6',
    itemNumber: 6,
    type: 'journal_paper',
    title: 'Judicial Oversight Of Administrative Discretion: Balancing The Scales Of Authority',
    publicationVenue: 'White Black Legal International Law Journal',
    identifierType: 'ISSN',
    identifierValue: '2581-8503',
    publicationDate: 'Jan 2024',
    category: 'Constitutional & Public Law',
    citation:
      'Pandey, U. (2024). Judicial Oversight Of Administrative Discretion: Balancing The Scales Of Authority. White Black Legal International Law Journal, ISSN: 2581-8503, Jan 2024.',
    isFeatured: true,
    abstractSnippet:
      'Investigates the delicate constitutional equilibrium between executive administrative expediency and judicial review under Articles 226/227, mapping the evolution of proportional restraint.',
    peerReviewed: true,
  },
  {
    id: 'pub-paper-7',
    itemNumber: 7,
    type: 'journal_paper',
    title: 'Incarcerated Births: Safeguarding The Rights Of The Children Born In Prisons',
    publicationVenue: 'Indian Journal of Integrated Research in Law (IJIRL)',
    identifierType: 'ISSN',
    identifierValue: '2583-0538',
    publicationDate: 'Jan 2024',
    category: 'Human Rights & Socio-Legal',
    citation:
      'Pandey, U. (2024). Incarcerated Births: Safeguarding The Rights Of The Children Born In Prisons. Indian Journal of Integrated Research in Law (IJIRL), 4(1), ISSN: 2583-0538.',
    isFeatured: false,
    abstractSnippet:
      'Evaluates the constitutional protections of innocent children residing in correctional institutions with inmate mothers, citing Supreme Court guidelines in R.D. Upadhyay and international standards.',
    peerReviewed: true,
  },
  {
    id: 'pub-paper-8',
    itemNumber: 8,
    type: 'journal_paper',
    title: 'In The Face Of Hardship: Exploring The Complex Factors Behind Youth Crime And Juvenile Delinquency',
    publicationVenue: 'White Black Legal International Law Journal',
    identifierType: 'ISSN',
    identifierValue: '2581-8503',
    publicationDate: 'Jan 2024',
    category: 'Criminal & Cyber Law',
    citation:
      'Pandey, U. (2024). In The Face Of Hardship: Exploring The Complex Factors Behind Youth Crime And Juvenile Delinquency. White Black Legal International Law Journal, ISSN: 2581-8503, Jan 2024.',
    isFeatured: false,
    abstractSnippet:
      'A socio-legal critique of juvenile delinquency in India, assessing systemic socio-economic hardships, family structures, and rehabilitative justice frameworks under the JJ Act 2015.',
    peerReviewed: true,
  },
  {
    id: 'pub-paper-9',
    itemNumber: 9,
    type: 'journal_paper',
    title: 'Origin And Development Of Prison System In India',
    publicationVenue: 'Indian Journal of Integrated Research in Law (IJIRL)',
    identifierType: 'ISSN',
    identifierValue: '2583-0538',
    publicationDate: 'Jan 2024',
    category: 'Criminal & Cyber Law',
    citation:
      'Pandey, U. (2024). Origin And Development Of Prison System In India. Indian Journal of Integrated Research in Law (IJIRL), 4(1), ISSN: 2583-0538.',
    isFeatured: false,
    abstractSnippet:
      'Historical trajectory from colonial Macaulay prison committee reports to modern open-jail reforms and the constitutional recognition of prisoners fundamental rights under Article 21.',
    peerReviewed: true,
  },
  {
    id: 'pub-paper-10',
    itemNumber: 10,
    type: 'journal_paper',
    title: 'Sexual Harassment Of Women At Workplace With Legislative And Judicial Response',
    publicationVenue: 'Indian Journal of Law and Legal Research (IJLLR)',
    identifierType: 'ISSN',
    identifierValue: '2582-8878',
    publicationDate: 'Jan 2024',
    category: 'Corporate & Commercial',
    citation:
      'Pandey, U. (2024). Sexual Harassment Of Women At Workplace With Legislative And Judicial Response. Indian Journal of Law and Legal Research (IJLLR), 6(1), ISSN: 2582-8878.',
    isFeatured: false,
    abstractSnippet:
      'Traces the evolution from the Vishaka judicial guidelines to the POSH Act 2013, examining employer liability, statutory internal committee obligations, and corporate governance compliance.',
    peerReviewed: true,
  },
  {
    id: 'pub-paper-11',
    itemNumber: 11,
    type: 'journal_paper',
    title: 'Crossroads of Contention: India and Pakistan at the International Court of Justice',
    publicationVenue: 'International Journal for Legal Research and Analysis (IJLRA)',
    identifierType: 'ISSN',
    identifierValue: '2582-6433',
    publicationDate: 'Dec 2023',
    category: 'International Law',
    citation:
      'Pandey, U. (2023). Crossroads of Contention: India and Pakistan at the International Court of Justice. International Journal for Legal Research and Analysis (IJLRA), ISSN: 2582-6433, Dec 2023.',
    isFeatured: false,
    abstractSnippet:
      'A rigorous international law treatise examining bilateral adjudications at the Peace Palace in The Hague, dissecting the Kulbhushan Jadhav case and consular access under the Vienna Convention (VCCR).',
    peerReviewed: true,
  },
  {
    id: 'pub-paper-12',
    itemNumber: 12,
    type: 'journal_paper',
    title: 'Regulation of Online Cab Aggregators: Issues and Challenges',
    publicationVenue: 'International Journal of Law Management and Humanities (IJLMH)',
    identifierType: 'ISSN',
    identifierValue: '2581-5369',
    publicationDate: 'Nov 2023',
    category: 'Corporate & Commercial',
    citation:
      'Pandey, U. (2023). Regulation of Online Cab Aggregators: Issues and Challenges. International Journal of Law Management and Humanities (IJLMH), 6(6), ISSN: 2581-5369.',
    isFeatured: false,
    abstractSnippet:
      'Examines the Motor Vehicles (Amendment) Act 2019 guidelines, gig worker classification, surge pricing dynamics, and antitrust scrutiny by the Competition Commission of India (CCI).',
    peerReviewed: true,
  },
  {
    id: 'pub-paper-13',
    itemNumber: 13,
    type: 'journal_paper',
    title: 'Feminism Vs Essential Tenets of Religion (With Special Reference to Sabarimala Judgement)',
    publicationVenue: 'International Journal of Law Management and Humanities (IJLMH)',
    identifierType: 'ISSN',
    identifierValue: '2581-5369',
    publicationDate: 'Oct 2023',
    category: 'Constitutional & Public Law',
    citation:
      'Pandey, U. (2023). Feminism Vs Essential Tenets of Religion (With Special Reference to Sabarimala Judgement). International Journal of Law Management and Humanities (IJLMH), 6(5), ISSN: 2581-5369.',
    isFeatured: false,
    abstractSnippet:
      'Doctrinal critique of the Essential Religious Practices (ERP) doctrine in Indian Sabarimala jurisprudence, contrasting moral constitutionalism with denominational autonomy.',
    peerReviewed: true,
  },
  {
    id: 'pub-paper-14',
    itemNumber: 14,
    type: 'journal_paper',
    title: 'Role of Confederation of Indian Industry in Development of Corporate Governance',
    publicationVenue: 'International Journal for Legal Research and Analysis (IJLRA)',
    identifierType: 'ISSN',
    identifierValue: '2582-6433',
    publicationDate: 'Oct 2023',
    category: 'Corporate & Commercial',
    citation:
      'Pandey, U. (2023). Role of Confederation of Indian Industry in Development of Corporate Governance. International Journal for Legal Research and Analysis (IJLRA), ISSN: 2582-6433, Oct 2023.',
    isFeatured: false,
    abstractSnippet:
      'Traces the genesis of voluntary corporate codes in India originating from the 1998 CII Code to the Kumar Mangalam Birla Committee and the codification in Clause 49 / Companies Act 2013.',
    peerReviewed: true,
  },
  {
    id: 'pub-paper-15',
    itemNumber: 15,
    type: 'journal_paper',
    title: "The ICC's Juridical Continuum: A Study in Legal Evolution",
    publicationVenue: 'International Journal for Legal Research and Analysis (IJLRA)',
    identifierType: 'ISSN',
    identifierValue: '2582-6433',
    publicationDate: 'Oct 2023',
    category: 'International Law',
    citation:
      "Pandey, U. (2023). The ICC's Juridical Continuum: A Study in Legal Evolution. International Journal for Legal Research and Analysis (IJLRA), ISSN: 2582-6433, Oct 2023.",
    isFeatured: false,
    abstractSnippet:
      'Traces the International Criminal Court from the Nuremberg trials through the Rome Statute, analyzing the principle of complementarity and head-of-state immunity exemptions.',
    peerReviewed: true,
  },
  {
    id: 'pub-paper-16',
    itemNumber: 16,
    type: 'journal_paper',
    title: 'Whistleblower Protection and Corporate Wrongdoings',
    publicationVenue: 'International Journal of Novel Research and Development (IJNRD)',
    identifierType: 'ISSN',
    identifierValue: '2456-4184',
    publicationDate: 'Oct 2023',
    category: 'Corporate & Commercial',
    citation:
      'Pandey, U. (2023). Whistleblower Protection and Corporate Wrongdoings. International Journal of Novel Research and Development (IJNRD), ISSN: 2456-4184, Oct 2023.',
    isFeatured: false,
    abstractSnippet:
      'Evaluates statutory whistleblower safeguards under Section 177 Companies Act 2013, SEBI Insider Trading Regulations, and the Whistle Blowers Protection Act 2014.',
    peerReviewed: true,
  },
  {
    id: 'pub-paper-17',
    itemNumber: 17,
    type: 'journal_paper',
    title: 'The Constitutional Framework for Reproductive Rights, including Access to Abortion Services',
    publicationVenue: 'International Journal for Legal Research and Analysis (IJLRA)',
    identifierType: 'ISSN',
    identifierValue: '2582-6433',
    publicationDate: 'Oct 2023',
    category: 'Constitutional & Public Law',
    citation:
      'Pandey, U. (2023). The Constitutional Framework for Reproductive Rights, including Access to Abortion Services. International Journal for Legal Research and Analysis (IJLRA), ISSN: 2582-6433, Oct 2023.',
    isFeatured: false,
    abstractSnippet:
      'Constitutional assessment of reproductive autonomy as an inalienable component of bodily integrity and privacy under Article 21, scrutinizing the Medical Termination of Pregnancy (MTP) Amendment Act 2021.',
    peerReviewed: true,
  },
  {
    id: 'pub-paper-18',
    itemNumber: 18,
    type: 'journal_paper',
    title: 'A Study on The Evolution and Effectiveness of Corporate Debt Restructuring in India',
    publicationVenue: 'Indian Journal of Law and Legal Research (IJLLR)',
    identifierType: 'ISSN',
    identifierValue: '2582-8878',
    publicationDate: 'Sept 2023',
    category: 'Corporate & Commercial',
    citation:
      'Pandey, U. (2023). A Study on The Evolution and Effectiveness of Corporate Debt Restructuring in India. Indian Journal of Law and Legal Research (IJLLR), 5(5), ISSN: 2582-8878.',
    isFeatured: true,
    abstractSnippet:
      'Traces the journey from CDR mechanisms and SICA (BIFR) to the modern market-driven insolvency resolution architecture under the Insolvency and Bankruptcy Code (IBC, 2016).',
    peerReviewed: true,
  },
  {
    id: 'pub-paper-19',
    itemNumber: 19,
    type: 'journal_paper',
    title: 'Independence: Evaluating the NJAC Vs Collegium System in India',
    publicationVenue: 'International Journal of Novel Research and Development (IJNRD)',
    identifierType: 'ISSN',
    identifierValue: '2456-4184',
    publicationDate: 'July 2023',
    category: 'Constitutional & Public Law',
    citation:
      'Pandey, U. (2023). Independence: Evaluating the NJAC Vs Collegium System in India. International Journal of Novel Research and Development (IJNRD), ISSN: 2456-4184, July 2023.',
    isFeatured: false,
    abstractSnippet:
      'Dissects the Fourth Judges Case (NJAC judgment), judicial independence as part of the Basic Structure doctrine, and democratic accountability in higher judiciary appointments.',
    peerReviewed: true,
  },
  {
    id: 'pub-paper-20',
    itemNumber: 20,
    type: 'journal_paper',
    title: 'Exploring Crime Prevention Strategies: A Cross Country Analysis',
    publicationVenue: 'TIJER International Research Journal',
    identifierType: 'ISSN',
    identifierValue: '2349-9249',
    publicationDate: 'July 2023',
    category: 'Criminal & Cyber Law',
    citation:
      'Pandey, U. (2023). Exploring Crime Prevention Strategies: A Cross Country Analysis. TIJER International Research Journal, 10(7), ISSN: 2349-9249.',
    isFeatured: false,
    abstractSnippet:
      'A comparative criminological study contrasting punitive retributive models with community policing and situational crime prevention across common law and civil law systems.',
    peerReviewed: true,
  },
  {
    id: 'pub-paper-21',
    itemNumber: 21,
    type: 'journal_paper',
    title: 'The Curious Case of Juvenile Justice: A Critical Analysis of The Indian Juvenile Justice System',
    publicationVenue: 'Indian Journal of Integrated Research in Law (IJIRL)',
    identifierType: 'ISSN',
    identifierValue: '2583-0538',
    publicationDate: 'June 2023',
    category: 'Criminal & Cyber Law',
    citation:
      'Pandey, U. (2023). The Curious Case of Juvenile Justice: A Critical Analysis of The Indian Juvenile Justice System. Indian Journal of Integrated Research in Law (IJIRL), 3(3), ISSN: 2583-0538.',
    isFeatured: false,
    abstractSnippet:
      'Critically evaluates Section 15 of the Juvenile Justice Act 2015 regarding preliminary assessment of children aged 16-18 for heinous offences, balancing child rights with public safety.',
    peerReviewed: true,
  },
];
