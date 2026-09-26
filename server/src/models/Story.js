const mongoose = require('mongoose');

const storySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    childName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    location: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      required: true,
    },
    fullStory: {
      type: String,
      required: true,
    },
    impactAchieved: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Story', storySchema);
