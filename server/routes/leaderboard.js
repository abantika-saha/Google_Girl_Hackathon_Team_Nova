import express from 'express';
const router = express.Router();

import {getLeaderboard} from '../controllers/leaderboard.js'

router.get("/",getLeaderboard);

export default router;