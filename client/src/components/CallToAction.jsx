import React from 'react';
import { Heart, UserCheck, Sparkles } from 'lucide-react';

export default function CallToAction({ onOpenDonate, onOpenVolunteer }) {
  return (
    <section id="get-involved" className="py-12 sm:py-16 bg-white relative overflow-hidden">
      
      {/* Decorative green brush splatter at the lower edge of the section (from UI image) */}
      <div className="absolute -bottom-6 -left-6 w-56 h-28 opacity-80 pointer-events-none z-0">
        <svg viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 50 Q60 20 120 35 Q180 50 195 25 Q180 65 110 65 Q50 75 10 50 Z"
            fill="#1F8E3D"
          />
          <circle cx="160" cy="25" r="4" fill="#2E7D32" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Dark Banner Card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#111317] border border-gray-800">
          
          {/* Background Image with Dark Vignette */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1400&auto=format&fit=crop"
              alt="Indian schoolchildren smiling"
              className="w-full h-full object-cover object-center opacity-30 filter grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#121417] via-[#121417]/90 to-transparent"></div>
          </div>

          {/* Banner Content */}
          <div className="relative z-10 p-8 sm:p-12 md:p-16 max-w-2xl text-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Make A Difference Today
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              Join our mission!
            </h2>
            <p className="mt-2 text-xl sm:text-2xl font-serif text-gray-200 font-normal">
              Be the reason someone smiles today.
            </p>

            <p className="mt-4 text-sm sm:text-base text-gray-400 max-w-lg leading-relaxed">
              Whether you sponsor a child's education or dedicate a few hours on weekends, your involvement creates lasting ripples of change.
            </p>

            {/* Buttons: DONATE NOW & VOLUNTEER */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenDonate}
                className="bg-[#FF7A00] hover:bg-[#E65D00] text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-orange-500/25 flex items-center gap-2 hover:-translate-y-0.5"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>DONATE NOW</span>
              </button>

              <button
                onClick={onOpenVolunteer}
                className="bg-[#1F8E3D] hover:bg-[#187532] text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:shadow-green-600/25 flex items-center gap-2 hover:-translate-y-0.5"
              >
                <UserCheck className="w-4 h-4" />
                <span>VOLUNTEER</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
