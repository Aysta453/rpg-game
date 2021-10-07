import mongoose from 'mongoose';

const heroSchema = mongoose.Schema({
    
    nick: {
        type: String,
        require: true,
    },
    heroClass: {
        type: String,
        require: true,
        default: "Mage",
    },
    gold: {
        type: Number,
      default: 100,  
    },
    diamond: {
        type: Number,
      default: 10,  
    },
    level: {
        type: Number,
      default: 1,  
    },
    expStart: {
      type: Number,
      default: 0,  
    },
    expStop: {
      type: Number,
      default: 200,  
    },
    owner: {
        type: String,
        require: true,
    }
});


export default mongoose.model("Hero", heroSchema);