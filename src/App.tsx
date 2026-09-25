import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AdmissionEnquiryModal } from './components/AdmissionEnquiryModal';
import { AuthenticAssetGuideModal } from './components/AuthenticAssetGuideModal';
import { schoolAssets } from './data/schoolAssets';
import { Camera } from 'lucide-react';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { SchoolLifePage } from './pages/SchoolLifePage';
import { NewsPage } from './pages/NewsPage';
import { GalleryPage } from './pages/GalleryPage';
import { AlumniPage } from './pages/AlumniPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [admissionsModalOpen, setAdmissionsModalOpen] = useState(false);
  const [assetGuideOpen, setAssetGuideOpen] = useState(false);
  const [, setForceUpdate] = useState(0);

  const handleUpdateAsset = (assetId: string, newPath: string) => {
    if (schoolAssets[assetId]) {
      schoolAssets[assetId].path = newPath;
      setForceUpdate((prev) => prev + 1);
    }
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
        {/* Automatically scroll to top on every route transition */}
        <ScrollToTop />

        {/* Global Navigation Header with 3-line hamburger menu */}
        <Navbar
          onOpenAdmissionsModal={() => setAdmissionsModalOpen(true)}
        />

        {/* Multi-Page Routes */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenAdmissionsModal={() => setAdmissionsModalOpen(true)}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route
              path="/admissions"
              element={
                <AdmissionsPage
                  onOpenEnquiryModal={() => setAdmissionsModalOpen(true)}
                />
              }
            />
            <Route path="/school-life" element={<SchoolLifePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/alumni" element={<AlumniPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Admissions Enquiry Modal */}
        <AdmissionEnquiryModal
          isOpen={admissionsModalOpen}
          onClose={() => setAdmissionsModalOpen(false)}
        />

        {/* Floating Authentic School Photo Manager Badge */}
        <aside aria-label="Authentic Photo Asset Guide" className="fixed bottom-4 right-4 z-40">
          <button
            onClick={() => setAssetGuideOpen(true)}
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-950/90 hover:bg-slate-900 text-sky-300 border border-sky-600/40 shadow-xl backdrop-blur-md text-xs font-mono tracking-wider transition-all hover:scale-105 active:scale-95 group focus-visible:outline-sky-400 cursor-pointer"
            title="Open Authentic School Asset Guide"
          >
            <Camera className="w-3.5 h-3.5 text-sky-400 group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">Authentic Photo Slots</span>
          </button>
        </aside>

        {/* Authentic Asset Manager Modal */}
        <AuthenticAssetGuideModal
          isOpen={assetGuideOpen}
          onClose={() => setAssetGuideOpen(false)}
          onUpdateAsset={handleUpdateAsset}
        />
      </div>
    </BrowserRouter>
  );
}
