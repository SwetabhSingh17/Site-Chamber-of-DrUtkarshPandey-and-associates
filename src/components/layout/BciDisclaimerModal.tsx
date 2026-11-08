import React, { useState, useEffect } from 'react';
import { ShieldCheck, Scale } from 'lucide-react';
import { UpaLogo } from '../UpaLogo';

export interface IBciDisclaimerModalProps {
  forceOpen?: boolean;
  onClose?: () => void;
}

const STORAGE_KEY = 'upa_chamber_bci_compliance_acknowledged_v1';

/**
 * Bar Council of India (BCI) Compliance Gate Modal.
 * Mandated under Rule 36 of the Bar Council of India Rules (Standards of Professional Conduct and Etiquette).
 * Built with full mobile scrollability (flex-col, max-h-[92vh], sticky footer action bar, and overflow-y-auto).
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
      className="fixed inset-0 z-50 overflow-y-auto bg-[#0F1E36]/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6"
    >
      {/* Modal Container with Max-Height & Flex-Column for Full Mobile Responsiveness */}
      <div className="relative w-full max-w-2xl max-h-[94vh] sm:max-h-[90vh] flex flex-col bg-[#FAF8F5] border border-[#DED8CE] shadow-2xl text-[#2C353D] my-auto overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Top Architectural Border Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0F1E36] via-[#B5893E] to-[#164E4B] z-10" />

        {/* Modal Header Strip (Sticky at Top) */}
        <div className="p-4 sm:p-6 pb-3 sm:pb-4 border-b border-[#DED8CE] bg-[#FAF8F5] shrink-0">
          <div className="flex items-center justify-between border-b border-[#DED8CE] pb-2.5 mb-3">
            <div className="flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-[#B5893E]" />
              <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#0F1E36] uppercase">
                Regulatory Disclosure &bull; BCI Rule 36
              </span>
            </div>
            <span className="font-mono text-[9px] sm:text-[10px] text-[#646B73] uppercase tracking-wider">
              Statutory Notice
            </span>
          </div>

          {/* Exact UPA™ Monogram Stacked (Calibrated for Mobile Clearance) */}
          <div className="flex justify-center py-2 bg-[#F2EFE9] border border-[#DED8CE]">
            <UpaLogo variant="stacked" markHeight="h-12 sm:h-16" />
          </div>
        </div>

        {/* Scrollable Modal Content (Touch-Friendly & Accessible on Mobile) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3.5 text-xs sm:text-sm text-[#2C353D] leading-relaxed font-sans overscroll-contain">
          <h2
            id="bci-modal-title"
            className="font-serif text-xl sm:text-2xl text-[#0F1E36] font-bold tracking-tight leading-snug"
          >
            Compliance Notice &amp; Voluntary Access Declaration
          </h2>

          <p>
            Under the rules of the <strong>Bar Council of India (BCI)</strong>, specifically{' '}
            <em>Rule 36 of Chapter II, Part VI</em> of the Bar Council of India Rules, advocates in India
            are strictly prohibited from soliciting work, advertising, or creating an inducement to retain legal services.
          </p>

          <div className="p-3 bg-[#F2EFE9] border-l-3 border-[#B5893E] text-[11px] sm:text-xs text-[#2C353D] font-mono leading-relaxed">
            &ldquo;An advocate shall not solicit work or advertise, either directly or indirectly, whether by circulars,
            advertisements, touts, personal communications, interviews not warranted by personal relations, furnishing or
            inspiring newspaper comments or producing his photographs to be published in connection with cases in which he has been engaged or concerned.&rdquo;
          </div>

          <p className="font-medium text-[#0F1E36]">
            By clicking <strong>&ldquo;I Acknowledge &amp; Enter Chamber&rdquo;</strong>, you explicitly confirm and verify the following:
          </p>

          <ul className="list-disc pl-5 space-y-1.5 text-[11px] sm:text-xs text-[#646B73]">
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

        {/* Action Buttons (Fixed / Sticky at Bottom - Always Accessible on Mobile) */}
        <div className="p-3.5 sm:px-6 sm:py-4 border-t border-[#DED8CE] bg-[#F2EFE9] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 shrink-0">
          <button
            type="button"
            onClick={handleDecline}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-mono text-[#646B73] hover:text-[#0F1E36] hover:bg-[#EAE6DF] border border-[#DED8CE] transition-colors text-center order-2 sm:order-1 cursor-pointer"
          >
            Decline &amp; Exit
          </button>

          <button
            type="button"
            onClick={handleAcknowledge}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0F1E36] hover:bg-[#1A2E4E] text-[#FAF8F5] text-xs sm:text-sm font-mono uppercase tracking-wider font-semibold border border-[#0F1E36] transition-all shadow-xs order-1 sm:order-2 cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-[#B5893E]" />
            <span>I Acknowledge &amp; Enter Chamber</span>
          </button>
        </div>
      </div>
    </div>
  );
};
