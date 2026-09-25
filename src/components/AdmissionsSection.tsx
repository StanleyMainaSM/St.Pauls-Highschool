import React, { useState } from 'react';
import { CheckSquare, Download, AlertCircle, FileCheck, Phone, Mail, HelpCircle, FileText, ArrowRight } from 'lucide-react';
import { admissionsGuide, schoolInfo } from '../data/schoolData';

interface AdmissionsSectionProps {
  onOpenEnquiryModal: () => void;
}

export const AdmissionsSection: React.FC<AdmissionsSectionProps> = ({ onOpenEnquiryModal }) => {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const handleDownload = (docTitle: string) => {
    setDownloadNotice(`Official copy requested: "${docTitle}". Please contact the school admissions office or download the verified packet during official reporting.`);
    setTimeout(() => {
      setDownloadNotice(null);
    }, 6000);
  };

  return (
    <section id="admissions" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-sky-700 bg-sky-50 px-3 py-1 rounded border border-sky-200">
              <FileCheck className="w-3.5 h-3.5 text-sky-700" />
              <span>Enrollment & Placement</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight">
              Join St. Paul's Kevote
            </h2>
            <p className="text-base text-slate-600">
              Admissions guidelines for Grade 10 Senior School entrants, Form 1 selections, and prospective transfer learners.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenEnquiryModal}
              className="px-6 py-3.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <span>Admission Enquiries</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Download notification toast if triggered */}
        {downloadNotice && (
          <div className="mb-6 p-4 rounded-xl bg-sky-50 border border-sky-200 text-xs text-sky-900 flex items-center gap-3 animate-in fade-in">
            <FileText className="w-4 h-4 text-sky-600 shrink-0" />
            <span className="font-medium">{downloadNotice}</span>
          </div>
        )}

        {/* Admissions Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Requirements & Process (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Overview Card */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4">
              <h3 className="font-display font-bold text-xl text-slate-900">
                Official Placement & Entry Criteria
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {admissionsGuide.overview}
              </p>

              {/* Requirements Checklist */}
              <div className="pt-4 border-t border-slate-200/80 space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 block">
                  Required Admission Documents:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {admissionsGuide.requirements.map((req, rIdx) => (
                    <div
                      key={rIdx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200 text-xs text-slate-700"
                    >
                      <CheckSquare className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Reporting Information */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
              <h3 className="font-display font-bold text-xl text-slate-900">
                Reporting & Boarding Guidelines
              </h3>
              <div className="space-y-2 text-sm text-slate-600">
                {admissionsGuide.reportingInstructions.map((instruction, iIdx) => (
                  <div key={iIdx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-2 shrink-0" />
                    <span>{instruction}</span>
                  </div>
                ))}
              </div>

              {/* Fees Structure Information Note (Strictly no fake numbers) */}
              <div className="mt-4 p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 space-y-1">
                <div className="flex items-center gap-2 font-bold text-amber-900">
                  <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Official Fees Structure Policy</span>
                </div>
                <p className="leading-relaxed">
                  {admissionsGuide.feePolicyNotice} No unauthorized fees are charged. Parents and guardians receive official itemized fee bank payment slips accompanying their admission letters.
                </p>
              </div>
            </div>

            {/* Downloadable Documents Area */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Official Admission Downloads
                  </h3>
                  <p className="text-xs text-slate-500">
                    Admission forms and boarding checklists for incoming students.
                  </p>
                </div>
                <span className="text-[11px] font-mono text-sky-700 bg-sky-100/80 px-2 py-0.5 rounded">
                  Official PDF Templates
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {admissionsGuide.downloadableDocuments.map((doc, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-4 rounded-xl bg-white border border-slate-200 flex flex-col justify-between space-y-3 hover:border-sky-300 transition-colors"
                  >
                    <div className="space-y-1">
                      <FileText className="w-6 h-6 text-sky-600" />
                      <h4 className="font-display font-bold text-xs text-slate-900 leading-tight">
                        {doc.title}
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        {doc.size}
                      </p>
                    </div>

                    <button
                      onClick={() => handleDownload(doc.title)}
                      className="w-full py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 text-sky-300" />
                      <span>Request Form</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Admission Enquiry & Contacts (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Direct Contact Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-7 border border-sky-900/60 shadow-xl space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-mono text-sky-400 font-semibold uppercase tracking-wider">
                  Admissions Office
                </span>
                <h4 className="font-display font-bold text-xl text-white">
                  Speak to Admissions
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Have questions about placement, boarding vacancies, or Grade 10 pathways? Reach out directly to our administration.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={`tel:${schoolInfo.phoneRaw}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-sky-400 text-xs transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 text-sky-400" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                      Call Admissions Desk
                    </span>
                    <span className="font-bold text-white text-sm">
                      {schoolInfo.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${schoolInfo.email}?subject=Admission%20Enquiry%20-%20St.%20Paul's%20Kevote`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/90 border border-slate-700 hover:border-sky-400 text-xs transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-sky-400" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                      Email Admissions
                    </span>
                    <span className="font-bold text-white text-xs truncate block">
                      {schoolInfo.email}
                    </span>
                  </div>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenEnquiryModal}
                  className="w-full py-3 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  Send Online Enquiry
                </button>
              </div>

              <div className="text-[11px] text-slate-400 text-center font-mono">
                Office Hours: Mon – Fri · 8:00 AM – 5:00 PM
              </div>
            </div>

            {/* Quick FAQ / Guidance box */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase">
                <HelpCircle className="w-4 h-4 text-sky-600" />
                <span>Admission FAQs</span>
              </div>
              <div className="space-y-2 text-xs text-slate-600">
                <p>
                  <strong className="text-slate-900 block">Who is eligible?</strong>
                  Boys who have completed Grade 9 / KCPE and meet the official Ministry cut-off marks for Extra-County schools.
                </p>
                <p className="pt-2 border-t border-slate-200/60">
                  <strong className="text-slate-900 block">Can parents visit before reporting?</strong>
                  Yes, during official school working hours by appointment at our Kevote administration offices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
