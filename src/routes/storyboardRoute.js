import express from 'express';

import {
  getStoryboardHandler,
  insertStoryboardHandler,
} from '../handlers/storyboardHandler';

const router = express.Router();

router.get('/storyboard', getStoryboardHandler);
router.post('/storyboard', insertStoryboardHandler);

export default router;
