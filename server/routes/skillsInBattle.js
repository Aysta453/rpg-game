import express from 'express';

import {createSkillsToBattle,getHeroSkillsToBattle,updateSkillsInBattle, updateSkillsInBattle2} from '../controllers/skillsInBattle.js';

const router = express.Router();

router.post('/createSkillsToBattle', createSkillsToBattle);
router.post('/getHeroSkillsToBattle', getHeroSkillsToBattle);
router.post('/updateSkillsInBattle', updateSkillsInBattle);
router.post('/updateSkillsInBattle2', updateSkillsInBattle2);



export default router;