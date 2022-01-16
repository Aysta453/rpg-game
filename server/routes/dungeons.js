import express from 'express';

import {createDungeons,showDungeons,newDungeons} from '../controllers/dungeons.js';

const router = express.Router();

router.post('/createDungeons',createDungeons);
router.post('/showDungeons',showDungeons);
router.post('/newDungeons',newDungeons);


export default router;