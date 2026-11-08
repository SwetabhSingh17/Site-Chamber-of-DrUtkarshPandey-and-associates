# Version History — Chamber of Dr. Utkarsh Pandey and Associates

> **Current Version:** `1.1.0`  
> **Release Date:** November 8, 2026  
> **Repository:** [Site-Chamber-of-DrUtkarshPandey-and-associates](https://github.com/SwetabhSingh17/Site-Chamber-of-DrUtkarshPandey-and-associates)  
> **Framework:** React 19 • Vite 8 • Tailwind CSS v4 • TypeScript • React Router v7

---

## 📋 Table of Contents
- [Version 1.1.0 (Current)](#version-110-current--november-8-2026)
- [Version 1.0.0 (Initial Release)](#version-100-initial-release--november-8-2026)
- [Architecture & Standards](#architecture--standards)

---

## Version 1.1.0 (Current) — November 8, 2026
### Multi-Page Architectural Migration, BCI Modal Mobile Viewport Fix, and Navigation Polish

#### 1. Mobile BCI Compliance Modal Fix (`src/components/layout/BciDisclaimerModal.tsx`)
- **Root Cause Resolution**: Resolved an issue on mobile devices where the initial Bar Council of India (BCI) Rule 36 acknowledgement popup exceeded the screen height and could not be scrolled down to click "I Acknowledge & Enter Chamber".
- **Pinned Sticky Action Bar**: Extracted the decision buttons into a dedicated `shrink-0 bg-[#F2EFE9] border-t border-[#DED8CE]` bottom container, ensuring the primary confirmation CTA is immediately accessible on all viewport sizes.
- **Independent Touch-Scroll Body**: Implemented `flex-1 overflow-y-auto overscroll-contain` on the body container and constrained the modal card to `max-h-[94vh] sm:max-h-[90vh]` with `overflow-y-auto` on the overlay backdrop.
- **Dynamic Monogram Clearance**: Scaled the UPA™ monogram header mark height (`markHeight="h-12 sm:h-16"`) to optimize vertical clearance on compact screens.

#### 2. Multi-Page Architecture Transition (`src/App.tsx`, `src/pages/`)
- **De-cluttered Single-Page Layout**: Replaced the long continuous single-page scroll layout with clean, dedicated routes via React Router v7:
  - `/`: Chamber Overview & Asymmetric Hero Dossier (`src/pages/HomePage.tsx`)
  - `/practice-areas`: Master-Detail Interactive Legal Pillars Matrix (`src/pages/PracticeAreasPage.tsx`)
  - `/scholarship`: Complete 22-Work Academic Repository (`src/pages/ScholarshipPage.tsx`)
  - `/timeline`: Chronological Career Ledger & Judicial Mentorship (`src/pages/TimelinePage.tsx`)
  - `/consultation`: Dual-Chamber Registry & Reactive Brief Router (`src/pages/ConsultationPage.tsx`)
- **Automatic Scroll-to-Top**: Configured `ScrollToTop` helper to reset scroll position on route transitions.

#### 3. Top Navigation Bar Polish (`src/components/layout/Header.tsx`)
- **Button-Style Pill Navigation**: Upgraded navigation links from plain text to refined, tactile button-like pills with active indicator states, border highlights, and hover transitions.
- **Overlap Prevention**: Solved horizontal collision on intermediate viewports (768px–1150px) by adjusting spacing (`gap-1.5 xl:gap-2`), enforcing `whitespace-nowrap`, and conditionally condensing the monogram subtitle via `hideSubtitleOnLg`.
- **Status Indicator Cleanup**: Removed the `"REGISTRY CLOSED • AFTER HOURS"` status badge from the utility strip to maintain a cleaner header aesthetic.

#### 4. Editorial Content & Dossier Refinements
- **Academic Citation Cleanup**: Removed all CGPA citations across founder credentials, education sections, and profile dossiers in compliance with professional presentation guidelines.
- **Vector Monogram Integration**: Integrated the official UPA™ vector trademark monogram (`src/components/common/UpaLogo.tsx`) across Header (horizontal), Hero Dossier & Modal (stacked), and Footer (mark).

---

## Version 1.0.0 (Initial Release) — November 8, 2026
### Foundation Scaffolding, Regulatory Gate, Academic Archive & Dual-Chamber Registry

#### 1. Statutory Compliance Gate
- **Bar Council of India Rule 36 Compliance**: Mandatory statutory disclosure modal citing Chapter II, Part VI of the Bar Council of India Rules prohibiting solicitation and advertisement.
- **Session Persistence**: User voluntary access declaration tracked via `sessionStorage` (`upa_chamber_bci_compliance_acknowledged_v1`).

#### 2. Interactive Academic Archive (22 Scholarly Works)
- **1 Featured Book Chapter**: Published in *Socio-Legal Dimensions in India* (ILE, ISBN: 978-81-961097-0-7) examining Indian Competition Law and Big Data Market Concentration.
- **21 Peer-Reviewed Treatises**: Full catalog of published legal scholarship spanning Constitutional Jurisprudence, White-Collar Crime, Environmental Law, Insolvency & Bankruptcy, and Tech Law.
- **Interactive Capabilities**: Real-time keyword search, topical filter pills with dynamic count badges, and one-click citation clipboard copy.

#### 3. Dual-Chamber Registry & Consultation Router
- **Prayagraj & Lucknow Chamber Switcher**: Location switcher toggling between:
  - Prayagraj Chamber: 18/2A, Lowther Road, George Town, Prayagraj, UP 211001
  - Lucknow Chamber: 4/13, Vivek Khand, Gomti Nagar, Lucknow, UP 226010
- **Interactive Brief Routing**: Case brief generator supporting dual email dispatch (`consult@advdrutkarshpandey.com`, `founder@advdrutkarshpandey.com`) and direct WhatsApp consultation scheduling.

#### 4. Visual Identity & Editorial Design System
- **Architectural Palette**: Deep Oxford Navy (`#0F1E36`), Brushed Antique Gold (`#B5893E`), Slate Teal (`#164E4B`), Warm Ivory/Parchment (`#FAF8F5`, `#F2EFE9`), and Hairline Slate borders (`#DED8CE`).
- **Typography**: Cormorant Garamond (Editorial Serif), Plus Jakarta Sans (Humanist Body), and JetBrains Mono (Technical Monospace).

---

## Architecture & Standards

- **TypeScript Strict Mode**: Fully typed interfaces prefixed with `I` (e.g., `IBciDisclaimerModalProps`, `IPublication`, `IChamberLocation`).
- **Clean Architecture & SOLID Principles**: Modular components separated by concern (layout, features, pages, data, types).
- **Zero Build Warnings**: Strict linter, compiler, and Vite production bundle optimization.
