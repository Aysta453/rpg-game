import express from 'express';
import mongoose from 'mongoose';

import SkillsInBattle from '../models/skillsInBattle.js';
import assignSkillToBattle from '../functions/assignSkillToBattle.js';
import unAssignSkillToBattle from '../functions/unAssignSkillToBattle.js';
const router = express.Router();

export const createSkillsToBattle = async (req, res) => {
    const { owner } = req.body;
    let newSkills = new SkillsInBattle();
  
    newSkills = SkillsInBattle({
        owner: owner,   
    });
    try {
        await newSkills.save();
        res.status(201).json(newSkills);
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: error.message });
    }
}

export const getHeroSkillsToBattle = async (req, res) => {
    const { owner } = req.body;
    try {
       const result= await SkillsInBattle.findOne({owner});
        res.status(201).json(result);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateSkillsInBattle = async (req, res) => {
    const { owner, position, skill,numberOfSkill} = req.body;

    let result = await SkillsInBattle.findOne({ owner });
    let data = assignSkillToBattle(result, skill, position);
    try {
        const result1 = await SkillsInBattle.findOneAndUpdate({ owner: owner }, data, { new: true });
        res.status(201).json(result1);
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: error.message });
    }
}
export const updateSkillsInBattle2 = async (req, res) => {
    const { owner, position } = req.body;
    
    let result = await SkillsInBattle.findOne({ owner });
    let data = unAssignSkillToBattle(result, position);

    try {
        const result1= await SkillsInBattle.findOneAndUpdate({owner:owner}, data,{new:true});
        res.status(201).json(result1);
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: error.message });
    }
}