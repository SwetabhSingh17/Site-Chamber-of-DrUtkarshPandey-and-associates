import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PracticeMatrix } from '../components/practice/PracticeMatrix';
import { Layers } from 'lucide-react';

export const PracticeAreasPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectForConsultation = (practiceId: string) => {
    // Navigate directly to the consultation page with the selected practice pillar pre-filled
    navigate(`/consultation?pillar=${encodeURIComponent(practiceId)}`);
  };

  return (
    <div className="min-h-screen bg-[#F2EFE9]">
      {/* Page Masthead Banner */}
      <div className="bg-[#0F1E36] text-[#FAF8F5] py-12 sm:py-16 border-b border-[#DED8CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF8F5]/10 border border-[#FAF8F5]/20 text-[#B5893E]">
              <Layers className="w-3.5 h-3.5 text-[#B5893E]" />
              <span className="font-mono text-[11px] font-semibold tracking-wider uppercase">
                Practice Jurisdictions &bull; Master Matrix
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#FAF8F5] leading-tight">
              Litigation &amp; Advisory Matrix
            </h1>

            <p className="font-sans text-sm sm:text-base text-[#FAF8F5]/80 leading-relaxed max-w-2xl">
              Examine the Chamber&rsquo;s five master practice disciplines, statutory frameworks,
              and representative High Court and tribunal precedents under Dr. Utkarsh Pandey.
            </p>
          </div>
        </div>
      </div>

      {/* Main Interactive Matrix */}
      <main>
        <PracticeMatrix onSelectForConsultation={handleSelectForConsultation} />
      </main>
    </div>
  );
};
