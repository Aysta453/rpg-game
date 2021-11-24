import express from 'express';

import {createNewSkillsToAccount,getHeroSkills,unlockedSkill,assignSkill ,addNewAvailablePoint} from '../controllers/skills.js';

const router = express.Router();


router.post('/createNewSkillsToAccount', createNewSkillsToAccount);
router.post('/getHeroSkills', getHeroSkills);
router.post('/unlockedSkill', unlockedSkill);
router.post('/assignSkill', assignSkill);
router.post('/addNewAvailablePoint', addNewAvailablePoint);


export default router;