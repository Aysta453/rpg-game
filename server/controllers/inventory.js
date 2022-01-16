import express from "express";
import mongoose from "mongoose";

import Inventory from "../models/inventory.js";
import assignItemToInventoryFunction from "../functions/assignItemToInventoryFunction.js";
import deleteItemFronInventoryFunction from "../functions/deleteItemFromInventoryFunction.js";
import changeItemInInventoryFunction from "../functions/changeItemInInventoryFunction.js";

const router = express.Router();

export const getInventory = async (req, res) => {
  const { owner } = req.body;
  try {
    const result = await Inventory.findOne({ owner });
    res.status(201).json(result);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const createNewInventory = async (req, res) => {
  const { owner } = req.body;
  let newInventory = new Inventory({ owner: owner });

  try {
    await newInventory.save();
    res.status(201).json(newInventory);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};

export const assignItemToInventory = async (req, res) => {
  const { owner, item } = req.body;
  let result1 = await Inventory.findOne({ owner: owner });
  let data = assignItemToInventoryFunction(result1, item);

  try {
    const result = await Inventory.findOneAndUpdate({ owner: owner }, data, { new: true });
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};

export const deleteItemFromInventory = async (req, res) => {
  const { owner, itemNumber } = req.body;
  let result1 = await Inventory.findOne({ owner: owner });
  let data = deleteItemFronInventoryFunction(result1, itemNumber);
  try {
    const result = await Inventory.findOneAndUpdate({ owner: owner }, data, { new: true });
    res.status(201).json(result);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const changeItemInInventory = async (req, res) => {
  const { owner, item, itemNumber } = req.body;
  let result1 = await Inventory.findOne({ owner: owner });
  let data = changeItemInInventoryFunction(result1, item, itemNumber);
  try {
    const result = await Inventory.findOneAndUpdate({ owner: owner }, data, { new: true });
    res.status(201).json(result);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
