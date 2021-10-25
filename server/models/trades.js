import mongoose from 'mongoose';

const tradeSchema = mongoose.Schema({
    
    owner: {
        type: String,
        require: true,
    },
    items: {
        firstItemForSell: {
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
        secondItemForSell: {
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
        thirdItemForSell: {
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
        forthItemForSell: {
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
        fifthItemForSell: {
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
        sixthItemForSell: {
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
    },
});



export default mongoose.model("Trades", tradeSchema);