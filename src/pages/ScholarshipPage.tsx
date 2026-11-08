import React from 'react';
import { ScholarshipSection } from '../components/scholarship/ScholarshipSection';
import { BookOpen } from 'lucide-react';

export const ScholarshipPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Page Masthead Banner */}
      <div className="bg-[#0F1E36] text-[#FAF8F5] py-12 sm:py-16 border-b border-[#DED8CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF8F5]/10 border border-[#FAF8F5]/20 text-[#B5893E]">
              <BookOpen className="w-3.5 h-3.5 text-[#B5893E]" />
              <span className="font-mono text-[11px] font-semibold tracking-wider uppercase">
                Academic Archive &bull; 22 Published Works
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#FAF8F5] leading-tight">
              Legal Scholarship &amp; Publications
            </h1>

            <p className="font-sans text-sm sm:text-base text-[#FAF8F5]/80 leading-relaxed max-w-2xl">
              A comprehensive digital repository of Dr. Utkarsh Pandey&rsquo;s published treatises across Constitutional
              Supremacy, BNSS/CrPC procedural criminal law, corporate governance, and human rights jurisprudence.
            </p>
          </div>
        </div>
      </div>

      {/* Main Interactive Scholarship Archive */}
      <main>
        <ScholarshipSection />
      </main>
    </div>
  );
};

