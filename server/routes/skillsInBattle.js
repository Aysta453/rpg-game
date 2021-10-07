import express from 'express';

import {createSkillsToBattle,getHeroSkillsToBattle,updateSkillsInBattle} from '../controllers/skillsInBattle.js';

const router = express.Router();

router.post('/createSkillsToBattle', createSkillsToBattle);
router.post('/getHeroSkillsToBattle', getHeroSkillsToBattle);
router.post('/updateSkillsInBattle', updateSkillsInBattle);



export default router;