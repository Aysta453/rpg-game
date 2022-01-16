import mongoose from 'mongoose';

const dungeonsSchema = mongoose.Schema({
    
    firstDungeon: {
        dungeonTitle: {
            type: String,
        },
        dungeonDescription: {
            type: String,
        },
        dungeonRewardGold: {
            type: Number,
        },
        dungeonRewardExp: {
            type: Number,
        },
        dungeonDifficult: {
            type:String,
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
    secondDungeon: {
        dungeonTitle: {
            type: String,
        },
        dungeonDescription: {
            type: String,
        },
        dungeonRewardGold: {
            type: Number,
        },
        dungeonRewardExp: {
            type: Number,
        },
        dungeonDifficult: {
            type:String,
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
    thirdDungeon: {
        dungeonTitle: {
            type: String,
        },
        dungeonDescription: {
            type: String,
        },
        dungeonRewardGold: {
            type: Number,
        },
        dungeonRewardExp: {
            type: Number,
        },
        dungeonDifficult: {
            type:String,
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
    owner: {
        type: String,
        require: true,
    }
});


export default mongoose.model("Dungeons", dungeonsSchema);