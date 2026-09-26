import React from 'react';
import { X, CheckCircle2, Download, Printer, ShieldCheck } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function ReceiptModal({ isOpen, onClose, donationData }) {
  if (!isOpen || !donationData) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 my-8 text-left">
        
        {/* Modal Top Bar */}
        <div className="p-4 bg-emerald-50 border-b border-emerald-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Contribution Confirmed
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center text-gray-500"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Printable Receipt Card */}
        <div id="tax-receipt" className="p-6 sm:p-8 space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between border-b border-gray-100 pb-5">
            <div>
              <BrandLogo showText={true} />
              <p className="text-[11px] text-gray-500 mt-2">
                Reg. No: 12A/80G/CLB-2024/9871 <br />
                NITI Aayog Darpan ID: DL/2023/0384729
              </p>
            </div>
            <div className="text-right">
              <span className="inline-block px-3 py-1 bg-orange-100 text-[#E65100] text-[11px] font-bold rounded-md uppercase">
                Section 80G Receipt
              </span>
              <p className="text-xs text-gray-500 mt-1 font-mono">
                {donationData.transactionId || 'TXN-CLB-998811'}
              </p>
            </div>
          </div>

          {/* Acknowledgement Statement */}
          <div className="space-y-1 text-sm text-gray-700">
            <p className="font-serif text-lg font-bold text-gray-900">
              Receipt of Voluntary Contribution
            </p>
            <p className="text-xs text-gray-500">
              Issued to <span className="font-semibold text-gray-900">{donationData.donorName}</span>
              {donationData.panNumber && <span> (PAN: {donationData.panNumber})</span>}
            </p>
          </div>

          {/* Table / Details */}
          <div className="rounded-xl border border-gray-200 overflow-hidden text-xs">
            <div className="grid grid-cols-2 bg-gray-50 p-2.5 font-bold text-gray-600 border-b border-gray-200">
              <span>Description</span>
              <span className="text-right">Amount (INR)</span>
            </div>
            <div className="grid grid-cols-2 p-3 text-gray-800 border-b border-gray-100">
              <div>
                <p className="font-semibold text-gray-900 capitalize">
                  {donationData.cause || 'General Child Welfare'} Program
                </p>
                <p className="text-[11px] text-gray-500">
                  Voluntary donation eligible for 50% deduction under Section 80G
                </p>
              </div>
              <div className="text-right font-bold text-sm text-gray-900 self-center">
                ₹{Number(donationData.amount).toLocaleString('en-IN')}
              </div>
            </div>
            <div className="grid grid-cols-2 p-3 bg-orange-50/50 font-bold text-gray-900">
              <span>Total Donated</span>
              <span className="text-right text-base text-[#FF7A00]">
                ₹{Number(donationData.amount).toLocaleString('en-IN')}
              </span>
            </div>
          </div>

          {/* Metadata */}
          <div className="grid grid-cols-2 gap-4 text-[11px] text-gray-500 pt-2 border-t border-gray-100">
            <div>
              <span className="font-semibold text-gray-700">Date of Transaction:</span>{' '}
              {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
            </div>
            <div>
              <span className="font-semibold text-gray-700">Payment Status:</span>{' '}
              <span className="text-emerald-600 font-bold">Captured & Verified</span>
            </div>
          </div>

          {/* Stamp & Verification */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span>Digitally signed & authorized NGO document.</span>
            </div>
            <div className="text-center">
              <div className="w-24 border-b border-gray-400 mb-1"></div>
              <span className="text-[10px] text-gray-400 font-medium">Authorized Signatory</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-end gap-3 pt-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Receipt</span>
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-semibold text-white bg-black hover:bg-neutral-800 rounded-lg transition-colors"
            >
              Done
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
