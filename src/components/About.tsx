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
    <section id="about" className="py-20 bg-[#F7F8F3] border-b border-[#E2E7D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden border border-[#E2E7D9] bg-white shadow-xs">
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
                className="w-full h-[380px] sm:h-[460px] object-cover"
              />
            </div>
          </div>

          {/* Right Column: About Copy & Principles */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="text-xs font-bold tracking-wider text-[#7CA22B] uppercase mb-3">
              ABOUT R.C TREE'S &amp; LANDSCAPING
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#26391B] tracking-tight mb-6">
              Outdoor Improvements, Done with Care
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#20251C]/80 leading-relaxed mb-8">
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
            <div className="space-y-4 mb-8">
              {principles.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#E2E7D9]">
                    <div className="w-9 h-9 rounded-lg bg-[#EDF2E4] border border-[#E2E7D9] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#7CA22B]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#26391B]">
                        {p.title}
                      </h3>
                      <p className="text-sm text-[#687064] mt-0.5">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={onContactClick}
              className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-[#7CA22B] hover:bg-[#6e9026] active:bg-[#607e21] rounded-lg transition-colors cursor-pointer"
            >
              Get in Touch with Our Team
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
