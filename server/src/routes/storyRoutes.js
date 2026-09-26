const express = require('express');
const router = express.Router();
const { getAllStories } = require('../controllers/storyController');

router.get('/', getAllStories);

module.exports = router;
