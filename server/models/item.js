import mongoose from 'mongoose';


const itemSchema = mongoose.Schema({
   owner: {
        type: String,
        require: true,
    },
    nameOfItem: {
        type: String,
    },
    typeOfItem: {
        type: String,
    },
    attack: {
        type: Number, 
        default: 0,
    },
    defensive: {
        type: Number,
        default: 0,
    },
    strength: {
        type: Number,
        default: 0,  
    },
    dexterity: {
        type: Number,
        default: 0,  
    },
    intellect: {
        type: Number,
        default: 0,  
    },
    stamina: {
        type: Number,
        default: 0,  
    },
    spirit: {
        type: Number,
        default: 0,   
    },
    cost: {
        type: Number,
        default: 0,
    }
});

export  default mongoose.model("Item", itemSchema);