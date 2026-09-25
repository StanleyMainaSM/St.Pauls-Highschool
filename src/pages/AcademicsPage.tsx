import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { AcademicsSection } from '../components/AcademicsSection';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, BookCheck, Shield } from 'lucide-react';

export const AcademicsPage: React.FC = () => {
  return (
    <div>
      <PageBanner
        title="Academics & Senior School Pathways"
        subtitle="Empowering young men through rigorous academic curriculum, science experimentation, and personalized CBC pathway guidance in STEM, Social Sciences, and Arts & Sports."
        breadcrumbLabel="Academics"
      />

      {/* Main Academics Section */}
      <AcademicsSection />

      {/* Academic Excellence Callout */}
      <section className="py-16 bg-slate-900 text-white border-t border-sky-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 p-8 sm:p-12 rounded-3xl border border-sky-800/40 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-900/50 text-xs font-mono text-sky-300 uppercase">
                <Award className="w-3.5 h-3.5" />
                <span>Academic Standards & Mentorship</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Preparing Learners for Competitive Higher Education
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                From morning preps to evening revisions, our structured boarding routine ensures students develop the focus, time-management skills, and academic discipline necessary for national examinations and tertiary admissions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <Link
                to="/admissions"
                className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-sky-400 hover:bg-sky-300 text-slate-900 text-center transition-all shadow-md"
              >
                Join St. Paul's Kevote
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-center transition-all"
              >
                Contact Academic Office
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
