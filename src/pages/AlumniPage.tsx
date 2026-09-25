import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { AlumniSection } from '../components/AlumniSection';

export const AlumniPage: React.FC = () => {
  return (
    <div>
      <PageBanner
        title="Alumni Network — Old Boys Brotherhood"
        subtitle="Uniting generations of Kevote Old Boys. Fostering mentorship for current candidates, professional networking, and giving back to our beloved alma mater."
        breadcrumbLabel="Alumni"
      />

      {/* Main Alumni Section */}
      <AlumniSection />
    </div>
  );
};
