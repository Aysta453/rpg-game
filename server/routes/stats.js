import express from 'express';

import {createNewStats,getInfoAboutStats,increaseStatStrength,increaseStatDexterity,increaseStatIntellect,increaseStatStamina,increaseStatSpirit} from '../controllers/stats.js';

const router = express.Router();

router.post('/',getInfoAboutStats);
router.post('/createNewStats',createNewStats);
router.post('/incstastr',increaseStatStrength);
router.post('/incstadex',increaseStatDexterity);
router.post('/incstaint',increaseStatIntellect);
router.post('/incstasta',increaseStatStamina);
router.post('/incstaspi',increaseStatSpirit);

export default router;