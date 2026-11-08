import React, { useState, useEffect } from 'react';
import { ShieldCheck, Scale } from 'lucide-react';
import { UpaLogo } from '../UpaLogo';

export interface IBciDisclaimerModalProps {
  forceOpen?: boolean;
  onClose?: () => void;
}

const STORAGE_KEY = 'upa_chamber_bci_compliance_acknowledged_v1';

/**
 * Bar Council of India (BCI) Compliance Gate.
 * Mandated under Rule 36 of the Bar Council of India Rules (Standards of Professional Conduct and Etiquette).
 * Prevents unlawful solicitation/advertisement while enabling voluntary academic & legal inquiry.
 */
export const BciDisclaimerModal: React.FC<IBciDisclaimerModalProps> = ({ forceOpen = false, onClose }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    // Check if the user has already acknowledged compliance in this session
    const hasAcknowledged = sessionStorage.getItem(STORAGE_KEY);
    if (!hasAcknowledged || forceOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [forceOpen]);

  const handleAcknowledge = () => {
    sessionStorage.setItem(STORAGE_KEY, 'true');
    setIsOpen(false);
    if (onClose) onClose();
  };

  const handleDecline = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="bci-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0F1E36]/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#DED8CE] shadow-2xl p-6 sm:p-9 text-[#2C353D]">
        {/* Top Architectural Border Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0F1E36] via-[#B5893E] to-[#164E4B]" />

        {/* Monospace Header Stamp */}
        <div className="flex items-center justify-between border-b border-[#DED8CE] pb-3 mb-5">
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-[#B5893E]" />
            <span className="font-mono text-[11px] font-semibold tracking-wider text-[#0F1E36] uppercase">
              Regulatory Disclosure • Rule 36, Bar Council of India Rules
            </span>
          </div>
          <span className="font-mono text-[10px] text-[#646B73] uppercase tracking-wider">
            Statutory Notice
          </span>
        </div>

        {/* Exact UPA™ Monogram Stacked at Top */}
        <div className="flex justify-center mb-6 py-3 bg-[#F2EFE9] border border-[#DED8CE]">
          <UpaLogo variant="stacked" markHeight="h-20" />
        </div>

        {/* Modal Headline */}
        <h2
          id="bci-modal-title"
          className="font-serif text-2xl sm:text-3xl text-[#0F1E36] font-semibold tracking-tight leading-snug mb-4"
        >
          Compliance Notice &amp; Voluntary Access Declaration
        </h2>

        {/* Editorial Body Text */}
        <div className="space-y-3.5 text-xs sm:text-sm text-[#2C353D] leading-relaxed font-sans mb-6">
          <p>
            Under the rules of the <strong>Bar Council of India (BCI)</strong>, specifically{' '}
            <em>Rule 36 of Chapter II, Part VI</em> of the Bar Council of India Rules, advocates in India
            are strictly prohibited from soliciting work, advertising, or creating an inducement to retain legal services.
          </p>

          <div className="p-3.5 bg-[#F2EFE9] border-l-2 border-[#B5893E] text-xs text-[#2C353D] font-mono leading-relaxed">
            &ldquo;An advocate shall not solicit work or advertise, either directly or indirectly, whether by circulars,
            advertisements, touts, personal communications, interviews not warranted by personal relations, furnishing or
            inspiring newspaper comments or producing his photographs to be published in connection with cases in which he has been engaged or concerned.&rdquo;
          </div>

          <p>
            By clicking <strong>&ldquo;I Acknowledge &amp; Enter Chamber&rdquo;</strong>, you explicitly confirm and verify the following:
          </p>

          <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#646B73]">
            <li>
              You are voluntarily seeking comprehensive information regarding the legal, research, and academic practice of{' '}
              <strong>Dr. Utkarsh Pandey and Associates</strong> for your own educational, scholarly, or case-briefing purposes.
            </li>
            <li>
              There has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever
              from this chamber or its members to solicit any work or engagement through this web repository.
            </li>
            <li>
              The information provided herein is solely available at your specific request for informational and academic purposes,
              and should not be interpreted as creating an advocate-client relationship.
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-[#DED8CE] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleDecline}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-mono text-[#646B73] hover:text-[#0F1E36] hover:bg-[#F2EFE9] border border-[#DED8CE] transition-colors"
          >
            Decline &amp; Exit
          </button>

          <button
            type="button"
            onClick={handleAcknowledge}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#0F1E36] hover:bg-[#1A2E4E] text-[#FAF8F5] text-xs sm:text-sm font-medium tracking-wide border border-[#0F1E36] transition-all shadow-xs"
          >
            <ShieldCheck className="w-4 h-4 text-[#B5893E]" />
            <span>I Acknowledge &amp; Enter Chamber</span>
          </button>
        </div>
      </div>
    </div>
  );
};
