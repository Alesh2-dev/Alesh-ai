import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const generateTweet = async (topic, tone) => {
  try {
    const response = await axios.post(`${API_URL}/generate-tweet`, { topic, tone });
    return response.data.tweet;
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
};
