import React from 'react';
import { BookOpen, HeartPulse, UtensilsCrossed, Users } from 'lucide-react';

const pillars = [
  {
    id: 'education',
    title: 'Education',
    icon: BookOpen,
    iconColor: 'text-[#FF7A00]',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-100',
    description: 'Providing primary and higher education to underprivileged children across remote regions of India.',
    stats: '24,000+ enrolled',
  },
  {
    id: 'health',
    title: 'Health',
    icon: HeartPulse,
    iconColor: 'text-rose-500',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-100',
    description: 'Accessible healthcare and pediatric wellness support programs for children and mothers in need.',
    stats: '280+ health camps',
  },
  {
    id: 'nutrition',
    title: 'Nutrition',
    icon: UtensilsCrossed,
    iconColor: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-100',
    description: 'Fighting hunger with hot, nutritious mid-day meals and protein supplements daily in underserved schools.',
    stats: '15,000+ daily meals',
  },
  {
    id: 'empowerment',
    title: 'Empowerment',
    icon: Users,
    iconColor: 'text-[#1F8E3D]',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
    description: 'Skill development, digital literacy, and vocational guidance for a stronger and self-reliant youth.',
    stats: '8,500+ mentored',
  },
];

export default function Pillars({ onSelectPillar }) {
  return (
    <section id="pillars" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title (subtle indicator) */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF7A00] bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-100">
            Our Core Pillars
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-serif font-bold text-gray-900">
            Holistic Growth for Every Child
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => onSelectPillar && onSelectPillar(item.id)}
                className="group flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-white hover:bg-orange-50/20 border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:shadow-card cursor-pointer hover:-translate-y-1"
              >
                {/* Circular Icon Container */}
                <div
                  className={`w-16 h-16 rounded-2xl ${item.bgColor} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-sm border ${item.borderColor}`}
                >
                  <IconComponent className={`w-8 h-8 ${item.iconColor}`} strokeWidth={2.2} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-3 group-hover:text-[#FF7A00] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed font-normal mb-4">
                  {item.description}
                </p>

                {/* Bottom tag */}
                <span className="mt-auto text-xs font-semibold text-gray-500 bg-gray-50 px-3 py-1 rounded-full group-hover:bg-white group-hover:text-gray-800 transition-colors">
                  {item.stats}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
