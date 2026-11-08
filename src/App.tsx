import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { BciDisclaimerModal } from './components/layout/BciDisclaimerModal';
import { ScrollToTop } from './components/common/ScrollToTop';

// Dedicated Page Views
import { HomePage } from './pages/HomePage';
import { PracticeAreasPage } from './pages/PracticeAreasPage';
import { ScholarshipPage } from './pages/ScholarshipPage';
import { TimelinePage } from './pages/TimelinePage';
import { ConsultationPage } from './pages/ConsultationPage';

/**
 * Chamber of Dr. Utkarsh Pandey and Associates
 * Multi-Page Editorial Routing Architecture
 * Cleanly separates Overview, Practice Matrix, 22-Works Scholarship, Timeline, and Consultation.
 */
export default function App(): React.JSX.Element {
  const [bciModalForceOpen, setBciModalForceOpen] = useState<boolean>(false);

  return (
    <BrowserRouter>
      {/* Viewport Scroll Reset on Route Change */}
      <ScrollToTop />

      <div className="min-h-screen bg-[#FAF8F5] text-[#2C353D] font-sans flex flex-col selection:bg-[#B5893E]/20 selection:text-[#0F1E36]">
        {/* 1. Bar Council of India (BCI) Compliance Gate Modal (Global & Session-Persisted) */}
        <BciDisclaimerModal
          forceOpen={bciModalForceOpen}
          onClose={() => setBciModalForceOpen(false)}
        />

        {/* 2. Editorial Multi-Page Sticky Navigation */}
        <Header
          onOpenBciDisclaimer={() => setBciModalForceOpen(true)}
        />

        {/* 3. Routed Page Views */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/practice-areas" element={<PracticeAreasPage />} />
            <Route path="/scholarship" element={<ScholarshipPage />} />
            <Route path="/timeline" element={<TimelinePage />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* 4. Editorial Chamber Footer */}
        <Footer
          onOpenBciDisclaimer={() => setBciModalForceOpen(true)}
        />
      </div>
    </BrowserRouter>
  );
}
