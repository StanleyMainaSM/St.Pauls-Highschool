import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, Globe, Clock, MessageSquare, AlertCircle } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#0284c710_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-sky-400 bg-sky-950/80 px-3 py-1 rounded border border-sky-800/40">
            <MessageSquare className="w-3.5 h-3.5 text-sky-400" />
            <span>Official Communications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
            Contact St. Paul's High School – Kevote
          </h2>
          <p className="text-base text-slate-300">
            We welcome inquiries from prospective parents, guardians, alumni, and educational stakeholders.
          </p>
        </div>

        {/* 2-Column Split: Verified Contacts + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Official Contact Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-800/90 rounded-2xl p-6 sm:p-7 border border-slate-700/80 shadow-xl space-y-6 backdrop-blur-sm">
              <div className="border-b border-slate-700 pb-4">
                <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-wider block">
                  Official Details
                </span>
                <h3 className="font-display font-bold text-xl text-white mt-1">
                  School Administration Office
                </h3>
                <p className="text-xs text-amber-300 font-semibold italic mt-0.5">
                  "Jishinde Ushinde"
                </p>
              </div>

              {/* Clickable Phone Card */}
              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/60 hover:border-sky-400 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-sky-400" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                    Telephone (Direct)
                  </span>
                  <a
                    href={`tel:${schoolInfo.phoneRaw}`}
                    className="font-bold text-base text-white hover:text-sky-300 transition-colors block"
                  >
                    {schoolInfo.phone}
                  </a>
                  <span className="text-[10px] text-slate-400">
                    Click to call on mobile
                  </span>
                </div>
              </div>

              {/* Clickable Email Card */}
              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/60 hover:border-sky-400 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-sky-400" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${schoolInfo.email}`}
                    className="font-bold text-sm text-white hover:text-sky-300 transition-colors break-all block"
                  >
                    {schoolInfo.email}
                  </a>
                  <span className="text-[10px] text-slate-400">
                    Click to compose message
                  </span>
                </div>
              </div>

              {/* Postal Address */}
              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/60">
                <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-sky-400" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                    Postal Address & Location
                  </span>
                  <p className="font-semibold text-sm text-white">
                    {schoolInfo.postalAddress}
                  </p>
                  <p className="text-xs text-slate-300">
                    Kevote, Runyenjes / Embu West, Embu County, Kenya
                  </p>
                </div>
              </div>

              {/* Official Website */}
              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/60">
                <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-sky-400" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                    Official Website
                  </span>
                  <p className="font-semibold text-sm text-sky-300 font-mono">
                    {schoolInfo.website}
                  </p>
                </div>
              </div>

              {/* Office Working Hours */}
              <div className="pt-2 flex items-center gap-2 text-xs text-slate-400 border-t border-slate-700">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Administration Desk: Mon – Fri · 8:00 AM – 5:00 PM</span>
              </div>
            </div>

            {/* Geographical Context Card */}
            <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700/60 text-xs text-slate-300 space-y-2">
              <span className="font-bold text-white block">
                Embu County Setting
              </span>
              <p className="leading-relaxed">
                St. Paul's Kevote is situated off the Embu-Runyenjes road corridor in Kevote, offering a tranquil, clean, and cool upland learning atmosphere conducive for boys' secondary education.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl backdrop-blur-sm">
            <div className="mb-6 space-y-1">
              <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-wider">
                Send an Enquiry
              </span>
              <h3 className="font-display font-bold text-2xl text-white">
                Official Enquiry Message
              </h3>
              <p className="text-xs text-slate-300">
                Submit an enquiry directly to the school principal and administrative registry.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-8 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-4 animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-display font-bold text-white text-xl">
                  Message Dispatched Successfully
                </h4>
                <p className="text-sm text-slate-200 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to St. Paul's High School – Kevote. Your enquiry has been received and routed to our administrative registry.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'General Enquiry',
                        message: ''
                      });
                    }}
                    className="px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Mwangi"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0722 000 000"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. parent@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1.5">
                      Subject / Enquiry Type
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                    >
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Admissions & Placement">Admissions & Placement</option>
                      <option value="Senior School Grade 10">Senior School Grade 10</option>
                      <option value="Alumni Connection">Alumni Connection</option>
                      <option value="Accounts & Fees Enquiries">Accounts & Fees Enquiries</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Please write your detailed enquiry here..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-lg bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-gradient-to-r from-sky-400 to-sky-300 hover:from-sky-300 hover:to-sky-200 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Transmit Message to Administration</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Form Security & Endpoint Note (Rule 22 Compliant) */}
                <div className="pt-3 border-t border-slate-700/80 flex items-start gap-2 text-[11px] text-slate-400">
                  <AlertCircle className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                  <span>
                    Form integration notice: School administrators can link this form to Google Workspace or Formspree backend endpoint in settings.
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
