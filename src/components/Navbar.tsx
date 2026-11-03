import React, { useState } from 'react';
import { Trees, Phone, MessageSquare, Menu, X } from 'lucide-react';

interface NavbarProps {
  onQuoteClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onQuoteClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#our-work' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#26391B] border-b border-[#314823] shadow-md w-full max-w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 sm:gap-6 md:gap-8 h-18 sm:h-20 min-w-0">
          {/* Zone 1: Brand title, one line */}
          <a
            href="#home"
            className="flex items-center gap-2 sm:gap-2.5 text-base sm:text-lg lg:text-xl font-bold tracking-tight text-white hover:text-[#7CA22B] transition-colors min-w-0 shrink"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#314823] flex items-center justify-center shrink-0 border border-[#3f5c2c]">
              <Trees className="w-5 h-5 sm:w-6 sm:h-6 text-[#7CA22B]" />
            </div>
            <span className="truncate">R.C Tree's &amp; Landscaping</span>
          </a>

          {/* Zone 2: Concise single-line navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/90">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="whitespace-nowrap shrink-0 hover:text-[#7CA22B] transition-colors py-1 border-b-2 border-transparent hover:border-[#7CA22B]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="tel:+447386994511"
              className="hidden xl:flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-[#7CA22B] transition-colors px-3 py-2"
              title="Call R.C Tree's & Landscaping"
            >
              <Phone className="w-4 h-4 text-[#7CA22B]" />
              <span>07386 994511</span>
            </a>
            <button
              onClick={onQuoteClick}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-[#7CA22B] hover:bg-[#6e9026] active:bg-[#607e21] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-none border-0 cursor-pointer"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Action Buttons */}
          <div className="flex sm:hidden items-center gap-1.5 shrink-0">
            <a
              href="tel:+447386994511"
              className="w-9 h-9 rounded-lg bg-[#314823] flex items-center justify-center text-white border border-[#3f5c2c] active:scale-95 transition-transform"
              aria-label="Call R.C Tree's & Landscaping"
            >
              <Phone className="w-4 h-4 text-[#7CA22B]" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-white hover:bg-[#314823] transition-colors active:scale-95"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#26391B] border-b border-[#314823] px-4 pt-3 pb-6 shadow-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-base font-medium text-white/90 hover:text-[#7CA22B] hover:bg-[#314823] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#314823] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onQuoteClick();
                }}
                className="w-full py-3 text-center text-sm font-semibold text-white bg-[#7CA22B] hover:bg-[#6e9026] rounded-lg transition-colors"
              >
                Get a Free Quote
              </button>
              <div className="grid grid-cols-2 gap-2 mt-1">
                <a
                  href="tel:+447386994511"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 text-sm font-semibold text-white bg-[#314823] border border-[#3f5c2c] rounded-lg hover:bg-[#3a562a]"
                >
                  <Phone className="w-4 h-4 text-[#7CA22B]" />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/447386994511?text=Hello%2C%20I'd%20like%20to%20enquire%20about%20your%20landscaping%20services%20and%20request%20a%20free%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 text-sm font-semibold text-white bg-[#314823] border border-[#3f5c2c] rounded-lg hover:bg-[#3a562a]"
                >
                  <MessageSquare className="w-4 h-4 text-[#7CA22B]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
