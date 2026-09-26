import React from 'react';
import { ArrowRight, Heart, Award, ShieldCheck, Sparkles } from 'lucide-react';

export default function AboutImpact({ onOpenDonate, onOpenStory }) {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FAFAFA] relative overflow-hidden">
      
      {/* Decorative paint splatters */}
      <div className="absolute top-1/2 -left-10 w-40 h-40 bg-orange-100/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-60 h-60 bg-green-100/40 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photo Grid / Collage with Tricolor Brush Accents */}
          <div className="lg:col-span-6 relative">
            
            {/* Top decorative brush stroke */}
            <div className="absolute -top-6 left-6 w-48 h-12 z-0 opacity-80 pointer-events-none">
              <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 20 Q50 5 90 25 Q130 15 155 20 Q120 35 70 30 Q20 35 10 20 Z"
                  fill="#FF7A00"
                />
              </svg>
            </div>

            {/* Bottom-left green brush stroke */}
            <div className="absolute -bottom-6 -left-4 w-40 h-12 z-0 opacity-80 pointer-events-none">
              <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 25 Q50 10 100 28 Q130 18 150 22 Q110 38 60 32 Q15 35 10 25 Z"
                  fill="#1F8E3D"
                />
              </svg>
            </div>

            {/* Main Collage Container */}
            <div className="relative z-10 grid grid-cols-12 gap-3 sm:gap-4">
              
              {/* Main Left Photo (Girl with Slate / School child) */}
              <div className="col-span-7 row-span-2 relative group overflow-hidden rounded-2xl shadow-lg border-2 border-white">
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
                  alt="Child with slate at Celebso Foundation"
                  className="w-full h-80 sm:h-96 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-md">
                  Learning With Dignity
                </div>
              </div>

              {/* Top Right Photo (Classroom study) */}
              <div className="col-span-5 relative group overflow-hidden rounded-2xl shadow-md border-2 border-white">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop"
                  alt="Classroom education"
                  className="w-full h-36 sm:h-44 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Bottom Right Photo (Celebration & Children waving flag) */}
              <div className="col-span-5 relative group overflow-hidden rounded-2xl shadow-md border-2 border-white">
                <img
                  src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=600&auto=format&fit=crop"
                  alt="Happy Indian children waving flags"
                  className="w-full h-40 sm:h-48 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent"></div>
              </div>

            </div>

            {/* Floating Metric Badge */}
            <div className="absolute -bottom-4 right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-xl border border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-[#FF7A00]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-base font-bold text-gray-900 leading-tight">98.4%</div>
                <div className="text-[11px] text-gray-500 font-medium">Retention in School</div>
              </div>
            </div>

          </div>

          {/* Right Column: Copy & Actions */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100/60 text-[#E65100] text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              Transparent & Measurable Impact
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#111827] leading-[1.18]">
              What have we done with{' '}
              <span className="text-[#FF7A00]">your help?</span>
            </h2>

            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              <p>
                Founded to bring transformative education and holistic welfare to children across India. Every contribution turns into desks, books, nutritious meals, and regular medical checkups.
              </p>
              <p>
                Our transparent programs ensure maximum direct impact on the ground, giving every child the right to thrive, learn, and lead their family out of systemic poverty.
              </p>
              <p className="font-medium text-gray-800">
                Together, we've impacted over 52,000 young lives across 18 states of India.
              </p>
            </div>

            {/* Checklist highlights */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-4 h-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold">✓</div>
                <span>Solar Classrooms</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-4 h-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold">✓</div>
                <span>Free Health Screening</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-4 h-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold">✓</div>
                <span>Warm Mid-day Meals</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-4 h-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold">✓</div>
                <span>Girl Child Scholarships</span>
              </div>
            </div>

            {/* Actions: READ FULL STORY & DONATE NOW */}
            <div className="pt-4 flex flex-wrap items-center gap-5 sm:gap-6">
              <button
                onClick={() => onOpenStory && onOpenStory(null)}
                className="group inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase text-gray-900 hover:text-[#FF7A00] transition-colors"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenDonate}
                className="bg-black hover:bg-zinc-800 text-white font-medium text-sm px-7 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 hover:-translate-y-0.5"
              >
                <Heart className="w-4 h-4 text-orange-400 fill-orange-400" />
                <span>Donate Now</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
