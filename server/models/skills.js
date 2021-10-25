import mongoose from 'mongoose';

const skillsSchema = mongoose.Schema({
    
    owner: {
        type: String,
        require: true,
    },
    availabePoints:{
    type: Number,
        default: 2,
    },
    active: {
        firstskill: {
            nameOfSkill: {
                type: String,
            },
            descriptionOfSpell: {
                type: String,
            },
            pointsOfMana: {
                type: Number,
                default: 0,
            },
            valueOfSpell: {
                type: Number,
                default: 0,
            },
            durationTime: {
                type: Number,
                default: 0,
            },
            castTime: {
                type: Number,
                default: 0,
            },
            isAssigned: {
                type: Boolean,
                default: false,
            },
            isUnlocked: {
                type: Boolean,
                default: false,
            },
            numberOfSkill: {
                type:Number,
            },
        },
        secondskill: {
             nameOfSkill: {
                type: String,
            },
            descriptionOfSpell: {
                type: String,
            },
            pointsOfMana: {
                type: Number,
                default: 0,
            },
            valueOfSpell: {
                type: Number,
                default: 0,
            },
            durationTime: {
                type: Number,
                default: 0,
            },
            castTime: {
                type: Number,
                default: 0,
            },
            isAssigned: {
                type: Boolean,
                default: false,
            },
            isUnlocked: {
                type: Boolean,
                default: false,
            },
            numberOfSkill: {
                type:Number,
            },
        },
        thirdskill: {
             nameOfSkill: {
                type: String,
            },
            descriptionOfSpell: {
                type: String,
            },
            pointsOfMana: {
                type: Number,
                default: 0,
            },
            valueOfSpell: {
                type: Number,
                default: 0,
            },
            durationTime: {
                type: Number,
                default: 0,
            },
            castTime: {
                type: Number,
                default: 0,
            },
            isAssigned: {
                type: Boolean,
                default: false,
            },
            isUnlocked: {
                type: Boolean,
                default: false,
            },
            numberOfSkill: {
                type:Number,
            },
        },
        forthskill: {
              nameOfSkill: {
                type: String,
            },
            descriptionOfSpell: {
                type: String,
            },
            pointsOfMana: {
                type: Number,
                default: 0,
            },
            valueOfSpell: {
                type: Number,
                default: 0,
            },
            durationTime: {
                type: Number,
                default: 0,
            },
            castTime: {
                type: Number,
                default: 0,
            },
            isAssigned: {
                type: Boolean,
                default: false,
            },
            isUnlocked: {
                type: Boolean,
                default: false,
            },
            numberOfSkill: {
                type:Number,
            },
        },
        fifthskill: {
             nameOfSkill: {
                type: String,
            },
            descriptionOfSpell: {
                type: String,
            },
            pointsOfMana: {
                type: Number,
                default: 0,
            },
            valueOfSpell: {
                type: Number,
                default: 0,
            },
            durationTime: {
                type: Number,
                default: 0,
            },
            castTime: {
                type: Number,
                default: 0,
            },
            isAssigned: {
                type: Boolean,
                default: false,
            },
            isUnlocked: {
                type: Boolean,
                default: false,
            },
            numberOfSkill: {
                type:Number,
            },
        },
        sixskill: {
             nameOfSkill: {
                type: String,
            },
            descriptionOfSpell: {
                type: String,
            },
            pointsOfMana: {
                type: Number,
                default: 0,
            },
            valueOfSpell: {
                type: Number,
                default: 0,
            },
            durationTime: {
                type: Number,
                default: 0,
            },
            castTime: {
                type: Number,
                default: 0,
            },
            isAssigned: {
                type: Boolean,
                default: false,
            },
            isUnlocked: {
                type: Boolean,
                default: false,
            },
            numberOfSkill: {
                type:Number,
            },
        },
    },
    passive: {
        firstskill: {
            nameOfSkill: {
                type: String,
            },
            descriptionOfSpell: {
                type: String,
            },
            valueOfBonus: {
                type: Number,
                default: 0,
            },
            isUnlocked: {
                type: Boolean,
                default: false,
            },
            numberOfSkill: {
                type:Number,
            },
        },
        secondskill: {
              nameOfSkill: {
                type: String,
            },
            descriptionOfSpell: {
                type: String,
            },
            valueOfBonus: {
                type: Number,
                default: 0,
            },
            isUnlocked: {
                type: Boolean,
                default: false,
            },
            numberOfSkill: {
                type:Number,
            },
        },
        thirdskill: {
              nameOfSkill: {
                type: String,
            },
            descriptionOfSpell: {
                type: String,
            },
            valueOfBonus: {
                type: Number,
                default: 0,
            },
            isUnlocked: {
                type: Boolean,
                default: false,
            },
            numberOfSkill: {
                type:Number,
            },
        },
        forthskill: {
              nameOfSkill: {
                type: String,
            },
            descriptionOfSpell: {
                type: String,
            },
            valueOfBonus: {
                type: Number,
                default: 0,
            },
            isUnlocked: {
                type: Boolean,
                default: false,
            },
            numberOfSkill: {
                type:Number,
            },
        },
        fifthskill: {
              nameOfSkill: {
                type: String,
            },
            descriptionOfSpell: {
                type: String,
            },
            valueOfBonus: {
                type: Number,
                default: 0,
            },
            isUnlocked: {
                type: Boolean,
                default: false,
            },
            numberOfSkill: {
                type:Number,
            },
        },
        sixskill: {
              nameOfSkill: {
                type: String,
            },
            descriptionOfSpell: {
                type: String,
            },
            valueOfBonus: {
                type: Number,
                default: 0,
            },
            isUnlocked: {
                type: Boolean,
                default: false,
            },
            numberOfSkill: {
                type:Number,
            },
        },
        sevenskill: {
              nameOfSkill: {
                type: String,
            },
            descriptionOfSpell: {
                type: String,
            },
            valueOfBonus: {
                type: Number,
                default: 0,
            },
            isUnlocked: {
                type: Boolean,
                default: false,
            },
            numberOfSkill: {
                type:Number,
            },
        },
        eightskill: {
               nameOfSkill: {
                type: String,
            },
            descriptionOfSpell: {
                type: String,
            },
            valueOfBonus: {
                type: Number,
                default: 0,
            },
            isUnlocked: {
                type: Boolean,
                default: false,
            },
            numberOfSkill: {
                type:Number,
            },
        },
         nineskill: {
               nameOfSkill: {
                type: String,
            },
            descriptionOfSpell: {
                type: String,
            },
            valueOfBonus: {
                type: Number,
                default: 0,
            },
            isUnlocked: {
                type: Boolean,
                default: false,
             },
            numberOfSkill: {
                type:Number,
            },
        },
        tenskill: {
          nameOfSkill: {
                type: String,
            },
            descriptionOfSpell: {
                type: String,
            },
            valueOfBonus: {
                type: Number,
                default: 0,
            },
            isUnlocked: {
                type: Boolean,
                default: false,
            },
            numberOfSkill: {
                type:Number,
            },
        },
        elevenskill: {
               nameOfSkill: {
                type: String,
            },
            descriptionOfSpell: {
                type: String,
            },
            valueOfBonus: {
                type: Number,
                default: 0,
            },
            isUnlocked: {
                type: Boolean,
                default: false,
            },
            numberOfSkill: {
                type:Number,
            },
        },
        twelveskill: {
             nameOfSkill: {
                type: String,
            },
            descriptionOfSpell: {
                type: String,
            },
            valueOfBonus: {
                type: Number,
                default: 0,
            },
            isUnlocked: {
                type: Boolean,
                default: false,
            },
            numberOfSkill: {
                type:Number,
            },
        },
    }
});


export default mongoose.model("Skills", skillsSchema);