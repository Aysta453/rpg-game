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
        firstSkill: {
            nameOfSkill: { type: String,  },
            descriptionOfSpell: { type: String, },
            pointsOfMana: { type: Number, },
            valueOfSpell: { type: Number, },
            durationTime: { type: Number, },
            castTime: { type: Number, },
            recastTime:{type:Number,},
            numberOfSkill: { type: Number, },

            typeOfSkill: { type: Number, },
            targetOfBonusValue:{type:Number,},
            countOfDots: { type: Number, },
            dotValue:{type:Number,},
            isAssigned: {type: Boolean,default: false, },
            isUnlocked: {type: Boolean,default: false,},

        },
        secondSkill: {
            nameOfSkill: { type: String,  },
            descriptionOfSpell: { type: String, },
            pointsOfMana: { type: Number, },
            valueOfSpell: { type: Number, },
            durationTime: { type: Number, },
            castTime: { type: Number, },
            recastTime:{type:Number,},
            numberOfSkill: { type: Number, },

            typeOfSkill: { type: Number, },
            targetOfBonusValue:{type:Number,},
            countOfDots: { type: Number, },
            dotValue:{type:Number,},
            isAssigned: {type: Boolean,default: false, },
            isUnlocked: {type: Boolean,default: false,},
        },
        thirdSkill: {
            nameOfSkill: { type: String,  },
            descriptionOfSpell: { type: String, },
            pointsOfMana: { type: Number, },
            valueOfSpell: { type: Number, },
            durationTime: { type: Number, },
            castTime: { type: Number, },
            recastTime:{type:Number,},
            numberOfSkill: { type: Number, },

            typeOfSkill: { type: Number, },
            targetOfBonusValue:{type:Number,},
            countOfDots: { type: Number, },
            dotValue:{type:Number,},
            isAssigned: {type: Boolean,default: false, },
            isUnlocked: {type: Boolean,default: false,},
        },
        forthSkill: {
            nameOfSkill: { type: String,  },
            descriptionOfSpell: { type: String, },
            pointsOfMana: { type: Number, },
            valueOfSpell: { type: Number, },
            durationTime: { type: Number, },
            castTime: { type: Number, },
            recastTime:{type:Number,},
            numberOfSkill: { type: Number, },

            typeOfSkill: { type: Number, },
            targetOfBonusValue:{type:Number,},
            countOfDots: { type: Number, },
            dotValue:{type:Number,},
            isAssigned: {type: Boolean,default: false, },
            isUnlocked: {type: Boolean,default: false,},
        },
        fifthSkill: {
            nameOfSkill: { type: String,  },
            descriptionOfSpell: { type: String, },
            pointsOfMana: { type: Number, },
            valueOfSpell: { type: Number, },
            durationTime: { type: Number, },
            castTime: { type: Number, },
            recastTime:{type:Number,},
            numberOfSkill: { type: Number, },

            typeOfSkill: { type: Number, },
            targetOfBonusValue:{type:Number,},
            countOfDots: { type: Number, },
            dotValue:{type:Number,},
            isAssigned: {type: Boolean,default: false, },
            isUnlocked: {type: Boolean,default: false,},
        },
        sixthSkill: {
            nameOfSkill: { type: String,  },
            descriptionOfSpell: { type: String, },
            pointsOfMana: { type: Number, },
            valueOfSpell: { type: Number, },
            durationTime: { type: Number, },
            castTime: { type: Number, },
            recastTime:{type:Number,},
            numberOfSkill: { type: Number, },
            typeOfSkill: { type: Number, },
            targetOfBonusValue:{type:Number,},
            countOfDots: { type: Number, },
            dotValue:{type:Number,},
            isAssigned: {type: Boolean,default: false,},
            isUnlocked: {type: Boolean,default: false,},
        },
    },
    passive: {
        firstSkill: {
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
        secondSkill: {
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
        thirdSkill: {
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
        forthSkill: {
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
        fifthSkill: {
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
        sixthSkill: {
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
        seventhSkill: {
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
        eighthSkill: {
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
         ninthSkill: {
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
        tenthSkill: {
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
        eleventhSkill: {
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
        twelfthSkill: {
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