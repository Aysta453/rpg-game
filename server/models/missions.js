import mongoose from 'mongoose';

const missionsSchema = mongoose.Schema({
    
    firstMission: {
        missionTitle: {
            type: String,
        },
        missionDescription: {
            type: String,
        },
        missionTime: {
            type: Number,
        },
        missionRewardGold: {
            type: Number,
        },
        missionRewardExp: {
            type: Number,
        },
        item: {
            nameOfItem: {
                type: String,
            },
            typeOfItem: {
                type: String,
            },
            minAttack: {
                type: Number, 
            },
            maxAttack: {
                type: Number, 
            },
            defensive: {
                type: Number,
            },
            strength: {
                type: Number,
            },
            dexterity: {
                type: Number,
            },
            intellect: {
                type: Number,
            },
            stamina: {
                type: Number,
            },
            spirit: {
                type: Number,
            },
            cost: {
                type:Number,
            },
            isEmpty: {
                type: Boolean,
                default: true,
            },
            numberOfItem: {
                type: Number,
            },  
        },
        monster: {
            monsterName: {
                type:String,
            },
            monsterHealtPoints: {
                type:Number,
            }, 
            monsterMinAttack: {
                type:Number,
            },
            monsterMaxAttack: {
                type:Number,
            },
            monsterDefense: {
                type:Number,
            },
            monsterLevel:{
                type:Number,
            },
            monsterNumber: {
                type:Number,
            }
        },
    },
    secondMission: {
          missionTitle: {
            type: String,
        },
        missionDescription: {
            type: String,
        },
        missionTime: {
            type: Number,
        },
        missionRewardGold: {
            type: Number,
        },
        missionRewardExp: {
            type: Number,
        },
        item: {
            nameOfItem: {
                type: String,
            },
            typeOfItem: {
                type: String,
            },
            minAttack: {
                type: Number, 
            },
            maxAttack: {
                type: Number, 
            },
            defensive: {
                type: Number,
            },
            strength: {
                type: Number,
            },
            dexterity: {
                type: Number,
            },
            intellect: {
                type: Number,
            },
            stamina: {
                type: Number,
            },
            spirit: {
                type: Number,
            },
            cost: {
                type:Number,
            },
            isEmpty: {
                type: Boolean,
                default: true,
            },
            numberOfItem: {
                type: Number,
            },  
        },
        monster: {
            monsterName: {
                type:String,
            },
            monsterHealtPoints: {
                type:Number,
            }, 
            monsterMinAttack: {
                type:Number,
            },
            monsterMaxAttack: {
                type:Number,
            },
            monsterDefense: {
                type:Number,
            },
            monsterLevel:{
                type:Number,
            },
            monsterNumber: {
                type:Number,
            }
        },
    },
    thirdMission: {
        missionTitle: {
            type: String,
        },
        missionDescription: {
            type: String,
        },
        missionTime: {
            type: Number,
        },
        missionRewardGold: {
            type: Number,
        },
        missionRewardExp: {
            type: Number,
        },
        item: {
            nameOfItem: {
                type: String,
            },
            typeOfItem: {
                type: String,
            },
            minAttack: {
                type: Number, 
            },
            maxAttack: {
                type: Number, 
            },
            defensive: {
                type: Number,
            },
            strength: {
                type: Number,
            },
            dexterity: {
                type: Number,
            },
            intellect: {
                type: Number,
            },
            stamina: {
                type: Number,
            },
            spirit: {
                type: Number,
            },
            cost: {
                type:Number,
            },
            isEmpty: {
                type: Boolean,
                default: true,
            },
            numberOfItem: {
                type: Number,
            },  
        },
        monster: {
            monsterName: {
                type: String,
            },
            monsterHealtPoints: {
                type: Number,
            },
            monsterMinAttack: {
                type: Number,
            },
            monsterMaxAttack: {
                type: Number,
            },
            monsterDefense: {
                type: Number,
            },
            monsterLevel:{
                type:Number,
            },
            monsterNumber: {
                type:Number,
            }
        },
    },
    owner: {
        type: String,
        require: true,
    }
});


export default mongoose.model("Missions", missionsSchema);