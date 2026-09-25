import React from 'react';
import { PageBanner } from '../components/PageBanner';
import { ContactSection } from '../components/ContactSection';

export const ContactPage: React.FC = () => {
  return (
    <div>
      <PageBanner
        title="Contact Administration & Location"
        subtitle="Get in touch with St. Paul's High School – Kevote. Reach our administration offices, find postal contact information, or send us a direct message."
        breadcrumbLabel="Contact"
      />

      {/* Main Contact Section */}
      <ContactSection />
    </div>
  );
};
