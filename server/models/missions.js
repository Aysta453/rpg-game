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
    },
    owner: {
        type: String,
        require: true,
    }
});


export default mongoose.model("Missions", missionsSchema);