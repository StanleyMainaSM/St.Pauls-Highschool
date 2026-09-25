import React from 'react';
import { Quote, Award, Mail, Phone } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';
import { AuthenticImage } from './AuthenticImage';
import { schoolAssets } from '../data/schoolAssets';

export const PrincipalMessage: React.FC = () => {
  const { principal } = schoolInfo;

  return (
    <section className="py-20 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#0284c715_1px,transparent_1px)] [background-size:28px_28px] opacity-25 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Principal Image & Credentials Column */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md bg-slate-800/90 rounded-2xl p-4 sm:p-5 border border-sky-800/40 shadow-2xl backdrop-blur-sm">
              <div className="overflow-hidden rounded-xl">
                <AuthenticImage
                  src={schoolAssets.principal.path}
                  alt={`Photograph of Chief Principal ${principal.name}`}
                  label={schoolAssets.principal.placeholderText}
                  category="School Leadership"
                  aspectRatio="portrait"
                  className="w-full shadow-inner"
                />
              </div>

              {/* Verified Principal Nameplate */}
              <div className="mt-4 text-center space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-sky-950/80 border border-sky-600/30 text-[11px] font-mono text-sky-300">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Office of the Principal</span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight mt-1">
                  {principal.name}
                </h3>
                <p className="text-xs text-sky-400 font-semibold tracking-wider uppercase">
                  {principal.role}
                </p>
                <p className="text-[11px] text-slate-400">
                  St. Paul's High School – Kevote · Embu County
                </p>

                {/* Direct Contact info */}
                <div className="pt-3 border-t border-slate-700/60 mt-3 flex justify-center items-center gap-4 text-xs text-slate-300">
                  <a
                    href={`tel:${schoolInfo.phoneRaw}`}
                    className="flex items-center gap-1 hover:text-sky-300 transition-colors"
                  >
                    <Phone className="w-3 h-3 text-sky-400" />
                    <span>Office Line</span>
                  </a>
                  <span className="text-slate-600">·</span>
                  <a
                    href={`mailto:${schoolInfo.email}`}
                    className="flex items-center gap-1 hover:text-sky-300 transition-colors"
                  >
                    <Mail className="w-3 h-3 text-sky-400" />
                    <span>School Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Principal's Message Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-sky-400 bg-sky-950/60 px-3 py-1 rounded border border-sky-800/40">
              <Quote className="w-3.5 h-3.5 text-sky-400" />
              <span>Message From The Chief Principal</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight leading-tight">
              "Building Tomorrow's Gentlemen of Substance and Moral Courage"
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              {principal.message.map((paragraph, index) => (
                <p key={index} className="text-slate-200">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quote attribution block */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between flex-wrap gap-4">
              <div>
                <span className="font-display font-bold text-white text-base block">
                  {principal.name}
                </span>
                <span className="text-xs text-sky-400 font-semibold uppercase tracking-wide">
                  Chief Principal · St. Paul's High School Kevote
                </span>
              </div>

              <div className="text-right">
                <span className="text-xs font-serif-quote italic text-amber-300 block">
                  "Jishinde Ushinde"
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">
                  Official School Motto
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
