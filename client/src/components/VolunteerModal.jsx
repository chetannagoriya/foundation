import React, { useState } from 'react';
import { X, UserCheck, CheckCircle, Loader2 } from 'lucide-react';
import { api } from '../services/api';

const SKILLS_OPTIONS = [
  'Teaching & Academic Tutoring',
  'Digital Literacy & Coding',
  'Nutrition & Food Distribution',
  'Healthcare & Medical Support',
  'Event Organization & Logistics',
  'Content & Photography',
];

export default function VolunteerModal({ isOpen, onClose, onShowToast }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    availability: 'weekends',
    message: '',
    areaOfInterest: ['Teaching & Academic Tutoring'],
  });

  if (!isOpen) return null;

  const toggleSkill = (skill) => {
    setFormData((prev) => {
      const exists = prev.areaOfInterest.includes(skill);
      const newSkills = exists
        ? prev.areaOfInterest.filter((s) => s !== skill)
        : [...prev.areaOfInterest, skill];
      return { ...prev, areaOfInterest: newSkills.length > 0 ? newSkills : [skill] };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.registerVolunteer(formData);
      setLoading(false);
      onClose();
      if (onShowToast) {
        onShowToast(res?.message || 'Thank you for volunteering! Our coordinator will contact you.');
      }
    } catch (err) {
      setLoading(false);
      alert('Error registering. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 my-8 text-left">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-[#1F8E3D] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-100">
            <UserCheck className="w-4 h-4" />
            Join Our Movement
          </div>
          <h3 className="text-2xl font-serif font-bold mt-1">Become a Volunteer</h3>
          <p className="text-xs text-emerald-100 mt-1">
            Empower young minds by dedicating your time, skills, and energy.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Aditi Sharma"
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald-600"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="aditi@example.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald-600"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                Phone *
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 9876543210"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald-600"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                City / Location *
              </label>
              <input
                type="text"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="e.g. Mumbai, Pune, Delhi"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald-600"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
                Availability
              </label>
              <select
                value={formData.availability}
                onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm bg-white focus:outline-none focus:border-emerald-600"
              >
                <option value="weekends">Weekends Only</option>
                <option value="weekdays">Weekdays</option>
                <option value="flexible">Flexible / Remote</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
              Areas You Wish to Support
            </label>
            <div className="flex flex-wrap gap-2">
              {SKILLS_OPTIONS.map((skill) => {
                const selected = formData.areaOfInterest.includes(skill);
                return (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => toggleSkill(skill)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                      selected
                        ? 'bg-emerald-50 border-emerald-500 text-emerald-800 font-semibold'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1.5">
              Short Note or Past Experience (Optional)
            </label>
            <textarea
              rows={2}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us a little about yourself..."
              className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald-600"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1F8E3D] hover:bg-[#187532] text-white py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Registering...</span>
              </>
            ) : (
              <>
                <CheckCircle className="w-4 h-4" />
                <span>Submit Volunteer Application</span>
              </>
            )}
          </button>
        </form>

      </div>
    </div>
  );
}
