import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { GallerySection } from '../components/GallerySection';

export const GalleryPage: React.FC = () => {
  return (
    <div>
      <PageBanner
        title="School Photo Gallery"
        subtitle="Visual showcase of St. Paul's High School – Kevote: explore our academic laboratories, boarding dormitories, school bakery, sports grounds, and community life."
        breadcrumbLabel="Gallery"
      />

      {/* Main Gallery Section */}
      <GallerySection />
    </div>
  );
};
