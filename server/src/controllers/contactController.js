const Contact = require('../models/Contact');
const { getDBStatus } = require('../config/db');

let memoryContacts = [];

exports.submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Please provide name, email, and message' });
    }

    const contactData = {
      name,
      email,
      subject: subject || 'General Inquiry',
      message,
      createdAt: new Date(),
    };

    let saved;
    if (getDBStatus()) {
      saved = await Contact.create(contactData);
    } else {
      saved = { ...contactData, _id: 'cnt_' + Date.now() };
      memoryContacts.unshift(saved);
    }

    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully. We will get back to you soon!',
      data: saved,
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
