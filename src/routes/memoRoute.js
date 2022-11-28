import express from 'express';

import { getMemoList, insertMemo, updateMemo, deleteMemo } from '../handlers/memoHandler';

const router = express.Router();

router.get('/memo', getMemoList)
router.post('/memo', insertMemo)
router.put('/memo', updateMemo)
router.delete('/memo/:id', deleteMemo)

export default router;