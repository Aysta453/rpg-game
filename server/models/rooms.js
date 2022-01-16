import mongoose from "mongoose";

const roomsSchema = mongoose.Schema({
  roomName: {
    type: String,
  },
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
    type: String,
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
    monsterLevel: {
      type: Number,
    },
    monsterNumber: {
      type: Number,
    },
  },
  owner: {
    type: String,
    require: true,
  },
  players: [],
});

export default mongoose.model("Rooms", roomsSchema);
