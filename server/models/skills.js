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
        },
        sevenskill: {
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
        },
        eightskill: {
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
        },
         nineskill: {
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
        },
        tenskill: {
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
        },
        elevenskill: {
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
        },
        twelveskill: {
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
        },
    }
});


export default mongoose.model("Skills", skillsSchema);