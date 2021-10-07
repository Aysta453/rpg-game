import mongoose from 'mongoose';

const statsSchema = mongoose.Schema({
    strength: {
        type: Number,
      default: 2,  
    },
    dexterity: {
        type: Number,
      default: 2,  
    },
    intellect: {
        type: Number,
      default: 2,  
    },
    stamina: {
        type: Number,
      default: 2,  
    },
    spirit: {
        type: Number,
      default: 2,   
    },
    owner: {
        type: String,
        require: true,
    }
});


export default mongoose.model("Stats", statsSchema);