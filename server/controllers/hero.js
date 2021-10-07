import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import Hero from '../models/hero.js';

const router = express.Router();

//creating New Hero
export const createNewHero = async (req, res) => {
    const { nick,heroClass, owner } = req.body;

    const newHero = new Hero({ nick ,heroClass, owner });

    try {
        await newHero.save();
        res.status(201).json(newHero);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//getting data about hero
export const getInfoAboutHero = async (req, res) => {
    const { owner } = req.body;
    try {
           const result = await Hero.findOne({owner}); 
        res.status(201).json(result);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//decrease amount of Gold
export const decreaseGold = async (req, res) => {
    const { owner, amountOfGold } = req.body;
    const result = await Hero.findOne({ owner:owner });
    const updateStre = { gold: result.gold - amountOfGold };

    try {
         const result1= await Hero.findByIdAndUpdate(result._id, updateStre, { new: true });   
        res.status(201).json(result1);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

//increase amount of Gold
export const increaseGold = async (req, res) => {
    const { owner, amountOfGold } = req.body;
    
    const result = await Hero.findOne({ owner:owner });
    const updateStre = { gold: result.gold + amountOfGold };

    try {
         const result1= await Hero.findByIdAndUpdate(result._id, updateStre, { new: true });
        
        res.status(201).json(result1);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


//Increase Hero's info after Completed Mission
export const addRewardsAfterMission = async (req, res) => {
    const { owner, amountOfGold, Exp } = req.body;
    const result = await Hero.findOne({ owner });

    let checkExp = result.expStart + Exp; 
    let update = {}; 
    if (checkExp >= result.expStop) {
        checkExp = checkExp - result.expStop; 
        update = {
            gold: result.gold + amountOfGold,
            level: result.level + 1,
            expStart: checkExp,
            expStop: result.expStop * 2,
        };
    } else {
        update = {
            gold: result.gold + amountOfGold,
            expStart: result.expStart+ Exp,
        };
    }
    try {
        const result1 = await Hero.findByIdAndUpdate(result._id, update, { new: true });
        res.status(201).json(result1);
        
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: error.message });
    }
}