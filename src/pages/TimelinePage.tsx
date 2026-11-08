import React from 'react';
import { AcademicTimelineSection } from '../components/timeline/AcademicTimelineSection';
import { Scale } from 'lucide-react';

export const TimelinePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F2EFE9]">
      {/* Page Masthead Banner */}
      <div className="bg-[#0F1E36] text-[#FAF8F5] py-12 sm:py-16 border-b border-[#DED8CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF8F5]/10 border border-[#FAF8F5]/20 text-[#B5893E]">
              <Scale className="w-3.5 h-3.5 text-[#B5893E]" />
              <span className="font-mono text-[11px] font-semibold tracking-wider uppercase">
                Career Ledger &bull; Judicial &amp; Academic Milestones
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#FAF8F5] leading-tight">
              Judicial Research &amp; Chamber Pedigree
            </h1>

            <p className="font-sans text-sm sm:text-base text-[#FAF8F5]/80 leading-relaxed max-w-2xl">
              Chronological ledger detailing Dr. Utkarsh Pandey&rsquo;s tenure as High Court Legal Researcher (2022),
              formative Supreme Court chamber training under Senior Advocates Harish Salve and N.K. Jain, and national moot court distinctions.
            </p>
          </div>
        </div>
      </div>

      {/* Main Interactive Timeline Section */}
      <main>
        <AcademicTimelineSection />
      </main>
    </div>
  );
};

