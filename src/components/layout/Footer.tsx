import React from 'react';
import { Link } from 'react-router-dom';
import { UpaLogo } from '../UpaLogo';
import { FOUNDER_CREDENTIALS, CHAMBER_OFFICES } from '../../data/founder.data';
import { Scale, ArrowUp, Phone, Mail, MapPin, Globe, ExternalLink } from 'lucide-react';

export interface IFooterProps {
  onOpenBciDisclaimer: () => void;
}

/**
 * Editorial Chamber Footer.
 * Renders complete UPA™ monogram crest, full addresses for Prayagraj 211001 & Lucknow 226030,
 * direct phone (+91 82997 31098), both official emails, domain, and permanent BCI Rule 36 disclaimer.
 */
export const Footer: React.FC<IFooterProps> = ({ onOpenBciDisclaimer }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prayagrajOffice = CHAMBER_OFFICES.find((o) => o.id === 'prayagraj') || CHAMBER_OFFICES[0];
  const lucknowOffice = CHAMBER_OFFICES.find((o) => o.id === 'lucknow') || CHAMBER_OFFICES[1];

  return (
    <footer className="bg-[#0F1E36] text-[#FAF8F5] border-t border-[#DED8CE]">
      {/* Upper Footer: Chamber Identity, Dual Physical Registries & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Identity & Chamber Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-[#FAF8F5] inline-block p-2 border border-[#DED8CE]">
              <UpaLogo variant="full" />
            </div>

            <p className="text-xs text-[#FAF8F5]/80 font-sans leading-relaxed max-w-sm pt-2">
              Chamber of Dr. Utkarsh Pandey and Associates is a premier Indian legal chamber operating before the
              High Court of Judicature at Allahabad (Prayagraj Principal Seat &amp; Lucknow Bench),
              delivering precision appellate advocacy, corporate insolvency representation, and doctoral legal scholarship.
            </p>

            <div className="pt-2 font-mono text-xs space-y-2 border-t border-[#FAF8F5]/10">
              <div className="flex items-center gap-2 text-[#B5893E]">
                <Globe className="w-3.5 h-3.5" />
                <a
                  href={`https://${FOUNDER_CREDENTIALS.domain}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {FOUNDER_CREDENTIALS.domain}
                </a>
              </div>

              <div className="flex items-center gap-2 text-[#FAF8F5]/90">
                <Phone className="w-3.5 h-3.5 text-[#B5893E]" />
                <a
                  href={`tel:${FOUNDER_CREDENTIALS.directPhone.replace(/[^0-9+]/g, '')}`}
                  className="font-bold hover:text-[#B5893E]"
                >
                  {FOUNDER_CREDENTIALS.directPhone}
                </a>
              </div>

              <div className="flex items-center gap-2 text-[#FAF8F5]/80">
                <Mail className="w-3.5 h-3.5 text-[#B5893E]" />
                <a href={`mailto:${FOUNDER_CREDENTIALS.officeEmail}`} className="hover:text-[#B5893E]">
                  {FOUNDER_CREDENTIALS.officeEmail}
                </a>
              </div>

              <div className="flex items-center gap-2 text-[#FAF8F5]/80">
                <Mail className="w-3.5 h-3.5 text-[#B5893E]" />
                <a href={`mailto:${FOUNDER_CREDENTIALS.founderEmail}`} className="hover:text-[#B5893E]">
                  {FOUNDER_CREDENTIALS.founderEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Dual Physical Offices: Prayagraj & Lucknow (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#FAF8F5]/10 pb-3">
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#B5893E] font-bold">
                Physical Chamber Offices (Prayagraj &amp; Lucknow)
              </div>
              <div className="bg-[#FAF8F5] p-1.5 border border-[#DED8CE] shadow-xs self-start sm:self-auto">
                <UpaLogo variant="mark" markHeight="h-10 sm:h-12" />
              </div>
            </div>

            {/* Prayagraj Chamber */}
            <div className="p-4 bg-[#FAF8F5]/5 border border-[#FAF8F5]/10 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#B5893E] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B5893E]" /> Prayagraj Chamber (Principal Seat)
                </span>
                <span className="font-mono text-[10px] text-[#FAF8F5]/60">PIN: 211001</span>
              </div>
              <p className="text-xs text-[#FAF8F5]/90 font-sans leading-relaxed">
                {prayagrajOffice.fullAddress}
              </p>
              <div className="pt-1 flex items-center gap-3 text-[11px] font-mono text-[#FAF8F5]/60">
                <a
                  href={prayagrajOffice.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B5893E] hover:underline inline-flex items-center gap-1"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span>&bull;</span>
                <span>Jurisdiction: Principal Seat, Civil Lines</span>
              </div>
            </div>

            {/* Lucknow Chamber */}
            <div className="p-4 bg-[#FAF8F5]/5 border border-[#FAF8F5]/10 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#B5893E] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B5893E]" /> Lucknow Chamber (Lucknow Bench)
                </span>
                <span className="font-mono text-[10px] text-[#FAF8F5]/60">PIN: 226030</span>
              </div>
              <p className="text-xs text-[#FAF8F5]/90 font-sans leading-relaxed">
                {lucknowOffice.fullAddress}
              </p>
              <div className="pt-1 flex items-center gap-3 text-[11px] font-mono text-[#FAF8F5]/60">
                <a
                  href={lucknowOffice.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B5893E] hover:underline inline-flex items-center gap-1"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span>&bull;</span>
                <span>Jurisdiction: Lucknow Bench, Corporate &amp; Tribunals</span>
              </div>
            </div>
          </div>

          {/* Quick Action & Directory (3 cols) */}
          <div className="lg:col-span-3 space-y-4 font-mono text-xs">
            <div className="text-[11px] uppercase tracking-widest text-[#B5893E] font-bold border-b border-[#FAF8F5]/10 pb-2">
              Chamber Directory
            </div>

            <ul className="space-y-2 text-[#FAF8F5]/80">
              <li>
                <Link to="/practice-areas" className="hover:text-[#B5893E] transition-colors">
                  &bull; 5 Practice Area Pillars
                </Link>
              </li>
              <li>
                <Link to="/scholarship" className="hover:text-[#B5893E] transition-colors">
                  &bull; 22 Published Works Archive
                </Link>
              </li>
              <li>
                <Link to="/timeline" className="hover:text-[#B5893E] transition-colors">
                  &bull; Judicial Research &amp; Timeline
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="hover:text-[#B5893E] transition-colors">
                  &bull; Prayagraj / Lucknow Switcher
                </Link>
              </li>
              <li>
                <Link to="/consultation" className="hover:text-[#B5893E] transition-colors">
                  &bull; Reactive Briefing Desk
                </Link>
              </li>
            </ul>

            <div className="pt-3">
              <Link
                to="/consultation"
                className="block w-full py-2.5 px-3 bg-[#FAF8F5] text-[#0F1E36] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-[#B5893E] hover:text-[#FAF8F5] transition-colors text-center"
              >
                Schedule Consultation Slot
              </Link>
            </div>
          </div>
        </div>

        {/* --- PERMANENT BAR COUNCIL OF INDIA REGULATORY DISCLAIMER NOTE --- */}
        <div className="mt-12 pt-8 border-t border-[#FAF8F5]/10">
          <div className="p-5 bg-[#FAF8F5]/5 border border-[#FAF8F5]/10 text-xs text-[#FAF8F5]/75 leading-relaxed space-y-2 font-sans">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#B5893E] font-bold flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-[#B5893E]" />
                Permanent Statutory Notice &bull; Rule 36, Bar Council of India Rules
              </span>
              <button
                type="button"
                onClick={onOpenBciDisclaimer}
                className="font-mono text-[10px] text-[#B5893E] underline hover:text-[#FAF8F5] transition-colors cursor-pointer"
              >
                Re-Read Full Compliance Declaration
              </button>
            </div>
            <p>
              As per the rules of the Bar Council of India, advocates are strictly prohibited from soliciting work or
              advertising in any form. This website (<a href={`https://${FOUNDER_CREDENTIALS.domain}`} className="text-[#B5893E]">{FOUNDER_CREDENTIALS.domain}</a>)
              is designed strictly for informational, educational, and academic research purposes only. By accessing this chamber platform,
              the user confirms that they are seeking information voluntarily without any solicitation, advertisement, or inducement.
              No information provided herein creates an advocate-client relationship.
            </p>
          </div>
        </div>

        {/* Bottom Legal Band */}
        <div className="mt-8 pt-6 border-t border-[#FAF8F5]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-[#FAF8F5]/60 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} Chamber of Dr. Utkarsh Pandey and Associates. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>High Court of Judicature at Allahabad</span>
            <span>&bull;</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#B5893E] hover:text-[#FAF8F5] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
