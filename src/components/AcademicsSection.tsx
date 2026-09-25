import React, { useState } from 'react';
import { BookOpen, Compass, Layers, CheckCircle2, FlaskConical, Calculator, Languages, Globe, Wrench, FileText } from 'lucide-react';
import { academicDepartments, seniorSchoolPathways } from '../data/schoolData';

export const AcademicsSection: React.FC = () => {
  const [selectedDeptIndex, setSelectedDeptIndex] = useState(0);

  const getDeptIcon = (name: string) => {
    if (name.includes('Science')) return <FlaskConical className="w-5 h-5" />;
    if (name.includes('Math')) return <Calculator className="w-5 h-5" />;
    if (name.includes('Language')) return <Languages className="w-5 h-5" />;
    if (name.includes('Humanities')) return <Globe className="w-5 h-5" />;
    return <Wrench className="w-5 h-5" />;
  };

  return (
    <section id="academics" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-sky-700 bg-sky-100/60 px-3 py-1 rounded border border-sky-300">
            <Compass className="w-3.5 h-3.5 text-sky-700" />
            <span>Academic Excellence & Curriculum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight">
            Comprehensive Senior School & Secondary Academics
          </h2>
          <p className="text-base text-slate-600">
            St. Paul's High School – Kevote provides structured academic programs preparing students for national examinations, tertiary entrance, and practical leadership under Kenya's Competency Based Curriculum (CBC).
          </p>
        </div>

        {/* Senior School CBC Transition Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-sky-200/90 shadow-sm mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="space-y-1">
              <span className="text-xs font-mono text-sky-700 font-bold uppercase tracking-wider">
                Kenya Competency Based Curriculum (CBC)
              </span>
              <h3 className="text-2xl font-display font-bold text-slate-900">
                Senior School Specialization (Grades 10, 11 & 12)
              </h3>
              <p className="text-sm text-slate-600 max-w-2xl">
                Learners at Kevote pursue curated academic tracks aligned with their abilities, aspirations, and career goals across the Ministry-approved pathways.
              </p>
            </div>

            <div className="bg-sky-50 px-4 py-2.5 rounded-lg border border-sky-100 text-xs text-sky-900 font-medium shrink-0">
              Approved Senior School Center
            </div>
          </div>

          {/* Senior School Pathways Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {seniorSchoolPathways.map((pathway, idx) => (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-xl p-5 border border-slate-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-sm">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-slate-900">
                      {pathway.name}
                    </h4>
                    <p className="text-xs text-sky-700 font-medium">
                      {pathway.subtitle}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                      Curriculum Tracks:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {pathway.tracks.map((track, tIdx) => (
                        <li key={tIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{track}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/70 text-[11px] text-slate-500 italic">
                  Ideal for: {pathway.idealFor}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Departments Split Tabs */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="mb-6">
            <h3 className="text-xl font-display font-bold text-slate-900">
              Academic Departments & Subject Faculties
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Select a faculty to view subjects and instructional focus.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Department Selector */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {academicDepartments.map((dept, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedDeptIndex(idx)}
                  className={`flex items-center justify-between p-3.5 rounded-xl text-left text-xs font-semibold uppercase tracking-wide transition-all ${
                    selectedDeptIndex === idx
                      ? 'bg-slate-900 text-white shadow-md'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={selectedDeptIndex === idx ? 'text-sky-300' : 'text-sky-600'}>
                      {getDeptIcon(dept.name)}
                    </span>
                    <span>{dept.name}</span>
                  </div>
                  <span className="text-[10px] opacity-70">
                    {dept.subjects.length} Subjects
                  </span>
                </button>
              ))}
            </div>

            {/* Selected Department Details */}
            <div className="lg:col-span-8 bg-slate-50 rounded-xl p-6 border border-slate-200/80 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="text-sky-700">
                      {getDeptIcon(academicDepartments[selectedDeptIndex].name)}
                    </div>
                    <h4 className="font-display font-bold text-xl text-slate-900">
                      {academicDepartments[selectedDeptIndex].name}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-slate-500 uppercase">
                    St. Paul's Kevote
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {academicDepartments[selectedDeptIndex].description}
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block font-semibold">
                    Core Subject Offerings:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {academicDepartments[selectedDeptIndex].subjects.map((sub, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-xs font-semibold text-slate-800 shadow-2xs"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Editorial Placeholder per prompt requirement */}
              <div className="mt-8 pt-4 border-t border-slate-200 flex items-center gap-2 text-[11px] font-mono text-slate-500">
                <FileText className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>
                  [Curriculum details and subject combinations updated per Ministry of Education & KNEC guidelines]
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Academic Resources Highlights */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <span className="text-xs font-mono font-bold text-sky-700 uppercase">
              Practical Science Labs
            </span>
            <h5 className="font-display font-bold text-base text-slate-900">
              Biology, Chemistry & Physics Labs
            </h5>
            <p className="text-xs text-slate-600 leading-relaxed">
              Equipped for hands-on scientific experimentation and practical examinations per KNEC standards.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <span className="text-xs font-mono font-bold text-sky-700 uppercase">
              ICT Center & Library
            </span>
            <h5 className="font-display font-bold text-base text-slate-900">
              Digital Research & Reading
            </h5>
            <p className="text-xs text-slate-600 leading-relaxed">
              Computer laboratory and reference library supporting digital literacy, revision papers, and independent research.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2">
            <span className="text-xs font-mono font-bold text-sky-700 uppercase">
              Supervised Academic Preps
            </span>
            <h5 className="font-display font-bold text-base text-slate-900">
              Morning & Evening Study Hours
            </h5>
            <p className="text-xs text-slate-600 leading-relaxed">
              Disciplined prep hours supervised by resident masters on duty to instill rigorous personal study habits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
