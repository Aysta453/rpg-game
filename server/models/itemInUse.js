import mongoose from 'mongoose';


const itemInUseSchema = mongoose.Schema({
   owner: {
        type: String,
        require: true,
    },
    head: {
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
    },
    necklace: {
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
    },
    armor: {
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
    },
    pants: {
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
    },
    boots: {
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
    },
    weapon: {
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
    },
});


export default mongoose.model("ItemInUse", itemInUseSchema);