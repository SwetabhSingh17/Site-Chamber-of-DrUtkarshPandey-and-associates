import React from 'react';
import { IPracticeArea } from '../../types/legal.types';
import { BookOpen, Scale, Landmark, ArrowUpRight } from 'lucide-react';

export interface IPracticeDetailProps {
  practice: IPracticeArea;
  onSelectForConsultation: (practiceId: string) => void;
}

/**
 * Detailed view of the selected practice pillar.
 * Outlines statutory frameworks, specific scope items, judicial forums, and academic scholarship.
 */
export const PracticeDetail: React.FC<IPracticeDetailProps> = ({ practice, onSelectForConsultation }) => {
  return (
    <div className="bg-[#FAF8F5] border border-[#DED8CE] p-6 sm:p-8 animate-in fade-in duration-200">
      {/* Pillar Header */}
      <div className="border-b border-[#DED8CE] pb-5 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B5893E] font-semibold">
            {practice.pillarNumber} &bull; Master Practice Framework
          </span>
          <span className="font-mono text-[10px] text-[#646B73] px-2 py-0.5 bg-[#F2EFE9] border border-[#DED8CE] uppercase self-start sm:self-auto">
            Active Registry Focus
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl text-[#0F1E36] font-bold tracking-tight">
          {practice.title}
        </h3>

        <p className="text-sm text-[#2C353D] font-sans mt-3 leading-relaxed">
          {practice.shortDescription}
        </p>
      </div>

      {/* Scope of Practice & Advocacy */}
      <div className="mb-7">
        <h4 className="font-mono text-xs uppercase tracking-wider text-[#0F1E36] font-bold mb-3.5 flex items-center gap-2">
          <Scale className="w-4 h-4 text-[#B5893E]" />
          Procedural Scope &amp; Litigation Representation
        </h4>
        <div className="grid grid-cols-1 gap-2.5">
          {practice.fullScope.map((item, index) => (
            <div
              key={index}
              className="p-3 bg-[#F2EFE9] border-l-2 border-[#164E4B] border border-t-[#DED8CE] border-r-[#DED8CE] border-b-[#DED8CE] text-xs sm:text-sm text-[#2C353D] leading-relaxed flex items-start gap-2.5"
            >
              <span className="font-mono text-[11px] font-semibold text-[#164E4B] shrink-0 mt-0.5">
                {(index + 1).toString().padStart(2, '0')}.
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Statutory & Regulatory Frameworks */}
      <div className="mb-7">
        <h4 className="font-mono text-xs uppercase tracking-wider text-[#0F1E36] font-bold mb-3.5 flex items-center gap-2">
          <Landmark className="w-4 h-4 text-[#B5893E]" />
          Key Statutory Provisions &amp; Codes
        </h4>
        <div className="space-y-3">
          {practice.statutoryFrameworks.map((framework, idx) => (
            <div
              key={idx}
              className="p-3.5 bg-[#FAF8F5] border border-[#DED8CE] hover:border-[#B5893E] transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <span className="font-serif font-bold text-sm text-[#0F1E36]">
                  {framework.statute}
                </span>
                <span className="font-mono text-[11px] text-[#B5893E] bg-[#FAF8F5] border border-[#DED8CE] px-2 py-0.5 self-start sm:self-auto">
                  {framework.sections}
                </span>
              </div>
              <p className="text-xs text-[#646B73] font-sans mt-1">
                {framework.relevance}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Representative Research Precedents */}
      {practice.representativeResearch.length > 0 && (
        <div className="mb-7">
          <h4 className="font-mono text-xs uppercase tracking-wider text-[#0F1E36] font-bold mb-3.5 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#B5893E]" />
            Chamber Scholarship &amp; Doctrinal Precedents
          </h4>
          <div className="space-y-2">
            {practice.representativeResearch.map((paper, idx) => (
              <div
                key={idx}
                className="p-3 bg-[#F2EFE9] border border-[#DED8CE] flex items-start justify-between gap-3 text-xs"
              >
                <div>
                  <p className="font-serif font-semibold text-[#0F1E36] text-xs sm:text-sm">
                    &ldquo;{paper.title}&rdquo;
                  </p>
                  <p className="font-mono text-[11px] text-[#164E4B] mt-0.5">
                    {paper.journal} &bull; {paper.year}
                  </p>
                </div>
                <span className="font-mono text-[10px] bg-[#FAF8F5] border border-[#DED8CE] px-2 py-0.5 text-[#646B73] shrink-0">
                  Author: Dr. U. Pandey
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Typical Forums & Direct Consultation Action */}
      <div className="pt-5 border-t border-[#DED8CE] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#646B73] block mb-1">
            Primary Listing Courts:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {practice.typicalForums.slice(0, 2).map((forum, idx) => (
              <span
                key={idx}
                className="font-mono text-[10px] bg-[#F2EFE9] border border-[#DED8CE] px-2 py-0.5 text-[#0F1E36]"
              >
                {forum}
              </span>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => onSelectForConsultation(practice.id)}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#0F1E36] hover:bg-[#1A2E4E] text-[#FAF8F5] text-xs font-mono uppercase tracking-wider border border-[#0F1E36] transition-all w-full sm:w-auto shrink-0 group cursor-pointer text-center"
        >
          <span>Brief on this Pillar</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#B5893E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
