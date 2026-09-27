import React, { useState, useEffect } from 'react';
import BrandLogo from './BrandLogo';
import { Menu, X, Heart } from 'lucide-react';

export default function Navbar({ onOpenDonate, onOpenVolunteer, currentPage = 'home', onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Us', page: 'about', path: '/about' },
    { label: 'Our Work', page: 'home', hash: '#pillars' },
    { label: 'Stories', page: 'home', hash: '#stories' },
    { label: 'Get Involved', page: 'home', hash: '#get-involved' },
    { label: 'Contact', page: 'contact', path: '/contact' },
  ];

  const handleLinkClick = (e, link) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (link.page === 'about') {
      if (onNavigate) onNavigate('about');
    } else if (link.page === 'contact') {
      if (onNavigate) onNavigate('contact');
    } else {
      if (currentPage !== 'home') {
        if (onNavigate) onNavigate('home');
        setTimeout(() => {
          if (link.hash) {
            const el = document.querySelector(link.hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 80);
      } else {
        if (link.hash) {
          const el = document.querySelector(link.hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (onNavigate) onNavigate('home');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-white/90 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="hover:opacity-95 transition-opacity cursor-pointer"
          >
            <BrandLogo />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = (link.page === 'about' && currentPage === 'about');
              return (
                <a
                  key={link.label}
                  href={link.path || link.hash || '/'}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`text-sm font-medium transition-colors relative py-1 cursor-pointer ${
                    isActive
                      ? 'text-[#FF7A00] font-bold'
                      : 'text-gray-700 hover:text-[#FF7A00]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF7A00] rounded-full"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenDonate}
              className="bg-black hover:bg-zinc-800 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
            >
              <Heart className="w-4 h-4 text-orange-400 fill-orange-400" />
              <span>Donate Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenDonate}
              className="bg-black text-white text-xs font-medium px-4 py-2 rounded-full"
            >
              Donate
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-black focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-6 space-y-4 shadow-xl animate-fade-in text-left">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.path || link.hash || '/'}
                onClick={(e) => handleLinkClick(e, link)}
                className={`text-base font-medium py-2 border-b border-gray-50 ${
                  (link.page === 'about' && currentPage === 'about')
                    ? 'text-[#FF7A00] font-bold'
                    : 'text-gray-800 hover:text-[#FF7A00]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDonate();
              }}
              className="w-full bg-black text-white py-3 rounded-xl font-medium text-sm text-center shadow-md flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 text-orange-400 fill-orange-400" />
              Donate Now
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVolunteer();
              }}
              className="w-full bg-gray-100 text-gray-800 py-3 rounded-xl font-medium text-sm text-center hover:bg-gray-200 transition-colors"
            >
              Join as Volunteer
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
