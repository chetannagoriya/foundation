import React, { useState } from 'react';
import { X, Heart, ShieldCheck, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { api } from '../services/api';

const PRESET_AMOUNTS = [500, 1000, 2500, 5000, 10000];

export default function DonationModal({ isOpen, onClose, onSuccess, initialCause = 'general' }) {
  const [frequency, setFrequency] = useState('one-time');
  const [selectedAmount, setSelectedAmount] = useState(2500);
  const [customAmount, setCustomAmount] = useState('');
  const [cause, setCause] = useState(initialCause);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    donorName: '',
    email: '',
    phone: '',
    panNumber: '',
  });

  if (!isOpen) return null;

  const currentAmount = customAmount ? Number(customAmount) : selectedAmount;

  const handlePresetClick = (amt) => {
    setSelectedAmount(amt);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
    if (val) setSelectedAmount(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.donorName || !formData.email || !formData.phone) {
      alert('Please fill all mandatory fields (Name, Email, Phone)');
      return;
    }

    if (!currentAmount || currentAmount < 50) {
      alert('Please enter a valid amount (minimum ₹50)');
      return;
    }

    setLoading(true);

    try {
      const payload = {
        donorName: formData.donorName,
        email: formData.email,
        phone: formData.phone,
        panNumber: formData.panNumber,
        amount: currentAmount,
        frequency,
        cause,
      };

      const result = await api.createDonation(payload);
      setLoading(false);

      if (result && result.success) {
        onClose();
        if (onSuccess) {
          onSuccess(result.data);
        }
      } else {
        alert(result?.message || 'Error processing donation');
      }
    } catch (err) {
      setLoading(false);
      alert('Failed to process donation. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 my-8">
        
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-orange-500 via-[#FF7A00] to-orange-600 p-6 text-white text-left relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-100">
            <Heart className="w-4 h-4 fill-white" />
            Make an Impact
          </div>
          <h3 className="text-2xl font-serif font-bold mt-1">Support Celebso Foundation</h3>
          <p className="text-xs text-orange-100 mt-1">
            Eligible for 50% Tax Exemption under Section 80G of Income Tax Act
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 text-left">
          
          {/* Frequency Toggle */}
          <div className="grid grid-cols-2 p-1 bg-gray-100 rounded-xl">
            <button
              type="button"
              onClick={() => setFrequency('one-time')}
              className={`py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                frequency === 'one-time'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              Give Once
            </button>
            <button
              type="button"
              onClick={() => setFrequency('monthly')}
              className={`py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                frequency === 'monthly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              <span>Give Monthly</span>
              <span className="text-[10px] bg-orange-100 text-[#E65100] px-1.5 py-0.2 rounded font-bold">2X Impact</span>
            </button>
          </div>

          {/* Amount Presets */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
              Select Amount (INR ₹)
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {PRESET_AMOUNTS.map((amt) => (
                <button
                  key={amt}
                  type="button"
                  onClick={() => handlePresetClick(amt)}
                  className={`py-2.5 px-3 rounded-xl border text-sm font-bold transition-all ${
                    selectedAmount === amt && !customAmount
                      ? 'border-[#FF7A00] bg-orange-50 text-[#E65100] shadow-xs'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700 bg-white'
                  }`}
                >
                  ₹{amt.toLocaleString('en-IN')}
                </button>
              ))}
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-xs text-gray-400 font-bold">₹</span>
                <input
                  type="text"
                  placeholder="Other"
                  value={customAmount}
                  onChange={handleCustomChange}
                  className={`w-full py-2.5 pl-7 pr-2 rounded-xl border text-sm font-bold focus:outline-none ${
                    customAmount
                      ? 'border-[#FF7A00] bg-orange-50 text-[#E65100]'
                      : 'border-gray-200 text-gray-700'
                  }`}
                />
              </div>
            </div>
            
            {/* Impact statement for selected amount */}
            <div className="mt-3 text-xs text-gray-600 bg-emerald-50 border border-emerald-100 rounded-lg p-2.5 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>
                {currentAmount >= 5000
                  ? 'Sponsors full-year education kit, uniform and meals for 2 children.'
                  : currentAmount >= 2500
                  ? 'Provides complete academic support & learning supplies for 1 child.'
                  : 'Provides 25+ nutritious fortified meals to children in remote schools.'}
              </span>
            </div>
          </div>

          {/* Cause Selector */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
              Allocate To
            </label>
            <select
              value={cause}
              onChange={(e) => setCause(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-800 focus:outline-none focus:border-[#FF7A00]"
            >
              <option value="general">Where Most Needed (General Child Welfare)</option>
              <option value="education">Education & School Kits</option>
              <option value="health">Healthcare & Pediatric Camps</option>
              <option value="nutrition">Mid-day Meals & Nutrition</option>
              <option value="empowerment">Skill Development & Girls Mentorship</option>
            </select>
          </div>

          {/* Donor Information */}
          <div className="space-y-3">
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
              Donor Information
            </label>

            <div>
              <input
                type="text"
                placeholder="Full Name *"
                required
                value={formData.donorName}
                onChange={(e) => setFormData({ ...formData, donorName: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#FF7A00]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="email"
                placeholder="Email Address *"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#FF7A00]"
              />
              <input
                type="tel"
                placeholder="Phone Number *"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#FF7A00]"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="PAN Number (Required for 80G Tax Exemption)"
                value={formData.panNumber}
                onChange={(e) => setFormData({ ...formData, panNumber: e.target.value.toUpperCase() })}
                maxLength={10}
                className="w-full px-3.5 py-2 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#FF7A00] uppercase font-mono"
              />
              <span className="text-[10px] text-gray-600 block mt-1">
                Tax exemption certificate will be issued to this PAN
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#FF7A00] hover:bg-[#E65D00] text-white py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Processing Secure Contribution...</span>
              </>
            ) : (
              <>
                <Heart className="w-4 h-4 fill-white" />
                <span>Proceed to Donate ₹{currentAmount?.toLocaleString('en-IN') || 0}</span>
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-4 text-[11px] text-gray-600">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              256-bit Encrypted
            </span>
            <span>•</span>
            <span>UPI / Card / NetBanking</span>
            <span>•</span>
            <span>Instant 80G Receipt</span>
          </div>

        </form>

      </div>
    </div>
  );
}
