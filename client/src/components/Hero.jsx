import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero({ onOpenDonate }) {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Subtitle & Action Buttons */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-serif text-[#111827] font-bold leading-[1.12] tracking-tight">
              Building a better{' '}
              <span className="text-[#FF7A00]">
                India
              </span>
              , one life<br className="hidden sm:inline" /> at a time.
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-lg font-normal leading-relaxed">
              We work for children's education, health, nutrition and empowering communities across India.
            </p>

            <div className="pt-2 flex items-center gap-6">
              <button
                onClick={onOpenDonate}
                className="bg-black hover:bg-neutral-800 text-white font-medium text-sm px-7 py-3 rounded-md transition-all shadow-sm hover:shadow active:scale-98"
              >
                Donate Now
              </button>

              <a
                href="#pillars"
                className="font-medium text-sm text-gray-900 hover:text-[#FF7A00] flex items-center gap-1.5 transition-colors group"
              >
                <span>Our Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Exact India Map Cutout Collage with Children & Tricolor Brush Strokes */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[560px]">
              <img
                src="/india-hero-cutout.png"
                alt="Building a better India - BHS Foundation"
                className="w-full h-auto object-contain select-none transition-transform duration-500 hover:scale-[1.01]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
