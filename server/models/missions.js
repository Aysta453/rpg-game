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
        },
    },
    owner: {
        type: String,
        require: true,
    }
});


export default mongoose.model("Missions", missionsSchema);