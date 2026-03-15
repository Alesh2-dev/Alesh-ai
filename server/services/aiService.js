const { HfInference } = require('@huggingface/inference');
const dotenv = require('dotenv');

dotenv.config();

if (!process.env.HUGGINGFACE_API_KEY) {
  console.error('CRITICAL: HUGGINGFACE_API_KEY is missing from .env');
}

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);


const generateTweet = async (topic, tone) => {
  console.log('Generating tweet for topic:', topic, 'with tone:', tone);
  console.log('Using API Key starts with:', process.env.HUGGINGFACE_API_KEY ? process.env.HUGGINGFACE_API_KEY.substring(0, 5) + '...' : 'MISSING');
  
  const prompt = `Generate a short engaging tweet based on the following:\n\nTopic: ${topic}\nTone: ${tone}\n\nConstraints:\n- Maximum 280 characters\n- Must sound natural\n- Must be engaging\n- Avoid hashtags unless necessary`;

  try {
    const response = await hf.chatCompletion({
      model: 'Qwen/Qwen2.5-7B-Instruct', // Using Qwen for better compatibility and reliability
      messages: [
        { role: 'user', content: prompt }
      ],


      max_tokens: 150,
      temperature: 0.7,
    });

    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error('AI Service - Full Error Object:', JSON.stringify(error, null, 2));
    console.error('AI Service - Error Message:', error.message);
    
    if (error.message?.includes('loading')) {
      throw new Error('AI Model is waking up. Please try again in 30 seconds.');
    }
    if (error.message?.includes('401')) {
      throw new Error('Invalid HuggingFace API Key. Please check your .env file.');
    }
    throw new Error(error.message || 'AI generation failed due to an unknown service error.');
  }


};

module.exports = {
  generateTweet,
};
