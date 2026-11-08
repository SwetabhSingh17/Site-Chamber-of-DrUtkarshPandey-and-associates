# Chamber of Dr. Utkarsh Pandey and Associates

Official web platform for the legal chamber and academic practice of **Dr. Utkarsh Pandey and Associates** (`www.advdrutkarshpandey.com`), Advocate, High Court of Judicature at Allahabad (Prayagraj & Lucknow Benches).

---

## Architecture & Technology Stack

- **Framework**: React 19 + TypeScript (Strict Type Safety)
- **Bundler & Tooling**: Vite 8
- **Styling**: Tailwind CSS v4 (Bespoke Editorial & Architectural styling tokens)
- **Routing**: React Router v7 (Dedicated multi-page routing)
- **Icons**: Lucide React
- **Typography**: Google Fonts — Cormorant Garamond (Editorial Serif), Plus Jakarta Sans (Humanist Sans), JetBrains Mono (Monospace)

---

## Key Modules & Features

1. **Bar Council of India (BCI) Compliance Gate**:
   - First-load modal citing Rule 36 of Chapter II, Part VI of the Bar Council of India Rules.
   - Voluntary access confirmation persisted in `sessionStorage`.

2. **Multi-Page Editorial Layout**:
   - `/`: Chamber Overview, Asymmetric 7:5 Hero split, Founder Credentials Dossier, and Practice highlights.
   - `/practice-areas`: Master-detail interactive 2-column matrix covering 5 specialized legal pillars with statutory references.
   - `/scholarship`: Complete 22-work academic archive (1 Featured Book Chapter with ILE ISBN + 21 Peer-Reviewed Journal Treatises), live search, category pills with count badges, and 1-click citation copying.
   - `/timeline`: Interactive career ledger detailing High Court Legal Researcher appointment (2022), Supreme Court chamber mentorship under Senior Advocates Harish Salve and N.K. Jain, and moot court distinctions.
   - `/consultation`: Dual-Chamber Location Switcher (Prayagraj 211001 & Lucknow 226030 with Google Maps integration) + Reactive brief routing form with dual email dispatch (`Consult@` and `founder@`) and WhatsApp slot scheduling.

3. **Authentic UPA™ Trademark Monogram**:
   - Custom SVG vector mark rendering the exact visiting card emblem with Oxford Navy, Brushed Antique Gold, and Slate Teal gradients.

---

## Local Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run TypeScript check and production build
npm run build

# Preview production build locally
npm run preview
```

---

## Regulatory Notice
Compliant with Rule 36 of the Bar Council of India Rules. Designed solely for informational, scholarly, and voluntary research purposes.
