import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ChambersRegistry } from '../components/chambers/ChambersRegistry';
import { ConsultationRouter } from '../components/consultation/ConsultationRouter';
import { Clock } from 'lucide-react';

export const ConsultationPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const preSelectedPillar = searchParams.get('pillar') || undefined;

  const handleClearPreselected = () => {
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Page Masthead Banner */}
      <div className="bg-[#0F1E36] text-[#FAF8F5] py-12 sm:py-16 border-b border-[#DED8CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF8F5]/10 border border-[#FAF8F5]/20 text-[#B5893E]">
              <Clock className="w-3.5 h-3.5 text-[#B5893E]" />
              <span className="font-mono text-[11px] font-semibold tracking-wider uppercase">
                Registry Desks &bull; Prayagraj &amp; Lucknow
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#FAF8F5] leading-tight">
              Chambers &amp; Consultation Desk
            </h1>

            <p className="font-sans text-sm sm:text-base text-[#FAF8F5]/80 leading-relaxed max-w-2xl">
              Switch between our Prayagraj (Principal Seat) and Lucknow (Appellate Bench) chamber locations,
              or generate a structured matter brief for direct transmission to our registry desk.
            </p>
          </div>
        </div>
      </div>

      <main>
        {/* 1. Dual-Chamber Location Switcher */}
        <ChambersRegistry />

        {/* 2. Reactive Brief Routing Form */}
        <ConsultationRouter
          preSelectedPracticeId={preSelectedPillar}
          onClearPreSelectedPractice={handleClearPreselected}
        />
      </main>
    </div>
  );
};
