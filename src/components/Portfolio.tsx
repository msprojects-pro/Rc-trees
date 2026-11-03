import React, { useState } from 'react';
import { ArrowRight, Compass, Shield, Shovel } from 'lucide-react';
import lawnImageLocal from '../assets/images/gallery_garden_lawn_1793698993460.jpg';
import fencingImageLocal from '../assets/images/gallery_fencing_install_1793698994287.jpg';
import patioImageLocal from '../assets/images/gallery_outdoor_patio_1793698994813.jpg';

interface PortfolioProps {
  onDiscussClick: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onDiscussClick }) => {
  const [lawnSrc, setLawnSrc] = useState(lawnImageLocal || '/images/gallery_garden_lawn.jpg');
  const [fencingSrc, setFencingSrc] = useState(fencingImageLocal || '/images/gallery_fencing_install.jpg');
  const [patioSrc, setPatioSrc] = useState(patioImageLocal || '/images/gallery_outdoor_patio.jpg');

  return (
    <section id="our-work" className="py-20 bg-white border-b border-[#E2E7D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold tracking-wider text-[#7CA22B] uppercase mb-2">
              LANDSCAPING INSPIRATION
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#26391B] tracking-tight">
              Outdoor Spaces, Transformed
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#687064] max-w-2xl">
              From fresh lawn laying and perennial borders to heavy-duty perimeter fencing and contemporary porcelain paving.
            </p>
          </div>

          <button
            onClick={onDiscussClick}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#7CA22B] hover:bg-[#6e9026] active:bg-[#607e21] rounded-lg transition-colors shrink-0 self-start md:self-auto cursor-pointer"
          >
            <span>Discuss Your Garden Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Gallery Grid: Large main image on left, two stacked on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Large Photograph */}
          <div className="lg:col-span-7 group rounded-2xl overflow-hidden border border-[#E2E7D9] bg-[#F7F8F3] shadow-xs flex flex-col">
            <div className="relative overflow-hidden h-[340px] sm:h-[420px] lg:h-[460px]">
              <img
                src={lawnSrc}
                alt="Finished British garden with manicured lawn, stone pathway, and raised timber sleeper planting beds"
                referrerPolicy="no-referrer"
                onError={() => {
                  if (lawnSrc !== '/images/gallery_garden_lawn.jpg') {
                    setLawnSrc('/images/gallery_garden_lawn.jpg');
                  } else {
                    setLawnSrc('https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=1200&q=80');
                  }
                }}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute top-4 left-4 bg-white/95 px-3 py-1.5 rounded-lg border border-[#E2E7D9] flex items-center gap-2 text-xs font-semibold text-[#26391B]">
                <Shovel className="w-3.5 h-3.5 text-[#7CA22B]" />
                <span>Lawn &amp; Planted Borders</span>
              </div>
            </div>
            <div className="p-5 bg-white border-t border-[#E2E7D9]">
              <h3 className="text-lg font-bold text-[#26391B] mb-1">
                Lush Turf Lawns &amp; Integrated Raised Beds
              </h3>
              <p className="text-sm text-[#687064]">
                Complete turfing, sleeper retention, and vibrant perennial borders designed to thrive in British soil conditions.
              </p>
            </div>
          </div>

          {/* Right Column: 2 Stacked Photographs */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Top Right Photo: Fencing */}
            <div className="group rounded-2xl overflow-hidden border border-[#E2E7D9] bg-[#F7F8F3] shadow-xs flex flex-col flex-1">
              <div className="relative overflow-hidden h-[200px] sm:h-[220px]">
                <img
                  src={fencingSrc}
                  alt="Professional timber feather-edge fence installation with concrete gravel boards"
                  referrerPolicy="no-referrer"
                  onError={() => {
                    if (fencingSrc !== '/images/gallery_fencing_install.jpg') {
                      setFencingSrc('/images/gallery_fencing_install.jpg');
                    } else {
                      setFencingSrc('https://images.unsplash.com/photo-1598880940371-c756e015fea1?auto=format&fit=crop&w=1200&q=80');
                    }
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute top-3 left-3 bg-white/95 px-3 py-1.5 rounded-lg border border-[#E2E7D9] flex items-center gap-2 text-xs font-semibold text-[#26391B]">
                  <Shield className="w-3.5 h-3.5 text-[#7CA22B]" />
                  <span>Boundary Fencing</span>
                </div>
              </div>
              <div className="p-4 bg-white border-t border-[#E2E7D9]">
                <h3 className="text-base font-bold text-[#26391B] mb-1">
                  Secure Timber Boundary Fencing
                </h3>
                <p className="text-xs text-[#687064]">
                  Robust feather-edge acoustic panels and gravel boards for lasting privacy and storm resilience.
                </p>
              </div>
            </div>

            {/* Bottom Right Photo: Outdoor Living / Patio */}
            <div className="group rounded-2xl overflow-hidden border border-[#E2E7D9] bg-[#F7F8F3] shadow-xs flex flex-col flex-1">
              <div className="relative overflow-hidden h-[200px] sm:h-[220px]">
                <img
                  src={patioSrc}
                  alt="Modern landscaped outdoor patio with grey porcelain paving and low retaining brick wall"
                  referrerPolicy="no-referrer"
                  onError={() => {
                    if (patioSrc !== '/images/gallery_outdoor_patio.jpg') {
                      setPatioSrc('/images/gallery_outdoor_patio.jpg');
                    } else {
                      setPatioSrc('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80');
                    }
                  }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                />
                <div className="absolute top-3 left-3 bg-white/95 px-3 py-1.5 rounded-lg border border-[#E2E7D9] flex items-center gap-2 text-xs font-semibold text-[#26391B]">
                  <Compass className="w-3.5 h-3.5 text-[#7CA22B]" />
                  <span>Patios &amp; Hard Landscaping</span>
                </div>
              </div>
              <div className="p-4 bg-white border-t border-[#E2E7D9]">
                <h3 className="text-base font-bold text-[#26391B] mb-1">
                  Contemporary Paving &amp; Seating Areas
                </h3>
                <p className="text-xs text-[#687064]">
                  Low-maintenance porcelain stone and brickwork defining practical social spaces.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
