import React from 'react';
import { Trees, Phone, MessageSquare, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const servicesList = [
    'Tree Care and Tree Maintenance',
    'Fencing Installation and Repairs',
    'Garden Design',
    'Garden Landscaping',
    'Garden Maintenance',
    'Outdoor Space Transformations',
  ];

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#our-work' },
    { label: 'About Us', href: '#about' },
    { label: 'Get a Quote', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#26391B] text-white border-t border-[#314823]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Description (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-[#314823] flex items-center justify-center text-[#7CA22B]">
                <Trees className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                R.C Tree's &amp; Landscaping
              </span>
            </div>
            
            <p className="text-sm text-white/80 leading-relaxed max-w-sm">
              Helping homeowners throughout the West Midlands transform and maintain their outdoor spaces with professional tree care, fencing, landscaping, and dedicated garden maintenance.
            </p>

            <div className="pt-2 text-xs text-white/60">
              Customer Recommendation: <span className="font-semibold text-[#7CA22B]">98% Recommend</span> (27 Facebook reviews)
            </div>
          </div>

          {/* Col 2: Services Overview (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#7CA22B] mb-4">
              Services Overview
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              {servicesList.map((service, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7CA22B]"></span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links & Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-[#7CA22B] mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm text-white/80">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="hover:text-[#7CA22B] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 border-t border-[#314823] space-y-2 text-sm text-white/80">
              <a
                href="tel:+447386994511"
                className="flex items-center gap-2 hover:text-[#7CA22B] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#7CA22B] shrink-0" />
                <span>+44 7386 994511</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#7CA22B] shrink-0 mt-0.5" />
                <span>West Midlands, WR5 1EB</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#314823] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© 2026 R.C Tree's &amp; Landscaping. All rights reserved.</p>
          <p>Tree Care · Fencing · Garden Design · Landscaping · Maintenance</p>
        </div>
      </div>
    </footer>
  );
};
