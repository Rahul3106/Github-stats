import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const analyzeGithubProfile = async (username) => {
  try {
    const response = await apiClient.post('/api/analyze/github', { username });
    return response.data;
  } catch (error) {
    if (error.response?.data) {
      throw error.response.data.error;
    }
    throw {
      message: 'Network error. Please check your connection.',
      code: 'NETWORK_ERROR'
    };
  }
};
