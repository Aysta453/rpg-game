import express from 'express';
import mongoose from 'mongoose';

import Skills from '../models/skills.js';

import createSkillsToCharacter from '../functions/createSkillsToCharacter.js';
import unlockingSkill from '../functions/unlockingSkill.js';
import assigningSkill from '../functions/assigningSkill.js';

const router = express.Router();


export const createNewSkillsToAccount = async (req, res) => {
    const { owner, heroClass } = req.body;
    let newSkills = new Skills();
    let active = createSkillsToCharacter(heroClass, 0);
    let passive = createSkillsToCharacter(heroClass, 1);
    newSkills = Skills({
        owner: owner,
        active: active,
        passive: passive
    });
    try {
        await newSkills.save();
        res.status(201).json(newSkills);
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: error.message });
    }
}

export const getHeroSkills = async (req, res) => {
    const { owner } = req.body;
    try {
       const result= await Skills.findOne({owner});
        res.status(201).json(result);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const unlockedSkill = async (req, res) => {
    const { owner, typeOfSkill, numerOfSkill } = req.body;
    let result1 = await Skills.findOne({ owner });
    let data = unlockingSkill(result1, typeOfSkill, numerOfSkill);
    try {
        const result1= await Skills.findOneAndUpdate({owner:owner}, data,{new:true});
        res.status(201).json(result1);
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: error.message });
    }
}

export const assignSkill = async (req, res) => {
    const { owner, numerOfSkill } = req.body;
    let result1 = await Skills.findOne({ owner });
    let data = assigningSkill(result1, numerOfSkill);
    console.log(data);
    try {
        const result1= await Skills.findOneAndUpdate({owner:owner}, data,{new:true});
        res.status(201).json(result1);
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: error.message });
    }
}

export const addNewAvailablePoint = async (req, res) => {
    const { owner} = req.body;
    let result = await Skills.findOne({ owner });
    result.availabePoints = result.availabePoints +1;
    try {
        const result1= await Skills.findOneAndUpdate({owner:owner}, result,{new:true});
        res.status(201).json(result1);
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: error.message });
    }
}
