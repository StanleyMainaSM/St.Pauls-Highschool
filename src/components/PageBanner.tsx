import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PageBannerProps {
  title: string;
  subtitle: string;
  badge?: string;
  breadcrumbLabel: string;
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  badge = "St. Paul's High School – Kevote",
  breadcrumbLabel
}) => {
  return (
    <div className="relative pt-32 pb-14 lg:pt-36 lg:pb-18 bg-slate-950 text-white overflow-hidden border-b border-sky-900/30">
      {/* Background with subtle architectural grid & radial glow */}
      <div className="absolute inset-0 bg-radial from-sky-950/40 via-slate-950 to-slate-950 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#38bdf808_1px,transparent_1px),linear-gradient(to_bottom,#38bdf808_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 mb-4 font-medium">
          <Link to="/" className="inline-flex items-center gap-1 hover:text-sky-300 transition-colors">
            <Home className="w-3.5 h-3.5 text-sky-400" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-sky-400 font-semibold">{breadcrumbLabel}</span>
        </nav>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900/90 border border-sky-500/30 text-xs font-mono font-semibold tracking-wider text-sky-300 uppercase mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>{badge}</span>
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight uppercase leading-tight">
          {title}
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-3xl font-normal leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};
