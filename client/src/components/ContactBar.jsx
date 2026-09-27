import React from 'react';
import { Phone, Mail, Instagram, Facebook, Twitter, Youtube, Linkedin } from 'lucide-react';

export default function ContactBar() {
  return (
    <div id="contact" className="py-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Contact Info (Phone & Email) */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            {/* Phone */}
            <a
              href="tel:+919784626443"
              className="group flex items-center gap-3 text-gray-700 hover:text-[#FF7A00] transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FF7A00] group-hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[11px] text-gray-700 uppercase font-semibold">Call Desk</div>
                <div className="text-sm font-bold text-gray-900">+91 9784626443</div>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:bhs.foundation@gmail.com"
              className="group flex items-center gap-3 text-gray-700 hover:text-[#FF7A00] transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-[#1F8E3D] group-hover:scale-105 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[11px] text-gray-700 uppercase font-semibold">Email Us</div>
                <div className="text-sm font-bold text-gray-900">bhs.foundation@gmail.com</div>
              </div>
            </a>
          </div>

          {/* Right: Social Media Links */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-600 hidden sm:inline">
              Follow Us:
            </span>
            <div className="flex items-center gap-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-gray-50 hover:bg-orange-500 hover:text-white text-gray-600 flex items-center justify-center transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-full bg-gray-50 hover:bg-orange-500 hover:text-white text-gray-600 flex items-center justify-center transition-all duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/celebso_foundationn?stkn=MTZoZ2xlczFnajFlYQ%3D%3D"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-gray-50 hover:bg-orange-500 hover:text-white text-gray-600 flex items-center justify-center transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-gray-50 hover:bg-orange-500 hover:text-white text-gray-600 flex items-center justify-center transition-all duration-200"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-gray-50 hover:bg-orange-500 hover:text-white text-gray-600 flex items-center justify-center transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
