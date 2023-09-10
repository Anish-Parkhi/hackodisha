import express from 'express';
import { getLaunguage, postLaunguage } from '../controllers/launguageList.js';

const router = express.Router();

router.post('/launguageList', postLaunguage);
router.get('/launguageList', getLaunguage);

export default router;
