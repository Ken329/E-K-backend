import express from 'express';

import { getTodoList, insertTodo, updateTodo } from '../handlers/todoHandler';

const router = express.Router();

router.get('/todo', getTodoList)
router.post('/todo', insertTodo)
router.put('/todo', updateTodo)

export default router;