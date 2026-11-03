import React from 'react';
import { 
  Trees, 
  Shield, 
  Compass, 
  Shovel, 
  CalendarCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const services: (ServiceItem & { icon: React.ElementType })[] = [
    {
      id: 'tree-care',
      title: 'Tree Care',
      category: 'Maintenance & Safety',
      description: 'Professional tree care and maintenance to help keep your outdoor space tidy and well maintained.',
      iconName: 'Trees',
      icon: Trees,
    },
    {
      id: 'fencing',
      title: 'Fencing',
      category: 'Perimeter & Privacy',
      description: 'Improve privacy, define boundaries, and give your garden a clean, finished appearance.',
      iconName: 'Shield',
      icon: Shield,
    },
    {
      id: 'garden-design',
      title: 'Garden Design',
      category: 'Planning & Layout',
      description: 'Thoughtful garden design that makes better use of your outdoor space.',
      iconName: 'Compass',
      icon: Compass,
    },
    {
      id: 'landscaping',
      title: 'Landscaping',
      category: 'Hard & Soft Landscaping',
      description: 'Transform tired outdoor areas into attractive, functional gardens.',
      iconName: 'Shovel',
      icon: Shovel,
    },
    {
      id: 'garden-maintenance',
      title: 'Garden Maintenance',
      category: 'Routine Care',
      description: 'Keep your garden looking its best with dependable maintenance and ongoing care.',
      iconName: 'CalendarCheck',
      icon: CalendarCheck,
    },
    {
      id: 'outdoor-transformations',
      title: 'Outdoor Transformations',
      category: 'Complete Projects',
      description: 'Bring your outdoor ideas to life with practical landscaping and garden improvements.',
      iconName: 'Sparkles',
      icon: Sparkles,
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-[#F7F8F3] border-b border-[#E2E7D9] w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-[11px] sm:text-xs font-bold tracking-wider text-[#7CA22B] uppercase mb-2 sm:mb-3">
            OUR SPECIALIST SERVICES
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#26391B] tracking-tight mb-3 sm:mb-4">
            Everything Your Garden Needs
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#687064] leading-relaxed">
            Practical outdoor solutions, delivered with care and attention to detail.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between bg-white rounded-2xl p-7 border border-[#E2E7D9] hover:border-[#7CA22B] transition-colors shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#EDF2E4] border border-[#E2E7D9] flex items-center justify-center text-[#7CA22B] group-hover:bg-[#7CA22B] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-[#687064]">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#26391B] mb-3 group-hover:text-[#7CA22B] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-sm text-[#20251C]/80 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E7D9]/60">
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#7CA22B] hover:text-[#26391B] transition-colors cursor-pointer group-hover:translate-x-1 duration-200"
                  >
                    <span>Enquire for a quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
