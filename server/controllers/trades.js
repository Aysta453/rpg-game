import express from 'express';
import mongoose from 'mongoose';

import Trade from '../models/trades.js';

import creatingItem from '../functions/creatingItem.js';
import assignOneTradeItemToShop from '../functions/assignOneTradeItemToShop.js';

const router = express.Router();

export const createAllTradeItems = async (req, res) => {
    const { owner, level, heroClass} = req.body;
    console.log(owner);
    let first = creatingItem(heroClass, level, 1, 0, 0);
    let second = creatingItem(heroClass, level, 1, 0, 0);
    let third = creatingItem(heroClass, level, 1, 0, 0);
    let forth = creatingItem(heroClass, level, 1, 0, 0);
    let fifth = creatingItem(heroClass, level, 1, 0, 0);
    let sixth = creatingItem(heroClass, level, 1, 0, 0);
    
    
    let newTrade = new Trade();

    newTrade = Trade({
        owner: owner,  
        items: {
            firstItemForSell: first,
            secondItemForSell: second,
            thirdItemForSell: third,
            forthItemForSell: forth,
            fifthItemForSell: fifth,
            sixthItemForSell: sixth,
        },
    });
      
    try {
         await newTrade.save();
        res.status(201).json(newTrade);
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: error.message });
    }
}

export const getAllTradeItems = async (req, res) => {
    const { owner } = req.body;
    try {
         const result= await Trade.findOne({owner});
        res.status(201).json(result);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateAllTradeItems = async (req, res) => {
    const { owner, level, heroClass} = req.body;
    console.log(owner + " " + heroClass + " " + level);
    let first = creatingItem(heroClass, level, 1, 0, 0);
    let second = creatingItem(heroClass, level, 1, 0, 0);
    let third = creatingItem(heroClass, level, 1, 0, 0);
    let forth = creatingItem(heroClass, level, 1, 0, 0);
    let fifth = creatingItem(heroClass, level, 1, 0, 0);
    let sixth = creatingItem(heroClass, level, 1, 0, 0);
    let { data } = {};

    data = {
        items: {
            firstItemForSell: first,
            secondItemForSell: second,
            thirdItemForSell: third,
            forthItemForSell: forth,
            fifthItemForSell: fifth,
            sixthItemForSell: sixth,
        },
    };
      
    try {
        const result = await Trade.findOneAndUpdate({ owner: owner },data,{new:true});
        res.status(201).json(result);
        console.log(result);
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: error.message });
    }
}

export const updateOneTradeItems = async (req, res) => {
    const { owner, level, heroClass, numberOfTradeItem } = req.body;
    let result1 = await Trade.findOne({ owner });
    let item = creatingItem(heroClass, level, 1, 0, 0);
    
    let data = assignOneTradeItemToShop(result1, item, numberOfTradeItem);

    try {
        const result = await Trade.findOneAndUpdate({ owner: owner }, data,{new:true});

        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: error.message });
    }
}


