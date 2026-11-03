import React from 'react';
import { Trees, Award, FileText } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const trustItems = [
    {
      icon: Trees,
      title: 'Professional Tree & Landscaping Services',
      subtitle: 'Comprehensive outdoor care across the West Midlands',
    },
    {
      icon: Award,
      title: 'Quality Workmanship',
      subtitle: 'Attentive, tidy, and built to last in every detail',
    },
    {
      icon: FileText,
      title: 'Free Quotations',
      subtitle: 'Clear, transparent pricing with no hidden obligations',
    },
  ];

  return (
    <section className="bg-white border-b border-[#E2E7D9] py-8 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl bg-[#F7F8F3] border border-[#E2E7D9]"
              >
                <div className="w-12 h-12 rounded-lg bg-[#EDF2E4] border border-[#E2E7D9] flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-[#7CA22B]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#26391B] mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#687064] leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
