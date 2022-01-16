import express from "express";

import {
  createRoom,
  showRooms,
  joinRoom,
  showRoom,
  deleteRoom,
  leaveRoom,
} from "../controllers/rooms.js";

const router = express.Router();

router.post("/createRoom", createRoom);
router.post("/showRooms", showRooms);
router.post("/showRoom", showRoom);
router.post("/joinRoom", joinRoom);
router.post("/deleteRoom", deleteRoom);
router.post("/leaveRoom", leaveRoom);

export default router;
