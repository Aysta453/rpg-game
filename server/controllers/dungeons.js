import express from 'express';

import Dungeons from '../models/dungeons.js';

import createDungeon from '../functions/createDungeon.js';
const router = express.Router();

export const createDungeons = async (req, res) => {

    const { owner } = req.body;
    let dungeon1=createDungeon(Math.floor((Math.random() * 9)+1),Math.floor((Math.random() * 3)+1),1,2);
    let dungeon2=createDungeon(Math.floor((Math.random() * 9)+1),Math.floor((Math.random() * 3)+4),1,4);
    let dungeon3=createDungeon(Math.floor((Math.random() * 9)+1),Math.floor((Math.random() * 3)+7),1,6);

    let newDungeons = new Dungeons();

    newDungeons =Dungeons( {
        firstDungeon: dungeon1,
        secondDungeon:dungeon2,
        thirdDungeon:dungeon3,
        owner: owner,
    });
    
    try {
        await newDungeons.save();
        res.status(201).json(newDungeons);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const showDungeons = async (req, res) => {
    const { owner } = req.body;
    try {
           const result = await Dungeons.findOne({owner}); 
        res.status(201).json(result);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const newDungeons = async (req, res) => {

    const { owner,level } = req.body;
    const result = await Dungeons.findOne({ owner });

    let dungeon1=createDungeon(Math.floor((Math.random() * 9)+1),Math.floor((Math.random() * 3)+1),level,2);
    let dungeon2=createDungeon(Math.floor((Math.random() * 9)+1),Math.floor((Math.random() * 3)+4),level,4);
    let dungeon3=createDungeon(Math.floor((Math.random() * 9)+1),Math.floor((Math.random() * 3)+7),level,6);

    let { newDungeons } = {};

    newDungeons =( {
        firstDungeon: dungeon1,
        secondDungeon:dungeon2,
        thirdDungeon:dungeon3,
        owner: owner,
    });
    try {
           const result1= await Dungeons.findByIdAndUpdate(result._id, newDungeons, { new: true });
        res.status(201).json(result1);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


