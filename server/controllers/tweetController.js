const aiService = require('../services/aiService');

const generateTweet = async (req, res) => {
  const { topic, tone } = req.body;

  if (!topic || !tone) {
    return res.status(400).json({ error: 'Topic and tone are required.' });
  }

  try {
    const tweet = await aiService.generateTweet(topic, tone);
    res.json({ tweet });
  } catch (error) {
    console.error('Controller Catch - Error:', error);
    res.status(500).json({ 
      error: error.message || 'Failed to generate tweet. Please try again later.' 
    });
  }


};

module.exports = {
  generateTweet,
};
