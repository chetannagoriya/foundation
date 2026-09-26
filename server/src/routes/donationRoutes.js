const express = require('express');
const router = express.Router();
const { createDonation, getDonationStats, getRecentDonations } = require('../controllers/donationController');

router.post('/', createDonation);
router.get('/stats', getDonationStats);
router.get('/recent', getRecentDonations);

module.exports = router;
