import mongoose from 'mongoose';

const skillsInBattle = mongoose.Schema({
    
    owner: {
        type: String,
        require: true,
    },
    firstskill: {
        nameOfSkill: { type: String, },
        descriptionOfSpell: { type: String, },
        pointsOfMana: { type: Number, },
        valueOfSpell: { type: Number, },
        durationTime: { type: Number, },
        castTime: { type: Number, },
        numberOfSkill: { type: Number, },
    },
    secondskill: {
        nameOfSkill: { type: String, },
        descriptionOfSpell: { type: String, },
        pointsOfMana: { type: Number, },
        valueOfSpell: { type: Number, },
        durationTime: { type: Number, },
        castTime: { type: Number, },
        numberOfSkill: { type: Number, },
    },
    thirdskill: {
        nameOfSkill: { type: String, },
        descriptionOfSpell: { type: String, },
        pointsOfMana: { type: Number, },
        valueOfSpell: { type: Number, },
        durationTime: { type: Number, },
        castTime: { type: Number, },
        numberOfSkill: { type: Number, },
    },
    forthskill: {
        nameOfSkill: { type: String, },
        descriptionOfSpell: { type: String, },
        pointsOfMana: { type: Number, },
        valueOfSpell: { type: Number, },
        durationTime: { type: Number, },
        castTime: { type: Number, },
        numberOfSkill: { type: Number, },
    },
    fifthskill: {
        nameOfSkill: { type: String, },
        descriptionOfSpell: { type: String, },
        pointsOfMana: { type: Number, },
        valueOfSpell: { type: Number, },
        durationTime: { type: Number, },
        castTime: { type: Number, },
        numberOfSkill: { type: Number, },
    },
    sixskill: {
        nameOfSkill: { type: String, },
        descriptionOfSpell: { type: String, },
        pointsOfMana: { type: Number, },
        valueOfSpell: { type: Number, },
        durationTime: { type: Number, },
        castTime: { type: Number, },
        numberOfSkill: { type: Number, },
    },
});


export default mongoose.model("SkillsInBattle", skillsInBattle);