import express from 'express';
import mongoose from 'mongoose';

import SkillsInBattle from '../models/skillsInBattle.js';

const router = express.Router();

export const createSkillsToBattle = async (req, res) => {
    const { owner } = req.body;
    let newSkills = new SkillsInBattle();
  
    newSkills = SkillsInBattle({
        owner: owner,   
        firstskill: {
            
        },
        secondskill: {
          
        },
        thirdskill: {
           
        },
        forthskill: {
          
        },
        fifthskill: {
           
        },
        sixskill: {
            
        },
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
    const { owner, assignToBattleSkill, numberOfSkill, s } = req.body;
    
    try {
        const result = await SkillsInBattle.findOne({ owner });
        let updateSkill={};
        if (assignToBattleSkill === '1' || assignToBattleSkill === 1) {
             updateSkill ={
                            owner: owner,
                   
                                firstskill: { nameOfSkill: s.nameOfSkill, descriptionOfSpell: s.descriptionOfSpell, pointsOfMana: s.pointsOfMana, valueOfSpell: s.valueOfSpell, durationTime: s.durationTime, castTime: s.castTime, numberOfSkill: numberOfSkill },
                                secondskill: { nameOfSkill: result.secondskill.nameOfSkill, descriptionOfSpell: result.secondskill.descriptionOfSpell, pointsOfMana: result.secondskill.pointsOfMana, valueOfSpell: result.secondskill.valueOfSpell, durationTime: result.secondskill.durationTime, castTime: result.secondskill.castTime, numberOfSkill: result.secondskill.numberOfSkill },
                                thirdskill: { nameOfSkill:result.thirdskill.nameOfSkill, descriptionOfSpell:result.thirdskill.descriptionOfSpell, pointsOfMana:result.thirdskill.pointsOfMana, valueOfSpell:result.thirdskill.valueOfSpell, durationTime:result.thirdskill.durationTime, castTime:result.thirdskill.castTime, numberOfSkill:result.thirdskill.numberOfSkill },
                                forthskill: { nameOfSkill:result.forthskill.nameOfSkill, descriptionOfSpell:result.forthskill.descriptionOfSpell, pointsOfMana:result.forthskill.pointsOfMana, valueOfSpell:result.forthskill.valueOfSpell, durationTime:result.forthskill.durationTime, castTime:result.forthskill.castTime, numberOfSkill:result.forthskill.numberOfSkill },
                                fifthskill: { nameOfSkill:result.fifthskill.nameOfSkill, descriptionOfSpell:result.fifthskill.descriptionOfSpell, pointsOfMana:result.fifthskill.pointsOfMana, valueOfSpell:result.fifthskill.valueOfSpell, durationTime:result.fifthskill.durationTime, castTime:result.fifthskill.castTime,numberOfSkill:result.fifthskill.numberOfSkill  },
                                sixskill: { nameOfSkill:result.sixskill.nameOfSkill, descriptionOfSpell:result.sixskill.descriptionOfSpell, pointsOfMana:result.sixskill.pointsOfMana, valueOfSpell:result.sixskill.valueOfSpell, durationTime:result.sixskill.durationTime, castTime:result.sixskill.castTime, numberOfSkill:result.sixskill.numberOfSkill },
                            
                           
                        };
                }

                if (assignToBattleSkill === '2' || assignToBattleSkill === 2) {
                         updateSkill ={
                            owner: owner,
                                firstskill: { nameOfSkill:result.firstskill.nameOfSkill, descriptionOfSpell:result.firstskill.descriptionOfSpell,pointsOfMana:result.firstskill.pointsOfMana,valueOfSpell:result.firstskill.valueOfSpell,durationTime:result.firstskill.durationTime, castTime:result.firstskill.castTime, numberOfSkill:result.firstskill.numberOfSkill },
                                secondskill: { nameOfSkill:s.nameOfSkill, descriptionOfSpell:s.descriptionOfSpell, pointsOfMana:s.pointsOfMana, valueOfSpell:s.valueOfSpell, durationTime:s.durationTime, castTime:s.castTime, numberOfSkill:numberOfSkill },
                                thirdskill: { nameOfSkill:result.thirdskill.nameOfSkill, descriptionOfSpell:result.thirdskill.descriptionOfSpell, pointsOfMana:result.thirdskill.pointsOfMana, valueOfSpell:result.thirdskill.valueOfSpell, durationTime:result.thirdskill.durationTime, castTime:result.thirdskill.castTime, numberOfSkill:result.thirdskill.numberOfSkill },
                                forthskill: { nameOfSkill:result.forthskill.nameOfSkill, descriptionOfSpell:result.forthskill.descriptionOfSpell, pointsOfMana:result.forthskill.pointsOfMana, valueOfSpell:result.forthskill.valueOfSpell, durationTime:result.forthskill.durationTime, castTime:result.forthskill.castTime, numberOfSkill:result.forthskill.numberOfSkill },
                                fifthskill: { nameOfSkill:result.fifthskill.nameOfSkill, descriptionOfSpell:result.fifthskill.descriptionOfSpell, pointsOfMana:result.fifthskill.pointsOfMana, valueOfSpell:result.fifthskill.valueOfSpell, durationTime:result.fifthskill.durationTime, castTime:result.fifthskill.castTime,numberOfSkill:result.fifthskill.numberOfSkill  },
                                sixskill: { nameOfSkill:result.sixskill.nameOfSkill, descriptionOfSpell:result.sixskill.descriptionOfSpell, pointsOfMana:result.sixskill.pointsOfMana, valueOfSpell:result.sixskill.valueOfSpell, durationTime:result.sixskill.durationTime, castTime:result.sixskill.castTime, numberOfSkill:result.sixskill.numberOfSkill },
                        };
                }

                if (assignToBattleSkill === '3' || assignToBattleSkill === 3) {
                    updateSkill = {
                        owner: owner,
                        firstskill: { nameOfSkill: result.firstskill.nameOfSkill, descriptionOfSpell: result.firstskill.descriptionOfSpell, pointsOfMana: result.firstskill.pointsOfMana, valueOfSpell: result.firstskill.valueOfSpell, durationTime: result.firstskill.durationTime, castTime: result.firstskill.castTime, numberOfSkill: result.firstskill.numberOfSkill },
                        secondskill: { nameOfSkill: result.secondskill.nameOfSkill, descriptionOfSpell: result.secondskill.descriptionOfSpell, pointsOfMana: result.secondskill.pointsOfMana, valueOfSpell: result.secondskill.valueOfSpell, durationTime: result.secondskill.durationTime, castTime: result.secondskill.castTime, numberOfSkill: result.secondskill.numberOfSkill },
                        thirdskill: { nameOfSkill: s.nameOfSkill, descriptionOfSpell: s.descriptionOfSpell, pointsOfMana: s.pointsOfMana, valueOfSpell: s.valueOfSpell, durationTime: s.durationTime, castTime: s.castTime, numberOfSkill: numberOfSkill },
                        forthskill: { nameOfSkill: result.forthskill.nameOfSkill, descriptionOfSpell: result.forthskill.descriptionOfSpell, pointsOfMana: result.forthskill.pointsOfMana, valueOfSpell: result.forthskill.valueOfSpell, durationTime: result.forthskill.durationTime, castTime: result.forthskill.castTime, numberOfSkill: result.forthskill.numberOfSkill },
                        fifthskill: { nameOfSkill: result.fifthskill.nameOfSkill, descriptionOfSpell: result.fifthskill.descriptionOfSpell, pointsOfMana: result.fifthskill.pointsOfMana, valueOfSpell: result.fifthskill.valueOfSpell, durationTime: result.fifthskill.durationTime, castTime: result.fifthskill.castTime, numberOfSkill: result.fifthskill.numberOfSkill },
                        sixskill: { nameOfSkill: result.sixskill.nameOfSkill, descriptionOfSpell: result.sixskill.descriptionOfSpell, pointsOfMana: result.sixskill.pointsOfMana, valueOfSpell: result.sixskill.valueOfSpell, durationTime: result.sixskill.durationTime, castTime: result.sixskill.castTime, numberOfSkill: result.sixskill.numberOfSkill },
                    };
                        
                }

                if (assignToBattleSkill === '4' || assignToBattleSkill === 4) {
                        updateSkill = {
                            owner: owner,
                            
                     
                                firstskill: { nameOfSkill:result.firstskill.nameOfSkill, descriptionOfSpell:result.firstskill.descriptionOfSpell,pointsOfMana:result.firstskill.pointsOfMana,valueOfSpell:result.firstskill.valueOfSpell,durationTime:result.firstskill.durationTime, castTime:result.firstskill.castTime, numberOfSkill:result.firstskill.numberOfSkill },
                                secondskill: { nameOfSkill:result.secondskill.nameOfSkill, descriptionOfSpell:result.secondskill.descriptionOfSpell, pointsOfMana:result.secondskill.pointsOfMana, valueOfSpell:result.secondskill.valueOfSpell, durationTime:result.secondskill.durationTime, castTime:result.secondskill.castTime, numberOfSkill:result.secondskill.numberOfSkill },
                                thirdskill: { nameOfSkill:result.thirdskill.nameOfSkill, descriptionOfSpell:result.thirdskill.descriptionOfSpell, pointsOfMana:result.thirdskill.pointsOfMana, valueOfSpell:result.thirdskill.valueOfSpell, durationTime:result.thirdskill.durationTime, castTime:result.thirdskill.castTime, numberOfSkill:result.thirdskill.numberOfSkill },
                                forthskill: { nameOfSkill:s.nameOfSkill, descriptionOfSpell:s.descriptionOfSpell, pointsOfMana:s.pointsOfMana, valueOfSpell:s.valueOfSpell, durationTime:s.durationTime, castTime:s.castTime, numberOfSkill:numberOfSkill },
                                fifthskill: { nameOfSkill:result.fifthskill.nameOfSkill, descriptionOfSpell:result.fifthskill.descriptionOfSpell, pointsOfMana:result.fifthskill.pointsOfMana, valueOfSpell:result.fifthskill.valueOfSpell, durationTime:result.fifthskill.durationTime, castTime:result.fifthskill.castTime,numberOfSkill:result.fifthskill.numberOfSkill  },
                                sixskill: { nameOfSkill:result.sixskill.nameOfSkill, descriptionOfSpell:result.sixskill.descriptionOfSpell, pointsOfMana:result.sixskill.pointsOfMana, valueOfSpell:result.sixskill.valueOfSpell, durationTime:result.sixskill.durationTime, castTime:result.sixskill.castTime, numberOfSkill:result.sixskill.numberOfSkill },
                         
                        };
                }

                if (assignToBattleSkill === '5' || assignToBattleSkill === 5) {
                        updateSkill = {
                            owner: owner,
                            
                
                                firstskill: { nameOfSkill:result.firstskill.nameOfSkill, descriptionOfSpell:result.firstskill.descriptionOfSpell,pointsOfMana:result.firstskill.pointsOfMana,valueOfSpell:result.firstskill.valueOfSpell,durationTime:result.firstskill.durationTime, castTime:result.firstskill.castTime, numberOfSkill:result.firstskill.numberOfSkill },
                                secondskill: { nameOfSkill:result.secondskill.nameOfSkill, descriptionOfSpell:result.secondskill.descriptionOfSpell, pointsOfMana:result.secondskill.pointsOfMana, valueOfSpell:result.secondskill.valueOfSpell, durationTime:result.secondskill.durationTime, castTime:result.secondskill.castTime, numberOfSkill:result.secondskill.numberOfSkill },
                                thirdskill: { nameOfSkill:result.thirdskill.nameOfSkill, descriptionOfSpell:result.thirdskill.descriptionOfSpell, pointsOfMana:result.thirdskill.pointsOfMana, valueOfSpell:result.thirdskill.valueOfSpell, durationTime:result.thirdskill.durationTime, castTime:result.thirdskill.castTime, numberOfSkill:result.thirdskill.numberOfSkill },
                                forthskill: { nameOfSkill:result.forthskill.nameOfSkill, descriptionOfSpell:result.forthskill.descriptionOfSpell, pointsOfMana:result.forthskill.pointsOfMana, valueOfSpell:result.forthskill.valueOfSpell, durationTime:result.forthskill.durationTime, castTime:result.forthskill.castTime, numberOfSkill:result.forthskill.numberOfSkill },
                                fifthskill: { nameOfSkill:s.nameOfSkill, descriptionOfSpell:s.descriptionOfSpell, pointsOfMana:s.pointsOfMana, valueOfSpell:s.valueOfSpell, durationTime:s.durationTime, castTime:s.castTime,numberOfSkill:numberOfSkill  },
                                sixskill: { nameOfSkill:result.sixskill.nameOfSkill, descriptionOfSpell:result.sixskill.descriptionOfSpell, pointsOfMana:result.sixskill.pointsOfMana, valueOfSpell:result.sixskill.valueOfSpell, durationTime:result.sixskill.durationTime, castTime:result.sixskill.castTime, numberOfSkill:result.sixskill.numberOfSkill },
                         
                        };
                }

                if (assignToBattleSkill === '6' || assignToBattleSkill === 6) {
                        updateSkill = {
                            owner: owner,
                            
                  
                                firstskill: { nameOfSkill:result.firstskill.nameOfSkill, descriptionOfSpell:result.firstskill.descriptionOfSpell,pointsOfMana:result.firstskill.pointsOfMana,valueOfSpell:result.firstskill.valueOfSpell,durationTime:result.firstskill.durationTime, castTime:result.firstskill.castTime, numberOfSkill:result.firstskill.numberOfSkill },
                                secondskill: { nameOfSkill:result.secondskill.nameOfSkill, descriptionOfSpell:result.secondskill.descriptionOfSpell, pointsOfMana:result.secondskill.pointsOfMana, valueOfSpell:result.secondskill.valueOfSpell, durationTime:result.secondskill.durationTime, castTime:result.secondskill.castTime, numberOfSkill:result.secondskill.numberOfSkill },
                                thirdskill: { nameOfSkill:result.thirdskill.nameOfSkill, descriptionOfSpell:result.thirdskill.descriptionOfSpell, pointsOfMana:result.thirdskill.pointsOfMana, valueOfSpell:result.thirdskill.valueOfSpell, durationTime:result.thirdskill.durationTime, castTime:result.thirdskill.castTime, numberOfSkill:result.thirdskill.numberOfSkill },
                                forthskill: { nameOfSkill:result.forthskill.nameOfSkill, descriptionOfSpell:result.forthskill.descriptionOfSpell, pointsOfMana:result.forthskill.pointsOfMana, valueOfSpell:result.forthskill.valueOfSpell, durationTime:result.forthskill.durationTime, castTime:result.forthskill.castTime, numberOfSkill:result.forthskill.numberOfSkill },
                                fifthskill: { nameOfSkill:result.fifthskill.nameOfSkill, descriptionOfSpell:result.fifthskill.descriptionOfSpell, pointsOfMana:result.fifthskill.pointsOfMana, valueOfSpell:result.fifthskill.valueOfSpell, durationTime:result.fifthskill.durationTime, castTime:result.fifthskill.castTime,numberOfSkill:result.fifthskill.numberOfSkill  },
                                sixskill: { nameOfSkill:s.nameOfSkill, descriptionOfSpell:s.descriptionOfSpell, pointsOfMana:s.pointsOfMana, valueOfSpell:s.valueOfSpell, durationTime:s.durationTime, castTime:s.castTime, numberOfSkill:numberOfSkill },
                    
                        };
                }
       
        const result1 = await SkillsInBattle.findByIdAndUpdate(result._id, updateSkill, { new: false });
        const result3 = await SkillsInBattle.findOne({ owner });
        res.status(201).json(result3);
    } catch (error) {
        console.log(error);
        res.status(409).json({ message: error.message });
    }
}