import express from 'express';

import {createMissions,showMissions,newMissions} from '../controllers/missions.js';

const router = express.Router();


router.post('/createMissions',createMissions);
router.post('/showMissions',showMissions);
router.post('/newMissions',newMissions);


export default router;