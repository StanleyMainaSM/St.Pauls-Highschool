import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { NewsSection } from '../components/NewsSection';
import { Link } from 'react-router-dom';
import { Bell, ArrowRight } from 'lucide-react';

export const NewsPage: React.FC = () => {
  return (
    <div>
      <PageBanner
        title="News, Term Dates & Announcements"
        subtitle="Stay current with official notices from the school administration, academic term schedules, co-curricular highlights, and community updates."
        breadcrumbLabel="News & Events"
      />

      {/* Main News Section */}
      <NewsSection />

      {/* Notice Board Banner */}
      <section className="py-12 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                <Bell className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-900">Are You a Parent or Guardian?</h4>
                <p className="text-xs text-slate-600">
                  Ensure your contact information is registered with the school secretariat to receive official SMS broadcasts regarding term dates and academic reports.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-white transition-all shrink-0 flex items-center gap-1.5"
            >
              <span>Contact Secretariat</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
