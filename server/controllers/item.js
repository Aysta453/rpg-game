import express from "express";
import mongoose from "mongoose";
import creatingItem from "../functions/creatingItem.js";
import Item from "../models/item.js";

const router = express.Router();

export const createNewItem = async (req, res) => {
  const { owner } = req.body;
  let a;
  let classing = "Mage";
  a = creatingItem(classing, 1, 0, 0, 0);
  try {
    //await newItem.save();

    res.status(201).json(a);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};

export const assignItemToInventory = async (req, res) => {
  const { item } = req.body;
  const newItem = new Item(item);

  try {
    await newItem.save();

    res.status(201).json(newItem);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};

export const deleteThisItem = async (req, res) => {
  const { _id } = req.body;
  try {
    const result = await Item.findByIdAndRemove({ _id });
    res.status(201).json(result);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const deleteAndAssignItem = async (req, res) => {
  const { _id, item } = req.body;
  const newItem = new Item(item);
  try {
    await Promise.all([newItem.save(), Item.findByIdAndRemove({ _id })]);

    res.status(201).json(true);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getallItems = async (req, res) => {
  const { owner } = req.body;
  try {
    const result = await Item.find({ owner });
    res.status(201).json(result);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
