const Donation = require('../models/Donation');
const { getDBStatus } = require('../config/db');

// In-memory fallback repository if MongoDB is not connected
let memoryDonations = [
  {
    _id: 'don_init_1',
    donorName: 'Rahul Sharma',
    email: 'rahul.s@example.com',
    phone: '+91 9820011223',
    panNumber: 'ABCDE1234F',
    amount: 5000,
    frequency: 'one-time',
    cause: 'education',
    paymentStatus: 'success',
    transactionId: 'TXN-CLB-984321',
    taxExemptionReceipt: true,
    createdAt: new Date(Date.now() - 3600000 * 5),
  },
  {
    _id: 'don_init_2',
    donorName: 'Ananya Deshmukh',
    email: 'ananya.d@example.com',
    phone: '+91 9711223344',
    panNumber: 'PQRST5678G',
    amount: 2500,
    frequency: 'monthly',
    cause: 'nutrition',
    paymentStatus: 'success',
    transactionId: 'TXN-CLB-984322',
    taxExemptionReceipt: true,
    createdAt: new Date(Date.now() - 3600000 * 12),
  },
  {
    _id: 'don_init_3',
    donorName: 'Vikram Mehta',
    email: 'v.mehta@example.com',
    phone: '+91 9845012345',
    panNumber: 'LMNOP9012K',
    amount: 10000,
    frequency: 'one-time',
    cause: 'health',
    paymentStatus: 'success',
    transactionId: 'TXN-CLB-984323',
    taxExemptionReceipt: true,
    createdAt: new Date(Date.now() - 3600000 * 24),
  }
];

// @desc Process new donation & issue 80G receipt
// @route POST /api/donations
exports.createDonation = async (req, res) => {
  try {
    const { donorName, email, phone, panNumber, amount, frequency, cause } = req.body;

    if (!donorName || !email || !phone || !amount) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }

    const transactionId = `TXN-CLB-${Math.floor(100000 + Math.random() * 900000)}`;

    const donationData = {
      donorName,
      email,
      phone,
      panNumber: panNumber || '',
      amount: Number(amount),
      frequency: frequency || 'one-time',
      cause: cause || 'general',
      paymentStatus: 'success',
      transactionId,
      taxExemptionReceipt: true,
      createdAt: new Date(),
    };

    let savedDonation;
    if (getDBStatus()) {
      savedDonation = await Donation.create(donationData);
    } else {
      savedDonation = { ...donationData, _id: 'mem_' + Date.now() };
      memoryDonations.unshift(savedDonation);
    }

    res.status(201).json({
      success: true,
      message: 'Donation processed successfully. Thank you for empowering a child!',
      data: savedDonation,
    });
  } catch (error) {
    console.error('Error creating donation:', error);
    res.status(500).json({ success: false, message: 'Server error while processing donation' });
  }
};

// @desc Get donation statistics
// @route GET /api/donations/stats
exports.getDonationStats = async (req, res) => {
  try {
    let totalRaised = 0;
    let totalDonors = 0;

    if (getDBStatus()) {
      const stats = await Donation.aggregate([
        { $match: { paymentStatus: 'success' } },
        {
          $group: {
            _id: null,
            totalRaised: { $sum: '$amount' },
            count: { $sum: 1 },
          },
        },
      ]);
      totalRaised = stats.length > 0 ? stats[0].totalRaised : 17500;
      totalDonors = stats.length > 0 ? stats[0].count : 3;
    } else {
      totalRaised = memoryDonations.reduce((acc, curr) => acc + curr.amount, 0);
      totalDonors = memoryDonations.length;
    }

    // Add baseline benchmark for display
    const benchmarkRaised = 2485000 + totalRaised;
    const benchmarkDonors = 4320 + totalDonors;

    res.json({
      success: true,
      data: {
        totalRaised: benchmarkRaised,
        totalDonors: benchmarkDonors,
        childrenSupported: 52000,
        activeStates: 18,
      },
    });
  } catch (error) {
    console.error('Error fetching donation stats:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// @desc Get recent donations list
// @route GET /api/donations/recent
exports.getRecentDonations = async (req, res) => {
  try {
    let recent = [];
    if (getDBStatus()) {
      recent = await Donation.find({ paymentStatus: 'success' })
        .sort({ createdAt: -1 })
        .limit(5)
        .select('donorName amount cause createdAt');
    } else {
      recent = memoryDonations.slice(0, 5).map(d => ({
        donorName: d.donorName,
        amount: d.amount,
        cause: d.cause,
        createdAt: d.createdAt,
      }));
    }

    res.json({ success: true, data: recent });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
