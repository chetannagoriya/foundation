import React from 'react';
import { ArrowRight, Heart, Award, ShieldCheck, CheckCircle2, BookOpen, HeartPulse, Utensils, Users, Sparkles, ChevronDown } from 'lucide-react';

export default function AboutPage({ onOpenDonate, onOpenVolunteer, onNavigateHome }) {
  const scrollToFounder = () => {
    const el = document.getElementById('founder-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pt-24 md:pt-28 bg-[#FCFCFC] text-gray-900 animate-fade-in text-left">
      
      {/* 1. HERO SECTION - ABOUT US */}
      <section className="relative pt-6 pb-16 md:pt-10 md:pb-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#FF7A00] bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-100">
                About Us
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-serif text-[#111827] font-bold leading-[1.12] tracking-tight">
                Building a better{' '}
                <span className="text-[#FF7A00]">
                  India
                </span>
                , one life<br className="hidden sm:inline" /> at a time.
              </h1>

              <div className="space-y-3 text-base text-gray-600 leading-relaxed font-normal">
                <p>
                  BHS Foundation is dedicated to the holistic well-being of underprivileged children across India, providing them with the opportunity to learn, grow and become empowered citizens.
                </p>
                <p>
                  Our focus is simple: education, health, nutrition and empowerment. Because every child deserves access to a better future and hope.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-5">
                <button
                  onClick={onOpenDonate}
                  className="bg-black hover:bg-neutral-800 text-white font-medium text-sm px-7 py-3 rounded-md transition-all shadow-sm hover:shadow"
                >
                  DONATE NOW
                </button>

                <button
                  onClick={scrollToFounder}
                  className="font-semibold text-sm text-gray-800 hover:text-[#FF7A00] flex items-center gap-1.5 transition-colors"
                >
                  <span>EXPLORE</span>
                  <ChevronDown className="w-4 h-4 animate-bounce" />
                </button>
              </div>
            </div>

            {/* Right Column: India Map Cutout with Children */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-[540px]">
                <img
                  src="/india-hero-cutout.png"
                  alt="Building a better India - BHS Foundation"
                  className="w-full h-auto object-contain select-none"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FOUNDER SECTION - VEER SINGH */}
      <section id="founder-section" className="py-16 sm:py-24 bg-white border-t border-gray-100 relative overflow-hidden">
        
        {/* Tricolor brush strokes on the left margin */}
        <div className="absolute top-20 -left-10 w-44 h-80 opacity-90 pointer-events-none hidden md:block">
          <svg viewBox="0 0 160 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path
              d="M-20 20 Q50 60 70 120 Q30 160 80 200 Q20 250 -20 280 Z"
              fill="#FF7A00"
              fillOpacity="0.8"
            />
            <path
              d="M-20 180 Q60 210 50 260 Q10 280 -20 300 Z"
              fill="#1F8E3D"
              fillOpacity="0.8"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Founder Portrait */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[380px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-900 group">
                <img
                  src="/veer-singh.png?v=2"
                  alt="Veer Singh - Founder & Chief Executive"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Brand Overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xl font-serif font-bold tracking-tight">Veer Singh</div>
                  <div className="text-xs text-orange-400 font-medium tracking-wider uppercase mt-0.5">
                    Founder & Chief Executive, BHS Foundation
                  </div>
                </div>

                {/* Floating Tricolor Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF7A00]"></span>
                  <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                  <span className="w-2 h-2 rounded-full bg-[#1F8E3D]"></span>
                  <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wider ml-1">Leadership</span>
                </div>
              </div>
            </div>

            {/* Right: Founder's Story & Quotes */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF7A00] bg-orange-50 px-3.5 py-1 rounded-full border border-orange-100">
                  Founder
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-gray-900">
                  Veer Singh
                </h2>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  Founder & Chief Executive
                </p>
              </div>

              {/* Quote Block */}
              <div className="border-l-4 border-[#FF7A00] pl-4 sm:pl-5 py-1">
                <p className="text-lg sm:text-xl font-serif italic text-gray-900 leading-snug">
                  “India is not just a land of history and culture. To succeed in the future, it must invest in its children.”
                </p>
              </div>

              {/* Founder Narrative */}
              <div className="space-y-3 text-sm sm:text-base text-gray-600 leading-relaxed font-normal">
                <p>
                  I started BHS Foundation with a clear vision: every child deserves a fair chance in life, regardless of where they were born. While economic growth is essential, social empowerment must run parallel.
                </p>
                <p>
                  Through BHS Foundation, we want to address issues of quality education, nutrition, healthcare, and digital empowerment under one umbrella. Our team works tirelessly on the ground with village communities.
                </p>
                <p className="font-semibold text-gray-900">
                  We invite you to join hands with us.
                </p>
              </div>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#FF7A00] flex items-center justify-center flex-shrink-0 font-bold text-xs">
                    01
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900 uppercase">Direct Impact</div>
                    <div className="text-xs text-gray-500 mt-0.5">Transparent, village-level work without intermediaries</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#1F8E3D] flex items-center justify-center flex-shrink-0 font-bold text-xs">
                    02
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900 uppercase">Registered NGO</div>
                    <div className="text-xs text-gray-500 mt-0.5">Certified under Section 80G and 12A of Income Tax</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center flex-shrink-0 font-bold text-xs">
                    03
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900 uppercase">Grassroots Focus</div>
                    <div className="text-xs text-gray-500 mt-0.5">Working directly with schools, teachers and families</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center flex-shrink-0 font-bold text-xs">
                    04
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-900 uppercase">Scalable Vision</div>
                    <div className="text-xs text-gray-500 mt-0.5">Expanding reach to touch 100,000+ lives across 20+ states</div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR VISION & WHAT DRIVES US */}
      <section className="py-16 sm:py-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            
            {/* Card 1: Our Vision */}
            <div className="md:col-span-4 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF7A00] bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                  Our Vision
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mt-4 leading-tight">
                  Har Bachhe Ka <span className="text-[#FF7A00]">Dream</span> Pura Ho.
                </h3>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed font-normal">
                  We believe no child's future should be limited by their socio-economic circumstances. Our vision is a self-reliant India where every young dreamer has the tools, the nutrition, and the mentorship to achieve greatness.
                </p>
              </div>

              {/* Stylized background watermark of India Gate / Monument */}
              <div className="pt-8 opacity-25">
                <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
                  <path d="M20 110 H180 M40 110 V50 H60 V110 M140 110 V50 H160 V110 M40 50 H160 M50 50 V30 H150 V50 M70 110 C70 80, 130 80, 130 110" stroke="#FF7A00" strokeWidth="3" />
                </svg>
              </div>
            </div>

            {/* Card 2: Center Photo (Child Writing in Class) */}
            <div className="md:col-span-4 rounded-3xl overflow-hidden shadow-md border-2 border-white relative min-h-[300px] group">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop"
                alt="Student writing in classroom"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs font-semibold bg-black/40 backdrop-blur-sm px-3 py-1 rounded-md inline-block">
                  Hope In Every Page
                </div>
              </div>
            </div>

            {/* Card 3: What Drives Us (Dark Card) */}
            <div className="md:col-span-4 bg-[#121417] text-white rounded-3xl p-8 shadow-xl flex flex-col justify-between border border-gray-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-orange-400 bg-white/10 px-3 py-1 rounded-full">
                  What Drives Us
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-4 leading-tight">
                  Every child.<br />
                  Every dream.<br />
                  Every chance.
                </h3>

                <ul className="mt-6 space-y-3 text-sm text-gray-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>12-Grade holistic education support</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Daily hot nutritious mid-day meals</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Full health screening & pediatric care</span>
                  </li>
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={onOpenDonate}
                  className="w-full bg-[#FF7A00] hover:bg-[#E65D00] text-white text-xs font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2 uppercase tracking-wider"
                >
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>Support Our Programs</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. FOUR PILLARS */}
      <section className="py-16 sm:py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF7A00] bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
              Our Pillars
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-gray-900">
              Holistic Growth Strategy
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-xs hover:shadow-card transition-all">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#FF7A00] mb-4">
                <BookOpen className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-serif font-bold text-gray-900 mb-2">Education</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Foundational learning, school kits, digital tablets, and remedial tutoring for out-of-school kids.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-xs hover:shadow-card transition-all">
              <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-500 mb-4">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-serif font-bold text-gray-900 mb-2">Health</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Regular pediatric checkups, vision tests, maternal health advisory, and clean sanitation drives.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-xs hover:shadow-card transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 mb-4">
                <Utensils className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-serif font-bold text-gray-900 mb-2">Nutrition</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Daily fortified mid-day meals and micro-nutrient powders combatting childhood malnutrition.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-xs hover:shadow-card transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-[#1F8E3D] mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-serif font-bold text-gray-900 mb-2">Empowerment</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Skill workshops, vocational guidance, self-defense, and career mentorship for teenage girls.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. STATS & IMPACT OVERVIEW */}
      <section className="py-14 sm:py-16 bg-[#FAFAFA] border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            
            {/* 4 Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 flex-1">
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">12,500+</div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider mt-1">
                  Students Educated
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-[#FF7A00]">8,400+</div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider mt-1">
                  Meals Daily
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">35+</div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider mt-1">
                  Learning Centers
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-serif font-bold text-[#1F8E3D]">280+</div>
                <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider mt-1">
                  Health Camps
                </div>
              </div>
            </div>

            {/* Children holding flags thumbnail */}
            <div className="w-full sm:w-auto flex-shrink-0">
              <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white w-full sm:w-64 h-32">
                <img
                  src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=600&auto=format&fit=crop"
                  alt="Students holding Indian flag"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION - JOIN OUR MISSION */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#121417] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-400 bg-white/10 px-3 py-1 rounded-full">
                Join our mission
              </span>
              <h3 className="text-2xl sm:text-4xl font-serif font-bold mt-3 text-white">
                Together, we can build a better India.
              </h3>
              <p className="text-sm text-gray-400 mt-2 max-w-lg">
                Your partnership fuels transparent, lasting transformation for young lives across rural and urban India.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenDonate}
                className="bg-[#FF7A00] hover:bg-[#E65D00] text-white text-sm font-bold px-7 py-3.5 rounded-xl transition-all shadow-md"
              >
                DONATE NOW
              </button>
              <button
                onClick={onOpenVolunteer}
                className="bg-[#1F8E3D] hover:bg-[#187532] text-white text-sm font-bold px-7 py-3.5 rounded-xl transition-all shadow-md"
              >
                VOLUNTEER
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
