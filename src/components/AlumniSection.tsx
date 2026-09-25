import React, { useState } from 'react';
import { Users, GraduationCap, HeartHandshake, Mail, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

export const AlumniSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    completionYear: '',
    occupation: '',
    email: '',
    phone: '',
    chapterCity: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="alumni" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-sky-700 bg-sky-50 px-3 py-1 rounded border border-sky-200">
            <Users className="w-3.5 h-3.5 text-sky-700" />
            <span>Lifelong Brotherhood</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight">
            St. Paul's Kevote Alumni
          </h2>
          <p className="text-base text-slate-600">
            Connecting generations of Kevote Old Boys across Kenya and globally to mentor learners, share career experiences, and support school development.
          </p>
        </div>

        {/* 2-Column Split: Association Pillars & Alumni Connect Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Association Initiatives */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
              <span className="text-xs font-mono text-sky-700 font-bold uppercase tracking-wider">
                Old Boys Association
              </span>
              <h3 className="text-2xl font-display font-bold text-slate-900">
                Giving Back to Our Alma Mater
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Generations of alumni who passed through the gates of St. Paul's High School – Kevote continue to play an instrumental role in shaping the aspirations of current students through mentorship, professional networking, and institutional advancement.
              </p>

              <div className="space-y-3 pt-3">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                  <GraduationCap className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wide text-slate-900">
                      Candidate Mentorship & Career Talks
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Alumni professionals conduct termly seminars on engineering, medicine, public service, IT, and entrepreneurship.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                  <HeartHandshake className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wide text-slate-900">
                      Reunions & Annual Old Boys Day
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Class chapters organize campus reunions in Kevote to reconnect and collaborate with the Board of Management.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact for Alumni Desk */}
            <div className="p-5 rounded-2xl bg-sky-950 text-white border border-sky-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-sky-300 uppercase block">
                  Alumni Relations Desk
                </span>
                <span className="font-display font-bold text-base text-white">
                  Coordinate with Administration
                </span>
                <span className="text-xs text-slate-300 block">
                  {schoolInfo.email} · {schoolInfo.phone}
                </span>
              </div>
              <a
                href={`mailto:${schoolInfo.email}?subject=Alumni%20Network%20St.%20Paul's%20Kevote`}
                className="px-4 py-2 bg-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-sky-300 transition-colors"
              >
                Email Office
              </a>
            </div>
          </div>

          {/* Right Column: Alumni Registry Form */}
          <div className="lg:col-span-5 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <div className="mb-5 space-y-1">
              <span className="text-xs font-mono text-sky-700 font-bold uppercase tracking-wider">
                Old Boys Directory
              </span>
              <h3 className="font-display font-bold text-xl text-slate-900">
                Register with Kevote Alumni
              </h3>
              <p className="text-xs text-slate-600">
                Keep in touch for news, events, and mentorship opportunities.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-display font-bold text-slate-900 text-base">
                  Thank You, Old Boy!
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your details have been received by the alumni coordination team. Welcome back home to Kevote. Jishinde Ushinde!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-sky-700 underline"
                >
                  Submit another entry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Mwangi"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Year Completed *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 2012"
                      value={formData.completionYear}
                      onChange={(e) => setFormData({ ...formData, completionYear: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-semibold mb-1">
                      Current City / County
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Nairobi / Embu"
                      value={formData.chapterCity}
                      onChange={(e) => setFormData({ ...formData, chapterCity: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. alumnus@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 07XX XXX XXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Current Profession / Industry
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Civil Engineer / Accountant"
                    value={formData.occupation}
                    onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2"
                  >
                    <span>Register With Alumni Association</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
