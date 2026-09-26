import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, BookOpen, Sparkles } from 'lucide-react';
import { api } from '../services/api';

export default function Stories({ onSelectStory }) {
  const [stories, setStories] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchStories() {
      const res = await api.getStories();
      if (res && res.data) {
        setStories(res.data);
      }
    }
    fetchStories();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, stories.length - 3) : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= stories.length - 3 ? 0 : prev + 1));
  };

  return (
    <section id="stories" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Slider Arrows */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF7A00] bg-orange-50 px-3.5 py-1.5 rounded-full border border-orange-100">
              Real Lives Changed
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#111827] leading-[1.16]">
              Learn <span className="text-[#FF7A00]">the stories</span> of those we've already helped
            </h2>
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous Stories"
              className="w-11 h-11 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-700 transition-colors shadow-sm active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Stories"
              className="w-11 h-11 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-700 transition-colors shadow-sm active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Stories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story._id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:shadow-card flex flex-col text-left cursor-pointer"
              onClick={() => onSelectStory && onSelectStory(story)}
            >
              {/* Story Photo */}
              <div className="relative aspect-[16/11] overflow-hidden bg-gray-100">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-sm">
                  {story.category}
                </div>
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Story Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-[#FF7A00] transition-colors mb-2.5">
                    {story.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed font-normal">
                    {story.summary}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold">
                  <span className="text-gray-500">{story.location}</span>
                  <span className="text-[#FF7A00] group-hover:underline flex items-center gap-1">
                    Read Story →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
