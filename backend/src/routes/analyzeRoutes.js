import express from 'express';
import { analyzeGithubProfile } from '../controllers/analyzeController.js';

const router = express.Router();

// POST /api/analyze/github - Analyze GitHub profile
router.post('/github', analyzeGithubProfile);

export default router;
