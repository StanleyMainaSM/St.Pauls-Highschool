import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { AuthenticImage } from '../components/AuthenticImage';
import { schoolInfo, newsArticles, galleryList } from '../data/schoolData';
import { schoolAssets } from '../data/schoolAssets';
import { 
  ArrowRight, 
  GraduationCap, 
  ShieldCheck, 
  Users, 
  BookOpen, 
  Sparkles, 
  Calendar, 
  MapPin, 
  Phone, 
  Mail, 
  Award,
  ChevronRight,
  Flame,
  Bus,
  Building2,
  Utensils
} from 'lucide-react';

interface HomePageProps {
  onOpenAdmissionsModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenAdmissionsModal }) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero
        onExplore={() => navigate('/about')}
        onAdmissions={() => navigate('/admissions')}
        onContact={() => navigate('/contact')}
      />

      {/* 2. Welcome & Principal's Vision Spotlight */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Authentic Compound Image & Caption */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900">
                <AuthenticImage
                  src={schoolAssets.gate.path}
                  alt="St. Paul's High School Kevote Main Gate"
                  label={schoolAssets.gate.placeholderText}
                  category="Campus Entrance"
                  aspectRatio="video"
                />
              </div>

              <div className="bg-sky-50/70 p-4 rounded-xl border border-sky-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-sky-600 text-white flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase">Motto: {schoolInfo.motto}</h4>
                  <p className="text-[11px] text-slate-600">"Conquer Thyself to Conquer" — Rooted in Christian values & resilience.</p>
                </div>
              </div>
            </div>

            {/* Right: Welcome Message & Quote */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-sky-700 bg-sky-50 px-3 py-1 rounded border border-sky-200">
                <span>Welcome to Kevote</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                An Educational Sanctuary for Discipline & Leadership
              </h2>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                St. Paul's High School – Kevote is a premier public boys' boarding senior school nestled in the serene highlands of Embu County. Under the religious sponsorship of the Catholic Diocese of Embu, our school nurtures young men who excel in academics, moral fortitude, and national leadership.
              </p>

              {/* Quote Card from Chief Principal */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-sky-950 text-white shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 text-sky-500/10 font-serif text-8xl select-none">
                  “
                </div>
                <p className="text-sm sm:text-base font-serif-quote italic text-slate-200 relative z-10 leading-relaxed mb-4">
                  "Education at Kevote is an active partnership between student, faculty, and family. We challenge every boy to conquer complacency and reach the pinnacle of his God-given potential."
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-sky-800/50">
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">Mr. Simon Njagi</h4>
                    <p className="text-xs text-sky-300">Chief Principal, St. Paul's High School – Kevote</p>
                  </div>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-white transition-colors"
                  >
                    <span>Read Full Message</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/about"
                  className="px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-white transition-all shadow-sm"
                >
                  Discover Our Heritage
                </Link>
                <Link
                  to="/academics"
                  className="px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider bg-sky-50 hover:bg-sky-100 text-sky-800 border border-sky-200 transition-all"
                >
                  Explore Academics
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Four Core Pillars (Why Choose Us Preview) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-sky-700 bg-sky-100 px-3 py-1 rounded">
              Why Choose St. Paul's Kevote
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight">
              Holistic Formation Built on Four Timeless Pillars
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Providing boys with the structure, mentorship, and environment required to thrive in Kenya and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900">Academic Rigour</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Structured syllabi completion, intensive remedial instruction, and CBC Senior School pathways preparing learners for top university courses.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900">Character & Moral Tone</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Firm Catholic diocesan moral foundation nurturing discipline, punctuality, respect, and emotional maturity in every student.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900">Lifelong Brotherhood</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A shared boarding bond forging genuine camaraderie, teamwork, resilience, and an active Old Boys alumni support network.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-display font-bold text-slate-900">Holistic Co-Curriculars</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Competitive rugby, football, athletics tournaments, and active clubs including Scouts, St. John Ambulance, and science competitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Senior School CBC Pathways Spotlight */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-sky-950/60 to-slate-950 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-900/60 border border-sky-500/30 text-xs font-mono text-sky-300 uppercase">
                <span>CBC Senior School Framework</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-white leading-tight">
                Pioneering Kenya's Competency-Based Senior School Pathways
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                As Kenya transitions into Senior Secondary education, St. Paul's Kevote offers structured, laboratory-supported learning tracks designed to cultivate specialized competencies in Grade 10, 11, and 12 learners.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs">
                    STEM
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase">Pure & Applied Sciences Track</h4>
                    <p className="text-[11px] text-slate-400">Physics, Chemistry, Biology, Mathematics & ICT.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-xs">
                    SOC
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase">Social Sciences & Humanities Track</h4>
                    <p className="text-[11px] text-slate-400">History, Geography, Religious Studies & Languages.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                    ART
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase">Arts & Sports Science Track</h4>
                    <p className="text-[11px] text-slate-400">Athletics, Performing Arts & Leadership.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/academics"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider bg-sky-400 hover:bg-sky-300 text-slate-900 transition-all shadow-md"
                >
                  <span>Explore All Academic Pathways & Departments</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Academic Lab authentic preview */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-sky-800/40 bg-slate-950">
                <AuthenticImage
                  src={schoolAssets.laboratories.path}
                  alt="St. Paul's Kevote Science & Computer Laboratories"
                  label={schoolAssets.laboratories.placeholderText}
                  category="Science & ICT"
                  aspectRatio="video"
                />
              </div>

              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-sky-400" />
                  <span className="text-slate-300 font-medium">5 Academic Departments · Experienced Faculty</span>
                </div>
                <Link to="/academics" className="text-sky-400 hover:underline">
                  View Departments →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Campus Life & Unique Features (Bakery, Bus, Dormitories) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-sky-700 bg-sky-50 px-3 py-1 rounded border border-sky-200">
                Life at St. Paul's Kevote
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mt-2">
                A Fully Self-Contained Boarding Community
              </h2>
            </div>
            <Link
              to="/school-life"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 hover:text-sky-900"
            >
              <span>Explore All Facilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bus Baba Yao */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col group hover:shadow-md transition-shadow">
              <div className="aspect-[16/10] overflow-hidden bg-slate-900">
                <AuthenticImage
                  src={schoolAssets.bus.path}
                  alt="Official Baba Yao School Bus"
                  label={schoolAssets.bus.placeholderText}
                  category="Transport"
                  aspectRatio="video"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-sky-700 text-xs font-bold uppercase">
                    <Bus className="w-4 h-4" />
                    <span>School Transport</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">"Baba Yao" School Bus</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Reliable student transport for academic field trips, sports tournaments, music festivals, and provincial contests.
                  </p>
                </div>
                <Link to="/school-life" className="text-xs font-bold text-sky-600 group-hover:text-sky-800 flex items-center gap-1">
                  <span>Learn more</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* School Bakery */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col group hover:shadow-md transition-shadow">
              <div className="aspect-[16/10] overflow-hidden bg-slate-900">
                <AuthenticImage
                  src={schoolAssets.bakery.path}
                  alt="On-Campus School Bakery"
                  label={schoolAssets.bakery.placeholderText}
                  category="Facilities"
                  aspectRatio="video"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase">
                    <Utensils className="w-4 h-4" />
                    <span>Nutrition & Welfare</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">On-Campus School Bakery</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Fresh, hygienic bread baked on campus daily to fuel active minds and growing young men throughout the school term.
                  </p>
                </div>
                <Link to="/school-life" className="text-xs font-bold text-sky-600 group-hover:text-sky-800 flex items-center gap-1">
                  <span>Learn more</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Boarding Dormitories */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col group hover:shadow-md transition-shadow">
              <div className="aspect-[16/10] overflow-hidden bg-slate-900">
                <AuthenticImage
                  src={schoolAssets.dormitory.path}
                  alt="St. Paul's Kevote Dormitories"
                  label={schoolAssets.dormitory.placeholderText}
                  category="Boarding"
                  aspectRatio="video"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-indigo-700 text-xs font-bold uppercase">
                    <Building2 className="w-4 h-4" />
                    <span>Boarding Facilities</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Secure Boarding Houses</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Comfortable, well-supervised dormitories managed by resident housemasters ensuring safe, disciplined student welfare.
                  </p>
                </div>
                <Link to="/school-life" className="text-xs font-bold text-sky-600 group-hover:text-sky-800 flex items-center gap-1">
                  <span>Learn more</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Admissions 2026 CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-sky-900 via-slate-900 to-sky-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-sky-500/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-xs font-mono text-sky-300 uppercase">
                <Award className="w-3.5 h-3.5" />
                <span>Admissions 2026 Now Open</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
                Secure Your Son's Place in the Kevote Brotherhood
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We accept prospective learners for Form One intake and Senior School Grade 10 CBC pathways. Review official Ministry of Education admission criteria and essential student items.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
              <Link
                to="/admissions"
                className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-sky-400 hover:bg-sky-300 text-slate-900 text-center transition-all shadow-md"
              >
                View Requirements & Fees
              </Link>
              <button
                onClick={onOpenAdmissionsModal}
                className="px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 text-center transition-all"
              >
                Submit Online Enquiry
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Latest News & Announcements Teaser */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-sky-700 bg-sky-100 px-3 py-1 rounded">
                Stay Updated
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mt-2">
                Latest News & Campus Events
              </h2>
            </div>
            <Link
              to="/news"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 hover:text-sky-900"
            >
              <span>View All News & Events</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col group"
              >
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                      <span className="bg-sky-50 text-sky-700 font-semibold px-2 py-0.5 rounded">
                        {item.category}
                      </span>
                      <span>{item.date}</span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>

                  <Link
                    to="/news"
                    className="text-xs font-bold text-sky-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Full Notice</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Alumni & Community Connection Banner */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white flex flex-col lg:flex-row items-center justify-between gap-6 border border-slate-800">
            <div className="space-y-2 max-w-xl">
              <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest block">
                The Kevote Old Boys Brotherhood
              </span>
              <h3 className="text-2xl font-display font-bold">
                Are You an Alumnus of St. Paul's Kevote?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Reconnect with fellow Kevotians, mentor current candidates, and contribute to the enduring legacy of your alma mater.
              </p>
            </div>
            <Link
              to="/alumni"
              className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-slate-900 transition-all shrink-0"
            >
              Join the Alumni Network
            </Link>
          </div>
        </div>
      </section>

      {/* 9. Contact & Location Quick Summary */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase text-slate-400 font-mono">Administration Call</h4>
                <a href={`tel:${schoolInfo.phoneRaw}`} className="text-sm font-bold text-slate-900 hover:text-sky-600 block">
                  {schoolInfo.phone}
                </a>
                <p className="text-[11px] text-slate-500">Mon – Fri: 8:00 AM – 5:00 PM</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase text-slate-400 font-mono">Official Email</h4>
                <a href={`mailto:${schoolInfo.email}`} className="text-sm font-bold text-slate-900 hover:text-sky-600 block break-all">
                  {schoolInfo.email}
                </a>
                <p className="text-[11px] text-slate-500">Fast inquiry response</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase text-slate-400 font-mono">Campus Location</h4>
                <p className="text-sm font-bold text-slate-900">Kevote, Embu County</p>
                <Link to="/contact" className="text-[11px] text-sky-600 font-semibold hover:underline block">
                  View Directions & Map →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
