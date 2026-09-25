import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { campusExperienceItems } from '../data/schoolData';
import { AuthenticImage } from './AuthenticImage';
import { schoolAssets } from '../data/schoolAssets';

export const CampusExperience: React.FC = () => {
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const getAssetPath = (id: string) => {
    switch (id) {
      case 'campus-gate':
        return schoolAssets.gate.path;
      case 'campus-compound':
        return schoolAssets.compound.path;
      case 'campus-bus':
        return schoolAssets.bus.path;
      case 'campus-dorm':
        return schoolAssets.dormitory.path;
      case 'campus-bakery':
        return schoolAssets.bakery.path;
      case 'campus-labs':
        return schoolAssets.laboratories.path;
      default:
        return '';
    }
  };

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + campusExperienceItems.length) % campusExperienceItems.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % campusExperienceItems.length);
    }
  };

  return (
    <section id="campus" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-sky-700 bg-sky-50 px-3 py-1 rounded border border-sky-200">
              <span>Campus Tour & Facilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight">
              Experience Life at St. Paul's
            </h2>
            <p className="text-base text-slate-600">
              Take an authentic tour through our learning sanctuaries, boarding amenities, and campus life in Kevote.
            </p>
          </div>

          <div className="text-xs text-slate-500 font-mono tracking-wide">
            [Click any image to enlarge in lightbox]
          </div>
        </div>

        {/* Campus Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {campusExperienceItems.map((item, index) => {
            const path = getAssetPath(item.id);
            return (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(index)}
                className="group cursor-pointer bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col"
              >
                {/* Visual Area */}
                <div className="relative overflow-hidden">
                  <AuthenticImage
                    src={path}
                    alt={item.title}
                    label={item.imagePlaceholderLabel}
                    category={item.category}
                    aspectRatio="video"
                    className="w-full"
                  />

                  {/* Expand icon overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="p-3 bg-white/90 backdrop-blur-sm rounded-full text-slate-900 shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="w-5 h-5 text-sky-700" />
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-mono text-sky-700 font-bold uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        Facility #{index + 1}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-slate-900 group-hover:text-sky-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-amber-700 font-medium italic mt-0.5">
                      {item.subtitle}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed mt-2.5">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-[11px] text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{item.verifiedNote}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={handleCloseLightbox}
        >
          {/* Close button */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-4 right-4 z-50 p-3 rounded-full text-white/80 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full text-white/80 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
            aria-label="Previous Campus Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full text-white/80 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
            aria-label="Next Campus Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Card Content */}
          <div
            className="max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[60vh] overflow-hidden flex items-center justify-center bg-black">
              <AuthenticImage
                src={getAssetPath(campusExperienceItems[activeLightboxIndex].id)}
                alt={campusExperienceItems[activeLightboxIndex].title}
                label={campusExperienceItems[activeLightboxIndex].imagePlaceholderLabel}
                category={campusExperienceItems[activeLightboxIndex].category}
                aspectRatio="video"
                className="w-full h-full max-h-[60vh]"
              />
            </div>

            <div className="p-6 text-white space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-sky-400 uppercase tracking-widest font-semibold">
                  {campusExperienceItems[activeLightboxIndex].category}
                </span>
                <span>
                  {activeLightboxIndex + 1} of {campusExperienceItems.length}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl text-white">
                {campusExperienceItems[activeLightboxIndex].title}
              </h3>
              <p className="text-xs text-amber-300 italic">
                {campusExperienceItems[activeLightboxIndex].subtitle}
              </p>
              <p className="text-sm text-slate-300 leading-relaxed pt-1">
                {campusExperienceItems[activeLightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
