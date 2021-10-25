import mongoose from 'mongoose';


const inventorySchema = mongoose.Schema({
   owner: {
        type: String,
        require: true,
    },
    firstItem: {
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
    secondItem: {
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
    thirdItem: {
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
    forthItem: {
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
    fifthItem: {
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
    sixthItem: {
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
    seventhItem: {
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
    eigthItem: {
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
    ninthItem: {
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
});

export  default mongoose.model("Inventory", inventorySchema);