import express from 'express';

import {
  getReminderList,
  insertReminder,
  deleteReminder,
} from '../handlers/reminderHandler';

const router = express.Router();

router.get('/reminder', getReminderList);
router.post('/reminder', insertReminder);
router.delete('/reminder/:id', deleteReminder);

export default router;
