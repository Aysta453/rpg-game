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
            default: false,
        },
        numberOfItem: {
            type: Number,
        },  
    },
    necklace: {
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
            default: false,
        },
        numberOfItem: {
            type: Number,
        },  
    },
    armor: {
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
            default: false,
        },
        numberOfItem: {
            type: Number,
        },  
    },
    pants: {
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
            default: false,
        },
        numberOfItem: {
            type: Number,
        },  
    },
    boots: {
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
            default: false,
        },
        numberOfItem: {
            type: Number,
        },  
    },
    weapon: {
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
            default: false,
        },
        numberOfItem: {
            type: Number,
        },  
    },
});


export default mongoose.model("ItemInUse", itemInUseSchema);