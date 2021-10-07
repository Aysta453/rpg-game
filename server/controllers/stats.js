import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import Stats from '../models/stats.js';

const router = express.Router();

export const createNewStats = async (req, res) => {
    const { owner } = req.body;

    const newStats = new Stats({ owner });

    try {
        await newStats.save();

        res.status(201).json(newStats );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getInfoAboutStats = async (req, res) => {
    const { owner } = req.body;

    try {
           const result = await Stats.findOne({owner }); 
           
        res.status(201).json(result);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const increaseStatStrength = async (req, res) => {
    const { owner} = req.body;

    try {
        const result = await Stats.findOne({ owner });
        const updateStre = { strength: result.strength + 1 };
       
         const result1= await Stats.findByIdAndUpdate(result._id, updateStre, { new: true });
        
        res.status(201).json(result1);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const increaseStatDexterity = async (req, res) => {
    const { owner} = req.body;

    try {
        const result = await Stats.findOne({ owner });
        const updateStre = { dexterity: result.dexterity + 1 };
       
         const result1= await Stats.findByIdAndUpdate(result._id, updateStre, { new: true });
        
        res.status(201).json(result1);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const increaseStatIntellect = async (req, res) => {
    const { owner} = req.body;

    try {
        const result = await Stats.findOne({ owner });
        const updateStre = { intellect: result.intellect + 1 };
       
         const result1= await Stats.findByIdAndUpdate(result._id, updateStre, { new: true });
        
        res.status(201).json(result1);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const increaseStatStamina = async (req, res) => {
    const { owner} = req.body;

    try {
        const result = await Stats.findOne({ owner });
        const updateStre = { stamina: result.stamina + 1 };
       
         const result1= await Stats.findByIdAndUpdate(result._id, updateStre, { new: true });
        
        res.status(201).json(result1);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const increaseStatSpirit = async (req, res) => {
    const { owner} = req.body;
    try {
        const result = await Stats.findOne({ owner });
        const updateStre = { spirit: result.spirit + 1 };
        const result1= await Stats.findByIdAndUpdate(result._id, updateStre, { new: true }); 
        res.status(201).json(result1);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
