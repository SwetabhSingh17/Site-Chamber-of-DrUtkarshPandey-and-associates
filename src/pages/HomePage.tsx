import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HeroSection } from '../components/hero/HeroSection';
import { PRACTICE_AREAS } from '../data/practiceAreas.data';
import { ALL_PUBLICATIONS } from '../data/scholarship.data';
import { JUDICIAL_AND_CHAMBER_TIMELINE } from '../data/timeline.data';
import { FOUNDER_CREDENTIALS } from '../data/founder.data';
import {
  Layers,
  BookOpen,
  Scale,
  MapPin,
  ArrowRight,
  BookmarkCheck,
  Clock,
  Phone,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const bookChapter = ALL_PUBLICATIONS.find((p) => p.type === 'book_chapter');

  return (
    <div className="space-y-0">
      {/* 1. Asymmetric 7:5 Hero Section */}
      <HeroSection
        onOpenConsultation={() => navigate('/consultation')}
        onOpenScholarship={() => navigate('/scholarship')}
      />

      {/* 2. Practice Pillars Architectural Grid Summary */}
      <section className="py-16 sm:py-20 bg-[#F2EFE9] border-b border-[#DED8CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF8F5] border border-[#DED8CE] mb-4">
                <Layers className="w-3.5 h-3.5 text-[#B5893E]" />
                <span className="font-mono text-[11px] font-semibold text-[#0F1E36] tracking-wider uppercase">
                  Practice Jurisdictions
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0F1E36] font-bold tracking-tight">
                5 Strategic Litigation &amp; Advisory Pillars
              </h2>
              <p className="font-sans text-sm text-[#646B73] mt-2.5 leading-relaxed">
                Navigating complex statutory interpretations, supervisory writ petitions, white-collar defense,
                and corporate insolvency before the High Court of Judicature at Allahabad and national tribunals.
              </p>
            </div>

            <Link
              to="/practice-areas"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F1E36] hover:bg-[#1A2E4E] text-[#FAF8F5] text-xs font-mono uppercase tracking-wider border border-[#0F1E36] transition-all shrink-0 group shadow-xs"
            >
              <span>Explore Interactive Practice Matrix</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B5893E] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRACTICE_AREAS.slice(0, 3).map((pillar) => (
              <div
                key={pillar.id}
                className="bg-[#FAF8F5] border border-[#DED8CE] p-6 hover:border-[#B5893E] transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs uppercase text-[#B5893E] font-semibold block mb-2">
                    {pillar.pillarNumber}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#0F1E36] mb-2.5 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-xs text-[#646B73] leading-relaxed line-clamp-3 mb-4">
                    {pillar.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DED8CE] flex items-center justify-between text-xs font-mono">
                  <span className="text-[#164E4B]">{pillar.statutoryFrameworks.length} Statutory Codes</span>
                  <Link
                    to="/practice-areas"
                    className="text-[#0F1E36] hover:text-[#B5893E] font-semibold inline-flex items-center gap-1"
                  >
                    View Scope &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/practice-areas"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#0F1E36] hover:text-[#B5893E] uppercase tracking-wider underline underline-offset-4 font-semibold"
            >
              <span>View all 5 Practice Pillars &bull; Civil, Criminal, Corporate &amp; Academic Advisory</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Featured Scholarship Highlight */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-[#DED8CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F2EFE9] border border-[#DED8CE] mb-4">
                <BookOpen className="w-3.5 h-3.5 text-[#B5893E]" />
                <span className="font-mono text-[11px] font-semibold text-[#0F1E36] tracking-wider uppercase">
                  Academic Scholarship Spotlight
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0F1E36] font-bold tracking-tight">
                Groundbreaking Research &amp; Treatises (22 Works)
              </h2>
            </div>

            <Link
              to="/scholarship"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FAF8F5] hover:bg-[#F2EFE9] text-[#0F1E36] text-xs font-mono uppercase tracking-wider border border-[#DED8CE] transition-all shrink-0"
            >
              <span>Open Complete 22 Works Archive</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#164E4B]" />
            </Link>
          </div>

          {bookChapter && (
            <div className="bg-[#F2EFE9] border-2 border-[#0F1E36] p-6 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DED8CE] pb-3 mb-4">
                <span className="font-mono text-xs uppercase tracking-wider text-[#0F1E36] font-bold flex items-center gap-1.5">
                  <BookmarkCheck className="w-4 h-4 text-[#B5893E]" /> Featured Book Chapter &bull; Constitutional Law
                </span>
                <span className="font-mono text-[11px] bg-[#0F1E36] text-[#FAF8F5] px-2 py-0.5">
                  ISBN: {bookChapter.identifierValue} &bull; {bookChapter.publicationDate}
                </span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0F1E36] mb-2 leading-snug">
                &ldquo;{bookChapter.title}&rdquo;
              </h3>

              <p className="font-mono text-xs text-[#B5893E] mb-3">
                Published in the Book: <em>{bookChapter.publicationVenue}</em>
              </p>

              <p className="font-sans text-xs sm:text-sm text-[#2C353D] leading-relaxed max-w-4xl mb-4">
                {bookChapter.abstractSnippet}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[#DED8CE]">
                <span className="font-mono text-xs text-[#646B73]">
                  Author: Dr. Utkarsh Pandey &bull; Faculty of Law, Lucknow University
                </span>
                <Link
                  to="/scholarship"
                  className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-[#0F1E36] hover:text-[#B5893E] font-bold"
                >
                  <span>Explore in Publications Archive &rarr;</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. Formative Timeline & Supreme Court Mentorship Strip */}
      <section className="py-16 sm:py-20 bg-[#F2EFE9] border-b border-[#DED8CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF8F5] border border-[#DED8CE] mb-4">
                <Scale className="w-3.5 h-3.5 text-[#B5893E]" />
                <span className="font-mono text-[11px] font-semibold text-[#0F1E36] tracking-wider uppercase">
                  Judicial Pedigree &amp; Chamber Mentorship
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0F1E36] font-bold tracking-tight">
                Supreme Court Chamber Mentorship &amp; High Court Research
              </h2>
            </div>

            <Link
              to="/timeline"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F1E36] hover:bg-[#1A2E4E] text-[#FAF8F5] text-xs font-mono uppercase tracking-wider border border-[#0F1E36] transition-all shrink-0"
            >
              <span>View Full Career Ledger</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B5893E]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {JUDICIAL_AND_CHAMBER_TIMELINE.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-[#FAF8F5] border border-[#DED8CE] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[11px] text-[#B5893E] font-semibold">{item.period}</span>
                    <span className="font-mono text-[10px] bg-[#F2EFE9] border border-[#DED8CE] px-2 py-0.5 text-[#0F1E36]">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-lg text-[#0F1E36] mb-1">{item.roleOrTitle}</h3>
                  <p className="font-mono text-xs text-[#164E4B] mb-3">{item.institutionOrChamber}</p>
                  <p className="font-sans text-xs text-[#646B73] line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#DED8CE] text-right">
                  <Link
                    to="/timeline"
                    className="text-xs font-mono text-[#0F1E36] hover:text-[#B5893E] font-semibold"
                  >
                    Inspect Ledger &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Dual-Seat Chamber Presence & Direct Brief CTA */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F1E36] text-[#FAF8F5] p-8 sm:p-12 border border-[#DED8CE] relative overflow-hidden">
            <div className="max-w-3xl space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B5893E] font-bold flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#B5893E]" /> Dual High Court Seat Presence
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FAF8F5] leading-snug">
                Chambers Established in Prayagraj &amp; Lucknow
              </h2>
              <p className="text-xs sm:text-sm text-[#FAF8F5]/80 font-sans leading-relaxed">
                Operating directly before the Principal Seat at Prayagraj (5/2 Colvin Road, PIN: 211001)
                and the Lucknow Bench (1014 Skyline 3, Sushant Golf City, PIN: 226030).
                Submit a case brief or schedule a confidential chamber conference.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/consultation"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FAF8F5] text-[#0F1E36] text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#B5893E] hover:text-[#FAF8F5] transition-colors"
                >
                  <Clock className="w-4 h-4 text-[#B5893E]" />
                  <span>Open Consultation &amp; Briefing Desk</span>
                </Link>

                <a
                  href={`tel:${FOUNDER_CREDENTIALS.directPhone.replace(/[^0-9+]/g, '')}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FAF8F5]/10 hover:bg-[#FAF8F5]/20 text-[#FAF8F5] text-xs font-mono uppercase tracking-wider border border-[#FAF8F5]/30 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#B5893E]" />
                  <span>Call {FOUNDER_CREDENTIALS.directPhone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
