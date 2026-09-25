import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, X, Newspaper, ChevronRight } from 'lucide-react';
import { newsArticles, NewsItem } from '../data/schoolData';
import { AuthenticImage } from './AuthenticImage';

export const NewsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Academics', 'School Life', 'Events', 'Administration'];

  const filteredNews = activeCategory === 'All'
    ? newsArticles
    : newsArticles.filter(item => item.category === activeCategory);

  const featured = newsArticles.find(n => n.featured) || newsArticles[0];
  const recents = filteredNews.filter(n => n.id !== featured.id);

  return (
    <section id="news" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-widest text-sky-700 bg-sky-50 px-3 py-1 rounded border border-sky-200">
              <Newspaper className="w-3.5 h-3.5 text-sky-700" />
              <span>Announcements & Updates</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight">
              News & Events at Kevote
            </h2>
            <p className="text-base text-slate-600">
              Official school communiqués, academic term bulletins, and student community updates.
            </p>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Story & Recent Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Featured Article Card (7 cols) */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between group">
            <div className="relative">
              <AuthenticImage
                src={featured.src}
                alt={featured.title}
                label={featured.imagePlaceholderLabel}
                category={featured.category}
                aspectRatio="video"
                className="w-full"
              />
            </div>

            <div className="p-6 sm:p-8 space-y-4">
              {/* Unboxed clean metadata (Zero-Pill discipline) */}
              <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                <span className="text-sky-700 font-bold uppercase">{featured.category}</span>
                <span aria-hidden="true">·</span>
                <span>{featured.date}</span>
                <span aria-hidden="true">·</span>
                <span>{featured.readTime}</span>
              </div>

              <h3 className="font-display font-bold text-2xl sm:text-3xl text-slate-900 group-hover:text-sky-700 transition-colors leading-tight">
                {featured.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {featured.excerpt}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setSelectedArticle(featured)}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 hover:text-sky-900 transition-colors py-1 group/btn"
                >
                  <span>Read Official Bulletin</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* Recent Articles Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {recents.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedArticle(item)}
                className="cursor-pointer bg-white p-5 rounded-2xl border border-slate-200 shadow-2xs hover:border-sky-300 hover:shadow-md transition-all duration-300 space-y-2 group"
              >
                {/* Unboxed clean metadata */}
                <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
                  <span className="text-sky-700 font-semibold uppercase">{item.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.date}</span>
                </div>

                <h4 className="font-display font-bold text-base text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {item.excerpt}
                </p>

                <div className="pt-2 flex items-center justify-between text-xs text-sky-700 font-semibold">
                  <span>Read Notice</span>
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-200 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Close Notice"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                <span className="text-sky-700 font-bold uppercase">{selectedArticle.category}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedArticle.date}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              <h3 className="font-display font-bold text-2xl text-slate-900">
                {selectedArticle.title}
              </h3>

              <div className="pt-2 border-t border-slate-100 space-y-3 text-sm text-slate-700 leading-relaxed">
                {selectedArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-200 flex justify-between items-center text-xs text-slate-500 font-mono">
                <span>Official Publication · St. Paul's Kevote</span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 rounded-lg bg-slate-900 text-white font-semibold uppercase tracking-wider text-xs hover:bg-slate-800"
                >
                  Close Notice
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
