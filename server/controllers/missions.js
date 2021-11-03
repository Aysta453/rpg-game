import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

import Missions from '../models/missions.js';
import Hero from '../models/hero.js';


import createMission from '../functions/createMission.js'
const router = express.Router();



export const createMissions = async (req, res) => {

    const { owner } = req.body;
     
    const resultHero = await Hero.findOne({ owner });
    let heroClass = resultHero.heroClass;
  

    let mission1=createMission(Math.floor((Math.random() * 10)+1),Math.floor((Math.random() * 10)+1),1,1,heroClass);
    let mission2=createMission(Math.floor((Math.random() * 10)+1),Math.floor((Math.random() * 10)+1),1,2,heroClass);
    let mission3=createMission(Math.floor((Math.random() * 10)+1),Math.floor((Math.random() * 10)+1),1,3,heroClass);

    let newMissions = new Missions();

    newMissions =Missions( {
        firstMission: mission1,
        secondMission:mission2,
        thirdMission:mission3,
        owner: owner,
    });
    
    try {
        await newMissions.save();
        res.status(201).json(newMissions);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const showMissions = async (req, res) => {
    const { owner } = req.body;

    try {
           const result = await Missions.findOne({owner}); 
        res.status(201).json(result);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const newMissions = async (req, res) => {

    const { owner,level } = req.body;
    const result = await Missions.findOne({ owner });
    const resultHero = await Hero.findOne({ owner });
    let heroClass = resultHero.heroClass;
  

     let mission1=createMission(Math.floor((Math.random() * 10)+1),Math.floor((Math.random() * 10)+1),level,1,heroClass);
     let mission2=createMission(Math.floor((Math.random() * 10)+1),Math.floor((Math.random() * 10)+1),level,2,heroClass);
     let mission3=createMission(Math.floor((Math.random() * 10)+1),Math.floor((Math.random() * 10)+1),level,3,heroClass);

     let { newMissions } = {};

     newMissions =( {
        firstMission:mission1,
        secondMission:mission2,
        thirdMission:mission3,
        owner: owner,
    });
       
    try {
           const result1= await Missions.findByIdAndUpdate(result._id, newMissions, { new: true });
        res.status(201).json(result1);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


