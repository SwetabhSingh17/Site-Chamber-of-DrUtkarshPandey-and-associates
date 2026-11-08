/**
 * Type definitions for Chamber of Dr. Utkarsh Pandey and Associates.
 * All interfaces are prefixed with 'I' per project guidelines.
 */

export type TUrgencyLevel = 'urgent' | 'routine' | 'advisory' | 'academic';
export type TJurisdictionBench = 'prayagraj' | 'lucknow' | 'supreme_court' | 'tribunals' | 'academic_policy';

export type TPublicationCategory =
  | 'Constitutional & Public Law'
  | 'Corporate & Commercial'
  | 'Criminal & Cyber Law'
  | 'Human Rights & Socio-Legal'
  | 'International Law';

export type TInquiryRoutingType = 'litigation' | 'academic_founder';

export type TMatterCategory =
  | 'Writ/Constitutional'
  | 'Corporate/Arbitration'
  | 'Criminal/Bail'
  | 'Civil/Matrimonial'
  | 'Academic/Research Collaboration';

export interface IPracticeArea {
  id: string;
  pillarNumber: string;
  title: string;
  shortDescription: string;
  fullScope: string[];
  statutoryFrameworks: {
    statute: string;
    sections: string;
    relevance: string;
  }[];
  representativeResearch: {
    title: string;
    journal: string;
    year: string;
  }[];
  typicalForums: string[];
  leadCounselRole: string;
}

export interface IPublicationWork {
  id: string;
  itemNumber?: number;
  type: 'book_chapter' | 'journal_paper';
  title: string;
  publicationVenue: string;
  identifierType: 'ISSN' | 'ISBN';
  identifierValue: string;
  publicationDate: string;
  category: TPublicationCategory;
  citation: string;
  isFeatured: boolean;
  abstractSnippet: string;
  peerReviewed: boolean;
}

export interface ICredentialRecord {
  degree: string;
  institution: string;
  gradeOrDistinction?: string;
  notes?: string;
}

export interface IMentorshipRecord {
  counselName: string;
  designation: string;
  court: string;
  periodOrTenure: string;
  focusArea: string;
}

export interface ITimelineMilestone {
  id: string;
  period: string;
  roleOrTitle: string;
  institutionOrChamber: string;
  courtOrLocation: string;
  category: 'judicial_research' | 'chamber_training' | 'academic_honour';
  description: string;
  keyCompetencies: string[];
  tag: string;
}

export interface IAcademicHonor {
  id: string;
  title: string;
  organization: string;
  year: string;
  categoryBadge: string;
  details: string;
}

export interface IChamberOffice {
  id: 'prayagraj' | 'lucknow';
  city: string;
  tabLabel: string;
  courtBench: string;
  fullAddress: string;
  addressLines: string[];
  postalCode: string;
  jurisdictionFocus: string;
  registryPhone: string;
  registryEmail: string;
  clerkOrDesk: string;
  hearingDays: string;
  googleMapsUrl: string;
}

export interface IChamberBriefForm {
  inquiryType: TInquiryRoutingType;
  fullName: string;
  phone: string;
  preferredChamber: 'Prayagraj Office' | 'Lucknow Office';
  matterCategory: TMatterCategory;
  briefSynopsis: string;
  bciAffirmed: boolean;
}

export interface IOfficeStatus {
  isOpen: boolean;
  currentTimeIst: string;
  statusMessage: string;
  nextSessionTime: string;
}
