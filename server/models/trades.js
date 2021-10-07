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
        secondItemForSell: {
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
        thirdItemForSell: {
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
        forthItemForSell: {
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
        fifthItemForSell: {
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
        sixthItemForSell: {
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
        seventhItemForSell: {
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
        eigthItemForSell: {
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
        ninthItemForSell: {
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
        tenthItemForSell: {
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
        eleventhItemForSell: {
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
        twelfthItemForSell: {
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
        thirteenthItemForSell: {
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
        fourteenthItemForSell: {
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
        
    },
});



export default mongoose.model("Trades", tradeSchema);