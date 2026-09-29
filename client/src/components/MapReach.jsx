import React, { useState } from 'react';
import { GraduationCap, Utensils, HeartHandshake, MapPin } from 'lucide-react';

const stats = [
  {
    id: 1,
    value: '50+',
    label: 'Children Educated',
    icon: GraduationCap,
    color: 'text-[#FF7A00]',
    bgColor: 'bg-orange-50',
  },
  {
    id: 2,
    value: '70+',
    label: 'Meals Provided Daily',
    icon: Utensils,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
  {
    id: 3,
    value: '20+',
    label: 'Healthcare Camps Held',
    icon: HeartHandshake,
    color: 'text-rose-500',
    bgColor: 'bg-rose-50',
  },
  {
    id: 4,
    value: '2+',
    label: 'States Actively Covered',
    icon: MapPin,
    color: 'text-[#1F8E3D]',
    bgColor: 'bg-emerald-50',
  },
];

const statePins = [
  { id: 'delhi', name: 'Delhi NCR', top: '27%', left: '36%', centers: 8, children: '6,200+' },
  { id: 'up', name: 'Uttar Pradesh', top: '35%', left: '46%', centers: 14, children: '12,500+' },
  { id: 'rajasthan', name: 'Rajasthan', top: '34%', left: '24%', centers: 9, children: '7,400+' },
  { id: 'bihar', name: 'Bihar', top: '38%', left: '60%', centers: 11, children: '9,100+' },
  { id: 'assam', name: 'Assam & Northeast', top: '36%', left: '84%', centers: 6, children: '4,200+' },
  { id: 'wb', name: 'West Bengal', top: '47%', left: '68%', centers: 7, children: '5,800+' },
  { id: 'mp', name: 'Madhya Pradesh', top: '46%', left: '38%', centers: 10, children: '6,900+' },
  { id: 'gujarat', name: 'Gujarat', top: '46%', left: '16%', centers: 6, children: '4,500+' },
  { id: 'mh', name: 'Maharashtra', top: '56%', left: '28%', centers: 12, children: '8,200+' },
  { id: 'odisha', name: 'Odisha', top: '54%', left: '58%', centers: 6, children: '4,100+' },
  { id: 'kt', name: 'Karnataka', top: '72%', left: '32%', centers: 8, children: '5,300+' },
  { id: 'tn', name: 'Tamil Nadu', top: '82%', left: '38%', centers: 5, children: '3,800+' },
];

export default function MapReach() {
  const [selectedPin, setSelectedPin] = useState(statePins[1]); // Default UP

  return (
    <section className="py-16 sm:py-24 bg-[#FAFAFA] relative overflow-hidden">
      
      {/* Decorative vertical saffron ribbon on the far left (as seen in image 2) */}
      <div 
        className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-b from-[#FFA726] via-[#FF7A00] to-[#E65100] opacity-90 hidden lg:block"
        aria-hidden="true"
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pl-6 sm:pl-10 lg:pl-16 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and 4 Metrics */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF7A00] bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-100">
                Nationwide Presence
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#111827] leading-[1.16]">
                We are always where others{' '}
                <span className="text-[#FF7A00]">need help.</span>
              </h2>
              <p className="mt-4 text-base text-gray-600 leading-relaxed font-normal">
                Our outreach models break geographical barriers to bring educational infrastructure, preventive healthcare, and nutrition to remote hamlets, tribal belts, and urban slums across India.
              </p>
            </div>

            {/* 4 Metrics with large numbers and icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {stats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={stat.id}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div>
                      <div className="text-2xl font-serif font-bold text-gray-900 leading-none">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 font-medium mt-1">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Active state preview card */}
            {selectedPin && (
              <div className="p-4 rounded-xl bg-orange-50/90 border border-orange-200/80 flex items-center justify-between shadow-xs transition-all">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#E65100]">
                    Selected Region
                  </div>
                  <div className="text-base font-bold text-gray-900">
                    {selectedPin.name}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs font-medium text-gray-700">
                  <span className="bg-white px-3 py-1 rounded-lg shadow-xs border border-orange-100">
                    🏫 {selectedPin.centers} Centers
                  </span>
                  <span className="bg-white px-3 py-1 rounded-lg shadow-xs border border-orange-100">
                    👧 {selectedPin.children} Impacted
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Authentic India Map with interactive pin markers */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            <div className="relative w-full max-w-[480px] aspect-[1/1.08] bg-white rounded-3xl p-4 sm:p-6 shadow-card border border-gray-100 flex items-center justify-center overflow-hidden">
              
              {/* Orange India Map */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src="/orange-india-map.png"
                  alt="BHS Foundation Nationwide Presence Map"
                  className="w-full h-full object-contain filter drop-shadow-md select-none pointer-events-none"
                />

                {/* Location Pins across Indian States */}
                {statePins.map((pin) => {
                  const isSelected = selectedPin?.id === pin.id;
                  return (
                    <button
                      key={pin.id}
                      onClick={() => setSelectedPin(pin)}
                      style={{ top: pin.top, left: pin.left }}
                      title={`${pin.name}: ${pin.centers} Centers`}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 z-20 cursor-pointer ${
                        isSelected
                          ? 'bg-black text-white p-2 scale-125 shadow-xl ring-4 ring-orange-300 z-30'
                          : 'bg-white text-[#FF7A00] p-1.5 shadow-md border-2 border-white hover:scale-110 hover:shadow-lg'
                      }`}
                    >
                      <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'fill-[#FF7A00]'}`} />
                    </button>
                  );
                })}

              </div>

              {/* Map watermark overlay */}
              <div className="absolute bottom-4 left-6 text-left pointer-events-none">
                <span className="text-[11px] font-bold text-gray-700 uppercase tracking-widest bg-white/80 px-2 py-0.5 rounded backdrop-blur-xs">
                  18 States · 100+ Centers
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
