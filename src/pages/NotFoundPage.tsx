import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div>
      <PageBanner
        title="Page Not Found (404)"
        subtitle="The page you are looking for does not exist or may have been relocated."
        breadcrumbLabel="404"
      />

      <section className="py-24 bg-white text-center">
        <div className="max-w-md mx-auto px-4 space-y-6">
          <div className="text-6xl font-display font-extrabold text-sky-800">
            404
          </div>
          <h2 className="text-2xl font-bold text-slate-900">
            Page Not Found
          </h2>
          <p className="text-slate-600 text-sm">
            Please use the navigation menu above or return to the St. Paul's High School – Kevote homepage.
          </p>
          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              <Home className="w-4 h-4 text-sky-400" />
              <span>Return to Homepage</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
