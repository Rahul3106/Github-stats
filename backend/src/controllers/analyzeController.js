import { languageAnalyzer } from '../services/languageAnalyzer.js';

export const analyzeGithubProfile = async (req, res, next) => {
  try {
    const { username } = req.body;

    // Validate username
    if (!username || typeof username !== 'string' || username.trim() === '') {
      const error = new Error('Username is required');
      error.statusCode = 400;
      error.code = 'INVALID_USERNAME';
      throw error;
    }

    const trimmedUsername = username.trim();

    // Basic validation for GitHub username format
    if (!/^[a-zA-Z0-9-]+$/.test(trimmedUsername)) {
      const error = new Error('Invalid GitHub username format');
      error.statusCode = 400;
      error.code = 'INVALID_USERNAME_FORMAT';
      throw error;
    }

    // Analyze the user's language usage
    const data = await languageAnalyzer.analyzeUserLanguages(trimmedUsername);

    // Send success response
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    next(error);
  }
};
