import express from 'express';

import {createNewItem,getallItems,deleteThisItem,assignItemToInventory,deleteAndAssignItem} from '../controllers/item.js';

const router = express.Router();


router.post('/createNewItem', createNewItem);
router.post('/assignItemToInventory', assignItemToInventory);
router.post('/getallItems', getallItems);
router.post('/deleteThisItem', deleteThisItem);
router.post('/deleteAndAssignItem', deleteAndAssignItem);


export default router;