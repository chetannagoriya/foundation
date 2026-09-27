import React from 'react';
import BrandLogo from './BrandLogo';
import { Heart } from 'lucide-react';

export default function Footer({ onOpenDonate, onNavigate }) {
  const links = [
    { label: 'About Us', page: 'about', path: '/about' },
    { label: 'Our Work', page: 'home', hash: '#pillars' },
    { label: 'Stories', page: 'home', hash: '#stories' },
    { label: 'Get Involved', page: 'home', hash: '#get-involved' },
    { label: 'Contact', page: 'contact', path: '/contact' },
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    if (link.page === 'about') {
      if (onNavigate) onNavigate('about');
    } else if (link.page === 'contact') {
      if (onNavigate) onNavigate('contact');
    } else {
      if (onNavigate) onNavigate('home');
      setTimeout(() => {
        if (link.hash) {
          const el = document.querySelector(link.hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 80);
    }
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-8 border-b border-gray-100 gap-6">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigate) onNavigate('home');
            }}
            className="hover:opacity-90 transition-opacity cursor-pointer"
          >
            <BrandLogo />
          </a>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.path || link.hash || '/'}
                onClick={(e) => handleLinkClick(e, link)}
                className="text-sm font-medium text-gray-700 hover:text-[#FF7A00] transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Donate button */}
          <button
            onClick={onOpenDonate}
            className="bg-black hover:bg-neutral-800 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow flex items-center gap-2"
          >
            <Heart className="w-4 h-4 text-orange-400 fill-orange-400" />
            <span>Donate Now</span>
          </button>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-600 gap-4">
          <p>© 2026 BHS Foundation. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('privacy');
              }}
              className="hover:text-gray-900 transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <span className="text-gray-300">•</span>
            <a href="#terms" className="hover:text-gray-900 transition-colors">
              Terms & Conditions
            </a>
            <span className="text-gray-300">•</span>
            <span className="text-emerald-600 font-medium">80G / 12A Certified NGO</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
