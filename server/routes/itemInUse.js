import express from 'express';

import {createNewItemInUse,changeItemInUse,getItemInUse,removeItemInUse} from '../controllers/itemInUse.js';

const router = express.Router();


router.post('/getItemInUse', getItemInUse);

router.post('/createNewItemInUse', createNewItemInUse);
router.post('/changeItemInUse', changeItemInUse);
router.post('/removeItemInUse', removeItemInUse);




export default router;