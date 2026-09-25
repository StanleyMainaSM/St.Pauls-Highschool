import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { CampusExperience } from '../components/CampusExperience';
import { SchoolLifeSection } from '../components/SchoolLifeSection';
import { Link } from 'react-router-dom';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';

export const SchoolLifePage: React.FC = () => {
  return (
    <div>
      <PageBanner
        title="School Life & Boarding Experience"
        subtitle="A vibrant, supportive brotherhood where students develop lifelong friendships, moral discipline, sporting prowess, and co-curricular leadership skills."
        breadcrumbLabel="School Life"
      />

      {/* Campus Facilities Experience */}
      <CampusExperience />

      {/* School Life & Boarding Section */}
      <SchoolLifeSection />

      {/* Photo Gallery Callout */}
      <section className="py-16 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-950 border border-sky-800/40 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 uppercase tracking-wider">
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Visual Tour</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                View Photos of Student Activities & Campus Grounds
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Browse our verified photo gallery showcasing academic activities, sports competitions, dining hall routines, and campus architecture.
              </p>
            </div>
            <Link
              to="/gallery"
              className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-sky-400 hover:bg-sky-300 text-slate-900 transition-all shadow-md shrink-0 flex items-center gap-2"
            >
              <span>Explore Photo Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
