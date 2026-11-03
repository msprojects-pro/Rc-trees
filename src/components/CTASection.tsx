import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="bg-[#26391B] py-14 sm:py-16 lg:py-20 text-white w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
        <div className="max-w-3xl mx-auto">
          
          <span className="text-xs font-bold tracking-wider text-[#7CA22B] uppercase mb-3 block">
            GET IN TOUCH DIRECTLY
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ready to Improve Your Outdoor Space?
          </h2>

          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto mb-10">
            Tell us about your garden project and request your free quotation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+447386994511"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-[#7CA22B] hover:bg-[#6e9026] active:bg-[#607e21] rounded-lg transition-colors cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>

            <a
              href="https://wa.me/447386994511?text=Hello%2C%20I'd%20like%20to%20enquire%20about%20your%20landscaping%20services%20and%20request%20a%20free%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-[#26391B] bg-white hover:bg-[#F7F8F3] rounded-lg transition-colors cursor-pointer"
            >
              <MessageSquare className="w-5 h-5 text-[#7CA22B]" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          <div className="mt-8 text-xs text-white/70">
            Direct response · Phone: +44 7386 994511 · Based in WR5 1EB, West Midlands
          </div>

        </div>
      </div>
    </section>
  );
};
