import React, { useState } from 'react';
import {
  JUDICIAL_AND_CHAMBER_TIMELINE,
  ACADEMIC_HONOURS_AND_CERTIFICATIONS,
} from '../../data/timeline.data';
import { ITimelineMilestone } from '../../types/legal.types';
import {
  Scale,
  Award,
  ChevronRight,
  Shield,
  Calendar,
  CheckCircle2,
  Database,
} from 'lucide-react';

export const AcademicTimelineSection: React.FC = () => {
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string>(
    JUDICIAL_AND_CHAMBER_TIMELINE[0].id
  );

  const selectedMilestone: ITimelineMilestone =
    JUDICIAL_AND_CHAMBER_TIMELINE.find((m) => m.id === selectedMilestoneId) ||
    JUDICIAL_AND_CHAMBER_TIMELINE[0];

  return (
    <section id="timeline" className="py-16 sm:py-24 bg-[#F2EFE9] border-b border-[#DED8CE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF8F5] border border-[#DED8CE] mb-4">
            <Scale className="w-3.5 h-3.5 text-[#B5893E]" />
            <span className="font-mono text-[11px] font-semibold text-[#0F1E36] tracking-wider uppercase">
              Section VI &bull; Judicial Pedigree &amp; Chamber Timeline
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#0F1E36] font-bold tracking-tight">
            Judicial Research, Supreme Court Mentorship &amp; Academic Honours
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#646B73] mt-3 leading-relaxed">
            A comprehensive record of Dr. Utkarsh Pandey&rsquo;s formative trajectory: from High Court judicial bench
            research and Senior Counsel chamber mentorship at the Supreme Court of India, to national moot court distinctions and cybersecurity certification.
          </p>
        </div>

        {/* --- PART 1: INTERACTIVE TIMELINE LEDGER (MASTER-DETAIL) --- */}
        <div className="bg-[#FAF8F5] border border-[#DED8CE] p-5 sm:p-8 mb-12 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#DED8CE] pb-4 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#B5893E] shrink-0" />
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F1E36]">
                Judicial Research &amp; Chamber Training Chronology
              </h3>
            </div>
            <span className="font-mono text-[10px] sm:text-[11px] text-[#646B73] self-start sm:self-auto">
              Chronological Ledger (2016 – 2022)
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Timeline Track (5 cols) */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="text-[11px] font-mono text-[#646B73] uppercase tracking-wider mb-2">
                Select Chamber Appointment:
              </div>

              {JUDICIAL_AND_CHAMBER_TIMELINE.map((item) => {
                const isSelected = item.id === selectedMilestoneId;
                const isJudicial = item.category === 'judicial_research';

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedMilestoneId(item.id)}
                    className={`w-full text-left p-4 border transition-all relative ${
                      isSelected
                        ? 'bg-[#F2EFE9] border-[#0F1E36] shadow-xs'
                        : 'bg-[#FAF8F5] hover:bg-[#F2EFE9]/60 border-[#DED8CE] hover:border-[#B5893E]'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#B5893E]" />
                    )}

                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-mono text-xs font-bold text-[#0F1E36]">
                        {item.period}
                      </span>
                      <span
                        className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 border ${
                          isJudicial
                            ? 'bg-[#164E4B]/10 text-[#164E4B] border-[#164E4B]/30 font-bold'
                            : 'bg-[#FAF8F5] text-[#646B73] border-[#DED8CE]'
                        }`}
                      >
                        {item.courtOrLocation.includes('Supreme Court')
                          ? 'Supreme Court of India'
                          : item.courtOrLocation.includes('High Court')
                          ? 'High Court Allahabad'
                          : 'State Commission'}
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-sm sm:text-base text-[#0F1E36]">
                      {item.roleOrTitle}
                    </h4>

                    <p className="font-mono text-xs text-[#B5893E] mt-0.5">
                      {item.institutionOrChamber}
                    </p>

                    <div className="mt-2 text-[11px] font-mono flex items-center justify-between text-[#646B73]">
                      <span>{item.tag}</span>
                      <span className="inline-flex items-center gap-0.5 text-[#0F1E36]">
                        Inspect <ChevronRight className="w-3 h-3 text-[#B5893E]" />
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Milestone Dossier Container (7 cols) */}
            <div className="lg:col-span-7 bg-[#F2EFE9] border border-[#DED8CE] p-5 sm:p-7 sticky top-28 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#DED8CE] pb-3 mb-4">
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-[#B5893E] font-semibold">
                  {selectedMilestone.tag}
                </span>
                <span className="font-mono text-[11px] sm:text-xs bg-[#FAF8F5] border border-[#DED8CE] px-2.5 py-0.5 text-[#0F1E36] self-start sm:self-auto">
                  {selectedMilestone.period}
                </span>
              </div>

              <h4 className="font-serif text-2xl font-bold text-[#0F1E36] mb-1">
                {selectedMilestone.roleOrTitle}
              </h4>

              <p className="font-mono text-xs text-[#164E4B] font-semibold mb-3">
                {selectedMilestone.institutionOrChamber} &bull; {selectedMilestone.courtOrLocation}
              </p>

              <div className="text-xs sm:text-sm text-[#2C353D] font-sans leading-relaxed mb-6">
                {selectedMilestone.description}
              </div>

              {/* Key Competencies Acquired */}
              <div className="pt-4 border-t border-[#DED8CE]">
                <span className="font-mono text-xs uppercase tracking-wider text-[#0F1E36] font-bold block mb-2.5">
                  Doctrinal &amp; Procedural Competencies Exercised:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedMilestone.keyCompetencies.map((comp, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 bg-[#FAF8F5] border border-[#DED8CE] text-xs font-mono text-[#0F1E36] flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B5893E] shrink-0" />
                      <span>{comp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- PART 2: MOOT COURT HONOURS, CERTIFICATIONS & RESEARCH MASTERY --- */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-4 h-4 text-[#B5893E]" />
            <h3 className="font-serif text-2xl font-bold text-[#0F1E36]">
              Moot Court Distinctions, Academic Honours &amp; Technical Accreditations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACADEMIC_HONOURS_AND_CERTIFICATIONS.map((honor) => (
              <div
                key={honor.id}
                className="bg-[#FAF8F5] border border-[#DED8CE] hover:border-[#B5893E] p-6 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider font-semibold text-[#164E4B] bg-[#164E4B]/10 border border-[#164E4B]/20 px-2 py-0.5">
                      {honor.categoryBadge}
                    </span>
                    <span className="font-mono text-xs text-[#646B73]">{honor.year}</span>
                  </div>

                  <h4 className="font-serif text-lg font-bold text-[#0F1E36] mb-1.5 leading-snug">
                    {honor.title}
                  </h4>

                  <p className="font-mono text-xs text-[#B5893E] font-medium mb-3">
                    {honor.organization}
                  </p>

                  <p className="font-sans text-xs text-[#2C353D] leading-relaxed">
                    {honor.details}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#DED8CE] flex items-center justify-between text-[11px] font-mono text-[#646B73]">
                  <span>Credential Status</span>
                  <span className="text-[#0F1E36] font-semibold flex items-center gap-1">
                    <Shield className="w-3 h-3 text-[#B5893E]" /> Authenticated
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- PART 3: ADVANCED LEGAL RESEARCH TOOLS MASTERY BAND --- */}
        <div className="mt-12 bg-[#0F1E36] text-[#FAF8F5] border border-[#DED8CE] p-5 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[#B5893E] font-semibold flex items-center gap-2">
                <Database className="w-4 h-4 text-[#B5893E] shrink-0" />
                <span>Institutional Legal Information Systems &amp; Case Law Informatics</span>
              </span>
              <h4 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#FAF8F5]">
                SCC Online &bull; Manupatra &bull; Westlaw India &bull; HeinOnline
              </h4>
              <p className="text-xs text-[#FAF8F5]/80 font-sans max-w-2xl leading-relaxed">
                Proficient in multi-jurisdictional database architecture, boolean legislative search algorithms,
                appellate citator tracking, and empirical case analytics utilized for High Court bench briefs and published scholarship.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 w-full sm:w-auto shrink-0">
              <span className="font-mono text-[11px] sm:text-xs bg-[#FAF8F5]/10 border border-[#FAF8F5]/20 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[#FAF8F5]">
                SCC Online Web
              </span>
              <span className="font-mono text-[11px] sm:text-xs bg-[#FAF8F5]/10 border border-[#FAF8F5]/20 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[#FAF8F5]">
                Manupatra Analytics
              </span>
              <span className="font-mono text-[11px] sm:text-xs bg-[#FAF8F5]/10 border border-[#FAF8F5]/20 px-2.5 py-1 sm:px-3 sm:py-1.5 text-[#FAF8F5]">
                Westlaw International
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
