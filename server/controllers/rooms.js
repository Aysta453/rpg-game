import express from "express";
import assignToRoom from "../functions/assignToRoom.js";
import leaveFromRoom from "../functions/leaveFromRoom.js";

import Rooms from "../models/rooms.js";

const router = express.Router();

export const createRoom = async (req, res) => {
  const { dungeon, owner, member } = req.body;
  let newRoom = new Rooms();
  let test = dungeon.roomName;
  newRoom = Rooms({
    roomName: dungeon.roomName,
    dungeonTitle: dungeon.dungeonTitle,
    dungeonDescription: dungeon.dungeonDescription,
    dungeonRewardGold: dungeon.dungeonRewardGold,
    dungeonRewardExp: dungeon.dungeonRewardExp,
    dungeonDifficult: dungeon.dungeonDifficult,
    monster: dungeon.monster,
    owner: owner,
    players: [member],
  });
  await newRoom.save();

  try {
    const result = await Rooms.findOne({ roomName: test });
    res.status(201).json(result);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const showRooms = async (req, res) => {
  try {
    const result = await Rooms.find();
    res.status(201).json(result);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const showRoom = async (req, res) => {
  const { id } = req.body;
  try {
    const result = await Rooms.findOne({ _id: id });
    console.log(result);
    res.status(201).json(result);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const showRoomByName = async (req, res) => {
  const { roomName } = req.body;
  console.log(roomName);
  try {
    const result = await Rooms.findOne({ roomName: roomName });
    console.log(result);
    res.status(201).json(result);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const joinRoom = async (req, res) => {
  const { id, member } = req.body;
  let result = await Rooms.findOne({ _id: id });
  let data = assignToRoom(result, member);
  try {
    const result = await Rooms.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const deleteRoom = async (req, res) => {
  const { id } = req.body;
  console.log(id);
  try {
    const result = await Rooms.findByIdAndRemove({ _id: id });
    res.status(201).json(result);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const leaveRoom = async (req, res) => {
  const { id, memberToLeave } = req.body;
  let result = await Rooms.findOne({ _id: id });
  let data = leaveFromRoom(result, memberToLeave);
  try {
    const result1 = await Rooms.findOneAndUpdate({ _id: id }, data, {
      new: true,
    });
    res.status(201).json(result1);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
