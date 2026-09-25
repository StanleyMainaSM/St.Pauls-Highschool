import React, { useState, useEffect, useCallback } from 'react';
import { Image as ImageIcon, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryList, GalleryItem } from '../data/schoolData';
import { AuthenticImage } from './AuthenticImage';
import { schoolAssets } from '../data/schoolAssets';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['ALL', 'CAMPUS', 'BOARDING', 'TRANSPORT', 'FACILITIES', 'ACADEMICS', 'SCHOOL LIFE'];

  const filteredItems = activeCategory === 'ALL'
    ? galleryList
    : galleryList.filter(item => item.category === activeCategory);

  const getImagePath = (id: string) => {
    switch (id) {
      case 'g-gate':
        return schoolAssets.gate.path;
      case 'g-compound':
        return schoolAssets.compound.path;
      case 'g-bus':
        return schoolAssets.bus.path;
      case 'g-dorm':
        return schoolAssets.dormitory.path;
      case 'g-bakery':
        return schoolAssets.bakery.path;
      case 'g-principal':
        return schoolAssets.principal.path;
      case 'g-labs':
        return schoolAssets.laboratories.path;
      case 'g-sports':
        return schoolAssets.sports.path;
      default:
        return '';
    }
  };

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-sky-400 bg-sky-950/80 px-3 py-1 rounded border border-sky-800/40">
              <ImageIcon className="w-3.5 h-3.5 text-sky-400" />
              <span>Campus Photography & Archives</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
              St. Paul's Kevote Visual Gallery
            </h2>
            <p className="text-base text-slate-300">
              Authentic photographic documentation of our grounds, facilities, transport, and student life.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 self-start md:self-end no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-sky-500 text-slate-950 shadow-md font-extrabold'
                    : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredItems.map((item, index) => {
            const path = item.src || getImagePath(item.id);
            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 hover:border-sky-400 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <AuthenticImage
                    src={path}
                    alt={item.title}
                    label={item.imagePlaceholderLabel}
                    category={item.category}
                    aspectRatio="auto"
                    className="w-full h-full"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="p-3 bg-white/90 rounded-full text-slate-900 shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-5 h-5 text-sky-700" />
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-1 bg-slate-850">
                  <div className="flex justify-between items-center text-[10px] font-mono text-sky-400">
                    <span>{item.category}</span>
                    <span>VIEW</span>
                  </div>
                  <h4 className="font-display font-bold text-sm text-white group-hover:text-sky-300 transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 z-50 p-3 rounded-full text-white/80 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full text-white/80 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full text-white/80 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Card Content */}
          <div
            className="max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[65vh] overflow-hidden flex items-center justify-center bg-black">
              <AuthenticImage
                src={filteredItems[lightboxIndex].src || getImagePath(filteredItems[lightboxIndex].id)}
                alt={filteredItems[lightboxIndex].title}
                label={filteredItems[lightboxIndex].imagePlaceholderLabel}
                category={filteredItems[lightboxIndex].category}
                aspectRatio="auto"
                className="w-full max-h-[65vh] object-contain"
              />
            </div>

            <div className="p-6 text-white space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-sky-400 font-semibold uppercase tracking-wider">
                  {filteredItems[lightboxIndex].category}
                </span>
                <span>
                  {lightboxIndex + 1} of {filteredItems.length}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-sm text-slate-300">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
