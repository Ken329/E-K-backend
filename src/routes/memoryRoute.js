import express from 'express';

import { getMemoryList, getMemoryById, insertMemory, updateMemory, deleteMemory } from '../handlers/memoryHandler';

const router = express.Router();

router.get('/memory', getMemoryList)
router.post('/memoryById', getMemoryById)
router.post('/memory', insertMemory)
router.put('/memory', updateMemory)
router.delete('/memory/:id', deleteMemory)

export default router;