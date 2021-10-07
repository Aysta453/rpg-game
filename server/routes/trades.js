import express from 'express';

import {getAllTradeItems,createAllTradeItems,updateAllTradeItems,updateOneTradeItems} from '../controllers/trades.js';

const router = express.Router();

router.post('/getalltradeitems', getAllTradeItems);
router.post('/createalltradeitems', createAllTradeItems);
router.post('/updatealltradeitems', updateAllTradeItems);
router.post('/updateonetradeitems', updateOneTradeItems);

export default router;