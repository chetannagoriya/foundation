import React from 'react';
import { X, MapPin, Heart, Sparkles, Calendar, BookOpen } from 'lucide-react';

export default function StoryDetailModal({ isOpen, onClose, story, onOpenDonate }) {
  if (!isOpen || !story) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 my-8 text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="px-3 py-1 rounded-full bg-orange-500/90 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              {story.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mt-2 text-white">
              {story.title}
            </h3>
            <div className="flex items-center gap-4 text-xs text-gray-300 mt-2">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-orange-400" />
                {story.location}
              </span>
              <span>•</span>
              <span>Child Age: {story.age} years</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              Background & Struggle
            </h4>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              {story.summary}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
              Transformation & Progress
            </h4>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              {story.fullStory}
            </p>
          </div>

          {story.impactAchieved && (
            <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-[#E65100] uppercase tracking-wider">
                  Impact Achieved
                </div>
                <div className="text-sm font-semibold text-gray-800 mt-0.5">
                  {story.impactAchieved}
                </div>
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">
            <span className="text-xs text-gray-500">
              You can help sponsor a child like {story.childName} today.
            </span>
            <button
              onClick={() => {
                onClose();
                onOpenDonate && onOpenDonate();
              }}
              className="bg-black hover:bg-zinc-800 text-white font-medium text-xs sm:text-sm px-6 py-2.5 rounded-full flex items-center gap-2 shadow-sm transition-all"
            >
              <Heart className="w-4 h-4 text-orange-400 fill-orange-400" />
              <span>Sponsor a Child</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
