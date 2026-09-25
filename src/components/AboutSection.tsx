import React, { useState } from 'react';
import { MapPin, Compass, BookOpen, Shield, CheckCircle, ChevronRight, X } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';
import { AuthenticImage } from './AuthenticImage';
import { schoolAssets } from '../data/schoolAssets';

export const AboutSection: React.FC = () => {
  const [showFullHistoryModal, setShowFullHistoryModal] = useState(false);

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-sky-700 bg-sky-50 px-3 py-1 rounded border border-sky-200 mb-3">
            <span>Our Heritage & Mission</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight leading-tight">
            Nurturing Disciplined, Visionary Leaders in Embu
          </h2>
          <p className="mt-3 text-lg text-slate-600 font-normal">
            St. Paul's High School – Kevote is an established Extra-County boys' boarding institution dedicated to academic diligence, moral grounding, and character excellence.
          </p>
        </div>

        {/* Split Layout: IMAGE | TEXT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <AuthenticImage
                src={schoolAssets.compound.path}
                alt="St. Paul's High School Kevote Compound"
                label={schoolAssets.compound.placeholderText}
                category="Campus Grounds"
                aspectRatio="video"
                className="w-full"
              />
            </div>

            {/* Caption & Location Card */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-600 space-y-0.5">
                <span className="font-bold text-slate-900 block">
                  Location & Setting:
                </span>
                <span>
                  Situated in Kevote, Makengi Location, Embu West Sub-County / Runyenjes Constituency, Embu County. Set amid the serene, cool agricultural highlands of Mount Kenya.
                </span>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p>
                Founded to serve students with quality secondary education under Christian auspices, <strong className="text-slate-900">St. Paul's High School – Kevote</strong> has grown into a leading boys' boarding center in Eastern Kenya, officially serving over 1,018 students.
              </p>
              <p>
                Our philosophy is crystallized in our enduring school motto, <strong className="text-sky-800 font-serif-quote italic">"Jishinde Ushinde"</strong> (Conquer Yourself to Conquer). We believe that intellectual achievement without self-discipline is hollow; hence, we build internal fortitude, work ethic, and spiritual responsibility into every young man.
              </p>
              <p>
                Operating with the religious sponsorship of the <strong className="text-slate-900">Catholic Diocese of Embu</strong>, the school welcomes learners from all communities, cultivating mutual respect, teamwork, and active stewardship.
              </p>
            </div>

            {/* Quick Feature Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/70">
                <CheckCircle className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    Boys' Boarding Focus
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Structured dormitory living promoting brotherhood and self-reliance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200/70">
                <Compass className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                    CBC Senior School Ready
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Transitioning Grades 10–12 into specialized STEM & Social Science pathways.
                  </p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={() => setShowFullHistoryModal(true)}
                className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm flex items-center gap-2 focus-visible:outline-sky-500"
              >
                <span>Learn More About Kevote</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href="#campus"
                className="text-xs font-bold uppercase tracking-wider text-sky-700 hover:text-sky-900 transition-colors py-2"
              >
                View Campus Facilities ↓
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded History & School Profile Modal */}
      {showFullHistoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setShowFullHistoryModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Close Profile Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-5">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-700">
                  Institutional Profile
                </span>
                <h3 className="text-2xl font-display font-bold text-slate-900 mt-1">
                  St. Paul's High School – Kevote
                </h3>
                <p className="text-xs text-amber-700 font-semibold italic mt-0.5">
                  Motto: "JISHINDE USHINDE" (Conquer Yourself to Conquer)
                </p>
              </div>

              <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                <h4 className="font-bold text-slate-900 text-base">
                  1. Geographical & Sub-County Context
                </h4>
                <p>
                  St. Paul's Kevote is located in Kevote Sub-Location, Makengi Location, Nembure Division, within Embu West Sub-County and Runyenjes Constituency in Embu County. The school enjoys the cool, invigorating climate on the slopes of Mount Kenya, providing an idyllic, disruption-free environment for concentrated study.
                </p>

                <h4 className="font-bold text-slate-900 text-base pt-2">
                  2. Sponsorship & Ethos
                </h4>
                <p>
                  Sponsored under the religious stewardship of the Catholic Diocese of Embu (St. Paul's Kevote Parish), the school nurtures holistic virtues: truthfulness, humility, respect, and servant leadership.
                </p>

                <h4 className="font-bold text-slate-900 text-base pt-2">
                  3. Institutional Classification & Enrollment
                </h4>
                <p>
                  Classified as a Public Extra-County Boys' Boarding Secondary & Senior School, Kevote accommodates an active enrollment of over 1,018 students supported by dedicated teaching faculty and supportive administrative staff.
                </p>

                <h4 className="font-bold text-slate-900 text-base pt-2">
                  4. The Meaning of "Jishinde Ushinde"
                </h4>
                <p>
                  In Kiswahili, <em>"Jishinde Ushinde"</em> translates to "Overcome yourself, and you shall overcome." It challenges each young man to master his impulses, defeat procrastination, embrace academic curiosity, and rise above difficulty to emerge triumphant in all spheres of life.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex justify-end">
                <button
                  onClick={() => setShowFullHistoryModal(false)}
                  className="px-5 py-2 rounded-lg bg-sky-700 text-white font-semibold text-xs uppercase tracking-wider hover:bg-sky-800 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
