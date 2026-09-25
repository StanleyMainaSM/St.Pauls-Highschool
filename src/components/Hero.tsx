import React from 'react';
import { ArrowDown, GraduationCap, Users, ShieldCheck, ChevronRight } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';
import { SchoolLogo } from './SchoolLogo';
import { AuthenticImage } from './AuthenticImage';
import { schoolAssets } from '../data/schoolAssets';

interface HeroProps {
  onExplore: () => void;
  onAdmissions: () => void;
  onContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onAdmissions, onContact }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Graphic / Authentic Hero Photo Slot */}
      <div className="absolute inset-0 z-0">
        {schoolAssets.compound.path ? (
          <img
            src={schoolAssets.compound.path}
            alt="St. Paul's High School Kevote Compound"
            className="w-full h-full object-cover object-center scale-105 animate-in fade-in duration-1000"
          />
        ) : (
          <div className="w-full h-full bg-radial from-slate-900 via-sky-950/70 to-slate-950">
            {/* Elegant architectural pattern backdrop */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:32px_32px]" />
          </div>
        )}

        {/* Cinematic dark gradients for legibility & contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Motto, Copy & CTAs */}
          <div className="lg:col-span-8 space-y-6 text-left">
            {/* Badge Ribbon */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900/90 border border-sky-500/30 text-xs text-sky-300 font-mono tracking-wider backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>EMBU COUNTY · EXTRA-COUNTY BOYS' SENIOR SCHOOL</span>
            </div>

            {/* School Name & Motto */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold uppercase tracking-tight text-white leading-[1.08] drop-shadow-md">
                St. Paul's High School
                <span className="block text-sky-400 font-bold mt-1">
                  – Kevote –
                </span>
              </h1>

              {/* School Motto Banner */}
              <div className="flex items-center gap-3 pt-1">
                <div className="h-6 w-1 bg-amber-400 rounded-full" />
                <div>
                  <p className="font-display text-lg sm:text-2xl text-amber-300 tracking-wider font-bold uppercase drop-shadow-sm">
                    "{schoolInfo.motto}"
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 tracking-wide font-sans">
                    Self-discipline and determination leading to triumph
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Statement */}
            <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed font-normal">
              An established Kenyan public boys' boarding institution in Embu County, committed to academic rigor, Christian moral integrity, and leadership development across Junior-to-Senior School CBC pathways.
            </p>

            {/* Call To Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                onClick={onExplore}
                className="px-6 py-3.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm tracking-wider uppercase transition-all shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 focus-visible:outline-2 focus-visible:outline-white"
              >
                <span>Explore Our School</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={onAdmissions}
                className="px-6 py-3.5 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-white font-semibold text-sm tracking-wider uppercase border border-slate-700 hover:border-sky-400 transition-all shadow-sm hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-sky-400"
              >
                Admissions Guide
              </button>

              <button
                onClick={onContact}
                className="px-5 py-3.5 rounded-lg text-slate-300 hover:text-white font-medium text-sm tracking-wide transition-colors hover:underline"
              >
                Contact Us →
              </button>
            </div>

            {/* Verified Quick Facts Strip */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="space-y-0.5">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Category
                </span>
                <span className="text-sm font-bold text-white block">
                  Extra-County
                </span>
                <span className="text-[11px] text-sky-400">Boys' Boarding</span>
              </div>

              <div className="space-y-0.5">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Enrollment
                </span>
                <span className="text-sm font-bold text-white block">
                  1,018+ Students
                </span>
                <span className="text-[11px] text-emerald-400">Verified Official</span>
              </div>

              <div className="space-y-0.5">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Curriculum
                </span>
                <span className="text-sm font-bold text-white block">
                  CBC Senior School
                </span>
                <span className="text-[11px] text-amber-300">Grade 10 · 11 · 12</span>
              </div>

              <div className="space-y-0.5">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                  Location
                </span>
                <span className="text-sm font-bold text-white block">
                  Embu County
                </span>
                <span className="text-[11px] text-slate-300">Kevote, Runyenjes</span>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent School Crest & Authentic Visual Preview Card */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-4">
            <div className="w-full max-w-sm bg-slate-900/90 border border-sky-900/60 rounded-2xl p-6 backdrop-blur-md shadow-2xl relative overflow-hidden group">
              {/* Subtle accent corner glow */}
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex flex-col items-center text-center space-y-4">
                <SchoolLogo size="lg" lightVariant />

                <div className="space-y-1">
                  <h2 className="font-display font-bold text-lg text-white uppercase tracking-tight">
                    St. Paul's High School
                  </h2>
                  <p className="text-xs text-sky-400 font-semibold tracking-widest uppercase">
                    Kevote · Embu County
                  </p>
                  <p className="text-xs font-serif-quote italic text-amber-300">
                    "Jishinde Ushinde"
                  </p>
                </div>

                <div className="w-full pt-3 border-t border-slate-800 text-left space-y-2 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Sponsor: Catholic Diocese of Embu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Holistic Male Mentorship & Character</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>STEM, Social Sciences & Arts Pathways</span>
                  </div>
                </div>

                <div className="w-full pt-2">
                  <AuthenticImage
                    src={schoolAssets.gate.path}
                    alt="Main School Gate of St. Paul's Kevote"
                    label={schoolAssets.gate.placeholderText}
                    category="Campus Gate"
                    aspectRatio="video"
                    className="w-full shadow-inner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <button
        onClick={onExplore}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-slate-400 hover:text-sky-300 transition-colors py-2 focus-visible:outline-sky-400"
        aria-label="Scroll down to explore school details"
      >
        <span className="text-[10px] tracking-widest uppercase font-mono mb-1">
          Scroll Down
        </span>
        <ArrowDown className="w-4 h-4 animate-bounce text-sky-400" />
      </button>
    </section>
  );
};
