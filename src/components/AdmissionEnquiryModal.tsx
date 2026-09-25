import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, FileText } from 'lucide-react';
import { schoolInfo } from '../data/schoolData';

interface AdmissionEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionEnquiryModal: React.FC<AdmissionEnquiryModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phone: '',
    email: '',
    targetGrade: 'Grade 10 (Senior School)',
    intendedPathway: 'STEM (Pure & Applied Sciences)',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 relative text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4">
          <div className="border-b border-slate-100 pb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-700">
              St. Paul's Kevote Admissions
            </span>
            <h3 className="text-2xl font-display font-bold text-slate-900 mt-1">
              Admission Enquiry Desk
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Submit your enquiry directly to the school admissions office for placement and intake guidance.
            </p>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-display font-bold text-xl text-slate-900">
                Enquiry Registered Successfully
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.parentName}</strong>. Our admissions officer will review your enquiry for <strong className="text-slate-900">{formData.studentName}</strong> and contact you via phone or email shortly.
              </p>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-1">
                <span className="font-bold text-slate-900 block">
                  Urgent Assistance?
                </span>
                <p>Call the school administration desk directly:</p>
                <a href={`tel:${schoolInfo.phoneRaw}`} className="font-mono font-bold text-sky-700 text-sm">
                  {schoolInfo.phone}
                </a>
              </div>

              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-lg bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Parent / Guardian Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mary Wanjiku"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Brian Mwangi"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Parent Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0722 000 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Parent Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. parent@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Target Class / Intake
                  </label>
                  <select
                    value={formData.targetGrade}
                    onChange={(e) => setFormData({ ...formData, targetGrade: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <option value="Grade 10 (Senior School)">Grade 10 (Senior School)</option>
                    <option value="Grade 11 (Senior School Transfer)">Grade 11 (Senior School Transfer)</option>
                    <option value="Form 1 (8-4-4/Secondary)">Form 1 / General Secondary</option>
                    <option value="Form 2/3 Transfer">Form 2 / Form 3 Transfer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-1">
                    Intended Academic Pathway
                  </label>
                  <select
                    value={formData.intendedPathway}
                    onChange={(e) => setFormData({ ...formData, intendedPathway: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <option value="STEM (Pure & Applied Sciences)">STEM (Sciences & Mathematics)</option>
                    <option value="Social Sciences (Humanities & Business)">Social Sciences (Humanities & Business)</option>
                    <option value="Arts & Sports Science">Arts & Sports Science</option>
                    <option value="Undecided / Needs Guidance">Undecided / Needs Academic Guidance</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-semibold mb-1">
                  Additional Notes or Questions
                </label>
                <textarea
                  rows={3}
                  placeholder="Mention any specific queries regarding boarding, NEMIS selection, or previous school performance..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <span>Submit Admission Enquiry</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-slate-400" />
                <span>Admission is subject to Ministry of Education guidelines and school capacity.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
