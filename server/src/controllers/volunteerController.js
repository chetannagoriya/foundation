const Volunteer = require('../models/Volunteer');
const { getDBStatus } = require('../config/db');

let memoryVolunteers = [
  {
    _id: 'vol_init_1',
    fullName: 'Pooja Iyer',
    email: 'pooja.i@example.com',
    phone: '+91 9898989898',
    city: 'Mumbai',
    areaOfInterest: ['Teaching & Education', 'Digital Literacy'],
    availability: 'weekends',
    message: 'Eager to teach mathematics to primary students on weekends.',
    createdAt: new Date(),
  },
];

exports.registerVolunteer = async (req, res) => {
  try {
    const { fullName, email, phone, city, areaOfInterest, availability, message } = req.body;

    if (!fullName || !email || !phone || !city) {
      return res.status(400).json({ success: false, message: 'Please provide all required fields' });
    }

    const volunteerData = {
      fullName,
      email,
      phone,
      city,
      areaOfInterest: areaOfInterest || ['Teaching & Education'],
      availability: availability || 'weekends',
      message: message || '',
      status: 'pending',
      createdAt: new Date(),
    };

    let saved;
    if (getDBStatus()) {
      saved = await Volunteer.create(volunteerData);
    } else {
      saved = { ...volunteerData, _id: 'vol_mem_' + Date.now() };
      memoryVolunteers.unshift(saved);
    }

    res.status(201).json({
      success: true,
      message: 'Thank you for registering as a volunteer! Our coordinator will contact you shortly.',
      data: saved,
    });
  } catch (error) {
    console.error('Error registering volunteer:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.getVolunteerCount = async (req, res) => {
  try {
    const count = getDBStatus() ? await Volunteer.countDocuments() : memoryVolunteers.length;
    res.json({ success: true, count: 1250 + count });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
