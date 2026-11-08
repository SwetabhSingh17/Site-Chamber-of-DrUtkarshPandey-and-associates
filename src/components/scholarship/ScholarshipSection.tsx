import React, { useState, useMemo } from 'react';
import { ALL_PUBLICATIONS } from '../../data/scholarship.data';
import { IPublicationWork } from '../../types/legal.types';
import {
  BookOpen,
  Search,
  Copy,
  Check,
  Filter,
  BookmarkCheck,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Layers,
} from 'lucide-react';

export const ScholarshipSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [viewMode, setViewMode] = useState<'featured' | 'complete'>('complete');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories: { label: string; value: string; count: number }[] = [
    { label: 'All', value: 'All', count: ALL_PUBLICATIONS.length },
    {
      label: 'Constitutional & Public Law',
      value: 'Constitutional & Public Law',
      count: ALL_PUBLICATIONS.filter((p) => p.category === 'Constitutional & Public Law').length,
    },
    {
      label: 'Corporate & Commercial',
      value: 'Corporate & Commercial',
      count: ALL_PUBLICATIONS.filter((p) => p.category === 'Corporate & Commercial').length,
    },
    {
      label: 'Criminal & Cyber Law',
      value: 'Criminal & Cyber Law',
      count: ALL_PUBLICATIONS.filter((p) => p.category === 'Criminal & Cyber Law').length,
    },
    {
      label: 'Human Rights & Socio-Legal',
      value: 'Human Rights & Socio-Legal',
      count: ALL_PUBLICATIONS.filter((p) => p.category === 'Human Rights & Socio-Legal').length,
    },
    {
      label: 'International Law',
      value: 'International Law',
      count: ALL_PUBLICATIONS.filter((p) => p.category === 'International Law').length,
    },
  ];

  // Separate the featured book chapter for a premier editorial showcase
  const bookChapter = useMemo(() => {
    return ALL_PUBLICATIONS.find((p) => p.type === 'book_chapter');
  }, []);

  // Filtered publications
  const filteredWorks = useMemo(() => {
    return ALL_PUBLICATIONS.filter((paper) => {
      // Category filter
      const matchesCategory = selectedCategory === 'All' || paper.category === selectedCategory;

      // Search query filter (searches title, publication venue, identifier, and abstract)
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        paper.title.toLowerCase().includes(q) ||
        paper.publicationVenue.toLowerCase().includes(q) ||
        paper.identifierValue.toLowerCase().includes(q) ||
        paper.category.toLowerCase().includes(q) ||
        paper.publicationDate.toLowerCase().includes(q);

      // View mode filter (featured vs complete)
      const matchesView = viewMode === 'complete' || paper.isFeatured;

      return matchesCategory && matchesSearch && matchesView;
    });
  }, [searchQuery, selectedCategory, viewMode]);

  const handleCopyCitation = (paper: IPublicationWork) => {
    navigator.clipboard.writeText(paper.citation);
    setCopiedId(paper.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="scholarship" className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#DED8CE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F2EFE9] border border-[#DED8CE] mb-4">
              <BookOpen className="w-3.5 h-3.5 text-[#B5893E]" />
              <span className="font-mono text-[11px] font-semibold text-[#0F1E36] tracking-wider uppercase">
                Academic Archive &bull; Complete Corpus of 22 Published Works
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#0F1E36] font-bold tracking-tight">
              Interactive Legal Scholarship &amp; Publications Repository
            </h2>

            <p className="font-sans text-sm sm:text-base text-[#646B73] mt-3 leading-relaxed">
              Explore all <strong>21 peer-reviewed journal treatises</strong> and the{' '}
              <strong>featured book chapter</strong> authored by Dr. Utkarsh Pandey, spanning Constitutional Supremacy,
              the Bharatiya Nagarik Suraksha Sanhita (BNSS), corporate debt restructuring, cyber stalking, and international jurisprudence.
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="font-mono text-xs text-[#646B73] bg-[#F2EFE9] border border-[#DED8CE] p-4 text-left sm:text-right w-full md:w-auto shrink-0">
            <div className="flex items-center justify-between gap-4 mb-1">
              <span>TOTAL CORPUS:</span>
              <span className="font-bold text-[#0F1E36]">22 WORKS</span>
            </div>
            <div className="flex items-center justify-between gap-4 mb-1">
              <span>BOOK CHAPTER:</span>
              <span className="font-bold text-[#B5893E]">1 (ILE ISBN)</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span>JOURNAL PAPERS:</span>
              <span className="font-bold text-[#164E4B]">21 (ISSN INDEXED)</span>
            </div>
          </div>
        </div>

        {/* --- PREMIER FEATURED BOOK CHAPTER ARCHITECTURAL SHOWCASE --- */}
        {bookChapter && (
          <div className="mb-12 bg-[#F2EFE9] border-2 border-[#0F1E36] p-6 sm:p-8 relative overflow-hidden shadow-xs">
            {/* Top accent badge */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DED8CE] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <BookmarkCheck className="w-4 h-4 text-[#B5893E]" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#0F1E36] font-bold">
                  Featured Book Chapter &bull; Constitutional Jurisprudence
                </span>
              </div>
              <span className="font-mono text-[11px] bg-[#0F1E36] text-[#FAF8F5] px-2.5 py-0.5">
                ISBN: {bookChapter.identifierValue} &bull; {bookChapter.publicationDate}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-8 space-y-3">
                <h3 className="font-serif text-xl sm:text-2xl text-[#0F1E36] font-bold leading-snug">
                  &ldquo;{bookChapter.title}&rdquo;
                </h3>

                <p className="font-mono text-xs text-[#B5893E] font-medium">
                  Published in the Book: <em>{bookChapter.publicationVenue}</em>
                </p>

                <p className="font-sans text-xs sm:text-sm text-[#2C353D] leading-relaxed">
                  {bookChapter.abstractSnippet}
                </p>

                <div className="pt-2">
                  <span className="font-mono text-[11px] text-[#646B73] block mb-1">
                    Formal Academic Citation:
                  </span>
                  <div className="p-3 bg-[#FAF8F5] border border-[#DED8CE] font-mono text-xs text-[#0F1E36] break-all leading-relaxed select-all">
                    {bookChapter.citation}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 bg-[#FAF8F5] border border-[#DED8CE] p-4 flex flex-col justify-between h-full space-y-4">
                <div className="space-y-2 text-xs font-mono">
                  <div className="text-[10px] text-[#646B73] uppercase tracking-wider">
                    Publisher Credentials:
                  </div>
                  <div className="text-[#0F1E36] font-semibold">Institute of Legal Education (ILE)</div>
                  <div className="text-[#646B73]">Title: A Landmark on the Indian Constitution</div>
                  <div className="text-[#164E4B]">Publication Date: September 2023</div>
                  <div className="text-[#646B73]">Subject: Parliamentary Sovereignty vs Constitutional Supremacy</div>
                </div>

                <button
                  type="button"
                  onClick={() => handleCopyCitation(bookChapter)}
                  className={`w-full inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-mono uppercase tracking-wider border transition-colors ${
                    copiedId === bookChapter.id
                      ? 'bg-[#164E4B] text-[#FAF8F5] border-[#164E4B]'
                      : 'bg-[#0F1E36] text-[#FAF8F5] border-[#0F1E36] hover:bg-[#1A2E4E]'
                  }`}
                >
                  {copiedId === bookChapter.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#B5893E]" />
                      <span>Citation Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#B5893E]" />
                      <span>Copy Book Chapter Citation</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* --- INTERACTIVE CONTROLS BAR: SEARCH, CATEGORIES & VIEW MODE TOGGLE --- */}
        <div className="bg-[#F2EFE9] border border-[#DED8CE] p-4 sm:p-5 mb-8 space-y-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* View Mode Switcher: Top 6 vs Complete 22 (Mobile Responsive) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 w-full sm:w-auto p-1 bg-[#FAF8F5] border border-[#DED8CE] font-mono text-xs">
              <button
                type="button"
                onClick={() => setViewMode('featured')}
                className={`px-3 py-2 sm:py-1.5 transition-colors flex items-center justify-center gap-1.5 cursor-pointer text-center ${
                  viewMode === 'featured'
                    ? 'bg-[#0F1E36] text-[#FAF8F5] font-semibold'
                    : 'text-[#646B73] hover:text-[#0F1E36]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#B5893E] shrink-0" />
                <span>Featured View (Top 6)</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('complete')}
                className={`px-3 py-2 sm:py-1.5 transition-colors flex items-center justify-center gap-1.5 cursor-pointer text-center ${
                  viewMode === 'complete'
                    ? 'bg-[#0F1E36] text-[#FAF8F5] font-semibold'
                    : 'text-[#646B73] hover:text-[#0F1E36]'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-[#B5893E] shrink-0" />
                <span>Complete Archive (22 Works)</span>
              </button>
            </div>

            {/* Live Search Input (Full width on mobile, no min-w blowout) */}
            <div className="relative w-full lg:max-w-md">
              <Search className="w-4 h-4 text-[#646B73] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, journal, ISSN, or subject..."
                className="w-full pl-9 pr-8 py-2 text-xs font-sans bg-[#FAF8F5] border border-[#DED8CE] text-[#0F1E36] placeholder-[#646B73]/60 focus:outline-hidden focus:border-[#B5893E]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-sm text-[#646B73] hover:text-[#0F1E36] p-1 cursor-pointer"
                  aria-label="Clear Search"
                >
                  &times;
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#DED8CE]/60">
            <span className="font-mono text-[11px] text-[#646B73] uppercase tracking-wider mr-2 flex items-center gap-1">
              <Filter className="w-3 h-3 text-[#B5893E]" /> Discipline:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3 py-1 text-xs font-mono transition-colors border flex items-center gap-1.5 ${
                  selectedCategory === cat.value
                    ? 'bg-[#0F1E36] text-[#FAF8F5] border-[#0F1E36] font-semibold'
                    : 'bg-[#FAF8F5] text-[#2C353D] border-[#DED8CE] hover:border-[#B5893E]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-xs ${
                    selectedCategory === cat.value
                      ? 'bg-[#B5893E] text-[#0F1E36] font-bold'
                      : 'bg-[#F2EFE9] text-[#646B73]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Status / Count Bar */}
        <div className="flex items-center justify-between text-xs font-mono text-[#646B73] mb-6">
          <span>
            Showing <strong className="text-[#0F1E36]">{filteredWorks.length}</strong> of{' '}
            <strong>{ALL_PUBLICATIONS.length}</strong> published works
            {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
            {viewMode === 'featured' && ` (Featured Selection)`}
          </span>
          <span className="hidden sm:inline">Peer-Reviewed &amp; ISSN / ISBN Authenticated</span>
        </div>

        {/* --- GRID OF PUBLICATIONS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work) => {
            const isExpanded = expandedId === work.id;
            const isCopied = copiedId === work.id;

            return (
              <div
                key={work.id}
                className={`bg-[#FAF8F5] border p-5 sm:p-6 transition-all flex flex-col justify-between ${
                  work.isFeatured
                    ? 'border-[#0F1E36]/40 hover:border-[#0F1E36] shadow-xs'
                    : 'border-[#DED8CE] hover:border-[#B5893E]'
                }`}
              >
                <div>
                  {/* Category and Publication Date Monospace Band */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="font-mono text-[9px] uppercase tracking-wider font-semibold text-[#164E4B] bg-[#164E4B]/10 border border-[#164E4B]/20 px-2 py-0.5 line-clamp-1">
                      {work.category}
                    </span>
                    <span className="font-mono text-[10px] text-[#646B73] shrink-0">
                      {work.publicationDate}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-serif text-base sm:text-lg font-bold text-[#0F1E36] leading-snug mb-2">
                    {work.itemNumber ? `${work.itemNumber}. ` : ''}&ldquo;{work.title}&rdquo;
                  </h4>

                  {/* Journal or Venue */}
                  <p className="font-mono text-xs text-[#B5893E] font-medium mb-1">
                    {work.publicationVenue}
                  </p>

                  {/* Identifier (ISSN / ISBN) */}
                  <p className="font-mono text-[11px] text-[#646B73] mb-3">
                    {work.identifierType}: {work.identifierValue}
                  </p>

                  {/* Doctrinal Scope Preview */}
                  <p className="font-sans text-xs text-[#2C353D] leading-relaxed mb-4">
                    {isExpanded ? work.abstractSnippet : `${work.abstractSnippet.slice(0, 130)}...`}
                  </p>
                </div>

                {/* Bottom Actions: Expand & Copy Citation */}
                <div className="pt-3 border-t border-[#DED8CE] flex items-center justify-between text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => toggleExpand(work.id)}
                    className="inline-flex items-center gap-1 text-[#0F1E36] hover:text-[#B5893E] transition-colors"
                  >
                    {isExpanded ? (
                      <>
                        <span>Hide Scope</span> <ChevronUp className="w-3.5 h-3.5" />
                      </>
                    ) : (
                      <>
                        <span>Read Scope</span> <ChevronDown className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleCopyCitation(work)}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 border text-[11px] transition-colors ${
                      isCopied
                        ? 'bg-[#164E4B] text-[#FAF8F5] border-[#164E4B]'
                        : 'bg-[#F2EFE9] text-[#0F1E36] border-[#DED8CE] hover:border-[#B5893E]'
                    }`}
                    title="Copy standard academic citation"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3 h-3 text-[#B5893E]" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-[#646B73]" />
                        <span>Cite</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredWorks.length === 0 && (
          <div className="text-center py-12 bg-[#F2EFE9] border border-[#DED8CE]">
            <BookOpen className="w-8 h-8 text-[#646B73] mx-auto mb-2" />
            <p className="font-serif text-lg text-[#0F1E36]">No publication matched your search criteria.</p>
            <p className="font-mono text-xs text-[#646B73] mt-1">
              Try clearing the search term or switching to &ldquo;All&rdquo; disciplines.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
