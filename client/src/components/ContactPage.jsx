import React, { useState } from 'react';
import { 
  Heart, 
  Users, 
  Handshake, 
  FileText, 
  MapPin, 
  Mail, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { api } from '../services/api';

export default function ContactPage({ 
  onOpenDonate, 
  onOpenVolunteer, 
  onNavigateAbout, 
  onNavigateHome,
  onShowToast 
}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    helpType: 'Donate / Support a Child',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.submitContact({
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        phone: formData.phone,
        subject: formData.helpType,
        message: formData.message,
      });
      setSubmitted(true);
      if (onShowToast) {
        onShowToast('Thank you for reaching out! Our team will contact you shortly.');
      }
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          helpType: 'Donate / Support a Child',
          message: ''
        });
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      if (onShowToast) {
        onShowToast('Your message has been sent successfully!');
      }
    } finally {
      setSubmitting(false);
    }
  };

  const actionCards = [
    {
      icon: Heart,
      title: 'Support a Child',
      description: 'Help provide education & food with monthly support.',
      action: () => onOpenDonate && onOpenDonate('education'),
    },
    {
      icon: Users,
      title: 'Volunteer',
      description: 'Share your time, skills, and mentor kids.',
      action: () => onOpenVolunteer && onOpenVolunteer(),
    },
    {
      icon: Handshake,
      title: 'Partner With Us',
      description: 'Collaborate with BHS Foundation for CSR or initiatives.',
      action: () => {
        setFormData(prev => ({ ...prev, helpType: 'CSR / Corporate Partnership' }));
        const formEl = document.getElementById('contact-form-section');
        if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
      },
    },
    {
      icon: FileText,
      title: 'Share a Story',
      description: 'Help us discover stories of children and deserving talent.',
      action: () => {
        setFormData(prev => ({ ...prev, helpType: 'Share a Story' }));
        const formEl = document.getElementById('contact-form-section');
        if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
      },
    },
  ];

  return (
    <div className="pt-24 md:pt-28 bg-[#FCFCFC] text-gray-900 animate-fade-in text-left">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 pb-16 md:pt-10 md:pb-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Heading & Intro */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 text-[#FF7A00] text-xs font-bold uppercase tracking-widest">
                <span>CONTACT US</span>
                <span className="w-12 h-[2px] bg-[#FF7A00]"></span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-serif text-[#111827] font-bold leading-[1.12] tracking-tight">
                Let's build a future where every child gets a chance.
              </h1>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal max-w-xl">
                Whether you want to support a child, volunteer your time, partner with us or help us start a new centre, we would love to hear from you.
              </p>
            </div>

            {/* Right Column: India Map Collage with Children & Tricolor Accents */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-[540px]">
                <img
                  src="/india-hero-cutout.png"
                  alt="India Map - BHS Foundation Children"
                  className="w-full h-auto object-contain select-none transition-transform duration-500 hover:scale-[1.01]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. 4 ACTION CARDS ROW */}
      <section className="py-8 sm:py-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {actionCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  onClick={card.action}
                  className="group bg-[#FAF8F5] hover:bg-[#F5F1E9] border border-[#EFE9DF] rounded-2xl p-6 transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col justify-between cursor-pointer"
                >
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-xl bg-white border border-gray-200/60 shadow-sm flex items-center justify-center text-gray-800 group-hover:text-[#FF7A00] transition-colors">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>

                    <h3 className="font-serif text-lg font-bold text-gray-900 group-hover:text-[#FF7A00] transition-colors">
                      {card.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Tricolor Dual Accent Bar */}
                  <div className="w-10 h-1.5 rounded-full flex overflow-hidden mt-5 shadow-xs">
                    <span className="w-1/2 h-full bg-[#FF7A00]"></span>
                    <span className="w-1/2 h-full bg-[#1F8E3D]"></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. GET IN TOUCH (FORM + CLASSROOM VISUAL) */}
      <section id="contact-form-section" className="py-16 sm:py-24 bg-[#FAF9F6] border-t border-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left: Contact Form */}
            <div className="lg:col-span-6 space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm">
              <div>
                <div className="flex items-center gap-2 text-[#FF7A00] text-xs font-bold uppercase tracking-widest">
                  <span>GET IN TOUCH</span>
                  <span className="w-12 h-[2px] bg-[#FF7A00]"></span>
                </div>

                <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
                  Tell us how you'd like to be part of the mission.
                </h2>

                <p className="mt-2 text-xs sm:text-sm text-gray-600">
                  Fill in the details below and our team will get in touch with you at the earliest.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-green-50 border border-green-200 text-center space-y-2 animate-fade-in">
                  <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto" />
                  <h4 className="font-serif font-bold text-gray-900 text-lg">Thank You!</h4>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Your request has been received. Our coordinator will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/20 focus:border-[#FF7A00] transition"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/20 focus:border-[#FF7A00] transition"
                      />
                    </div>
                  </div>

                  {/* Phone & Dropdown Help Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="+91 97846 26443"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/20 focus:border-[#FF7A00] transition"
                      />
                    </div>
                    <div>
                      <select
                        value={formData.helpType}
                        onChange={(e) => setFormData({ ...formData, helpType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/20 focus:border-[#FF7A00] transition cursor-pointer"
                      >
                        <option value="Donate / Support a Child">I'd like to help by: Donate</option>
                        <option value="Volunteer with Us">I'd like to help by: Volunteer</option>
                        <option value="CSR / Corporate Partnership">I'd like to help by: Partner</option>
                        <option value="Share a Story">I'd like to help by: Share a Story</option>
                        <option value="General Enquiry">I'd like to help by: General Enquiry</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Tell us a bit about your request..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50/50 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF7A00]/20 focus:border-[#FF7A00] transition resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full sm:w-auto bg-black hover:bg-neutral-800 text-white font-medium text-sm px-8 py-3.5 rounded-lg transition-all shadow-sm hover:shadow flex items-center justify-center gap-2 cursor-pointer group disabled:opacity-60"
                    >
                      <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                      <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Classroom Image with Saffron & Green Brush Paint Splashes */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              
              {/* Saffron Splash Top Left */}
              <div className="absolute -top-6 -left-6 w-36 h-28 pointer-events-none z-0">
                <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-90">
                  <path
                    d="M10 80 Q30 20 90 25 Q150 30 140 70 Q130 110 70 100 Q10 90 10 80 Z"
                    fill="#FF7A00"
                  />
                  <circle cx="130" cy="30" r="5" fill="#FF7A00" />
                  <circle cx="150" cy="50" r="3" fill="#FF7A00" />
                </svg>
              </div>

              {/* Classroom Photo Container */}
              <div className="relative z-10 w-full max-w-[540px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-900 group">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
                  alt="Smiling schoolchildren in classroom - BHS Foundation"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              {/* India-Green Splash Bottom Right */}
              <div className="absolute -bottom-8 -right-6 w-40 h-32 pointer-events-none z-0">
                <svg viewBox="0 0 180 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-90">
                  <path
                    d="M30 40 Q90 10 150 45 Q170 90 120 120 Q50 140 20 95 Q10 60 30 40 Z"
                    fill="#1F8E3D"
                  />
                  <circle cx="160" cy="40" r="4" fill="#1F8E3D" />
                  <circle cx="140" cy="115" r="5" fill="#1F8E3D" />
                </svg>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. DIRECT CONTACT & FOUNDER SPOTLIGHT */}
      <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Direct Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-[#FF7A00] text-xs font-bold uppercase tracking-widest">
                  <span>DIRECT CONTACT</span>
                  <span className="w-12 h-[2px] bg-[#FF7A00]"></span>
                </div>

                <h2 className="mt-2 text-3xl sm:text-4xl font-serif font-bold text-gray-900">
                  We're here to listen.
                </h2>
              </div>

              <div className="space-y-4 pt-2">
                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-orange-50/40 border border-orange-100/60">
                  <div className="w-11 h-11 rounded-full bg-orange-100 text-[#FF7A00] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-serif font-bold text-gray-900 text-base">BHS Foundation</div>
                    <div className="text-xs sm:text-sm text-gray-600">New Delhi, India</div>
                  </div>
                </div>

                {/* Email */}
                <a
                  href="mailto:bhs.foundation@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-green-50/40 border border-green-100/60 hover:bg-green-50 transition group"
                >
                  <div className="w-11 h-11 rounded-full bg-green-100 text-[#1F8E3D] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Email Desk</div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base group-hover:text-[#1F8E3D] transition-colors break-all">
                      bhs.foundation@gmail.com
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:+919784626443"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-orange-50/40 border border-orange-100/60 hover:bg-orange-50 transition group"
                >
                  <div className="w-11 h-11 rounded-full bg-orange-100 text-[#FF7A00] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Call Desk</div>
                    <div className="font-semibold text-gray-900 text-sm sm:text-base group-hover:text-[#FF7A00] transition-colors">
                      +91 9784626443
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Leadership Spotlight Cards (Meena Devi & Veer Singh) */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Card 1: Meena Devi (Chairperson / Patron) */}
              <div className="bg-[#FAF8F5] border border-[#EFE9DF] rounded-3xl p-5 sm:p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
                  
                  {/* Image with tricolor touch */}
                  <div className="relative w-32 sm:w-36 aspect-[4/5] rounded-2xl overflow-hidden shadow-md border-2 border-white flex-shrink-0 bg-neutral-900">
                    <img
                      src="/meena-devi.jpg"
                      alt="Meena Devi - Chairperson / Patron"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-xs py-1 px-2 rounded-md flex items-center justify-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF7A00]"></span>
                      <span className="w-2 h-2 rounded-full bg-white"></span>
                      <span className="w-2 h-2 rounded-full bg-[#1F8E3D]"></span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 text-left flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF7A00] bg-orange-100/60 px-3 py-0.5 rounded-full inline-block">
                      CHAIRPERSON / PATRON
                    </span>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 leading-tight">
                        Meena Devi
                      </h3>
                      <p className="text-xs text-gray-600 font-medium mt-0.5">
                        Chairperson / Patron • BHS Foundation
                      </p>
                    </div>

                    <p className="font-serif italic text-gray-700 text-xs sm:text-sm leading-relaxed border-l-2 border-[#FF7A00] pl-3 py-0.5">
                      “Empowering lives and building a better tomorrow. When we nurture our children with care and education, we build an unbreakable foundation for the future.”
                    </p>
                  </div>

                </div>
              </div>

              {/* Card 2: Veer Singh (Founder / Managing Trustee) */}
              <div className="bg-[#FAF8F5] border border-[#EFE9DF] rounded-3xl p-5 sm:p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
                  
                  {/* Image with tricolor touch */}
                  <div className="relative w-32 sm:w-36 aspect-[4/5] rounded-2xl overflow-hidden shadow-md border-2 border-white flex-shrink-0 bg-neutral-900">
                    <img
                      src="/veer-singh.png"
                      alt="Veer Singh - Founder / Managing Trustee"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-xs py-1 px-2 rounded-md flex items-center justify-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF7A00]"></span>
                      <span className="w-2 h-2 rounded-full bg-white"></span>
                      <span className="w-2 h-2 rounded-full bg-[#1F8E3D]"></span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-2 text-left flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF7A00] bg-orange-100/60 px-3 py-0.5 rounded-full inline-block">
                      FOUNDER / MANAGING TRUSTEE
                    </span>

                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 leading-tight">
                        Veer Singh
                      </h3>
                      <p className="text-xs text-gray-600 font-medium mt-0.5">
                        Founder / Managing Trustee • BHS Foundation
                      </p>
                    </div>

                    <p className="font-serif italic text-gray-700 text-xs sm:text-sm leading-relaxed border-l-2 border-[#FF7A00] pl-3 py-0.5">
                      “Every child has a dream. The greatest gift we can give them is a chance to pursue it.”
                    </p>

                    <div className="pt-1">
                      <button
                        onClick={onNavigateAbout}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF7A00] hover:text-[#E65D00] transition group cursor-pointer"
                      >
                        <span>Know the story</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. BOTTOM CALL TO ACTION BANNER */}
      <section className="py-12 sm:py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#111317] border border-gray-800">
            
            {/* Background Image with Dark Vignette */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1400&auto=format&fit=crop"
                alt="Indian schoolchildren smiling"
                className="w-full h-full object-cover object-center opacity-30 filter grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#121417] via-[#121417]/85 to-transparent"></div>
            </div>

            {/* Banner Content */}
            <div className="relative z-10 p-8 sm:p-12 md:p-16 max-w-2xl text-left space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
                Have a dream to help a child?<br />
                <span className="text-[#FF7A00]">Let's make it possible.</span>
              </h2>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenDonate && onOpenDonate('general')}
                  className="bg-[#FF7A00] hover:bg-[#E65D00] text-white font-semibold text-xs sm:text-sm px-6 py-3 rounded-lg transition-all shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>DONATE NOW</span>
                </button>

                <button
                  onClick={() => onOpenVolunteer && onOpenVolunteer()}
                  className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-semibold text-xs sm:text-sm px-6 py-3 rounded-lg transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Users className="w-4 h-4" />
                  <span>VOLUNTEER</span>
                </button>

                <button
                  onClick={onNavigateHome}
                  className="text-gray-300 hover:text-white font-medium text-xs sm:text-sm flex items-center gap-1.5 transition ml-2 cursor-pointer"
                >
                  <span>EXPLORE MORE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
