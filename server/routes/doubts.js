import express from 'express';

import { getDoubts, getDoubt, createDoubt, updateDoubt, commentDoubt, deleteDoubt } from '../controllers/doubts.js';
import  auth  from '../middleware/auth.js';

const router = express.Router();

router.get('/', getDoubts);
router.get('/:id', getDoubt);
router.post('/', createDoubt);
router.patch('/:id', updateDoubt);
router.delete('/:id', deleteDoubt);
router.post('/:id/commentDoubt', commentDoubt);

export default router;