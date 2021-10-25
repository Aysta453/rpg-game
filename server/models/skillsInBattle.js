import mongoose from 'mongoose';

const skillsInBattle = mongoose.Schema({
    
    owner: {
        type: String,
        require: true,
    },
    firstSkill: {
        nameOfSkill: { type: String,  },
        descriptionOfSpell: { type: String, },
        pointsOfMana: { type: Number, },
        valueOfSpell: { type: Number, },
        durationTime: { type: Number, },
        castTime: { type: Number, },
        numberOfSkill: { type: Number, },
        isSkillAssigned: { type: Boolean, default: false },
        
    },
    secondSkill: {
        nameOfSkill: { type: String, },
        descriptionOfSpell: { type: String, },
        pointsOfMana: { type: Number, },
        valueOfSpell: { type: Number, },
        durationTime: { type: Number, },
        castTime: { type: Number, },
        numberOfSkill: { type: Number, },
        isSkillAssigned: { type: Boolean, default: false },
        

    },
    thirdSkill: {
        nameOfSkill: { type: String, },
        descriptionOfSpell: { type: String, },
        pointsOfMana: { type: Number, },
        valueOfSpell: { type: Number, },
        durationTime: { type: Number, },
        castTime: { type: Number, },
        numberOfSkill: { type: Number, },
        isSkillAssigned: { type: Boolean, default: false },
      
    },
});
export default mongoose.model("SkillsInBattle", skillsInBattle);