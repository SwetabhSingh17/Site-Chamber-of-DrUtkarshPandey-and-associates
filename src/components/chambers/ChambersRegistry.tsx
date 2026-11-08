import React, { useState } from 'react';
import { CHAMBER_OFFICES, FOUNDER_CREDENTIALS } from '../../data/founder.data';
import { IChamberOffice } from '../../types/legal.types';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  ExternalLink,
  Copy,
  Check,
  Compass,
  Landmark,
} from 'lucide-react';

export const ChambersRegistry: React.FC = () => {
  const [selectedOfficeId, setSelectedOfficeId] = useState<'prayagraj' | 'lucknow'>('prayagraj');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const activeOffice: IChamberOffice =
    CHAMBER_OFFICES.find((o) => o.id === selectedOfficeId) || CHAMBER_OFFICES[0];

  const handleCopyAddress = (textToCopy: string, label: string) => {
    navigator.clipboard.writeText(textToCopy);
    setCopiedText(label);
    setTimeout(() => {
      setCopiedText(null);
    }, 2500);
  };

  return (
    <section id="chambers" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#DED8CE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F2EFE9] border border-[#DED8CE] mb-4">
            <Landmark className="w-3.5 h-3.5 text-[#B5893E]" />
            <span className="font-mono text-[11px] font-semibold text-[#0F1E36] tracking-wider uppercase">
              Dual Chamber Registry &bull; Prayagraj &amp; Lucknow
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#0F1E36] font-bold tracking-tight">
            Chambers &amp; Physical Registries
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#646B73] mt-3 leading-relaxed">
            The Chamber operates two strategic locations in Uttar Pradesh: the Principal Seat registry at Prayagraj
            for High Court filings and appellate hearings, and the Lucknow Chamber for Bench listings, corporate tribunals, and academic advisory.
          </p>
        </div>

        {/* --- ARCHITECTURAL DUAL-CHAMBER TOGGLE --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border border-[#DED8CE] bg-[#F2EFE9] mb-8 font-mono text-xs">
          <button
            type="button"
            onClick={() => setSelectedOfficeId('prayagraj')}
            className={`p-3.5 sm:p-4 text-left sm:text-center transition-all flex items-center justify-start sm:justify-center gap-2.5 relative cursor-pointer ${
              selectedOfficeId === 'prayagraj'
                ? 'bg-[#0F1E36] text-[#FAF8F5] font-semibold shadow-xs'
                : 'text-[#2C353D] hover:bg-[#FAF8F5] hover:text-[#0F1E36]'
            }`}
          >
            <MapPin className={`w-4 h-4 shrink-0 ${selectedOfficeId === 'prayagraj' ? 'text-[#B5893E]' : 'text-[#646B73]'}`} />
            <span className="leading-snug">Prayagraj Chamber (Principal Seat — Allahabad HC)</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedOfficeId('lucknow')}
            className={`p-3.5 sm:p-4 text-left sm:text-center border-t sm:border-t-0 sm:border-l border-[#DED8CE] transition-all flex items-center justify-start sm:justify-center gap-2.5 relative cursor-pointer ${
              selectedOfficeId === 'lucknow'
                ? 'bg-[#0F1E36] text-[#FAF8F5] font-semibold shadow-xs'
                : 'text-[#2C353D] hover:bg-[#FAF8F5] hover:text-[#0F1E36]'
            }`}
          >
            <Compass className={`w-4 h-4 shrink-0 ${selectedOfficeId === 'lucknow' ? 'text-[#B5893E]' : 'text-[#646B73]'}`} />
            <span className="leading-snug">Lucknow Chamber (Lucknow Bench &amp; Advisory Desk)</span>
          </button>
        </div>

        {/* --- ACTIVE CHAMBER LOCATION CARD --- */}
        <div className="bg-[#F2EFE9] border-2 border-[#0F1E36] p-5 sm:p-10 shadow-sm animate-in fade-in duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 cols: Office Metadata & Jurisdictional Focus */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#DED8CE] pb-3">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#B5893E] font-bold block">
                    {activeOffice.id === 'prayagraj' ? 'Principal Seat Registry' : 'Appellate Bench & Advisory'}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0F1E36]">
                    {activeOffice.city} Chamber
                  </h3>
                </div>

                <span className="font-mono text-[11px] bg-[#FAF8F5] border border-[#DED8CE] px-3 py-1 text-[#0F1E36] self-start sm:self-auto">
                  Postal Code: {activeOffice.postalCode.split('–')[1]?.trim() || activeOffice.postalCode}
                </span>
              </div>

              {/* Full Postal Address */}
              <div className="p-4 bg-[#FAF8F5] border-l-3 border-[#B5893E] border border-t-[#DED8CE] border-r-[#DED8CE] border-b-[#DED8CE]">
                <span className="font-mono text-[10px] uppercase text-[#646B73] tracking-wider block mb-1">
                  Physical Chamber Address:
                </span>
                <p className="font-sans text-sm sm:text-base font-semibold text-[#0F1E36] leading-relaxed">
                  {activeOffice.fullAddress}
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleCopyAddress(activeOffice.fullAddress, 'address')}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#0F1E36] hover:text-[#B5893E] transition-colors"
                  >
                    {copiedText === 'address' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#B5893E]" />
                        <span>Address Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#646B73]" />
                        <span>Copy Full Address</span>
                      </>
                    )}
                  </button>

                  <span className="text-[#DED8CE]">&bull;</span>

                  <a
                    href={activeOffice.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-[#164E4B] hover:text-[#0F1E36] font-semibold underline underline-offset-2 transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Jurisdiction Focus Note */}
              <div className="space-y-1.5">
                <span className="font-mono text-xs uppercase tracking-wider text-[#0F1E36] font-bold block">
                  Jurisdiction &amp; Practice Focus:
                </span>
                <p className="text-xs sm:text-sm text-[#2C353D] leading-relaxed font-sans bg-[#FAF8F5] p-3.5 border border-[#DED8CE]">
                  {activeOffice.jurisdictionFocus}
                </p>
              </div>

              {/* Working Hours & Court Listings */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
                <div className="p-3 bg-[#FAF8F5] border border-[#DED8CE]">
                  <span className="text-[#646B73] flex items-center gap-1.5 mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#B5893E]" /> Office Hours:
                  </span>
                  <span className="font-semibold text-[#0F1E36]">Mon–Sat | 10:00 AM – 7:00 PM IST</span>
                </div>

                <div className="p-3 bg-[#FAF8F5] border border-[#DED8CE]">
                  <span className="text-[#646B73] flex items-center gap-1.5 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-[#B5893E]" /> Listing Schedule:
                  </span>
                  <span className="font-semibold text-[#0F1E36]">{activeOffice.hearingDays}</span>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Direct Contact Desk & Verified Registry Link */}
            <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#DED8CE] p-6 space-y-5">
              <span className="font-mono text-xs uppercase tracking-wider text-[#0F1E36] font-bold block border-b border-[#DED8CE] pb-2">
                Chamber Direct Contact Desk
              </span>

              {/* Direct Telephone */}
              <div className="space-y-1.5">
                <span className="font-mono text-[11px] text-[#646B73] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#B5893E]" /> Dedicated Chamber Line:
                </span>
                <div className="flex items-center justify-between p-2.5 bg-[#F2EFE9] border border-[#DED8CE]">
                  <a
                    href={`tel:${FOUNDER_CREDENTIALS.directPhone.replace(/[^0-9+]/g, '')}`}
                    className="font-mono text-sm font-bold text-[#0F1E36] hover:text-[#B5893E]"
                  >
                    {FOUNDER_CREDENTIALS.directPhone}
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopyAddress(FOUNDER_CREDENTIALS.directPhone, 'phone')}
                    className="text-xs font-mono text-[#646B73] hover:text-[#0F1E36]"
                    title="Copy Phone Number"
                  >
                    {copiedText === 'phone' ? 'Copied' : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Designated Email Routing */}
              <div className="space-y-1.5">
                <span className="font-mono text-[11px] text-[#646B73] flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#B5893E]" /> Designated Registry Email:
                </span>
                <div className="flex items-center justify-between p-2.5 bg-[#F2EFE9] border border-[#DED8CE]">
                  <a
                    href={`mailto:${activeOffice.registryEmail}`}
                    className="font-mono text-xs font-semibold text-[#164E4B] hover:text-[#0F1E36] break-all"
                  >
                    {activeOffice.registryEmail}
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopyAddress(activeOffice.registryEmail, 'email')}
                    className="text-xs font-mono text-[#646B73] hover:text-[#0F1E36] shrink-0 ml-2"
                    title="Copy Email"
                  >
                    {copiedText === 'email' ? 'Copied' : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="pt-2 space-y-2.5">
                <a
                  href={activeOffice.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#0F1E36] text-[#FAF8F5] text-xs font-mono uppercase tracking-wider hover:bg-[#1A2E4E] transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#B5893E]" />
                  <span>Open {activeOffice.city} in Google Maps</span>
                </a>

                <a
                  href={`https://wa.me/${FOUNDER_CREDENTIALS.phoneRaw}?text=${encodeURIComponent(
                    `Hello Chamber of Dr. Utkarsh Pandey, I am inquiring regarding matter scheduling at the ${activeOffice.city} Chamber.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-[#164E4B] text-[#FAF8F5] text-xs font-mono uppercase tracking-wider hover:bg-[#1E6662] transition-colors"
                >
                  <span>Inquire via WhatsApp Desk</span>
                </a>
              </div>

              <div className="text-[10px] font-mono text-[#646B73] text-center pt-1">
                * Prior appointment mandatory for chamber in-person conferences.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
