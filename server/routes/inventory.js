import express from 'express';

import {createNewInventory,assignItemToInventory,getInventory,deleteItemFromInventory,changeItemInInventory} from '../controllers/inventory.js';

const router = express.Router();

router.post('/createNewInventory', createNewInventory);
router.post('/assignItemToInventory', assignItemToInventory);
router.post('/getInventory', getInventory);
router.post('/deleteItemFromInventory', deleteItemFromInventory);
router.post('/changeItemInInventory', changeItemInInventory);

export default router;