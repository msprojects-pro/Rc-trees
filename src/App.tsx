import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { CustomerTrust } from './components/CustomerTrust';
import { CTASection } from './components/CTASection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Landscaping');

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesElem = document.getElementById('services');
    if (servicesElem) {
      servicesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8F3] text-[#20251C] overflow-x-hidden w-full max-w-full">
      {/* 1. Navigation Bar */}
      <Navbar onQuoteClick={() => scrollToContact()} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {/* 2. Hero Section */}
        <Hero
          onQuoteClick={() => scrollToContact()}
          onExploreClick={scrollToServices}
        />

        {/* 3. Trust Strip */}
        <TrustStrip />

        {/* 4. Services Section */}
        <Services onSelectService={(service) => scrollToContact(service)} />

        {/* 5. Featured Landscaping Project / Inspiration */}
        <Portfolio onDiscussClick={() => scrollToContact()} />

        {/* 6. About Section */}
        <About onContactClick={() => scrollToContact()} />

        {/* 7. Customer Trust Section (Verified 98% recommend, 27 Facebook reviews) */}
        <CustomerTrust />

        {/* 8. Call to Action Section (Solid forest green #26391B) */}
        <CTASection />

        {/* 9. Contact Section (Form + Direct details) */}
        <Contact initialService={selectedService} />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
