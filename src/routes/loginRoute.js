import express from 'express';

import { loginHandler } from '../handlers/loginHandler';

const router = express.Router();

router.post('/login', loginHandler);

export default router;
