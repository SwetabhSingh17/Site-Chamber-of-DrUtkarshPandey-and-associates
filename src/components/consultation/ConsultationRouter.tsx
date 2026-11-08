import React, { useState, useEffect, useMemo } from 'react';
import { TInquiryRoutingType, TMatterCategory } from '../../types/legal.types';
import { FOUNDER_CREDENTIALS } from '../../data/founder.data';
import {
  Mail,
  MessageSquare,
  Copy,
  Check,
  ShieldCheck,
  Clock,
  Sparkles,
  AlertCircle,
  FileText,
  RotateCcw,
} from 'lucide-react';

export interface IConsultationRouterProps {
  preSelectedPracticeId?: string;
  onClearPreSelectedPractice?: () => void;
}

export const ConsultationRouter: React.FC<IConsultationRouterProps> = ({
  preSelectedPracticeId,
  onClearPreSelectedPractice,
}) => {
  const [inquiryType, setInquiryType] = useState<TInquiryRoutingType>('litigation');
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [preferredChamber, setPreferredChamber] = useState<'Prayagraj Office' | 'Lucknow Office'>(
    'Prayagraj Office'
  );
  const [matterCategory, setMatterCategory] = useState<TMatterCategory>('Writ/Constitutional');
  const [briefSynopsis, setBriefSynopsis] = useState<string>('');
  const [bciAffirmed, setBciAffirmed] = useState<boolean>(true);

  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Auto-map practice pillar if pre-selected from practice matrix
  useEffect(() => {
    if (preSelectedPracticeId) {
      if (preSelectedPracticeId === 'constitutional-writ') {
        setMatterCategory('Writ/Constitutional');
        setInquiryType('litigation');
      } else if (preSelectedPracticeId === 'corporate-commercial') {
        setMatterCategory('Corporate/Arbitration');
        setInquiryType('litigation');
      } else if (preSelectedPracticeId === 'criminal-defense') {
        setMatterCategory('Criminal/Bail');
        setInquiryType('litigation');
      } else if (preSelectedPracticeId === 'civil-regulatory') {
        setMatterCategory('Civil/Matrimonial');
        setInquiryType('litigation');
      } else if (preSelectedPracticeId === 'academic-policy') {
        setMatterCategory('Academic/Research Collaboration');
        setInquiryType('academic_founder');
      }
    }
  }, [preSelectedPracticeId]);

  // Dynamically compute target recipient email based on Inquiry Type
  const targetEmail = useMemo(() => {
    return inquiryType === 'litigation'
      ? FOUNDER_CREDENTIALS.officeEmail // Consult@advdrutkarshpandey.com
      : FOUNDER_CREDENTIALS.founderEmail; // founder@advdrutkarshpandey.com
  }, [inquiryType]);

  const targetDeskLabel = useMemo(() => {
    return inquiryType === 'litigation'
      ? 'Chamber Office Desk (Consult@advdrutkarshpandey.com)'
      : 'Direct Founder Counsel Desk (founder@advdrutkarshpandey.com)';
  }, [inquiryType]);

  // Format structured email subject & body
  const structuredSubject = useMemo(() => {
    const sender = fullName.trim() || 'New Inquirer';
    return `[Chamber Briefing] ${matterCategory} - ${sender} (${preferredChamber})`;
  }, [matterCategory, fullName, preferredChamber]);

  const structuredBody = useMemo(() => {
    return `CHAMBER BRIEFING INQUIRY DOCKET
========================================
CHAMBER OF DR. UTKARSH PANDEY AND ASSOCIATES
Advocate, High Court of Judicature at Allahabad
Official Web: www.advdrutkarshpandey.com

1. INQUIRY METADATA:
-------------------
Inquiry Type: ${
      inquiryType === 'litigation'
        ? 'Case Consultation / Litigation / Legal Advisory'
        : 'Direct Founder Counsel / Academic Collaboration / Seminars & Visiting Faculty'
    }
Recipient Desk: ${targetEmail}
Target Chamber: ${preferredChamber}
Matter Category: ${matterCategory}

2. CONTACT INFORMATION:
----------------------
Name of Initiator: ${fullName || '[Not Specified]'}
Telephone / Mobile: ${phone || '[Not Specified]'}

3. BRIEF SYNOPSIS OF FACTS & LEGAL QUESTION:
-------------------------------------------
${briefSynopsis || '[Awaiting brief description of matter]'}

4. REGULATORY AFFIRMATION:
-------------------------
Affirmed compliance with Rule 36 of the Bar Council of India Rules.
This inquiry is submitted voluntarily without any prior solicitation or advertisement.
========================================`;
  }, [inquiryType, targetEmail, preferredChamber, matterCategory, fullName, phone, briefSynopsis]);

  // Toast notification helper
  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`Copied ${label} to clipboard!`);
  };

  // Reset Form
  const handleResetForm = () => {
    setFullName('');
    setPhone('');
    setBriefSynopsis('');
    setMatterCategory('Writ/Constitutional');
    setInquiryType('litigation');
    setPreferredChamber('Prayagraj Office');
    setValidationError(null);
    if (onClearPreSelectedPractice) {
      onClearPreSelectedPractice();
    }
    showToast('Form reset to default.');
  };

  // Dispatch Action 1: Email Inquiry
  const handleDispatchEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    if (!fullName.trim()) {
      setValidationError('Please provide your full name before dispatching.');
      return;
    }
    if (!phone.trim()) {
      setValidationError('Please enter your contact telephone number.');
      return;
    }
    if (!bciAffirmed) {
      setValidationError('Please confirm the voluntary inquiry affirmation (BCI Rule 36).');
      return;
    }

    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(
      structuredSubject
    )}&body=${encodeURIComponent(structuredBody)}`;

    window.location.href = mailtoUrl;
    showToast(`Launching default email client to ${targetEmail}...`);
  };

  // Dispatch Action 2: WhatsApp Chamber Slot
  const handleDispatchWhatsApp = () => {
    setValidationError(null);

    if (!fullName.trim() || !phone.trim()) {
      setValidationError('Please fill in your name and phone number to prepare your WhatsApp message.');
      return;
    }

    const waText = `*CHAMBER OF DR. UTKARSH PANDEY & ASSOCIATES*
*Matter Category:* ${matterCategory}
*Chamber:* ${preferredChamber}
*Client / Counsel:* ${fullName}
*Phone:* ${phone}

*Matter Synopsis:*
${briefSynopsis || 'Requesting urgent chamber consultation slot.'}

_Submitted voluntarily under BCI Rule 36 compliance._`;

    const waUrl = `https://wa.me/${FOUNDER_CREDENTIALS.phoneRaw}?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank');
    showToast('Redirecting to Chamber WhatsApp Desk (+91 82997 31098)...');
  };

  return (
    <section id="consultation" className="py-16 sm:py-24 bg-[#F2EFE9] border-b border-[#DED8CE] relative">
      {/* Toast Alert Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0F1E36] text-[#FAF8F5] border border-[#B5893E] px-4 py-3 text-xs font-mono shadow-2xl flex items-center gap-2 animate-in slide-in-from-bottom duration-200">
          <Check className="w-4 h-4 text-[#B5893E]" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF8F5] border border-[#DED8CE] mb-4">
            <Clock className="w-3.5 h-3.5 text-[#B5893E]" />
            <span className="font-mono text-[11px] font-semibold text-[#0F1E36] tracking-wider uppercase">
              Section VII &bull; Reactive Consultation &amp; Brief Routing Desk
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#0F1E36] font-bold tracking-tight">
            Consultation Desk &amp; Structured Brief Dispatch
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#646B73] mt-3 leading-relaxed">
            Select your inquiry type to route your matter directly to the appropriate registry desk.
            As you complete the form, your formal legal brief is generated in real time, ready for immediate transmission
            via official email or our verified WhatsApp chamber line.
          </p>
        </div>

        {/* --- QUICK ONE-CLICK COPY BAR --- */}
        <div className="bg-[#FAF8F5] border border-[#DED8CE] p-4 sm:p-5 mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <span className="font-mono text-xs uppercase tracking-wider text-[#0F1E36] font-bold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#B5893E]" /> Direct Chamber Registry Hotlinks:
            </span>

            <div className="flex flex-wrap items-center gap-2.5">
              {/* Copy Phone */}
              <button
                type="button"
                onClick={() => copyToClipboard(FOUNDER_CREDENTIALS.directPhone, 'Direct Phone')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F2EFE9] hover:bg-[#EAE6DF] border border-[#DED8CE] text-xs font-mono text-[#0F1E36] transition-colors"
                title="Copy Direct Phone Number"
              >
                <Copy className="w-3.5 h-3.5 text-[#B5893E]" />
                <span>+91 82997 31098</span>
              </button>

              {/* Copy Office Desk Email */}
              <button
                type="button"
                onClick={() => copyToClipboard(FOUNDER_CREDENTIALS.officeEmail, 'Office Desk Email')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F2EFE9] hover:bg-[#EAE6DF] border border-[#DED8CE] text-xs font-mono text-[#0F1E36] transition-colors"
                title="Copy Office Consultation Email"
              >
                <Copy className="w-3.5 h-3.5 text-[#B5893E]" />
                <span>Consult@advdrutkarshpandey.com</span>
              </button>

              {/* Copy Founder Desk Email */}
              <button
                type="button"
                onClick={() => copyToClipboard(FOUNDER_CREDENTIALS.founderEmail, 'Founder Desk Email')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F2EFE9] hover:bg-[#EAE6DF] border border-[#DED8CE] text-xs font-mono text-[#0F1E36] transition-colors"
                title="Copy Founder Counsel Email"
              >
                <Copy className="w-3.5 h-3.5 text-[#B5893E]" />
                <span>founder@advdrutkarshpandey.com</span>
              </button>
            </div>
          </div>
        </div>

        {/* --- MAIN 2-COLUMN GRID: INTAKE FORM (LEFT) + REAL-TIME BRIEF PREVIEW (RIGHT) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Intake Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#DED8CE] p-6 sm:p-8 shadow-xs">
            {validationError && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-600 text-red-800 text-xs font-sans flex items-start gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
                <span>{validationError}</span>
              </div>
            )}

            <form onSubmit={handleDispatchEmail} className="space-y-6">
              {/* STEP 1: INQUIRY TYPE SELECTOR (DYNAMIC ROUTING KEY) */}
              <div>
                <label className="block font-mono text-xs uppercase text-[#0F1E36] font-bold tracking-wider mb-2.5">
                  1. Select Inquiry Type &amp; Routing Desk *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Option A */}
                  <button
                    type="button"
                    onClick={() => setInquiryType('litigation')}
                    className={`p-3.5 text-left border transition-all text-xs font-sans ${
                      inquiryType === 'litigation'
                        ? 'bg-[#F2EFE9] border-[#0F1E36] shadow-xs ring-1 ring-[#0F1E36]'
                        : 'bg-[#FAF8F5] border-[#DED8CE] hover:border-[#B5893E]'
                    }`}
                  >
                    <span className="font-mono text-[10px] uppercase font-bold text-[#B5893E] block mb-1">
                      Option A &bull; Office Desk
                    </span>
                    <strong className="block text-[#0F1E36] mb-1 font-serif text-sm">
                      Case Consultation &amp; Litigation
                    </strong>
                    <span className="text-[11px] text-[#646B73] block leading-snug">
                      High Court Writs, Commercial Arbitration, Bail &amp; Civil Appeals.
                    </span>
                    <span className="font-mono text-[10px] text-[#164E4B] block mt-2 font-medium">
                      &rarr; Consult@advdrutkarshpandey.com
                    </span>
                  </button>

                  {/* Option B */}
                  <button
                    type="button"
                    onClick={() => setInquiryType('academic_founder')}
                    className={`p-3.5 text-left border transition-all text-xs font-sans ${
                      inquiryType === 'academic_founder'
                        ? 'bg-[#F2EFE9] border-[#0F1E36] shadow-xs ring-1 ring-[#0F1E36]'
                        : 'bg-[#FAF8F5] border-[#DED8CE] hover:border-[#B5893E]'
                    }`}
                  >
                    <span className="font-mono text-[10px] uppercase font-bold text-[#B5893E] block mb-1">
                      Option B &bull; Founder Counsel Desk
                    </span>
                    <strong className="block text-[#0F1E36] mb-1 font-serif text-sm">
                      Academic, Policy &amp; Seminars
                    </strong>
                    <span className="text-[11px] text-[#646B73] block leading-snug">
                      Visiting Faculty, Legislative Drafting, Doctoral Research &amp; Advisory.
                    </span>
                    <span className="font-mono text-[10px] text-[#164E4B] block mt-2 font-medium">
                      &rarr; founder@advdrutkarshpandey.com
                    </span>
                  </button>
                </div>
              </div>

              {/* STEP 2: FULL NAME & PHONE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs uppercase text-[#0F1E36] font-semibold tracking-wider mb-1.5">
                    Full Name / Title *
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Adv. Vivek Agnihotri"
                    required
                    className="w-full p-2.5 bg-[#FAF8F5] border border-[#DED8CE] text-xs font-sans text-[#0F1E36] placeholder-[#646B73]/50 focus:outline-hidden focus:border-[#B5893E]"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase text-[#0F1E36] font-semibold tracking-wider mb-1.5">
                    Phone / Mobile (with country code) *
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    required
                    className="w-full p-2.5 bg-[#FAF8F5] border border-[#DED8CE] text-xs font-sans text-[#0F1E36] placeholder-[#646B73]/50 focus:outline-hidden focus:border-[#B5893E]"
                  />
                </div>
              </div>

              {/* STEP 3: PREFERRED CHAMBER & MATTER CATEGORY */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs uppercase text-[#0F1E36] font-semibold tracking-wider mb-1.5">
                    Preferred Chamber Office *
                  </label>
                  <select
                    value={preferredChamber}
                    onChange={(e) => setPreferredChamber(e.target.value as 'Prayagraj Office' | 'Lucknow Office')}
                    className="w-full p-2.5 bg-[#FAF8F5] border border-[#DED8CE] text-xs font-sans text-[#0F1E36] focus:outline-hidden focus:border-[#B5893E]"
                  >
                    <option value="Prayagraj Office">Prayagraj Office (Principal Seat HC)</option>
                    <option value="Lucknow Office">Lucknow Office (Lucknow Bench &amp; Advisory)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase text-[#0F1E36] font-semibold tracking-wider mb-1.5">
                    Matter Category *
                  </label>
                  <select
                    value={matterCategory}
                    onChange={(e) => setMatterCategory(e.target.value as TMatterCategory)}
                    className="w-full p-2.5 bg-[#FAF8F5] border border-[#DED8CE] text-xs font-sans text-[#0F1E36] focus:outline-hidden focus:border-[#B5893E]"
                  >
                    <option value="Writ/Constitutional">Writ / Constitutional Law (Art. 226/227)</option>
                    <option value="Corporate/Arbitration">Corporate, IBC &amp; Arbitration</option>
                    <option value="Criminal/Bail">Criminal Defense, BNSS / CrPC Bail &amp; Quashing</option>
                    <option value="Civil/Matrimonial">Civil, Land (UPRC) &amp; Matrimonial</option>
                    <option value="Academic/Research Collaboration">Academic / Research Collaboration</option>
                  </select>
                </div>
              </div>

              {/* STEP 4: BRIEF SYNOPSIS */}
              <div>
                <label className="block font-mono text-xs uppercase text-[#0F1E36] font-semibold tracking-wider mb-1.5">
                  Brief Synopsis of Facts / Legal Inquiry *
                </label>
                <textarea
                  rows={4}
                  value={briefSynopsis}
                  onChange={(e) => setBriefSynopsis(e.target.value)}
                  placeholder="Outline key dates, impugned orders, court/authority, or academic seminar proposal..."
                  className="w-full p-3 bg-[#FAF8F5] border border-[#DED8CE] text-xs font-sans text-[#0F1E36] placeholder-[#646B73]/50 focus:outline-hidden focus:border-[#B5893E] leading-relaxed"
                />
              </div>

              {/* STEP 5: BCI STATUTORY AFFIRMATION CHECKBOX */}
              <div className="p-3.5 bg-[#F2EFE9] border border-[#DED8CE]">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={bciAffirmed}
                    onChange={(e) => setBciAffirmed(e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded-none border-[#DED8CE] text-[#0F1E36] focus:ring-0"
                  />
                  <span className="font-sans text-[11px] text-[#2C353D] leading-relaxed select-none">
                    <strong>Rule 36 Bar Council of India Compliance:</strong> I affirm that this consultation inquiry is
                    made voluntarily for seeking professional legal opinion or academic cooperation, without any prior solicitation.
                  </span>
                </label>
              </div>

              {/* DUAL DISPATCH ACTION BUTTONS */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#0F1E36] hover:bg-[#1A2E4E] text-[#FAF8F5] text-xs font-mono uppercase tracking-wider border border-[#0F1E36] transition-all shadow-xs group"
                >
                  <Mail className="w-4 h-4 text-[#B5893E]" />
                  <span>Dispatch Official Email Inquiry</span>
                </button>

                <button
                  type="button"
                  onClick={handleDispatchWhatsApp}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#164E4B] hover:bg-[#1E6662] text-[#FAF8F5] text-xs font-mono uppercase tracking-wider border border-[#164E4B] transition-all shadow-xs"
                >
                  <MessageSquare className="w-4 h-4 text-[#FAF8F5]" />
                  <span>Request Chamber Slot via WhatsApp</span>
                </button>
              </div>

              <div className="text-right pt-1">
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#646B73] hover:text-[#0F1E36] transition-colors"
                >
                  <RotateCcw className="w-3 h-3 text-[#B5893E]" />
                  <span>Clear and Reset Intake Fields</span>
                </button>
              </div>
            </form>
          </div>

          {/* Real-time Structured Brief Preview (5 cols) */}
          <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#DED8CE] p-6 sticky top-28 space-y-4">
            <div className="flex items-center justify-between border-b border-[#DED8CE] pb-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#B5893E] font-bold flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#B5893E]" /> Live Brief Docket Preview
              </span>
              <span className="font-mono text-[10px] text-[#646B73] uppercase">
                Auto-Generated
              </span>
            </div>

            {/* Routing Destination Badge */}
            <div className="p-3 bg-[#F2EFE9] border border-[#DED8CE] text-xs font-mono">
              <span className="text-[#646B73] block text-[10px] uppercase">Recipient Desk:</span>
              <span className="font-bold text-[#0F1E36] break-all">{targetEmail}</span>
              <span className="text-[10px] text-[#164E4B] block mt-0.5">({targetDeskLabel})</span>
            </div>

            {/* Monospace Brief Body Render */}
            <div className="p-4 bg-[#0F1E36] text-[#FAF8F5] border border-[#0F1E36] font-mono text-[11px] leading-relaxed overflow-x-auto max-h-[380px] space-y-2">
              <div className="text-[#B5893E] font-bold">
                CHAMBER BRIEFING DOCKET
              </div>
              <div className="text-[#FAF8F5]/60 text-[10px]">
                Target: {preferredChamber} &bull; Ref: UPA/LIVE/{Date.now().toString().slice(-4)}
              </div>
              <div className="border-t border-[#FAF8F5]/20 pt-2 space-y-1">
                <div>
                  <span className="text-[#FAF8F5]/60">Category:</span>{' '}
                  <span className="text-[#FAF8F5] font-semibold">{matterCategory}</span>
                </div>
                <div>
                  <span className="text-[#FAF8F5]/60">Initiator:</span>{' '}
                  <span className="text-[#FAF8F5]">{fullName || '[Pending Name]'}</span>
                </div>
                <div>
                  <span className="text-[#FAF8F5]/60">Contact:</span>{' '}
                  <span className="text-[#FAF8F5]">{phone || '[Pending Phone]'}</span>
                </div>
              </div>

              <div className="border-t border-[#FAF8F5]/20 pt-2">
                <span className="text-[#B5893E] text-[10px] uppercase block mb-1">
                  Synopsis of Facts &amp; Legal Question:
                </span>
                <p className="text-[#FAF8F5]/90 whitespace-pre-wrap font-sans text-xs bg-[#FAF8F5]/5 p-2 border border-[#FAF8F5]/10">
                  {briefSynopsis || 'Awaiting entry of specific brief facts or legal issues...'}
                </p>
              </div>

              <div className="border-t border-[#FAF8F5]/20 pt-2 text-[10px] text-[#FAF8F5]/50 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-[#B5893E]" />
                <span>Affirmed under BCI Rule 36 voluntary access</span>
              </div>
            </div>

            {/* Quick Action in Card */}
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => copyToClipboard(structuredBody, 'Complete Brief Docket')}
                className="w-full py-2 bg-[#F2EFE9] hover:bg-[#EAE6DF] border border-[#DED8CE] font-mono text-xs text-[#0F1E36] flex items-center justify-center gap-1.5 transition-colors"
              >
                <Copy className="w-3.5 h-3.5 text-[#B5893E]" />
                <span>Copy Full Brief Docket Text</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
