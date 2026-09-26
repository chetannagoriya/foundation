const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema(
  {
    donorName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    panNumber: {
      type: String,
      trim: true,
      uppercase: true,
    },
    amount: {
      type: Number,
      required: true,
      min: [50, 'Minimum donation is ₹50'],
    },
    frequency: {
      type: String,
      enum: ['one-time', 'monthly', 'annually'],
      default: 'one-time',
    },
    cause: {
      type: String,
      enum: ['general', 'education', 'health', 'nutrition', 'empowerment'],
      default: 'general',
    },
    paymentStatus: {
      type: String,
      enum: ['success', 'pending', 'failed'],
      default: 'success',
    },
    transactionId: {
      type: String,
      required: true,
      unique: true,
    },
    taxExemptionReceipt: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Donation', donationSchema);
