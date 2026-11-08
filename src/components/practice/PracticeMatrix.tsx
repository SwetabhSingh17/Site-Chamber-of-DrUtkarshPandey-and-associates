import React, { useState } from 'react';
import { PRACTICE_AREAS } from '../../data/practiceAreas.data';
import { PracticeDetail } from './PracticeDetail';
import { IPracticeArea } from '../../types/legal.types';
import { ChevronRight, Layers } from 'lucide-react';

export interface IPracticeMatrixProps {
  onSelectForConsultation: (practiceId: string) => void;
}

/**
 * Interactive Practice Areas Matrix (Master-Detail).
 * Features a 2-column editorial layout: Left column lists the 5 core practice pillars;
 * Right column dynamically updates with statutory frameworks, detailed scope, and research precedents.
 */
export const PracticeMatrix: React.FC<IPracticeMatrixProps> = ({ onSelectForConsultation }) => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>(PRACTICE_AREAS[0].id);

  const selectedPractice: IPracticeArea =
    PRACTICE_AREAS.find((item) => item.id === selectedPillarId) || PRACTICE_AREAS[0];

  const handleSelectPillar = (pillarId: string) => {
    setSelectedPillarId(pillarId);
    // On mobile screens, smoothly scroll to the detail container
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      const detailEl = document.getElementById('practice-detail-view');
      if (detailEl) {
        detailEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section id="practice-matrix" className="py-16 sm:py-24 bg-[#F2EFE9] border-b border-[#DED8CE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Editorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF8F5] border border-[#DED8CE] mb-4">
            <Layers className="w-3.5 h-3.5 text-[#B5893E]" />
            <span className="font-mono text-[11px] font-semibold text-[#0F1E36] tracking-wider uppercase">
              Section V &bull; Master Practice Matrix
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#0F1E36] font-bold tracking-tight">
            Comprehensive Litigation &amp; Advisory Matrix
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#646B73] mt-3 leading-relaxed">
            Select a specialized legal pillar to examine the chamber’s procedural jurisdiction, statutory frameworks,
            and authoritative scholarship developed across the Allahabad High Court and National Tribunals.
          </p>
        </div>

        {/* Master-Detail Interactive 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Master Column (Left 5 cols): Pillar Navigation Cards */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-[11px] font-mono text-[#646B73] uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Select Practice Pillar</span>
              <span>5 Strategic Disciplines</span>
            </div>

            {PRACTICE_AREAS.map((pillar) => {
              const isSelected = pillar.id === selectedPillarId;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => handleSelectPillar(pillar.id)}
                  className={`w-full text-left p-4 sm:p-5 border transition-all duration-150 cursor-pointer relative ${
                    isSelected
                      ? 'bg-[#FAF8F5] border-[#0F1E36] shadow-sm'
                      : 'bg-[#FAF8F5]/60 hover:bg-[#FAF8F5] border-[#DED8CE] hover:border-[#B5893E]'
                  }`}
                >
                  {/* Left Active Indicator Bar */}
                  {isSelected && (
                    <div className="absolute top-0 bottom-0 left-0 w-1 bg-[#B5893E]" />
                  )}

                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`font-mono text-[11px] uppercase tracking-wider font-semibold ${
                        isSelected ? 'text-[#B5893E]' : 'text-[#646B73]'
                      }`}
                    >
                      {pillar.pillarNumber}
                    </span>
                    <span
                      className={`font-mono text-[10px] ${
                        isSelected ? 'text-[#0F1E36] font-medium' : 'text-[#646B73]'
                      }`}
                    >
                      {pillar.typicalForums[0].split('(')[0].trim()}
                    </span>
                  </div>

                  <h3
                    className={`font-serif text-lg sm:text-xl font-bold tracking-tight mb-2 ${
                      isSelected ? 'text-[#0F1E36]' : 'text-[#2C353D]'
                    }`}
                  >
                    {pillar.title}
                  </h3>

                  <p className="font-sans text-xs text-[#646B73] line-clamp-2 leading-relaxed">
                    {pillar.shortDescription}
                  </p>

                  <div className="mt-3 pt-3 border-t border-[#DED8CE]/60 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#164E4B]">
                      {pillar.statutoryFrameworks.length} Statutory Codes
                    </span>
                    <span
                      className={`inline-flex items-center gap-1 ${
                        isSelected ? 'text-[#B5893E] font-semibold' : 'text-[#646B73]'
                      }`}
                    >
                      <span className="lg:hidden">View Details</span>
                      <span className="hidden lg:inline">View Framework</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detail Column (Right 7 cols): Dynamic Detail Container */}
          <div id="practice-detail-view" className="lg:col-span-7 lg:sticky lg:top-28 scroll-mt-20 sm:scroll-mt-28">
            <PracticeDetail
              practice={selectedPractice}
              onSelectForConsultation={onSelectForConsultation}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
