import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { FounderCredentialsCard } from './FounderCredentialsCard';

export interface IHeroSectionProps {
  onOpenConsultation: () => void;
  onOpenScholarship: () => void;
}

/**
 * Editorial Hero Section with Asymmetric 7:5 Split Screen Layout.
 * Left Column: High Court credentials, core advocacy proposition, editorial lead text, metrics.
 * Right Column: Architectural Founder Credentials Dossier.
 */
export const HeroSection: React.FC<IHeroSectionProps> = ({ onOpenConsultation, onOpenScholarship }) => {
  return (
    <section className="relative border-b border-[#DED8CE] bg-[#FAF8F5] pt-10 sm:pt-14 pb-12 sm:pb-20">
      {/* Editorial Structural Background Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-12 border-x border-[#DED8CE]">
          <div className="col-span-7 border-r border-[#DED8CE] hidden lg:block" />
          <div className="col-span-5 hidden lg:block" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (7 cols): Editorial Narrative & Advocacy Positioning */}
          <div className="lg:col-span-7 space-y-6 pt-2">
            {/* Monospace Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F2EFE9] border border-[#DED8CE]">
              <span className="w-2 h-2 rounded-full bg-[#B5893E]" />
              <span className="font-mono text-[11px] font-semibold text-[#0F1E36] tracking-wider uppercase">
                ADVOCATE, HIGH COURT OF JUDICATURE AT ALLAHABAD
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] text-[#0F1E36] font-bold tracking-tight leading-[1.12]">
              Rigorous Constitutional &amp; Commercial Advocacy, Grounded in{' '}
              <span className="italic font-normal text-[#B5893E]">Doctoral Legal Scholarship.</span>
            </h1>

            {/* Lead Bio Paragraph */}
            <p className="font-sans text-base sm:text-lg text-[#2C353D] leading-relaxed">
              Dr. Utkarsh Pandey bridges high-stakes appellate litigation before the{' '}
              <strong>High Court of Judicature at Allahabad</strong> (Prayagraj and Lucknow Benches)
              with deep doctrinal jurisprudence. Combining an elite national law university pedigree—
              <span className="text-[#0F1E36] font-medium">B.A. LL.B. (Hons.) from DSNLU Visakhapatnam</span>,{' '}
              <span className="text-[#0F1E36] font-medium">LL.M. (Hons.) from RGNUL Patiala</span>,
              and <span className="text-[#0F1E36] font-medium">Ph.D. research at the Faculty of Law, University of Lucknow</span>—alongside
              over <strong>20 peer-reviewed legal treatises</strong> and former service as a High Court Legal Researcher,
              the Chamber delivers precision advocacy and strategic advisory.
            </p>

            {/* Chamber Metrics & Authority Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-y border-[#DED8CE] bg-[#F2EFE9]/40">
              <div className="px-3 border-r border-[#DED8CE] last:border-none">
                <span className="block font-mono text-xl sm:text-2xl font-bold text-[#0F1E36]">2 Benches</span>
                <span className="block font-mono text-[10px] uppercase text-[#646B73] tracking-wider mt-0.5">
                  Prayagraj &amp; Lucknow
                </span>
              </div>

              <div className="px-3 border-r border-[#DED8CE] last:border-none">
                <span className="block font-mono text-xl sm:text-2xl font-bold text-[#B5893E]">22</span>
                <span className="block font-mono text-[10px] uppercase text-[#646B73] tracking-wider mt-0.5">
                  Published Works
                </span>
              </div>

              <div className="px-3 border-r border-[#DED8CE] last:border-none">
                <span className="block font-mono text-xl sm:text-2xl font-bold text-[#164E4B]">Ph.D.</span>
                <span className="block font-mono text-[10px] uppercase text-[#646B73] tracking-wider mt-0.5">
                  Faculty of Law, LU
                </span>
              </div>

              <div className="px-3">
                <span className="block font-mono text-xl sm:text-2xl font-bold text-[#0F1E36]">UGC-NET</span>
                <span className="block font-mono text-[10px] uppercase text-[#646B73] tracking-wider mt-0.5">
                  Qualified &bull; Law
                </span>
              </div>
            </div>

            {/* Formative Training Endorsement Strip */}
            <div className="p-4 bg-[#F2EFE9] border border-[#DED8CE] text-xs text-[#2C353D]">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#B5893E] font-semibold block mb-1">
                Formative Supreme Court &amp; High Court Mentorship
              </span>
              <p className="font-sans leading-relaxed text-[#2C353D]">
                Trained in the chambers of <strong>Sr. Counsel Harish N. Salve</strong> (Supreme Court of India),{' '}
                <strong>Sr. Counsel N.K. Jain</strong> (Supreme Court of India), and{' '}
                <strong>Sr. Counsel M.C. Chaturvedi</strong> (Former Addl. Advocate General, Allahabad High Court).
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#0F1E36] hover:bg-[#1A2E4E] text-[#FAF8F5] text-xs sm:text-sm font-mono uppercase tracking-wider border border-[#0F1E36] transition-all shadow-xs group"
              >
                <span>Consult the Chamber</span>
                <ArrowRight className="w-4 h-4 text-[#B5893E] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={onOpenScholarship}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#FAF8F5] hover:bg-[#F2EFE9] text-[#0F1E36] text-xs sm:text-sm font-mono uppercase tracking-wider border border-[#DED8CE] transition-all"
              >
                <BookOpen className="w-4 h-4 text-[#164E4B]" />
                <span>Explore Legal Scholarship (22 Works)</span>
              </button>
            </div>

            {/* Monospace Sub-text notice */}
            <p className="font-mono text-[11px] text-[#646B73]">
              * Direct Briefings accepted from instructing advocates, corporate counsels, and private litigants.
            </p>
          </div>

          {/* Right Column (5 cols): Architectural Credentials Card */}
          <div className="lg:col-span-5" id="credentials">
            <FounderCredentialsCard />
          </div>
        </div>
      </div>
    </section>
  );
};
