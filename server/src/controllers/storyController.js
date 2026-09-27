const Story = require('../models/Story');
const { getDBStatus } = require('../config/db');

// Baseline stories matching the exact visual cards in the UI
const defaultStories = [
  {
    _id: 'story-1',
    title: "Aarav's Journey to School",
    category: 'Education',
    childName: 'Aarav Sharma',
    age: 10,
    location: 'Varanasi, Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop',
    summary: 'From working at roadside stalls to becoming top of his 5th grade class with full scholarship.',
    fullStory: 'Aarav was assisting his family at a small tea stall before BHS Foundation field workers met his parents. Through our accelerated learning bridge course and sponsorship, Aarav not only caught up with his peers but secured the first rank in his annual examination.',
    impactAchieved: 'Full 5-year academic scholarship, uniforms, and learning kits provided.',
  },
  {
    _id: 'story-2',
    title: "Priya's Dream of Tech",
    category: 'Digital Empowerment',
    childName: 'Priya Rathod',
    age: 12,
    location: 'Satara, Maharashtra',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
    summary: 'Now equipped with digital learning tablets and coding basics in rural Maharashtra.',
    fullStory: 'In a remote village with intermittent power supply, Priya was introduced to our solar-powered smart class unit. Today, she writes elementary Python scripts and aspires to be a software engineer.',
    impactAchieved: 'Trained 120 girls in rural digital classrooms.',
  },
  {
    _id: 'story-3',
    title: 'Nutrition for Ankit',
    category: 'Child Nutrition',
    childName: 'Ankit Kumar',
    age: 7,
    location: 'Ranchi, Jharkhand',
    image: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop',
    summary: 'Overcoming severe malnutrition through our daily fortified nutrition drive.',
    fullStory: 'Ankit was diagnosed with Stage 2 malnutrition. Through our Poshan Aahar programme, he receives daily warm, micronutrient-enriched meals and health checkups, showing a 35% improvement in cognitive stamina and physical growth.',
    impactAchieved: 'Healthier BMI, 98% school attendance, and pediatric care.',
  },
];

exports.getAllStories = async (req, res) => {
  try {
    if (getDBStatus()) {
      const count = await Story.countDocuments();
      if (count === 0) {
        await Story.insertMany(defaultStories.map(s => {
          const { _id, ...rest } = s;
          return rest;
        }));
      }
      const stories = await Story.find();
      return res.json({ success: true, data: stories });
    }

    res.json({ success: true, data: defaultStories });
  } catch (error) {
    console.error('Error fetching stories:', error);
    res.json({ success: true, data: defaultStories });
  }
};
