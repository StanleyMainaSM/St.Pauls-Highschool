import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PrincipalMessage } from './components/PrincipalMessage';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CampusExperience } from './components/CampusExperience';
import { AcademicsSection } from './components/AcademicsSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { SchoolLifeSection } from './components/SchoolLifeSection';
import { NewsSection } from './components/NewsSection';
import { GallerySection } from './components/GallerySection';
import { AlumniSection } from './components/AlumniSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdmissionEnquiryModal } from './components/AdmissionEnquiryModal';
import { AuthenticAssetGuideModal } from './components/AuthenticAssetGuideModal';
import { Camera } from 'lucide-react';
import { schoolAssets } from './data/schoolAssets';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [admissionsModalOpen, setAdmissionsModalOpen] = useState(false);
  const [assetGuideOpen, setAssetGuideOpen] = useState(false);

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'academics',
      'admissions',
      'campus',
      'school-life',
      'news',
      'gallery',
      'alumni',
      'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleUpdateAsset = (assetId: string, newPath: string) => {
    if (schoolAssets[assetId]) {
      schoolAssets[assetId].path = newPath;
      // Trigger re-render
      setActiveSection((prev) => prev);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      {/* Sticky Main Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenAdmissionsModal={() => setAdmissionsModalOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-1">
        <Hero
          onExplore={() => scrollToSection('about')}
          onAdmissions={() => scrollToSection('admissions')}
          onContact={() => scrollToSection('contact')}
        />

        <AboutSection />

        <PrincipalMessage />

        <WhyChooseUs />

        <CampusExperience />

        <AcademicsSection />

        <AdmissionsSection
          onOpenEnquiryModal={() => setAdmissionsModalOpen(true)}
        />

        <SchoolLifeSection />

        <NewsSection />

        <GallerySection />

        <AlumniSection />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Admissions Enquiry Modal */}
      <AdmissionEnquiryModal
        isOpen={admissionsModalOpen}
        onClose={() => setAdmissionsModalOpen(false)}
      />

      {/* Floating Authentic School Photo Manager Badge */}
      <aside aria-label="Authentic Photo Asset Guide" className="fixed bottom-4 right-4 z-40">
        <button
          onClick={() => setAssetGuideOpen(true)}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-950/90 hover:bg-slate-900 text-sky-300 border border-sky-600/40 shadow-xl backdrop-blur-md text-xs font-mono tracking-wider transition-all hover:scale-105 active:scale-95 group focus-visible:outline-sky-400"
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
  );
}
