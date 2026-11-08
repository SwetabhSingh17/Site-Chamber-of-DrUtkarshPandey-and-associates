import React, { useState } from 'react';
import { Award, GraduationCap, Building2, BookOpen, CheckCircle2, FileText, ChevronRight } from 'lucide-react';
import { FOUNDER_CREDENTIALS, ACADEMIC_CREDENTIALS, FORMATIVE_MENTORSHIP } from '../../data/founder.data';
import { UpaLogo } from '../UpaLogo';

/**
 * Founder Credentials Dossier Component.
 * Styled as a formal legal brief / judicial dossier card with architectural borders.
 * Displays academic pedigree, judicial research tenure, and Supreme Court / High Court mentorship.
 */
export const FounderCredentialsCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'degrees' | 'mentorship' | 'judicial'>('degrees');

  return (
    <div className="bg-[#FAF8F5] border border-[#DED8CE] shadow-sm flex flex-col relative overflow-hidden">
      {/* Official UPA™ Monogram Masthead */}
      <div className="bg-[#FAF8F5] py-5 px-4 border-b border-[#DED8CE] flex justify-center items-center">
        <UpaLogo variant="stacked" markHeight="h-20" />
      </div>

      {/* Dossier Header Strip */}
      <div className="bg-[#0F1E36] text-[#FAF8F5] p-5 sm:p-6 border-b border-[#DED8CE]">
        <div className="flex items-center justify-between gap-3 mb-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#B5893E] font-semibold flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-[#B5893E]" />
            Dossier &bull; Founder &amp; Lead Counsel
          </span>
          <span className="inline-flex items-center gap-1 font-mono text-[9px] px-2 py-0.5 bg-[#FAF8F5]/10 border border-[#FAF8F5]/20 text-[#FAF8F5] tracking-wider uppercase">
            <CheckCircle2 className="w-3 h-3 text-[#B5893E]" /> Verified BCI Roll
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] font-bold tracking-tight">
          {FOUNDER_CREDENTIALS.fullName}
        </h3>
        
        <p className="font-mono text-xs text-[#B5893E] mt-1 font-medium">
          {FOUNDER_CREDENTIALS.academicTitle}
        </p>

        <p className="text-xs text-[#FAF8F5]/80 font-sans mt-2.5 leading-relaxed">
          {FOUNDER_CREDENTIALS.officialTitle}
          <br />
          <span className="text-[#FAF8F5]/60 text-[11px] font-mono">
            {FOUNDER_CREDENTIALS.judicialExperience}
          </span>
        </p>
      </div>

      {/* Segmented Architectural Dossier Tabs */}
      <div className="grid grid-cols-3 border-b border-[#DED8CE] bg-[#F2EFE9] text-xs font-mono">
        <button
          type="button"
          onClick={() => setActiveTab('degrees')}
          className={`py-3 px-2 text-center border-r border-[#DED8CE] transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'degrees'
              ? 'bg-[#FAF8F5] text-[#0F1E36] font-semibold shadow-xs border-b-2 border-b-[#B5893E]'
              : 'text-[#646B73] hover:text-[#0F1E36] hover:bg-[#EAE6DF]'
          }`}
        >
          <GraduationCap className="w-3.5 h-3.5 text-[#B5893E]" />
          <span>Alma Mater</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('mentorship')}
          className={`py-3 px-2 text-center border-r border-[#DED8CE] transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'mentorship'
              ? 'bg-[#FAF8F5] text-[#0F1E36] font-semibold shadow-xs border-b-2 border-b-[#B5893E]'
              : 'text-[#646B73] hover:text-[#0F1E36] hover:bg-[#EAE6DF]'
          }`}
        >
          <Building2 className="w-3.5 h-3.5 text-[#B5893E]" />
          <span>Mentorship</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('judicial')}
          className={`py-3 px-2 text-center transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'judicial'
              ? 'bg-[#FAF8F5] text-[#0F1E36] font-semibold shadow-xs border-b-2 border-b-[#B5893E]'
              : 'text-[#646B73] hover:text-[#0F1E36] hover:bg-[#EAE6DF]'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5 text-[#B5893E]" />
          <span>Judicial / Net</span>
        </button>
      </div>

      {/* Tab Panels Content */}
      <div className="p-5 sm:p-6 space-y-4">
        {activeTab === 'degrees' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            {ACADEMIC_CREDENTIALS.map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-[#F2EFE9] border-l-2 border-[#B5893E] border border-t-[#DED8CE] border-r-[#DED8CE] border-b-[#DED8CE]"
              >
                <div className="flex items-start justify-between gap-2">
                  <h4 className="font-serif font-bold text-sm text-[#0F1E36]">
                    {item.degree}
                  </h4>
                  {item.gradeOrDistinction && (
                    <span className="font-mono text-[10px] bg-[#0F1E36] text-[#FAF8F5] px-2 py-0.5 whitespace-nowrap">
                      {item.gradeOrDistinction}
                    </span>
                  )}
                </div>
                <p className="font-mono text-[11px] text-[#164E4B] font-medium mt-1">
                  {item.institution}
                </p>
                {item.notes && (
                  <p className="text-xs text-[#646B73] mt-2 font-sans leading-relaxed">
                    {item.notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'mentorship' && (
          <div className="space-y-3.5 animate-in fade-in duration-200">
            <div className="text-[11px] font-mono text-[#646B73] uppercase tracking-wider mb-2">
              Formative Senior Counsel Mentorship (SC &amp; HC)
            </div>
            {FORMATIVE_MENTORSHIP.map((mentor, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-[#FAF8F5] border border-[#DED8CE] hover:border-[#B5893E] transition-colors"
              >
                <div className="flex items-start justify-between">
                  <h4 className="font-serif font-bold text-sm text-[#0F1E36]">
                    {mentor.counselName}
                  </h4>
                  <span className="font-mono text-[10px] text-[#B5893E] uppercase font-semibold">
                    {mentor.court}
                  </span>
                </div>
                <p className="text-xs text-[#164E4B] font-mono mt-0.5">
                  {mentor.designation}
                </p>
                <div className="mt-2 text-xs text-[#2C353D] font-sans flex items-start gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#B5893E] shrink-0 mt-0.5" />
                  <span>{mentor.focusArea}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'judicial' && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <div className="p-4 bg-[#F2EFE9] border border-[#DED8CE]">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-[#B5893E]" />
                <h4 className="font-serif font-bold text-sm text-[#0F1E36]">
                  High Court Legal Researcher (2022)
                </h4>
              </div>
              <p className="text-xs text-[#2C353D] leading-relaxed">
                Appointed as Legal Researcher at the High Court of Judicature at Allahabad,
                providing in-depth doctrinal briefs, statutory interpretations, and bench memos on complex constitutional, civil, and criminal appeals.
              </p>
            </div>

            <div className="p-4 bg-[#FAF8F5] border border-[#DED8CE]">
              <h4 className="font-mono text-xs font-bold uppercase text-[#0F1E36] tracking-wider mb-2">
                National UGC-NET Qualification &bull; Law
              </h4>
              <p className="text-xs text-[#646B73] leading-relaxed">
                Qualified National Eligibility Test (NET) conducted by the University Grants Commission in Law,
                certifying national eligibility for Assistant Professorship and legal academia in India.
              </p>
            </div>

            <div className="p-4 bg-[#164E4B]/5 border border-[#164E4B]/20">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-[#164E4B] font-semibold uppercase tracking-wider">
                  Academic Scholarship Index
                </span>
                <span className="font-mono text-sm font-bold text-[#164E4B]">21+ Papers</span>
              </div>
              <p className="text-xs text-[#2C353D] mt-1.5">
                Peer-reviewed research published across constitutional reviews, criminal law journals, and commercial law commentaries.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Dossier Footer Rule */}
      <div className="mt-auto px-5 py-3.5 bg-[#F2EFE9] border-t border-[#DED8CE] flex items-center justify-between text-[11px] font-mono text-[#646B73]">
        <span>REF: UPA/REG/HC-ALLD/2026</span>
        <span className="text-[#0F1E36] font-medium">Benches: Prayagraj &amp; Lucknow</span>
      </div>
    </div>
  );
};

