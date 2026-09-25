import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { AboutSection } from '../components/AboutSection';
import { PrincipalMessage } from '../components/PrincipalMessage';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, FileCheck } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div>
      <PageBanner
        title="About St. Paul's High School – Kevote"
        subtitle="An established public boys' boarding secondary and senior school in Embu County, sponsored by the Catholic Diocese of Embu and governed by a dedicated Board of Management."
        breadcrumbLabel="About"
      />

      {/* Main About Section */}
      <AboutSection />

      {/* Principal's Message & Vision */}
      <PrincipalMessage />

      {/* Why Choose Us & The Four Pillars */}
      <WhyChooseUs />

      {/* Next Steps CTA */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900">
                  Academic Curriculum & Senior School
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Discover our departments, CBC Grade 10 pathways in STEM, Social Sciences, and Arts & Sports, and our dedicated laboratory infrastructure.
                </p>
              </div>
              <Link
                to="/academics"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 hover:text-sky-900 pt-2"
              >
                <span>View Academic Pathways</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <FileCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-display font-bold text-slate-900">
                  Join St. Paul's Kevote
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Learn about entry requirements, Ministry guidelines, essential student boarding items, and transparent fee policies for Form 1 and Senior School.
                </p>
              </div>
              <Link
                to="/admissions"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-900 pt-2"
              >
                <span>View Admission Guidelines</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
