import React, { useId } from 'react';

export interface IUpaLogoProps {
  variant?: 'horizontal' | 'stacked' | 'mark' | 'full' | 'compact' | 'monogram-only';
  markHeight?: string;
  className?: string;
  lightText?: boolean;
  hideSubtitleOnLg?: boolean;
}

/**
 * UPA™ Trademark Monogram & Crest.
 * Renders the exact trademark vector monogram from Dr. Utkarsh Pandey's visiting card:
 * - 'U' in Oxford Navy (#061529 -> #174A7E calligraphic sweep)
 * - 'P' in Raised Center Brushed Antique Gold (#C89B4B -> #8E621B serif)
 * - 'A' in Deep Slate Teal (#072224 -> #225B5E serif) with metallic gold crossbar
 * - 'TM' Superscript in bold humanist sans.
 */
export const UpaLogo: React.FC<IUpaLogoProps> = ({
  variant = 'horizontal',
  markHeight = 'h-11',
  className = '',
  lightText = false,
  hideSubtitleOnLg = false,
}) => {
  const uniqueId = useId().replace(/:/g, '');
  const navyGradId = `upa-navy-${uniqueId}`;
  const goldGradId = `upa-gold-${uniqueId}`;
  const tealGradId = `upa-teal-${uniqueId}`;
  const shadowFilterId = `upa-shadow-${uniqueId}`;

  // SVG Mark component rendering the exact visiting card vector monogram
  const MarkSvg = (
    <svg
      viewBox="0 0 440 270"
      className={`${markHeight} w-auto max-w-full shrink-0 select-none drop-shadow-xs transition-transform`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="UPA™ Monogram"
    >
      <defs>
        {/* Oxford Navy Gradient for 'U' */}
        <linearGradient id={navyGradId} x1="20" y1="65" x2="210" y2="245" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#174A7E" />
          <stop offset="45%" stopColor="#0B294B" />
          <stop offset="100%" stopColor="#061529" />
        </linearGradient>

        {/* Brushed Antique Gold Gradient for 'P' & Accents */}
        <linearGradient id={goldGradId} x1="140" y1="15" x2="295" y2="225" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C89B4B" />
          <stop offset="30%" stopColor="#E7C37A" />
          <stop offset="55%" stopColor="#B38332" />
          <stop offset="85%" stopColor="#D9B162" />
          <stop offset="100%" stopColor="#8E621B" />
        </linearGradient>

        {/* Deep Slate Teal Gradient for 'A' */}
        <linearGradient id={tealGradId} x1="275" y1="55" x2="405" y2="240" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#225B5E" />
          <stop offset="55%" stopColor="#113F42" />
          <stop offset="100%" stopColor="#072224" />
        </linearGradient>

        {/* Subtle Drop Shadow for Layered Depth */}
        <filter id={shadowFilterId} x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodColor="#061529" floodOpacity="0.18" />
        </filter>
      </defs>

      <g filter={`url(#${shadowFilterId})`}>
        {/* 'P' (Raised Center Metallic Gold Serif) */}
        <path
          d="M142 20 H218 C266 20 296 44 296 82 C296 120 264 146 214 146 H198 V141 H212 C246 141 268 118 268 82 C268 45 246 26 210 26 H185 V208 C185 215 178 224 166 228 V20 H142 V15 Z"
          fill={`url(#${goldGradId})`}
        />
        {/* Top-left serif cap of 'P' */}
        <path d="M138 16 H220 V22 H138 Z" fill={`url(#${goldGradId})`} />

        {/* Gold Contour Highlight Under the 'U' Sweep */}
        <path
          d="M84 242 C136 254 176 226 198 196 C210 180 222 170 238 168 C222 173 210 186 196 204 C172 234 134 259 84 242 Z"
          fill={`url(#${goldGradId})`}
          opacity="0.85"
        />

        {/* 'U' (Oxford Navy Serif with Calligraphic Right Tail) */}
        <path
          d="M16 68 H68 V74 H54 V168 C54 210 78 232 114 232 C148 232 172 212 194 186 C206 171 220 162 240 162 C224 166 212 176 198 194 C174 225 146 244 108 244 C58 244 28 214 28 166 V74 H16 V68 Z"
          fill={`url(#${navyGradId})`}
        />

        {/* 'A' Crossbar (Metallic Gold Horizontal Bar) */}
        <path
          d="M244 167 H324 L327 174 H241 Z"
          fill={`url(#${goldGradId})`}
        />

        {/* 'A' (Deep Slate Teal Serif on Right) */}
        <path
          d="M316 54 L388 228 C392 236 398 239 408 240 V245 H350 V240 H364 C368 240 369 236 367 230 L310 92 L288 145 L281 141 L312 54 H316 Z"
          fill={`url(#${tealGradId})`}
        />

        {/* 'TM' Superscript */}
        <text
          x="336"
          y="94"
          fill="#0B2149"
          fontFamily="'Plus Jakarta Sans', 'Inter', Arial, sans-serif"
          fontSize="22"
          fontWeight="800"
          letterSpacing="1.5"
        >
          TM
        </text>
      </g>
    </svg>
  );

  // Variant 1: Mark Only
  if (variant === 'mark' || variant === 'monogram-only') {
    return <div className={`inline-flex items-center ${className}`}>{MarkSvg}</div>;
  }

  // Variant 2: Stacked (Mark on Top, Typography Centered Below)
  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center text-center ${className}`}>
        {MarkSvg}
        <div className="mt-3 flex flex-col items-center">
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            <span
              className={`font-serif font-bold text-lg sm:text-xl tracking-tight uppercase leading-tight ${
                lightText ? 'text-[#FAF8F5]' : 'text-[#0F1E36]'
              }`}
            >
              Chamber of Dr. Utkarsh Pandey
            </span>
            <span className="font-serif text-sm italic tracking-wide text-[#B5893E] font-medium">
              &amp; Associates
            </span>
          </div>
          <span
            className={`font-mono text-[10px] sm:text-[11px] tracking-wider uppercase mt-1 ${
              lightText ? 'text-[#FAF8F5]/70' : 'text-[#646B73]'
            }`}
          >
            Advocate, High Court at Allahabad • Prayagraj &amp; Lucknow
          </span>
        </div>
      </div>
    );
  }

  // Variant 3: Horizontal (Mark Left, Typography Right)
  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {MarkSvg}
      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span
            className={`font-serif font-bold text-base sm:text-lg tracking-tight uppercase leading-none ${
              lightText ? 'text-[#FAF8F5]' : 'text-[#0F1E36]'
            }`}
          >
            Chamber of Dr. Utkarsh Pandey
          </span>
          <span className="font-serif text-xs italic tracking-wider text-[#B5893E] font-medium">
            &amp; Associates
          </span>
        </div>
        <span
          className={`font-mono text-[10px] sm:text-[11px] tracking-wider uppercase mt-1 ${
            hideSubtitleOnLg ? 'hidden xl:block' : ''
          } ${lightText ? 'text-[#FAF8F5]/70' : 'text-[#646B73]'}`}
        >
          Advocate, High Court at Allahabad • Prayagraj &amp; Lucknow
        </span>
      </div>
    </div>
  );
};

export default UpaLogo;

