import React from 'react';
import { ShieldCheck, GraduationCap, Home, BookOpen, Bus, Trophy, Check } from 'lucide-react';
import { whyChoosePillars } from '../data/schoolData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-sky-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-sky-600" />;
      case 'Home':
        return <Home className="w-6 h-6 text-sky-600" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-sky-600" />;
      case 'Bus':
        return <Bus className="w-6 h-6 text-sky-600" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-sky-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-sky-600" />;
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-sky-700 bg-sky-100/60 px-3 py-1 rounded border border-sky-300">
            <span>The Kevote Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Why St. Paul's High School – Kevote
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            A balanced secondary and senior school environment engineered to cultivate intellectual depth, moral grounding, and physical vitality.
          </p>
        </div>

        {/* Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChoosePillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-colors">
                  <div className="group-hover:text-white [&>svg]:group-hover:text-white transition-colors">
                    {getIcon(pillar.iconName)}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-slate-900 tracking-tight group-hover:text-sky-800 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="font-medium">{pillar.verifiedDetail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Ethos callout banner */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white rounded-2xl p-6 sm:p-8 border border-sky-900/60 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-mono tracking-wider text-amber-400 uppercase font-semibold">
              Foundational School Creed
            </span>
            <h4 className="font-display font-bold text-xl sm:text-2xl text-white">
              "JISHINDE USHINDE"
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Self-mastery precedes every external conquest. At Kevote, our students learn that personal discipline is the mother of all lasting achievement.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="#admissions"
              className="px-5 py-3 rounded-lg bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md inline-block"
            >
              Enroll Your Son Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
