import React from 'react';
import { Star, ThumbsUp, MapPin, CheckCircle } from 'lucide-react';

export const CustomerTrust: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-[#E2E7D9] w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto bg-[#F7F8F3] rounded-2xl p-6 sm:p-10 md:p-12 border border-[#E2E7D9] w-full">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            
            {/* Recommendation Score */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-2xl bg-[#26391B] flex flex-col items-center justify-center text-white shrink-0 shadow-xs">
                <span className="text-3xl font-extrabold tracking-tight text-[#7CA22B]">98%</span>
                <span className="text-[11px] uppercase tracking-wider text-white/80 font-medium">Rating</span>
              </div>

              <div>
                <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#7CA22B] text-[#7CA22B]" />
                  ))}
                  <span className="ml-2 text-sm font-bold text-[#26391B]">98% Recommend</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#26391B]">
                  Based on 27 Facebook reviews
                </h3>
                <p className="text-sm text-[#687064] mt-1">
                  Verified customer recommendations across Worcestershire and the wider West Midlands.
                </p>
              </div>
            </div>

            {/* Trust Highlights */}
            <div className="border-t md:border-t-0 md:border-l border-[#E2E7D9] pt-6 md:pt-0 md:pl-8 flex flex-col gap-2.5 shrink-0 text-left w-full md:w-auto">
              <div className="flex items-center gap-2 text-sm text-[#20251C]">
                <CheckCircle className="w-4 h-4 text-[#7CA22B] shrink-0" />
                <span>Honest local recommendations</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#20251C]">
                <CheckCircle className="w-4 h-4 text-[#7CA22B] shrink-0" />
                <span>Reliable and tidy cleanup</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#20251C]">
                <CheckCircle className="w-4 h-4 text-[#7CA22B] shrink-0" />
                <span>Direct communication throughout</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
