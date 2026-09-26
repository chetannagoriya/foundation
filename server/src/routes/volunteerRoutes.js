const express = require('express');
const router = express.Router();
const { registerVolunteer, getVolunteerCount } = require('../controllers/volunteerController');

router.post('/', registerVolunteer);
router.get('/count', getVolunteerCount);

module.exports = router;
