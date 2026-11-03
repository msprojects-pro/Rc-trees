import React, { useState } from 'react';
import { Check, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';
import aboutImageLocal from '../assets/images/about_landscaping_care_1793698994966.jpg';

interface AboutProps {
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  const [imgSrc, setImgSrc] = useState(aboutImageLocal || '/images/about_landscaping_care.jpg');

  const principles = [
    {
      title: 'Quality and Care',
      desc: 'Meticulous attention to neat finishes, proper structural foundations, and healthy plant and tree practices.',
      icon: ShieldCheck,
    },
    {
      title: 'Reliable Service',
      desc: 'Punctual communication, clear timelines, respectful site cleanliness, and transparent quotes without surprises.',
      icon: HeartHandshake,
    },
    {
      title: 'Tailored Outdoor Solutions',
      desc: 'Practical garden and fencing ideas that match your lifestyle, property layout, and budget.',
      icon: Compass,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-[#F7F8F3] border-b border-[#E2E7D9] w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-6 relative order-2 lg:order-1 w-full min-w-0">
            <div className="rounded-2xl overflow-hidden border border-[#E2E7D9] bg-white shadow-xs w-full">
              <img
                src={imgSrc}
                alt="Gardening and landscaping care in the West Midlands"
                referrerPolicy="no-referrer"
                onError={() => {
                  if (imgSrc !== '/images/about_landscaping_care.jpg') {
                    setImgSrc('/images/about_landscaping_care.jpg');
                  } else {
                    setImgSrc('https://images.unsplash.com/photo-1584467735871-8e85353a8413?auto=format&fit=crop&w=1200&q=80');
                  }
                }}
                className="w-full h-[280px] sm:h-[400px] lg:h-[460px] object-cover"
              />
            </div>
          </div>

          {/* Right Column: About Copy & Principles */}
          <div className="lg:col-span-6 order-1 lg:order-2 min-w-0">
            <div className="text-[11px] sm:text-xs font-bold tracking-wider text-[#7CA22B] uppercase mb-2 sm:mb-3">
              ABOUT R.C TREE'S &amp; LANDSCAPING
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#26391B] tracking-tight mb-4 sm:mb-6">
              Outdoor Improvements, Done with Care
            </h2>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg text-[#20251C]/80 leading-relaxed mb-6 sm:mb-8">
              <p>
                At R.C Tree's &amp; Landscaping, we help homeowners improve and maintain their outdoor spaces. 
                From tree care and fencing to garden design and landscaping, our focus is on quality work and practical results.
              </p>
              <p>
                Whether you're planning a garden improvement or need help maintaining your existing outdoor space, 
                get in touch to discuss your requirements.
              </p>
            </div>

            {/* Three Principles */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {principles.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 sm:gap-3.5 p-3 sm:p-3.5 rounded-xl bg-white border border-[#E2E7D9]">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#EDF2E4] border border-[#E2E7D9] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#7CA22B]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-[#26391B]">
                        {p.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#687064] mt-0.5">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={onContactClick}
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3.5 text-base font-semibold text-white bg-[#7CA22B] hover:bg-[#6e9026] active:bg-[#607e21] rounded-lg transition-colors cursor-pointer w-full sm:w-auto"
            >
              Get in Touch with Our Team
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
