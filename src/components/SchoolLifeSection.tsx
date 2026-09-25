import React, { useState } from 'react';
import { Clock, Trophy, Users, Shield, Music, Compass, Utensils } from 'lucide-react';
import { dailyRoutine } from '../data/schoolData';
import { AuthenticImage } from './AuthenticImage';
import { schoolAssets } from '../data/schoolAssets';

export const SchoolLifeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'boarding' | 'routine' | 'clubs' | 'sports'>('boarding');

  const clubsList = [
    { name: "Scouts Association", desc: "Building outdoor survival, civic discipline, and community service.", icon: Compass },
    { name: "St. John Ambulance", desc: "First aid readiness, emergency response, and community care training.", icon: Shield },
    { name: "Catholic Action & Christian Union", desc: "Spiritual fellowship, scripture study, and moral mentorship.", icon: Users },
    { name: "Science & Innovation Club", desc: "Robotics experimentation, science fair projects, and environmental science.", icon: Compass },
    { name: "Music, Drama & Cultural Society", desc: "Performing at Kenya National Drama and Music Festivals.", icon: Music },
    { name: "Debate & Public Speaking", desc: "Fostering articulate oratory, critical thinking, and inter-school debates.", icon: Users },
  ];

  return (
    <section id="school-life" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-sky-700 bg-sky-100/60 px-3 py-1 rounded border border-sky-300">
            <span>Student Experience & Culture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight">
            Life as a St. Paul's Kevote Gentleman
          </h2>
          <p className="text-base text-slate-600">
            A vibrant, disciplined boarding environment where academic rigor, athletic passion, and Christian character coalesce.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <button
            onClick={() => setActiveTab('boarding')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shrink-0 ${
              activeTab === 'boarding'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Boarding & Welfare
          </button>

          <button
            onClick={() => setActiveTab('routine')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shrink-0 ${
              activeTab === 'routine'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Daily Routine
          </button>

          <button
            onClick={() => setActiveTab('clubs')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shrink-0 ${
              activeTab === 'clubs'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Clubs & Societies
          </button>

          <button
            onClick={() => setActiveTab('sports')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shrink-0 ${
              activeTab === 'sports'
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Sports & Games
          </button>
        </div>

        {/* Tab 1: Boarding & Welfare */}
        {activeTab === 'boarding' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm animate-in fade-in">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider">
                Full Boys' Boarding Setup
              </span>
              <h3 className="text-2xl font-display font-bold text-slate-900">
                A Home of Brotherhood and Self-Reliance
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Boarding life at Kevote builds lifelong brotherhood and mutual respect. Students reside in organized houses under the pastoral supervision of dedicated resident housemasters, ensuring personal welfare, safety, and hygiene.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <Utensils className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="text-slate-900 block font-bold">
                      Daily On-Campus Bakery Bread
                    </strong>
                    <span className="text-slate-600">
                      Our in-house bakery ensures learners receive fresh, hot, and hygienic bread every single day alongside balanced nutritious meals.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <Shield className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="text-slate-900 block font-bold">
                      Supervised Health & Pastoral Care
                    </strong>
                    <span className="text-slate-600">
                      Access to first-aid medical care, school chaplaincy guidance, and structured study prep.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <AuthenticImage
                src={schoolAssets.dormitory.path}
                alt="St. Paul's Kevote Dormitory Block"
                label={schoolAssets.dormitory.placeholderText}
                category="Boarding"
                aspectRatio="video"
                className="w-full rounded-xl shadow-md"
              />
            </div>
          </div>
        )}

        {/* Tab 2: Daily Routine */}
        {activeTab === 'routine' && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm animate-in fade-in space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
              <div>
                <h3 className="text-xl font-display font-bold text-slate-900">
                  Structured Daily Boarding Schedule
                </h3>
                <p className="text-xs text-slate-500">
                  A disciplined timetable balancing academic study, spiritual devotion, nutrition, and recreation.
                </p>
              </div>
              <span className="text-xs font-mono text-sky-700 bg-sky-50 px-3 py-1 rounded border border-sky-200 self-start sm:self-auto">
                Monday – Friday Routine
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {dailyRoutine.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70"
                >
                  <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-sky-700 bg-sky-100/60 px-2 py-1 rounded shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.time}</span>
                  </div>
                  <span className="text-xs text-slate-800 font-medium pt-0.5">
                    {item.activity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Clubs & Societies */}
        {activeTab === 'clubs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in">
            {clubsList.map((club, idx) => {
              const Icon = club.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4 hover:border-sky-300 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-base text-slate-900">
                      {club.name}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {club.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-sky-700 uppercase">
                    Active Student Society
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab 4: Sports & Games */}
        {activeTab === 'sports' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm animate-in fade-in">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-bold text-sky-700 uppercase tracking-wider">
                Athletic Spirit & Discipline
              </span>
              <h3 className="text-2xl font-display font-bold text-slate-900">
                Competitive Sports & Physical Fitness
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                St. Paul's Kevote maintains a proud tradition of athletic competition. Boys participate in daily afternoon games, inter-house championships, and Kenya Secondary Schools Sports Association (KSSSA) fixtures.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                {['Rugby 15s & 7s', 'Football (Soccer)', 'Athletics & Track', 'Volleyball', 'Handball', 'Table Tennis'].map((sport, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 text-center"
                  >
                    {sport}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <AuthenticImage
                src={schoolAssets.sports.path}
                alt="St. Paul's Kevote Sports Ground"
                label={schoolAssets.sports.placeholderText}
                category="School Sports"
                aspectRatio="video"
                className="w-full rounded-xl shadow-md"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
