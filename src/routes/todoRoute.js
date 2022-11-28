import express from 'express';

import { todoHandler } from '../handlers/todoHandler';

const router = express.Router();

router.get('/todo', todoHandler)

export default router;