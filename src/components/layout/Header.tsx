import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Clock, Calendar, ArrowUpRight, Scale } from 'lucide-react';
import { UpaLogo } from '../UpaLogo';
import { FOUNDER_CREDENTIALS } from '../../data/founder.data';

export interface IHeaderProps {
  onOpenConsultation?: () => void;
  onOpenBciDisclaimer: () => void;
}

/**
 * Editorial Sticky Navigation Bar with Button-like Segmented Routing.
 * Displays UPA™ Monogram, chamber schedule,
 * and high-contrast, non-overlapping button-like navigation pills.
 */
export const Header: React.FC<IHeaderProps> = ({ onOpenBciDisclaimer }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Overview', to: '/' },
    { label: 'Practice Matrix', to: '/practice-areas' },
    { label: 'Scholarship (22)', to: '/scholarship' },
    { label: 'Judicial Timeline', to: '/timeline' },
    { label: 'Chambers & Desk', to: '/consultation' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF8F5]/95 backdrop-blur-xs border-b border-[#DED8CE] transition-all">
      {/* Editorial Top Bar / Chamber Registry Status Band */}
      <div className="hidden lg:flex items-center justify-between px-6 xl:px-12 py-1.5 bg-[#F2EFE9] border-b border-[#DED8CE] text-[11px] font-mono text-[#646B73]">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-[#0F1E36] font-medium">
            <Scale className="w-3.5 h-3.5 text-[#B5893E]" />
            High Court of Judicature at Allahabad • Prayagraj &amp; Lucknow Benches
          </span>
          <span className="text-[#DED8CE]">|</span>
          <a
            href={`tel:${FOUNDER_CREDENTIALS.directPhone.replace(/[^0-9+]/g, '')}`}
            className="text-[#0F1E36] font-semibold hover:text-[#B5893E] transition-colors flex items-center gap-1"
          >
            <span>Chamber Desk: {FOUNDER_CREDENTIALS.directPhone}</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-[10px] uppercase tracking-wider text-[#646B73]">
            Mon–Sat | 10:00 AM – 7:00 PM IST
          </span>
          <span className="text-[#DED8CE]">|</span>
          <button
            type="button"
            onClick={onOpenBciDisclaimer}
            className="text-[10px] uppercase tracking-wider text-[#646B73] hover:text-[#0F1E36] underline decoration-[#DED8CE] underline-offset-2 transition-colors cursor-pointer"
          >
            BCI Rule 36 Compliance
          </button>
        </div>
      </div>

      {/* Main Editorial Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3 xl:gap-6">
          {/* Brand Logo & Monogram */}
          <Link to="/" className="flex items-center shrink-0 focus:outline-hidden">
            <UpaLogo variant="horizontal" markHeight="h-9 sm:h-10 lg:h-11" hideSubtitleOnLg={true} />
          </Link>

          {/* Desktop Navigation Links (Button-Like Editorial Controls) */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `inline-flex items-center gap-1.5 px-2.5 py-1.5 xl:px-3.5 xl:py-2 text-[11px] xl:text-xs font-mono uppercase tracking-wider border transition-all whitespace-nowrap select-none ${
                    isActive
                      ? 'bg-[#0F1E36] text-[#FAF8F5] border-[#0F1E36] font-semibold shadow-xs'
                      : 'bg-[#F2EFE9]/80 hover:bg-[#F2EFE9] text-[#2C353D] hover:text-[#0F1E36] border-[#DED8CE] hover:border-[#B5893E]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#B5893E] shrink-0" />}
                    <span>{link.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Quick Consultation CTA Button */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => navigate('/consultation')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 xl:px-4 xl:py-2 bg-[#B5893E] hover:bg-[#9E732E] text-[#0F1E36] text-[11px] xl:text-xs font-mono uppercase font-bold tracking-wider border border-[#B5893E] transition-all shadow-xs group cursor-pointer whitespace-nowrap"
            >
              <span>Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#0F1E36] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button (< lg screens) with Golden Ratio Morphing Animation */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2.5 border transition-all duration-[262ms] cursor-pointer select-none group focus:outline-hidden ${
                mobileMenuOpen
                  ? 'border-[#B5893E] bg-[#F2EFE9] text-[#0F1E36] shadow-xs'
                  : 'border-[#DED8CE] bg-transparent text-[#0F1E36] hover:bg-[#F2EFE9] hover:border-[#B5893E]'
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              <div className="relative w-5 h-4 flex flex-col justify-between items-center overflow-visible">
                {/* Top Line - Morphs to 45deg Diagonal on Open */}
                <span
                  className={`w-5 h-[2px] bg-current rounded-xs transition-all duration-[382ms] origin-center ease-golden ${
                    mobileMenuOpen
                      ? 'translate-y-[7px] rotate-45 bg-[#B5893E]'
                      : 'translate-y-0 rotate-0'
                  }`}
                />
                {/* Middle Line - Collapses to 0 width with Golden Deceleration */}
                <span
                  className={`w-5 h-[2px] bg-current rounded-xs transition-all duration-[262ms] origin-center ease-golden ${
                    mobileMenuOpen
                      ? 'opacity-0 scale-x-0'
                      : 'opacity-100 scale-x-100'
                  }`}
                />
                {/* Bottom Line - Morphs to -45deg Diagonal on Open */}
                <span
                  className={`w-5 h-[2px] bg-current rounded-xs transition-all duration-[382ms] origin-center ease-golden ${
                    mobileMenuOpen
                      ? '-translate-y-[7px] -rotate-45 bg-[#B5893E]'
                      : 'translate-y-0 rotate-0'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop Overlay with Soft Golden Fade */}
      <div
        className={`fixed inset-0 top-[65px] bg-[#0F1E36]/35 backdrop-blur-xs z-30 lg:hidden transition-opacity duration-[382ms] ease-golden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Menu (< lg screens) with Golden Expansion Curve & Staggered Reveal */}
      <div
        className={`relative z-40 lg:hidden grid transition-all duration-[424ms] ease-golden overflow-hidden bg-[#FAF8F5] ${
          mobileMenuOpen
            ? 'grid-rows-[1fr] opacity-100 border-b border-[#DED8CE] shadow-lg'
            : 'grid-rows-[0fr] opacity-0 border-b-0 pointer-events-none'
        }`}
      >
        <div className="min-h-0 px-4 pt-3 pb-6">
          {/* Chamber Schedule Band */}
          <div
            className={`p-3 mb-4 bg-[#F2EFE9] border border-[#DED8CE] text-xs font-mono flex flex-col sm:flex-row gap-1 sm:items-center sm:justify-between transform transition-all duration-[382ms] ease-golden ${
              mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
            }`}
            style={{ transitionDelay: mobileMenuOpen ? '26ms' : '0ms' }}
          >
            <span className="font-semibold text-[#0F1E36] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#B5893E] shrink-0" />
              Chamber Schedule:
            </span>
            <span className="text-[11px] text-[#646B73]">Mon–Sat | 10:00 AM – 7:00 PM IST</span>
          </div>

          {/* Mobile Staggered Navigation Stack (Fibonacci Stagger Delays) */}
          <nav className="flex flex-col space-y-2 font-mono text-xs uppercase tracking-wider text-[#0F1E36] pb-4 border-b border-[#DED8CE]">
            {navLinks.map((link, idx) => {
              // Fibonacci Stagger Intervals (0, 42, 85, 138, 223 ms)
              const fibDelays = [0, 42, 85, 138, 223];
              const delay = fibDelays[idx] || idx * 42;

              return (
                <div
                  key={link.to}
                  className={`transform transition-all duration-[382ms] ease-golden ${
                    mobileMenuOpen
                      ? 'translate-y-0 opacity-100'
                      : '-translate-y-3 opacity-0'
                  }`}
                  style={{
                    transitionDelay: mobileMenuOpen ? `${delay}ms` : '0ms',
                  }}
                >
                  <NavLink
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-3.5 py-2.5 border transition-all flex items-center justify-between text-xs ${
                        isActive
                          ? 'bg-[#0F1E36] text-[#FAF8F5] border-[#0F1E36] font-bold shadow-xs'
                          : 'bg-[#F2EFE9] text-[#2C353D] border-[#DED8CE] hover:border-[#B5893E]'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className="flex items-center gap-2">
                          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#B5893E]" />}
                          <span>{link.label}</span>
                        </span>
                        <span className={isActive ? 'text-[#B5893E]' : 'text-[#646B73]'}>&rarr;</span>
                      </>
                    )}
                  </NavLink>
                </div>
              );
            })}
          </nav>

          {/* Action CTAs with Golden Entrance */}
          <div
            className={`pt-4 flex flex-col gap-2 transform transition-all duration-[382ms] ease-golden ${
              mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
            }`}
            style={{ transitionDelay: mobileMenuOpen ? '262ms' : '0ms' }}
          >
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/consultation');
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-[#B5893E] hover:bg-[#9E732E] text-[#0F1E36] text-xs font-mono uppercase font-bold tracking-wider border border-[#B5893E] cursor-pointer shadow-xs active:scale-[0.98] transition-transform"
            >
              <Calendar className="w-4 h-4 text-[#0F1E36]" />
              Schedule a Consultation
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBciDisclaimer();
              }}
              className="w-full py-2 text-[11px] font-mono text-[#646B73] text-center hover:text-[#0F1E36] cursor-pointer"
            >
              View Bar Council of India Rule 36 Notice
            </button>
          </div>

          {/* Golden Ratio Architectural Accent Line */}
          <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-transparent via-[#B5893E]/60 to-transparent" />
        </div>
      </div>
    </header>
  );
};
