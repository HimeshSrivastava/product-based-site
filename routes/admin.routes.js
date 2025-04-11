import express from 'express'
import { adminGeneratedDiscount, adminStatics } from '../controllers/admin.controller.js';

const router=express.Router();

router.post('/coupen',adminGeneratedDiscount);
router.get('/stats',adminStatics);

export default router;