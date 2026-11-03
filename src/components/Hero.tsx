import React, { useState } from 'react';
import { ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import heroImageLocal from '../assets/images/hero_british_landscaping_1793698992699.jpg';

interface HeroProps {
  onQuoteClick: () => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onQuoteClick, onExploreClick }) => {
  const [imgSrc, setImgSrc] = useState(heroImageLocal || '/images/hero_british_landscaping.jpg');

  return (
    <section id="home" className="relative bg-[#F7F8F3] pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-[#E2E7D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center">
            {/* Small label: unboxed text, no pills */}
            <div className="text-xs font-bold tracking-wider text-[#7CA22B] uppercase mb-4">
              LANDSCAPING &amp; TREE CARE • WEST MIDLANDS
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-[#26391B] tracking-tight leading-[1.12] text-balance mb-6">
              Transform Your Garden. Enhance Your Outdoor Space.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg text-[#20251C]/80 leading-relaxed max-w-2xl mb-8">
              From professional tree care and fencing to complete garden transformations, 
              R.C Tree's &amp; Landscaping helps you create and maintain an outdoor space you'll love.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-6">
              <button
                onClick={onQuoteClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-[#7CA22B] hover:bg-[#6e9026] active:bg-[#607e21] rounded-lg transition-colors cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-[#26391B] bg-white hover:bg-[#EDF2E4] border border-[#E2E7D9] rounded-lg transition-colors cursor-pointer"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Small trust line beneath buttons */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-[#687064]">
              <span className="inline-flex items-center gap-1.5 text-[#26391B]">
                <CheckCircle2 className="w-4 h-4 text-[#7CA22B]" />
                Quality Workmanship
              </span>
              <span className="text-[#E2E7D9]">·</span>
              <span className="inline-flex items-center gap-1.5 text-[#26391B]">
                <CheckCircle2 className="w-4 h-4 text-[#7CA22B]" />
                Reliable Service
              </span>
              <span className="text-[#E2E7D9]">·</span>
              <span className="inline-flex items-center gap-1.5 text-[#26391B]">
                <CheckCircle2 className="w-4 h-4 text-[#7CA22B]" />
                Free Quotes
              </span>
            </div>
          </div>

          {/* Right Column: Hero Landscaping Photograph */}
          <div className="lg:col-span-6 xl:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#E2E7D9] bg-white shadow-sm">
              <img
                src={imgSrc}
                alt="Professionally landscaped British garden with manicured lawn, curved borders, and neat planting by R.C Tree's & Landscaping"
                referrerPolicy="no-referrer"
                onError={() => {
                  if (imgSrc !== '/images/hero_british_landscaping.jpg') {
                    setImgSrc('/images/hero_british_landscaping.jpg');
                  } else {
                    setImgSrc('https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=1600&q=80');
                  }
                }}
                className="w-full h-[360px] sm:h-[440px] lg:h-[480px] object-cover block"
                loading="eager"
              />
              
              {/* Floating Trust Card with verified stats */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-none p-4 rounded-xl border border-[#E2E7D9] shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#EDF2E4] flex items-center justify-center shrink-0">
                    <Star className="w-5 h-5 fill-[#7CA22B] text-[#7CA22B]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#26391B]">
                      98% Customer Recommendation
                    </div>
                    <div className="text-xs text-[#687064]">
                      Based on 27 verified Facebook reviews
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
