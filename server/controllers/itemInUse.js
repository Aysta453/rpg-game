import express from 'express';
import mongoose from 'mongoose';
import creatingItem from '../functions/creatingItem.js';
import ItemInUse from '../models/itemInUse.js';

const router = express.Router();

export const createNewItemInUse = async (req, res) => {
    const { owner, heroClass } = req.body;
    let newItemsInUse = new ItemInUse();

    let head = creatingItem(heroClass, 1, 0, 1, 0);
    let necklace = creatingItem(heroClass, 1, 0, 1, 1);
    let armor = creatingItem(heroClass, 1, 0, 1, 2);
    let pants = creatingItem(heroClass, 1, 0, 1, 3);
    let boots = creatingItem(heroClass, 1, 0, 1, 4);
    let weapon = creatingItem(heroClass, 1, 0, 1, 5);
    
    newItemsInUse = ItemInUse({
        owner: owner,
        head: head,
        necklace: necklace,
        armor: armor,
        pants: pants,
        boots: boots,
        weapon: weapon,
    });
   
    try {
        await newItemsInUse.save();
        res.status(201).json(newItemsInUse);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getItemInUse = async (req, res) => {
       const { owner} = req.body;
    try {
        const iteminUse = await ItemInUse.findOne({owner});
                
        res.status(200).json(iteminUse);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const changeItemInUse = async (req, res) => {
    const { owner,item} = req.body;

    let { data } = {};
    
    switch (item.typeOfItem) {
        case 'head':
             data = { head: item };
            break;
        case 'necklace':
             data = { necklace: item };
            break;
        case 'armor':
             data = { armor: item };
            break;
        case 'pants':
             data = { pants: item };
            break;
        case 'boots':
             data = { boots: item };
            break;
        case 'weapon':
             data = { weapon: item };
            break;
    }
    
    try {    
        const newItem = await ItemInUse.findOneAndUpdate({owner:owner}, data, { new: true });
        
        res.status(200).json(newItem);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const removeItemInUse = async (req, res) => {
    const { owner, nameofObject } = req.body;
    let { data } = {};
    
    if (nameofObject === 'head') {
            data  = {
                head: {
            
              }
          }
    } else if (nameofObject === 'necklace') {
           data  = {
        necklace: {
      
              }
          }
    } else if (nameofObject === 'armor') {
           data = {
        armor: {
        
              }
          }
    }
    else if (nameofObject === 'pants') {
          data = {
        pants: {
       
              }
          }
    }
    else if (nameofObject === 'boots') {
         data  = {
        boots: {
       
              }
          }
    }
    else if (nameofObject === 'weapon') {
          data = {
        weapon: {
       
              }
          }
    }

    try {
        const newItem = await ItemInUse.updateOne(owner, {data});
        res.status(200).json(newItem);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}




