import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, ChevronRight } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';
import { SchoolLogo } from './SchoolLogo';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenAdmissionsModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenAdmissionsModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'academics', label: 'Academics' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'campus', label: 'Campus' },
    { id: 'school-life', label: 'School Life' },
    { id: 'news', label: 'News & Events' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'alumni', label: 'Alumni' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className={`bg-slate-950 text-slate-300 text-xs border-b border-slate-800 transition-all duration-300 ${isScrolled ? 'py-1 hidden sm:block' : 'py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <a
              href={`tel:${schoolInfo.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-sky-300 transition-colors py-0.5 focus-visible:outline-sky-400"
              aria-label={`Call ${schoolInfo.name} at ${schoolInfo.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{schoolInfo.phone}</span>
            </a>
            <a
              href={`mailto:${schoolInfo.email}`}
              className="flex items-center gap-1.5 hover:text-sky-300 transition-colors py-0.5 focus-visible:outline-sky-400"
              aria-label={`Email ${schoolInfo.name} at ${schoolInfo.email}`}
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span className="hidden md:inline">{schoolInfo.email}</span>
              <span className="md:hidden">Email Us</span>
            </a>
            <div className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>Kevote, Embu County, Kenya</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-semibold tracking-wider text-amber-400 uppercase hidden sm:inline">
              Motto: {schoolInfo.motto}
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="text-[11px] text-sky-200">
              Boys' Extra-County Senior School
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-sky-900/30 py-2.5'
            : 'bg-slate-900/90 backdrop-blur-sm border-b border-slate-800/80 py-3.5'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-3 text-left focus-visible:outline-sky-400 rounded-lg p-1 -ml-1 transition-transform hover:opacity-95"
            aria-label="St. Paul's High School Kevote Home"
          >
            <SchoolLogo size="md" lightVariant />
            <div className="flex flex-col">
              <span className="font-display font-bold text-white text-base sm:text-lg tracking-tight uppercase leading-none">
                St. Paul's High School
              </span>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
                  Kevote · Embu
                </span>
                <span className="text-slate-500 text-[10px]">·</span>
                <span className="text-[10px] font-medium tracking-wide text-amber-300 italic hidden sm:inline">
                  "Jishinde Ushinde"
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-1.5 text-xs font-semibold tracking-wide uppercase transition-all rounded-md relative ${
                    isActive
                      ? 'text-sky-300 font-bold bg-sky-950/60'
                      : 'text-slate-200 hover:text-white hover:bg-slate-800/50'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-sky-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenAdmissionsModal}
              className="px-4 py-2 text-xs font-bold tracking-wider uppercase text-slate-900 bg-gradient-to-r from-sky-400 to-sky-300 hover:from-sky-300 hover:to-sky-200 rounded-lg shadow-sm shadow-sky-500/20 transition-all hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 active:scale-95"
            >
              Admissions 2026
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenAdmissionsModal}
              className="sm:hidden px-2.5 py-1.5 text-[11px] font-bold uppercase text-slate-900 bg-sky-400 rounded-md"
            >
              Apply
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-400"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/98 border-b border-sky-900/40 backdrop-blur-xl shadow-2xl transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
            <div className="pb-3 mb-2 border-b border-slate-800">
              <p className="text-xs font-mono text-sky-400 uppercase tracking-wider">
                St. Paul's High School – Kevote
              </p>
              <p className="text-xs text-amber-300 italic">
                Motto: "Jishinde Ushinde"
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold rounded-lg text-left transition-colors ${
                      isActive
                        ? 'bg-sky-900/60 text-sky-300 border border-sky-700/50'
                        : 'text-slate-200 hover:bg-slate-850 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmissionsModal();
                }}
                className="w-full py-3 text-center text-sm font-bold uppercase tracking-wider text-slate-900 bg-sky-400 hover:bg-sky-300 rounded-lg shadow-md"
              >
                Join St. Paul's Kevote (Admissions)
              </button>

              <div className="flex justify-between items-center pt-2 text-xs text-slate-400 px-1">
                <a href={`tel:${schoolInfo.phoneRaw}`} className="text-sky-300 underline">
                  Call: {schoolInfo.phone}
                </a>
                <span>Embu County</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
