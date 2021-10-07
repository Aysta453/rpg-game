import express from 'express';

import {createNewHero,getInfoAboutHero,decreaseGold,increaseGold,addRewardsAfterMission} from '../controllers/hero.js';

const router = express.Router();

router.post('/createNewHero', createNewHero);
router.post('/', getInfoAboutHero);

router.post('/decgold', decreaseGold);
router.post('/incgold', increaseGold);

router.post('/addRewardsAfterMission',addRewardsAfterMission);

export default router;