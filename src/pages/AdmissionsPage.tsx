import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { AdmissionsSection } from '../components/AdmissionsSection';
import { Phone, Mail, HelpCircle, FileText } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

interface AdmissionsPageProps {
  onOpenEnquiryModal: () => void;
}

export const AdmissionsPage: React.FC<AdmissionsPageProps> = ({ onOpenEnquiryModal }) => {
  return (
    <div>
      <PageBanner
        title="Admissions & Entry Requirements"
        subtitle="Official intake protocols for Form One and Senior School Grade 10 CBC pathways. Learn about Ministry of Education selection guidelines, essential personal requirements, and fee policies."
        breadcrumbLabel="Admissions"
      />

      {/* Main Admissions Section */}
      <AdmissionsSection onOpenEnquiryModal={onOpenEnquiryModal} />

      {/* Admissions Help & Support Hotline */}
      <section className="py-12 bg-sky-50 border-t border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-white border border-sky-200/80 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                <HelpCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Need Immediate Help With Admissions?</h4>
                <p className="text-xs text-slate-600">Our school secretariat is available during weekday working hours (8:00 AM – 5:00 PM).</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${schoolInfo.phoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-white transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>Call Admissions</span>
              </a>
              <button
                onClick={onOpenEnquiryModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-sky-500 hover:bg-sky-400 text-white transition-all"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Submit Enquiry</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
