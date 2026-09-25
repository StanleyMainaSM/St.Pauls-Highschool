import React from 'react';
import { Phone, Mail, MapPin, Globe, ArrowUp, Facebook } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';
import { SchoolLogo } from './SchoolLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Crest Column (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <SchoolLogo size="lg" lightVariant showText={false} />

            <div className="space-y-1">
              <h3 className="font-display font-bold text-lg text-white uppercase tracking-tight">
                St. Paul's High School – Kevote
              </h3>
              <p className="text-xs font-serif-quote italic text-amber-300">
                Motto: "{schoolInfo.motto}"
              </p>
              <p className="text-xs text-sky-400 font-semibold tracking-wider uppercase">
                {schoolInfo.category} · Embu County
              </p>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              An established public boys' boarding secondary and senior school dedicated to high academic discipline, Christian moral integrity, and leadership development.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:border-sky-500 transition-colors"
                aria-label="St. Paul's Kevote Facebook Community"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <span className="text-[11px] text-slate-500 font-mono">
                Official School Portal
              </span>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-slate-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Kevote' },
                { id: 'academics', label: 'Academics & Senior School' },
                { id: 'admissions', label: 'Admissions & Requirements' },
                { id: 'campus', label: 'Campus & Facilities' },
                { id: 'school-life', label: 'School Life & Boarding' },
                { id: 'news', label: 'News & Announcements' },
                { id: 'gallery', label: 'Photo Gallery' },
                { id: 'alumni', label: 'Alumni Network' },
                { id: 'contact', label: 'Contact Administration' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-slate-400 hover:text-sky-300 transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Contacts Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-slate-200">
              Official School Contacts
            </h4>
            
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-mono">
                    Administration Telephone
                  </span>
                  <a href={`tel:${schoolInfo.phoneRaw}`} className="text-white hover:text-sky-300 font-semibold">
                    {schoolInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-mono">
                    Official Email
                  </span>
                  <a href={`mailto:${schoolInfo.email}`} className="text-white hover:text-sky-300 font-semibold break-all">
                    {schoolInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-mono">
                    Postal Address & Location
                  </span>
                  <p className="text-white">
                    {schoolInfo.postalAddress}
                  </p>
                  <p className="text-slate-400">
                    Kevote, Runyenjes / Embu West Sub-County, Embu County, Kenya
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-mono">
                    Website
                  </span>
                  <span className="text-sky-300 font-mono">
                    {schoolInfo.website}
                  </span>
                </div>
              </div>
            </div>

            {/* Ministry & Sponsor Note */}
            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
              <p>
                <strong className="text-slate-300">Religious Sponsor:</strong> Catholic Diocese of Embu
              </p>
              <p>
                <strong className="text-slate-300">Ministry Accreditation:</strong> Ministry of Education, Kenya
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2026 St. Paul's High School – Kevote. All rights reserved. Motto: Jishinde Ushinde.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-sky-400 text-slate-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-sky-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
